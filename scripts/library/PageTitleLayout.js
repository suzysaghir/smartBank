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
const TextArea = extend(require('sf-core/ui/textarea'));

function addChild(childName, ChildClass, componentInstance) {
	this.children = this.children || {};
	this.children[childName] = new ChildClass(componentInstance);
	if (this.layout) this.layout.addChild(this.children[childName]);
	else this.addChild(this.children[childName]);
}

// Constructor
function PageTitleLayout(_super, props) {
	// Initalizes super class for this component scope

	_super(this, props);
	addChild.call(this, 'textArea1', $PageTitleLayout$$TextArea1_, this);
}
PageTitleLayout.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {
		backgroundColor: 'rgba( 255, 255, 255, 0 )',
		flexProps: { justifyContent: 'CENTER' },
		height: 58.937498927116394,
		width: 276.5625
	}
};
const PageTitleLayout_ = FlexLayout(PageTitleLayout);

function $PageTitleLayout$$TextArea1(_super, pageInstance) {
	_super(this, { text: '\n\n' });

	pageInstance.textArea1 = this;
}
$PageTitleLayout$$TextArea1.$$styleContext = {
	classNames: '.sf-textArea',
	defaultClassNames: '.default_common .default_textArea',
	userProps: {}
};
const $PageTitleLayout$$TextArea1_ = TextArea($PageTitleLayout$$TextArea1);

module.exports = PageTitleLayout_;
