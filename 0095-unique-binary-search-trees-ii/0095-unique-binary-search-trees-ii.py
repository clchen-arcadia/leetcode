# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

###### RECURSIVE SOLUTION #####
# class Solution:
#     def generateTrees(self, n: int) -> list[Optional[TreeNode]]:

#         def generate_trees_recurse(start, end):
#             if start > end:
#                 return [None,]

#             all_trees = []

#             for i in range(start, end + 1):
#                 left_trees = generate_trees_recurse(start, i - 1)
#                 right_trees = generate_trees_recurse(i + 1, end)

#                 for l in left_trees:
#                     for r in right_trees:
#                         root_node = TreeNode(i)
#                         root_node.left = l
#                         root_node.right = r
#                         all_trees.append(root_node)

#             return all_trees

#         return generate_trees_recurse(1, n)

### DP APPROACH ###
class Solution:
    def generateTrees(self, n: int) -> list[Optional[TreeNode]]:
        if n == 0:
            return []

        dp = [[] for _ in range(n + 1)]
        dp[0] = [None,]

        for num_nodes in range(1, n + 1):
            for root_val in range(1, num_nodes + 1):
                for left_tree in dp[root_val - 1]:
                    for right_tree in dp[num_nodes - root_val]:
                        new_root = TreeNode(root_val)
                        new_root.left = left_tree
                        new_root.right = self.clone_nodes(right_tree, root_val)
                        dp[num_nodes].append(new_root)

        return dp[n]

    def clone_nodes(self, node, offset=0):
        if node:
            new_node = TreeNode(node.val + offset)
            new_node.left = self.clone_nodes(node.left, offset)
            new_node.right = self.clone_nodes(node.right, offset)
            return new_node
        else:
            return None
