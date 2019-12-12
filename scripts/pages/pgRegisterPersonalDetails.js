const Button = require("sf-core/ui/button");
const Router = require("@smartface/router/src/native/NativeRouter");
const Font = require("sf-core/ui/font");
const FlexLayout = require("sf-core/ui/flexlayout");
const Color = require("sf-core/ui/color");
const { getCombinedStyle } = require("sf-extension-utils/lib/getCombinedStyle");

const extend = require('js-base/core/extend');
const PgRegisterPersonalDetailsDesign = require('ui/ui_pgRegisterPersonalDetails');


const PgRegisterPersonalDetails = extend(PgRegisterPersonalDetailsDesign)(
	// Constructor
	function(_super) {
		_super(this);
		// this.router = router;
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
		
	    this.layout.flexDirection = FlexLayout.FlexDirection.ROW;
        this.layout.justifyContent = FlexLayout.JustifyContent.CENTER;
        this.layout.alignItems = FlexLayout.AlignItems.CENTER;
			
		// var startColor = Color.create("#53D9F5");
		// var endColor = Color.create("#7AE8FF");
		// var dir = Color.GradientDirection.VERTICAL;
		
		
		// this.layout.backgroundColor =  Color.createGradient({
		// 	direction: dir , 
		// 	startColor: startColor, 
		// 	endColor: endColor
		// });
		
		var myFlexLayout = new FlexLayout({
		    flexGrow:1,
		    justifyContent: FlexLayout.JustifyContent.CENTER
		});

		var btnContinue= new Button({
            text: "Continue",
            onPress: function() {
              this.router.push("/pages/pgRegisterAddress");
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
	const { tvPersonalDetails, mtbFirstName, mtbLastName, mtbBirthDate } = page;

	
	const tvStyle = getCombinedStyle(".sf-textView");
	Object.assign(tvPersonalDetails, tvStyle);
	
	// tvPersonalDetails.visible = true;
	tvPersonalDetails.text = "What are your personal details?";
	// tvPersonalDetails.textColor = Color.WHITE;
	// tvPersonalDetails.backgroundColor =  Color.create(0,0,255,0);

	tvPersonalDetails.option = {
		iOS:{
			titleFont: Font.create("Default", 12)
		}
	}
	
	mtbFirstName.options = {
		hint: "FIRST NAME ",
				font: Font.create("SFProText", 16, "Medium")
		// 		,

		// iOS: {
		// 	titleFont: Font.create("Default", 12)
		// }
	};
	mtbLastName.options = {
		hint: "LAST NAME ",
				font: Font.create("SFProText", 16, "Medium"),

		iOS: {
			titleFont: Font.create("Default", 12)
		}
	};
	mtbBirthDate.options = {
		hint: "DATE OF BIRTH ",
		font: Font.create("SFProText", 16, "Medium"),
		iOS: {
			titleFont: Font.create("Default", 12)
		}
	};
	
		// touch.addPressEvent(this.btnContinue, () => {
  //      this.router.push("/pages/pgRegisterAddress", { message: "Hello World!" });
		// });
		// btnContinue.onPress(Router.push('/pgRegisterAddress'));
		// check the button 
	
	

}



module.exports = PgRegisterPersonalDetails;
