const BottomTabBarRouter = require("@smartface/router/src/native/BottomTabBarRouter");
const Color = require("sf-core/ui/color");
const Image = require("sf-core/ui/image");
const Route = require("@smartface/router/src/router/Route");
const Router = require("@smartface/router/src/native/NativeRouter");
const extend = require('js-base/core/extend');
const PgRegisterAccountCreateDesign = require('ui/ui_pgRegisterAccountCreate');


const PgRegisterAccountCreate = extend(PgRegisterAccountCreateDesign)(
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
    const page = this; 
    const router = this.router;
    const {btnDone} = page;

 btnDone.onPress = () => router.push("/tabs");

}

module.exports = PgRegisterAccountCreate