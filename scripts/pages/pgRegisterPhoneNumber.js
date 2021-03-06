const KeyboardType = require("sf-core/ui/keyboardtype");
const Screen = require("sf-core/device/screen");
const ImageView = require("sf-core/ui/imageview");
	const Font = require("sf-core/ui/font");
const Color = require("sf-core/ui/color");
const Button = require("sf-core/ui/button");
const FlexLayout = require("sf-core/ui/flexlayout");
const extend = require('js-base/core/extend');
const PgRegisterPhoneNumberDesign = require('ui/ui_pgRegisterPhoneNumber');
const { getCombinedStyle } = require("sf-extension-utils/lib/getCombinedStyle");
const AttributedString = require('sf-core/ui/attributedstring');

// how to display a material textbox in flexbox
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
	const {img_background, tvPhoneNumber, flexLayout1, mtbCountry, mtbPhoneNumber, tvChangeNum} = page;

	img_background.height = Screen.height;
	img_background.width = Screen.width;
	
	const tvStyle = getCombinedStyle(".sf-textView");
	Object.assign(tvPhoneNumber, tvStyle);
	tvPhoneNumber.text = "Welcome to Smartbank,\n	please register or login with your \n phone number to use app";
	tvPhoneNumber.maxLines = 5;
	
	var imgShow = new ImageView({
		image: "images://phone_number_icon_arrow.png",
		height:10,
		width:10
	});
	mtbCountry.options = {
		hint: "COUNTRY",
		rightLayout:{view: imgShow, width: 15},
		keyboardType: KeyboardType.NUMBER,
	};
	mtbPhoneNumber.options = {
		hint: "PHONE NUMBER",
		keyboardType: KeyboardType.NUMBER,
	};
	
	// mtbCountry.hint = "COUNTRY";
	// mtbPhoneNumber.hint = "PHONE NUMBER";
	
	// mtbCountry.hintTextColor = Color.WHITE;
	// // mtbCountry.font = "SFProText";
	// // mtbCountry.minimumFontSize  = 100;
	// // mtbCountry.backgroundColor = Color.RED;
	// // mtbCountry.minWidth = 100;
	// // mtbCountry.minHeight = 50;
	
	
	// mtbPhoneNumber.hintTextColor = Color.WHITE;
	// // mtbPhoneNumber.font = "SFProText";
	// // mtbPhoneNumber.minimumFontSize  = 100;
	// // // mtbPhoneNumber.minWidth = 100;
	// mtbPhoneNumber.minHeight = 50;
	

	// mtbPhoneNumber.backgroundColor = Color.GREEN;
	// mtbCountry.backgroundColor = Color.RED;

	
	// mtbCountry.option = {
	// 	hint: "COUNTRY ",
	// 	// font: Font.create("SFProText", 16, "Medium"),
	// 	// hintTextColor: Color.BLACK,
	// 	// backgroundColor: Color.RED,
	// 	};
		
	// mtbPhoneNumber.option = {
	// 	hint: "PHONE NUMBER",
	// 	// font: Font.create("SFProText", 16, "Medium"),
	// 	// hintTextColor: Color.BLACK,
	// 	// backgroundColor: Color.GREEN,
	// };

	// var attributeString = new AttributedString();
	// let attributeString = new AttributedString({
	// 	string: "Changed your phone number?\n",
	// 	underline: true,
	// 	foregroundColor: Color.create("#cbf4ff")
	// });
	
	
	// attributeString.string = "Changed your phone number?\n";
	// attributeString.foregroundColor = Color.create("#cbf4ff");
 //   attributeString.ios.underline = true;
    // attributeString.ios.underlineColor = Color.create("#cbf4ff");
	// tvChangeNum.attributedText = [attributeString];
		tvChangeNum.text =  "Changed your phone number?\n"; 
}

module.exports = PgRegisterPhoneNumber;
