// Global search shortcut - Ctrl+K or /
(function() {
    'use strict';

    document.addEventListener('keydown', function(e) {
        // Ctrl+K (Windows/Linux) or Cmd+K (Mac)
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            window.location.href = '/search/';
            return;
        }

        // Forward slash / - but not when typing in input fields
        if (e.key === '/' && !isTyping()) {
            e.preventDefault();
            window.location.href = '/search/';
            return;
        }
    });

    function isTyping() {
        const activeElement = document.activeElement;
        const tagName = activeElement.tagName.toLowerCase();

        return (
            tagName === 'input' ||
            tagName === 'textarea' ||
            tagName === 'select' ||
            activeElement.isContentEditable
        );
    }

})();

