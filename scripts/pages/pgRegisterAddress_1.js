const Font = require("sf-core/ui/font");
const Screen = require("sf-core/device/screen");

	const extend = require('js-base/core/extend');
const PgRegisterAddress_1Design = require('ui/ui_pgRegisterAddress_1');

const PgRegisterAddress_1 = extend(PgRegisterAddress_1Design)(
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
	const { img_background, tvAddressDetails, mtbCountry, mtbPostalCode, mtbAddress, btnContinue } = page;
	
	img_background.height = Screen.height/3*2;
	img_background.width = Screen.width/3*2;

	tvAddressDetails.text = "What is your home address?";
	tvAddressDetails.option = {
		iOS:{
			titleFont: Font.create("Default", 12)
		}
	}
	
	mtbCountry.options = {
		hint: "COUNTRY",
		font: Font.create("SFProText", 16, "Medium"),
		iOS: {
			titleFont: Font.create("Default", 12)
		}
	};
	mtbPostalCode.options = {
		hint: "POSTAL CODE",
		font: Font.create("SFProText", 16, "Medium"),
		iOS: {
			titleFont: Font.create("Default", 12)
		}
	};
	mtbAddress.options = {
		hint: "ADDRESS",
		font: Font.create("SFProText", 16, "Medium"),
		iOS: {
			titleFont: Font.create("Default", 12)
		}
	};
	
	btnContinue.onPress = () => page.router.push("/pages/pgRegisterEmail_1");

}

module.exports = PgRegisterAddress_1;
