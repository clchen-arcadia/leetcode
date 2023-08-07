class Solution:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
        strs_tuples = [(str, self.get_freq_counter_t(str)) for str in strs]

        output_dict = {}

        for str_tuple in strs_tuples:
            og_str = str_tuple[0]
            str_freq_c_t = str_tuple[1]

            anagrams = output_dict.get(str_freq_c_t)
            if anagrams is None:
                output_dict[str_freq_c_t] = [og_str]
            else:
                anagrams.append(og_str)

        return list(output_dict.values())

    def get_freq_counter_t(self, str):
        """
        Assumes strings composed of only lowercase a-z
        """
        freq_counter = [0] * 26

        for char in str:
            freq_counter[ord(char) - ord('a')] += 1

        return tuple(freq_counter)
