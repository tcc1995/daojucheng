// 头部
!function($){
    let $game_menu=$('.righthead_menu .game_menu');
    let $game_pop=$('.game_pop');
    // let $righthead=$('.righthead');

    $game_menu.on('mouseover',function(){
        $game_pop.show();
        
    })
    $game_menu.on('mouseout', function () {
        $game_pop.hide();
    });
    $game_pop.on('mouseover', function () {
        $(this).show();
    });
    $game_pop.on('mouseout', function () {
        $(this).hide();
    });

}(jQuery)

// 搜索框
!function($){
    let $s_menu=$('.s_menu');
    let $s_menuA=$('.s_menu .aaa');
    let $s_menuS=$('.s_menu .aaa s');
    let $adda1=$('.adda1');
    let $choose_sub=$('.s_menu .choose_sub');
    // let $righthead=$('.righthead');

    
    $s_menu.on('mouseover',function(){
        $choose_sub.show();
        $s_menuA.addClass('adda1').css({
            'border-bottom':0,
            'height':37,    
            'background':'#fff',
            'position':'relative',
            'z-index':2
        });
        $s_menuS.css({
            'background-position':'-20px -25px'
        })

    })
    $s_menu.on('mouseout', function () {
        $choose_sub.hide();
        $s_menuA.removeClass('adda1').css({
            'border-bottom':'3px solid #efefef',
            'height':31,
            // 'background':'#fff',
            // 'position':'absolute',
            // 'z-index':0
        })
        $s_menuS.css({
            'background-position':'0 -25px'
        })
        
    });
    $choose_sub.on('mouseover', function () {
        $(this).show();
    });
    $choose_sub.on('mouseout', function () {
        $(this).hide();
    });

}(jQuery)

// 导航栏
!function ($) {
    //1.二级侧边栏效果
    let $bot = $('.box dl');
    let $col3 = $('.bot dd');
    // let $inner = $('.bot dd .inner');

    $bot.on('mouseover', function () {
        $(this).children().show();
        // $col3.show();
        // $inner.eq($(this).index()).show().siblings('.inner').hide();
    });
    $bot.on('mouseout', function () {
        // $bot.removeClass('active');
        $col3.hide();
    });
    $col3.on('mouseover', function () {
        $(this).show();
    });
    $col3.on('mouseout', function () {
        $(this).hide();
    });


    // 2.根据本地存储，显示用户信息
    // if (localStorage.getItem('username')) {
    //     $('.login').hide();
    //     $('.admin').show();
    //     $('.admin span').html(localStorage.getItem('username'));
    // }

    // $('.admin a').on('click', function () {
    //     $('.login').show();
    //     $('.admin').hide();
    //     localStorage.removeItem('username');
    // });

}(jQuery);
! function($) {
    const $lunbo = $('.lunbo1');
    const $picul = $('.lunbo1 ul');
    const $picli = $('.lunbo1 ul li'); //5个
    const $btnli = $('.lunbo1 ol li'); //5小圆圈按钮
    const $leftarrow = $('.left_fake');
    const $rightarrow = $('.right_fake');
    let $index = 0; //存放索引
    let $timer = null;
    //1.改变布局。
    let $clonebox = $picli.first().clone(true, true); //克隆
    let $liwidth = $picli.eq(0).width(); //追加
    $picul.append($clonebox).css({
        width: $picul.children().length * $liwidth
    });
    //2.点击小圆圈按钮，图片位置发生变化。
    $btnli.on('click', function() {
        $index = $(this).index() - 1; //存储当前的索引 -1代表切换过程里面$index++;
        
        tabswitch();
    });
    //3.显示左右箭头
    // $lunbo.hover(function() {
    //     $leftarrow.show();
    //     $rightarrow.show();
    //     clearInterval($timer)
    // }, function() {
    //     $leftarrow.hide();
    //     $rightarrow.hide();
    //     $timer = setInterval(() => {
    //         tabswitch();
    //     }, 2000);
    // });
    //4.箭头添加点击事件
    $rightarrow.on('click', function() {
        tabswitch();
        
    });
    $leftarrow.on('click', function() {
        $index -= 2; //本身-1，下面切换过程+1，总的-2
        tabswitch();
    });
    //切换过程，位置过程，封装出来。
    function tabswitch() {
        $index++;
        if ($index === $btnli.length + 1) { //鼠标右箭头
            $picul.css({
                left: 0
            });
            $index = 1;
        }
        if ($index === -1) { //鼠标左箭头
            $picul.css({
                left: -$btnli.length * $liwidth
            });
            $index = $btnli.length - 1; //4
        }
        if ($index === $btnli.length) { //添加类
            $btnli.eq(0).addClass('active').siblings('ol li').removeClass('active');
        } else {
            $btnli.eq($index).addClass('active').siblings('ol li').removeClass('active');
        }
        $picul.stop(true).animate({
            left: -$liwidth * $index
        });
    }

    $timer = setInterval(() => {
        // $rightarrow.click();
        tabswitch();
    }, 2000);


}(jQuery);