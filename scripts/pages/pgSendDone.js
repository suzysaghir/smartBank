/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');
const PgSendDoneDesign = require('ui/ui_pgSendDone');

const PgSendDone = extend(PgSendDoneDesign)(
	// Constructor
	function(_super) {
		// Initalizes super class for this page scope
		_super(this);
		// Overrides super.onShow method
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		// Overrides super.onLoad method
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
	}
);

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
function onShow(superOnShow) {
	superOnShow();
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
	superOnLoad();
	const page = this 
	const { imgBackground } = page;
	
	// imgBackground.borderRadius = imgBackground.height/2;

	// imgBackground.borderRadius = 5000;
// console.log("background ",imgBackground.height);
	
	
}

module.exports = PgSendDone;
