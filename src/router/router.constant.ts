import { RouterType } from "../interface/constants/router/RouterType.type";
import { TYPE_MANAGEMENT } from "../interface/constants/type/Type.const";
import demo from "../pages/demo";
import demoManagement from "../pages/demo/demoManagement";
import menu from "../pages/systemManagent/menu";
import menuManagement from "../pages/systemManagent/menu/menuManagement";
import templateUi from "../pages/templateUi";

const url = "/supper-admin";

export const ROUTER_BASE = {
  templateUi: {
    path: `${url}/template`,
    name: "templateUi",
    type: TYPE_MANAGEMENT.AUTH_GUARD,
    title: "templateUi.title",
    breakcrumb: [
      {
        orderBy: 1,
        name: "templateUi.breakcrumb.one",
        path: `${url}/template`,
      },
      {
        orderBy: 2,
        name: "templateUi.breakcrumb.two",
        path: `${url}/template`,
      },
    ],
    component: templateUi,
  } as RouterType,
  systemMenu: {
    path: `${url}/menu`,
    name: "systemMenu",
    type: TYPE_MANAGEMENT.AUTH_GUARD,
    title: "systemMenu.title",
    breakcrumb: [
      {
        orderBy: 1,
        name: "systemMenu.breakcrumb.one",
        path: `${url}/`,
      },
      {
        orderBy: 2,
        name: "systemMenu.breakcrumb.two",
        path: `${url}/menu`,
      },
    ],
    component: menu,
  } as RouterType,
  systemMenuManagement: {
    path: `${url}/menu/management`,
    name: "systemMenu",
    type: TYPE_MANAGEMENT.AUTH_GUARD,
    title: "systemMenu.title",
    breakcrumb: [
      {
        orderBy: 1,
        name: "systemMenu.breakcrumb.one",
        path: `${url}/`,
      },
      {
        orderBy: 2,
        name: "systemMenu.breakcrumb.two",
        path: `${url}/menu`,
      },
    ],
    component: menuManagement,
  } as RouterType,
  demo: {
    path: `${url}/demo`,
    name: "demo",
    type: TYPE_MANAGEMENT.AUTH_GUARD,
    title: "demoCrud.title",
    breakcrumb: [
      {
        orderBy: 1,
        name: "demoCrud.breakcrumb.one",
        path: `${url}/demo`,
      },
      {
        orderBy: 2,
        name: "demoCrud.breakcrumb.two",
        path: `${url}/demo`,
      },
    ],
    component: demo,
  } as RouterType,
  demo_crud: {
    path: `${url}/demo/:mode`,
    name: "demo_crud",
    type: TYPE_MANAGEMENT.AUTH_GUARD,
    title: "demoCrud.title",
    breakcrumb: [
      {
        orderBy: 1,
        name: "demoCrud.breakcrumb.one",
        path: `${url}/demo`,
      },
      {
        orderBy: 2,
        name: "demoCrud.breakcrumb.two",
        path: `${url}/demo`,
      },
    ],
    component: demoManagement,
  } as RouterType,
};
