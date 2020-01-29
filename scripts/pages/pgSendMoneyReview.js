const Application = require("sf-core/application");
const KeyboardType = require("sf-core/ui/keyboardtype");
const AttributedString = require("sf-core/ui/attributedstring");
const Color = require("sf-core/ui/color");
const Font = require("sf-core/ui/font");
const Image = require("sf-core/ui/image");
const extend = require('js-base/core/extend');
const PgSendMoneyReviewDesign = require('ui/ui_pgSendMoneyReview');

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

	tvAmount.hintTextColor = Color.create("#383838");
	tvAmount.keyboardType = KeyboardType.NUMBER;

	var img_profile = page.routeData.image;
	var title_profile = page.routeData.title;
	var profile_amount = page.routeData.amount;
	console.log("profile_amount.text	", page.routeData.title, " type: ", typeof profile_amount);
	tvAmount.text = "0";
	tvAmount.text = profile_amount;
	tvName.text = title_profile;
	// tvAmount.hint = profile_amount;

	imgvProfile.image = img_profile.android.round(50);


	tvSchedulePy.text = "Schedule payment";
	Application.android.keyboardMode = Application.Android.KeyboardMode.KeyboardAdjustResize;

	btnSendMoney.onPress = () => router.push("/pages/pgSendDone_1", { title: title_profile, image: img_profile, amount: tvAmount.text });
}
module.exports = PgSendMoneyReview;
