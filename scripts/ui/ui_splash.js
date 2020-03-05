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

function addChild(childName, ChildClass, pageInstance) {
	this.children = this.children || {};
	this.children[childName] = new ChildClass(pageInstance);
	if (this.layout) this.layout.addChild(this.children[childName]);
	else this.addChild(this.children[childName]);
}
// Constructor
function $Splash(_super, props) {
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
	pageContextPatch(this, 'splash');
}
$Splash.$$styleContext = {
	classNames: '.sf-page',
	defaultClassNames: ' .default_page',
	userProps: {
		backgroundColor: 'rgba( 123, 232, 255, 1 )',
		flexProps: { alignItems: 'STRETCH', justifyContent: 'CENTER' },
		paddingBottom: 60,
		paddingTop: 40
	},
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
const $Splash_ = Page($Splash);
function $FlexLayout1(_super, pageInstance) {
	_super(this);

	addChild.call(this, 'imgvBack', $FlexLayout1$$ImgvBack_, pageInstance);
	addChild.call(this, 'flexLayout4', $FlexLayout1$$FlexLayout4_, pageInstance);
}
$FlexLayout1.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		alpha: 1,
		flexProps: {
			alignItems: 'CENTER',
			justifyContent: 'CENTER',
			alignSelf: 'STRETCH',
			alignContent: 'CENTER',
			flexDirection: 'COLUMN',
			positionType: 'RELATIVE',
			flexGrow: 1
		},
		height: null,
		width: null
	}
};
const $FlexLayout1_ = FlexLayout($FlexLayout1);
function $FlexLayout1$$ImgvBack(_super, pageInstance) {
	_super(this);
}
$FlexLayout1$$ImgvBack.$$styleContext = {
	classNames: '.sf-imageView',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {
		alpha: 0.55,
		backgroundColor: 'rgba( 255, 255, 255, 1 )',
		borderRadius: 200,
		flexProps: { alignSelf: 'STRETCH', positionType: 'RELATIVE', flexGrow: 1 },
		height: null,
		image: 'c_background.png',
		imageFillType: 'ASPECTFILL',
		marginBottom: null,
		marginTop: null,
		width: null
	}
};
const $FlexLayout1$$ImgvBack_ = ImageView($FlexLayout1$$ImgvBack);

function $FlexLayout1$$FlexLayout4(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'imgvAppIcon',
		$FlexLayout1$$FlexLayout4$$ImgvAppIcon_,
		pageInstance
	);
	addChild.call(
		this,
		'tvSmartbank',
		$FlexLayout1$$FlexLayout4$$TvSmartbank_,
		pageInstance
	);
}
$FlexLayout1$$FlexLayout4.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: {
			flexDirection: 'ROW',
			positionType: 'ABSOLUTE',
			alignSelf: 'CENTER',
			justifyContent: 'FLEX_START',
			alignContent: 'CENTER',
			alignItems: 'FLEX_START',
			flexGrow: 1
		},
		height: 63.24094742063492,
		left: -18.21055485652043,
		top: 354.8718965970553,
		width: 375.3954690600198
	}
};
const $FlexLayout1$$FlexLayout4_ = FlexLayout($FlexLayout1$$FlexLayout4);
function $FlexLayout1$$FlexLayout4$$ImgvAppIcon(_super, pageInstance) {
	_super(this);
}
$FlexLayout1$$FlexLayout4$$ImgvAppIcon.$$styleContext = {
	classNames: '.sf-imageView',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {
		borderRadius: 200,
		flexProps: { alignSelf: 'FLEX_START', positionType: 'RELATIVE' },
		height: 55.55555555555556,
		image: 'c_app_icon.png',
		imageFillType: 'ASPECTFIT',
		marginBottom: 2,
		marginLeft: 20,
		marginRight: 2,
		marginTop: 2,
		width: 130.15873015873015
	}
};
const $FlexLayout1$$FlexLayout4$$ImgvAppIcon_ = ImageView(
	$FlexLayout1$$FlexLayout4$$ImgvAppIcon
);

function $FlexLayout1$$FlexLayout4$$TvSmartbank(_super, pageInstance) {
	_super(this, { text: 'Smartbank' });
}
$FlexLayout1$$FlexLayout4$$TvSmartbank.$$styleContext = {
	classNames: '.sf-textView',
	defaultClassNames: '.default_common .default_textView',
	userProps: {
		flexProps: { alignSelf: 'FLEX_START', positionType: 'RELATIVE' },
		font: {
			family: 'SFProDisplay',
			bold: false,
			italic: false,
			size: 35,
			style: 'Medium'
		},
		height: null,
		marginBottom: 2,
		marginRight: 200,
		marginTop: 10,
		textAlignment: 'TOPLEFT',
		textColor: 'rgba( 255, 255, 255, 1 )',
		width: null
	}
};
const $FlexLayout1$$FlexLayout4$$TvSmartbank_ = TextView(
	$FlexLayout1$$FlexLayout4$$TvSmartbank
);

/**
 * @event onLoad
 * This event is called once when page is created. You can create views and add them to page in this callback.
 */
function onLoad() {
	// HeaderBar props
}

module.exports = $Splash_;
