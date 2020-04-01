const Font = require("sf-core/ui/font");
const Button = require("sf-core/ui/button");
const TextView = require("sf-core/ui/textview");
const Color = require("sf-core/ui/color");
const FlexLayout = require("sf-core/ui/flexlayout");
const ImageView = require("sf-core/ui/imageview");
const Image = require("sf-core/ui/image");
const { getCombinedStyle } = require("sf-extension-utils/lib/getCombinedStyle");

const extend = require('js-base/core/extend');
const PgSendDoneDesign = require('ui/ui_pgSendDone');

const PgSendDone = extend(PgSendDoneDesign)(
	function(_super) {
		_super(this);
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
		
   //     var myFlexLayout = new FlexLayout({
			// alignSelf: FlexLayout.AlignSelf.STRETCH,
			// alignItems: FlexLayout.AlignSelf.CENTER,
			// alignContent: FlexLayout.AlignSelf.CENTER,
			// justifyContent: FlexLayout.JustifyContent.CENTER,
			// flexGrow:1,
			// flexDirection: FlexLayout.FlexDirection.COLUMN, 
			// borderRadius : 250,
   //     });
		// var borderRadius = 50;
		// // myFlexLayout = myFlexLayout.android.round(250);
	
		// var imgBackground = Image.createFromFile("images://blue_background.png");
	 //   imgBackground = imgBackground.android.round(250);
	 //   var imgvBackground = new ImageView({
	 //   	borderRadius : 100, 
	 //   	height : 500,
	 //   	width : 500,
		//     image: imgBackground,
		//     // flexGrow: 1,
		// 	alignSelf: FlexLayout.AlignSelf.CENTER,
		//     positionType:FlexLayout.PositionType.ABSOLUTE,
		//     imageFillType: ImageView.FillType.ASPECTFIT,
		//     marginLeft:-20,
		//     marginRight:-20
	 //       });
	   
	 //   var imgProfile = Image.createFromFile("images://adam.png");
	 //   imgProfile = imgProfile.android.round(borderRadius);
	 //   var imgvProfile = new ImageView({
	 //   	borderRadius : borderRadius,
		//     image: imgProfile,
	 //   	height : 100,
	 //   	width : 100,
		// 	alignSelf: FlexLayout.AlignSelf.CENTER,
		//     positionType:FlexLayout.PositionType.RELATIVE,
		//     // flexGrow: 1,
		//     imageFillType: ImageView.FillType.STRETCH 
	 //       });
	        
		// var tvAmount = new TextView({
		// 	text:"$200",
		// 	textColor: Color.WHITE
		// });
		// var tvSend = new TextView({
		// 	text:"Sent to John Doe",
		// 	textColor: Color.WHITE
		// });
			
		// var myButton = new Button({
		// 	    text: "Done",
		// 	});
		// const tvStyle = getCombinedStyle(".sf-button");
		// Object.assign(mysButton, tvStyle);
	
		// myFlexLayout.addChild(tvAmount);
		// myFlexLayout.addChild(tvSend);

	 //   myFlexLayout.addChild(imgvBackground);
	 //   myFlexLayout.addChild(imgvProfile);
	    
	 //   this.layout.addChild(myFlexLayout);
		// this.layout.addChild(myButton);

		}
);

function onShow(superOnShow) {
	superOnShow();
}

function onLoad(superOnLoad) {
	superOnLoad();
	const page = this 
	const { flexLayout1, imgBackground, imgProfile2, imgIcon, tvAmount, tvSend, tvTitle } = page;

	var img_profile =  page.routeData.image;
	var title_profile =  page.routeData.title;
	var profile_amount = page.routeData.amount;
    
	let radius = imgProfile2.borderRadius;
	imgProfile2.image = img_profile.android.round(radius);
	var imgPost = imgProfile2.getScreenLocation();
	imgIcon.right = imgPost.x - 30;
	imgIcon.bottom = imgPost.y - 5;
	tvTitle.text = "Send Money";
	
	// var borderRadius = 50;
 //   var image_Profile = Image.createFromFile("images://adam.png");
	//     image_Profile = image_Profile.android.round(borderRadius);
	    
	// var imgvProfile = new ImageView({
 //   	borderRadius : borderRadius,
	//     image: image_Profile,
 //   	height : 100,
 //   	width : 100,
	// 	alignSelf: FlexLayout.AlignSelf.CENTER,
	//     positionType:FlexLayout.PositionType.RELATIVE,
	//     imageFillType: ImageView.FillType.ASPECTFIT 
 //       });
	        
	// flexLayout1.addChild(imgvProfile); 
	tvAmount.text = profile_amount.text;
	tvSend.text = "Sent to " + title_profile;

}

module.exports = PgSendDone;
