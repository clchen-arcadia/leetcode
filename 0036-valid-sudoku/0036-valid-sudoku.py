class Solution:
    def isValidSudoku(self, board: list[list[str]]) -> bool:
        rows_seen = collections.defaultdict(set)
        cols_seen = collections.defaultdict(set)
        squares_seen = collections.defaultdict(set)

        for i in range(9):
            for j in range(9):
                if board[i][j] == '.':
                    continue

                num = board[i][j]

                if (
                    num in rows_seen[i]
                    or num in cols_seen[j]
                    or num in squares_seen[(i // 3, j // 3)]
                ):
                    return False

                rows_seen[i].add(num)
                cols_seen[j].add(num)
                squares_seen[(i // 3, j // 3)].add(num)

        return True
