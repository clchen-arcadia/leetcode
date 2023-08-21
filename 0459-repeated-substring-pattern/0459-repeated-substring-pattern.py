import math

class Solution:
    def repeatedSubstringPattern(self, s: str) -> bool:
        def get_all_nontrivial_factors(num: int) -> list[int]:
            # print("asdf1")
            upper_bound = int(math.sqrt(num))
            # print(upper_bound)

            small_factors = []
            large_factors = []

            for factor in range(2, upper_bound + 1):
                # print("got here")
                if num % factor == 0:
                    # print("got here here")
                    small_factors.append(factor)
                    large_factors.append(int(num / factor))

            if num % upper_bound == 0:
                small_factors.append(upper_bound)

            # print("asdf", small_factors, large_factors)
            # print("get_nontrivial_factors returning", small_factors + list(reversed(large_factors)))

            return small_factors + list(reversed(large_factors))

        def test_factor_substring(s: str, length: int) -> bool:
            num_substrings = int(len(s) / length)
            first_slice = s[:length]

            for i in range(1, num_substrings):
                if first_slice != s[i * length : i * length + length]:
                    return False

            return True

        if len(s) <= 1:
            return False

        test_factors = [1] + get_all_nontrivial_factors(len(s))

        # print("test_factors is", test_factors)

        for factor in test_factors:
            if test_factor_substring(s, factor) is True:
                # print("true on", factor)
                return True
            # print("false on ", factor)

        return False