var Fireworks = function(){
	/*=============================================================================*/	
	/* Utility
	/*=============================================================================*/
	var self = this;
	var rand = function(rMi, rMa){return ~~((Math.random()*(rMa-rMi+1))+rMi);}
	var hitTest = function(x1, y1, w1, h1, x2, y2, w2, h2){return !(x1 + w1 < x2 || x2 + w2 < x1 || y1 + h1 < y2 || y2 + h2 < y1);};
	window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}();