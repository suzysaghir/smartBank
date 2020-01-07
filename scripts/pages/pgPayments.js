const TextView = require("sf-core/ui/textview");
const FlexLayout = require("sf-core/ui/flexlayout");
const Color = require("sf-core/ui/color");
const Image = require("sf-core/ui/image");
const { getCombinedStyle } = require("sf-extension-utils/lib/getCombinedStyle");
const extend = require('js-base/core/extend');
const PgPaymentsDesign = require('ui/ui_pgPayments');

const PgPayments = extend(PgPaymentsDesign)(
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
	const router = require("routes");
	const { tvMoney, tvAccountBalance, flexLayoutPayments, tvDate, tvAmount, listView1, btnAddMoney, btnSendMoney } = page;
	
	tvMoney.text = "$1230";
	tvAccountBalance.text = "Acoount Balance";
	
	btnSendMoney.onPress = () => router.push("/pages/pgSendMoney");
	btnSendMoney.icon = Image.createFromFile("images://icon_this_month.png");
	
	btnAddMoney.iconImage = Image.createFromFile("images://icon_this_month.png"); 
	// btnSendMoney.backgroundImage = Image.createFromFile("images://icon_this_month.png");

	tvDate.text = "TODAY";
	tvAmount.text = "$200";


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
	listView1.itemCount =  myDataSet.length;
	
    var _headerData = [
        {date:"Today", amount:"$200"},
        {date:"Yesterday", amount:"$650"},
        {date:"2 Days ago", amount:"$943"},
        {date:"1 Month ago", amount:"$140"},

    ];
    
    var _rowData = [
    	myDataSet,
    	myDataSet,
    	myDataSet,
    	myDataSet,
    ];
    
    var dataArray = [];
    function pushDataToArray(headerData,rowData){
        for (var i = 0; i < headerData.length; i++) {
            dataArray.push({isHeader : true, data : headerData[i]});
            for (var j = 0; j < myDataSet.length; j++) {
                dataArray.push({isHeader : false, data:myDataSet[j]});
            }
        }
    };
    
    pushDataToArray(_headerData,_rowData);
        
    listView1.onRowHeight = function(index){
        if (dataArray[index].isHeader) {
            return 20;
        }
        return 40;
        };
        
	listView1.onRowBind = function(listViewItem, index) {
        // var myLabelTitle = listViewItem.myLabelTitle;
        if(dataArray[index].isHeader) {
        	// this.layout.removeChild(flexLayoutPayments);
	  //      var myFlexLayout = new FlexLayout({
	  //  		alignSelf: FlexLayout.AlignSelf.STRETCH,
	  //  		alignItems: FlexLayout.AlignItems.STRETCH,
	  //  		backgroundColor: Color.create("#D3F6FF"),
	  //  		justifyContent:FlexLayout.JustifyContent.SPACE_BETWEEN,
	  //      });
	        
			// var tv_date = new TextView({
			// 	alignSelf:FlexLayout.AlignSelf.FLEX_START,
			// });
			// var tv_amount = new TextView({
			// 	alignSelf:FlexLayout.AlignSelf.FLEX_START,
			// });
			
			// const tvStyle = getCombinedStyle(".sf-paymentLstv");
		 //   Object.assign(tv_date, tvStyle);
		 //   Object.assign(tv_amount, tvStyle);
		 //   console.log("dataArray[index].data.date : ",dataArray[index].data.date)
	  //  	tv_date.text = dataArray[index].data.date;
			// tv_amount.text = dataArray[index].data.amount;
			
		 //   myFlexLayout.addChild(tv_date);
		 //   myFlexLayout.addChild(tv_amount);
		 //   this.layout.addChild(myFlexLayout);
	        // ##################################################
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

module.exports = PgPayments;






