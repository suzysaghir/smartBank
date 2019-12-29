const Color = require("sf-core/ui/color");
const Image = require("sf-core/ui/image");
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
	const router = this.router;
	const { tvMoney, tvAccountBalance, flexLayoutPayments, tvDate, tvAmount, listView1, btnSendMoney } = page;
	
	tvMoney.text = "$1230";
	tvAccountBalance.text = "Acoount Balance";
	
	btnSendMoney.onPress = () => router.push("/pages/pgSendMoney");

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
        "Complementary",
        "Analogous",
        "Tetradic",
        "Monochromatic"
    ];
    
    var _rowData = [
        ["#ffb8c9","#b8ffee"],
        ["#ffb8ed","#ffb8c9"],
        ["#eeb8ff","#ffb8c9"],
        ["#ff6c8f","#ff85a2"]
    ];
    
    var dataArray = [];
    function pushDataToArray(headerData,rowData){
        for (var i = 0; i < headerData.length; i++) {
            dataArray.push({isHeader : true, data : headerData[i]});
            for (var j = 0; j <  rowData[i].length; j++) {
                dataArray.push({isHeader : false, data : rowData[i][j]});
            }
            console.log("dataArray", dataArray)
        }
    };
    pushDataToArray(_headerData,_rowData);
        
    listView1.onRowHeight = function(index){
        if (dataArray[index].isHeader) {
            return 100;
        }
        return 70;
        };
        
	listView1.onRowBind = function(listViewItem, index) {
        // var myLabelTitle = listViewItem.myLabelTitle;
        console.log(dataArray[index])
        if (dataArray[index].isHeader) {
        	var myFlexLayout = flexLayoutPayments;
        	var tvdate = tvDate;
	    	tvdate.text = "TODAY";
			tvAmount.text = "200";
		// myFlexLayout.addChild(tvdate);
		// myFlexLayout.addChild(tvAmount);

		// page.layout.addChild(myFlexLayout);
        // myLabelTitle.text = dataArray[index].data
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

		
	}

    listView1.onRowType = function(index){
    	console.log(" the index is:  ",index)
            if (dataArray[index].isHeader) {
                return 2;
            }else{
                return 1;
            }
        };
	
	
	
	
	
	
}

module.exports = PgPayments;






