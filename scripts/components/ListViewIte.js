const extend = require('js-base/core/extend');
const ListViewIteDesign = require('library/ListViewIte');

const ListViewIte = extend(ListViewIteDesign)(
	// Constructor
	function(_super, props = {}, pageName) {
		// Initalizes super class for this scope
		_super(this, props);
		this.pageName = pageName;
	}
);

module.exports = ListViewIte;
