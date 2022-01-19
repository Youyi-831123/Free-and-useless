/*
 * @Date: 2022-01-19 23:50:41
 * @LastEditors: youyi
 * 先序遍历(PreOrder, 按照先访问根节点的顺序)
 * @LastEditTime: 2022-01-19 23:53:58
 */
var preOrderTraversal = function(root) {
    const res = []
    function traversal(root){
        if(root !== null){
            res.push(root.val)
            traversal(root.left)
            traversal(root.right)
        }
    }
    traversal(root)
    return res
}