/*
 * @Author: whj0117
 * @Date: 2022-05-05 21:03:36
 * @Github: https://github.com/whj0117
 * @Email: 791281470@qq.com
 * @LastEditors: whj0117
 */
const { override, fixBabelImports, addDecoratorsLegacy } = require('customize-cra');
// override生成webpack配置对象
module.exports = override(
    // 针对antd 实现按需打包：根据import来打包 (使用babel-plugin-import)
    // fixBabelImports('import', {
    //     libraryName: 'antd',
    //     libraryDirectory: 'es',
    //     style: true,//自动打包相关的样式 默认为 style:'css'
    // }),
    // addDecoratorsLegacy() //配置装饰器
);