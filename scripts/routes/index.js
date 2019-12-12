const OS = require('sf-core/device/system').OS;
const buildExtender = require("sf-extension-utils/lib/router/buildExtender");
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
        StackRouter.of({
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
            ]
        })
    ]
});

module.exports = router;
