const extend = require('js-base/core/extend');
const ListViewItemHeaderDesign = require('library/ListViewItemHeader');

const ListViewItemHeader = extend(ListViewItemHeaderDesign)(
	// Constructor
	function(_super, props = {}, pageName) {
		// Initalizes super class for this scope
		_super(this, props);
		this.pageName = pageName;
	}
);

module.exports = ListViewItemHeader;
