const assert = require('assert');
module.exports = class extends think.Controller {
    constructor(ctx) {
        super(ctx);
        this.resource = this.getResource();
    }

    async __before(action) {
        this.header('Access-Control-Allow-Origin', '*');
        try {
            this.userInfo = await this.session('userInfo').catch(_ => ({}));
        } catch (err) {
            this.userInfo = {}
        }

        const isLogin = !think.isEmpty(this.userInfo);
        //除了token的控制器和没有登录的其他都要校验
        if (this.resource !== "token" && !isLogin) {
            // return this.ctx.throw(401, '请登录后操作');
            this.ctx.status = 401;
            return this.ctx.fail(-1, "请登录后操作");
        }

    }

    getResource() {
        return this.ctx.controller.split('/').slice(-1)[0];
    }
}