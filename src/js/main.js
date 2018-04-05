'use strict';


!(function () {
	var c1 = document.getElementsByClassName("category-item--1");
	var c2 = document.getElementsByClassName("category-item--2");
	var screenWidth = window.screen.width / 2,
		screenHeight = window.screen.height / 2,
		$elems = document.getElementsByClassName("category-item__img"),
		validPropertyPrefix = '',
		otherProperty = 'perspective(1000px)',
		elemStyle = c1[0].style;

		if(typeof elemStyle.webkitTransform == 'string') {
			validPropertyPrefix = 'webkitTransform';
		} else if (typeof elemStyle.MozTransform == 'string') {
			validPropertyPrefix = 'MozTransform';
		}

		c1[0].addEventListener('mousemove', function (e) {
			var centroX = e.clientX - screenWidth,
				centroY = screenHeight - (e.clientY + 13),
				degX = centroX * 0.03,
				degY = centroY * 0.03,
				$elem;

	    $elems[0].style[validPropertyPrefix] = otherProperty + 'rotateY('+ degX +'deg)  rotateX('+ degY +'deg) scale3D(1,1,1)';
		});
		c2[0].addEventListener('mousemove', function (e) {
			var centroX = e.clientX - screenWidth,
				centroY = screenHeight - (e.clientY + 13),
				degX = centroX * 0.03,
				degY = centroY * 0.03,
				$elem;

	    $elems[1].style[validPropertyPrefix] = otherProperty + 'rotateY('+ degX +'deg)  rotateX('+ degY +'deg) scale3D(1,1,1)';
		});
})();

window.onscroll = function() {
  var
		scrolled = window.pageYOffset || document.documentElement.scrollTop,
  	innerHeight = document.documentElement.clientHeight,
  	scheme = document.getElementById('scheme-section'),
  	selectColor = document.getElementById('select-color');

  if (scheme.offsetTop - innerHeight < scrolled) {
    var height = scheme.scrollHeight + selectColor.scrollHeight/2;
		var elements = document.getElementsByClassName('scheme-demo__elem');

		Array.prototype.forEach.call(elements, function(el) {
				var trY = 0;
		    var trX = 0;

				if (el.dataset.top !== undefined) {
		      trY = -el.dataset.top;
		    }
		    if (el.dataset.bottom !== undefined) {
		      trY = el.dataset.bottom;
		    }
		    if (el.dataset.right !== undefined) {
		      trX = el.dataset.right;
		    }
		    if (el.dataset.left !== undefined) {
		      trX = -el.dataset.left;
		    }

				var dynamicStep = scrolled - (scheme.offsetTop - innerHeight);
				var translateX = trX*dynamicStep/height;
				var translateY = trY*dynamicStep/height;

				if (scrolled < (scheme.offsetTop + innerHeight)) {
					el.style = 'transform: translate('+ translateX +'px, ' + translateY + 'px)';
				}
		});

  }
};


// palette
(function(){
	var paletteColor = document.getElementsByClassName('palette__item');
	var imgs = document.getElementsByClassName('palette__img');

	var _onClickPalette = function(event){
		var target = event.target;
		var articul = target.dataset.img;

		Array.prototype.forEach.call(imgs, function(elem) {
			elem.classList.remove('palette__img--active');
			if(elem.dataset.img == articul) {
				elem.classList.add("palette__img--active");
			}
		});
	}

	Array.prototype.forEach.call(paletteColor, function(elem) {
		elem.addEventListener( "click" , _onClickPalette);
	});
}());


// elements fasad system
(function(){
	console.log(window);
	var elements = document.getElementsByClassName('elements__item');
	var elementsNum = document.getElementsByClassName('elements__num');

	var _mouseOver = function(event){
		var target = event.target;
		var num = target.dataset.num;

		Array.prototype.forEach.call(elementsNum, function(elem) {
			elem.classList.remove('elements__num--active');
			if(elem.dataset.num == num) {
				elem.classList.add("elements__num--active");
			}
		});
	};

	var _mouseOut = function(event){
		Array.prototype.forEach.call(elementsNum, function(elem) {
			elem.classList.remove('elements__num--active');
		});
	}

	Array.prototype.forEach.call(elements, function(elem) {
		elem.addEventListener( "mouseover" , _mouseOver);
		elem.addEventListener( "mouseout" , _mouseOut);
	});
}());
