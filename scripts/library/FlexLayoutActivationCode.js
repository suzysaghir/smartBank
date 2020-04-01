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
const TextView = extend(require('sf-core/ui/textview'));

function addChild(childName, ChildClass, componentInstance) {
	this.children = this.children || {};
	this.children[childName] = new ChildClass(componentInstance);
	if (this.layout) this.layout.addChild(this.children[childName]);
	else this.addChild(this.children[childName]);
}

// Constructor
function FlexLayoutActivationCode(_super, props) {
	// Initalizes super class for this component scope

	_super(this, props);
	addChild.call(this, 'tvDigit', $FlexLayoutActivationCode$$TvDigit_, this);
	addChild.call(this, 'tvLine', $FlexLayoutActivationCode$$TvLine_, this);
}
FlexLayoutActivationCode.$$styleContext = {
	classNames: '.sf-flexLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: { height: null, width: null }
};
const FlexLayoutActivationCode_ = FlexLayout(FlexLayoutActivationCode);

function $FlexLayoutActivationCode$$TvDigit(_super, pageInstance) {
	_super(this, { text: '' });

	pageInstance.tvDigit = this;
}
$FlexLayoutActivationCode$$TvDigit.$$styleContext = {
	classNames: '.sf-textView .sf-tvDigit',
	defaultClassNames: '.default_common .default_textView',
	userProps: { height: null, width: null }
};
const $FlexLayoutActivationCode$$TvDigit_ = TextView(
	$FlexLayoutActivationCode$$TvDigit
);

function $FlexLayoutActivationCode$$TvLine(_super, pageInstance) {
	_super(this, { text: '___' });

	pageInstance.tvLine = this;
}
$FlexLayoutActivationCode$$TvLine.$$styleContext = {
	classNames: '.sf-textView .sf-tvLine',
	defaultClassNames: '.default_common .default_textView',
	userProps: {}
};
const $FlexLayoutActivationCode$$TvLine_ = TextView(
	$FlexLayoutActivationCode$$TvLine
);

module.exports = FlexLayoutActivationCode_;
