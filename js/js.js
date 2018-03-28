//设置rem
(function(doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {

      var clientWidth = docEl.clientWidth;
      if(!clientWidth) return;
      if(clientWidth >= 750) {
        docEl.style.fontSize = '100px';
      } else {
        docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
      }
    };
  if(!doc.addEventListener) return;
  recalc();
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

$(function(){
	//
	$('.read').click(function(){
		$(this).siblings('.con').css('height','auto');
		$(this).hide();
		$(this).siblings('.mask').hide()
		$('.read2').show();
	})
	
	$('.read2').click(function(){
		$(this).siblings('.con').css('height','1.9rem');
		$(this).hide();
		$(this).siblings('.mask').show();
		$('.read').show();
	})
	//内容页点赞
  var zanNum=$('.zsj-vedio-ui .zan-num').html();
	var zanNum = 0;
	$('.zsj-vedio-ui .icon').click(function () {
		zanNum++;
		$('.zsj-vedio-ui .zan-num').html(zanNum);
	})
  //首页轮播
  var swiper = new Swiper('.sj-swiper',{
		pagination:'.swiper-pagination',
		slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true
	});
	//首页布局
	var WW = $(window).width();
	var HH = $(window).height();
	var imgW = $('.swiper-slide img').width();
	var imgH = $('.swiper-slide img').height();
	var indexBanH = $('.sj-swiper').height();
	var topH = $('.header').height();
	indexBanH = HH - WW - topH;
	console.log(HH);
	console.log(WW);
	console.log(topH);
	console.log(indexBanH);
	var liWidth = WW/3;
	var liHidth = liWidth;
	$('.sj-swiper').css('height',indexBanH);
	$('.index-menu li').css('width',liWidth);
	$('.index-menu li').css('height',liHidth);
	 var navLiW = WW/4;
	 $('.navlist').css('height',navLiW);
	$('.navlist li').css('height',navLiW);
  $('.navlist li').css('width',navLiW);
  
  //导航
  $('.nav').click(function(){
  	$('.navlist').slideToggle();
  })
	
	//家分享图片点赞
	var heart = $('.support .icon');
	var heartNum = $('.supportNum').html();
	    heartNum = 0;
	$('.supportNum').html(heartNum);
	
	heart.click(function(){
		$(this).find('img').attr('src','img/support1.png');
		var heartNow = $(this).siblings('.supportNum').html();
		heartNow++;
		$(this).siblings('.supportNum').html(heartNow);
	})
	
	//读者俱乐部选项
	$('.checkbox').click(function(){
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else{
			$(this).addClass('active').parent().siblings().find('.checkbox').removeClass('active');
				$(this).addClass('active').parent('.title').parent().siblings().find('.checkbox').removeClass('active');
		}
	})
	
	 
})
