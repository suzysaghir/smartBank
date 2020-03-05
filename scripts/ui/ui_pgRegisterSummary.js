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
const Button = extend(require('sf-core/ui/button'));
const ImageView = extend(require('sf-core/ui/imageview'));
const ListView = extend(require('sf-core/ui/listview'));
const actionAddChild = require('@smartface/contx/lib/smartface/action/addChild');
const LstvSummary = extend(require('../components/LstvSummary'));

function addChild(childName, ChildClass, pageInstance) {
	this.children = this.children || {};
	this.children[childName] = new ChildClass(pageInstance);
	if (this.layout) this.layout.addChild(this.children[childName]);
	else this.addChild(this.children[childName]);
}
// Constructor
function $PgRegisterSummary(_super, props) {
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
	addChild.call(this, 'btnThisMonth', $BtnThisMonth_, this);
	addChild.call(this, 'imgvSmartbankLogo', $ImgvSmartbankLogo_, this);
	addChild.call(this, 'imageView1', $ImageView1_, this);
	addChild.call(this, 'listView1', $ListView1_, this);
	pageContextPatch(this, 'pgRegisterSummary');
}
$PgRegisterSummary.$$styleContext = {
	classNames: '.sf-page .page',
	defaultClassNames: ' .default_page',
	userProps: {
		flexProps: { flexWrap: 'NOWRAP' },
		paddingBottom: null,
		paddingLeft: null,
		paddingRight: null
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
const $PgRegisterSummary_ = Page($PgRegisterSummary);
function $BtnThisMonth(_super, pageInstance) {
	_super(this, { text: '  This Month  ' });

	pageInstance.btnThisMonth = this;
}
$BtnThisMonth.$$styleContext = {
	classNames: '.sf-button',
	defaultClassNames: '.default_common .default_button',
	userProps: {
		flexProps: { alignSelf: 'FLEX_END', positionType: 'RELATIVE' },
		marginLeft: 10,
		marginRight: 10
	}
};
const $BtnThisMonth_ = Button($BtnThisMonth);

function $ImgvSmartbankLogo(_super, pageInstance) {
	_super(this);
}
$ImgvSmartbankLogo.$$styleContext = {
	classNames: '.sf-imageView .sf-img-smartbank',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {
		flexProps: { alignSelf: 'FLEX_START', positionType: 'ABSOLUTE' },
		left: 17.88563829787234,
		top: 49.10239361702128
	}
};
const $ImgvSmartbankLogo_ = ImageView($ImgvSmartbankLogo);

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
		image: 'summary.png',
		imageFillType: 'STRETCH'
	}
};
const $ImageView1_ = ImageView($ImageView1);

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

module.exports = $PgRegisterSummary_;
