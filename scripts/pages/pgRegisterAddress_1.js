const KeyboardType = require("sf-core/ui/keyboardtype");
const Button = require("sf-core/ui/button");
const FlexLayout = require("sf-core/ui/flexlayout");
const Picker = require("sf-core/ui/picker");
const Application = require("sf-core/application");
const ActionKeyType = require("sf-core/ui/actionkeytype");
const System = require("sf-core/device/system");
const Font = require("sf-core/ui/font");
const Screen = require("sf-core/device/screen");
const { getCombinedStyle } = require("sf-extension-utils/lib/getCombinedStyle");

const extend = require('js-base/core/extend');
const PgRegisterAddress_1Design = require('ui/ui_pgRegisterAddress_1');

const PgRegisterAddress_1 = extend(PgRegisterAddress_1Design)(
	function(_super) {
		_super(this);
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
	}
);

function onShow(superOnShow) {
	superOnShow();
	if (System.OS === "Android") {
		this.headerBar = this.headerBar;
	}
	else {
		this.headerBar = this.parentController.headerBar;
	}
	this.headerBar.borderVisibility = false;

}

function onLoad(superOnLoad) {
	superOnLoad();
	const page = this;
	const { img_background, tvAddressDetails, mtbCountry, mtbPostalCode, mtbAddress, btnContinue, view1 } = page;

	img_background.height = Screen.height / 3 * 2;
	img_background.width = Screen.width / 3 * 2;

	tvAddressDetails.text = "What is your home address?";
	tvAddressDetails.scrollEnabled = false;
	btnContinue.onPress = () => page.router.push("/pages/pgRegisterEmail_1");

	tvAddressDetails.option = {
		iOS: {
			titleFont: Font.create("Default", 12)
		}
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
	
	mtbCountry.options = {
		hint: "COUNTRY",
		font: Font.create("SFProText", 16, "Medium"),
		actionKeyType: ActionKeyType.NEXT,
		ios: {
			titleFont: Font.create("Default", 12)
		}
	};
	mtbCountry.enableDropDown = true

	mtbPostalCode.options = {
		hint: "POSTAL CODE",
		font: Font.create("SFProText", 16, "Medium"),
		actionKeyType: ActionKeyType.NEXT,
		keyboardType: KeyboardType.NUMBER,
		ios: {
			titleFont: Font.create("Default", 12),
			keyboardLayout: flexKeyboard
		}
	};
	mtbAddress.options = {
		hint: "ADDRESS",
		font: Font.create("SFProText", 16, "Medium"),
		actionKeyType: ActionKeyType.GO,
		ios: {
			titleFont: Font.create("Default", 12),
			keyboardLayout: flexKeyboard

		}
	};
	view1.onTouchEnded = () => {
		showPicker();
	}
	var items = [
		"UNITED STATES",
		"JAPAN",
		"CHINA",
		"UNITED KINGDOM"
	];
	const myPicker = new Picker({
		items: items,
		currentIndex: 0 //restores previous selection
	});
	myPicker.onSelected = function(index) {
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
	Application.android.keyboardMode = Application.Android.KeyboardMode.KeyboardAdjustResize;


}

module.exports = PgRegisterAddress_1;
