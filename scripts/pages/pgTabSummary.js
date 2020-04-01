const Color = require("sf-core/ui/color");
const Picker = require("sf-core/ui/picker");
const Image = require("sf-core/ui/image");
const extend = require('js-base/core/extend');
const PgTabSummaryDesign = require('ui/ui_pgTabSummary');

const PgTabSummary = extend(PgTabSummaryDesign)(
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
	const { flexBtnIconRight, listView1, tvCategory, tvSpending } = page;
	flexBtnIconRight.label1.text = "This Month";
	flexBtnIconRight.imgIcon.image = Image.createFromFile("images://summary_arrow.png");
	tvCategory.textColor = Color.create('#70C8E0');
	tvCategory.text = "Category";

	tvSpending.text = "Spending";
	tvSpending.textColor = Color.create('#70C8E0');
	var items = [
		"Yesterday",
		"Today",
		"This Month ",
		"Last Month"
	];

	var index = 0;

	function btnPickOnPress() {
		console.log(`Showing the picker with index ${index}`);
		const itemPicker = new Picker({
			items: items,
			currentIndex: index //restores previous selection
		});
		itemPicker.show(okCallback, cancelCallback);
	}

	var okCallback = function(params) {
		console.log('Selected index: ' + params.index);
	}
	var cancelCallback = function() {
		console.log('Canceled');
	}
	flexBtnIconRight.onTouchEnded = () => {
		console.log(`Showing the picker with index ${index}`);
		const itemPicker = new Picker({
			items: items,
			currentIndex: index //restores previous selection
		});
		itemPicker.show(okCallback, cancelCallback);
	}

	var myDataSet = [{
		title: 'Travel',
		image: Image.createFromFile("images://travel.png").android.round(50),
		price: '$40',
	}, {
		title: 'Shopping',
		image: Image.createFromFile("images://shopping.png").android.round(50),
		price: '$20',
	}, {
		title: 'Resturant',
		image: Image.createFromFile("images://resturant.png").android.round(50),
		price: '$200',
	}, {
		title: 'Personal Care',
		image: Image.createFromFile("images://personal_care.png").android.round(50),
		price: '$389',
	}];
	listView1.itemCount = myDataSet.length;

	listView1.onRowBind = function(listViewItem, index) {
		var iconImage = listViewItem.imgIcon;
		var myTitle = listViewItem.tvTitle;
		var myPrice = listViewItem.tvsign;
		// var mySign = listViewItem.tvDollersign;
		listViewItem.borderWidth = 1
		// listViewItem.border = 1

		// mySign.text = "$"
		iconImage.image = myDataSet[index].image;
		myTitle.text = myDataSet[index].title;
		myPrice.text = myDataSet[index].price;
	}
	listView1.onPullRefresh = function() {
		listView1.refreshData();
		listView1.stopRefresh();
	}
}

module.exports = PgTabSummary;
