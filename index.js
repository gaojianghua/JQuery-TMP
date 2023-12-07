$(document).ready(function () {
    let currentPath = window.location.pathname; // 获取当前页面的路径

    $('.header .navbar a').each(function () {
        let linkPath = $(this).attr('href'); // 获取每个链接的路径
        console.log(currentPath, linkPath);
        if (currentPath == '/' && linkPath == '/index.html') {
            $(this).addClass('active'); 
        }else if (linkPath == currentPath) {
            $(this).addClass('active'); // 如果链接的路径与当前页面的路径相等，则添加 active 类
        }
    });
});