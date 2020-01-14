const Color = require("sf-core/ui/color");
const KeyboardType = require("sf-core/ui/keyboardtype");
const ImageView = require("sf-core/ui/imageview");
const extend = require('js-base/core/extend');
const Screen = require('sf-core/device/screen');
const Device = require('sf-core/device');
const { getCombinedStyle } = require("sf-extension-utils/lib/getCombinedStyle");

const PgRegisterPhoneNumber_1Design = require('ui/ui_pgRegisterPhoneNumber_1');

const PgRegisterPhoneNumber_1 = extend(PgRegisterPhoneNumber_1Design)(
	function(_super) {
		_super(this);
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
	}
);

function onShow(superOnShow) {
	superOnShow();
	// this.headerBar.visible = false;
	if(Device.System.OS === "iOS") {
    this.parentController.headerBar.borderVisibility = false;
	this.parentController.headerBar.visible = false;
	}
}

function onLoad(superOnLoad) {
	superOnLoad();
	const page = this;
	const { img_background, tvPhoneNumber, mtbCountry, mtbPhoneNumber, tvChangeNum, btnContinue } = page;
	img_background.height = Screen.height/3*2;
	img_background.width = Screen.width/3*2;
	
	const tvStyle = getCombinedStyle(".sf-textView");
	Object.assign(tvPhoneNumber, tvStyle);
	tvPhoneNumber.text = "Welcome to Smartbank,please register or login with your phone number to use app";
	tvPhoneNumber.maxLines = 5;
	
	// var imgShow = new ImageView({
	// 	image: "images://phone_number_icon_arrow.png",
	// 	height:10,
	// 	width:10
	// });
	
	mtbCountry.options = {
		hint: "COUNTRY",
		// rightLayout:{view: imgShow, width: 10, paddingBottom:1},
		keyboardType: KeyboardType.NUMBER,

	};
	mtbCountry.enableDropDown = true
	
	mtbPhoneNumber.options = {
		hint: "PHONE NUMBER",
		keyboardType: KeyboardType.NUMBER,
	};

	tvChangeNum.text =  "Changed your phone number?"; 
	btnContinue.onPress = () => page.router.push("/pages/pgRegisterPin_1");
	btnContinue.text = 'Continue';
}

module.exports = PgRegisterPhoneNumber_1;
