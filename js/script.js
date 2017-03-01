//ios
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
   //alert(navigator.userAgent); 
   
   //add a new meta node of viewport in head node
	head = document.getElementsByTagName('head');
	viewport = document.createElement('meta');
	viewport.name = 'viewport';
	viewport.content = 'target-densitydpi=device-dpi, width=' + 640 + 'px, user-scalable=no';
	head.length > 0 && head[head.length - 1].appendChild(viewport);    
   
}
//android
//if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
//  //alert(navigator.userAgent);  
//  window.location.href ="iPhone.html";
//} else if (/(Android)/i.test(navigator.userAgent)) {
//  //alert(navigator.userAgent); 
//  window.location.href ="Android.html";
//} else {
//  window.location.href ="pc.html";
//};
//页面不足一屏，铺满一屏
	                  
//	
//	$('.layout').css('min-height',$(window).height());
	
$(function(){
	//点击滚屏
	$('.slides .nums li').click(function(){
		var n = $(this).index();
		$('.slides .list ul').stop().animate({'margin-left':-750 * n})
		$(this).addClass('selected').siblings().removeClass('selected');
		
	})
	
	//自动滚屏
	setInterval(function(){
		var cur = $('.slides .nums li.selected');
		if(cur.next().size()>0){
			var n = cur.index() + 1;
		}
		else{
			var n = 0;
		}
		$('.slides .list ul').animate({'margin-left':-750 * n});
		cur.removeClass('selected')
	    $('.slides .nums ul li').eq(n).addClass('selected');
		
	},2000)
	
	//n蓝色小标签nav初始化
	$('.nav .header em').animate({'left':$('.nav .header li.selected').offset().left})
	
	//交互
	$('.nav .header li').hover(function(){
		$('.nav .header li').removeClass('selected');
		$(this).addClass('selected')
		
		var n = $('.nav .header li.selected').index();	
		$('.nav .body').hide().eq(n).show();
	
	//蓝色小标签移动	
		var distance = $(this).offset().left;
		$('.nav .header em').stop().animate({'left':distance})
		
	})
	//底部显示蓝色
	$('.foot li').hover(function(){
		$(this).addClass('selected').siblings().removeClass('selected')
	})
	
		

	})




