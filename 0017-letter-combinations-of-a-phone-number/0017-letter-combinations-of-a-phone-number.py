class Solution:
    def letterCombinations(self, digits: str) -> list[str]:
        if digits == '':
            return []

        letters_num_map = {
            '2': ['a', 'b', 'c'],
            '3': ['d', 'e', 'f'],
            '4': ['g', 'h', 'i'],
            '5': ['j', 'k', 'l'],
            '6': ['m', 'n', 'o'],
            '7': ['p', 'q', 'r', 's'],
            '8': ['t', 'u', 'v'],
            '9': ['w', 'x', 'y', 'z'],
        }

        perm_states_tuples = []

        for digit in digits:
            perm_states_tuples.append([letters_num_map[digit], 0])

        permutations = []
        permutations.append(self.generate_permutation(perm_states_tuples))

        while True:
            self.increment_states_tuples(perm_states_tuples)
            permutations.append(self.generate_permutation(perm_states_tuples))
            if self.is_last_perm_state(perm_states_tuples):
                break


        return permutations

    def generate_permutation(self, perm_states_tuples) -> str:
        output = ''
        for state_tuple in perm_states_tuples:
            output += state_tuple[0][state_tuple[1]]
        return output

    def increment_states_tuples(self, perm_states_tuples):
        for i in reversed(range(len(perm_states_tuples))):
            elem = perm_states_tuples[i]
            if elem[1] == len(elem[0]) - 1:
                perm_states_tuples[i][1] = 0
                continue
            else:
                perm_states_tuples[i][1] += 1
                break

    def is_last_perm_state(self, perm_states_tuples):
        for i in range(len(perm_states_tuples)):
            if perm_states_tuples[i][1] != len(perm_states_tuples[i][0]) - 1:
                return False

        return True
