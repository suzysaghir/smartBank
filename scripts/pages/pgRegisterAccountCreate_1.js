const Screen = require("sf-core/device/screen");
const { getCombinedStyle } = require("sf-extension-utils/lib/getCombinedStyle");

const extend = require('js-base/core/extend');
const PgRegisterAccountCreate_1Design = require('ui/ui_pgRegisterAccountCreate_1');

const PgRegisterAccountCreate_1 = extend(PgRegisterAccountCreate_1Design)(
	function(_super) {
		_super(this);
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
	}
);

function onShow(superOnShow) {
	superOnShow();
}

function onLoad(superOnLoad) {
	superOnLoad();
	const page = this;	 
	const { tvAccountCreate, btnDone } = page;

	tvAccountCreate.text ="Your Smartbank account has been created.";
	tvAccountCreate.maxLines=2;
	btnDone.onPress = () => page.router.push("/tabs");


	// img_background.height = Screen.height;
	// img_background.width = Screen.width;
}

module.exports = PgRegisterAccountCreate_1;
