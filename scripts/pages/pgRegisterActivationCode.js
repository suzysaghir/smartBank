const Router = require("@smartface/router/src/native/NativeRouter");
const Font = require("sf-core/ui/font");
const FlexLayout = require("sf-core/ui/flexlayout");
const AttributedString = require("sf-core/ui/attributedstring");
const Color = require("sf-core/ui/color");
const Button = require("sf-core/ui/button");
const { getCombinedStyle } = require("sf-extension-utils/lib/getCombinedStyle");
const extend = require('js-base/core/extend');
const PgRegisterActivatoinCodeDesign = require('ui/ui_pgRegisterActivationCode');
const KeyboardType = require('sf-core/ui/keyboardtype');


const PgRegisterActivatoinCode = extend(PgRegisterActivatoinCodeDesign)(
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
}
// 		_super(this);
// 		this.onShow = onShow.bind(this, this.onShow.bind(this));
// 		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
        		
// 	}
// );

// function onShow(superOnShow) {
// 	superOnShow();
// }

// var count = 0;
// function onLoad(superOnLoad) {
// 	superOnLoad();
// 	const page = this;
// 	const router = this.router;
// 	const {tvEnterDigits, tvSendToPhone, btnResend, viewDigitCode, tbHidden,
// 			tvDigit1, tvDigit2, tvDigit3, tvDigit4, tvDigit5, tvDigit6,
// 		tvLine1, tvLine2, tvLine3, tvLine4, tvLine5, tvLine6 } = page;
		
// 		tvEnterDigits.text = "Enter the 6 digit code";
// 		tvSendToPhone.text = "We’ve send it to your phone number";
// 		tvSendToPhone.textColor = Color.create(203, 244, 255);
	
// 		btnResend.onPress = () => router.push("/pages/pgRegisterPersonalDetails");
// 		tbHidden.visible = false ;
// 		// tbHidden.android.zIndex = -30;
// 		// viewDigitCode.onTouchEnded = () => {
// 		// 	tbHidden.KeyboardType = KeyboardType.NUMBER;
// 		// 	tbHidden.requestFocus();
// 		}
// 		// tbHidden.onTextChanged  s= (e) => {
// 			// console.log("the inserted text is: ", e.insertedText);
// 			// var input = tbHidden.text;
// 			// console.log("the full text: ",input.substring(9, input.length - 1 ));
// 			// console.log( "the full text: ",input  );
// 			// alert("insertedText: " + e.insertedText);
	
// }

module.exports = PgRegisterActivatoinCode;
