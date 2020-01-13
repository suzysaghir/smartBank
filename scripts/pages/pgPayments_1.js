const Font = require("sf-core/ui/font");
const Label = require("sf-core/ui/label");
const ListViewItem = require("sf-core/ui/listviewitem");
const TextAlignment = require("sf-core/ui/textalignment");
const Color = require("sf-core/ui/color");
const FlexLayout = require("sf-core/ui/flexlayout");
const Image = require("sf-core/ui/image");
const TextView = require("sf-core/ui/textview");
const addChild = require("@smartface/contx/lib/smartface/action/addChild");

const { getCombinedStyle } = require("sf-extension-utils/lib/getCombinedStyle");
var LstvSummary = require("components/LstvSummary")
var ListViewItemHeader = require("components/FlexListViewHeader")

const extend = require('js-base/core/extend');
const PgPayments_1Design = require('ui/ui_pgPayments_1');
const PgPayments_1 = extend(PgPayments_1Design)(
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
	const { tvMoney, tvAccountBalance, flexBtnIconAddMoney, flexBtnIconSendMoney, flxLstvHeader, listView1, lstvSummary } = page;

	flexBtnIconAddMoney.imgIcon.image = Image.createFromFile("images://payment_icon_add_money.png");
	flexBtnIconSendMoney.imgIcon.image = Image.createFromFile("images://payment_icon_send_money.png");

	flexBtnIconAddMoney.label1.text = "Add Money";
	flexBtnIconSendMoney.label1.text = "Send Money";
	tvMoney.text = "$1230";
	tvAccountBalance.text = "Acoount Balance";
	flexBtnIconSendMoney.onTouchEnded = () => router.push("/pages/pgSendMoney");

	// tvDate.text = "TODAY";
	// tvAmount.text = "$200";
// "TODAY", "YESTERDAY", "2 DAYS AGO", "LAST MONTH"
    var _headerData = [
        "Complementary",
        "Analogous",
        "Tetradic",
        "Monochromatic"
    ];
    
    var _rowData = [
        [{
		title: '111 Doe',
		image: Image.createFromFile("images://travel.png"),
		price: '40',
		sign: "+"
		},{
		title: 'Frank James',
		image: Image.createFromFile("images://shopping.png"),
		price: '20',
		sign: "-"
	}], [{
		title: '222 Doe',
		image: Image.createFromFile("images://adam.png"),
		price: '40',
		sign: "+"
		},{
		title: 'Frank James',
		image: Image.createFromFile("images://adam2.png"),
		price: '20',
		sign: "-"
	}], [{
		title: '333 Doe',
		image: Image.createFromFile("images://travel.png"),
		price: '40',
		sign: "+"
		},{
		title: 'Frank James',
		image: Image.createFromFile("images://shopping.png"),
		price: '20',
		sign: "-"
	}], [{
		title: '444 Doe',
		image: Image.createFromFile("images://travel.png"),
		price: '40',
		sign: "+"
		},{
		title: 'Frank James',
		image: Image.createFromFile("images://shopping.png"),
		price: '20',
		sign: "-"
	}]];

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
   	// listView1.itemCount =  myDataSet.length;
   	listView1.itemCount = 8;
   	
    var itemIndex = 0;
   	 listView1.onRowCreate = function(type) {
            var myListViewItem = new ListViewItem();
            if (type == 1) {// Header
    //         	var myFlexLayout = new FlexLayout({
				//     // flexGrow:1,
    // 				backgroundColor: Color.create("#d3f6ff"),
    // 				height: 20,
    // 				alignSelf: FlexLayout.AlignSelf.STRETCH
				// });
    //         	var tvDate = new TextView({
				//     visible: true,
				//     textColor: Color.WHITE,
				//     text: " "
				// });
				// myFlexLayout.addChild(tvDate,"myDate");
    //             myListViewItem.addChild(myFlexLayout);

    //             myListViewItem.myFlexLayout = myFlexLayout; 
    //             myListViewItem.tvDate = tvDate; 
                
            	var header = new ListViewItemHeader()
            	myListViewItem.myHeader = header;
            	// myListViewItem = new ListViewItemHeader();

            }else{ 
                 myListViewItem = new LstvSummary();
            }
          this.dispatch(addChild(`item${++itemIndex}`, myListViewItem));
           
          return myListViewItem;
        };
    listView1.onRowHeight = function(index){
        if (dataArray[index].isHeader) {
            return 20;
        }
        return 60;
        };
        
	listView1.onRowBind = function(listViewItem, index) {
	    console.log("the index is  : ",index)
	    console.log("IS HEADER  : ",dataArray[index].isHeader);

		if (dataArray[index].isHeader) {
		        	// var date = listViewItem.tvDate;
		        	// var amount = listViewItem.tvAmount;

		         //   date.text = "the date "
		         //   amount.text = "the amount "
		         console.log("date",ListViewItem.tvDate)
		         console.log("item : ",ListViewItem)
		         console.log("",ListViewItem)


		        }else{
		            // myLabelTitle.backgroundColor = Color.create(dataArray[index].data);
        			var iconImage = listViewItem.imgIcon;
					var myTitle = listViewItem.tvTitle;
					var mysign = listViewItem.tvsign;
					var myPrice = listViewItem.tvPrice;
		 			var mySign = listViewItem.tvDollersign;
		
					mySign.text = "$"
		            myTitle.text = dataArray[index].data.title;
		            iconImage.image = dataArray[index].data.image.android.round(50);
					myPrice.text = dataArray[index].data.price;
					mysign.text = dataArray[index].data.sign;
		        }
	}.bind(this);

    listView1.onRowType = function(index){
            if (dataArray[index].isHeader) {
                return 1;
            }else{
                return 2;
            }
        };
	
    // listView1.onRowType = function(index){
    //         var myListViewItem = new ListViewItem();
    //         if (dataArray[index].isHeader) {
    //         	myListViewItem = new ListViewItemHeader()
    //         }else{ 
    //              myListViewItem = new LstvSummary();
    //         }
    //       //this.dispatch(addChild(`item${++itemIndex}`, myListViewItem));
           
    //       return myListViewItem;
    //     };
		
	
}

module.exports = PgPayments_1;
