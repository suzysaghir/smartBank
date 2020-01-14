const Image = require("sf-core/ui/image");
const extend = require('js-base/core/extend');
const PgSendMoneyDesign = require('ui/ui_pgSendMoney');

const PgSendMoney = extend(PgSendMoneyDesign)(
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
	const {tvSelect, listView1} = page;
	tvSelect.text = "SELECT CONTACT";

var myDataSet = [{
		title: 'John Doe',
		image: Image.createFromFile("images://adam.png"),
		imagePath: "images://adam.png"

	}, {
		title: 'Frank James',
		image: Image.createFromFile("images://adam2.png"),
		imagePath: "images://adam2.png"
		}];
		listView1.itemCount =  myDataSet.length;

	listView1.onRowBind = function(listViewItem, index) {
		var iconImage = listViewItem.imgIcon;
		var myTitle = listViewItem.tvTitle;
		// console.log("++++++")
		iconImage.image = myDataSet[index].image.android.round(50);
		myTitle.text = myDataSet[index].title;
	}	
    listView1.onRowSelected = function(listViewItem, index) {
			var myImage = myDataSet[index].image.android.round(50);
			var myTitle = myDataSet[index].title;
		
			router.push("/pages/pgSendMoneyAmount/title,image", {title:myTitle, image:myImage})
		
        };

	
	
	
	
}


module.exports = PgSendMoney;
