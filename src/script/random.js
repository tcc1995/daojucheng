!function ($) {

    let array_default = [];//排序前的li数组
    let array = [];//排序中的数组
    let prev = null;
    let next = null;


    //1.渲染列表页的数据-默认渲染第一页
    const $list = $('.list');
    $.ajax({
        url: 'http://localhost/phpJop/daojucheng/php/listdata.php',
        dataType: 'json'
    }).done(function (data) {
        let $strhtml = '<ul>';
        $.each(data, function (index, value) {
            $strhtml += `
                <li>
                        <div class="list_k">
                            <img class="lazy" data-original="${value.url}" width="116" height="212"/>
                        </div>
                        <p class="djname">${value.sid}${value.title}</p>
                        <div class="list_q">微信价：
                            <span class="price">&nbsp;&nbsp;&nbsp;￥${value.price}</span>
                        </div>
                        <span>${value.sailnumber}</span>
                        <div class="bxlist-t2 ">
                            <a href="detail.html?sid=${value.sid}" target="_blank">立即购买</a>
                        </div>

                </li>
            `;
        });
        $strhtml += '</ul>';
        $list.html($strhtml);

        //添加懒加载
        $(function () {
            $("img.lazy").lazyload({ effect: "fadeIn" });
        });

        array_default = [];//排序前的li数组
        array = [];//排序中的数组
        prev = null;
        next = null;
        //将页面的li元素加载到两个数组中
        $('.list li').each(function (index, element) {
            array[index] = $(this);
            array_default[index] = $(this);
        });
    });
}(jQuery);