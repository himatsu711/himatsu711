$(function(){
    $('body').append('<div id="curtain">');

    // 追加したdivを塗りつぶしてから透明化アニメーション
    $('#curtain').css({
        position: 'absolute',
        left: 0, top: 0,
        width: '100%', height: '100%',
        backgroundColor: '#fff',
        opacity: 100
    }).animate({
        opacity: 0
    }, 2250, function () {
        // アニメーション終了後に自身を消す
        $(this).remove();
    });

    $('#top-btn').click(function(){
        $('html,body').animate({
            'scrollTop':0
        },'slow');
    });
});
