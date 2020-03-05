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
const FlexLayout = extend(require('sf-core/ui/flexlayout'));
const ScrollView = extend(require('sf-core/ui/scrollview'));
const ImageView = extend(require('sf-core/ui/imageview'));
const TextView = extend(require('sf-core/ui/textview'));
const ListView = extend(require('sf-core/ui/listview'));
const propFactory = require('@smartface/contx/lib/smartface/sfCorePropFactory');
const AttributedString = require('sf-core/ui/attributedstring');
const createAttributedStrings = require('@smartface/html-to-text');
const actionAddChild = require('@smartface/contx/lib/smartface/action/addChild');
const FlexBtnIcon = extend(require('../components/FlexBtnIcon'));
const LstvSummary = extend(require('../components/LstvSummary'));

function addChild(childName, ChildClass, pageInstance) {
	this.children = this.children || {};
	this.children[childName] = new ChildClass(pageInstance);
	if (this.layout) this.layout.addChild(this.children[childName]);
	else this.addChild(this.children[childName]);
}
// Constructor
function $PgPayments_1(_super, props) {
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
	addChild.call(this, 'flexLayout1', $FlexLayout1_, this);
	pageContextPatch(this, 'pgPayments_1');
}
$PgPayments_1.$$styleContext = {
	classNames: '.sf-page .page',
	defaultClassNames: ' .default_page',
	userProps: {
		paddingBottom: null,
		paddingLeft: null,
		paddingRight: null,
		paddingTop: 20
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
const $PgPayments_1_ = Page($PgPayments_1);
function $FlexLayout1(_super, pageInstance) {
	_super(this);

	addChild.call(this, 'scrollView1', $FlexLayout1$$ScrollView1_, pageInstance);
	addChild.call(this, 'flexLayout1', $FlexLayout1$$FlexLayout1_, pageInstance);
}
$FlexLayout1.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: { left: 0, marginTop: 20, paddingTop: 20, top: 0 }
};
const $FlexLayout1_ = FlexLayout($FlexLayout1);
function $FlexLayout1$$ScrollView1(_super, pageInstance) {
	_super(this, { autoSizeEnabled: true });

	addChild.call(
		this,
		'flexLayout2',
		$FlexLayout1$$ScrollView1$$FlexLayout2_,
		pageInstance
	);
	addChild.call(
		this,
		'flexLayout3',
		$FlexLayout1$$ScrollView1$$FlexLayout3_,
		pageInstance
	);
	addChild.call(
		this,
		'flexLayout4',
		$FlexLayout1$$ScrollView1$$FlexLayout4_,
		pageInstance
	);
	pageInstance.scrollView1 = this;
}
$FlexLayout1$$ScrollView1.$$styleContext = {
	classNames: '.sf-scrollView',
	defaultClassNames: '.default_common .default_scrollView',
	userProps: {
		flexProps: { alignSelf: 'STRETCH', flexGrow: 1 },
		height: null,
		layout: { flexProps: { justifyContent: 'FLEX_START' } }
	}
};
const $FlexLayout1$$ScrollView1_ = ScrollView($FlexLayout1$$ScrollView1);
function $FlexLayout1$$ScrollView1$$FlexLayout2(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'imgvSmartbankLogo',
		$FlexLayout1$$ScrollView1$$FlexLayout2$$ImgvSmartbankLogo_,
		pageInstance
	);
	addChild.call(
		this,
		'flexLayout1',
		$FlexLayout1$$ScrollView1$$FlexLayout2$$FlexLayout1_,
		pageInstance
	);
	addChild.call(
		this,
		'imgSearch',
		$FlexLayout1$$ScrollView1$$FlexLayout2$$ImgSearch_,
		pageInstance
	);
}
$FlexLayout1$$ScrollView1$$FlexLayout2.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: {
			flexGrow: null,
			flexDirection: 'ROW',
			alignSelf: 'STRETCH',
			alignItems: 'CENTER'
		},
		height: null,
		left: 0,
		paddingLeft: 16,
		paddingRight: 16,
		top: 0,
		width: null
	}
};
const $FlexLayout1$$ScrollView1$$FlexLayout2_ = FlexLayout(
	$FlexLayout1$$ScrollView1$$FlexLayout2
);
function $FlexLayout1$$ScrollView1$$FlexLayout2$$ImgvSmartbankLogo(
	_super,
	pageInstance
) {
	_super(this);
}
$FlexLayout1$$ScrollView1$$FlexLayout2$$ImgvSmartbankLogo.$$styleContext = {
	classNames: '.sf-imageView .sf-img-smartbank',
	defaultClassNames: '.default_common .default_imageView',
	userProps: { flexProps: { alignSelf: 'FLEX_START' }, marginBottom: null }
};
const $FlexLayout1$$ScrollView1$$FlexLayout2$$ImgvSmartbankLogo_ = ImageView(
	$FlexLayout1$$ScrollView1$$FlexLayout2$$ImgvSmartbankLogo
);

function $FlexLayout1$$ScrollView1$$FlexLayout2$$FlexLayout1(
	_super,
	pageInstance
) {
	_super(this);
}
$FlexLayout1$$ScrollView1$$FlexLayout2$$FlexLayout1.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: { left: 0, top: 0 }
};
const $FlexLayout1$$ScrollView1$$FlexLayout2$$FlexLayout1_ = FlexLayout(
	$FlexLayout1$$ScrollView1$$FlexLayout2$$FlexLayout1
);

function $FlexLayout1$$ScrollView1$$FlexLayout2$$ImgSearch(
	_super,
	pageInstance
) {
	_super(this);

	pageInstance.imgSearch = this;
}
$FlexLayout1$$ScrollView1$$FlexLayout2$$ImgSearch.$$styleContext = {
	classNames: '.sf-imageView',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {
		flexProps: { alignSelf: 'FLEX_START' },
		height: null,
		image: 'icon_search.png',
		imageFillType: 'ASPECTFILL'
	}
};
const $FlexLayout1$$ScrollView1$$FlexLayout2$$ImgSearch_ = ImageView(
	$FlexLayout1$$ScrollView1$$FlexLayout2$$ImgSearch
);

function $FlexLayout1$$ScrollView1$$FlexLayout3(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'tvMoney',
		$FlexLayout1$$ScrollView1$$FlexLayout3$$TvMoney_,
		pageInstance
	);
	addChild.call(
		this,
		'tvAccountBalance',
		$FlexLayout1$$ScrollView1$$FlexLayout3$$TvAccountBalance_,
		pageInstance
	);
}
$FlexLayout1$$ScrollView1$$FlexLayout3.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: {
			alignSelf: 'CENTER',
			justifyContent: 'FLEX_START',
			flexGrow: null
		},
		left: 0,
		marginTop: 1,
		top: 0
	}
};
const $FlexLayout1$$ScrollView1$$FlexLayout3_ = FlexLayout(
	$FlexLayout1$$ScrollView1$$FlexLayout3
);
function $FlexLayout1$$ScrollView1$$FlexLayout3$$TvMoney(_super, pageInstance) {
	_super(this, { text: '\n' });

	pageInstance.tvMoney = this;
}
$FlexLayout1$$ScrollView1$$FlexLayout3$$TvMoney.$$styleContext = {
	classNames: '.sf-textView',
	defaultClassNames: '.default_common .default_textView',
	userProps: {
		flexProps: { alignSelf: 'CENTER' },
		font: {
			family: 'SFProText',
			style: 'Semibold',
			bold: true,
			italic: false,
			size: 50
		},
		height: null,
		left: 0,
		marginBottom: null,
		marginTop: 1,
		textAlignment: 'BOTTOMCENTER',
		top: 0
	}
};
const $FlexLayout1$$ScrollView1$$FlexLayout3$$TvMoney_ = TextView(
	$FlexLayout1$$ScrollView1$$FlexLayout3$$TvMoney
);

function $FlexLayout1$$ScrollView1$$FlexLayout3$$TvAccountBalance(
	_super,
	pageInstance
) {
	_super(this);

	pageInstance.tvAccountBalance = this;
	var html =
		'<span style="font-family: SFProText-Regular; font-size: 16px; white-space: pre-wrap; background-color: rgb(255, 255, 255);">  Lorem ipsum dolor sit amet, consectetur \n  adipiscing elit. <span style="color: rgb(0, 161, 241); font-size: 17.3913px; font-family: SFProText-Regular; background-color: rgb(255, 255, 255);">Donec quis semper justo. In  \n  ultrices metus nec sodales consectetur.</span> \n  Aliquam erat volutpat. <span style="font-size: 16px; font-family: SFProText-Regular; background-color: rgb(255, 255, 255); text-decoration-color: rgb(0, 0, 0); text-decoration-line: underline;">Suspendisse</span> potenti.</span><br>';
	var attributedStrings = createAttributedStrings(html);
	this.attributedText = attributedStrings.map(
		s => new AttributedString(propFactory.default(s))
	);
}
$FlexLayout1$$ScrollView1$$FlexLayout3$$TvAccountBalance.$$styleContext = {
	classNames: '.sf-textView',
	defaultClassNames: '.default_common .default_textView',
	userProps: { flexProps: { alignSelf: 'CENTER' }, marginTop: null }
};
const $FlexLayout1$$ScrollView1$$FlexLayout3$$TvAccountBalance_ = TextView(
	$FlexLayout1$$ScrollView1$$FlexLayout3$$TvAccountBalance
);

function $FlexLayout1$$ScrollView1$$FlexLayout4(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'flexBtnIconAddMoney',
		$FlexLayout1$$ScrollView1$$FlexLayout4$$FlexBtnIconAddMoney_,
		pageInstance
	);
	addChild.call(
		this,
		'flexBtnIconSendMoney',
		$FlexLayout1$$ScrollView1$$FlexLayout4$$FlexBtnIconSendMoney_,
		pageInstance
	);
	pageInstance.flexLayout4 = this;
}
$FlexLayout1$$ScrollView1$$FlexLayout4.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: {
			flexDirection: 'ROW',
			flexGrow: null,
			justifyContent: 'FLEX_START',
			alignSelf: 'STRETCH',
			alignItems: 'CENTER'
		},
		height: 70,
		left: 0,
		maxHeight: 70,
		top: 0,
		width: null
	}
};
const $FlexLayout1$$ScrollView1$$FlexLayout4_ = FlexLayout(
	$FlexLayout1$$ScrollView1$$FlexLayout4
);
function $FlexLayout1$$ScrollView1$$FlexLayout4$$FlexBtnIconAddMoney(
	_super,
	pageInstance
) {
	_super(this);

	pageInstance.flexBtnIconAddMoney = this;
}
$FlexLayout1$$ScrollView1$$FlexLayout4$$FlexBtnIconAddMoney.$$styleContext = {
	classNames: '.sf-flexLayout .sf-flx-btn-icon',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: { justifyContent: 'CENTER', positionType: 'RELATIVE' },
		left: 0,
		marginLeft: 16,
		marginRight: 16,
		paddingRight: 10,
		top: 0
	}
};
const $FlexLayout1$$ScrollView1$$FlexLayout4$$FlexBtnIconAddMoney_ = FlexBtnIcon(
	$FlexLayout1$$ScrollView1$$FlexLayout4$$FlexBtnIconAddMoney
);

function $FlexLayout1$$ScrollView1$$FlexLayout4$$FlexBtnIconSendMoney(
	_super,
	pageInstance
) {
	_super(this);

	pageInstance.flexBtnIconSendMoney = this;
}
$FlexLayout1$$ScrollView1$$FlexLayout4$$FlexBtnIconSendMoney.$$styleContext = {
	classNames: '.sf-flexLayout .sf-flx-btn-icon',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: { justifyContent: 'CENTER', positionType: 'RELATIVE' },
		left: 0,
		marginRight: 16,
		paddingRight: 10,
		top: 0
	}
};
const $FlexLayout1$$ScrollView1$$FlexLayout4$$FlexBtnIconSendMoney_ = FlexBtnIcon(
	$FlexLayout1$$ScrollView1$$FlexLayout4$$FlexBtnIconSendMoney
);

function $FlexLayout1$$FlexLayout1(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'listView1',
		$FlexLayout1$$FlexLayout1$$ListView1_,
		pageInstance
	);
}
$FlexLayout1$$FlexLayout1.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: { flexProps: { flexGrow: 2 }, marginTop: null }
};
const $FlexLayout1$$FlexLayout1_ = FlexLayout($FlexLayout1$$FlexLayout1);
function $FlexLayout1$$FlexLayout1$$ListView1(_super, pageInstance) {
	_super(this, { itemCount: 4 });
	var itemIndex = 0;
	this.onRowCreate = function() {
		var item = new $FlexLayout1$$FlexLayout1$$ListView1$$LstvSummary_();
		this.dispatch(actionAddChild(`item${++itemIndex}`, item));
		return item;
	};
	pageInstance.listView1 = this;
}
$FlexLayout1$$FlexLayout1$$ListView1.$$styleContext = {
	classNames: '.sf-listView',
	defaultClassNames: '.default_common .default_listView',
	userProps: {
		backgroundColor: 'rgba( 255, 255, 255, 1 )',
		borderColor: 'rgba( 242, 242, 242, 1 )',
		borderWidth: 1,
		flexProps: { flexGrow: 2, alignSelf: 'STRETCH' },
		height: null,
		left: 0,
		minHeight: 216,
		right: -1,
		top: 0
	}
};
const $FlexLayout1$$FlexLayout1$$ListView1_ = ListView(
	$FlexLayout1$$FlexLayout1$$ListView1
);
function $FlexLayout1$$FlexLayout1$$ListView1$$LstvSummary(
	_super,
	pageInstance
) {
	_super(this);
}
$FlexLayout1$$FlexLayout1$$ListView1$$LstvSummary.$$styleContext = {
	classNames: '.sf-listViewItem',
	defaultClassNames: '.default_common .default_listViewItem',
	userProps: {
		borderColor: 'rgba( 242, 242, 242, 1 )',
		borderWidth: 1,
		flexProps: { flexDirection: 'ROW', positionType: 'RELATIVE' },
		height: null,
		left: 0,
		top: 0,
		width: null
	}
};
const $FlexLayout1$$FlexLayout1$$ListView1$$LstvSummary_ = LstvSummary(
	$FlexLayout1$$FlexLayout1$$ListView1$$LstvSummary
);

/**
 * @event onLoad
 * This event is called once when page is created. You can create views and add them to page in this callback.
 */
function onLoad() {
	// HeaderBar props
}

module.exports = $PgPayments_1_;
