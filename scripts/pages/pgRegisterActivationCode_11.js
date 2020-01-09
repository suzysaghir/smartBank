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
}

function onLoad(superOnLoad) {
	superOnLoad();
	const page = this;
	const { img_background, tvEnterDigits, tvSendToPhone, tvResendCode, btnResend, viewDigitCode, flexContainer, viewRemoveTouch, tbHidden,
			flexLayoutActivationCode1, flexLayoutActivationCode2, flexLayoutActivationCode3, flexLayoutActivationCode4, flexLayoutActivationCode5, flexLayoutActivationCode6} = page;
	img_background.height = Screen.height/3*2;
	img_background.width = Screen.width/3*2;
			
	tvEnterDigits.text ="Enter the 6 digit code";
	tvSendToPhone.text = "We’ve send it to your phone number";
	tvResendCode.text = "You can re-send the code in 00:20"
			
	viewDigitCode.onTouchEnded = () => {
		 tbHidden.requestFocus();
		 tbHidden.KeyboardType = KeyboardType.NUMBER;
	};
	viewRemoveTouch.onTouchEnded = () => {
		 tbHidden.removeFocus();
	}
		
	var count = -1;
	var digits = [flexLayoutActivationCode1, flexLayoutActivationCode2, flexLayoutActivationCode3, flexLayoutActivationCode4, flexLayoutActivationCode5, flexLayoutActivationCode6];
	tbHidden.onTextChanged = (e) => {
		if (e.insertedText == ""){
			digits[count].tvDigit.text = e.insertedText;
			digits[count].tvLine.textColor = Color.create("#50FFFF");
			count--;
		}
		else{
			count++;
			digits[count].tvDigit.text = e.insertedText;
			digits[count].tvLine.textColor = Color.WHITE;
		}
	};
	btnResend.onPress = () => page.router.push("/pages/pgRegisterPersonalDetails_11");

}

module.exports = PgRegisterActivationCode_11;
