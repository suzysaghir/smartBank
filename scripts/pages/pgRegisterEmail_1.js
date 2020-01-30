const Button = require("sf-core/ui/button");
const FlexLayout = require("sf-core/ui/flexlayout");
const Application = require("sf-core/application");
const AlertView = require("sf-core/ui/alertview");
const KeyboardType = require("sf-core/ui/keyboardtype");
const System = require("sf-core/device/system");
const Font = require("sf-core/ui/font");
const Screen = require("sf-core/device/screen");
const extend = require('js-base/core/extend');
const PgRegisterEmail_1Design = require('ui/ui_pgRegisterEmail_1');
const { getCombinedStyle } = require("sf-extension-utils/lib/getCombinedStyle");


const PgRegisterEmail_1 = extend(PgRegisterEmail_1Design)(
	function(_super) {
		_super(this);
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
		this.setMaterialTextBox = function() {
			const page = this;
			const { mtbEmail } = page;
			mtbEmail.options = {
				hint: "EMAIL",
				font: Font.create("SFProText", 16, "Medium"),
				keyboardType: KeyboardType.EMAILADDRESS,
				// enableErrorMessage: true,
				titleFont: Font.create("Default", 12)
			};
		}.bind(this);
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
	// this.headerBar.borderVisibility = false;

}

function onLoad(superOnLoad) {
	superOnLoad();
	const page = this;
	page.setMaterialTextBox();

	const { img_background, tvEmail, mtbEmail, btnContinue } = page;

	mtbEmail.materialTextBox.onActionButtonPress = isItValidate;
	img_background.height = Screen.height / 3 * 2;
	img_background.width = Screen.width / 3 * 2;
	btnContinue.onPress = () => isItValidate();

	tvEmail.text = "What is your e-mail address?";
	const myButton = new Button();
	const btnStyle = getCombinedStyle(".sf-button");
	Object.assign(myButton, btnStyle);

	myButton.text = btnContinue.text;
	myButton.onPress = btnContinue.onPress

	var flexKeyboard = new FlexLayout({
		height: 100,
		alignSelf: FlexLayout.AlignSelf.STRETCH,
		paddingRight: 16,
		paddingLeft: 16,

	});
	flexKeyboard.addChild(myButton);
	mtbEmail.materialTextBox.ios.keyboardLayout = flexKeyboard;

	tvEmail.option = {
		ios: { titleFont: Font.create("Default", 12) }
	}


	// mtbEmail.onActionButtonPress = function(e) {
	// 	isItValidate;
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
		// var re = /\S+@\S+\.\S+/;
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		// console.log(re.test("suzy.s@hotmail.com"))
		return re.test(email);
	}

	function isItValidate() {
		// console.log("the text is : ", mtbEmail.materialTextBox.text)
		var result = validateEmail(mtbEmail.materialTextBox.text);
		// console.log("the result is: ", result);
		if (result === false) {
			errorAlert.show()
		}
		else{
			page.router.push("/pages/pgRegisterAccountCreate_1");
		}

	}
	Application.android.keyboardMode = Application.Android.KeyboardMode.KeyboardAdjustResize;

}

module.exports = PgRegisterEmail_1;
