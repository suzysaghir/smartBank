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
const Materialtextbox = extend(require('materialtextbox'));

function addChild(childName, ChildClass, pageInstance) {
	this.children = this.children || {};
	this.children[childName] = new ChildClass(pageInstance);
	if (this.layout) this.layout.addChild(this.children[childName]);
	else this.addChild(this.children[childName]);
}
// Constructor
function $PgRegisterPersonalDetails_11(_super, props) {
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
	pageContextPatch(this, 'pgRegisterPersonalDetails_11');
}
$PgRegisterPersonalDetails_11.$$styleContext = {
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
const $PgRegisterPersonalDetails_11_ = Page($PgRegisterPersonalDetails_11);
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
		'tvPersonalDetails',
		$FlexLayout1$$FlexLayout1$$TvPersonalDetails_,
		pageInstance
	);
	addChild.call(
		this,
		'flexLayout_mtb',
		$FlexLayout1$$FlexLayout1$$FlexLayout_mtb_,
		pageInstance
	);
	pageInstance.flexLayout1 = this;
}
$FlexLayout1$$FlexLayout1.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: { flexGrow: 2, justifyContent: 'SPACE_AROUND' },
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

function $FlexLayout1$$FlexLayout1$$TvPersonalDetails(_super, pageInstance) {
	_super(this);

	pageInstance.tvPersonalDetails = this;
	var html =
		'<span style="font-family: SFProText-Regular; font-size: 16px; white-space: pre-wrap; background-color: rgb(255, 255, 255);">  Lorem ipsum dolor sit amet, consectetur \n  adipiscing elit. <span style="color: rgb(0, 161, 241); font-size: 17.3913px; font-family: SFProText-Regular; background-color: rgb(255, 255, 255);">Donec quis semper justo. In  \n  ultrices metus nec sodales consectetur.</span> \n  Aliquam erat volutpat. <span style="font-size: 16px; font-family: SFProText-Regular; background-color: rgb(255, 255, 255); text-decoration-color: rgb(0, 0, 0); text-decoration-line: underline;">Suspendisse</span> potenti.</span><br>';
	var attributedStrings = createAttributedStrings(html);
	this.attributedText = attributedStrings.map(
		s => new AttributedString(propFactory.default(s))
	);
}
$FlexLayout1$$FlexLayout1$$TvPersonalDetails.$$styleContext = {
	classNames: '.sf-textView',
	defaultClassNames: '.default_common .default_textView',
	userProps: {}
};
const $FlexLayout1$$FlexLayout1$$TvPersonalDetails_ = TextView(
	$FlexLayout1$$FlexLayout1$$TvPersonalDetails
);

function $FlexLayout1$$FlexLayout1$$FlexLayout_mtb(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'mtbFirstName',
		$FlexLayout1$$FlexLayout1$$FlexLayout_mtb$$MtbFirstName_,
		pageInstance
	);
	addChild.call(
		this,
		'mtbLastName',
		$FlexLayout1$$FlexLayout1$$FlexLayout_mtb$$MtbLastName_,
		pageInstance
	);
	addChild.call(
		this,
		'flexLayout1',
		$FlexLayout1$$FlexLayout1$$FlexLayout_mtb$$FlexLayout1_,
		pageInstance
	);
}
$FlexLayout1$$FlexLayout1$$FlexLayout_mtb.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: { justifyContent: 'CENTER', alignItems: 'STRETCH' },
		left: 0,
		top: 0
	}
};
const $FlexLayout1$$FlexLayout1$$FlexLayout_mtb_ = FlexLayout(
	$FlexLayout1$$FlexLayout1$$FlexLayout_mtb
);
function $FlexLayout1$$FlexLayout1$$FlexLayout_mtb$$MtbFirstName(
	_super,
	pageInstance
) {
	_super(this);

	pageInstance.mtbFirstName = this;
}
$FlexLayout1$$FlexLayout1$$FlexLayout_mtb$$MtbFirstName.$$styleContext = {
	classNames: '.materialTextBox-wrapper',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: { positionType: 'RELATIVE' },
		height: 48,
		left: 0,
		marginBottom: 16,
		top: 0,
		width: null
	}
};
const $FlexLayout1$$FlexLayout1$$FlexLayout_mtb$$MtbFirstName_ = Materialtextbox(
	$FlexLayout1$$FlexLayout1$$FlexLayout_mtb$$MtbFirstName
);

function $FlexLayout1$$FlexLayout1$$FlexLayout_mtb$$MtbLastName(
	_super,
	pageInstance
) {
	_super(this);

	pageInstance.mtbLastName = this;
}
$FlexLayout1$$FlexLayout1$$FlexLayout_mtb$$MtbLastName.$$styleContext = {
	classNames: '.materialTextBox-wrapper',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: { positionType: 'RELATIVE' },
		left: 0,
		marginBottom: 16,
		top: 0
	}
};
const $FlexLayout1$$FlexLayout1$$FlexLayout_mtb$$MtbLastName_ = Materialtextbox(
	$FlexLayout1$$FlexLayout1$$FlexLayout_mtb$$MtbLastName
);

function $FlexLayout1$$FlexLayout1$$FlexLayout_mtb$$FlexLayout1(
	_super,
	pageInstance
) {
	_super(this);

	addChild.call(
		this,
		'mtbBirthDate',
		$FlexLayout1$$FlexLayout1$$FlexLayout_mtb$$FlexLayout1$$MtbBirthDate_,
		pageInstance
	);
	addChild.call(
		this,
		'view1',
		$FlexLayout1$$FlexLayout1$$FlexLayout_mtb$$FlexLayout1$$View1_,
		pageInstance
	);
}
$FlexLayout1$$FlexLayout1$$FlexLayout_mtb$$FlexLayout1.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: { flexGrow: null, alignItems: 'STRETCH' },
		height: 64
	}
};
const $FlexLayout1$$FlexLayout1$$FlexLayout_mtb$$FlexLayout1_ = FlexLayout(
	$FlexLayout1$$FlexLayout1$$FlexLayout_mtb$$FlexLayout1
);
function $FlexLayout1$$FlexLayout1$$FlexLayout_mtb$$FlexLayout1$$MtbBirthDate(
	_super,
	pageInstance
) {
	_super(this);

	pageInstance.mtbBirthDate = this;
}
$FlexLayout1$$FlexLayout1$$FlexLayout_mtb$$FlexLayout1$$MtbBirthDate.$$styleContext = {
	classNames: '.materialTextBox-wrapper',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: { flexProps: { positionType: 'RELATIVE' }, left: 0, top: 0 }
};
const $FlexLayout1$$FlexLayout1$$FlexLayout_mtb$$FlexLayout1$$MtbBirthDate_ = Materialtextbox(
	$FlexLayout1$$FlexLayout1$$FlexLayout_mtb$$FlexLayout1$$MtbBirthDate
);

function $FlexLayout1$$FlexLayout1$$FlexLayout_mtb$$FlexLayout1$$View1(
	_super,
	pageInstance
) {
	_super(this);

	pageInstance.view1 = this;
}
$FlexLayout1$$FlexLayout1$$FlexLayout_mtb$$FlexLayout1$$View1.$$styleContext = {
	classNames: '.sf-view',
	defaultClassNames: '.default_common .default_view',
	userProps: {
		backgroundColor: 'rgba( 255, 255, 255, 0 )',
		flexProps: { positionType: 'ABSOLUTE' },
		height: 48,
		left: 0,
		top: 0,
		width: 1000
	}
};
const $FlexLayout1$$FlexLayout1$$FlexLayout_mtb$$FlexLayout1$$View1_ = View(
	$FlexLayout1$$FlexLayout1$$FlexLayout_mtb$$FlexLayout1$$View1
);

function $FlexLayout1$$FlexLayout2(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'btnContinue',
		$FlexLayout1$$FlexLayout2$$BtnContinue_,
		pageInstance
	);
}
$FlexLayout1$$FlexLayout2.$$styleContext = {
	classNames: '.sf-flexLayout .sf-flexLayout2',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {}
};
const $FlexLayout1$$FlexLayout2_ = FlexLayout($FlexLayout1$$FlexLayout2);
function $FlexLayout1$$FlexLayout2$$BtnContinue(_super, pageInstance) {
	_super(this, { text: 'Continue' });

	pageInstance.btnContinue = this;
}
$FlexLayout1$$FlexLayout2$$BtnContinue.$$styleContext = {
	classNames: '.sf-button',
	defaultClassNames: '.default_common .default_button',
	userProps: { left: 0, top: 0 }
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
	this.headerBar.title = ' ';
}

module.exports = $PgRegisterPersonalDetails_11_;