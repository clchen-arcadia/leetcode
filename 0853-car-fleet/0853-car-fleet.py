class Solution:
    def carFleet(self, target: int, position: list[int], speed: list[int]) -> int:
        cars_pos_and_speed = []

        for i in range(len(position)):
            cars_pos_and_speed.append(
                (position[i], speed[i])
            )

        cars_pos_and_speed.sort(key=lambda x: -1 * x[0])
        fleet_arrival_times = []

        # print("cars_post_and_speed is", cars_pos_and_speed)

        for (curr_pos, curr_speed) in cars_pos_and_speed:
            curr_time_of_arrival = (target - curr_pos) / curr_speed
            # print("curr_time_of_arrival is", curr_time_of_arrival)
            curr_fleet_time_of_arrival = (
                fleet_arrival_times[-1]
                if fleet_arrival_times
                else float('-inf')
            )
            if curr_time_of_arrival > curr_fleet_time_of_arrival:
                fleet_arrival_times.append(curr_time_of_arrival)
                # print("appended to fleet_arrival_times")
            else:  # curr_time_of_arrival >= curr_fleet_time_of_arrival
                # print("not appended to fleet_arrival_times")
                continue

        return len(fleet_arrival_times)