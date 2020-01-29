const Application = require("sf-core/application");
const AlertView = require("sf-core/ui/alertview");
const KeyboardType = require("sf-core/ui/keyboardtype");
const System = require("sf-core/device/system");
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
	if (System.OS === "Android") {
		this.headerBar = this.headerBar;
	}
	else {
		this.headerBar = this.parentController.headerBar;
	}
	this.headerBar.borderVisibility = false;

}

function onLoad(superOnLoad) {
	superOnLoad();
	const page = this;
	const { img_background, tvEmail, mtbEmail, btnContinue } = page;

	img_background.height = Screen.height / 3 * 2;
	img_background.width = Screen.width / 3 * 2;

	tvEmail.text = "What is your e-mail address?";
	tvEmail.option = {

		iOS: {
			titleFont: Font.create("Default", 12)
		}
	}

	mtbEmail.options = {
		hint: "EMAIL",
		font: Font.create("SFProText", 16, "Medium"),
		keyboardType: KeyboardType.EMAILADDRESS,
		// onActionButtonPress: isItValidate,
		enableErrorMessage: true,
		iOS: {
			titleFont: Font.create("Default", 12)
		}
	};
	// mtbEmail.onActionButtonPress: function(e) {
	// 	function: isItValidate;
	// }
	
	// /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	var errorAlert = new AlertView({
		title: "Incorrect Email",
		message: "Email Address Not Found!!"
	});
	errorAlert.addButton({
		index: AlertView.ButtonType.NEGATIVE,
		text: "Cancel"
	});
	errorAlert.addButton({
		index: AlertView.ButtonType.POSITIVE,
		text: "OK",
		onClick: function() {
			console.log("OK clicked.");
		}
	});

	function validateEmail(email) {
		var re = /\S+@\S+\.\S+/;
		return re.test(email);
	}

	function isItValidate() {
		console.log("the text is : ", mtbEmail.text)
		var result = validateEmail(mtbEmail.text);
		console.log("the result is: ", result);
		if (result === false) {
			errorAlert.show()
		}

	}
	Application.android.keyboardMode = Application.Android.KeyboardMode.KeyboardAdjustResize;
	btnContinue.onPress = () => page.router.push("/pages/pgRegisterAccountCreate_1");

}

module.exports = PgRegisterEmail_1;
