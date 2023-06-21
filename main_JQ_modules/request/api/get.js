import { httpService } from "../index.js";

export const getUserInfo = (params, handlers) => httpService.httpServer('/api/userinfo', params, 'get', handlers)
