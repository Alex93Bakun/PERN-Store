import Admin from "./page/Admin";
import Cart from "./page/Cart";
import Shop from "./page/Shop";
import Auth from "./page/Auth";
import DevicePage from "./page/DevicePage";
import {
  ADMIN_ROUTE,
  CART_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    component: Admin,
  },
  {
    path: CART_ROUTE,
    component: Cart,
  },
];
export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    component: Shop,
  },
  {
    path: LOGIN_ROUTE,
    component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    component: Auth,
  },
  {
    path: DEVICE_ROUTE + "/:id",
    component: DevicePage,
  },
];
