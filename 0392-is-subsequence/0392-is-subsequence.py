class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if len(s) == 0:
            return True
        check_idx = 0
        
        for char in t:
            if char == s[check_idx]:
                check_idx += 1
                if check_idx == len(s):
                    break
        
        if check_idx == len(s):
            return True
        else:
            return False