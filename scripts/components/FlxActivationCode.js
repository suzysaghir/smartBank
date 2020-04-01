const extend = require('js-base/core/extend');
const FlxActivationCodeDesign = require('library/FlxActivationCode');

const FlxActivationCode = extend(FlxActivationCodeDesign)(
	// Constructor
	function(_super, props = {}, pageName) {
		// Initalizes super class for this scope
		_super(this, props);
		this.pageName = pageName;
	}
);

module.exports = FlxActivationCode;
