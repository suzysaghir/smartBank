const System = require("sf-core/device/system");
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
	
   if (System.OS === "Android") {
        this.headerBar = this.headerBar;
        console.log("header and")
    }
    else {
        this.headerBar = this.parentController.headerBar;
                console.log("header ios")

    }
    // this.headerBar.visible = false;
    // this.headerBar.borderVisibility = false;
    // console.log("the header is: ",    this.headerBar.visible)
}

function onLoad(superOnLoad) {
	superOnLoad();
	const page = this;	 
	const { tvAccountCreate, btnDone } = page;

	tvAccountCreate.text ="Your Smartbank account has been created.";
	tvAccountCreate.maxLines = 2;
	tvAccountCreate.scrollEnabled = false;

	page.router = require("routes");
	btnDone.onPress = () => page.router.push("/tabs");


	// img_background.height = Screen.height;
	// img_background.width = Screen.width;
}

module.exports = PgRegisterAccountCreate_1;
