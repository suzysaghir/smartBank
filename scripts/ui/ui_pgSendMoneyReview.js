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
const Label = extend(require('sf-core/ui/label'));
const TextBox = extend(require('sf-core/ui/textbox'));
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
function $PgSendMoneyReview(_super, props) {
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
	addChild.call(this, 'flexLayout2', $FlexLayout2_, this);
	pageContextPatch(this, 'pgSendMoneyReview');
}
$PgSendMoneyReview.$$styleContext = {
	classNames: '.sf-page .page',
	defaultClassNames: ' .default_page',
	userProps: {
		backgroundColor: 'rgba( 255, 255, 255, 1 )',
		flexProps: { flexWrap: 'NOWRAP' },
		paddingBottom: null,
		paddingLeft: null,
		paddingRight: null,
		paddingTop: null
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
const $PgSendMoneyReview_ = Page($PgSendMoneyReview);
function $FlexLayout1(_super, pageInstance) {
	_super(this);

	addChild.call(this, 'imgvProfile', $FlexLayout1$$ImgvProfile_, pageInstance);
	addChild.call(this, 'tvName', $FlexLayout1$$TvName_, pageInstance);
	addChild.call(this, 'imgIcon', $FlexLayout1$$ImgIcon_, pageInstance);
	addChild.call(this, 'flexLayout1', $FlexLayout1$$FlexLayout1_, pageInstance);
	pageInstance.flexLayout1 = this;
}
$FlexLayout1.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		backgroundColor: 'rgba( 211, 246, 255, 1 )',
		flexProps: {
			flexDirection: 'COLUMN',
			justifyContent: 'SPACE_AROUND',
			flexGrow: 1
		},
		height: null,
		marginBottom: null,
		marginTop: null,
		width: null
	}
};
const $FlexLayout1_ = FlexLayout($FlexLayout1);
function $FlexLayout1$$ImgvProfile(_super, pageInstance) {
	_super(this);

	pageInstance.imgvProfile = this;
}
$FlexLayout1$$ImgvProfile.$$styleContext = {
	classNames: '.sf-imageView',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {
		borderRadius: 50,
		flexProps: { alignSelf: 'CENTER' },
		height: 100,
		imageFillType: 'ASPECTFILL',
		left: 0,
		top: 0,
		width: 100
	}
};
const $FlexLayout1$$ImgvProfile_ = ImageView($FlexLayout1$$ImgvProfile);

function $FlexLayout1$$TvName(_super, pageInstance) {
	_super(this);

	pageInstance.tvName = this;
	var html =
		'<span style="font-family: SFProText-Regular; font-size: 16px; white-space: pre-wrap; background-color: rgb(255, 255, 255);">  Lorem ipsum dolor sit amet, consectetur \n  adipiscing elit. <span style="color: rgb(0, 161, 241); font-size: 17.3913px; font-family: SFProText-Regular; background-color: rgb(255, 255, 255);">Donec quis semper justo. In  \n  ultrices metus nec sodales consectetur.</span> \n  Aliquam erat volutpat. <span style="font-size: 16px; font-family: SFProText-Regular; background-color: rgb(255, 255, 255); text-decoration-color: rgb(0, 0, 0); text-decoration-line: underline;">Suspendisse</span> potenti.</span><br>';
	var attributedStrings = createAttributedStrings(html);
	this.attributedText = attributedStrings.map(
		s => new AttributedString(propFactory.default(s))
	);
}
$FlexLayout1$$TvName.$$styleContext = {
	classNames: '.sf-textView',
	defaultClassNames: '.default_common .default_textView',
	userProps: {
		flexProps: { alignSelf: 'CENTER' },
		textColor: 'rgba( 56, 56, 56, 1 )'
	}
};
const $FlexLayout1$$TvName_ = TextView($FlexLayout1$$TvName);

function $FlexLayout1$$ImgIcon(_super, pageInstance) {
	_super(this);
}
$FlexLayout1$$ImgIcon.$$styleContext = {
	classNames: '.sf-imageView',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {
		flexProps: { alignSelf: 'CENTER' },
		height: 10,
		image: 'send_money_review_arrow.png',
		imageFillType: 'ASPECTFILL',
		left: 0,
		top: 0,
		width: 20
	}
};
const $FlexLayout1$$ImgIcon_ = ImageView($FlexLayout1$$ImgIcon);

function $FlexLayout1$$FlexLayout1(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'myLabel',
		$FlexLayout1$$FlexLayout1$$MyLabel_,
		pageInstance
	);
	addChild.call(
		this,
		'tvAmount',
		$FlexLayout1$$FlexLayout1$$TvAmount_,
		pageInstance
	);
}
$FlexLayout1$$FlexLayout1.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: {
			flexDirection: 'ROW',
			justifyContent: 'CENTER',
			alignSelf: 'STRETCH',
			flexGrow: null
		}
	}
};
const $FlexLayout1$$FlexLayout1_ = FlexLayout($FlexLayout1$$FlexLayout1);
function $FlexLayout1$$FlexLayout1$$MyLabel(_super, pageInstance) {
	_super(this, { text: '$' });

	pageInstance.myLabel = this;
}
$FlexLayout1$$FlexLayout1$$MyLabel.$$styleContext = {
	classNames: '.sf-label',
	defaultClassNames: '.default_common .default_label',
	userProps: {
		flexProps: { alignSelf: 'CENTER' },
		font: {
			size: 40,
			bold: false,
			italic: false,
			family: 'SFProText',
			style: 'Regular'
		},
		height: null,
		marginLeft: 16,
		textAlignment: 'MIDRIGHT',
		textColor: 'rgba( 56, 56, 56, 1 )',
		width: null
	}
};
const $FlexLayout1$$FlexLayout1$$MyLabel_ = Label(
	$FlexLayout1$$FlexLayout1$$MyLabel
);

function $FlexLayout1$$FlexLayout1$$TvAmount(_super, pageInstance) {
	_super(this);

	pageInstance.tvAmount = this;
}
$FlexLayout1$$FlexLayout1$$TvAmount.$$styleContext = {
	classNames: '.sf-textBox',
	defaultClassNames: '.default_common .default_textBox',
	userProps: {
		borderRadius: null,
		borderWidth: null,
		flexProps: { alignSelf: 'CENTER' },
		font: {
			size: 40,
			bold: false,
			italic: false,
			family: 'SFProText',
			style: 'Regular'
		},
		height: null,
		textAlignment: 'MIDCENTER',
		visible: true,
		width: null
	}
};
const $FlexLayout1$$FlexLayout1$$TvAmount_ = TextBox(
	$FlexLayout1$$FlexLayout1$$TvAmount
);

function $FlexLayout2(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'tvSchedulePy',
		$FlexLayout2$$TvSchedulePy_,
		pageInstance
	);
	addChild.call(
		this,
		'btnSendMoney',
		$FlexLayout2$$BtnSendMoney_,
		pageInstance
	);
}
$FlexLayout2.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: { flexGrow: 1, justifyContent: 'FLEX_END' },
		marginBottom: null,
		marginTop: null
	}
};
const $FlexLayout2_ = FlexLayout($FlexLayout2);
function $FlexLayout2$$TvSchedulePy(_super, pageInstance) {
	_super(this, { text: '\n' });

	pageInstance.tvSchedulePy = this;
}
$FlexLayout2$$TvSchedulePy.$$styleContext = {
	classNames: '.sf-textView',
	defaultClassNames: '.default_common .default_textView',
	userProps: {
		font: {
			family: 'SFProText',
			style: 'Regular',
			bold: false,
			italic: false,
			size: null
		},
		height: null,
		left: 0,
		textAlignment: 'MIDCENTER',
		textColor: 'rgba( 87, 217, 246, 1 )',
		top: 0,
		width: null
	}
};
const $FlexLayout2$$TvSchedulePy_ = TextView($FlexLayout2$$TvSchedulePy);

function $FlexLayout2$$BtnSendMoney(_super, pageInstance) {
	_super(this, { text: 'Send Money' });

	pageInstance.btnSendMoney = this;
}
$FlexLayout2$$BtnSendMoney.$$styleContext = {
	classNames: '.sf-button',
	defaultClassNames: '.default_common .default_button',
	userProps: {
		left: 0,
		marginLeft: 16,
		marginRight: 16,
		textColor: 'rgba( 255, 255, 255, 1 )',
		top: 0
	}
};
const $FlexLayout2$$BtnSendMoney_ = Button($FlexLayout2$$BtnSendMoney);

/**
 * @event onLoad
 * This event is called once when page is created. You can create views and add them to page in this callback.
 */
function onLoad() {
	// HeaderBar props
	this.headerBar.borderVisibility = true;
	this.headerBar.title = 'Review Payment';
}

module.exports = $PgSendMoneyReview_;
