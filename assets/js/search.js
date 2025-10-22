// Search functionality using Fuse.js
(function() {
    'use strict';

    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const searchStats = document.getElementById('search-stats');
    const searchEmpty = document.getElementById('search-empty');
    const searchPlaceholder = document.getElementById('search-placeholder');
    const clearButton = document.getElementById('clear-search');

    // 如果不是搜索页面，直接返回
    if (!searchInput || !searchResults) return;

    let fuse = null;
    let searchData = [];

    // Load search index
    fetch('/index.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load search index');
            }
            return response.json();
        })
        .then(data => {
            if (!Array.isArray(data)) {
                throw new Error('Invalid search index format');
            }
            searchData = data;

            // Initialize Fuse.js with fuzzy search options
            fuse = new Fuse(searchData, {
                keys: [
                    { name: 'title', weight: 0.4 },
                    { name: 'summary', weight: 0.3 },
                    { name: 'content', weight: 0.2 },
                    { name: 'tags', weight: 0.05 },
                    { name: 'categories', weight: 0.05 }
                ],
                threshold: 0.4,
                includeScore: true,
                includeMatches: true,
                minMatchCharLength: 2,
                ignoreLocation: true
            });

            console.log('Search index loaded successfully:', searchData.length, 'posts');
        })
        .catch(error => {
            console.error('Error loading search index:', error);
            if (searchPlaceholder) {
                searchPlaceholder.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <p>搜索索引加载失败</p>
                    <small>请刷新页面重试</small>
                `;
            }
        });

    // Debounce function
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Perform search
    function performSearch(query) {
      console.log('performSearch', query);
        if (!fuse || !query.trim()) {
            showPlaceholder();
            return;
        }

        const results = fuse.search(query);
        displayResults(results, query);
    }

    // Display search results
    function displayResults(results, query) {
        searchPlaceholder.style.display = 'none';
        searchEmpty.style.display = 'none';

        if (results.length === 0) {
            searchStats.style.display = 'none';
            searchResults.innerHTML = '';
            searchEmpty.style.display = 'flex';
            return;
        }

        // Show stats
        searchStats.style.display = 'block';
        searchStats.innerHTML = `找到 <strong>${results.length}</strong> 篇相关文章`;

        // Render results
        const html = results.map(result => {
            const item = result.item;
            const score = (1 - result.score) * 100;

            // Highlight matched text in title
            let highlightedTitle = item.title;
            if (result.matches) {
                const titleMatch = result.matches.find(m => m.key === 'title');
                if (titleMatch) {
                    highlightedTitle = highlightMatches(item.title, titleMatch.indices);
                }
            }

            // Get excerpt with highlighting
            let excerpt = item.summary || item.content.substring(0, 200);
            if (result.matches) {
                const contentMatch = result.matches.find(m => m.key === 'content' || m.key === 'summary');
                if (contentMatch) {
                    excerpt = getExcerpt(item.content, contentMatch.indices[0]);
                }
            }

            return `
                <article class="search-result-item" data-score="${score.toFixed(0)}">
                    <div class="search-result-header">
                        <a href="${item.permalink}" class="search-result-title">
                            ${highlightedTitle}
                        </a>
                        <span class="search-result-date">${item.date}</span>
                    </div>
                    <p class="search-result-excerpt">${excerpt}...</p>
                    <div class="search-result-meta">
                        ${item.tags ? item.tags.map(tag => `<a href="/tags/${encodeURIComponent(tag)}/" class="search-result-tag">${tag}</a>`).join('') : ''}
                    </div>
                </article>
            `;
        }).join('');

        searchResults.innerHTML = html;
    }

    // Highlight matched text
    function highlightMatches(text, indices) {
        let result = '';
        let lastIndex = 0;

        indices.forEach(([start, end]) => {
            result += text.substring(lastIndex, start);
            result += `<mark class="search-highlight">${text.substring(start, end + 1)}</mark>`;
            lastIndex = end + 1;
        });

        result += text.substring(lastIndex);
        return result;
    }

    // Get excerpt around match
    function getExcerpt(text, match) {
        const [start] = match;
        const excerptStart = Math.max(0, start - 80);
        const excerptEnd = Math.min(text.length, start + 120);

        let excerpt = text.substring(excerptStart, excerptEnd);
        if (excerptStart > 0) excerpt = '...' + excerpt;
        if (excerptEnd < text.length) excerpt = excerpt + '...';

        return excerpt;
    }

    // Show placeholder
    function showPlaceholder() {
        searchPlaceholder.style.display = 'flex';
        searchEmpty.style.display = 'none';
        searchStats.style.display = 'none';
        searchResults.innerHTML = '';
    }

    // Event listeners
    searchInput.addEventListener('input', debounce(function(e) {
        const query = e.target.value;

        // Show/hide clear button
        clearButton.style.display = query ? 'flex' : 'none';

        performSearch(query);
    }, 300));

    // Enter key to search
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const query = e.target.value;
            performSearch(query);
        }
    });

    // Clear search
    clearButton.addEventListener('click', function() {
        searchInput.value = '';
        clearButton.style.display = 'none';
        showPlaceholder();
        searchInput.focus();
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // ESC to clear
        if (e.key === 'Escape' && document.activeElement === searchInput) {
            searchInput.value = '';
            clearButton.style.display = 'none';
            showPlaceholder();
        }

        // Ctrl+K or Cmd+K to focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }

        // / to focus search
        if (e.key === '/' && document.activeElement !== searchInput) {
            e.preventDefault();
            searchInput.focus();
        }
    });

})();

