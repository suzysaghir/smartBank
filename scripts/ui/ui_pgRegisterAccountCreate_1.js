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
function $PgRegisterAccountCreate_1(_super, props) {
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
	pageContextPatch(this, 'pgRegisterAccountCreate_1');
}
$PgRegisterAccountCreate_1.$$styleContext = {
	classNames: '.sf-page .page',
	defaultClassNames: ' .default_page',
	userProps: {
		flexProps: { justifyContent: 'SPACE_BETWEEN' },
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
		userProps: { backgroundImage: '  ', visible: false }
	}
};
const $PgRegisterAccountCreate_1_ = Page($PgRegisterAccountCreate_1);
function $FlexLayout1(_super, pageInstance) {
	_super(this);

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
		'imgAccountCreate',
		$FlexLayout1$$FlexLayout1$$ImgAccountCreate_,
		pageInstance
	);
	addChild.call(
		this,
		'tvAccountCreate',
		$FlexLayout1$$FlexLayout1$$TvAccountCreate_,
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

function $FlexLayout1$$FlexLayout1$$ImgAccountCreate(_super, pageInstance) {
	_super(this);
}
$FlexLayout1$$FlexLayout1$$ImgAccountCreate.$$styleContext = {
	classNames: '.sf-imageView',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {
		flexProps: { alignSelf: 'CENTER' },
		height: 240,
		image: 'icon_account_register.png',
		imageFillType: 'ASPECTFIT',
		width: 200
	}
};
const $FlexLayout1$$FlexLayout1$$ImgAccountCreate_ = ImageView(
	$FlexLayout1$$FlexLayout1$$ImgAccountCreate
);

function $FlexLayout1$$FlexLayout1$$TvAccountCreate(_super, pageInstance) {
	_super(this);

	pageInstance.tvAccountCreate = this;
	var html =
		'<span style="font-family: SFProText-Regular; font-size: 16px; white-space: pre-wrap; background-color: rgb(255, 255, 255);">  Lorem ipsum dolor sit amet, consectetur \n  adipiscing elit. <span style="color: rgb(0, 161, 241); font-size: 17.3913px; font-family: SFProText-Regular; background-color: rgb(255, 255, 255);">Donec quis semper justo. In  \n  ultrices metus nec sodales consectetur.</span> \n  Aliquam erat volutpat. <span style="font-size: 16px; font-family: SFProText-Regular; background-color: rgb(255, 255, 255); text-decoration-color: rgb(0, 0, 0); text-decoration-line: underline;">Suspendisse</span> potenti.</span><br>';
	var attributedStrings = createAttributedStrings(html);
	this.attributedText = attributedStrings.map(
		s => new AttributedString(propFactory.default(s))
	);
}
$FlexLayout1$$FlexLayout1$$TvAccountCreate.$$styleContext = {
	classNames: '.sf-textView',
	defaultClassNames: '.default_common .default_textView',
	userProps: { marginTop: 10 }
};
const $FlexLayout1$$FlexLayout1$$TvAccountCreate_ = TextView(
	$FlexLayout1$$FlexLayout1$$TvAccountCreate
);

function $FlexLayout1$$FlexLayout2(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'btnDone',
		$FlexLayout1$$FlexLayout2$$BtnDone_,
		pageInstance
	);
}
$FlexLayout1$$FlexLayout2.$$styleContext = {
	classNames: '.sf-flexLayout .sf-flexLayout2',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: { flexProps: { flexGrow: 1 } }
};
const $FlexLayout1$$FlexLayout2_ = FlexLayout($FlexLayout1$$FlexLayout2);
function $FlexLayout1$$FlexLayout2$$BtnDone(_super, pageInstance) {
	_super(this, { text: 'Done' });

	pageInstance.btnDone = this;
}
$FlexLayout1$$FlexLayout2$$BtnDone.$$styleContext = {
	classNames: '.sf-button',
	defaultClassNames: '.default_common .default_button',
	userProps: {}
};
const $FlexLayout1$$FlexLayout2$$BtnDone_ = Button(
	$FlexLayout1$$FlexLayout2$$BtnDone
);

/**
 * @event onLoad
 * This event is called once when page is created. You can create views and add them to page in this callback.
 */
function onLoad() {
	// HeaderBar props
}

module.exports = $PgRegisterAccountCreate_1_;
