$(function(){
	navMouseout('.header-main-left','.header-main-left .hide-e');
	navMouseout('.show-nav','.hide-nav');
	
	var m_swiperv = new Swiper('#m-swiperv',{
			          // autoplay:true,  //自动切换
	  autoplay:5000,
	  loop : true,    //循环
	  prevButton:'.swiper-button-prev',
	 nextButton:'.swiper-button-next',
			    });
				var galleryThumbs = new Swiper('.gallery-thumbs', {
				      spaceBetween: 10,
				      slidesPerView: 4,
				      loop: true,
				      freeMode: true,
				      loopedSlides: 5, //looped slides should be the same
				      watchSlidesVisibility: true,
				      watchSlidesProgress: true,
				    });
				    var galleryTop = new Swiper('.gallery-top', {
				      spaceBetween: 10,
				      loop:true,
				      loopedSlides: 5, //looped slides should be the same
				      navigation: {
				        nextEl: '.swiper-button-next',
				        prevEl: '.swiper-button-prev',
				      },
				      thumbs: {
				        swiper: galleryThumbs,
				      },
				    });
					
})
function navMouseout (id,id1){
	$(id).on({
		mouseover:function(){
			$(id1).show();
		},
		mouseout:function(){
			$(id1).hide();
		}
	});
}