class Solution:
    def reversePrefix(self, word: str, ch: str) -> str:
        first_idx = None

        for idx in range(len(word)):
            if word[idx] == ch:
                first_idx = idx
                break

        if first_idx is None:
            return word

        else:
            return word[0: first_idx + 1][::-1] + word[first_idx + 1:]
