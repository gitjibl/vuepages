const path = require('path');
//glob 模式是指 shell 所使用的简化了的正则表达式
const glob = require('glob');

// TODO: 页面路径
const PAGE_PATH = path.resolve(__dirname, 'src');

/**
 * TODO: 获取 webpack构建工具 入口文件配置
 */
function getEntry() {
    const entries = {};
    const entryFiles = glob.sync(PAGE_PATH + '/views/**/*.js');
    entryFiles.forEach(filePath => {
        //路径中提取文件名
        const baseName = path.basename(filePath, path.extname(filePath));
        //完整目录路径，如“/home/user/dir”或“c:\\path\\dir”
        const basePath = path.parse(filePath).dir;
        entries[baseName] = {
            entry: filePath,
            template: `${basePath}/${baseName}.html`,
            filename: `${baseName}.html`
        };
        /**
         * index: {
         *       // page 的入口
         *       entry: 'src/views/index/index.js',
         *       // 模板来源
         *       template: 'src/views/index/index.html',
         *       // 在 dist/index.html 的输出
         *       filename: 'index.html'
         *  },
         */
    });
    return entries;
}
module.exports = {
    publicPath: './',
    //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    assetsDir: 'static',
    //如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: false,
    //JavaScript 入口文件
    pages: getEntry(),
    configureWebpack: {
        resolve: {
            alias: {
                '@assets': path.join(__dirname, 'src/assets'),
                '@components': path.join(__dirname, 'src/components'),
            }
        }
    },
    devServer: {
        //被认为是索引文件的文件名
        index: 'index.html',
        port: 8081,
        //dev-server在服务器启动后打开浏览器
        open: true,
        //跨域代理
        proxy: {//配置跨域
            '/api': {
                target: 'http://localhost:8086/',//后台接口
                ws: true,
                changOrigin: true,//允许跨域
                pathRewrite: {
                    '^/api': ''//请求的时候使用这个api就可以
                }
            }
            
        }
    }
}