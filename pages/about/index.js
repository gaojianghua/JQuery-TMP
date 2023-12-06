$("#header").load("../../layout/header/header.html");
$("#footer").load("../../layout/footer/footer.html");

$(function () {
    $(document).ready(function () {
        let images = ["swiper1.jpg", "swiper2.jpg", "swiper3.jpg", "swiper4.jpg", "swiper5.jpg"]; // 图片文件名数组

        let $imgsContainer = $(".imgs"); // 获取图片容器

        for (let i = 0; i < 2; i++) {
            images.forEach((item) => {
                let $imgItem = $('<div class="imgitem">'); // 创建一个新的图片项
                let $img = $("<img>").attr("src", "/assets/imgs/" + item).attr("class", "img"); // 创建一个新的图片元素，并设置其 src 属性
                $imgItem.append($img); // 将图片元素添加到图片项中
                $imgsContainer.append($imgItem); // 将图片项添加到图片容器中
            })
        }

        let cur, pre, next;
        let imgDoms = $(".imgitem");
        initImg();

        function initImg() {
            pre = 0;
            cur = 1;
            next = 2;
            $(imgDoms[pre]).addClass("pre-img");
            $(imgDoms[cur]).addClass("cur-img");
            $(imgDoms[next]).addClass("next-img");
        }
        $("#pre").click(function () {
            pre = pre - 1;
            cur = cur - 1;
            next = next - 1;
            if (next < 0) {
                next = imgDoms.length - 1;
            }
            if (cur < 0) {
                cur = imgDoms.length - 1;
            }
            if (pre < 0) {
                pre = imgDoms.length - 1;
            }
            $(".cur-img").removeClass("cur-img");
            $(imgDoms[cur]).addClass("cur-img");

            $(".pre-img").removeClass("pre-img");
            $(imgDoms[pre]).addClass("pre-img");

            $(".next-img").removeClass("next-img");
            $(imgDoms[next]).addClass("next-img");
        });
        $("#next").click(function () {
            pre += 1;
            cur += 1;
            next += 1;
            if (next > imgDoms.length - 1) {
                next = 0;
            }
            if (cur > imgDoms.length - 1) {
                cur = 0;
            }
            if (pre > imgDoms.length - 1) {
                pre = 0;
            }
            $(".cur-img").removeClass("cur-img");
            $(imgDoms[cur]).addClass("cur-img");

            $(".pre-img").removeClass("pre-img");
            $(imgDoms[pre]).addClass("pre-img");

            $(".next-img").removeClass("next-img");
            $(imgDoms[next]).addClass("next-img");
        });
    });
});
