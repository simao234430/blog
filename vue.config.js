const path = require("path");
function  resolve(dir) {
    return path.join(__dirname,dir)
}

module.exports = {

  chainWebpack: config => {

    config.resolve.alias // 添加别名
      .set("@", resolve("src"))
  }

};