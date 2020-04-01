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
const Button = extend(require('sf-core/ui/button'));
const propFactory = require('@smartface/contx/lib/smartface/sfCorePropFactory');
const AttributedString = require('sf-core/ui/attributedstring');
const createAttributedStrings = require('@smartface/html-to-text');
const FlexLayoutActivationCode = extend(
	require('../components/FlexLayoutActivationCode')
);

function addChild(childName, ChildClass, pageInstance) {
	this.children = this.children || {};
	this.children[childName] = new ChildClass(pageInstance);
	if (this.layout) this.layout.addChild(this.children[childName]);
	else this.addChild(this.children[childName]);
}
// Constructor
function $PgRegisterActivationCode_11(_super, props) {
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
	pageContextPatch(this, 'pgRegisterActivationCode_11');
}
$PgRegisterActivationCode_11.$$styleContext = {
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
		userProps: { transparent: false, visible: true }
	}
};
const $PgRegisterActivationCode_11_ = Page($PgRegisterActivationCode_11);
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
			positionType: 'RELATIVE',
			alignItems: 'STRETCH',
			alignContent: 'STRETCH'
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
		'tvEnterDigits',
		$FlexLayout1$$FlexLayout1$$TvEnterDigits_,
		pageInstance
	);
	addChild.call(
		this,
		'tvSendToPhone',
		$FlexLayout1$$FlexLayout1$$TvSendToPhone_,
		pageInstance
	);
	addChild.call(
		this,
		'flexLayout1',
		$FlexLayout1$$FlexLayout1$$FlexLayout1_,
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
	classNames: '.sf-flexLayout .sf-flexLayout1',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: { flexProps: { flexGrow: 4 } }
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

function $FlexLayout1$$FlexLayout1$$TvEnterDigits(_super, pageInstance) {
	_super(this);

	pageInstance.tvEnterDigits = this;
	var html =
		'<span style="font-family: SFProText-Regular; font-size: 16px; white-space: pre-wrap; background-color: rgb(255, 255, 255);">  Lorem ipsum dolor sit amet, consectetur \n  adipiscing elit. <span style="color: rgb(0, 161, 241); font-size: 17.3913px; font-family: SFProText-Regular; background-color: rgb(255, 255, 255);">Donec quis semper justo. In  \n  ultrices metus nec sodales consectetur.</span> \n  Aliquam erat volutpat. <span style="font-size: 16px; font-family: SFProText-Regular; background-color: rgb(255, 255, 255); text-decoration-color: rgb(0, 0, 0); text-decoration-line: underline;">Suspendisse</span> potenti.</span><br>';
	var attributedStrings = createAttributedStrings(html);
	this.attributedText = attributedStrings.map(
		s => new AttributedString(propFactory.default(s))
	);
}
$FlexLayout1$$FlexLayout1$$TvEnterDigits.$$styleContext = {
	classNames: '.sf-textView',
	defaultClassNames: '.default_common .default_textView',
	userProps: { height: null }
};
const $FlexLayout1$$FlexLayout1$$TvEnterDigits_ = TextView(
	$FlexLayout1$$FlexLayout1$$TvEnterDigits
);

function $FlexLayout1$$FlexLayout1$$TvSendToPhone(_super, pageInstance) {
	_super(this);

	pageInstance.tvSendToPhone = this;
	var html =
		'<span style="font-family: SFProText-Regular; font-size: 16px; white-space: pre-wrap; background-color: rgb(255, 255, 255);">  Lorem ipsum dolor sit amet, consectetur \n  adipiscing elit. <span style="color: rgb(0, 161, 241); font-size: 17.3913px; font-family: SFProText-Regular; background-color: rgb(255, 255, 255);">Donec quis semper justo. In  \n  ultrices metus nec sodales consectetur.</span> \n  Aliquam erat volutpat. <span style="font-size: 16px; font-family: SFProText-Regular; background-color: rgb(255, 255, 255); text-decoration-color: rgb(0, 0, 0); text-decoration-line: underline;">Suspendisse</span> potenti.</span><br>';
	var attributedStrings = createAttributedStrings(html);
	this.attributedText = attributedStrings.map(
		s => new AttributedString(propFactory.default(s))
	);
}
$FlexLayout1$$FlexLayout1$$TvSendToPhone.$$styleContext = {
	classNames: '.sf-textView',
	defaultClassNames: '.default_common .default_textView',
	userProps: {}
};
const $FlexLayout1$$FlexLayout1$$TvSendToPhone_ = TextView(
	$FlexLayout1$$FlexLayout1$$TvSendToPhone
);

function $FlexLayout1$$FlexLayout1$$FlexLayout1(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'flexLayoutActivationCode1',
		$FlexLayout1$$FlexLayout1$$FlexLayout1$$FlexLayoutActivationCode1_,
		pageInstance
	);
	addChild.call(
		this,
		'flexLayoutActivationCode2',
		$FlexLayout1$$FlexLayout1$$FlexLayout1$$FlexLayoutActivationCode2_,
		pageInstance
	);
	addChild.call(
		this,
		'flexLayoutActivationCode3',
		$FlexLayout1$$FlexLayout1$$FlexLayout1$$FlexLayoutActivationCode3_,
		pageInstance
	);
	addChild.call(
		this,
		'flexLayoutActivationCode4',
		$FlexLayout1$$FlexLayout1$$FlexLayout1$$FlexLayoutActivationCode4_,
		pageInstance
	);
	addChild.call(
		this,
		'flexLayoutActivationCode5',
		$FlexLayout1$$FlexLayout1$$FlexLayout1$$FlexLayoutActivationCode5_,
		pageInstance
	);
	addChild.call(
		this,
		'flexLayoutActivationCode6',
		$FlexLayout1$$FlexLayout1$$FlexLayout1$$FlexLayoutActivationCode6_,
		pageInstance
	);
	addChild.call(
		this,
		'tbHidden',
		$FlexLayout1$$FlexLayout1$$FlexLayout1$$TbHidden_,
		pageInstance
	);
	addChild.call(
		this,
		'viewDigitCode',
		$FlexLayout1$$FlexLayout1$$FlexLayout1$$ViewDigitCode_,
		pageInstance
	);
	pageInstance.flexLayout1 = this;
}
$FlexLayout1$$FlexLayout1$$FlexLayout1.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: { flexProps: { flexDirection: 'ROW' } }
};
const $FlexLayout1$$FlexLayout1$$FlexLayout1_ = FlexLayout(
	$FlexLayout1$$FlexLayout1$$FlexLayout1
);
function $FlexLayout1$$FlexLayout1$$FlexLayout1$$FlexLayoutActivationCode1(
	_super,
	pageInstance
) {
	_super(this);

	pageInstance.flexLayoutActivationCode1 = this;
}
$FlexLayout1$$FlexLayout1$$FlexLayout1$$FlexLayoutActivationCode1.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: { positionType: 'RELATIVE' },
		height: null,
		left: 0,
		top: 0,
		width: null
	}
};
const $FlexLayout1$$FlexLayout1$$FlexLayout1$$FlexLayoutActivationCode1_ = FlexLayoutActivationCode(
	$FlexLayout1$$FlexLayout1$$FlexLayout1$$FlexLayoutActivationCode1
);

function $FlexLayout1$$FlexLayout1$$FlexLayout1$$FlexLayoutActivationCode2(
	_super,
	pageInstance
) {
	_super(this);

	pageInstance.flexLayoutActivationCode2 = this;
}
$FlexLayout1$$FlexLayout1$$FlexLayout1$$FlexLayoutActivationCode2.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: { positionType: 'RELATIVE' },
		height: null,
		left: 0,
		top: 0,
		width: null
	}
};
const $FlexLayout1$$FlexLayout1$$FlexLayout1$$FlexLayoutActivationCode2_ = FlexLayoutActivationCode(
	$FlexLayout1$$FlexLayout1$$FlexLayout1$$FlexLayoutActivationCode2
);

function $FlexLayout1$$FlexLayout1$$FlexLayout1$$FlexLayoutActivationCode3(
	_super,
	pageInstance
) {
	_super(this);

	pageInstance.flexLayoutActivationCode3 = this;
}
$FlexLayout1$$FlexLayout1$$FlexLayout1$$FlexLayoutActivationCode3.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: { positionType: 'RELATIVE' },
		height: null,
		left: 0,
		top: 0,
		width: null
	}
};
const $FlexLayout1$$FlexLayout1$$FlexLayout1$$FlexLayoutActivationCode3_ = FlexLayoutActivationCode(
	$FlexLayout1$$FlexLayout1$$FlexLayout1$$FlexLayoutActivationCode3
);

function $FlexLayout1$$FlexLayout1$$FlexLayout1$$FlexLayoutActivationCode4(
	_super,
	pageInstance
) {
	_super(this);

	pageInstance.flexLayoutActivationCode4 = this;
}
$FlexLayout1$$FlexLayout1$$FlexLayout1$$FlexLayoutActivationCode4.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: { positionType: 'RELATIVE' },
		height: null,
		left: 0,
		top: 0,
		width: null
	}
};
const $FlexLayout1$$FlexLayout1$$FlexLayout1$$FlexLayoutActivationCode4_ = FlexLayoutActivationCode(
	$FlexLayout1$$FlexLayout1$$FlexLayout1$$FlexLayoutActivationCode4
);

function $FlexLayout1$$FlexLayout1$$FlexLayout1$$FlexLayoutActivationCode5(
	_super,
	pageInstance
) {
	_super(this);

	pageInstance.flexLayoutActivationCode5 = this;
}
$FlexLayout1$$FlexLayout1$$FlexLayout1$$FlexLayoutActivationCode5.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: { positionType: 'RELATIVE' },
		height: null,
		left: 0,
		top: 0,
		width: null
	}
};
const $FlexLayout1$$FlexLayout1$$FlexLayout1$$FlexLayoutActivationCode5_ = FlexLayoutActivationCode(
	$FlexLayout1$$FlexLayout1$$FlexLayout1$$FlexLayoutActivationCode5
);

function $FlexLayout1$$FlexLayout1$$FlexLayout1$$FlexLayoutActivationCode6(
	_super,
	pageInstance
) {
	_super(this);

	pageInstance.flexLayoutActivationCode6 = this;
}
$FlexLayout1$$FlexLayout1$$FlexLayout1$$FlexLayoutActivationCode6.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: { positionType: 'RELATIVE' },
		height: null,
		left: 0,
		top: 0,
		width: null
	}
};
const $FlexLayout1$$FlexLayout1$$FlexLayout1$$FlexLayoutActivationCode6_ = FlexLayoutActivationCode(
	$FlexLayout1$$FlexLayout1$$FlexLayout1$$FlexLayoutActivationCode6
);

function $FlexLayout1$$FlexLayout1$$FlexLayout1$$TbHidden(
	_super,
	pageInstance
) {
	_super(this, { text: ' ' });

	pageInstance.tbHidden = this;
}
$FlexLayout1$$FlexLayout1$$FlexLayout1$$TbHidden.$$styleContext = {
	classNames: '.sf-textBox',
	defaultClassNames: '.default_common .default_textBox',
	userProps: {
		borderWidth: null,
		flexProps: { alignSelf: 'FLEX_END', positionType: 'ABSOLUTE' },
		height: 0,
		left: 0,
		top: 0,
		visible: true,
		width: 0
	}
};
const $FlexLayout1$$FlexLayout1$$FlexLayout1$$TbHidden_ = TextBox(
	$FlexLayout1$$FlexLayout1$$FlexLayout1$$TbHidden
);

function $FlexLayout1$$FlexLayout1$$FlexLayout1$$ViewDigitCode(
	_super,
	pageInstance
) {
	_super(this);

	pageInstance.viewDigitCode = this;
}
$FlexLayout1$$FlexLayout1$$FlexLayout1$$ViewDigitCode.$$styleContext = {
	classNames: '.sf-view',
	defaultClassNames: '.default_common .default_view',
	userProps: {
		backgroundColor: 'rgba( 255, 255, 255, 0 )',
		flexProps: { positionType: 'ABSOLUTE', alignSelf: 'AUTO' },
		height: 500,
		left: 0,
		top: 0,
		width: 500
	}
};
const $FlexLayout1$$FlexLayout1$$FlexLayout1$$ViewDigitCode_ = View(
	$FlexLayout1$$FlexLayout1$$FlexLayout1$$ViewDigitCode
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
		borderColor: 'rgba( 208, 2, 27, 1 )',
		flexProps: { flexGrow: 1, alignSelf: 'STRETCH' },
		height: null
	}
};
const $FlexLayout1$$FlexLayout1$$ViewRemoveTouch_ = View(
	$FlexLayout1$$FlexLayout1$$ViewRemoveTouch
);

function $FlexLayout1$$FlexLayout2(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'tvResendCode',
		$FlexLayout1$$FlexLayout2$$TvResendCode_,
		pageInstance
	);
	addChild.call(
		this,
		'btnResend',
		$FlexLayout1$$FlexLayout2$$BtnResend_,
		pageInstance
	);
}
$FlexLayout1$$FlexLayout2.$$styleContext = {
	classNames: '.sf-flexLayout .sf-flexLayout2',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {}
};
const $FlexLayout1$$FlexLayout2_ = FlexLayout($FlexLayout1$$FlexLayout2);
function $FlexLayout1$$FlexLayout2$$TvResendCode(_super, pageInstance) {
	_super(this);

	pageInstance.tvResendCode = this;
	var html =
		'<span style="font-family: SFProText-Regular; font-size: 16px; white-space: pre-wrap; background-color: rgb(255, 255, 255);">  Lorem ipsum dolor sit amet, consectetur \n  adipiscing elit. <span style="color: rgb(0, 161, 241); font-size: 17.3913px; font-family: SFProText-Regular; background-color: rgb(255, 255, 255);">Donec quis semper justo. In  \n  ultrices metus nec sodales consectetur.</span> \n  Aliquam erat volutpat. <span style="font-size: 16px; font-family: SFProText-Regular; background-color: rgb(255, 255, 255); text-decoration-color: rgb(0, 0, 0); text-decoration-line: underline;">Suspendisse</span> potenti.</span><br>';
	var attributedStrings = createAttributedStrings(html);
	this.attributedText = attributedStrings.map(
		s => new AttributedString(propFactory.default(s))
	);
}
$FlexLayout1$$FlexLayout2$$TvResendCode.$$styleContext = {
	classNames: '.sf-textView',
	defaultClassNames: '.default_common .default_textView',
	userProps: { left: 0, top: 0 }
};
const $FlexLayout1$$FlexLayout2$$TvResendCode_ = TextView(
	$FlexLayout1$$FlexLayout2$$TvResendCode
);

function $FlexLayout1$$FlexLayout2$$BtnResend(_super, pageInstance) {
	_super(this, { text: 'Resend' });

	pageInstance.btnResend = this;
}
$FlexLayout1$$FlexLayout2$$BtnResend.$$styleContext = {
	classNames: '.sf-button',
	defaultClassNames: '.default_common .default_button',
	userProps: {
		backgroundColor: 'rgba( 158, 238, 255, 1 )',
		left: 0,
		textColor: 'rgba( 129, 215, 238, 1 )',
		top: 0
	}
};
const $FlexLayout1$$FlexLayout2$$BtnResend_ = Button(
	$FlexLayout1$$FlexLayout2$$BtnResend
);

/**
 * @event onLoad
 * This event is called once when page is created. You can create views and add them to page in this callback.
 */
function onLoad() {
	// HeaderBar props
	this.headerBar.borderVisibility = false;
	this.headerBar.title = ' ';
}

module.exports = $PgRegisterActivationCode_11_;
