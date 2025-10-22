/**
 * 返回顶部按钮功能
 * - 滚动300px后显示按钮
 * - 点击平滑滚动到顶部
 * - 节流优化性能
 */

(function() {
    'use strict';

    // 获取返回顶部按钮
    const backToTopButton = document.getElementById('back-to-top');

    if (!backToTopButton) {
        return;
    }

    // 显示/隐藏按钮的阈值（像素）
    const SHOW_THRESHOLD = 300;

    // 节流函数
    function throttle(func, wait) {
        let timeout;
        let lastRan;

        return function executedFunction() {
            const context = this;
            const args = arguments;

            if (!lastRan) {
                func.apply(context, args);
                lastRan = Date.now();
            } else {
                clearTimeout(timeout);
                timeout = setTimeout(function() {
                    if ((Date.now() - lastRan) >= wait) {
                        func.apply(context, args);
                        lastRan = Date.now();
                    }
                }, wait - (Date.now() - lastRan));
            }
        };
    }

    // 检查滚动位置并显示/隐藏按钮
    function checkScrollPosition() {
        // 获取当前滚动位置
        // 需要同时检查content容器和window，因为Poison主题使用了自定义滚动容器
        const contentContainer = document.querySelector('.content.container');
        let scrollTop = 0;

        if (contentContainer) {
            scrollTop = contentContainer.scrollTop;
        } else {
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        }

        // 根据滚动位置显示或隐藏按钮
        if (scrollTop > SHOW_THRESHOLD) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    }

    // 平滑滚动到顶部
    function scrollToTop() {
        const contentContainer = document.querySelector('.content.container');

        if (contentContainer) {
            // Poison主题使用自定义滚动容器
            contentContainer.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // 降级方案：使用window滚动
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }

    // 使用节流优化滚动事件
    const throttledCheckScroll = throttle(checkScrollPosition, 100);

    // 监听滚动事件
    const contentContainer = document.querySelector('.content.container');
    if (contentContainer) {
        contentContainer.addEventListener('scroll', throttledCheckScroll);
    } else {
        window.addEventListener('scroll', throttledCheckScroll);
    }

    // 监听按钮点击事件
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToTop();

        // 触发点击反馈
        this.style.transform = 'translateY(-2px) scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });

    // 页面加载时检查一次滚动位置
    checkScrollPosition();

})();

