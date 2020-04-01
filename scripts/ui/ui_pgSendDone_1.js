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
const TextView = extend(require('sf-core/ui/textview'));
const ImageView = extend(require('sf-core/ui/imageview'));
const Label = extend(require('sf-core/ui/label'));
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
function $PgSendDone_1(_super, props) {
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
	pageContextPatch(this, 'pgSendDone_1');
}
$PgSendDone_1.$$styleContext = {
	classNames: '.sf-page .page',
	defaultClassNames: ' .default_page',
	userProps: {
		flexProps: { justifyContent: 'SPACE_BETWEEN' },
		paddingBottom: null,
		paddingLeft: null,
		paddingRight: null,
		paddingTop: 20
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
const $PgSendDone_1_ = Page($PgSendDone_1);
function $FlexLayout1(_super, pageInstance) {
	_super(this);

	addChild.call(this, 'tvTitle', $FlexLayout1$$TvTitle_, pageInstance);
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
		},
		marginTop: 10
	}
};
const $FlexLayout1_ = FlexLayout($FlexLayout1);
function $FlexLayout1$$TvTitle(_super, pageInstance) {
	_super(this);

	pageInstance.tvTitle = this;
	var html =
		'<span style="font-family: SFProText-Regular; font-size: 16px; white-space: pre-wrap; background-color: rgb(255, 255, 255);">  Lorem ipsum dolor sit amet, consectetur \n  adipiscing elit. <span style="color: rgb(0, 161, 241); font-size: 17.3913px; font-family: SFProText-Regular; background-color: rgb(255, 255, 255);">Donec quis semper justo. In  \n  ultrices metus nec sodales consectetur.</span> \n  Aliquam erat volutpat. <span style="font-size: 16px; font-family: SFProText-Regular; background-color: rgb(255, 255, 255); text-decoration-color: rgb(0, 0, 0); text-decoration-line: underline;">Suspendisse</span> potenti.</span><br>';
	var attributedStrings = createAttributedStrings(html);
	this.attributedText = attributedStrings.map(
		s => new AttributedString(propFactory.default(s))
	);
}
$FlexLayout1$$TvTitle.$$styleContext = {
	classNames: '.sf-textView',
	defaultClassNames: '.default_common .default_textView',
	userProps: { left: 0, top: 0 }
};
const $FlexLayout1$$TvTitle_ = TextView($FlexLayout1$$TvTitle);

function $FlexLayout1$$FlexLayout1(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'img_background',
		$FlexLayout1$$FlexLayout1$$Img_background_,
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
		'flexLayout1_1',
		$FlexLayout1$$FlexLayout1$$FlexLayout1_1_,
		pageInstance
	);
	addChild.call(
		this,
		'tvSend',
		$FlexLayout1$$FlexLayout1$$TvSend_,
		pageInstance
	);
}
$FlexLayout1$$FlexLayout1.$$styleContext = {
	classNames: '.sf-flexLayout .sf-flexLayout1',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: {
			flexGrow: 5,
			justifyContent: 'CENTER',
			alignItems: 'CENTER',
			alignContent: 'CENTER'
		},
		marginLeft: 0,
		marginRight: 0,
		marginTop: 0
	}
};
const $FlexLayout1$$FlexLayout1_ = FlexLayout($FlexLayout1$$FlexLayout1);
function $FlexLayout1$$FlexLayout1$$Img_background(_super, pageInstance) {
	_super(this);

	pageInstance.img_background = this;
}
$FlexLayout1$$FlexLayout1$$Img_background.$$styleContext = {
	classNames: '.sf-imageView',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {
		bottom: 0,
		flexProps: { positionType: 'ABSOLUTE', alignSelf: 'STRETCH' },
		height: null,
		image: 'done_background.png',
		imageFillType: 'STRETCH',
		left: 0,
		right: 0,
		top: 0,
		width: null
	}
};
const $FlexLayout1$$FlexLayout1$$Img_background_ = ImageView(
	$FlexLayout1$$FlexLayout1$$Img_background
);

function $FlexLayout1$$FlexLayout1$$FlexLayout1(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'imgProfile2',
		$FlexLayout1$$FlexLayout1$$FlexLayout1$$ImgProfile2_,
		pageInstance
	);
	addChild.call(
		this,
		'imgIcon',
		$FlexLayout1$$FlexLayout1$$FlexLayout1$$ImgIcon_,
		pageInstance
	);
}
$FlexLayout1$$FlexLayout1$$FlexLayout1.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: {
			alignSelf: 'CENTER',
			flexGrow: null,
			justifyContent: 'CENTER'
		},
		height: 150,
		left: 0,
		top: 0,
		width: 150
	}
};
const $FlexLayout1$$FlexLayout1$$FlexLayout1_ = FlexLayout(
	$FlexLayout1$$FlexLayout1$$FlexLayout1
);
function $FlexLayout1$$FlexLayout1$$FlexLayout1$$ImgProfile2(
	_super,
	pageInstance
) {
	_super(this);

	pageInstance.imgProfile2 = this;
}
$FlexLayout1$$FlexLayout1$$FlexLayout1$$ImgProfile2.$$styleContext = {
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
const $FlexLayout1$$FlexLayout1$$FlexLayout1$$ImgProfile2_ = ImageView(
	$FlexLayout1$$FlexLayout1$$FlexLayout1$$ImgProfile2
);

function $FlexLayout1$$FlexLayout1$$FlexLayout1$$ImgIcon(_super, pageInstance) {
	_super(this);

	pageInstance.imgIcon = this;
}
$FlexLayout1$$FlexLayout1$$FlexLayout1$$ImgIcon.$$styleContext = {
	classNames: '.sf-imageView .sf-ImageView-icon-tick',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {
		flexProps: { positionType: 'ABSOLUTE', alignSelf: 'CENTER' },
		height: 70,
		image: 'send_done_tick.png',
		imageFillType: 'NORMAL',
		marginTop: 1,
		width: 70
	}
};
const $FlexLayout1$$FlexLayout1$$FlexLayout1$$ImgIcon_ = ImageView(
	$FlexLayout1$$FlexLayout1$$FlexLayout1$$ImgIcon
);

function $FlexLayout1$$FlexLayout1$$FlexLayout1_1(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'myLabel',
		$FlexLayout1$$FlexLayout1$$FlexLayout1_1$$MyLabel_,
		pageInstance
	);
	addChild.call(
		this,
		'tvAmount',
		$FlexLayout1$$FlexLayout1$$FlexLayout1_1$$TvAmount_,
		pageInstance
	);
}
$FlexLayout1$$FlexLayout1$$FlexLayout1_1.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: {
			flexDirection: 'ROW',
			justifyContent: 'CENTER',
			alignSelf: 'STRETCH',
			flexGrow: null
		},
		left: 0,
		top: 0
	}
};
const $FlexLayout1$$FlexLayout1$$FlexLayout1_1_ = FlexLayout(
	$FlexLayout1$$FlexLayout1$$FlexLayout1_1
);
function $FlexLayout1$$FlexLayout1$$FlexLayout1_1$$MyLabel(
	_super,
	pageInstance
) {
	_super(this, { text: '$' });

	pageInstance.myLabel = this;
}
$FlexLayout1$$FlexLayout1$$FlexLayout1_1$$MyLabel.$$styleContext = {
	classNames: '.sf-label',
	defaultClassNames: '.default_common .default_label',
	userProps: {
		flexProps: { alignSelf: 'CENTER' },
		font: {
			size: 40,
			bold: false,
			italic: false,
			family: 'SFProText',
			style: 'Medium'
		},
		height: null,
		marginLeft: 16,
		textAlignment: 'MIDRIGHT',
		textColor: 'rgba( 255, 255, 255, 1 )',
		width: null
	}
};
const $FlexLayout1$$FlexLayout1$$FlexLayout1_1$$MyLabel_ = Label(
	$FlexLayout1$$FlexLayout1$$FlexLayout1_1$$MyLabel
);

function $FlexLayout1$$FlexLayout1$$FlexLayout1_1$$TvAmount(
	_super,
	pageInstance
) {
	_super(this, { text: '\n' });

	pageInstance.tvAmount = this;
}
$FlexLayout1$$FlexLayout1$$FlexLayout1_1$$TvAmount.$$styleContext = {
	classNames: '.sf-textView',
	defaultClassNames: '.default_common .default_textView',
	userProps: {
		flexProps: { alignSelf: 'CENTER' },
		font: {
			bold: false,
			size: 40,
			style: 'Medium',
			family: 'SFProText',
			italic: false
		},
		height: null,
		left: 0,
		top: 0,
		width: null
	}
};
const $FlexLayout1$$FlexLayout1$$FlexLayout1_1$$TvAmount_ = TextView(
	$FlexLayout1$$FlexLayout1$$FlexLayout1_1$$TvAmount
);

function $FlexLayout1$$FlexLayout1$$TvSend(_super, pageInstance) {
	_super(this, { text: '\n' });

	pageInstance.tvSend = this;
}
$FlexLayout1$$FlexLayout1$$TvSend.$$styleContext = {
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
		left: 0,
		top: 0,
		width: null
	}
};
const $FlexLayout1$$FlexLayout1$$TvSend_ = TextView(
	$FlexLayout1$$FlexLayout1$$TvSend
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
	_super(this, { text: 'Done' });

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

module.exports = $PgSendDone_1_;
