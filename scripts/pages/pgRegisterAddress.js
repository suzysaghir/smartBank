const FlexLayout = require("sf-core/ui/flexlayout");
const Button = require("sf-core/ui/button");
const Font = require("sf-core/ui/font");
const extend = require('js-base/core/extend');
const PgRegisterAddressDesign = require('ui/ui_pgRegisterAddress');
const { getCombinedStyle } = require("sf-extension-utils/lib/getCombinedStyle");


const PgRegisterAddress = extend(PgRegisterAddressDesign)(
	// Constructor
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
              this.router.push("/pages/pgRegisterEmail");
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
	const { mtbCountry, mtbPostalCode, mtbAddress, btnContinue, tvAddressDetails } = page;
	
	// console.log(btnContinue)
	// btnContinue.onPress(page.router.push("/pages/pgRegisterEmail"));
	
	mtbCountry.options = {
		hint: "COUNTRY",
				font: Font.create("SFProText", 16, "Medium")
	};
	mtbPostalCode.options = {
		hint: "POSTAL CODE",
				font: Font.create("SFProText", 16, "Medium"),

		iOS: {
			titleFont: Font.create("Default", 12)
		}
	};
	mtbAddress.options = {
		hint: "ADDRESS",
		font: Font.create("SFProText", 16, "Medium"),
		iOS: {
			titleFont: Font.create("Default", 12)
		}
	};

	tvAddressDetails.text = "What are your home address?";
	
	
	
	
}

module.exports = PgRegisterAddress;
