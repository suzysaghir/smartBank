 
const extend = require('js-base/core/extend');
const PgSendMoneyContactsDesign = require('ui/ui_pgSendMoneyContacts');

const PgSendMoneyContacts = extend(PgSendMoneyContactsDesign)(
 	function(_super) {
 		_super(this);
 		this.onShow = onShow.bind(this, this.onShow.bind(this));
 		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
	}
);


function onShow(superOnShow) {
	superOnShow();
}

 
function onLoad(superOnLoad) {
	superOnLoad();
}

module.exports = PgSendMoneyContacts;
