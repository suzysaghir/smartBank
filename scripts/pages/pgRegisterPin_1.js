const HeaderBarItem = require("sf-core/ui/headerbaritem");
const Image = require("sf-core/ui/image");
const PageTitleLayout = require("components/PageTitleLayout");
const System = require("sf-core/device/system");
const componentContextPatch = require("@smartface/contx/lib/smartface/componentContextPatch");
const Color = require("sf-core/ui/color");
const ImageView = require("sf-core/ui/imageview");
const { getCombinedStyle } = require("sf-extension-utils/lib/getCombinedStyle");
const KeyboardType = require("sf-core/ui/keyboardtype");
const Screen = require("sf-core/device/screen");
const backClose = require("sf-extension-utils/lib/router/back-close");


const extend = require('js-base/core/extend');
const PgRegisterPin_1Design = require('ui/ui_pgRegisterPin_1');

const PgRegisterPin_1 = extend(PgRegisterPin_1Design)(
	function(_super) {//routeData, router)
		_super(this);
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
	}
);

function onShow(superOnShow) {
	const {routeData, headerBar} = this;
    superOnShow();
    // headerBar.titleLayout.applyLayout();
    routeData && console.info("information: ",routeData.message);
}

function onLoad(superOnLoad) {
    var headerBar;
    superOnLoad();
   if (System.OS === "Android") {
        headerBar = this.headerBar;
        // headerBar.setLeftItem(new HeaderBarItem({
        //     onPress: () => {
        //         this.router.goBack();
        //     },
        //     image: Image.createFromFile("images://icon_back.png")
        // }));
    }
    else {
        headerBar = this.parentController.headerBar;
		// headerBar.leftItemEnabled = true;
        // var leftItem = new HeaderBarItem();
        // leftItem.image = Image.createFromFile("images://icon_back.png");
        // leftItem.onPress = () =>  this.router.goBack();
        // this.headerBar.setLeftItem(leftItem);
 
    }
    
    headerBar.borderVisibility = false;
    headerBar.itemColor = Color.WHITE;


    
	const page = this;
	const { img_background, tvPasscode, tvAgreed, flexContainer, viewRegPin, viewRemoveTouch, tbHidden, btnContinue,
			flxInside1, flxInside2, flxInside3, flxInside4 } = page;
	img_background.height = Screen.height/3*2;
	img_background.width = Screen.width/3*2;
	
	const tvStyle = getCombinedStyle(".sf-textView");
	Object.assign(tvPasscode, tvStyle);
	tvPasscode.text ="Create a passcode for your Smartbank account";
	tvPasscode.maxLines=3;
	
	tbHidden.visible = false;
	
	viewRegPin.onTouchEnded = () => {
		 tbHidden.requestFocus();
		 tbHidden.KeyboardType = KeyboardType.NUMBER;
	};
	viewRemoveTouch.onTouchEnded = () => {
		 tbHidden.removeFocus();

		}
	
	var count = -1;
	var arr = [flxInside1, flxInside2, flxInside3, flxInside4]
	tbHidden.onTextChanged = (e) => {
		if (e.insertedText == ""){
			console.log("the inserted text is: ",e.insertedText ,"count: ",count);
			arr[count].backgroundColor = Color.create(50, 255, 255, 255);
			count--;

		}
		else{
			count++;
			console.log("the inserted text is: ", e.insertedText,"count: ",count);
			arr[count].backgroundColor = Color.WHITE;

		}
		
		var input = tbHidden.text;
	};
	

	tvAgreed.text = "By entering your passcode, you agree to our Terms of Services"	;
	tvAgreed.maxLines=3;
	
	btnContinue.onPress = () => page.router.push("/pages/pgRegisterActivationCode_11");

}

module.exports = PgRegisterPin_1;
