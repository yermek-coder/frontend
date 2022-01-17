import {createStore} from "vuex";
import {driverModule} from "@/store/driverModule";
import {dispetcherModule} from "@/store/dispetcherModule";
import {orderModule} from "@/store/orderModule";
import {loginModule} from "@/store/loginModule";

export default createStore({
    state: {
      isAuth: false,
    },
    modules: {
        driver: driverModule,
				dispetcher: dispetcherModule,
				order: orderModule,
				login: loginModule,
    }
})
