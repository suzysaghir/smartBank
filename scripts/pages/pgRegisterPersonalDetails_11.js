const Application = require("sf-core/application");
const ActionKeyType = require("sf-core/ui/actionkeytype");
const System = require("sf-core/device/system");
const Font = require("sf-core/ui/font");
const Screen = require("sf-core/device/screen");
const DatePicker = require('sf-core/ui/datepicker');
const { getCombinedStyle } = require("sf-extension-utils/lib/getCombinedStyle");

const extend = require('js-base/core/extend');
const PgRegisterPersonalDetails_11Design = require('ui/ui_pgRegisterPersonalDetails_11');

const PgRegisterPersonalDetails_11 = extend(PgRegisterPersonalDetails_11Design)(
	function(_super) {
		_super(this);
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
		this.setMaterialTextBox = function() {
			const page = this;
			const { mtbBirthDate } = page;
			mtbBirthDate.options = {
				hint: "DATE OF BIRTH ",
				font: Font.create("SFProText", 16, "Medium"),
				// onEditBegins: showDatePicker,
				// actionKeyType: ActionKeyType.GO,
				iOS: {
					titleFont: Font.create("Default", 12)
				}
			};
		}.bind(this);
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
	const { img_background, tvPersonalDetails, mtbFirstName, mtbLastName, mtbBirthDate, btnContinue, view1 } = page;
	page.setMaterialTextBox();
	img_background.height = Screen.height / 3 * 2;
	img_background.width = Screen.width / 3 * 2;

	tvPersonalDetails.text = "What are your personal details?";
	tvPersonalDetails.scrollEnabled = false;
	tvPersonalDetails.option = {
		iOS: {
			titleFont: Font.create("Default", 12)
		}
	};
	mtbFirstName.options = {
		hint: "FIRST NAME ",
		font: Font.create("SFProText", 16, "Medium"),
		actionKeyType: ActionKeyType.NEXT,
		iOS: {
			titleFont: Font.create("Default", 12)
		}
	};
	mtbLastName.options = {
		hint: "LAST NAME ",
		actionKeyType: ActionKeyType.SEND,
		font: Font.create("SFProText", 16, "Medium"),
		iOS: {
			titleFont: Font.create("Default", 12)
		}
	};

	view1.onTouchEnded = () => {
		showDatePicker();
	}
	var myDatePicker = new DatePicker();

	function showDatePicker() {
		myDatePicker.show();
	}
	myDatePicker.onDateSelected = function(date) {
		myDatePicker.okText = ' ' + date.getFullYear() + '/' + date.getMonth()+1 + '/' + date.getDate();

		mtbBirthDate.materialTextBox.text = myDatePicker.okText;
	};
	Application.android.keyboardMode = Application.Android.KeyboardMode.KeyboardAdjustResize;

	btnContinue.onPress = () => page.router.push("/pages/pgRegisterAddress_1");

}

module.exports = PgRegisterPersonalDetails_11;
