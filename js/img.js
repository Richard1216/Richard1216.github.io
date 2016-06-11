

  
    $('div.col-md-12 > .btn').each(function (index) {

        // 這裡的 this 是目前被尋訪的 element
        // $(this).bind() 是將目前被尋訪的 element 的 click 的事件與匿名函式綁在一起。
        $(this).bind('click', function () {
            console.log('index:' + index + ' 按到了喔');

            // 抓出 img 中的第 index 個
            var img = $('img:eq(' + index + ' )');

            // 判斷img是否有 visible 屬性
            if (img.is(":visible")) {
                // 將 img 在網頁中隱藏
                img.hide();
            } else {
                // 將 img 在網頁中顯示
                img.show();
            }
        });
    });
