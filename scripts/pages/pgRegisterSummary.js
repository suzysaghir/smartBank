const Picker = require("sf-core/ui/picker");
const Image = require("sf-core/ui/image");
const extend = require('js-base/core/extend');
const PgRegisterSummaryDesign = require('ui/ui_pgRegisterSummary');

const PgRegisterSummary = extend(PgRegisterSummaryDesign)(
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
	const {listView1, btnThisMonth}  = page;
	
	
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
	btnThisMonth.onPress = () =>{
		console.log(`Showing the picker with index ${index}`);
        const itemPicker = new Picker({
            items: items,
            currentIndex: index //restores previous selection
        });
        itemPicker.show(okCallback, cancelCallback);
	} 

	var myDataSet = [{
		title: 'Travel',
		image: Image.createFromFile("images://travel.png"),
		price: '40',
	}, {
		title: 'Shopping',
		image: Image.createFromFile("images://shopping.png"),
		price: '20',
	}, {
		title: 'Resturant',
		image: Image.createFromFile("images://resturant.png"),
		price: '200',
	}, {
		title: 'Personal Care',
		image: Image.createFromFile("images://personal_care.png"),
		price: '389',
	}];
	listView1.itemCount =  myDataSet.length;
		
	listView1.onRowBind = function(listViewItem, index) {
		var iconImage = listViewItem.imgIcon;
		var myTitle = listViewItem.tvTitle;
		var myPrice = listViewItem.tvPrice;

		iconImage.image = myDataSet[index].image;
		myTitle.text = myDataSet[index].title;
		myPrice.text = myDataSet[index].price;
		
	}
	
}
module.exports = PgRegisterSummary;
