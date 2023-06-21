import config from "./config.js";
// 声明一个全局Http请求
export const httpService = {
    //通过访问来源，设置不同的服务器
    getUrl: function() {
        let myUrl = window.location.href;
        let masUrlConfig = {
            "127.0.0.1": "http://192.168.1.197:8081/",
        };
        let masUrl = "";
        for (let i in masUrlConfig) {
            if (myUrl.indexOf(i) >= 0) {
                masUrl = masUrlConfig[i];
            }
        }
        return masUrl;
    },
    /**
     * [httpServer 请求服务]
     * @param  {string} url    [url请求链接]
     * @param  {object} params [参数]
     * @param  {string} types  [请求方式，默认为post]
     * @param  {object} handlers  [请求头信息]
     * @return {object}        [返回的结果]
     */
    httpServer: function(url, params, types, handlers={}) {
        let deffer = $.Deferred();
        $.ajax({
            url: config.baseUrl + url, // 请求接口
            data: params,
            type: types || 'post',
            cache: true,
            handlers: {
                ...handlers,
                'Content-Type': 'application/json'
            },
            beforeSend:function (request) {
                // 请求前的工作
            },
            success: function(data) {
                deffer.resolve(data);
            },
            error: function(data) {
                deffer.reject(data);
            }
        });
        return deffer.promise();
    }
};
