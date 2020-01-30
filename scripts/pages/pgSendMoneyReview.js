const Button = require("sf-core/ui/button");
const FlexLayout = require("sf-core/ui/flexlayout");
const Application = require("sf-core/application");
const KeyboardType = require("sf-core/ui/keyboardtype");
const AttributedString = require("sf-core/ui/attributedstring");
const Color = require("sf-core/ui/color");
const Font = require("sf-core/ui/font");
const Image = require("sf-core/ui/image");
const extend = require('js-base/core/extend');
const PgSendMoneyReviewDesign = require('ui/ui_pgSendMoneyReview');
const { getCombinedStyle } = require("sf-extension-utils/lib/getCombinedStyle");


const PgSendMoneyReview = extend(PgSendMoneyReviewDesign)(
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
	const { imgvProfile, tvName, tvAmount, tvSchedulePy, btnSendMoney } = page;
	tvName.scrollEnabled = false;
	tvSchedulePy.scrollEnabled = false;
	btnSendMoney.onPress = () => router.push("/pages/pgSendDone_1", { title: title_profile, image: img_profile, amount: tvAmount.text });

	tvAmount.text = 0;
	tvAmount.hintTextColor = Color.create("#383838");
	tvAmount.keyboardType = KeyboardType.NUMBER;

	var img_profile = page.routeData.image;
	var title_profile = page.routeData.title;
	var profile_amount = page.routeData.amount;
	console.log("profile_amount.text	", page.routeData.amount, " type: ", typeof profile_amount);
	tvAmount.text = profile_amount;
	tvName.text = title_profile;
	tvAmount.hint = profile_amount;
	tvAmount.hintTextColor =  Color.create("#383838");

	imgvProfile.image = img_profile.android.round(50);
	const myButton = new Button();
	const btnStyle = getCombinedStyle(".sf-button");
	Object.assign(myButton, btnStyle);

	myButton.text = btnSendMoney.text;
	myButton.onPress = () => router.push("/pages/pgSendDone_1", { title: title_profile, image: img_profile, amount: tvAmount.text });

	var flexKeyboard = new FlexLayout({
		height: 100,
		alignSelf: FlexLayout.AlignSelf.STRETCH,
		paddingRight: 16,
		paddingLeft: 16,
	});
	flexKeyboard.addChild(myButton);

	tvAmount.ios.keyboardLayout = flexKeyboard;

	tvSchedulePy.text = "Schedule payment";
	Application.android.keyboardMode = Application.Android.KeyboardMode.KeyboardAdjustResize;

}
module.exports = PgSendMoneyReview;
