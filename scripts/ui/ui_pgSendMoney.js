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
const TextView = extend(require('sf-core/ui/textview'));
const ListView = extend(require('sf-core/ui/listview'));
const propFactory = require('@smartface/contx/lib/smartface/sfCorePropFactory');
const AttributedString = require('sf-core/ui/attributedstring');
const createAttributedStrings = require('@smartface/html-to-text');
const actionAddChild = require('@smartface/contx/lib/smartface/action/addChild');
const LstvSelect = extend(require('../components/LstvSelect'));

function addChild(childName, ChildClass, pageInstance) {
	this.children = this.children || {};
	this.children[childName] = new ChildClass(pageInstance);
	if (this.layout) this.layout.addChild(this.children[childName]);
	else this.addChild(this.children[childName]);
}
// Constructor
function $PgSendMoney(_super, props) {
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
	addChild.call(this, 'listView1', $ListView1_, this);
	addChild.call(this, 'flexLayout2', $FlexLayout2_, this);
	pageContextPatch(this, 'pgSendMoney');
}
$PgSendMoney.$$styleContext = {
	classNames: '.sf-page .page',
	defaultClassNames: ' .default_page',
	userProps: {
		backgroundColor: 'rgba( 255, 255, 255, 1 )',
		flexProps: { flexWrap: 'NOWRAP' },
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
		userProps: {}
	}
};
const $PgSendMoney_ = Page($PgSendMoney);
function $FlexLayout1(_super, pageInstance) {
	_super(this);

	addChild.call(this, 'tvSelect', $FlexLayout1$$TvSelect_, pageInstance);
	pageInstance.flexLayout1 = this;
}
$FlexLayout1.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		backgroundColor: 'rgba( 211, 246, 255, 1 )',
		flexProps: {
			flexDirection: 'ROW',
			justifyContent: 'FLEX_START',
			flexGrow: null
		},
		marginTop: 0
	}
};
const $FlexLayout1_ = FlexLayout($FlexLayout1);
function $FlexLayout1$$TvSelect(_super, pageInstance) {
	_super(this);

	pageInstance.tvSelect = this;
	var html =
		'<span style="font-family: SFProText-Regular; font-size: 16px; white-space: pre-wrap; background-color: rgb(255, 255, 255);">  Lorem ipsum dolor sit amet, consectetur \n  adipiscing elit. <span style="color: rgb(0, 161, 241); font-size: 17.3913px; font-family: SFProText-Regular; background-color: rgb(255, 255, 255);">Donec quis semper justo. In  \n  ultrices metus nec sodales consectetur.</span> \n  Aliquam erat volutpat. <span style="font-size: 16px; font-family: SFProText-Regular; background-color: rgb(255, 255, 255); text-decoration-color: rgb(0, 0, 0); text-decoration-line: underline;">Suspendisse</span> potenti.</span><br>';
	var attributedStrings = createAttributedStrings(html);
	this.attributedText = attributedStrings.map(
		s => new AttributedString(propFactory.default(s))
	);
}
$FlexLayout1$$TvSelect.$$styleContext = {
	classNames: '.sf-textView .sf-paymentLstv',
	defaultClassNames: '.default_common .default_textView',
	userProps: { flexProps: { alignSelf: 'FLEX_START' } }
};
const $FlexLayout1$$TvSelect_ = TextView($FlexLayout1$$TvSelect);

function $ListView1(_super, pageInstance) {
	_super(this, { itemCount: 4, rowHeight: 80 });
	var itemIndex = 0;
	this.onRowCreate = function() {
		var item = new $ListView1$$LstvSelect_();
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
		marginBottom: -1,
		right: -1
	}
};
const $ListView1_ = ListView($ListView1);
function $ListView1$$LstvSelect(_super, pageInstance) {
	_super(this);
}
$ListView1$$LstvSelect.$$styleContext = {
	classNames: '.sf-listViewItem',
	defaultClassNames: '.default_common .default_listViewItem',
	userProps: {
		flexProps: { flexDirection: 'ROW', positionType: 'RELATIVE' },
		left: 0,
		top: 0,
		width: null,
		height: null
	}
};
const $ListView1$$LstvSelect_ = LstvSelect($ListView1$$LstvSelect);

function $FlexLayout2(_super, pageInstance) {
	_super(this);

	addChild.call(this, 'textView1', $FlexLayout2$$TextView1_, pageInstance);
}
$FlexLayout2.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		backgroundColor: 'rgba( 211, 246, 255, 1 )',
		flexProps: { flexGrow: null, justifyContent: 'CENTER' }
	}
};
const $FlexLayout2_ = FlexLayout($FlexLayout2);
function $FlexLayout2$$TextView1(_super, pageInstance) {
	_super(this, { text: 'SELECT CONTACT\n' });

	var html =
		'<span style="font-size: 16px; white-space: pre-wrap;">SELECT CONTACT</span><br>';
	var attributedStrings = createAttributedStrings(html);
	this.attributedText = attributedStrings.map(
		s => new AttributedString(propFactory.default(s))
	);
}
$FlexLayout2$$TextView1.$$styleContext = {
	classNames: '.sf-textView',
	defaultClassNames: '.default_common .default_textView',
	userProps: {
		flexProps: { flexGrow: 1 },
		height: null,
		left: 16,
		textColor: 'rgba( 112, 200, 224, 1 )',
		width: null
	}
};
const $FlexLayout2$$TextView1_ = TextView($FlexLayout2$$TextView1);

/**
 * @event onLoad
 * This event is called once when page is created. You can create views and add them to page in this callback.
 */
function onLoad() {
	// HeaderBar props
	this.headerBar.title = 'Send Money';
}

module.exports = $PgSendMoney_;
