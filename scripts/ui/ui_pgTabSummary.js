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
const ImageView = extend(require('sf-core/ui/imageview'));
const TextView = extend(require('sf-core/ui/textview'));
const ListView = extend(require('sf-core/ui/listview'));
const propFactory = require('@smartface/contx/lib/smartface/sfCorePropFactory');
const AttributedString = require('sf-core/ui/attributedstring');
const createAttributedStrings = require('@smartface/html-to-text');
const actionAddChild = require('@smartface/contx/lib/smartface/action/addChild');
const FlexBtnIconRight = extend(require('../components/FlexBtnIconRight'));
const LstvSummary = extend(require('../components/LstvSummary'));

function addChild(childName, ChildClass, pageInstance) {
	this.children = this.children || {};
	this.children[childName] = new ChildClass(pageInstance);
	if (this.layout) this.layout.addChild(this.children[childName]);
	else this.addChild(this.children[childName]);
}
// Constructor
function $PgTabSummary(_super, props) {
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
	addChild.call(this, 'flexLayout2', $FlexLayout2_, this);
	addChild.call(this, 'imageView1', $ImageView1_, this);
	addChild.call(this, 'flexLayoutHeader', $FlexLayoutHeader_, this);
	addChild.call(this, 'listView1', $ListView1_, this);
	pageContextPatch(this, 'pgTabSummary');
}
$PgTabSummary.$$styleContext = {
	classNames: '.sf-page .page',
	defaultClassNames: ' .default_page',
	userProps: {
		flexProps: { flexWrap: 'NOWRAP' },
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
const $PgTabSummary_ = Page($PgTabSummary);
function $FlexLayout2(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'imgvSmartbankLogo',
		$FlexLayout2$$ImgvSmartbankLogo_,
		pageInstance
	);
	addChild.call(this, 'flexLayout1', $FlexLayout2$$FlexLayout1_, pageInstance);
	addChild.call(
		this,
		'flexBtnIconRight',
		$FlexLayout2$$FlexBtnIconRight_,
		pageInstance
	);
	pageInstance.flexLayout2 = this;
}
$FlexLayout2.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: { flexGrow: null, flexDirection: 'ROW', alignSelf: 'STRETCH' },
		height: 73,
		marginTop: null,
		paddingLeft: 16,
		paddingRight: 16,
		paddingTop: 20,
		top: 8,
		width: null
	}
};
const $FlexLayout2_ = FlexLayout($FlexLayout2);
function $FlexLayout2$$ImgvSmartbankLogo(_super, pageInstance) {
	_super(this);
}
$FlexLayout2$$ImgvSmartbankLogo.$$styleContext = {
	classNames: '.sf-imageView .sf-img-smartbank',
	defaultClassNames: '.default_common .default_imageView',
	userProps: { flexProps: { alignSelf: 'CENTER' }, marginBottom: null }
};
const $FlexLayout2$$ImgvSmartbankLogo_ = ImageView(
	$FlexLayout2$$ImgvSmartbankLogo
);

function $FlexLayout2$$FlexLayout1(_super, pageInstance) {
	_super(this);
}
$FlexLayout2$$FlexLayout1.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: { left: 0, top: 0 }
};
const $FlexLayout2$$FlexLayout1_ = FlexLayout($FlexLayout2$$FlexLayout1);

function $FlexLayout2$$FlexBtnIconRight(_super, pageInstance) {
	_super(this);

	pageInstance.flexBtnIconRight = this;
}
$FlexLayout2$$FlexBtnIconRight.$$styleContext = {
	classNames: '.sf-flexLayout .sf-flx-btn-icon',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: {
			justifyContent: 'SPACE_AROUND',
			positionType: 'RELATIVE',
			alignItems: 'STRETCH',
			alignContent: 'STRETCH',
			flexWrap: 'NOWRAP',
			flexGrow: null,
			alignSelf: 'STRETCH'
		},
		height: null,
		marginTop: null,
		maxHeight: 50,
		minHeight: -22,
		paddingLeft: 10,
		paddingRight: 10
	}
};
const $FlexLayout2$$FlexBtnIconRight_ = FlexBtnIconRight(
	$FlexLayout2$$FlexBtnIconRight
);

function $ImageView1(_super, pageInstance) {
	_super(this);

	pageInstance.imageView1 = this;
}
$ImageView1.$$styleContext = {
	classNames: '.sf-imageView',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {
		flexProps: { flexGrow: 1 },
		height: null,
		image: 'summary_img.png',
		imageFillType: 'STRETCH'
	}
};
const $ImageView1_ = ImageView($ImageView1);

function $FlexLayoutHeader(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'tvCategory',
		$FlexLayoutHeader$$TvCategory_,
		pageInstance
	);
	addChild.call(
		this,
		'tvSpending',
		$FlexLayoutHeader$$TvSpending_,
		pageInstance
	);
	pageInstance.flexLayoutHeader = this;
}
$FlexLayoutHeader.$$styleContext = {
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
		},
		height: 25,
		left: 0,
		marginTop: null,
		top: 0,
		width: null
	}
};
const $FlexLayoutHeader_ = FlexLayout($FlexLayoutHeader);
function $FlexLayoutHeader$$TvCategory(_super, pageInstance) {
	_super(this, { text: 'Category\n' });

	pageInstance.tvCategory = this;
	var html = '<span style="font-size: 16px;">Category</span><br>';
	var attributedStrings = createAttributedStrings(html);
	this.attributedText = attributedStrings.map(
		s => new AttributedString(propFactory.default(s))
	);
}
$FlexLayoutHeader$$TvCategory.$$styleContext = {
	classNames: '.sf-textView .sf-paymentLstv',
	defaultClassNames: '.default_common .default_textView',
	userProps: {
		flexProps: { alignSelf: 'FLEX_START' },
		height: null,
		left: 16,
		width: null
	}
};
const $FlexLayoutHeader$$TvCategory_ = TextView($FlexLayoutHeader$$TvCategory);

function $FlexLayoutHeader$$TvSpending(_super, pageInstance) {
	_super(this, { text: 'Spending\n' });

	pageInstance.tvSpending = this;
	var html =
		'<span style="font-size: 16px; white-space: pre-wrap;">Spending</span><br>';
	var attributedStrings = createAttributedStrings(html);
	this.attributedText = attributedStrings.map(
		s => new AttributedString(propFactory.default(s))
	);
}
$FlexLayoutHeader$$TvSpending.$$styleContext = {
	classNames: '.sf-textView .sf-paymentLstv',
	defaultClassNames: '.default_common .default_textView',
	userProps: {
		flexProps: { alignSelf: 'FLEX_END' },
		height: null,
		right: 16,
		width: null
	}
};
const $FlexLayoutHeader$$TvSpending_ = TextView($FlexLayoutHeader$$TvSpending);

function $ListView1(_super, pageInstance) {
	_super(this, { rowHeight: 80 });
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
		borderColor: 'rgba( 242, 242, 242, 1 )',
		borderWidth: -1,
		flexProps: { flexDirection: 'ROW', positionType: 'RELATIVE' },
		height: null,
		left: 0,
		paddingRight: 20,
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
}

module.exports = $PgTabSummary_;
