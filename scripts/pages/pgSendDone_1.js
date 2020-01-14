const System = require("sf-core/device/system");
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
	   //if (System.OS === "Android") {
    //     this.headerBar = this.headerBar;
    // }
    // else {
    //     this.headerBar = this.parentController.headerBar;
    // }
    // this.headerBar.borderVisibility = false;

}

function onLoad(superOnLoad) {
	superOnLoad();
   if (System.OS === "iOS") {
	this.parentController.headerBar.visible = false;
	this.parentController.headerBar.borderVisibility = false;
}
	const page = this 
	const { flexLayout1, imgBackground, imgProfile2, imgIcon, tvAmount, tvSend, tvTitle } = page;
	// console.log("the header bar ",headerBar)
   

	tvTitle.text = "Send Money";
	var img_profile =  page.routeData.image;
	var title_profile =  page.routeData.title;
	var profile_amount = page.routeData.amount;
    
	let radius = imgProfile2.borderRadius;
	imgProfile2.image = img_profile;
	
	tvAmount.text = profile_amount.text;
	tvSend.text = "Sent to " + title_profile;
	
}

module.exports = PgSendDone_1;
