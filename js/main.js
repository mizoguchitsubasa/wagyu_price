$(function(){
  $('a[href^="a"]').click(function() { /* ①クリックアクションを設定 */
    var speed = 500; /* ②スクロールの速さを指定 */
    var href= $(this).attr('href'); /* ③クリックするリンクの位置の値を取得 */
    var target = $(href == "a" || href == "" ? 'html' : href); /* ④スクロール先を取得 */
    var position = target.offset().top; /* ⑤ページのトップからスクロール先までの位置を数値として取得 */
    $('body,html').animate({scrollTop: position}, speed, 'swing'); /* ⑥スクロールのアニメーション設定 */
    return false; /* ⑦falseを返し、URLに影響を与えないようにする */
  });
});