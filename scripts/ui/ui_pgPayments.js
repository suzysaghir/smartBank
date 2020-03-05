//------------------------------------------------------------------------------
//
//     This code was auto generated.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
//
//------------------------------------------------------------------------------

const extend = require('js-base/core/extend');
const PageBase = require('sf-core/ui/page');
const Page = extend(PageBase);
const pageContextPatch = require('@smartface/contx/lib/smartface/pageContextPatch');
const ImageView = extend(require('sf-core/ui/imageview'));
const TextView = extend(require('sf-core/ui/textview'));
const FlexLayout = extend(require('sf-core/ui/flexlayout'));
const Button = extend(require('sf-core/ui/button'));
const ListView = extend(require('sf-core/ui/listview'));
const propFactory = require('@smartface/contx/lib/smartface/sfCorePropFactory');
const AttributedString = require('sf-core/ui/attributedstring');
const createAttributedStrings = require('@smartface/html-to-text');
const actionAddChild = require('@smartface/contx/lib/smartface/action/addChild');
const LstvSummary = extend(require('../components/LstvSummary'));

function addChild(childName, ChildClass, pageInstance) {
	this.children = this.children || {};
	this.children[childName] = new ChildClass(pageInstance);
	if (this.layout) this.layout.addChild(this.children[childName]);
	else this.addChild(this.children[childName]);
}
// Constructor
function $PgPayments(_super, props) {
	// Initalizes super class for this page scope
	_super(
		this,
		Object.assign(
			{},
			{
				onLoad: onLoad.bind(this)
			},
			props || {}
		)
	);
	this.children = {};
	this.children['statusBar'] = this.statusBar || {};
	this.children['headerBar'] = this.headerBar;
	addChild.call(this, 'imgvSmartbankLogo', $ImgvSmartbankLogo_, this);
	addChild.call(this, 'imageView1', $ImageView1_, this);
	addChild.call(this, 'tvMoney', $TvMoney_, this);
	addChild.call(this, 'tvAccountBalance', $TvAccountBalance_, this);
	addChild.call(this, 'flexLayoutbtn', $FlexLayoutbtn_, this);
	addChild.call(this, 'flexLayoutPayments', $FlexLayoutPayments_, this);
	addChild.call(this, 'listView1', $ListView1_, this);
	pageContextPatch(this, 'pgPayments');
}
$PgPayments.$$styleContext = {
	classNames: '.sf-page .page',
	defaultClassNames: ' .default_page',
	userProps: {
		paddingBottom: null,
		paddingLeft: null,
		paddingRight: null,
		paddingTop: null
	},
	statusBar: {
		classNames: '.sf-statusBar',
		defaultClassNames: ' .default_statusBar',
		userProps: { visible: true }
	},
	headerBar: {
		classNames: '.sf-headerBar',
		defaultClassNames: ' .default_headerBar',
		userProps: { visible: false }
	}
};
const $PgPayments_ = Page($PgPayments);
function $ImgvSmartbankLogo(_super, pageInstance) {
	_super(this);
}
$ImgvSmartbankLogo.$$styleContext = {
	classNames: '.sf-imageView .sf-img-smartbank',
	defaultClassNames: '.default_common .default_imageView',
	userProps: { flexProps: { alignSelf: 'FLEX_START' } }
};
const $ImgvSmartbankLogo_ = ImageView($ImgvSmartbankLogo);

function $ImageView1(_super, pageInstance) {
	_super(this);
}
$ImageView1.$$styleContext = {
	classNames: '.sf-imageView',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {
		flexProps: { alignSelf: 'FLEX_END' },
		height: 20,
		image: 'icon_search.png',
		marginRight: 30,
		width: 20
	}
};
const $ImageView1_ = ImageView($ImageView1);

function $TvMoney(_super, pageInstance) {
	_super(this, { text: '\n' });

	pageInstance.tvMoney = this;
}
$TvMoney.$$styleContext = {
	classNames: '.sf-textView',
	defaultClassNames: '.default_common .default_textView',
	userProps: {
		font: {
			family: 'SFProText',
			style: 'Semibold',
			bold: true,
			italic: false,
			size: 60
		},
		height: null,
		marginBottom: null,
		marginTop: 20,
		textAlignment: 'BOTTOMCENTER'
	}
};
const $TvMoney_ = TextView($TvMoney);

function $TvAccountBalance(_super, pageInstance) {
	_super(this, { text: '\n' });

	pageInstance.tvAccountBalance = this;
}
$TvAccountBalance.$$styleContext = {
	classNames: '.sf-textView',
	defaultClassNames: '.default_common .default_textView',
	userProps: {
		font: {
			family: 'SFProText',
			style: 'Medium',
			bold: false,
			italic: false,
			size: 16
		},
		height: null,
		marginTop: null,
		textAlignment: 'TOPCENTER',
		textColor: 'rgba( 203, 244, 255, 1 )'
	}
};
const $TvAccountBalance_ = TextView($TvAccountBalance);

function $FlexLayoutbtn(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'btnAddMoney',
		$FlexLayoutbtn$$BtnAddMoney_,
		pageInstance
	);
	addChild.call(
		this,
		'btnSendMoney',
		$FlexLayoutbtn$$BtnSendMoney_,
		pageInstance
	);
	pageInstance.flexLayoutbtn = this;
}
$FlexLayoutbtn.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: {
			flexDirection: 'ROW',
			justifyContent: 'SPACE_AROUND',
			flexGrow: null,
			positionType: 'RELATIVE',
			flexWrap: 'NOWRAP',
			alignContent: 'CENTER',
			alignSelf: 'STRETCH',
			alignItems: 'CENTER'
		},
		height: null,
		width: null
	}
};
const $FlexLayoutbtn_ = FlexLayout($FlexLayoutbtn);
function $FlexLayoutbtn$$BtnAddMoney(_super, pageInstance) {
	_super(this, { text: '   Add Money   ' });

	pageInstance.btnAddMoney = this;
}
$FlexLayoutbtn$$BtnAddMoney.$$styleContext = {
	classNames: '.sf-button',
	defaultClassNames: '.default_common .default_button',
	userProps: { flexProps: { alignSelf: 'CENTER' } }
};
const $FlexLayoutbtn$$BtnAddMoney_ = Button($FlexLayoutbtn$$BtnAddMoney);

function $FlexLayoutbtn$$BtnSendMoney(_super, pageInstance) {
	_super(this, { text: '   Send Money   ' });

	pageInstance.btnSendMoney = this;
}
$FlexLayoutbtn$$BtnSendMoney.$$styleContext = {
	classNames: '.sf-button',
	defaultClassNames: '.default_common .default_button',
	userProps: { flexProps: { alignSelf: 'CENTER' } }
};
const $FlexLayoutbtn$$BtnSendMoney_ = Button($FlexLayoutbtn$$BtnSendMoney);

function $FlexLayoutPayments(_super, pageInstance) {
	_super(this);

	addChild.call(this, 'tvDate', $FlexLayoutPayments$$TvDate_, pageInstance);
	addChild.call(this, 'tvAmount', $FlexLayoutPayments$$TvAmount_, pageInstance);
	pageInstance.flexLayoutPayments = this;
}
$FlexLayoutPayments.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		backgroundColor: 'rgba( 211, 246, 255, 1 )',
		flexProps: {
			flexDirection: 'ROW',
			justifyContent: 'SPACE_BETWEEN',
			flexGrow: null,
			alignItems: 'STRETCH',
			alignContent: 'STRETCH'
		}
	}
};
const $FlexLayoutPayments_ = FlexLayout($FlexLayoutPayments);
function $FlexLayoutPayments$$TvDate(_super, pageInstance) {
	_super(this);

	pageInstance.tvDate = this;
	var html =
		'<span style="font-family: SFProText-Regular; font-size: 16px; white-space: pre-wrap; background-color: rgb(255, 255, 255);">  Lorem ipsum dolor sit amet, consectetur \n  adipiscing elit. <span style="color: rgb(0, 161, 241); font-size: 17.3913px; font-family: SFProText-Regular; background-color: rgb(255, 255, 255);">Donec quis semper justo. In  \n  ultrices metus nec sodales consectetur.</span> \n  Aliquam erat volutpat. <span style="font-size: 16px; font-family: SFProText-Regular; background-color: rgb(255, 255, 255); text-decoration-color: rgb(0, 0, 0); text-decoration-line: underline;">Suspendisse</span> potenti.</span><br>';
	var attributedStrings = createAttributedStrings(html);
	this.attributedText = attributedStrings.map(
		s => new AttributedString(propFactory.default(s))
	);
}
$FlexLayoutPayments$$TvDate.$$styleContext = {
	classNames: '.sf-textView .sf-paymentLstv',
	defaultClassNames: '.default_common .default_textView',
	userProps: { flexProps: { alignSelf: 'FLEX_START' } }
};
const $FlexLayoutPayments$$TvDate_ = TextView($FlexLayoutPayments$$TvDate);

function $FlexLayoutPayments$$TvAmount(_super, pageInstance) {
	_super(this);

	pageInstance.tvAmount = this;
	var html =
		'<span style="font-family: SFProText-Regular; font-size: 16px; white-space: pre-wrap; background-color: rgb(255, 255, 255);">  Lorem ipsum dolor sit amet, consectetur \n  adipiscing elit. <span style="color: rgb(0, 161, 241); font-size: 17.3913px; font-family: SFProText-Regular; background-color: rgb(255, 255, 255);">Donec quis semper justo. In  \n  ultrices metus nec sodales consectetur.</span> \n  Aliquam erat volutpat. <span style="font-size: 16px; font-family: SFProText-Regular; background-color: rgb(255, 255, 255); text-decoration-color: rgb(0, 0, 0); text-decoration-line: underline;">Suspendisse</span> potenti.</span><br>';
	var attributedStrings = createAttributedStrings(html);
	this.attributedText = attributedStrings.map(
		s => new AttributedString(propFactory.default(s))
	);
}
$FlexLayoutPayments$$TvAmount.$$styleContext = {
	classNames: '.sf-textView .sf-paymentLstv',
	defaultClassNames: '.default_common .default_textView',
	userProps: { flexProps: { alignSelf: 'FLEX_END' } }
};
const $FlexLayoutPayments$$TvAmount_ = TextView($FlexLayoutPayments$$TvAmount);

function $ListView1(_super, pageInstance) {
	_super(this, { itemCount: 4, rowHeight: 80 });
	var itemIndex = 0;
	this.onRowCreate = function() {
		var item = new $ListView1$$LstvSummary_();
		this.dispatch(actionAddChild(`item${++itemIndex}`, item));
		return item;
	};
	pageInstance.listView1 = this;
}
$ListView1.$$styleContext = {
	classNames: '.sf-listView',
	defaultClassNames: '.default_common .default_listView',
	userProps: {
		backgroundColor: 'rgba( 255, 255, 255, 1 )',
		borderColor: 'rgba( 242, 242, 242, 1 )',
		borderWidth: 1,
		flexProps: { flexGrow: 1, alignSelf: 'STRETCH' },
		right: -1
	}
};
const $ListView1_ = ListView($ListView1);
function $ListView1$$LstvSummary(_super, pageInstance) {
	_super(this);
}
$ListView1$$LstvSummary.$$styleContext = {
	classNames: '.sf-listViewItem',
	defaultClassNames: '.default_common .default_listViewItem',
	userProps: {
		flexProps: { flexDirection: 'ROW', positionType: 'RELATIVE' },
		height: null,
		left: 0,
		top: 0,
		width: null
	}
};
const $ListView1$$LstvSummary_ = LstvSummary($ListView1$$LstvSummary);

/**
 * @event onLoad
 * This event is called once when page is created. You can create views and add them to page in this callback.
 */
function onLoad() {
	// HeaderBar props
	this.headerBar.title = 'payments';
}

module.exports = $PgPayments_;
