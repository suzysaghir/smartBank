const FlexLayout = require("sf-core/ui/flexlayout");
const TextView = require("sf-core/ui/textview");
const Timer = require("sf-core/timer");
const AlertView = require("sf-core/ui/alertview");
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
	tbHidden.text = "";
	tvEnterDigits.text = "Enter the 6 digit code";
	tvSendToPhone.text = "We’ve send it to your phone number";
	tvSendToPhone.scrollEnabled = false;
	tvEnterDigits.scrollEnabled = false;
	tvResendCode.scrollEnabled = false;
	btnResend.enabled = false;

	var count = 0;
	var digits = [flexLayoutActivationCode1, flexLayoutActivationCode2, flexLayoutActivationCode3, flexLayoutActivationCode4, flexLayoutActivationCode5, flexLayoutActivationCode6];
	// console.log("the digits length is : ", digits.length)

	tbHidden.onTextChanged = (e) => {
		var wrongCodeAlert = new AlertView({
			title: "Incorrect Digit Code",
			message: "please, try again"
		});
		wrongCodeAlert.addButton({
			type: AlertView.Android.ButtonType.NEGATIVE,
			text: "OK"
		});
		var input = tbHidden.text;
		var codes = ["111111", "000000", "123456"];
		var checkPass = () => {
			if (input.length == 6) {
				var exist = codes.includes(input);
				if (exist == false) { wrongCodeAlert.show(); }
				return exist;
			}
		};
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
		if (checkPass() == true) {
			page.router.push("/pages/pgRegisterPersonalDetails_11");
		}
		// console.log("the text is-------------: ", tbHidden.text)
	};

	function setTimer() {
		var myTimer = Timer.setInterval({
			task: changeBackgroundColor,
			delay: 1000
		});
	}
	var time = 10;

	function changeBackgroundColor() {
		if (time == 00) {
			btnResend.backgroundColor = Color.create("#37ffb9");
			btnResend.textColor = Color.create("#57cab3");
			btnResend.enabled = true;
			// btnResend.onPress = () => page.router.push("/pages/pgRegisterPersonalDetails_11");
		}
		else {
			time -= 1
			// tv.text = "00:" + time
			tvResendCode.text = "You can re-send the code in 00:" + time;
			
		}
	}
	setTimer();
	
	const keyboardtv = new TextView();
	const tbStyle = getCombinedStyle(".sf-textView");
	Object.assign(keyboardtv, tbStyle);

	keyboardtv.text = tvResendCode.text;
	keyboardtv.textColor = tvResendCode.textColor;
	keyboardtv.maxLines = tvResendCode.maxLines
	var flexKeyboard = new FlexLayout({
		height: 100,
		alignSelf: FlexLayout.AlignSelf.STRETCH,
		paddingRight: 16,
		paddingLeft: 16,

	});
	flexKeyboard.addChild(keyboardtv);
	viewDigitCode.ios.keyboardLayout = flexKeyboard;

	viewDigitCode.onTouchEnded = () => {
		tbHidden.requestFocus();
	};
	viewRemoveTouch.onTouchEnded = () => {
		tbHidden.removeFocus();
	}

	Application.android.keyboardMode = Application.Android.KeyboardMode.KeyboardAdjustResize;


}

module.exports = PgRegisterActivationCode_11;
