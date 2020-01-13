const Application = require("sf-core/application");
const Page = require("sf-core/ui/page");
const extend = require("js-base/core/extend");
const HeaderBarItem = require('sf-core/ui/headerbaritem');
const Color = require('sf-core/ui/color');

var Page1 = extend(Page)(
    function(_super) {
        _super(this, {
            onLoad: function() {
                this.headerBar.backgroundColor = Color.create("#00A1F1");
                this.headerBar.title = "Header Bar";

                // Border visibility is optional
                this.headerBar.borderVisibility = true;

                var myItem = new HeaderBarItem({
                    title: "Done",
                    onPress: function() {
                        console.log("You pressed Done item!");
                    }
                });
                this.headerBar.setItems([myItem]);
            },
            onShow: function(params) {
                Application.statusBar.visible = true;
                this.headerBar.visible = true;
                this.headerBar.ios.visible = true;

            }
        });
    }
);

module.exports = Page1;
