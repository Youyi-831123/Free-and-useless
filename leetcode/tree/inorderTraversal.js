/*
 * @Date: 2022-01-20 00:08:00
 * @LastEditors: youyi
 * 中序遍历，考察到一个节点以后，将其缓存，遍历完左子树以后，在输出该节点的值，然后遍历右子树（左根右）
 * @LastEditTime: 2022-01-20 00:13:25
 */
var inOrderTraversal = function(root){
    let res = []
    function traversal(root){
        if(root !== null){
            traversal(root.left)
            res.push(root.val)
            traversal(root.right)
        }
    }
    traversal(root)
    return res
}