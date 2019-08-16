/**
 * babel plugin 修改.less为.css插件
 * @author:Kvkens
 */

module.exports = function (babel) {
    let t = babel.types;
    return {
        visitor: {
            CallExpression(path, source) {
                let node = path.node.arguments;
                if(Array.isArray(node) && node.length > 0 && node[0].value && path.node.callee && path.node.callee.name == 'require'){
                    node[0].value = node[0].value.replace('.less','.css');
                }
            }
        }
    }
}