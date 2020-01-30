const TextView = require("sf-core/ui/textview");
const FlexLayout = require("sf-core/ui/flexlayout");
const AlertView = require("sf-core/ui/alertview");
const HeaderBarItem = require("sf-core/ui/headerbaritem");
const Image = require("sf-core/ui/image");
const PageTitleLayout = require("components/PageTitleLayout");
const System = require("sf-core/device/system");
const componentContextPatch = require("@smartface/contx/lib/smartface/componentContextPatch");
const Color = require("sf-core/ui/color");
const ImageView = require("sf-core/ui/imageview");
const { getCombinedStyle } = require("sf-extension-utils/lib/getCombinedStyle");
const KeyboardType = require('sf-core/ui/keyboardtype');
const Screen = require("sf-core/device/screen");
const backClose = require("sf-extension-utils/lib/router/back-close");


const extend = require('js-base/core/extend');
const PgRegisterPin_1Design = require('ui/ui_pgRegisterPin_1');

const PgRegisterPin_1 = extend(PgRegisterPin_1Design)(
	function(_super) { //routeData, router)
		_super(this);
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
	}
);

function onShow(superOnShow) {
	const { routeData, headerBar } = this;
	superOnShow();
	// headerBar.titleLayout.applyLayout();
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
	const {
		img_background,
		tvPasscode,
		tvAgreed,
		flexContainer,
		viewRegPin,
		viewRemoveTouch,
		tbHidden,
		flxInside1,
		flxInside2,
		flxInside3,
		flxInside4
	} = page;
	img_background.height = Screen.height / 3 * 2;
	img_background.width = Screen.width / 3 * 2;
	tbHidden.keyboardType = KeyboardType.NUMBER;

	const tvStyle = getCombinedStyle(".sf-textView");
	Object.assign(tvPasscode, tvStyle);
	tvPasscode.text = "Create a passcode for your Smartbank account";
	tvPasscode.maxLines = 3;
	tbHidden.visible = true;
	tbHidden.text = "";
	// keyboardLayout: flexKeyboard
	tvAgreed.text = "By entering your passcode, you agree to our Terms of Services";
	tvAgreed.maxLines = 3;
	tvAgreed.textColor = Color.create("#cbf4ff");

	const keyboardtv = new TextView();
	const tbStyle = getCombinedStyle(".sf-textView");
	Object.assign(keyboardtv, tbStyle);

	keyboardtv.text = tvAgreed.text;
	keyboardtv.textColor = tvAgreed.textColor;
	keyboardtv.maxLines = tvAgreed.maxLines
	var flexKeyboard = new FlexLayout({
		height: 100,
		alignSelf: FlexLayout.AlignSelf.STRETCH,
		paddingRight: 16,
		paddingLeft: 16,

	});
	flexKeyboard.addChild(keyboardtv);
	tbHidden.ios.keyboardLayout = flexKeyboard;
	
	viewRegPin.onTouchEnded = () => {
		tbHidden.requestFocus();
	};
	viewRemoveTouch.onTouchEnded = () => {
		tbHidden.removeFocus();
	}
	var count = 0;
	var txtLength = 0;
	var arr = [flxInside1, flxInside2, flxInside3, flxInside4]
	
	tbHidden.onTextChanged = (e) => {
		var wrongCodeAlert = new AlertView({
			title: "Incorrect Passcode",
			message: "try again"
		});
		wrongCodeAlert.addButton({
			type: AlertView.Android.ButtonType.NEGATIVE,
			text: "OK"
		});
		var input = tbHidden.text;
		var codes = ["1111", "0000", "1234"];
		var checkPass = () => {
			if (input.length == 4) {
				var exist = codes.includes(input);
				if (exist == false) { wrongCodeAlert.show(); }
				return exist;
			}
		};
		console.log("text length: ", input.length, " - ", txtLength, ", count : ", count);

		if (input.length > txtLength && input.length - 1 < arr.length) {
			arr[count].backgroundColor = Color.WHITE;
			count++;
			txtLength = input.length;
		}
		else if (input.length <= txtLength && input.length >= 0) {
			count--;
			arr[count].backgroundColor = Color.create(50, 255, 255, 255);
			txtLength = input.length;
		}
		else {
			var input = tbHidden.text;
			// tbHidden.text = input;
		}
		// console.log("checkPass value ", checkPass(), " the text is : ", input, "  ", input.length)
		if (checkPass() == true) {
			page.router.push("/pages/pgRegisterActivationCode_11");
		}
	};




	// btnContinue.onPress = () => page.router.push("/pages/pgRegisterActivationCode_11");

}

module.exports = PgRegisterPin_1;
// console.log("+++++++++++++++  ",e.location)
// if (e.location == 0){
// 	e.location = 1;
// }
//// when type clean twice it and a value 
// if (e.insertedText == "" && count > 0) {
// 	console.log("the inserted text is: ", typeof e.insertedText, " ## : ", e.insertedText, " count: ", count);
// 	count--;
// 	arr[count].backgroundColor = Color.create(50, 255, 255, 255);
// 	console.log("the subtraction count is : ", count)
// }
// else if (isNaN(e.insertedText) == false && count < arr.length) {

// 	console.log("the inserted text is: ", typeof e.insertedText, " ## : ", e.insertedText, " count: ", count);
// 	arr[count].backgroundColor = Color.WHITE;
// 	count++;
// 	console.log("the addition count is : ", count)
// }
// else {
// 	var input = tbHidden.text;
// 	tbHidden.text = input.substring(0, input.length - 1);

// }
