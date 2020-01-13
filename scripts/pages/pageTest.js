const extend = require('js-base/core/extend');
const PageTestDesign = require('ui/ui_pageTest');

const PageTest = extend(PageTestDesign)(
	function(_super) {
		_super(this);
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
	}
);

function onShow(superOnShow) {
	superOnShow();
	const page = this;
	page.headerBar.visible = true;
	page.parentController.headerBar.visible = true;

	
}

function onLoad(superOnLoad) {
	superOnLoad();
	
}

module.exports = PageTest;
