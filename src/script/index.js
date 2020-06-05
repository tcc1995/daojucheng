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