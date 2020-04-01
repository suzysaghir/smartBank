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
const TextView = extend(require('sf-core/ui/textview'));
const propFactory = require('@smartface/contx/lib/smartface/sfCorePropFactory');
const AttributedString = require('sf-core/ui/attributedstring');
const createAttributedStrings = require('@smartface/html-to-text');

function addChild(childName, ChildClass, componentInstance) {
	this.children = this.children || {};
	this.children[childName] = new ChildClass(componentInstance);
	if (this.layout) this.layout.addChild(this.children[childName]);
	else this.addChild(this.children[childName]);
}

// Constructor
function ListViewItemHeader(_super, props) {
	// Initalizes super class for this component scope

	_super(this, props);
	addChild.call(this, 'tvDate', $ListViewItemHeader$$TvDate_, this);
	addChild.call(this, 'tvSign', $ListViewItemHeader$$TvSign_, this);
	addChild.call(this, 'tvAmount', $ListViewItemHeader$$TvAmount_, this);
}
ListViewItemHeader.$$styleContext = {
	classNames: '.sf-listViewItem .sf-listViewItem-summary-header',
	defaultClassNames: '.default_common .default_listViewItem',
	userProps: {
		backgroundColor: 'rgba( 211, 246, 255, 1 )',
		flexProps: { alignSelf: 'CENTER', alignItems: 'STRETCH' },
		width: null,
		height: null
	}
};
const ListViewItemHeader_ = ListViewItem(ListViewItemHeader);

function $ListViewItemHeader$$TvDate(_super, pageInstance) {
	_super(this, { text: 'Today' });

	pageInstance.tvDate = this;
	var html =
		'<span style="white-space: pre-wrap; background-color: rgba(255, 255, 255, 0);">Today</span>';
	var attributedStrings = createAttributedStrings(html);
	this.attributedText = attributedStrings.map(
		s => new AttributedString(propFactory.default(s))
	);
}
$ListViewItemHeader$$TvDate.$$styleContext = {
	classNames: '.sf-textView .sf-paymentLstv',
	defaultClassNames: '.default_common .default_textView',
	userProps: {
		flexProps: { alignSelf: 'CENTER', flexGrow: 1 },
		height: null,
		textAlignment: 'MIDLEFT',
		width: 100
	}
};
const $ListViewItemHeader$$TvDate_ = TextView($ListViewItemHeader$$TvDate);

function $ListViewItemHeader$$TvSign(_super, pageInstance) {
	_super(this, { text: '-' });

	pageInstance.tvSign = this;
}
$ListViewItemHeader$$TvSign.$$styleContext = {
	classNames: '.sf-textView',
	defaultClassNames: '.default_common .default_textView',
	userProps: {
		flexProps: { alignSelf: 'CENTER', flexGrow: 1 },
		height: 71.11111061245788,
		textAlignment: 'MIDRIGHT',
		textColor: 'rgba( 112, 200, 224, 1 )',
		width: 272.88854262408086
	}
};
const $ListViewItemHeader$$TvSign_ = TextView($ListViewItemHeader$$TvSign);

function $ListViewItemHeader$$TvAmount(_super, pageInstance) {
	_super(this, { text: '\n' });

	pageInstance.tvAmount = this;
}
$ListViewItemHeader$$TvAmount.$$styleContext = {
	classNames: '.sf-textView .sf-paymentLstv .sf-payment',
	defaultClassNames: '.default_common .default_textView',
	userProps: {
		flexProps: { alignSelf: 'CENTER' },
		height: null,
		textAlignment: 'MIDLEFT',
		width: null
	}
};
const $ListViewItemHeader$$TvAmount_ = TextView($ListViewItemHeader$$TvAmount);

module.exports = ListViewItemHeader_;
