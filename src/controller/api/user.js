const BaseRest = require('./rest.js');

module.exports = class extends BaseRest {
    async indexAction() {
        if (this.isPost) {
            return this.success({
                code: 1
            });
        }
    }
}