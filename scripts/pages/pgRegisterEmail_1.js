const Font = require("sf-core/ui/font");
const Screen = require("sf-core/device/screen");
const extend = require('js-base/core/extend');
const PgRegisterEmail_1Design = require('ui/ui_pgRegisterEmail_1');

const PgRegisterEmail_1 = extend(PgRegisterEmail_1Design)(
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
	const { img_background, tvEmail, mtbEmail, btnContinue } = page;
	
	img_background.height = Screen.height/3*2;
	img_background.width = Screen.width/3*2;

	tvEmail.text = "What is your e-mail address?";
	tvEmail.option = {
		iOS:{
			titleFont: Font.create("Default", 12)
		}
	}
	
	mtbEmail.options = {
		hint: "EMAIL",
		font: Font.create("SFProText", 16, "Medium"),
		iOS: {
			titleFont: Font.create("Default", 12)
		}
	};
	
	btnContinue.onPress = () => page.router.push("/pages/pgRegisterAccountCreate_1");

}

module.exports = PgRegisterEmail_1;