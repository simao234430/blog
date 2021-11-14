const path = require("path");
function  resolve(dir) {
    return path.join(__dirname,dir)
}
const { md } = require('./build/markdown-it')
const Mode = require('frontmatter-markdown-loader/mode')
 
module.exports = {
    devServer:{
        port:80, // 启动端口
        open:true  // 启动后是否自动打开网页
    },
  chainWebpack: config => {
    config
    .plugin('pages-plugin')
    .use(path.resolve('./build/pages-plugin.js'))

//   config.plugins.delete('html')
//   config.plugins.delete('preload')
//   config.plugins.delete('prefetch')

  config.module
    .rule('markdown')
    .test(/\.md$/)
    .use('toc-loader')
    .loader(path.resolve('./build/toc-loader.js'))
    .end()
    .use('frontmatter-markdown-loader')
    .loader('frontmatter-markdown-loader')
    .tap(() => ({
      markdown: body => md.render(body),
      mode: [Mode.VUE_COMPONENT, Mode.BODY],
      vue: { root: 'markdown-body' },
    }))

 


    config.resolve.alias // 添加别名
      .set("@", resolve("src"))
      .set("@docs", resolve("src/docs"))
  }

};