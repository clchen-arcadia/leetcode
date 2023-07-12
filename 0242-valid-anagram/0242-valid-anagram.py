class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return self.get_freq_counter(s) == self.get_freq_counter(t)
        
    def get_freq_counter(self, s: str) -> dict:
        freq_counter = {}
        
        for c in s:
            if c in freq_counter.keys():
                freq_counter[c] += 1
            else:
                freq_counter[c] = 1
        
        return freq_counter