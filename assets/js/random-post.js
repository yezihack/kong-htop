/**
 * Random Post Navigation
 * 随机访问文章功能
 */

(function() {
    'use strict';

    // 获取所有文章列表
    async function fetchPosts() {
        try {
            const response = await fetch('/index.json');
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            const data = await response.json();
            return Array.isArray(data) ? data : [];
        } catch (error) {
            console.error('Error fetching posts:', error);
            return [];
        }
    }

    // 获取随机文章
    function getRandomPost(posts) {
        if (posts.length === 0) return null;
        const randomIndex = Math.floor(Math.random() * posts.length);
        return posts[randomIndex];
    }

    // 初始化随机文章按钮
    function initRandomPost() {
        const randomBtn = document.getElementById('random-post-btn');

        if (!randomBtn) {
            console.warn('Random post button not found');
            return;
        }

        console.log('Random post button initialized');

        randomBtn.addEventListener('click', async (e) => {
            e.preventDefault();

            // 显示加载状态
            randomBtn.classList.add('loading');
            const originalText = randomBtn.querySelector('.random-text').textContent;
            randomBtn.querySelector('.random-text').textContent = '加载中...';
            randomBtn.disabled = true;

            try {
                const posts = await fetchPosts();

                if (posts.length === 0) {
                    console.warn('No posts found');
                    randomBtn.querySelector('.random-text').textContent = '无文章';
                    setTimeout(() => {
                        randomBtn.querySelector('.random-text').textContent = originalText;
                        randomBtn.classList.remove('loading');
                        randomBtn.disabled = false;
                    }, 2000);
                    return;
                }

                const randomPost = getRandomPost(posts);

                if (randomPost && randomPost.permalink) {
                    console.log('Navigating to random post:', randomPost.title, randomPost.permalink);
                    window.location.href = randomPost.permalink;
                } else {
                    console.error('Invalid post selected:', randomPost);
                    console.log('Posts data:', posts);
                    randomBtn.querySelector('.random-text').textContent = '出错了';
                    setTimeout(() => {
                        randomBtn.querySelector('.random-text').textContent = originalText;
                        randomBtn.classList.remove('loading');
                        randomBtn.disabled = false;
                    }, 2000);
                }
            } catch (error) {
                console.error('Error getting random post:', error);
                randomBtn.querySelector('.random-text').textContent = '出错了';
                randomBtn.classList.remove('loading');
                randomBtn.disabled = false;
                setTimeout(() => {
                    randomBtn.querySelector('.random-text').textContent = originalText;
                }, 2000);
            }
        });
    }

    // DOM 加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initRandomPost);
    } else {
        initRandomPost();
    }

})();

