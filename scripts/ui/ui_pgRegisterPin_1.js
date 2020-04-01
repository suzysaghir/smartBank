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
const TextBox = extend(require('sf-core/ui/textbox'));
const View = extend(require('sf-core/ui/view'));
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
function $PgRegisterPin_1(_super, props) {
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
	pageContextPatch(this, 'pgRegisterPin_1');
}
$PgRegisterPin_1.$$styleContext = {
	classNames: '.sf-page .page',
	defaultClassNames: ' .default_page',
	userProps: {
		flexProps: { justifyContent: 'SPACE_BETWEEN' },
		paddingLeft: null,
		paddingRight: null
	},
	statusBar: {
		classNames: '.sf-statusBar',
		defaultClassNames: ' .default_statusBar',
		userProps: {}
	},
	headerBar: {
		classNames: '.sf-headerBar',
		defaultClassNames: ' .default_headerBar',
		userProps: { visible: true }
	}
};
const $PgRegisterPin_1_ = Page($PgRegisterPin_1);
function $FlexLayout1(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'img_background',
		$FlexLayout1$$Img_background_,
		pageInstance
	);
	addChild.call(this, 'flexLayout1', $FlexLayout1$$FlexLayout1_, pageInstance);
	addChild.call(this, 'flexLayout2', $FlexLayout1$$FlexLayout2_, pageInstance);
}
$FlexLayout1.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: {
			justifyContent: 'CENTER',
			alignItems: 'STRETCH',
			alignContent: 'STRETCH',
			positionType: 'RELATIVE'
		}
	}
};
const $FlexLayout1_ = FlexLayout($FlexLayout1);
function $FlexLayout1$$Img_background(_super, pageInstance) {
	_super(this);

	pageInstance.img_background = this;
}
$FlexLayout1$$Img_background.$$styleContext = {
	classNames: '.sf-imageView',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {
		flexProps: { positionType: 'ABSOLUTE', alignSelf: 'FLEX_END' },
		height: null,
		image: 'background_image.png',
		imageFillType: 'ASPECTFIT',
		width: null
	}
};
const $FlexLayout1$$Img_background_ = ImageView($FlexLayout1$$Img_background);

function $FlexLayout1$$FlexLayout1(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'imgvSmartbankLogo',
		$FlexLayout1$$FlexLayout1$$ImgvSmartbankLogo_,
		pageInstance
	);
	addChild.call(
		this,
		'tvPasscode',
		$FlexLayout1$$FlexLayout1$$TvPasscode_,
		pageInstance
	);
	addChild.call(
		this,
		'flexContainer',
		$FlexLayout1$$FlexLayout1$$FlexContainer_,
		pageInstance
	);
	addChild.call(
		this,
		'viewRemoveTouch',
		$FlexLayout1$$FlexLayout1$$ViewRemoveTouch_,
		pageInstance
	);
	pageInstance.flexLayout1 = this;
}
$FlexLayout1$$FlexLayout1.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: { flexGrow: 4, justifyContent: 'SPACE_AROUND' },
		paddingLeft: 16,
		paddingRight: 16
	}
};
const $FlexLayout1$$FlexLayout1_ = FlexLayout($FlexLayout1$$FlexLayout1);
function $FlexLayout1$$FlexLayout1$$ImgvSmartbankLogo(_super, pageInstance) {
	_super(this);

	pageInstance.imgvSmartbankLogo = this;
}
$FlexLayout1$$FlexLayout1$$ImgvSmartbankLogo.$$styleContext = {
	classNames: '.sf-imageView .sf-img-smartbank',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {}
};
const $FlexLayout1$$FlexLayout1$$ImgvSmartbankLogo_ = ImageView(
	$FlexLayout1$$FlexLayout1$$ImgvSmartbankLogo
);

function $FlexLayout1$$FlexLayout1$$TvPasscode(_super, pageInstance) {
	_super(this);

	pageInstance.tvPasscode = this;
	var html =
		'<span style="font-family: SFProText-Regular; font-size: 16px; white-space: pre-wrap; background-color: rgb(255, 255, 255);">  Lorem ipsum dolor sit amet, consectetur \n  adipiscing elit. <span style="color: rgb(0, 161, 241); font-size: 17.3913px; font-family: SFProText-Regular; background-color: rgb(255, 255, 255);">Donec quis semper justo. In  \n  ultrices metus nec sodales consectetur.</span> \n  Aliquam erat volutpat. <span style="font-size: 16px; font-family: SFProText-Regular; background-color: rgb(255, 255, 255); text-decoration-color: rgb(0, 0, 0); text-decoration-line: underline;">Suspendisse</span> potenti.</span><br>';
	var attributedStrings = createAttributedStrings(html);
	this.attributedText = attributedStrings.map(
		s => new AttributedString(propFactory.default(s))
	);
}
$FlexLayout1$$FlexLayout1$$TvPasscode.$$styleContext = {
	classNames: '.sf-textView',
	defaultClassNames: '.default_common .default_textView',
	userProps: {}
};
const $FlexLayout1$$FlexLayout1$$TvPasscode_ = TextView(
	$FlexLayout1$$FlexLayout1$$TvPasscode
);

function $FlexLayout1$$FlexLayout1$$FlexContainer(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'flx1',
		$FlexLayout1$$FlexLayout1$$FlexContainer$$Flx1_,
		pageInstance
	);
	addChild.call(
		this,
		'flx2',
		$FlexLayout1$$FlexLayout1$$FlexContainer$$Flx2_,
		pageInstance
	);
	addChild.call(
		this,
		'flx3',
		$FlexLayout1$$FlexLayout1$$FlexContainer$$Flx3_,
		pageInstance
	);
	addChild.call(
		this,
		'flx4',
		$FlexLayout1$$FlexLayout1$$FlexContainer$$Flx4_,
		pageInstance
	);
	addChild.call(
		this,
		'tbHidden',
		$FlexLayout1$$FlexLayout1$$FlexContainer$$TbHidden_,
		pageInstance
	);
	addChild.call(
		this,
		'viewRegPin',
		$FlexLayout1$$FlexLayout1$$FlexContainer$$ViewRegPin_,
		pageInstance
	);
	pageInstance.flexContainer = this;
}
$FlexLayout1$$FlexLayout1$$FlexContainer.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		alpha: 1,
		flexProps: {
			alignItems: 'CENTER',
			justifyContent: 'SPACE_AROUND',
			flexDirection: 'ROW',
			alignSelf: 'CENTER',
			positionType: 'RELATIVE',
			alignContent: 'CENTER'
		},
		height: 689.4911667396283,
		left: 0,
		paddingTop: 10,
		top: 0,
		width: 234.1234141382678
	}
};
const $FlexLayout1$$FlexLayout1$$FlexContainer_ = FlexLayout(
	$FlexLayout1$$FlexLayout1$$FlexContainer
);
function $FlexLayout1$$FlexLayout1$$FlexContainer$$Flx1(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'flxInside1',
		$FlexLayout1$$FlexLayout1$$FlexContainer$$Flx1$$FlxInside1_,
		pageInstance
	);
}
$FlexLayout1$$FlexLayout1$$FlexContainer$$Flx1.$$styleContext = {
	classNames: '.sf-flexLayout .sf-pin',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {}
};
const $FlexLayout1$$FlexLayout1$$FlexContainer$$Flx1_ = FlexLayout(
	$FlexLayout1$$FlexLayout1$$FlexContainer$$Flx1
);
function $FlexLayout1$$FlexLayout1$$FlexContainer$$Flx1$$FlxInside1(
	_super,
	pageInstance
) {
	_super(this);

	pageInstance.flxInside1 = this;
}
$FlexLayout1$$FlexLayout1$$FlexContainer$$Flx1$$FlxInside1.$$styleContext = {
	classNames: '.sf-flexLayout .sf-pin-inside',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: { backgroundColor: 'rgba( 255, 255, 255, 0.5 )' }
};
const $FlexLayout1$$FlexLayout1$$FlexContainer$$Flx1$$FlxInside1_ = FlexLayout(
	$FlexLayout1$$FlexLayout1$$FlexContainer$$Flx1$$FlxInside1
);

function $FlexLayout1$$FlexLayout1$$FlexContainer$$Flx2(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'flxInside2',
		$FlexLayout1$$FlexLayout1$$FlexContainer$$Flx2$$FlxInside2_,
		pageInstance
	);
}
$FlexLayout1$$FlexLayout1$$FlexContainer$$Flx2.$$styleContext = {
	classNames: '.sf-flexLayout .sf-pin',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {}
};
const $FlexLayout1$$FlexLayout1$$FlexContainer$$Flx2_ = FlexLayout(
	$FlexLayout1$$FlexLayout1$$FlexContainer$$Flx2
);
function $FlexLayout1$$FlexLayout1$$FlexContainer$$Flx2$$FlxInside2(
	_super,
	pageInstance
) {
	_super(this);

	pageInstance.flxInside2 = this;
}
$FlexLayout1$$FlexLayout1$$FlexContainer$$Flx2$$FlxInside2.$$styleContext = {
	classNames: '.sf-flexLayout .sf-pin-inside',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {}
};
const $FlexLayout1$$FlexLayout1$$FlexContainer$$Flx2$$FlxInside2_ = FlexLayout(
	$FlexLayout1$$FlexLayout1$$FlexContainer$$Flx2$$FlxInside2
);

function $FlexLayout1$$FlexLayout1$$FlexContainer$$Flx3(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'flxInside3',
		$FlexLayout1$$FlexLayout1$$FlexContainer$$Flx3$$FlxInside3_,
		pageInstance
	);
}
$FlexLayout1$$FlexLayout1$$FlexContainer$$Flx3.$$styleContext = {
	classNames: '.sf-flexLayout .sf-pin',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {}
};
const $FlexLayout1$$FlexLayout1$$FlexContainer$$Flx3_ = FlexLayout(
	$FlexLayout1$$FlexLayout1$$FlexContainer$$Flx3
);
function $FlexLayout1$$FlexLayout1$$FlexContainer$$Flx3$$FlxInside3(
	_super,
	pageInstance
) {
	_super(this);

	pageInstance.flxInside3 = this;
}
$FlexLayout1$$FlexLayout1$$FlexContainer$$Flx3$$FlxInside3.$$styleContext = {
	classNames: '.sf-flexLayout .sf-pin-inside',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {}
};
const $FlexLayout1$$FlexLayout1$$FlexContainer$$Flx3$$FlxInside3_ = FlexLayout(
	$FlexLayout1$$FlexLayout1$$FlexContainer$$Flx3$$FlxInside3
);

function $FlexLayout1$$FlexLayout1$$FlexContainer$$Flx4(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'flxInside4',
		$FlexLayout1$$FlexLayout1$$FlexContainer$$Flx4$$FlxInside4_,
		pageInstance
	);
}
$FlexLayout1$$FlexLayout1$$FlexContainer$$Flx4.$$styleContext = {
	classNames: '.sf-flexLayout .sf-pin',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {}
};
const $FlexLayout1$$FlexLayout1$$FlexContainer$$Flx4_ = FlexLayout(
	$FlexLayout1$$FlexLayout1$$FlexContainer$$Flx4
);
function $FlexLayout1$$FlexLayout1$$FlexContainer$$Flx4$$FlxInside4(
	_super,
	pageInstance
) {
	_super(this);

	pageInstance.flxInside4 = this;
}
$FlexLayout1$$FlexLayout1$$FlexContainer$$Flx4$$FlxInside4.$$styleContext = {
	classNames: '.sf-flexLayout .sf-pin-inside',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {}
};
const $FlexLayout1$$FlexLayout1$$FlexContainer$$Flx4$$FlxInside4_ = FlexLayout(
	$FlexLayout1$$FlexLayout1$$FlexContainer$$Flx4$$FlxInside4
);

function $FlexLayout1$$FlexLayout1$$FlexContainer$$TbHidden(
	_super,
	pageInstance
) {
	_super(this, { text: ' ' });

	pageInstance.tbHidden = this;
}
$FlexLayout1$$FlexLayout1$$FlexContainer$$TbHidden.$$styleContext = {
	classNames: '.sf-textBox',
	defaultClassNames: '.default_common .default_textBox',
	userProps: {
		borderWidth: 0,
		flexProps: { alignSelf: 'FLEX_END', positionType: 'ABSOLUTE' },
		height: 0,
		width: 0
	}
};
const $FlexLayout1$$FlexLayout1$$FlexContainer$$TbHidden_ = TextBox(
	$FlexLayout1$$FlexLayout1$$FlexContainer$$TbHidden
);

function $FlexLayout1$$FlexLayout1$$FlexContainer$$ViewRegPin(
	_super,
	pageInstance
) {
	_super(this);

	pageInstance.viewRegPin = this;
}
$FlexLayout1$$FlexLayout1$$FlexContainer$$ViewRegPin.$$styleContext = {
	classNames: '.sf-view',
	defaultClassNames: '.default_common .default_view',
	userProps: {
		backgroundColor: 'rgba( 255, 255, 255, 0 )',
		flexProps: { positionType: 'ABSOLUTE', alignSelf: 'CENTER', flexGrow: 1 },
		height: 500,
		width: 500
	}
};
const $FlexLayout1$$FlexLayout1$$FlexContainer$$ViewRegPin_ = View(
	$FlexLayout1$$FlexLayout1$$FlexContainer$$ViewRegPin
);

function $FlexLayout1$$FlexLayout1$$ViewRemoveTouch(_super, pageInstance) {
	_super(this);

	pageInstance.viewRemoveTouch = this;
}
$FlexLayout1$$FlexLayout1$$ViewRemoveTouch.$$styleContext = {
	classNames: '.sf-view',
	defaultClassNames: '.default_common .default_view',
	userProps: {
		backgroundColor: 'rgba( 255, 255, 255, 0 )',
		flexProps: { flexGrow: 1, alignSelf: 'STRETCH' },
		height: null,
		left: 0,
		top: 0
	}
};
const $FlexLayout1$$FlexLayout1$$ViewRemoveTouch_ = View(
	$FlexLayout1$$FlexLayout1$$ViewRemoveTouch
);

function $FlexLayout1$$FlexLayout2(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'tvAgreed',
		$FlexLayout1$$FlexLayout2$$TvAgreed_,
		pageInstance
	);
}
$FlexLayout1$$FlexLayout2.$$styleContext = {
	classNames: '.sf-flexLayout .sf-flexLayout2',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: { flexProps: { justifyContent: 'FLEX_END', flexGrow: null } }
};
const $FlexLayout1$$FlexLayout2_ = FlexLayout($FlexLayout1$$FlexLayout2);
function $FlexLayout1$$FlexLayout2$$TvAgreed(_super, pageInstance) {
	_super(this);

	pageInstance.tvAgreed = this;
	var html =
		'<span style="font-family: SFProText-Regular; font-size: 16px; white-space: pre-wrap; background-color: rgb(255, 255, 255);">  Lorem ipsum dolor sit amet, consectetur \n  adipiscing elit. <span style="color: rgb(0, 161, 241); font-size: 17.3913px; font-family: SFProText-Regular; background-color: rgb(255, 255, 255);">Donec quis semper justo. In  \n  ultrices metus nec sodales consectetur.</span> \n  Aliquam erat volutpat. <span style="font-size: 16px; font-family: SFProText-Regular; background-color: rgb(255, 255, 255); text-decoration-color: rgb(0, 0, 0); text-decoration-line: underline;">Suspendisse</span> potenti.</span><br>';
	var attributedStrings = createAttributedStrings(html);
	this.attributedText = attributedStrings.map(
		s => new AttributedString(propFactory.default(s))
	);
}
$FlexLayout1$$FlexLayout2$$TvAgreed.$$styleContext = {
	classNames: '.sf-textView',
	defaultClassNames: '.default_common .default_textView',
	userProps: { bottom: 20, flexProps: { alignSelf: 'CENTER' }, left: 0, top: 0 }
};
const $FlexLayout1$$FlexLayout2$$TvAgreed_ = TextView(
	$FlexLayout1$$FlexLayout2$$TvAgreed
);

/**
 * @event onLoad
 * This event is called once when page is created. You can create views and add them to page in this callback.
 */
function onLoad() {
	// HeaderBar props
	this.headerBar.title = ' ';
}

module.exports = $PgRegisterPin_1_;
