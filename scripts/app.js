const Image = require("sf-core/ui/image");
const Route = require("@smartface/router/src/router/Route");
const Router = require("@smartface/router/src/native/NativeRouter");
/* globals lang */
require("i18n/i18n.js"); // Generates global lang object

const Application = require("sf-core/application");
const OS = require('sf-core/device/system').OS;
const BottomTabBarRouter = require("@smartface/router/src/native/BottomTabBarRouter");
const Color = require("sf-core/ui/color");


Application.onUnhandledError = function(e) {
    alert({
        title: e.type || lang.applicationError,
        message: OS === "Android" ? e.stack : (e.message + "\n\n*" + e.stack)
    });
};

  
require("sf-extension-utils");
require("./theme");
const router = require("./routes");



// router.push("/pages/pgRegisterAccountCreate");
// router.push("/pages/pgTabSummary");
// router.push("/pages/pgSendDone_1");
// router.push("/pages/pgSendMoneyAmount");
// router.push("/pages/pgPayments");

// router.push("/tabs");
router.push("/pages/pgRegisterPersonalDetails_11");


// router.push("/pages/pgRegisterPhoneNumber_1");
// router.push("/pages/pgRegisterPin_1");

// router.push("/pages/pgRegisterActivationCode_11");

// router.push("/pages/pgRegisterAccountCreate_1");

// router.push("/pages/pgSendDone_1");

