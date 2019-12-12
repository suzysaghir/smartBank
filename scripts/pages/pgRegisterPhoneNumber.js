const Button = require("sf-core/ui/button");
const FlexLayout = require("sf-core/ui/flexlayout");
const extend = require('js-base/core/extend');
const PgRegisterPhoneNumberDesign = require('ui/ui_pgRegisterPhoneNumber');
const { getCombinedStyle } = require("sf-extension-utils/lib/getCombinedStyle");


const PgRegisterPhoneNumber = extend(PgRegisterPhoneNumberDesign)(
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
              this.router.push("/pages/pgRegisterPin");
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

function onLoad(superOnLoad) {
	superOnLoad();
	const page = this;
	const {tvPhoneNumber} = page;
	tvPhoneNumber.text = "Welcome to Smartbank,\n	please register or login with your\n phone number to use app";
	const tvStyle = getCombinedStyle(".sf-textView");
	Object.assign(tvPhoneNumber, tvStyle);
}

module.exports = PgRegisterPhoneNumber;
