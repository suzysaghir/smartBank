const Button = require("sf-core/ui/button");
const Router = require("@smartface/router/src/native/NativeRouter");
const Font = require("sf-core/ui/font");
const FlexLayout = require("sf-core/ui/flexlayout");
const Color = require("sf-core/ui/color");
const { getCombinedStyle } = require("sf-extension-utils/lib/getCombinedStyle");

const extend = require('js-base/core/extend');
const PgRegisterPinDesign = require('ui/ui_pgRegisterPin');
// /scripts/ui/ui_pgRegisterPin.js


const PgRegisterPin = extend(PgRegisterPinDesign)(
	function(_super) {
		_super(this);
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));

		var myFlexLayout = new FlexLayout({
		    flexGrow:1,
		    justifyContent: FlexLayout.JustifyContent.CENTER
		});

		var btnContinue= new Button({
            text: "Continue",
            onPress: function() {
              this.router.push("/pages/pgRegisterActivationCode");
            }.bind(this)
        });
                
		const btnStyle = getCombinedStyle(".sf-button");
	    Object.assign(btnContinue, btnStyle);
	    myFlexLayout.addChild(btnContinue);
	    this.layout.addChild(myFlexLayout);
        
        
	}
);

function onShow(superOnShow) {
	superOnShow();
}

var count = 0; 
function onLoad(superOnLoad) {
	superOnLoad();
	
	const page = this;	 
	const { tvpasscode, viewRegPin, tbHidden, tvAgreed } = page;

	
	const tvStyle = getCombinedStyle(".sf-textView");
	Object.assign(tvpasscode, tvStyle);
	tvpasscode.text = "Create a passcode for your \n Smartbank account";
	tvpasscode.maxLines=3;

	tbHidden.visible = false;
	viewRegPin.onTouchEnded = () => {
		 //tbHidden.KeyboardType = KeyboardType.NUMBER;
		 tbHidden.requestFocus();
	};
	 
	 tbHidden.onTextChanged = (e) => {
 		 	console.log("the inserted text is: ", e.insertedText);
		 	var input = tbHidden.text;
		 	console.log("the full text: ",input.substring(9, input.length - 1 ));
		 	
		 	
		 };
	tvAgreed.text = "By entering your passcode, you agree to our\n Terms of Services"	;
	tvAgreed.maxLines=3;

}



module.exports = PgRegisterPin;
