// const Route = require("@smartface/router/src/router/Route");
// const Router = require("@smartface/router/src/native/NativeRouter");
const BottomTabBarRouter = require("@smartface/router/src/native/BottomTabBarRouter");
const Color = require("sf-core/ui/color");
const Image = require("sf-core/ui/image");
const OS = require('sf-core/device/system').OS;
const buildExtender = require("sf-extension-utils/lib/router/buildExtender");

const pgAccounts = require('sf-core/ui/page');
const pgTabs = require("pages/pgRegisterSummary");
const pgPayments = require('pages/pgPayments');
const pgCards = require('sf-core/ui/page');
const pgMyProfile = require('sf-core/ui/page');

const {
    NativeRouter: Router,
    NativeStackRouter: StackRouter,
    Route
} = require("@smartface/router");
require("sf-extension-utils/lib/router/goBack"); // Implements onBackButtonPressed

const router = Router.of({
    path: "/",
    isRoot: true,
    routes: [
        Route.of({
            path: "/pages",
            routes: [
                Route.of({
                    path: "/pages/splash",
                    build: buildExtender({ getPageClass: () => require("pages/splash"), headerBarStyle: { visible: true } })
                }),
                Route.of({
                    path: "/pages/pgRegisterPersonalDetails",
                    build: buildExtender({ getPageClass: () => require("pages/pgRegisterPersonalDetails"), headerBarStyle: { visible: true } })
                }),
                Route.of({
                    path: "/pages/pgRegisterAddress",
                    build: buildExtender({ getPageClass: () => require("pages/pgRegisterAddress"), headerBarStyle: { visible: true } })
                }),
                Route.of({
                    path: "/pages/pgRegisterEmail",
                    build: buildExtender({ getPageClass: () => require("pages/pgRegisterEmail"), headerBarStyle: { visible: true } })
                }),
                Route.of({
                    path: "/pages/pgRegisterAccountCreate",
                    build: buildExtender({ getPageClass: () => require("pages/pgRegisterAccountCreate"), headerBarStyle: { visible: true } })
                }),
                Route.of({
                    path: "/pages/pgRegisterPhoneNumber",
                    build: buildExtender({ getPageClass: () => require("pages/pgRegisterPhoneNumber"), headerBarStyle: { visible: true } })
                }),
                Route.of({
                    path: "/pages/pgRegisterPin",
                    build: buildExtender({ getPageClass: () => require("pages/pgRegisterPin"), headerBarStyle: { visible: true } })
                }),                
                Route.of({
                    path: "/pages/pgRegisterActivationCode",
                    build: buildExtender({ getPageClass: () => require("pages/pgRegisterActivationCode"), headerBarStyle: { visible: true } })
                }), 

                Route.of({
                    path: "/pages/pgPayments",
                    build: buildExtender({ getPageClass: () => require("pages/pgPayments"), headerBarStyle: { visible: true } })
                }),               
                Route.of({
                    path: "/pages/pgSendDone",
                    build: buildExtender({ getPageClass: () => require("pages/pgSendDone"), headerBarStyle: { visible: true } })
                }),   
                Route.of({
                    path: "/pages/pgRegisterSummary",
                    build: buildExtender({ getPageClass: () => require("pages/pgRegisterSummary"), headerBarStyle: { visible: true } })
                }),
                Route.of({
                    path: "/pages/pgSendMoney",
                    build: buildExtender({ getPageClass: () => require("pages/pgSendMoney"), headerBarStyle: { visible: true } })
                }),                
           
        	        
                ]
            }),     BottomTabBarRouter.of({
                    path: "/tabs",
                    // path: "/pages/pgRegisterSummary",
                    tabbarParams: () => ({
                        ios: { visible: false },
                itemColor: {
                    normal: Color.create("#b5bec0"),
                    selected: Color.create("#55dbf6")
                    },
                    backgroundColor: Color.create("#f8f8f8")
                }),
            items: () => [{title: "Accounts", icon: Image.createFromFile("images://btb_account.png")},
                          {title: "Summary", icon: Image.createFromFile("images://btb_summary.png") },
                          {title: "Payments", icon: Image.createFromFile("images://btb_payments.png")},
                          { title: "Cards", icon: Image.createFromFile("images://btb_cards.png")},
                          { title: "My Profiles", icon: Image.createFromFile("images://btb_my_profile.png")}],
        
        
        	routes: [
                      Route.of({
                            path: "/tabs/accounts",
                            build: (router, route) => {
                                 return new pgAccounts(router);
                            }
                        }),
                        Route.of({
                            path: "/tabs/summary",
                            build: (router, route) => {
                                return new pgTabs(router);
                            }
                        }),                       
                        Route.of({
                            path: "/tabs/payments",
                            build: (router, route) => {
                                return new pgPayments(router);
                            }
                        }),  
                        Route.of({
                            path: "/tabs/cards",
                            build: (router, route) => {
                                return new pgCards(router);
                            }
                        }),
                      Route.of({
                            path: "/tabs/myprofile",
                            build: (router, route) => {
                                return new pgMyProfile(router);
                            }
                        }) 
        	            ]
        	        })        
]     
});

module.exports = router;
