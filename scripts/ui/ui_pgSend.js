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
const FlexLayout = extend(require('sf-core/ui/flexlayout'));
const Button = extend(require('sf-core/ui/button'));

function addChild(childName, ChildClass, pageInstance) {
	this.children = this.children || {};
	this.children[childName] = new ChildClass(pageInstance);
	if (this.layout) this.layout.addChild(this.children[childName]);
	else this.addChild(this.children[childName]);
}
// Constructor
function $PgSend(_super, props) {
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
	addChild.call(this, 'imageView1', $ImageView1_, this);
	addChild.call(this, 'flexLayout1', $FlexLayout1_, this);
	addChild.call(this, 'btnDone', $BtnDone_, this);
	addChild.call(this, 'flexLayout2', $FlexLayout2_, this);
	pageContextPatch(this, 'pgSend');
}
$PgSend.$$styleContext = {
	classNames: '.sf-page .page',
	defaultClassNames: ' .default_page',
	userProps: { paddingLeft: null, paddingRight: null },
	statusBar: {
		classNames: '.sf-statusBar',
		defaultClassNames: ' .default_statusBar',
		userProps: {}
	},
	headerBar: {
		classNames: '.sf-headerBar',
		defaultClassNames: ' .default_headerBar',
		userProps: {}
	}
};
const $PgSend_ = Page($PgSend);
function $ImageView1(_super, pageInstance) {
	_super(this);
}
$ImageView1.$$styleContext = {
	classNames: '.sf-imageView',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {
		borderRadius: 500,
		flexProps: { alignSelf: 'STRETCH', positionType: 'RELATIVE' },
		height: 500,
		image: 'blue_background.png',
		imageFillType: 'ASPECTFILL',
		marginBottom: null,
		marginLeft: -20,
		marginRight: -20,
		marginTop: null
	}
};
const $ImageView1_ = ImageView($ImageView1);

function $FlexLayout1(_super, pageInstance) {
	_super(this);
}
$FlexLayout1.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {}
};
const $FlexLayout1_ = FlexLayout($FlexLayout1);

function $BtnDone(_super, pageInstance) {
	_super(this, { text: 'Done' });

	pageInstance.btnDone = this;
}
$BtnDone.$$styleContext = {
	classNames: '.sf-button',
	defaultClassNames: '.default_common .default_button',
	userProps: {}
};
const $BtnDone_ = Button($BtnDone);

function $FlexLayout2(_super, pageInstance) {
	_super(this);
}
$FlexLayout2.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {}
};
const $FlexLayout2_ = FlexLayout($FlexLayout2);

/**
 * @event onLoad
 * This event is called once when page is created. You can create views and add them to page in this callback.
 */
function onLoad() {
	// HeaderBar props
	this.headerBar.title = 'pgRegisterAccountCreate';
}

module.exports = $PgSend_;
