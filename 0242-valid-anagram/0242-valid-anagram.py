class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        freq_counter = {}

        for char in s:
            freq_counter[char] = freq_counter.get(char, 0) + 1

        for char in t:
            if freq_counter.get(char, 0) == 0:
                return False
            else:
                freq_counter[char] -= 1
                if freq_counter[char] == 0:
                    del freq_counter[char]

        return len(freq_counter) == 0
