const Button = require("sf-core/ui/button");
const FlexLayout = require("sf-core/ui/flexlayout");
const { getCombinedStyle } = require("sf-extension-utils/lib/getCombinedStyle");
const extend = require('js-base/core/extend');

const PgRegisterPinDesign = require('ui/ui_pgRegisterPin');

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
              this.router.push("/pages/pgRegisterPersonalDetails");
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
	const {tvpasscode, flexContainer} = page;
	
	tvpasscode.text = "Create a passcode for your";
	const tvStyle = getCombinedStyle(".sf-textView");
	Object.assign(tvpasscode, tvStyle);
	 
	tvpasscode.text = "Create a passcode for your";
	const tvStyle = getCombinedStyle(".sf-textView");
	Object.assign(tvpasscode, tvStyle);
	 
	
}

module.exports = PgRegisterPin;
