const Font = require("sf-core/ui/font");
const Screen = require("sf-core/device/screen");
const { getCombinedStyle } = require("sf-extension-utils/lib/getCombinedStyle");

const extend = require('js-base/core/extend');
const PgRegisterPersonalDetails_11Design = require('ui/ui_pgRegisterPersonalDetails_11');

const PgRegisterPersonalDetails_11 = extend(PgRegisterPersonalDetails_11Design)(
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
	const { img_background, tvPersonalDetails, mtbFirstName, mtbLastName, mtbBirthDate, btnContinue } = page;
	
	img_background.height = Screen.height/3*2;
	img_background.width = Screen.width/3*2;

	tvPersonalDetails.text = "What are your personal details?";
	tvPersonalDetails.option = {
		iOS:{
			titleFont: Font.create("Default", 12)
		}
	}
	
	mtbFirstName.options = {
		hint: "FIRST NAME ",
		font: Font.create("SFProText", 16, "Medium"),
		iOS: {
			titleFont: Font.create("Default", 12)
		}
	};
	mtbLastName.options = {
		hint: "LAST NAME ",
		font: Font.create("SFProText", 16, "Medium"),
		iOS: {
			titleFont: Font.create("Default", 12)
		}
	};
	mtbBirthDate.options = {
		hint: "DATE OF BIRTH ",
		font: Font.create("SFProText", 16, "Medium"),
		iOS: {
			titleFont: Font.create("Default", 12)
		}
	};
	
	btnContinue.onPress = () => page.router.push("/pages/pgRegisterAddress");

}

module.exports = PgRegisterPersonalDetails_11;
