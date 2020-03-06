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
const Label = extend(require('sf-core/ui/label'));

function addChild(childName, ChildClass, pageInstance) {
	this.children = this.children || {};
	this.children[childName] = new ChildClass(pageInstance);
	if (this.layout) this.layout.addChild(this.children[childName]);
	else this.addChild(this.children[childName]);
}
// Constructor
function $PgAccounts(_super, props) {
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
	addChild.call(this, 'label1', $Label1_, this);
	pageContextPatch(this, 'pgAccounts');
}
$PgAccounts.$$styleContext = {
	classNames: '.sf-page',
	defaultClassNames: ' .default_page',
	userProps: {
		backgroundColor: 'rgba( 255, 255, 255, 1 )',
		flexProps: {
			justifyContent: 'CENTER',
			alignContent: 'FLEX_START',
			alignItems: 'STRETCH'
		}
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
const $PgAccounts_ = Page($PgAccounts);
function $Label1(_super, pageInstance) {
	_super(this, { text: 'Accounts page ' });
}
$Label1.$$styleContext = {
	classNames: '.sf-label',
	defaultClassNames: '.default_common .default_label',
	userProps: {
		flexProps: { alignSelf: 'AUTO' },
		height: 167.74193548387098,
		width: 345.16129032258067
	}
};
const $Label1_ = Label($Label1);

/**
 * @event onLoad
 * This event is called once when page is created. You can create views and add them to page in this callback.
 */
function onLoad() {
	// HeaderBar props
	this.headerBar.title = 'pgAccounts';
}

module.exports = $PgAccounts_;
