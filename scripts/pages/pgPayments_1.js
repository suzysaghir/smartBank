const Color = require("sf-core/ui/color");
const FlexLayout = require("sf-core/ui/flexlayout");
const Image = require("sf-core/ui/image");
const TextView = require("sf-core/ui/textview");
const { getCombinedStyle } = require("sf-extension-utils/lib/getCombinedStyle");

/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');
const PgPayments_1Design = require('ui/ui_pgPayments_1');

const PgPayments_1 = extend(PgPayments_1Design)(
	// Constructor
	function(_super) {
		// Initalizes super class for this page scope
		_super(this);
		// Overrides super.onShow method
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		// Overrides super.onLoad method
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
	}
);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
function onShow(superOnShow) {
	superOnShow();
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
	superOnLoad();
		const page = this;
	const router = require("routes");
	const { tvMoney, tvAccountBalance, listView1, btnSendMoney } = page;
	
	tvMoney.text = "$1230";
	tvAccountBalance.text = "Acoount Balance";
	
	btnSendMoney.onPress = () => router.push("/pages/pgSendMoney");
	// tvDate.text = "TODAY";
	// tvAmount.text = "$200";


	var myDataSet = [{
		title: 'John Doe',
		image: Image.createFromFile("images://travel.png"),
		price: '40',
		sign: "+"
	}, {
		title: 'Frank James',
		image: Image.createFromFile("images://shopping.png"),
		price: '20',
		sign: "-"
	}, {
		title: 'Starbucks',
		image: Image.createFromFile("images://resturant.png"),
		price: '200',
		sign: "+"
	}, {
		title: 'Amazon',
		image: Image.createFromFile("images://personal_care.png"),
		price: '38',
		sign: "-"
	}];
	
    var _headerData = [
        {date:"Today", amount:"$200"},
        {date:"Yesterday", amount:"$650"},
        {date:"2 Days ago", amount:"$943"},
        // {date:"1 Month ago", amount:"$140"},
    ];
    
    var _rowData = [
        [{
		title: 'John Doe',
		image: Image.createFromFile("images://travel.png"),
		price: '40',
		sign: "+"
		},{
		title: 'Frank James',
		image: Image.createFromFile("images://shopping.png"),
		price: '20',
		sign: "-"
	}],
        [ {
		title: 'Starbucks',
		image: Image.createFromFile("images://resturant.png"),
		price: '200',
		sign: "+"
		},{
		title: 'Amazon',
		image: Image.createFromFile("images://personal_care.png"),
		price: '38',
		sign: "-"
	}], [{
		title: 'Facebook',
		image: Image.createFromFile("images://resturant.png"),
		price: '394',
		sign: "+"
		},{
		title: 'Amazon',
		image: Image.createFromFile("images://personal_care.png"),
		price: '38',
		sign: "-"
	}]
    ];

    var dataArray = [];
        function pushDataToArray(headerData,rowData){
            for (var i = 0; i < headerData.length; i++) {
                dataArray.push({isHeader : true, data : headerData[i]});
                for (var j = 0; j <  rowData[i].length; j++) {
                    dataArray.push({isHeader : false, data : rowData[i][j]});
                }
            }
        };
    
    pushDataToArray(_headerData,_rowData);
   	listView1.itemCount =  myDataSet.length;

    listView1.onRowHeight = function(index){
        if (dataArray[index].isHeader) {
            return 20;
        }
        return 40;
        };
        
	listView1.onRowBind = function(listViewItem, index) {
        // var myLabelTitle = listViewItem.myLabelTitle;
	    console.log("the index is  : ",index)

        if(dataArray[index].isHeader) {
        	// this.layout.removeChild(flexLayoutPayments);
	        var myFlexLayout = new FlexLayout({
	    		alignSelf: FlexLayout.AlignSelf.STRETCH,
	    		alignItems: FlexLayout.AlignItems.STRETCH,
	    		backgroundColor: Color.create("#D3F6FF"),
	    		justifyContent:FlexLayout.JustifyContent.SPACE_BETWEEN,
	        });
	        
			var tv_date = new TextView({
				alignSelf:FlexLayout.AlignSelf.FLEX_START,
			});
			var tv_amount = new TextView({
				alignSelf:FlexLayout.AlignSelf.FLEX_END,
			});
			
			const tvStyle = getCombinedStyle(".sf-paymentLstv");
		    Object.assign(tv_date, tvStyle);
		    Object.assign(tv_amount, tvStyle);
		    console.log("dataArray[index].data.date : ",dataArray[index].data.date)
	    	tv_date.text = dataArray[index].data.date;
			tv_amount.text = dataArray[index].data.amount;
			
		    myFlexLayout.addChild(tv_date);
		    myFlexLayout.addChild(tv_amount);
		    this.layout.addChild(myFlexLayout);
	        
	        // myFlexLayout = Object.assign({}, flexLayoutPayments);
			// var tvdate = new TextView();
			// tvdate = tvDate;
			   //     	var tvdate = tvDate;
				
				
				
				
        	// var myFlexLayout = flexLayoutPayments;
   //     	var tvdate = tvDate;
	  //  	tvdate.text = "TODAY";
		// myFlexLayout.addChild(tvdate);
		// myFlexLayout.addChild(tvAmount);

	// 	// page.layout.addChild(myFlexLayout);
 //       // myLabelTitle.text = dataArray[index].data
        } else{
        	
			var iconImage = listViewItem.imgIcon;
			var myTitle = listViewItem.tvTitle;
			var mysign = listViewItem.tvsign;
			var myPrice = listViewItem.tvPrice;
	
			iconImage.image = myDataSet[index].image;
			myTitle.text = myDataSet[index].title;
			myPrice.text = myDataSet[index].price;
			mysign.text = myDataSet[index].sign;
            }

		
	}.bind(this);

    listView1.onRowType = function(index){
            if (dataArray[index].isHeader) {
                return 2;
            }else{
                return 1;
            }
        };
	
	
	
}

module.exports = PgPayments_1;
