# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def generateTrees(self, n: int) -> list[Optional[TreeNode]]:

        def generate_trees_recurse(start, end):
            if start > end:
                return [None,]

            all_trees = []

            for i in range(start, end + 1):
                left_trees = generate_trees_recurse(start, i - 1)
                right_trees = generate_trees_recurse(i + 1, end)

                for l in left_trees:
                    for r in right_trees:
                        root_node = TreeNode(i)
                        root_node.left = l
                        root_node.right = r
                        all_trees.append(root_node)

            return all_trees

        return generate_trees_recurse(1, n)
