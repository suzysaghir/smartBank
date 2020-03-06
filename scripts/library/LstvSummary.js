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
function LstvSummary(_super, props) {
	// Initalizes super class for this component scope

	_super(this, props);
	addChild.call(this, 'flexLayout1', $LstvSummary$$FlexLayout1_, this);
	addChild.call(this, 'tvTitle', $LstvSummary$$TvTitle_, this);
	addChild.call(this, 'tvsign', $LstvSummary$$Tvsign_, this);
}
LstvSummary.$$styleContext = {
	classNames: '.sf-listViewItem',
	defaultClassNames: '.default_common .default_listViewItem',
	userProps: {
		borderColor: 'rgba( 242, 242, 242, 1 )',
		borderWidth: 1,
		flexProps: { flexDirection: 'ROW' },
		height: null,
		paddingRight: 20,
		width: null
	}
};
const LstvSummary_ = ListViewItem(LstvSummary);

function $LstvSummary$$FlexLayout1(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'imgIcon',
		$LstvSummary$$FlexLayout1$$ImgIcon_,
		pageInstance
	);
	pageInstance.flexLayout1 = this;
}
$LstvSummary$$FlexLayout1.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		borderColor: 'rgba( 80, 227, 194, 1 )',
		borderRadius: 30,
		flexProps: {
			alignSelf: 'CENTER',
			alignItems: 'STRETCH',
			justifyContent: 'CENTER',
			flexGrow: null,
			alignContent: 'STRETCH'
		},
		height: 60,
		marginLeft: 15,
		width: 60
	}
};
const $LstvSummary$$FlexLayout1_ = FlexLayout($LstvSummary$$FlexLayout1);
function $LstvSummary$$FlexLayout1$$ImgIcon(_super, pageInstance) {
	_super(this);

	pageInstance.imgIcon = this;
}
$LstvSummary$$FlexLayout1$$ImgIcon.$$styleContext = {
	classNames: '.sf-imageView',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {
		borderColor: 'rgba( 208, 2, 27, 1 )',
		flexProps: { alignSelf: 'STRETCH', flexGrow: 1 },
		height: null,
		image: 'app_icon.png',
		imageFillType: 'ASPECTFIT',
		width: null
	}
};
const $LstvSummary$$FlexLayout1$$ImgIcon_ = ImageView(
	$LstvSummary$$FlexLayout1$$ImgIcon
);

function $LstvSummary$$TvTitle(_super, pageInstance) {
	_super(this, { text: '\n' });

	pageInstance.tvTitle = this;
}
$LstvSummary$$TvTitle.$$styleContext = {
	classNames: '.sf-textView',
	defaultClassNames: '.default_common .default_textView',
	userProps: {
		flexProps: { flexGrow: 1 },
		font: {
			family: 'SFProText',
			style: 'Medium',
			bold: false,
			italic: false,
			size: 18
		},
		ios: { shadowColor: 'rgba( 56, 56, 56, 1 )' },
		marginLeft: 5,
		textAlignment: 'MIDLEFT',
		textColor: 'rgba( 0, 0, 0, 1 )',
		width: null
	}
};
const $LstvSummary$$TvTitle_ = TextView($LstvSummary$$TvTitle);

function $LstvSummary$$Tvsign(_super, pageInstance) {
	_super(this, { text: '\n' });

	pageInstance.tvsign = this;
}
$LstvSummary$$Tvsign.$$styleContext = {
	classNames: '.sf-textView',
	defaultClassNames: '.default_common .default_textView',
	userProps: {
		flexProps: { alignSelf: 'CENTER', flexGrow: 1 },
		height: null,
		textAlignment: 'MIDRIGHT',
		textColor: 'rgba( 140, 140, 140, 1 )',
		width: null
	}
};
const $LstvSummary$$Tvsign_ = TextView($LstvSummary$$Tvsign);

module.exports = LstvSummary_;
