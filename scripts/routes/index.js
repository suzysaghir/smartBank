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
               Route.of({
                    path: "/pages/pgSendMoneyAmount/:title,image",
                    build: buildExtender({ getPageClass: () => require("pages/pgSendMoneyAmount"), headerBarStyle: { visible: true } })
                }),                
               Route.of({
                    path: "/pages/pgSend",
                    build: buildExtender({ getPageClass: () => require("pages/pgSend"), headerBarStyle: { visible: true } })
                }),   
               Route.of({
                    path: "/pages/pgSendMoneyReview",
                    build: buildExtender({ getPageClass: () => require("pages/pgSendMoneyReview"), headerBarStyle: { visible: true } })
                }),   
              Route.of({
                    path: "/pages/pgSendMoneyAmount",
                    build: buildExtender({ getPageClass: () => require("pages/pgSendMoneyAmount"), headerBarStyle: { visible: true } })
                }),
        Route.of({
                    path: "/pages/pgPayments_1",
                    build: buildExtender({ getPageClass: () => require("pages/pgPayments_1"), headerBarStyle: { visible: true } })
                }),      
        Route.of({
                    path: "/pages/pgRegisterPhoneNumber_1",
                    build: buildExtender({ getPageClass: () => require("pages/pgRegisterPhoneNumber_1"), headerBarStyle: { visible: true } })
                }),
        Route.of({
                    path: "/pages/pgRegisterPin_1",
                    build: buildExtender({ getPageClass: () => require("pages/pgRegisterPin_1"), headerBarStyle: { visible: true } })
                }),  
        Route.of({
                    path: "/pages/pgRegisterActivationCode_11",
                    build: buildExtender({ getPageClass: () => require("pages/pgRegisterActivationCode_11"), headerBarStyle: { visible: true } })
                }), 
        Route.of({
                    path: "/pages/pgSendDone_1",
                    build: buildExtender({ getPageClass: () => require("pages/pgSendDone_1"), headerBarStyle: { visible: true } })
                }),  
        Route.of({
                    path: "/pages/pgRegisterAccountCreate_1",
                    build: buildExtender({ getPageClass: () => require("pages/pgRegisterAccountCreate_1"), headerBarStyle: { visible: true } })
                }),
        Route.of({
                    path: "/pages/pgRegisterPersonalDetails_11",
                    build: buildExtender({ getPageClass: () => require("pages/pgRegisterPersonalDetails_11"), headerBarStyle: { visible: true } })
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
            items: () => [{title: "Accounts", icon: Image.createFromFile("images://tab_account.png")},
                          {title: "Summary", icon: Image.createFromFile("images://tab_summary.png") },
                          {title: "Payments", icon: Image.createFromFile("images://tab_payments.png")},
                          { title: "Cards", icon: Image.createFromFile("images://tab_cards.png")},
                          { title: "My Profiles", icon: Image.createFromFile("images://tab_my_profile.png")}],
        
        
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
