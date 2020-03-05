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
const Button = extend(require('sf-core/ui/button'));

function addChild(childName, ChildClass, pageInstance) {
	this.children = this.children || {};
	this.children[childName] = new ChildClass(pageInstance);
	if (this.layout) this.layout.addChild(this.children[childName]);
	else this.addChild(this.children[childName]);
}
// Constructor
function $PgSendDone(_super, props) {
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
	addChild.call(this, 'button1', $Button1_, this);
	pageContextPatch(this, 'pgSendDone');
}
$PgSendDone.$$styleContext = {
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
const $PgSendDone_ = Page($PgSendDone);
function $FlexLayout1(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'imgvBackground',
		$FlexLayout1$$ImgvBackground_,
		pageInstance
	);
	addChild.call(this, 'flexLayout1', $FlexLayout1$$FlexLayout1_, pageInstance);
	addChild.call(this, 'tvAmount', $FlexLayout1$$TvAmount_, pageInstance);
	addChild.call(this, 'tvSend', $FlexLayout1$$TvSend_, pageInstance);
	pageInstance.flexLayout1 = this;
}
$FlexLayout1.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: { borderRadius: 200, flexProps: { justifyContent: 'CENTER' } }
};
const $FlexLayout1_ = FlexLayout($FlexLayout1);
function $FlexLayout1$$ImgvBackground(_super, pageInstance) {
	_super(this);

	pageInstance.imgvBackground = this;
}
$FlexLayout1$$ImgvBackground.$$styleContext = {
	classNames: '.sf-imageView',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {
		flexProps: { flexGrow: 1, alignSelf: 'CENTER', positionType: 'ABSOLUTE' },
		height: 10000,
		image: 'blue_background.png',
		imageFillType: 'ASPECTFILL',
		marginLeft: -20,
		marginRight: -20,
		width: 10000
	}
};
const $FlexLayout1$$ImgvBackground_ = ImageView($FlexLayout1$$ImgvBackground);

function $FlexLayout1$$FlexLayout1(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'imgProfile2',
		$FlexLayout1$$FlexLayout1$$ImgProfile2_,
		pageInstance
	);
	addChild.call(
		this,
		'imgIcon',
		$FlexLayout1$$FlexLayout1$$ImgIcon_,
		pageInstance
	);
}
$FlexLayout1$$FlexLayout1.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: { alignSelf: 'CENTER', flexGrow: null },
		height: 120,
		width: 120
	}
};
const $FlexLayout1$$FlexLayout1_ = FlexLayout($FlexLayout1$$FlexLayout1);
function $FlexLayout1$$FlexLayout1$$ImgProfile2(_super, pageInstance) {
	_super(this);

	pageInstance.imgProfile2 = this;
}
$FlexLayout1$$FlexLayout1$$ImgProfile2.$$styleContext = {
	classNames: '.sf-imageView',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {
		borderRadius: 50,
		flexProps: { alignSelf: 'CENTER' },
		height: 100,
		imageFillType: 'ASPECTFILL',
		width: 100
	}
};
const $FlexLayout1$$FlexLayout1$$ImgProfile2_ = ImageView(
	$FlexLayout1$$FlexLayout1$$ImgProfile2
);

function $FlexLayout1$$FlexLayout1$$ImgIcon(_super, pageInstance) {
	_super(this);

	pageInstance.imgIcon = this;
}
$FlexLayout1$$FlexLayout1$$ImgIcon.$$styleContext = {
	classNames: '.sf-imageView',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {
		flexProps: { positionType: 'ABSOLUTE', alignSelf: 'CENTER' },
		height: 100,
		image: 'tick_icon.png',
		imageFillType: 'NORMAL',
		width: 100
	}
};
const $FlexLayout1$$FlexLayout1$$ImgIcon_ = ImageView(
	$FlexLayout1$$FlexLayout1$$ImgIcon
);

function $FlexLayout1$$TvAmount(_super, pageInstance) {
	_super(this, { text: '\n' });

	pageInstance.tvAmount = this;
}
$FlexLayout1$$TvAmount.$$styleContext = {
	classNames: '.sf-textView',
	defaultClassNames: '.default_common .default_textView',
	userProps: {
		flexProps: { alignSelf: 'CENTER' },
		font: {
			bold: true,
			size: 60,
			style: 'Semibold',
			family: 'SFProText',
			italic: false
		},
		height: null,
		width: null
	}
};
const $FlexLayout1$$TvAmount_ = TextView($FlexLayout1$$TvAmount);

function $FlexLayout1$$TvSend(_super, pageInstance) {
	_super(this, { text: '\n' });

	pageInstance.tvSend = this;
}
$FlexLayout1$$TvSend.$$styleContext = {
	classNames: '.sf-textView',
	defaultClassNames: '.default_common .default_textView',
	userProps: {
		flexProps: { alignSelf: 'CENTER' },
		font: {
			family: 'SFProText',
			style: 'Medium',
			italic: false,
			size: null,
			bold: false
		},
		height: null,
		width: null
	}
};
const $FlexLayout1$$TvSend_ = TextView($FlexLayout1$$TvSend);

function $Button1(_super, pageInstance) {
	_super(this, { text: 'Done' });
}
$Button1.$$styleContext = {
	classNames: '.sf-button',
	defaultClassNames: '.default_common .default_button',
	userProps: {}
};
const $Button1_ = Button($Button1);

/**
 * @event onLoad
 * This event is called once when page is created. You can create views and add them to page in this callback.
 */
function onLoad() {
	// HeaderBar props
	this.headerBar.title = 'Send Money';
}

module.exports = $PgSendDone_;
