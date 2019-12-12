
const extend = require('js-base/core/extend');
const SplashDesign = require('ui/ui_splash');
const Color = require('sf-core/ui/color');

const Splash = extend(SplashDesign)(
	function(_super) {
		_super(this);
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
	
		// const page = this;
		var startColor = Color.create("#53D9F5");
		var endColor = Color.create("#7AE8FF");
		var dir = Color.GradientDirection.DIAGONAL_RIGHT;
		this.backgroundColor =  Color.createGradient({
			direction: dir , 
			startColor: startColor, 
			endColor: endColor
			
		});
			
		}
);

function onShow(superOnShow) {
	superOnShow();
}

function onLoad(superOnLoad) {
	superOnLoad();

}

module.exports = Splash;
