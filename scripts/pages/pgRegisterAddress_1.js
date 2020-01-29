const Picker = require("sf-core/ui/picker");
const Application = require("sf-core/application");
const ActionKeyType = require("sf-core/ui/actionkeytype");
const System = require("sf-core/device/system");
const Font = require("sf-core/ui/font");
const Screen = require("sf-core/device/screen");

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

	tvAddressDetails.option = {
		iOS: {
			titleFont: Font.create("Default", 12)
		}
	}

	mtbCountry.options = {
		hint: "COUNTRY",
		font: Font.create("SFProText", 16, "Medium"),
		actionKeyType: ActionKeyType.NEXT,
		iOS: {
			titleFont: Font.create("Default", 12)
		}
	};
	mtbCountry.enableDropDown = true

	mtbPostalCode.options = {
		hint: "POSTAL CODE",
		font: Font.create("SFProText", 16, "Medium"),
		actionKeyType: ActionKeyType.NEXT,
		iOS: {
			titleFont: Font.create("Default", 12)
		}
	};
	mtbAddress.options = {
		hint: "ADDRESS",
		font: Font.create("SFProText", 16, "Medium"),
		actionKeyType: ActionKeyType.GO,
		iOS: {
			titleFont: Font.create("Default", 12)
		}
	};
	view1.onTouchEnded = () => {
		showPicker();
	}
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

	btnContinue.onPress = () => page.router.push("/pages/pgRegisterEmail_1");

}

module.exports = PgRegisterAddress_1;
