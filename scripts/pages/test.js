const Color = require("sf-core/ui/color");
const TextAlignment = require("sf-core/ui/textalignment");
const TextView = require("sf-core/ui/textview");
/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');
const TestDesign = require('ui/ui_test');

const Test = extend(TestDesign)(
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


	var myText = new TextView({
		width: 120,
		height: 60,
		backgroundColor: Color.create("#00A1F1"),
		text: " consultant.turkcell@smfc.io",
		textAlignment: TextAlignment.MIDCENTER
	});

	this.layout.addChild(myText);


	function validateEmail(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	var result = validateEmail(myText.text);
	console.log(result);

}

module.exports = Test;
