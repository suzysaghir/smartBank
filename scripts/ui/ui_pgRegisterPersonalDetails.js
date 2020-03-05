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
function $PgRegisterPersonalDetails(_super, props) {
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
	addChild.call(this, 'tvPersonalDetails', $TvPersonalDetails_, this);
	addChild.call(this, 'mtbFirstName', $MtbFirstName_, this);
	addChild.call(this, 'mtbLastName', $MtbLastName_, this);
	addChild.call(this, 'mtbBirthDate', $MtbBirthDate_, this);
	pageContextPatch(this, 'pgRegisterPersonalDetails');
}
$PgRegisterPersonalDetails.$$styleContext = {
	classNames: '.sf-page .page',
	defaultClassNames: ' .default_page',
	userProps: {},
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
const $PgRegisterPersonalDetails_ = Page($PgRegisterPersonalDetails);
function $ImgvSmartbankLogo(_super, pageInstance) {
	_super(this);
}
$ImgvSmartbankLogo.$$styleContext = {
	classNames: '.sf-imageView .sf-img-smartbank',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {}
};
const $ImgvSmartbankLogo_ = ImageView($ImgvSmartbankLogo);

function $TvPersonalDetails(_super, pageInstance) {
	_super(this, { text: 'What are your personal details?\n' });

	pageInstance.tvPersonalDetails = this;
	var html = '<font size="1">What are your personal details?</font><br>';
	var attributedStrings = createAttributedStrings(html);
	this.attributedText = attributedStrings.map(
		s => new AttributedString(propFactory.default(s))
	);
}
$TvPersonalDetails.$$styleContext = {
	classNames: '.sf-textView',
	defaultClassNames: '.default_common .default_textView',
	userProps: {
		flexProps: { alignSelf: 'CENTER' },
		height: null,
		marginTop: 30,
		textColor: 'rgba( 255, 255, 255, 1 )'
	}
};
const $TvPersonalDetails_ = TextView($TvPersonalDetails);

function $MtbFirstName(_super, pageInstance) {
	_super(this);

	pageInstance.mtbFirstName = this;
}
$MtbFirstName.$$styleContext = {
	classNames: '.materialTextBox-wrapper',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: { positionType: 'RELATIVE' },
		height: 48,
		left: 0,
		top: 0,
		width: null
	}
};
const $MtbFirstName_ = FlexLayout($MtbFirstName);

function $MtbLastName(_super, pageInstance) {
	_super(this);

	pageInstance.mtbLastName = this;
}
$MtbLastName.$$styleContext = {
	classNames: '.materialTextBox-wrapper',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: { flexProps: { positionType: 'RELATIVE' }, left: 0, top: 0 }
};
const $MtbLastName_ = FlexLayout($MtbLastName);

function $MtbBirthDate(_super, pageInstance) {
	_super(this);

	pageInstance.mtbBirthDate = this;
}
$MtbBirthDate.$$styleContext = {
	classNames: '.materialTextBox-wrapper',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: { flexProps: { positionType: 'RELATIVE' }, left: 0, top: 0 }
};
const $MtbBirthDate_ = FlexLayout($MtbBirthDate);

/**
 * @event onLoad
 * This event is called once when page is created. You can create views and add them to page in this callback.
 */
function onLoad() {
	// HeaderBar props
}

module.exports = $PgRegisterPersonalDetails_;
