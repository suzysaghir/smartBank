const Picker = require("sf-core/ui/picker");
const Button = require("sf-core/ui/button");
const FlexLayout = require("sf-core/ui/flexlayout");
const Application = require("sf-core/application");
const Color = require("sf-core/ui/color");
const KeyboardType = require("sf-core/ui/keyboardtype");
const ImageView = require("sf-core/ui/imageview");
const extend = require('js-base/core/extend');
const Screen = require('sf-core/device/screen');
const Device = require('sf-core/device');
const { getCombinedStyle } = require("sf-extension-utils/lib/getCombinedStyle");

const PgRegisterPhoneNumber_1Design = require('ui/ui_pgRegisterPhoneNumber_1');
const PgRegisterPhoneNumber_1 = extend(PgRegisterPhoneNumber_1Design)(
	function(_super) {
		_super(this);
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));

		this.setMaterialTextBox = function() {
			const page = this;
			const { mtbCountry } = page;
			mtbCountry.options = {
				hint: "COUNTRY",
				// rightLayout:{view: imgShow, width: 10, paddingBottom:1},
			};
			mtbCountry.enableDropDown = true; 
		}.bind(this);
	}
);

function onShow(superOnShow) {
	superOnShow();
	// this.headerBar.visible = false;
	if (Device.System.OS === "iOS") {
		this.parentController.headerBar.borderVisibility = false;
		this.parentController.headerBar.visible = false;
	}
}

// function setMaterialTextBox(superSetMaterialTextBox) {
// 	superSetMaterialTextBox();
// 	const page = this; // Assuming this function is binded to the page.
// 	const { mtbCountry } = page;
// 	mtbCountry.options = {
// 		hint: "COUNTRY",
// 		// rightLayout:{view: imgShow, width: 10, paddingBottom:1},
// 		// keyboardType: KeyboardType.NUMBER,
// 		// onEditBegins: showPicker,
// 	}
// 	mtbCountry.clearAllEnabled = true;
// 	mtbCountry.showHideEnabled = true;
// 	mtbCountry.enableDropDown = true; // Use this if you ONLY want to have the icon.
// 	mtbCountry.onDropDownClick = () => {
// 		// Define your function on what to do on the event. It will automatically add the image, therefore, no need to toggle enableDropDown if this is used.
// 	}
// }

function onLoad(superOnLoad) {
	superOnLoad();
	const page = this;
	const { img_background, tvPhoneNumber, mtbCountry, mtbPhoneNumber, tvChangeNum, btnContinue, flexLayout2, view1 } = page;

	page.setMaterialTextBox();
	img_background.height = Screen.height / 3 * 2;
	img_background.width = Screen.width / 3 * 2;
	tvPhoneNumber.scrollEnabled = false;
	tvChangeNum.scrollEnabled = false;

	const tvStyle = getCombinedStyle(".sf-textView");
	Object.assign(tvPhoneNumber, tvStyle);

	tvPhoneNumber.text = "Welcome to Smartbank,please register or login with your phone number to use app";
	tvPhoneNumber.maxLines = 5;
	tvChangeNum.text = "Changed your phone number?";
	btnContinue.onPress = () => page.router.push("/pages/pgRegisterPin_1");
	btnContinue.text = 'Continue';

	view1.onTouchEnded = () => {
		showPicker();
	}
	mtbPhoneNumber.options = {
		hint: "PHONE NUMBER",
		keyboardType: KeyboardType.NUMBER,
		ios: {
			keyboardLayout: flexKeyboard
		}
	};
	var items = [
		"Yesterday",
		"Today",
		"This Month ",
		"Last Month"
	];
	const myPicker = new Picker({
		items: items,
		currentIndex: 0 //restores previous selection
	});
	myPicker.onSelected = function(index) {
		// mtbCountry.options = { text: items[index] }
		mtbCountry.materialTextBox.text = items[index];
	}

	function showPicker() {
		myPicker.show(okCallback, cancelCallback);
	}
	var okCallback = function(params) {
		console.log('Selected index: ' + params.index);
	}
	var cancelCallback = function() {
		console.log('Canceled');
	}

	const myButton = new Button();
	const btnStyle = getCombinedStyle(".sf-button");
	Object.assign(myButton, btnStyle);

	myButton.text = btnContinue.text;
	myButton.onPress = btnContinue.onPress

	var flexKeyboard = new FlexLayout({
		height: 100,
		alignSelf: FlexLayout.AlignSelf.STRETCH,
		paddingRight: 16,
		paddingLeft: 16,

	});
	flexKeyboard.addChild(myButton);
	Application.android.keyboardMode = Application.Android.KeyboardMode.KeyboardAdjustResize;
}

module.exports = PgRegisterPhoneNumber_1;


	// data = https://trial.mobiscroll.com/content/countries.json
	// var mydata = JSON.parse(data);
	// document.getElementById("get_the_file").addEventListener("change", function() {
	//   var file_to_read = document.getElementById("get_the_file").files[0];
	//   var fileread = new FileReader();
	//   fileread.onload = function(e) {
	//     var content = e.target.result;
	//     // console.log(content);
	//     var intern = JSON.parse(content); // Array of Objects.
	//     console.log(intern); // You can index every object
	//   };
	//   fileread.readAsText(file_to_read);
	// });