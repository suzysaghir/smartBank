const extend = require('js-base/core/extend');
const LstvSummaryDesign = require('library/LstvSummary');

const LstvSummary = extend(LstvSummaryDesign)(
	// Constructor
	function(_super, props = {}, pageName) {
		// Initalizes super class for this scope
		_super(this, props);
		this.pageName = pageName;
	}
);

module.exports = LstvSummary;
