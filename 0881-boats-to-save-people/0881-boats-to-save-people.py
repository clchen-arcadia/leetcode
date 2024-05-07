class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        max_person = max(people)
        buckets_people = [0] * (max_person + 1)

        for weight in people:
            buckets_people[weight] += 1

        count = 0

        left, right = 0, len(buckets_people) - 1

        while left <= right:
            if buckets_people[left] <= 0:
                left += 1
                continue
            if buckets_people[right] <= 0:
                right -= 1
                continue

            if right + left > limit:
                buckets_people[right] -= 1
                count += 1
            else:
                buckets_people[right] -= 1
                buckets_people[left] -= 1
                count += 1

        return count
