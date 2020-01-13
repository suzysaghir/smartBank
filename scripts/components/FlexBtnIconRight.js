const extend = require('js-base/core/extend');
const FlexBtnIconRightDesign = require('library/FlexBtnIconRight');

const FlexBtnIconRight = extend(FlexBtnIconRightDesign)(
	// Constructor
	function(_super, props = {}, pageName) {
		// Initalizes super class for this scope
		_super(this, props);
		this.pageName = pageName;
	}
);

module.exports = FlexBtnIconRight;
