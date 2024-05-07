class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        people_sorted = sorted(people)

        count = 0

        left, right = 0, len(people_sorted) - 1

        while left <= right:
            if left == right:
                count += 1
                left += 1
                right -= 1
                continue
            if (
                people_sorted[right] == limit
                or people_sorted[right] + people_sorted[left] > limit
            ):
                count += 1
                right -= 1
                continue
            if people_sorted[right] + people_sorted[left] <= limit:
                count += 1
                right -= 1
                left += 1
                continue
            raise Exception("should not reach this line")

        return count
