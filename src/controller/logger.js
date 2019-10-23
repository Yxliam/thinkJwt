const Base = require('./base.js');
//ndb 是个好东西 调试 
module.exports = class extends Base {
  async indexAction() {
    if (this.isPost) {
      const data = await this.model('logger').select();
      console.log(data);
      return this.success(data);
    } else {
      return this.json('hahha')
    }
  }
};