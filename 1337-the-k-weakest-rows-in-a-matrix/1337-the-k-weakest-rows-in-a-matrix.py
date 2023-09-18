class Solution:
    def kWeakestRows(self, mat: List[List[int]], k: int) -> List[int]:
        counts_t = []

        for row_idx, row in enumerate(mat):
            count = 0
            for elem in row:
                if elem == 1:
                    count += 1
                else:
                    break
            counts_t.append((count, row_idx))

        counts_t.sort(key=lambda x: x[0])

        sorted_indices = [x[1] for x in counts_t]

        return sorted_indices[:k]
