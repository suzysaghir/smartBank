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
const TextBox = extend(require('sf-core/ui/textbox'));
const Button = extend(require('sf-core/ui/button'));
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
function $PgRegisterActivationCode(_super, props) {
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
	addChild.call(this, 'tvEnterDigits', $TvEnterDigits_, this);
	addChild.call(this, 'tvSendToPhone', $TvSendToPhone_, this);
	addChild.call(this, 'flexContainer', $FlexContainer_, this);
	addChild.call(this, 'tvResendCode', $TvResendCode_, this);
	addChild.call(this, 'btnResend', $BtnResend_, this);
	addChild.call(this, 'viewDigitCode', $ViewDigitCode_, this);
	pageContextPatch(this, 'pgRegisterActivationCode');
}
$PgRegisterActivationCode.$$styleContext = {
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
const $PgRegisterActivationCode_ = Page($PgRegisterActivationCode);
function $ImgvSmartbankLogo(_super, pageInstance) {
	_super(this);
}
$ImgvSmartbankLogo.$$styleContext = {
	classNames: '.sf-imageView .sf-img-smartbank',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {}
};
const $ImgvSmartbankLogo_ = ImageView($ImgvSmartbankLogo);

function $TvEnterDigits(_super, pageInstance) {
	_super(this, { text: '\n' });

	pageInstance.tvEnterDigits = this;
}
$TvEnterDigits.$$styleContext = {
	classNames: '.sf-textView',
	defaultClassNames: '.default_common .default_textView',
	userProps: { height: null }
};
const $TvEnterDigits_ = TextView($TvEnterDigits);

function $TvSendToPhone(_super, pageInstance) {
	_super(this, { text: '\n' });

	pageInstance.tvSendToPhone = this;
}
$TvSendToPhone.$$styleContext = {
	classNames: '.sf-textView',
	defaultClassNames: '.default_common .default_textView',
	userProps: { height: null }
};
const $TvSendToPhone_ = TextView($TvSendToPhone);

function $FlexContainer(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'flexLayout6',
		$FlexContainer$$FlexLayout6_,
		pageInstance
	);
	addChild.call(
		this,
		'flexLayout5',
		$FlexContainer$$FlexLayout5_,
		pageInstance
	);
	addChild.call(
		this,
		'flexLayout4',
		$FlexContainer$$FlexLayout4_,
		pageInstance
	);
	addChild.call(
		this,
		'flexLayout3',
		$FlexContainer$$FlexLayout3_,
		pageInstance
	);
	addChild.call(
		this,
		'flexLayout2',
		$FlexContainer$$FlexLayout2_,
		pageInstance
	);
	addChild.call(
		this,
		'flexLayout1',
		$FlexContainer$$FlexLayout1_,
		pageInstance
	);
	addChild.call(this, 'tbHidden', $FlexContainer$$TbHidden_, pageInstance);
	pageInstance.flexContainer = this;
}
$FlexContainer.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		borderColor: 'rgba( 255, 255, 255, 0 )',
		flexProps: {
			flexGrow: 1,
			alignItems: 'AUTO',
			flexDirection: 'ROW',
			justifyContent: 'CENTER',
			alignSelf: 'STRETCH',
			alignContent: 'STRETCH'
		},
		marginTop: 20
	}
};
const $FlexContainer_ = FlexLayout($FlexContainer);
function $FlexContainer$$FlexLayout6(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'tvDigit6',
		$FlexContainer$$FlexLayout6$$TvDigit6_,
		pageInstance
	);
	addChild.call(
		this,
		'tvLine6',
		$FlexContainer$$FlexLayout6$$TvLine6_,
		pageInstance
	);
	pageInstance.flexLayout6 = this;
}
$FlexContainer$$FlexLayout6.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {}
};
const $FlexContainer$$FlexLayout6_ = FlexLayout($FlexContainer$$FlexLayout6);
function $FlexContainer$$FlexLayout6$$TvDigit6(_super, pageInstance) {
	_super(this, { text: '' });

	pageInstance.tvDigit6 = this;
}
$FlexContainer$$FlexLayout6$$TvDigit6.$$styleContext = {
	classNames: '.sf-textView .sf-tvDigit',
	defaultClassNames: '.default_common .default_textView',
	userProps: { height: null, width: null }
};
const $FlexContainer$$FlexLayout6$$TvDigit6_ = TextView(
	$FlexContainer$$FlexLayout6$$TvDigit6
);

function $FlexContainer$$FlexLayout6$$TvLine6(_super, pageInstance) {
	_super(this, { text: '___' });

	pageInstance.tvLine6 = this;
}
$FlexContainer$$FlexLayout6$$TvLine6.$$styleContext = {
	classNames: '.sf-textView .sf-tvLine',
	defaultClassNames: '.default_common .default_textView',
	userProps: {}
};
const $FlexContainer$$FlexLayout6$$TvLine6_ = TextView(
	$FlexContainer$$FlexLayout6$$TvLine6
);

function $FlexContainer$$FlexLayout5(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'tvDigit5',
		$FlexContainer$$FlexLayout5$$TvDigit5_,
		pageInstance
	);
	addChild.call(
		this,
		'tvLine5',
		$FlexContainer$$FlexLayout5$$TvLine5_,
		pageInstance
	);
	pageInstance.flexLayout5 = this;
}
$FlexContainer$$FlexLayout5.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {}
};
const $FlexContainer$$FlexLayout5_ = FlexLayout($FlexContainer$$FlexLayout5);
function $FlexContainer$$FlexLayout5$$TvDigit5(_super, pageInstance) {
	_super(this, { text: '' });

	pageInstance.tvDigit5 = this;
}
$FlexContainer$$FlexLayout5$$TvDigit5.$$styleContext = {
	classNames: '.sf-textView .sf-tvDigit',
	defaultClassNames: '.default_common .default_textView',
	userProps: { height: null, width: null }
};
const $FlexContainer$$FlexLayout5$$TvDigit5_ = TextView(
	$FlexContainer$$FlexLayout5$$TvDigit5
);

function $FlexContainer$$FlexLayout5$$TvLine5(_super, pageInstance) {
	_super(this, { text: '___' });

	pageInstance.tvLine5 = this;
}
$FlexContainer$$FlexLayout5$$TvLine5.$$styleContext = {
	classNames: '.sf-textView .sf-tvLine',
	defaultClassNames: '.default_common .default_textView',
	userProps: {}
};
const $FlexContainer$$FlexLayout5$$TvLine5_ = TextView(
	$FlexContainer$$FlexLayout5$$TvLine5
);

function $FlexContainer$$FlexLayout4(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'tvDigit4',
		$FlexContainer$$FlexLayout4$$TvDigit4_,
		pageInstance
	);
	addChild.call(
		this,
		'tvLine4',
		$FlexContainer$$FlexLayout4$$TvLine4_,
		pageInstance
	);
	pageInstance.flexLayout4 = this;
}
$FlexContainer$$FlexLayout4.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {}
};
const $FlexContainer$$FlexLayout4_ = FlexLayout($FlexContainer$$FlexLayout4);
function $FlexContainer$$FlexLayout4$$TvDigit4(_super, pageInstance) {
	_super(this, { text: '' });

	pageInstance.tvDigit4 = this;
}
$FlexContainer$$FlexLayout4$$TvDigit4.$$styleContext = {
	classNames: '.sf-textView .sf-tvDigit',
	defaultClassNames: '.default_common .default_textView',
	userProps: { height: null, width: null }
};
const $FlexContainer$$FlexLayout4$$TvDigit4_ = TextView(
	$FlexContainer$$FlexLayout4$$TvDigit4
);

function $FlexContainer$$FlexLayout4$$TvLine4(_super, pageInstance) {
	_super(this, { text: '___' });

	pageInstance.tvLine4 = this;
}
$FlexContainer$$FlexLayout4$$TvLine4.$$styleContext = {
	classNames: '.sf-textView .sf-tvLine',
	defaultClassNames: '.default_common .default_textView',
	userProps: {}
};
const $FlexContainer$$FlexLayout4$$TvLine4_ = TextView(
	$FlexContainer$$FlexLayout4$$TvLine4
);

function $FlexContainer$$FlexLayout3(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'tvDigit3',
		$FlexContainer$$FlexLayout3$$TvDigit3_,
		pageInstance
	);
	addChild.call(
		this,
		'tvLine3',
		$FlexContainer$$FlexLayout3$$TvLine3_,
		pageInstance
	);
	pageInstance.flexLayout3 = this;
}
$FlexContainer$$FlexLayout3.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {}
};
const $FlexContainer$$FlexLayout3_ = FlexLayout($FlexContainer$$FlexLayout3);
function $FlexContainer$$FlexLayout3$$TvDigit3(_super, pageInstance) {
	_super(this, { text: '' });

	pageInstance.tvDigit3 = this;
}
$FlexContainer$$FlexLayout3$$TvDigit3.$$styleContext = {
	classNames: '.sf-textView .sf-tvDigit',
	defaultClassNames: '.default_common .default_textView',
	userProps: { height: null, width: null }
};
const $FlexContainer$$FlexLayout3$$TvDigit3_ = TextView(
	$FlexContainer$$FlexLayout3$$TvDigit3
);

function $FlexContainer$$FlexLayout3$$TvLine3(_super, pageInstance) {
	_super(this, { text: '___' });

	pageInstance.tvLine3 = this;
}
$FlexContainer$$FlexLayout3$$TvLine3.$$styleContext = {
	classNames: '.sf-textView .sf-tvLine',
	defaultClassNames: '.default_common .default_textView',
	userProps: {}
};
const $FlexContainer$$FlexLayout3$$TvLine3_ = TextView(
	$FlexContainer$$FlexLayout3$$TvLine3
);

function $FlexContainer$$FlexLayout2(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'tvDigit2',
		$FlexContainer$$FlexLayout2$$TvDigit2_,
		pageInstance
	);
	addChild.call(
		this,
		'tvLine2',
		$FlexContainer$$FlexLayout2$$TvLine2_,
		pageInstance
	);
	pageInstance.flexLayout2 = this;
}
$FlexContainer$$FlexLayout2.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {}
};
const $FlexContainer$$FlexLayout2_ = FlexLayout($FlexContainer$$FlexLayout2);
function $FlexContainer$$FlexLayout2$$TvDigit2(_super, pageInstance) {
	_super(this, { text: '' });

	pageInstance.tvDigit2 = this;
}
$FlexContainer$$FlexLayout2$$TvDigit2.$$styleContext = {
	classNames: '.sf-textView .sf-tvDigit',
	defaultClassNames: '.default_common .default_textView',
	userProps: { height: null, width: null }
};
const $FlexContainer$$FlexLayout2$$TvDigit2_ = TextView(
	$FlexContainer$$FlexLayout2$$TvDigit2
);

function $FlexContainer$$FlexLayout2$$TvLine2(_super, pageInstance) {
	_super(this, { text: '___' });

	pageInstance.tvLine2 = this;
}
$FlexContainer$$FlexLayout2$$TvLine2.$$styleContext = {
	classNames: '.sf-textView .sf-tvLine',
	defaultClassNames: '.default_common .default_textView',
	userProps: {}
};
const $FlexContainer$$FlexLayout2$$TvLine2_ = TextView(
	$FlexContainer$$FlexLayout2$$TvLine2
);

function $FlexContainer$$FlexLayout1(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'tvDigit1',
		$FlexContainer$$FlexLayout1$$TvDigit1_,
		pageInstance
	);
	addChild.call(
		this,
		'tvLine1',
		$FlexContainer$$FlexLayout1$$TvLine1_,
		pageInstance
	);
	pageInstance.flexLayout1 = this;
}
$FlexContainer$$FlexLayout1.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {}
};
const $FlexContainer$$FlexLayout1_ = FlexLayout($FlexContainer$$FlexLayout1);
function $FlexContainer$$FlexLayout1$$TvDigit1(_super, pageInstance) {
	_super(this, { text: '' });

	pageInstance.tvDigit1 = this;
}
$FlexContainer$$FlexLayout1$$TvDigit1.$$styleContext = {
	classNames: '.sf-textView .sf-tvDigit',
	defaultClassNames: '.default_common .default_textView',
	userProps: { height: null, width: null }
};
const $FlexContainer$$FlexLayout1$$TvDigit1_ = TextView(
	$FlexContainer$$FlexLayout1$$TvDigit1
);

function $FlexContainer$$FlexLayout1$$TvLine1(_super, pageInstance) {
	_super(this, { text: '___' });

	pageInstance.tvLine1 = this;
}
$FlexContainer$$FlexLayout1$$TvLine1.$$styleContext = {
	classNames: '.sf-textView .sf-tvLine',
	defaultClassNames: '.default_common .default_textView',
	userProps: {}
};
const $FlexContainer$$FlexLayout1$$TvLine1_ = TextView(
	$FlexContainer$$FlexLayout1$$TvLine1
);

function $FlexContainer$$TbHidden(_super, pageInstance) {
	_super(this, { text: '  textBox1' });

	pageInstance.tbHidden = this;
}
$FlexContainer$$TbHidden.$$styleContext = {
	classNames: '.sf-textBox',
	defaultClassNames: '.default_common .default_textBox',
	userProps: { flexProps: { positionType: 'ABSOLUTE' }, height: 30, width: 30 }
};
const $FlexContainer$$TbHidden_ = TextBox($FlexContainer$$TbHidden);

function $TvResendCode(_super, pageInstance) {
	_super(this);

	pageInstance.tvResendCode = this;
	var html =
		'<span style="font-family: SFProText-Regular; font-size: 16px; white-space: pre-wrap; background-color: rgb(255, 255, 255);">  Lorem ipsum dolor sit amet, consectetur \n  adipiscing elit. <span style="color: rgb(0, 161, 241); font-size: 17.3913px; font-family: SFProText-Regular; background-color: rgb(255, 255, 255);">Donec quis semper justo. In  \n  ultrices metus nec sodales consectetur.</span> \n  Aliquam erat volutpat. <span style="font-size: 16px; font-family: SFProText-Regular; background-color: rgb(255, 255, 255); text-decoration-color: rgb(0, 0, 0); text-decoration-line: underline;">Suspendisse</span> potenti.</span><br>';
	var attributedStrings = createAttributedStrings(html);
	this.attributedText = attributedStrings.map(
		s => new AttributedString(propFactory.default(s))
	);
}
$TvResendCode.$$styleContext = {
	classNames: '.sf-textView',
	defaultClassNames: '.default_common .default_textView',
	userProps: {}
};
const $TvResendCode_ = TextView($TvResendCode);

function $BtnResend(_super, pageInstance) {
	_super(this, { text: 'Resend' });

	pageInstance.btnResend = this;
}
$BtnResend.$$styleContext = {
	classNames: '.sf-button',
	defaultClassNames: '.default_common .default_button',
	userProps: {
		backgroundColor: 'rgba( 158, 238, 255, 1 )',
		textColor: 'rgba( 129, 215, 238, 1 )'
	}
};
const $BtnResend_ = Button($BtnResend);

function $ViewDigitCode(_super, pageInstance) {
	_super(this);

	pageInstance.viewDigitCode = this;
}
$ViewDigitCode.$$styleContext = {
	classNames: '.sf-view',
	defaultClassNames: '.default_common .default_view',
	userProps: {
		alpha: 0.62,
		backgroundColor: 'rgba( 208, 2, 27, 0 )',
		flexProps: { positionType: 'ABSOLUTE', alignSelf: 'CENTER', flexGrow: 29 },
		height: 209.72222222222223,
		left: 4.222218195597331,
		top: 70.54597801632352,
		width: 397.22222222222223
	}
};
const $ViewDigitCode_ = View($ViewDigitCode);

/**
 * @event onLoad
 * This event is called once when page is created. You can create views and add them to page in this callback.
 */
function onLoad() {
	// HeaderBar props
}

module.exports = $PgRegisterActivationCode_;
