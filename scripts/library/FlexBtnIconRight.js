//------------------------------------------------------------------------------
//
//     This code was auto generated.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
//
//------------------------------------------------------------------------------

const extend = require('js-base/core/extend');
const FlexLayout = extend(require('sf-core/ui/flexlayout'));
const Label = extend(require('sf-core/ui/label'));
const ImageView = extend(require('sf-core/ui/imageview'));

function addChild(childName, ChildClass, componentInstance) {
	this.children = this.children || {};
	this.children[childName] = new ChildClass(componentInstance);
	if (this.layout) this.layout.addChild(this.children[childName]);
	else this.addChild(this.children[childName]);
}

// Constructor
function FlexBtnIconRight(_super, props) {
	// Initalizes super class for this component scope

	_super(this, props);
	addChild.call(this, 'label1', $FlexBtnIconRight$$Label1_, this);
	addChild.call(this, 'imgIcon', $FlexBtnIconRight$$ImgIcon_, this);
}
FlexBtnIconRight.$$styleContext = {
	classNames: '.sf-flexLayout .sf-flx-btn-icon',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: {
			justifyContent: 'CENTER',
			alignItems: 'STRETCH',
			alignContent: 'STRETCH'
		},
		paddingLeft: 10,
		paddingRight: 10
	}
};
const FlexBtnIconRight_ = FlexLayout(FlexBtnIconRight);

function $FlexBtnIconRight$$Label1(_super, pageInstance) {
	_super(this, { text: '  label1' });

	pageInstance.label1 = this;
}
$FlexBtnIconRight$$Label1.$$styleContext = {
	classNames: '.sf-label',
	defaultClassNames: '.default_common .default_label',
	userProps: {
		marginLeft: 10,
		marginRight: 10,
		textColor: 'rgba( 87, 202, 179, 1 )'
	}
};
const $FlexBtnIconRight$$Label1_ = Label($FlexBtnIconRight$$Label1);

function $FlexBtnIconRight$$ImgIcon(_super, pageInstance) {
	_super(this);

	pageInstance.imgIcon = this;
}
$FlexBtnIconRight$$ImgIcon.$$styleContext = {
	classNames: '.sf-imageView',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {
		flexProps: { alignSelf: 'CENTER' },
		image: 'payment_icon_add_money.png'
	}
};
const $FlexBtnIconRight$$ImgIcon_ = ImageView($FlexBtnIconRight$$ImgIcon);

module.exports = FlexBtnIconRight_;
