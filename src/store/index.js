import {createStore} from "vuex";
import {driverModule} from "@/store/driverModule";
import {dispetcherModule} from "@/store/dispetcherModule";
import {orderModule} from "@/store/orderModule";

export default createStore({
    state: {
      isAuth: false,
    },
    modules: {
        driver: driverModule,
				dispetcher: dispetcherModule,
				order: orderModule
    }
})
