class Solution:
    def topKFrequent(self, nums: list[int], k: int) -> list[int]:
        freq_count = {}

        for num in nums:
            freq_count[num] = 1 + freq_count.get(num, 0)

        buckets = [[] for i in range(len(nums) + 1)]

        for num, count in freq_count.items():
            buckets[count].append(num)

        top_k = []

        for bucket in list(reversed(buckets)):
            for num in bucket:
                top_k.append(num)
                if len(top_k) == k:
                    return top_k
