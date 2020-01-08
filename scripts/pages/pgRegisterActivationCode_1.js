const KeyboardType = require("sf-core/ui/keyboardtype");
const Color = require("sf-core/ui/color");
const Screen = require("sf-core/device/screen");
const extend = require('js-base/core/extend');
const { getCombinedStyle } = require("sf-extension-utils/lib/getCombinedStyle");
const PgRegisterActivationCode_1Design = require('ui/ui_pgRegisterActivationCode_1');

const PgRegisterActivationCode_1 = extend(PgRegisterActivationCode_1Design)(
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
	const { img_background, tvEnterDigits, tvSendToPhone, tvResendCode, btnResend, viewDigitCode, flexContainer, viewRemoveTouch, tbHidden,
			tvDigit1, tvDigit2, tvDigit3, tvDigit4, tvDigit5, tvDigit6,
			tvLine1, tvLine2, tvLine3, tvLine4, tvLine5, tvLine6 } = page;

	img_background.height = Screen.height;
	img_background.width = Screen.width;
			
	// const {tvEnterDigits, tvSendToPhone, btnResend, viewDigitCode, tbHidden,
	tbHidden.visible = false;

	const tvStyle = getCombinedStyle(".sf-textView");
	Object.assign(tvEnterDigits, tvStyle);
	tvEnterDigits.text ="Enter the 6 digit code";
	tvSendToPhone.text = "We’ve send it to your phone number";
	tvSendToPhone.textColor = Color.create(203, 244, 255);
	tvResendCode.text = "You can re-send the code in 00:20"
			
	// var passCodePos = flexContainer.getScreenLocation();
	// viewDigitCode.left = passCodePos.x + 30; 
	// viewDigitCode.top = passCodePos.y + 30;
	viewDigitCode.onTouchEnded = () => {
		 tbHidden.requestFocus();
		 tbHidden.KeyboardType = KeyboardType.NUMBER;
	};
	viewRemoveTouch.onTouchEnded = () => {
		 tbHidden.removeFocus();

		}
		
	var count = -1;
	var digits = [tvDigit1, tvDigit2, tvDigit3, tvDigit4, tvDigit5, tvDigit6];
	var lines = [tvLine1, tvLine2, tvLine3, tvLine4, tvLine5, tvLine6];
	tbHidden.onTextChanged = (e) => {
		if (e.insertedText == ""){
			console.log("the inserted text is: ",e.insertedText ,"count: ",count);
			digits[count].text = "";
			lines[count].textColor = Color.create("#50FFFF");
			count--;
		}
		else{
			count++;
			console.log("the inserted text is: ", e.insertedText,"count: ",count);
			digits[count].text = e.insertedText;
			lines[count].textColor = Color.WHITE;
		}
		var input = tbHidden.text;
	};
	btnResend.onPress = () => page.router.push("/pages/pgRegisterPersonalDetails");
}

module.exports = PgRegisterActivationCode_1;
