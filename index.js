/**
 * babel plugin 修改.less为.css插件
 * @author:Kvkens
 */

module.exports = function () {
    return {
        visitor: {
            ImportDeclaration(path, source) {
                if (path.node.source.value == './index.less') {
                    path.node.source.value = "./index.css";
                }
            }
        }
    }
}