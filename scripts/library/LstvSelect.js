//------------------------------------------------------------------------------
//
//     This code was auto generated.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
//
//------------------------------------------------------------------------------

const extend = require('js-base/core/extend');
const ListViewItem = extend(require('sf-core/ui/listviewitem'));
const FlexLayout = extend(require('sf-core/ui/flexlayout'));
const ImageView = extend(require('sf-core/ui/imageview'));
const TextView = extend(require('sf-core/ui/textview'));

function addChild(childName, ChildClass, componentInstance) {
	this.children = this.children || {};
	this.children[childName] = new ChildClass(componentInstance);
	if (this.layout) this.layout.addChild(this.children[childName]);
	else this.addChild(this.children[childName]);
}

// Constructor
function LstvSelect(_super, props) {
	// Initalizes super class for this component scope

	_super(this, props);
	addChild.call(this, 'flexLayout1_1', $LstvSelect$$FlexLayout1_1_, this);
	addChild.call(this, 'tvTitle', $LstvSelect$$TvTitle_, this);
	addChild.call(this, 'tvsign', $LstvSelect$$Tvsign_, this);
}
LstvSelect.$$styleContext = {
	classNames: '.sf-listViewItem',
	defaultClassNames: '.default_common .default_listViewItem',
	userProps: {
		borderColor: 'rgba( 242, 242, 242, 1 )',
		borderWidth: 1,
		flexProps: { flexDirection: 'ROW' },
		height: null,
		width: null
	}
};
const LstvSelect_ = ListViewItem(LstvSelect);

function $LstvSelect$$FlexLayout1_1(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'imgIcon',
		$LstvSelect$$FlexLayout1_1$$ImgIcon_,
		pageInstance
	);
	pageInstance.flexLayout1_1 = this;
}
$LstvSelect$$FlexLayout1_1.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		borderColor: 'rgba( 144, 19, 254, 1 )',
		borderRadius: 30,
		flexProps: {
			alignSelf: 'CENTER',
			alignItems: 'STRETCH',
			justifyContent: 'CENTER',
			flexGrow: null
		},
		height: 60,
		marginLeft: 15,
		width: 60
	}
};
const $LstvSelect$$FlexLayout1_1_ = FlexLayout($LstvSelect$$FlexLayout1_1);
function $LstvSelect$$FlexLayout1_1$$ImgIcon(_super, pageInstance) {
	_super(this);

	pageInstance.imgIcon = this;
}
$LstvSelect$$FlexLayout1_1$$ImgIcon.$$styleContext = {
	classNames: '.sf-imageView',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {
		borderColor: 'rgba( 248, 231, 28, 1 )',
		borderRadius: 30,
		flexProps: { alignSelf: 'STRETCH', flexGrow: 1 },
		height: 60,
		image: 'app_icon.png',
		imageFillType: 'ASPECTFILL',
		width: 60
	}
};
const $LstvSelect$$FlexLayout1_1$$ImgIcon_ = ImageView(
	$LstvSelect$$FlexLayout1_1$$ImgIcon
);

function $LstvSelect$$TvTitle(_super, pageInstance) {
	_super(this, { text: '\n' });

	pageInstance.tvTitle = this;
}
$LstvSelect$$TvTitle.$$styleContext = {
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
		marginLeft: 9,
		textColor: 'rgba( 0, 0, 0, 1 )',
		width: null
	}
};
const $LstvSelect$$TvTitle_ = TextView($LstvSelect$$TvTitle);

function $LstvSelect$$Tvsign(_super, pageInstance) {
	_super(this, { text: '\n' });

	pageInstance.tvsign = this;
}
$LstvSelect$$Tvsign.$$styleContext = {
	classNames: '.sf-textView',
	defaultClassNames: '.default_common .default_textView',
	userProps: {
		flexProps: { flexGrow: 1, alignSelf: 'CENTER' },
		height: null,
		textAlignment: 'MIDRIGHT',
		textColor: 'rgba( 140, 140, 140, 1 )',
		width: null
	}
};
const $LstvSelect$$Tvsign_ = TextView($LstvSelect$$Tvsign);

module.exports = LstvSelect_;
