class Solution:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
        strs_tuples = [(str, ''.join(sorted(str))) for str in strs]

        anagrams_dict = {}

        for str_tuple in strs_tuples:
            og_str = str_tuple[0]
            sorted_str = str_tuple[1]
            if anagrams_dict.get(sorted_str) is None:
                anagrams_dict[sorted_str] = [og_str]
            else:
                anagrams_dict[sorted_str].append(og_str)

        return list(anagrams_dict.values())
