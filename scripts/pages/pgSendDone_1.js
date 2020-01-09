const PgSendDone_1Design = require('ui/ui_pgSendDone_1');
const extend = require('js-base/core/extend');

const PgSendDone_1 = extend(PgSendDone_1Design)(
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
	const page = this 
	const { flexLayout1, imgBackground, imgProfile2, imgIcon, tvAmount, tvSend, tvTitle } = page;

	tvTitle.text = "Send Money";
	var img_profile =  page.routeData.image;
	var title_profile =  page.routeData.title;
	var profile_amount = page.routeData.amount;
    
	let radius = imgProfile2.borderRadius;
	imgProfile2.image = img_profile.android.round(radius);
	
	tvAmount.text = profile_amount.text;
	tvSend.text = "Sent to " + title_profile;
	
}

module.exports = PgSendDone_1;
