const Button = require("sf-core/ui/button");
const FlexLayout = require("sf-core/ui/flexlayout");
const TextView = require("sf-core/ui/textview");
const Application = require("sf-core/application");
const KeyboardType = require("sf-core/ui/keyboardtype");
const Color = require("sf-core/ui/color");
const Image = require("sf-core/ui/image");
const extend = require('js-base/core/extend');
const PgSendMoneyAmountDesign = require('ui/ui_pgSendMoneyAmount');
const { getCombinedStyle } = require("sf-extension-utils/lib/getCombinedStyle");

const PgSendMoneyAmount = extend(PgSendMoneyAmountDesign)(
	function(_super) {
		_super(this);
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
	}
);

function onShow(superOnShow) {
	superOnShow();
}

function onLoad(superOnLoad) {
	superOnLoad();
	const page = this;
	const router = this.router;
	const { listView1, flexLayout1, iconImage, myLabel, lblUsd, tbAmount, tvLine, materialtextbox, btnCont } = page;
	btnCont.onPress = () => router.push("/pages/pgSendMoneyReview", { title: title_profile, image: img_profile, amount: txtBoxAmount });
	// ########## NOTE ############
	// page.match.params.myparam
	// router.push("/pages/pgSendMoneyAmount/"+index);
	// ########### NOTE ###########
	//page.routeData.myparam
	// router.push("/pages/pgSendMoneyAmount/suzy", {index:'suzy'})
	// router.push("/pages/pgSendMoneyAmount/title,image", {title:myTitle, image:myImage})

	// @@@@@@@@@@@@@@
	// listView1.itemCount = 1;

	// var img_profile =  page.routeData.image;
	// var title_profile =  page.routeData.title;

	// listView1.onRowBind = function(listViewItem, index) {
	// 	var iconImage = listViewItem.imgIcon;
	// 	var myTitle = listViewItem.tvTitle;
	// 	iconImage.image = img_profile.android.round(50);
	// 	myTitle.text = title_profile;
	// }
	// materialtextbox.selectedHintTextColor = Color.create(100, 86, 218, 245)

	var img_profile = page.routeData.image;
	var title_profile = page.routeData.title;
	var txtBoxAmount = ""
	iconImage.image = img_profile.android.round(50);
	myLabel.text = title_profile;

	lblUsd.text = "USD";
	tbAmount.hint = "0"
	tbAmount.hintTextColor = Color.create("#383838");

	const myButton = new Button();
	const btnStyle = getCombinedStyle(".sf-button");
	Object.assign(myButton, btnStyle);


	// tbAmount.scrollEnabled = false;
	// lblUsd.scrollEnabled = false;

	// tbAmount.onTouchEnd = () => {
	// 	tbAmount.requestFocus();
	// }

	// tvLine.text = ""
	tbAmount.onTextChanged = () => {
		txtBoxAmount = tbAmount.text;
	}
	myButton.text = btnCont.text;
	myButton.onPress = () => router.push("/pages/pgSendMoneyReview", { title: title_profile, image: img_profile, amount: txtBoxAmount });

	var flexKeyboard = new FlexLayout({
		height: 100,
		alignSelf: FlexLayout.AlignSelf.STRETCH,
		paddingRight: 16,
		paddingLeft: 16,
	});
	flexKeyboard.addChild(myButton);

	tbAmount.ios.keyboardLayout = flexKeyboard;
	tbAmount.keyboardType = KeyboardType.NUMBER;

	Application.android.keyboardMode = Application.Android.KeyboardMode.KeyboardAdjustResize;


}

module.exports = PgSendMoneyAmount;
