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
const propFactory = require('@smartface/contx/lib/smartface/sfCorePropFactory');
const AttributedString = require('sf-core/ui/attributedstring');
const createAttributedStrings = require('@smartface/html-to-text');

function addChild(childName, ChildClass, pageInstance) {
	this.children = this.children || {};
	this.children[childName] = new ChildClass(pageInstance);
	if (this.layout) this.layout.addChild(this.children[childName]);
	else this.addChild(this.children[childName]);
}
// Constructor
function $PgRegisterEmail(_super, props) {
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
	addChild.call(this, 'tvEmailDetails', $TvEmailDetails_, this);
	addChild.call(this, 'flexLayout1', $FlexLayout1_, this);
	pageContextPatch(this, 'pgRegisterEmail');
}
$PgRegisterEmail.$$styleContext = {
	classNames: '.sf-page .page',
	defaultClassNames: ' .default_page',
	userProps: {},
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
const $PgRegisterEmail_ = Page($PgRegisterEmail);
function $ImgvSmartbankLogo(_super, pageInstance) {
	_super(this);
}
$ImgvSmartbankLogo.$$styleContext = {
	classNames: '.sf-imageView .sf-img-smartbank',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {}
};
const $ImgvSmartbankLogo_ = ImageView($ImgvSmartbankLogo);

function $TvEmailDetails(_super, pageInstance) {
	_super(this, { text: 'What is your e-mail address?\n' });

	pageInstance.tvEmailDetails = this;
	var html = '<font size="1">What is your e-mail address?</font><br>';
	var attributedStrings = createAttributedStrings(html);
	this.attributedText = attributedStrings.map(
		s => new AttributedString(propFactory.default(s))
	);
}
$TvEmailDetails.$$styleContext = {
	classNames: '.sf-textView',
	defaultClassNames: '.default_common .default_textView',
	userProps: {
		flexProps: { alignSelf: 'CENTER' },
		height: null,
		marginTop: 30,
		textColor: 'rgba( 255, 255, 255, 1 )'
	}
};
const $TvEmailDetails_ = TextView($TvEmailDetails);

function $FlexLayout1(_super, pageInstance) {
	_super(this);

	addChild.call(this, 'mtbEmail', $FlexLayout1$$MtbEmail_, pageInstance);
	pageInstance.flexLayout1 = this;
}
$FlexLayout1.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: { flexProps: { alignItems: 'STRETCH', alignContent: 'STRETCH' } }
};
const $FlexLayout1_ = FlexLayout($FlexLayout1);
function $FlexLayout1$$MtbEmail(_super, pageInstance) {
	_super(this);

	pageInstance.mtbEmail = this;
}
$FlexLayout1$$MtbEmail.$$styleContext = {
	classNames: '.materialTextBox-wrapper',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {}
};
const $FlexLayout1$$MtbEmail_ = FlexLayout($FlexLayout1$$MtbEmail);

/**
 * @event onLoad
 * This event is called once when page is created. You can create views and add them to page in this callback.
 */
function onLoad() {
	// HeaderBar props
}

module.exports = $PgRegisterEmail_;
