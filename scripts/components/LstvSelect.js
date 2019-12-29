const extend = require('js-base/core/extend');
const LstvSelectDesign = require('library/LstvSelect');

const LstvSelect = extend(LstvSelectDesign)(
	// Constructor
	function(_super, props = {}, pageName) {
		// Initalizes super class for this scope
		_super(this, props);
		this.pageName = pageName;
	}
);

module.exports = LstvSelect;
