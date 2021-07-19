/// basic tab (WAI-ARIA Roles)
$(document).ready(function(){
	$(".tabpanel:first-of-type").addClass("on").attr("tabindex", "0");
	$(".js-tab").eq(0).addClass("on");
	$(".js-tab").eq(0).find('a').attr("tabindex", "0").attr("aria-selected", "true").attr("title","열림");



	$(".js-tab a").on("click", function(event){
		if (event.preventDefault) {
			event.preventDefault()
		} else {
			event.returnValue = false
		}
		var $this = $(this),
			$scope = $this.parents('.ui-tablist'),
			$tabButtons = $scope.find('.js-tab'),
			$ovTab = $tabButtons.filter('.on')
		if ($ovTab[0] !== $this[0]) {
			var $tabPanels = $scope.find('.tabpanel'),
				$ovPanel = $tabPanels.filter('.on')
			$ovTab.removeClass('on');
			$ovTab.children('a').attr('aria-selected', 'false');
			$ovTab.children('a').attr("title","숨김");

			$this.parent('li').addClass('on');
			$this.attr('aria-selected', 'true');
			$this.attr("title","열림");
			var href = $this.attr("aria-controls");
			$ovPanel.removeClass('on');
			$("[id="+href+"]").addClass('on');


		}
		event.preventDefault();
        $('div[data-slider]').slick('setPosition');
	});

	 //gnb
    $('.gnb_wrap .gnb_btn').click(function (e) {
        $('.gnb_wrap').toggleClass('on');
        if ($('.gnb_wrap').hasClass('on')) {
            $('.gnb_wrap').animate({left:0},500);
            $('#body_layout .layout').animate({right:-240},500);
        }else{
            $('.gnb_wrap').animate({left:-240},500);
            $('#body_layout .layout').animate({right:0},500);
        }
    });
    //mb gnb
    $('.btn-allmenu').click(function (e) {
        $('body').addClass('mb_gnb');
        $('.gnb_wrap').addClass('on');
    });
    $('.gnb_wrap .inner .mobile-close').click(function (e) {
        $('body').removeClass('mb_gnb');
        $('.gnb_wrap').removeClass('on');
    });

	new_slide1();
	new_slide2();
	story_cont3();
});


function new_slide1(){
    var param = "#new_slide1",
        obj = ".item",
        btn = "#new_slide1 .control",
        interval = 3000,
        speed = 300,
        viewSize = 0,
        moreSize = 0,
        dir = "x",
        data = 0,
        auto = false,
        hover = false,
        method = "easeInOutCubic",
        op1 = false;
    stateScrollObj(param,obj,btn,interval,speed,viewSize,moreSize,dir,data,auto,hover,method,op1);
}
function new_slide2(){
    var param = "#new_slide2",
        obj = ".item",
        btn = "#new_slide2 .control",
        interval = 3000,
        speed = 300,
        viewSize = 0,
        moreSize = 0,
        dir = "x",
        data = 0,
        auto = false,
        hover = false,
        method = "easeInOutCubic",
        op1 = false;
    stateScrollObj(param,obj,btn,interval,speed,viewSize,moreSize,dir,data,auto,hover,method,op1);
}
function story_cont3()  {
    var $boardList = $("#tab-panel2 .story_cont3");
    var $mainslider = $boardList.find('.photo_list--slider');

    $mainslider.slick({
	  	centerMode: true,
        draggable: true,
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        speed: 700,
        autoplay:false,
        prevArrow : $boardList.find('.prev'),
        nextArrow : $boardList.find('.next'),
        responsive: [{
            breakpoint: 768,
            settings: {
                dots: true,
                variableWidth: false,
                centerMode: false
            }
        }]
    });
}