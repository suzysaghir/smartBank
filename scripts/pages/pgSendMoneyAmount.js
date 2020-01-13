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
	const {listView1, tvUsd, tvAmount, tvLine, materialtextbox, btnCont} = page;
		// ########## NOTE ############
		// page.match.params.myparam
    	// router.push("/pages/pgSendMoneyAmount/"+index);
		// ########### NOTE ###########
		//page.routeData.myparam
		// router.push("/pages/pgSendMoneyAmount/suzy", {index:'suzy'})
		// router.push("/pages/pgSendMoneyAmount/title,image", {title:myTitle, image:myImage})

	listView1.itemCount = 1;

	var img_profile =  page.routeData.image;
	var title_profile =  page.routeData.title;
	
	listView1.onRowBind = function(listViewItem, index) {
		var iconImage = listViewItem.imgIcon;
		var myTitle = listViewItem.tvTitle;
		iconImage.image = img_profile.android.round(50);
		myTitle.text = title_profile;
	}
		// materialtextbox.selectedHintTextColor = Color.create(100, 86, 218, 245)
	tvUsd.text = "USD";
	tvAmount.text = "$300"
	// tvLine.text = ""
	btnCont.onPress = () => router.push("/pages/pgSendMoneyReview", {title:title_profile, image:img_profile, amount:tvAmount});

	}

module.exports = PgSendMoneyAmount;
