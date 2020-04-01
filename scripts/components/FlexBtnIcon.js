const extend = require('js-base/core/extend');
const FlexBtnIconDesign = require('library/FlexBtnIcon');

const FlexBtnIcon = extend(FlexBtnIconDesign)(
	// Constructor
	function(_super, props = {}, pageName) {
		// Initalizes super class for this scope
		_super(this, props);
		this.pageName = pageName;
	}
);

module.exports = FlexBtnIcon;
