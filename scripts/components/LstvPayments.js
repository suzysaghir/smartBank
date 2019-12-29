const extend = require('js-base/core/extend');
const LstvPaymentsDesign = require('library/LstvPayments');

const LstvPayments = extend(LstvPaymentsDesign)(
	// Constructor
	function(_super, props = {}, pageName) {
		// Initalizes super class for this scope
		_super(this, props);
		this.pageName = pageName;
	}
);

module.exports = LstvPayments;
