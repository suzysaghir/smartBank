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
const View = extend(require('sf-core/ui/view'));
const Button = extend(require('sf-core/ui/button'));
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
function $PgRegisterPhoneNumber_1(_super, props) {
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
	pageContextPatch(this, 'pgRegisterPhoneNumber_1');
}
$PgRegisterPhoneNumber_1.$$styleContext = {
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
		userProps: { visible: false }
	}
};
const $PgRegisterPhoneNumber_1_ = Page($PgRegisterPhoneNumber_1);
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
		backgroundColor: 'rgba( 255, 255, 255, 0 )',
		flexProps: {
			justifyContent: 'CENTER',
			alignItems: 'STRETCH',
			alignContent: 'STRETCH',
			positionType: 'RELATIVE',
			alignSelf: 'STRETCH',
			flexDirection: 'COLUMN'
		},
		marginTop: 10
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
		'tvPhoneNumber',
		$FlexLayout1$$FlexLayout1$$TvPhoneNumber_,
		pageInstance
	);
	addChild.call(
		this,
		'flexMtb',
		$FlexLayout1$$FlexLayout1$$FlexMtb_,
		pageInstance
	);
	addChild.call(
		this,
		'flexLayout1',
		$FlexLayout1$$FlexLayout1$$FlexLayout1_,
		pageInstance
	);
}
$FlexLayout1$$FlexLayout1.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: {
			flexGrow: 2,
			justifyContent: 'SPACE_AROUND',
			alignSelf: 'STRETCH'
		},
		marginTop: null,
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

function $FlexLayout1$$FlexLayout1$$TvPhoneNumber(_super, pageInstance) {
	_super(this);

	pageInstance.tvPhoneNumber = this;
	var html =
		'<span style="font-family: SFProText-Regular; font-size: 16px; white-space: pre-wrap; background-color: rgb(255, 255, 255);">  Lorem ipsum dolor sit amet, consectetur \n  adipiscing elit. <span style="color: rgb(0, 161, 241); font-size: 17.3913px; font-family: SFProText-Regular; background-color: rgb(255, 255, 255);">Donec quis semper justo. In  \n  ultrices metus nec sodales consectetur.</span> \n  Aliquam erat volutpat. <span style="font-size: 16px; font-family: SFProText-Regular; background-color: rgb(255, 255, 255); text-decoration-color: rgb(0, 0, 0); text-decoration-line: underline;">Suspendisse</span> potenti.</span><br>';
	var attributedStrings = createAttributedStrings(html);
	this.attributedText = attributedStrings.map(
		s => new AttributedString(propFactory.default(s))
	);
}
$FlexLayout1$$FlexLayout1$$TvPhoneNumber.$$styleContext = {
	classNames: '.sf-textView',
	defaultClassNames: '.default_common .default_textView',
	userProps: { marginLeft: 20, marginRight: 20, maxWidth: 600 }
};
const $FlexLayout1$$FlexLayout1$$TvPhoneNumber_ = TextView(
	$FlexLayout1$$FlexLayout1$$TvPhoneNumber
);

function $FlexLayout1$$FlexLayout1$$FlexMtb(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'flxCountry',
		$FlexLayout1$$FlexLayout1$$FlexMtb$$FlxCountry_,
		pageInstance
	);
	addChild.call(
		this,
		'flxNumber',
		$FlexLayout1$$FlexLayout1$$FlexMtb$$FlxNumber_,
		pageInstance
	);
	pageInstance.flexMtb = this;
}
$FlexLayout1$$FlexLayout1$$FlexMtb.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		backgroundColor: 'rgba( 255, 255, 255, 0 )',
		flexProps: {
			flexGrow: null,
			justifyContent: 'SPACE_AROUND',
			alignItems: 'STRETCH',
			alignContent: 'STRETCH',
			flexDirection: 'ROW',
			alignSelf: 'STRETCH'
		},
		height: null,
		width: null
	}
};
const $FlexLayout1$$FlexLayout1$$FlexMtb_ = FlexLayout(
	$FlexLayout1$$FlexLayout1$$FlexMtb
);
function $FlexLayout1$$FlexLayout1$$FlexMtb$$FlxCountry(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'mtbCountry',
		$FlexLayout1$$FlexLayout1$$FlexMtb$$FlxCountry$$MtbCountry_,
		pageInstance
	);
	addChild.call(
		this,
		'view1',
		$FlexLayout1$$FlexLayout1$$FlexMtb$$FlxCountry$$View1_,
		pageInstance
	);
}
$FlexLayout1$$FlexLayout1$$FlexMtb$$FlxCountry.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		alpha: 1,
		backgroundColor: 'rgba( 255, 255, 255, 0 )',
		flexProps: { alignItems: 'STRETCH', alignContent: 'STRETCH' },
		height: null,
		maxWidth: 110,
		width: null
	}
};
const $FlexLayout1$$FlexLayout1$$FlexMtb$$FlxCountry_ = FlexLayout(
	$FlexLayout1$$FlexLayout1$$FlexMtb$$FlxCountry
);
function $FlexLayout1$$FlexLayout1$$FlexMtb$$FlxCountry$$MtbCountry(
	_super,
	pageInstance
) {
	_super(this);

	pageInstance.mtbCountry = this;
}
$FlexLayout1$$FlexLayout1$$FlexMtb$$FlxCountry$$MtbCountry.$$styleContext = {
	classNames: '.materialTextBox-wrapper',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: { positionType: 'RELATIVE' },
		left: 0,
		marginLeft: 3,
		marginRight: 3,
		top: 0
	}
};
const $FlexLayout1$$FlexLayout1$$FlexMtb$$FlxCountry$$MtbCountry_ = FlexLayout(
	$FlexLayout1$$FlexLayout1$$FlexMtb$$FlxCountry$$MtbCountry
);

function $FlexLayout1$$FlexLayout1$$FlexMtb$$FlxCountry$$View1(
	_super,
	pageInstance
) {
	_super(this);

	pageInstance.view1 = this;
}
$FlexLayout1$$FlexLayout1$$FlexMtb$$FlxCountry$$View1.$$styleContext = {
	classNames: '.sf-view',
	defaultClassNames: '.default_common .default_view',
	userProps: {
		backgroundColor: 'rgba( 255, 255, 255, 0 )',
		flexProps: { positionType: 'ABSOLUTE', flexGrow: 1, alignSelf: 'CENTER' },
		height: 48,
		width: 1000
	}
};
const $FlexLayout1$$FlexLayout1$$FlexMtb$$FlxCountry$$View1_ = View(
	$FlexLayout1$$FlexLayout1$$FlexMtb$$FlxCountry$$View1
);

function $FlexLayout1$$FlexLayout1$$FlexMtb$$FlxNumber(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'mtbPhoneNumber',
		$FlexLayout1$$FlexLayout1$$FlexMtb$$FlxNumber$$MtbPhoneNumber_,
		pageInstance
	);
}
$FlexLayout1$$FlexLayout1$$FlexMtb$$FlxNumber.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: { flexProps: { alignItems: 'STRETCH', alignContent: 'STRETCH' } }
};
const $FlexLayout1$$FlexLayout1$$FlexMtb$$FlxNumber_ = FlexLayout(
	$FlexLayout1$$FlexLayout1$$FlexMtb$$FlxNumber
);
function $FlexLayout1$$FlexLayout1$$FlexMtb$$FlxNumber$$MtbPhoneNumber(
	_super,
	pageInstance
) {
	_super(this);

	pageInstance.mtbPhoneNumber = this;
}
$FlexLayout1$$FlexLayout1$$FlexMtb$$FlxNumber$$MtbPhoneNumber.$$styleContext = {
	classNames: '.materialTextBox-wrapper',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: { positionType: 'RELATIVE' },
		left: 0,
		marginLeft: 3,
		marginRight: 3,
		top: 0
	}
};
const $FlexLayout1$$FlexLayout1$$FlexMtb$$FlxNumber$$MtbPhoneNumber_ = FlexLayout(
	$FlexLayout1$$FlexLayout1$$FlexMtb$$FlxNumber$$MtbPhoneNumber
);

function $FlexLayout1$$FlexLayout1$$FlexLayout1(_super, pageInstance) {
	_super(this);
}
$FlexLayout1$$FlexLayout1$$FlexLayout1.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: { height: null, maxHeight: 100, width: null }
};
const $FlexLayout1$$FlexLayout1$$FlexLayout1_ = FlexLayout(
	$FlexLayout1$$FlexLayout1$$FlexLayout1
);

function $FlexLayout1$$FlexLayout2(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'tvChangeNum',
		$FlexLayout1$$FlexLayout2$$TvChangeNum_,
		pageInstance
	);
	addChild.call(
		this,
		'btnContinue',
		$FlexLayout1$$FlexLayout2$$BtnContinue_,
		pageInstance
	);
	pageInstance.flexLayout2 = this;
}
$FlexLayout1$$FlexLayout2.$$styleContext = {
	classNames: '.sf-flexLayout .sf-flexLayout2',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: { flexProps: { justifyContent: 'FLEX_END' } }
};
const $FlexLayout1$$FlexLayout2_ = FlexLayout($FlexLayout1$$FlexLayout2);
function $FlexLayout1$$FlexLayout2$$TvChangeNum(_super, pageInstance) {
	_super(this);

	pageInstance.tvChangeNum = this;
	var html =
		'<span style="font-family: SFProText-Regular; font-size: 16px; white-space: pre-wrap; background-color: rgb(255, 255, 255);">  Lorem ipsum dolor sit amet, consectetur \n  adipiscing elit. <span style="color: rgb(0, 161, 241); font-size: 17.3913px; font-family: SFProText-Regular; background-color: rgb(255, 255, 255);">Donec quis semper justo. In  \n  ultrices metus nec sodales consectetur.</span> \n  Aliquam erat volutpat. <span style="font-size: 16px; font-family: SFProText-Regular; background-color: rgb(255, 255, 255); text-decoration-color: rgb(0, 0, 0); text-decoration-line: underline;">Suspendisse</span> potenti.</span><br>';
	var attributedStrings = createAttributedStrings(html);
	this.attributedText = attributedStrings.map(
		s => new AttributedString(propFactory.default(s))
	);
}
$FlexLayout1$$FlexLayout2$$TvChangeNum.$$styleContext = {
	classNames: '.sf-textView',
	defaultClassNames: '.default_common .default_textView',
	userProps: { left: 0, textAlignment: 'BOTTOMCENTER', top: 0 }
};
const $FlexLayout1$$FlexLayout2$$TvChangeNum_ = TextView(
	$FlexLayout1$$FlexLayout2$$TvChangeNum
);

function $FlexLayout1$$FlexLayout2$$BtnContinue(_super, pageInstance) {
	_super(this, { text: 'Continue' });

	pageInstance.btnContinue = this;
}
$FlexLayout1$$FlexLayout2$$BtnContinue.$$styleContext = {
	classNames: '.sf-button',
	defaultClassNames: '.default_common .default_button',
	userProps: {}
};
const $FlexLayout1$$FlexLayout2$$BtnContinue_ = Button(
	$FlexLayout1$$FlexLayout2$$BtnContinue
);

/**
 * @event onLoad
 * This event is called once when page is created. You can create views and add them to page in this callback.
 */
function onLoad() {
	// HeaderBar props
}

module.exports = $PgRegisterPhoneNumber_1_;
