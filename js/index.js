// 热门学校
	$(document).ready(function(){
		$('.HotSchoold-list ul li').on({
		        mouseover: function() {
		           $(this).find('.lpdata-m').show();
		        },
		        mouseout: function() {
		            $(this).find('.lpdata-m').hide();
		        }
		    });
			
			
			/* 筛选条件 */
			$('.dropdown').on('mousemove',function(){
				$('.dropdown-l').hide();
				$(this).find('.dropdown-l').show();
			})
			$('.dropdown').on('mouseout',function(){
				$('.dropdown-l').hide();
			})
	});
	$(function(){
		/* 二级部导航轮播图 */
		$('#view').setZoomPicture({
			thumbsContainer: '#pics-thumbs',
			prevContainer: '#nav-left-thumbs',
			nextContainer: '#nav-right-thumbs',
			zoomContainer: '#zoom',
			zoomLevel: 2,
			loadMsg: 'Chargement...'
		});
	})
	