const extend = require('js-base/core/extend');
const FlexLayoutActivationCodeDesign = require('library/FlexLayoutActivationCode');

const FlexLayoutActivationCode = extend(FlexLayoutActivationCodeDesign)(
	// Constructor
	function(_super, props = {}, pageName) {
		// Initalizes super class for this scope
		_super(this, props);
		this.pageName = pageName;
	}
);

module.exports = FlexLayoutActivationCode;
