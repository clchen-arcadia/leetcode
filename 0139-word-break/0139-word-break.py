class Solution:
    def wordBreak(self, s: str, wordDict: list[str]) -> bool:
        set_words = set(wordDict)

        n = len(s)
        dp = [False] * (n + 1)
        dp[0] = True

        for i in range(1, n + 1):
            for j in range(i):
                if dp[j] and s[j:i] in set_words:
                    dp[i] = True
                    break

        print('dp arr is', dp)
        return dp[n]
