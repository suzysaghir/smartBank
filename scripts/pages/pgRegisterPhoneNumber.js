const Color = require("sf-core/ui/color");
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
        
       //myFlexLayout.onPress(btnContinue, function(){ console.log("++++ event work ") 
       	
       //});
        // btnContinue.onPress( function(){ console.log("++++ event work ") } );
        
        // btnContinue.onPress = function() {};
        // btnContinue.onPress = ()=>{ console.log("++++ event work ") } 
        
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
	const {tvPhoneNumber, mtbCountry, mtbPhoneNumber} = page;

	const tvStyle = getCombinedStyle(".sf-textView");
	Object.assign(tvPhoneNumber, tvStyle);
	tvPhoneNumber.text = "Welcome to Smartbank,\n	please register or login with your \n phone number to use app";
	tvPhoneNumber.maxLines=5;
	
	mtbCountry.option = {
		hint: "COUNTRY ",
		backgroundColor: Color.BLACK,
		height: 35
		};
	mtbPhoneNumber.option = {
		hint: "PHONE NUMBER",
		backgroundColor: Color.BLACK,
		height: 35
	};
	

}

module.exports = PgRegisterPhoneNumber;
