class Solution:
    def bestClosingTime(self, customers: str) -> int:
        curr_penalty = 0

        # compute penalty for closed all day
        for closed_hour in range(len(customers)):
            if customers[closed_hour] == 'Y':
                curr_penalty += 1

        min_penalty_t = (0, curr_penalty) # hour, penalty

        # iterate once, "opening" each next hour
        for open_hour in range(len(customers)):
            if customers[open_hour] == 'Y':
                curr_penalty -= 1
            elif customers[open_hour] == 'N':
                curr_penalty += 1
            if curr_penalty < min_penalty_t[1]:
                min_penalty_t = (open_hour + 1, curr_penalty)

        return min_penalty_t[0]
