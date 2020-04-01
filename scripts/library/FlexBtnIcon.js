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
const ImageView = extend(require('sf-core/ui/imageview'));
const Label = extend(require('sf-core/ui/label'));

function addChild(childName, ChildClass, componentInstance) {
	this.children = this.children || {};
	this.children[childName] = new ChildClass(componentInstance);
	if (this.layout) this.layout.addChild(this.children[childName]);
	else this.addChild(this.children[childName]);
}

// Constructor
function FlexBtnIcon(_super, props) {
	// Initalizes super class for this component scope

	_super(this, props);
	addChild.call(this, 'imgIcon', $FlexBtnIcon$$ImgIcon_, this);
	addChild.call(this, 'label1', $FlexBtnIcon$$Label1_, this);
}
FlexBtnIcon.$$styleContext = {
	classNames: '.sf-flexLayout .sf-flx-btn-icon',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		flexProps: { justifyContent: 'CENTER' },
		paddingLeft: 10,
		paddingRight: 10
	}
};
const FlexBtnIcon_ = FlexLayout(FlexBtnIcon);

function $FlexBtnIcon$$ImgIcon(_super, pageInstance) {
	_super(this);

	pageInstance.imgIcon = this;
}
$FlexBtnIcon$$ImgIcon.$$styleContext = {
	classNames: '.sf-imageView',
	defaultClassNames: '.default_common .default_imageView',
	userProps: { image: 'payment_icon_add_money.png' }
};
const $FlexBtnIcon$$ImgIcon_ = ImageView($FlexBtnIcon$$ImgIcon);

function $FlexBtnIcon$$Label1(_super, pageInstance) {
	_super(this, { text: '  label1' });

	pageInstance.label1 = this;
}
$FlexBtnIcon$$Label1.$$styleContext = {
	classNames: '.sf-label',
	defaultClassNames: '.default_common .default_label',
	userProps: { marginLeft: 10, textColor: 'rgba( 87, 202, 179, 1 )' }
};
const $FlexBtnIcon$$Label1_ = Label($FlexBtnIcon$$Label1);

module.exports = FlexBtnIcon_;
