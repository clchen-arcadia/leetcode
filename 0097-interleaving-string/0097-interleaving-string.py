class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        a, b, c = len(s1), len(s2), len(s3)

        if a + b != c:
            return False

        # if s1 == '' and s2 == '' and s3 == '':
        #     return True

        # args = []

        # if s3 and s1 and s3[0] == s1[0]:
        #     args.append((s1[1:], s2, s3[1:]))

        # if s3 and s2 and s3[0] == s2[0]:
        #     args.append((s1, s2[1:], s3[1:]))

        # return any(list(map(lambda x: self.isInterleave(*x), args)))
        memo = {}

        def helper(i, j, k):
            if k == c:
                return True

            if (i, j) in memo:
                return memo[(i, j)]

            ans = False

            if i < a and s1[i] == s3[k]:
                ans = ans or helper(i + 1, j, k + 1)


            if j < b and s2[j] == s3[k]:
                ans = ans or helper(i, j + 1, k + 1)

            memo[(i, j)] = ans
            return ans

        return helper(0, 0, 0)
