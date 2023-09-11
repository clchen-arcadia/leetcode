from collections import defaultdict

class Solution:
    def groupThePeople(self, groupSizes: list[int]) -> list[list[int]]:
        size_to_indices = defaultdict(list)

        for idx, group_size in enumerate(groupSizes):
            size_to_indices[group_size].append(idx)

        output = []

        for group_size in size_to_indices:
            indices = size_to_indices[group_size]
            if group_size == len(indices):
                output.append(indices)
            else:
                i = 0
                while i < len(indices):
                    output.append(indices[i: i + group_size])
                    i += group_size

        return output
