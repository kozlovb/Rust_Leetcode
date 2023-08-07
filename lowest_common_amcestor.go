// original problem description - https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

import (
    "math"
)

func dfs(root, to_find *TreeNode, stop *bool) []*TreeNode {
    if *stop {
        return nil
    }
    if (root == nil) {
        return nil
    }
    if (root == to_find) {
        *stop = true
        return []*TreeNode{root}
    }

    path_left := dfs(root.Left, to_find, stop)
    path_right := dfs(root.Right, to_find, stop)
    if path_left != nil {
        return append([]*TreeNode{root}, path_left...)
    }
    if path_right != nil {
        return append([]*TreeNode{root}, path_right...) 
    }

    return nil
}

func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
    if root == nil {
        return root
    }
    stop := false
    path_to_p := dfs(root, p, &stop)

    stop = false
    path_to_q := dfs(root, q, &stop)

    fmt.Println(len(path_to_p))
    fmt.Println(len(path_to_q))

    i := 0
    for ; i < int(math.Min(float64(len(path_to_p)), float64(len(path_to_q)))); i++ {
        if path_to_p[i] != path_to_q[i] {
            break
        }
    }
    return path_to_p[i-1]
}
