const extend = require('js-base/core/extend');
const FlexLayout3Design = require('library/FlexLayout3');

const FlexLayout3 = extend(FlexLayout3Design)(
	// Constructor
	function(_super, props = {}, pageName) {
		// Initalizes super class for this scope
		_super(this, props);
		this.pageName = pageName;
	}
);

module.exports = FlexLayout3;
