const Application = require("sf-core/application");
const System = require("sf-core/device/system");
const { getCombinedStyle } = require("sf-extension-utils/lib/getCombinedStyle");
const KeyboardType = require("sf-core/ui/keyboardtype");
const Color = require("sf-core/ui/color");
const Screen = require("sf-core/device/screen");
const extend = require('js-base/core/extend');
const PgRegisterActivationCode_11Design = require('ui/ui_pgRegisterActivationCode_11');

const PgRegisterActivationCode_11 = extend(PgRegisterActivationCode_11Design)(
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
	const {
		img_background,
		tvEnterDigits,
		tvSendToPhone,
		tvResendCode,
		btnResend,
		viewDigitCode,
		flexContainer,
		viewRemoveTouch,
		tbHidden,
		flexLayoutActivationCode1,
		flexLayoutActivationCode2,
		flexLayoutActivationCode3,
		flexLayoutActivationCode4,
		flexLayoutActivationCode5,
		flexLayoutActivationCode6
	} = page;
	img_background.height = Screen.height / 3 * 2;
	img_background.width = Screen.width / 3 * 2;

	tbHidden.keyboardType = KeyboardType.NUMBER;

	tvEnterDigits.text = "Enter the 6 digit code";
	tvSendToPhone.text = "We’ve send it to your phone number";
	tvResendCode.text = "You can re-send the code in 00:20"
	tvSendToPhone.scrollEnabled = false;
	tvEnterDigits.scrollEnabled = false;
	tvResendCode.scrollEnabled = false;

	viewDigitCode.onTouchEnded = () => {
		tbHidden.requestFocus();
	};
	viewRemoveTouch.onTouchEnded = () => {
		tbHidden.removeFocus();
	}

	var count = 0;
	var digits = [flexLayoutActivationCode1, flexLayoutActivationCode2, flexLayoutActivationCode3, flexLayoutActivationCode4, flexLayoutActivationCode5, flexLayoutActivationCode6];
	console.log("the digits length is : ", digits.length)

	tbHidden.onTextChanged = (e) => {
		if (e.insertedText == "" && count > 0) {
			count--;
			digits[count].tvDigit.text = e.insertedText;
			digits[count].tvLine.textColor = Color.create("#50FFFF");
			console.log("the inserted text is: ", typeof e.insertedText, " ## : ", e.insertedText, " count: ", count);
		}
		else if (isNaN(e.insertedText) == false && count < digits.length) {
			console.log("isNaN(e.insertedText) == ", isNaN(e.insertedText) == false);
			digits[count].tvDigit.text = e.insertedText;
			digits[count].tvLine.textColor = Color.WHITE;
			count++;
			console.log("the inserted text is: ", typeof e.insertedText, " ## : ", e.insertedText, " count: ", count);


		}
		else {
			var input = tbHidden.text;
			tbHidden.text = input.substring(0, input.length - 1);

		}
		console.log("the text is-------------: ", tbHidden.text)
	};
	Application.android.keyboardMode = Application.Android.KeyboardMode.KeyboardAdjustResize;

	btnResend.onPress = () => page.router.push("/pages/pgRegisterPersonalDetails_11");

}

module.exports = PgRegisterActivationCode_11;
