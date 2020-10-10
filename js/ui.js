$(document).ready(function(){
    var burger = $('.menu-trigger');
    burger.each(function(index){
        var $this = $(this);
        
        $this.on('click', function(e){
            e.preventDefault();
            $(this).toggleClass('active-' + (index+1));
            if($(this).hasClass('active-1')){
                $('nav').show();
                $('html, body').toggleClass("not_scroll")
                $("header").addClass("scroll");
                $('.menu-trigger span').css('background-color','black')
            }
            else if($(document).scrollTop() > 1){
                $('nav').hide();
                $("header").addClass("scroll")
                $('html, body').toggleClass("not_scroll")
            }
            else{
                $('nav').hide();
                $('html, body').toggleClass("not_scroll")
                $("header").removeClass("scroll")
                $('.menu-trigger span').css('background-color','white')
            }
        })
    });
    // 헤더 스크롤 이벤트
	window.onscroll = function(){
		if($(document).scrollTop() > 1){
            $("header").addClass("scroll");
            $('.menu-trigger span').css('background-color','black')
            
		}else{
            $("header").removeClass("scroll");
            $('.menu-trigger span').css('background-color','white')
            
		}
    }
    // 비주얼 슬라이드
			new Swiper('#visual', {
				slidesPerView: '1',
				autoplay: {
					delay: 5000,
					disableOnInteraction: false,
				},
				speed : 500,
				navigation: {
					nextEl: '#visual .swiper-button-next',
					prevEl: '#visual .swiper-button-prev',
				},
			});

			//특별기획전 슬라이드
			new Swiper('#product', {
				slidesPerView: '1',
				effect: 'fade',
				autoplay: {
					delay: 3500,
					disableOnInteraction: false,
				},
				speed : 500,
				pagination: {
					el: '#product .swiper-pagination',
					type: 'fraction',
				},
				navigation: {
					nextEl: '#service .swiper-button-next',
					prevEl: '#service .swiper-button-prev',
                },
            });
})
