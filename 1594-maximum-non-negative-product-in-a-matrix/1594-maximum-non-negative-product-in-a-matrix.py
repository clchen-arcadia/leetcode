class Solution:
    def maxProductPath(self, grid: List[List[int]]) -> int:
        height = len(grid)
        width = len(grid[0])

        @lru_cache
        def _maxProductPath(y, x):
            """Returns (max_prod, min_prod) possible for a path terminating at coord x, y"""

            if y == 0 and x == 0: return grid[0][0], grid[0][0]
            if y < 0 or x < 0: return float("-inf"), float("inf")
            if grid[y][x] == 0: return 0, 0
            max_1, min_1 = _maxProductPath(y - 1, x)
            max_2, min_2 = _maxProductPath(y, x - 1)
            curr_max, curr_min = max(max_1, max_2) * grid[y][x], min(min_1, min_2) * grid[y][x]
            return (curr_max, curr_min) if grid[y][x] > 0 else (curr_min, curr_max)

        max_prod, _ = _maxProductPath(height - 1, width - 1)

        return max_prod % 1_000_000_007 if max_prod >= 0 else -1
