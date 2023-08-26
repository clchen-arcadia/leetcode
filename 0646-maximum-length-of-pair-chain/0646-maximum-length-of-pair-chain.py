class Solution:
    def findLongestChain(self, pairs: list[list[int]]) -> int:


        count = 0
        curr_chain = []

        is_progress = True


        while is_progress:
            is_progress = False

            curr_bound = curr_chain[-1][1] if curr_chain else float('-inf')
            curr_best_pair = [None, float("inf")]

            for pair in pairs:
                if pair[0] > curr_bound:
                    if pair[1] < curr_best_pair[1]:
                        curr_best_pair = pair

            if curr_best_pair[0] is not None:
                is_progress = True
                curr_chain.append(curr_best_pair)
                count += 1

        return count
