class Solution:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
        strs_tuples = [(str, self.get_freq_counter(str)) for str in strs]

        output_tuples = []

        for str_tuple in strs_tuples:
            og_str = str_tuple[0]
            str_freq_c = str_tuple[1]

            is_insert = False

            for output_t in output_tuples:
                template_freq_c = output_t[0]
                anagrams = output_t[1]
                if template_freq_c == str_freq_c:
                    anagrams.append(og_str)
                    is_insert = True
                    break

            if is_insert is False:
                output_tuples.append((str_freq_c, [og_str]))

        return [t[1] for t in output_tuples]

    def get_freq_counter(self, str):
        freq_counter = {}

        for char in str:
            freq_counter[char] = freq_counter.get(char, 0) + 1

        return freq_counter
