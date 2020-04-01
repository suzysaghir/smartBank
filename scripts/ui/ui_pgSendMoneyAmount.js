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
const Label = extend(require('sf-core/ui/label'));
const TextBox = extend(require('sf-core/ui/textbox'));
const Button = extend(require('sf-core/ui/button'));

function addChild(childName, ChildClass, pageInstance) {
	this.children = this.children || {};
	this.children[childName] = new ChildClass(pageInstance);
	if (this.layout) this.layout.addChild(this.children[childName]);
	else this.addChild(this.children[childName]);
}
// Constructor
function $PgSendMoneyAmount(_super, props) {
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
	pageContextPatch(this, 'pgSendMoneyAmount');
}
$PgSendMoneyAmount.$$styleContext = {
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
const $PgSendMoneyAmount_ = Page($PgSendMoneyAmount);
function $FlexLayout1(_super, pageInstance) {
	_super(this);

	addChild.call(this, 'flexLayout1', $FlexLayout1$$FlexLayout1_, pageInstance);
	addChild.call(this, 'flexLayout2', $FlexLayout1$$FlexLayout2_, pageInstance);
	addChild.call(this, 'flxLine', $FlexLayout1$$FlxLine_, pageInstance);
}
$FlexLayout1.$$styleContext = {
	classNames: '.sf-flexLayout .sf-flexLayout1',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: { justifyContent: 'FLEX_START' },
		marginTop: null,
		paddingLeft: null,
		paddingRight: null
	}
};
const $FlexLayout1_ = FlexLayout($FlexLayout1);
function $FlexLayout1$$FlexLayout1(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'flexLayout1',
		$FlexLayout1$$FlexLayout1$$FlexLayout1_,
		pageInstance
	);
	addChild.call(
		this,
		'myLabel',
		$FlexLayout1$$FlexLayout1$$MyLabel_,
		pageInstance
	);
	pageInstance.flexLayout1 = this;
}
$FlexLayout1$$FlexLayout1.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		backgroundColor: 'rgba( 211, 246, 255, 1 )',
		flexProps: {
			flexDirection: 'ROW',
			justifyContent: 'FLEX_START',
			flexGrow: null
		},
		height: 100,
		left: 0,
		marginTop: null,
		top: 0,
		width: null
	}
};
const $FlexLayout1$$FlexLayout1_ = FlexLayout($FlexLayout1$$FlexLayout1);
function $FlexLayout1$$FlexLayout1$$FlexLayout1(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'iconImage',
		$FlexLayout1$$FlexLayout1$$FlexLayout1$$IconImage_,
		pageInstance
	);
}
$FlexLayout1$$FlexLayout1$$FlexLayout1.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		borderRadius: 30,
		flexProps: {
			flexGrow: null,
			alignSelf: 'CENTER',
			justifyContent: 'CENTER'
		},
		height: 60,
		marginLeft: 16,
		width: 60
	}
};
const $FlexLayout1$$FlexLayout1$$FlexLayout1_ = FlexLayout(
	$FlexLayout1$$FlexLayout1$$FlexLayout1
);
function $FlexLayout1$$FlexLayout1$$FlexLayout1$$IconImage(
	_super,
	pageInstance
) {
	_super(this);

	pageInstance.iconImage = this;
}
$FlexLayout1$$FlexLayout1$$FlexLayout1$$IconImage.$$styleContext = {
	classNames: '.sf-imageView',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {
		borderRadius: 30,
		flexProps: { flexGrow: 1, alignSelf: 'FLEX_END' },
		height: 60,
		imageFillType: 'ASPECTFILL',
		left: 0,
		marginLeft: 16,
		top: 0,
		width: 60
	}
};
const $FlexLayout1$$FlexLayout1$$FlexLayout1$$IconImage_ = ImageView(
	$FlexLayout1$$FlexLayout1$$FlexLayout1$$IconImage
);

function $FlexLayout1$$FlexLayout1$$MyLabel(_super, pageInstance) {
	_super(this, { text: '  label1' });

	pageInstance.myLabel = this;
}
$FlexLayout1$$FlexLayout1$$MyLabel.$$styleContext = {
	classNames: '.sf-label',
	defaultClassNames: '.default_common .default_label',
	userProps: {
		flexProps: { alignSelf: 'CENTER', flexGrow: 1 },
		height: null,
		marginLeft: 16,
		textAlignment: 'MIDLEFT',
		textColor: 'rgba( 56, 56, 56, 1 )',
		width: null
	}
};
const $FlexLayout1$$FlexLayout1$$MyLabel_ = Label(
	$FlexLayout1$$FlexLayout1$$MyLabel
);

function $FlexLayout1$$FlexLayout2(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'lblUsd',
		$FlexLayout1$$FlexLayout2$$LblUsd_,
		pageInstance
	);
	addChild.call(
		this,
		'label1',
		$FlexLayout1$$FlexLayout2$$Label1_,
		pageInstance
	);
	addChild.call(
		this,
		'tbAmount',
		$FlexLayout1$$FlexLayout2$$TbAmount_,
		pageInstance
	);
}
$FlexLayout1$$FlexLayout2.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: {
			flexDirection: 'ROW',
			justifyContent: 'SPACE_BETWEEN',
			flexGrow: null,
			alignSelf: 'STRETCH'
		},
		height: null,
		left: 0,
		marginTop: 10,
		top: 0,
		width: null
	}
};
const $FlexLayout1$$FlexLayout2_ = FlexLayout($FlexLayout1$$FlexLayout2);
function $FlexLayout1$$FlexLayout2$$LblUsd(_super, pageInstance) {
	_super(this, { text: 'USD' });

	pageInstance.lblUsd = this;
}
$FlexLayout1$$FlexLayout2$$LblUsd.$$styleContext = {
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
		left: 20,
		marginLeft: 16,
		textAlignment: 'MIDRIGHT',
		textColor: 'rgba( 86, 219, 245, 1 )'
	}
};
const $FlexLayout1$$FlexLayout2$$LblUsd_ = Label(
	$FlexLayout1$$FlexLayout2$$LblUsd
);

function $FlexLayout1$$FlexLayout2$$Label1(_super, pageInstance) {
	_super(this, { text: '$' });
}
$FlexLayout1$$FlexLayout2$$Label1.$$styleContext = {
	classNames: '.sf-label',
	defaultClassNames: '.default_common .default_label',
	userProps: {
		flexProps: { flexGrow: 1, alignSelf: 'CENTER' },
		font: {
			size: 40,
			bold: false,
			italic: false,
			family: 'SFProText',
			style: 'Regular'
		},
		textAlignment: 'MIDRIGHT',
		textColor: 'rgba( 56, 56, 56, 1 )'
	}
};
const $FlexLayout1$$FlexLayout2$$Label1_ = Label(
	$FlexLayout1$$FlexLayout2$$Label1
);

function $FlexLayout1$$FlexLayout2$$TbAmount(_super, pageInstance) {
	_super(this, { hint: '0' });

	pageInstance.tbAmount = this;
}
$FlexLayout1$$FlexLayout2$$TbAmount.$$styleContext = {
	classNames: '.sf-textBox',
	defaultClassNames: '.default_common .default_textBox',
	userProps: {
		borderColor: 'rgba( 144, 19, 254, 1 )',
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
		marginRight: 30,
		textAlignment: 'MIDCENTER',
		visible: true,
		width: 100
	}
};
const $FlexLayout1$$FlexLayout2$$TbAmount_ = TextBox(
	$FlexLayout1$$FlexLayout2$$TbAmount
);

function $FlexLayout1$$FlxLine(_super, pageInstance) {
	_super(this);

	pageInstance.flxLine = this;
}
$FlexLayout1$$FlxLine.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		borderColor: 'rgba( 238, 238, 238, 1 )',
		borderWidth: 1,
		flexProps: { flexGrow: null },
		left: 0,
		marginLeft: 30,
		marginRight: 30,
		top: 0
	}
};
const $FlexLayout1$$FlxLine_ = FlexLayout($FlexLayout1$$FlxLine);

function $FlexLayout2(_super, pageInstance) {
	_super(this);

	addChild.call(this, 'btnCont', $FlexLayout2$$BtnCont_, pageInstance);
}
$FlexLayout2.$$styleContext = {
	classNames: '.sf-flexLayout .sf-flexLayout2',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: { paddingLeft: null, paddingRight: null }
};
const $FlexLayout2_ = FlexLayout($FlexLayout2);
function $FlexLayout2$$BtnCont(_super, pageInstance) {
	_super(this, { text: 'Continue' });

	pageInstance.btnCont = this;
}
$FlexLayout2$$BtnCont.$$styleContext = {
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
const $FlexLayout2$$BtnCont_ = Button($FlexLayout2$$BtnCont);

/**
 * @event onLoad
 * This event is called once when page is created. You can create views and add them to page in this callback.
 */
function onLoad() {
	// HeaderBar props
	this.headerBar.borderVisibility = true;
	this.headerBar.title = 'Amount ';
}

module.exports = $PgSendMoneyAmount_;
