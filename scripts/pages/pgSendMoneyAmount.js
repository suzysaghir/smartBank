const Application = require("sf-core/application");
const KeyboardType = require("sf-core/ui/keyboardtype");
const Color = require("sf-core/ui/color");
const Image = require("sf-core/ui/image");
const extend = require('js-base/core/extend');
const PgSendMoneyAmountDesign = require('ui/ui_pgSendMoneyAmount');

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
	tbAmount.keyboardType = KeyboardType.NUMBER;

	// tbAmount.scrollEnabled = false;
	// lblUsd.scrollEnabled = false;

	// tbAmount.onTouchEnd = () => {
	// 	tbAmount.requestFocus();
	// }

	// tvLine.text = ""
	tbAmount.onEditEnds = () => {
		txtBoxAmount = tbAmount.text;
	}
	Application.android.keyboardMode = Application.Android.KeyboardMode.KeyboardAdjustResize;

	btnCont.onPress = () => router.push("/pages/pgSendMoneyReview", { title: title_profile, image: img_profile, amount: txtBoxAmount });

}

module.exports = PgSendMoneyAmount;
