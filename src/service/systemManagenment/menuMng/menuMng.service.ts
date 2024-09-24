import { AppConfig } from "../../../AppConfig";
import { Method, request } from "../../../helper/request.helper";
import { AdMenuMngReqDto } from "./menuMng.type";

export class MenuMngApi {
  static readonly API: string = `${AppConfig.prefixApi}/menu`;

  static getPageMenu = (filter:any) => {
    return request({
      method: Method.POST,
      url: `/${this.API}/list`,
      data: filter
    });
  };

  static createMenu = (data:AdMenuMngReqDto) => {
    return request({
      method: Method.POST,
      url: `/${this.API}/create`,
      data: data
    })
  }
}
