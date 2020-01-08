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
	const { imgvProfile, tvName, tvAmount, tvSchedulePy, btnSendMoney} = page;
	
	// let radius = imgvProfile.borderRadius;
	var img_profile =  page.routeData.image;
	var title_profile =  page.routeData.title;
	var profile_amount = page.routeData.amount;
	imgvProfile.image =img_profile.android.round(50);
	
	tvName.text = title_profile;
	tvAmount.text = profile_amount.text;
	tvSchedulePy.text = "Schedule payment";
	btnSendMoney.onPress = () => router.push("/pages/pgSendDone", {title:title_profile, image:img_profile, amount:tvAmount});
	
	// var attributeString = new AttributedString();
	// attributeString.underline = true;
 //   // attributeString.string = "Schedule payment";
 //    attributeString.backgroundColor = Color.RED;

	
	// tvSchedulePy.attributedText = [attributeString];
	
	// page.layout.removeChild( tvSchedulePy );
	// page.layout.addChild(tvSchedulePy);
	
}

module.exports = PgSendMoneyReview;
