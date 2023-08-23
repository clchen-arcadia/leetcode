class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        num = columnNumber
        res = ''

        while num:
            modulo = (num - 1) % 26
            char_num = modulo + 65

            res += chr(char_num)
            num = (num - 1) // 26

        return ''.join(reversed(res))
