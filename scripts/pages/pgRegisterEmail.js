const Button = require("sf-core/ui/button");
const FlexLayout = require("sf-core/ui/flexlayout");
const extend = require('js-base/core/extend');
const PgRegisterEmailDesign = require('ui/ui_pgRegisterEmail');
const { getCombinedStyle } = require("sf-extension-utils/lib/getCombinedStyle");

const PgRegisterEmail = extend(PgRegisterEmailDesign)(
	function(_super) {
		_super(this);
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
		
		var myFlexLayout = new FlexLayout({
		    flexGrow:1,
		    justifyContent: FlexLayout.JustifyContent.CENTER
		});

		var btnContinue= new Button({
            text: "Continue",
            onPress: function() {
              this.router.push("/pages/pgRegisterAccountCreate_1");
            }.bind(this)
        });
        
		const btnStyle = getCombinedStyle(".sf-button");
	    Object.assign(btnContinue, btnStyle);
	    myFlexLayout.addChild(btnContinue);
	    this.layout.addChild(myFlexLayout);
		
	}
);

function onShow(superOnShow) {
	superOnShow();
}

function onLoad(superOnLoad) {
	superOnLoad();
	const page = this;	 
	const { mtbEmail, btnContinue, tvEmailDetails } = page;

	tvEmailDetails.text = "What is your e-mail address?";


	mtbEmail.options = {
		hint: "EMAL",
};

}
module.exports = PgRegisterEmail;
