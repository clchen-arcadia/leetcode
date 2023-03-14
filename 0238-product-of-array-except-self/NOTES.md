# Notes

This was an interesting one. It was mostly difficult in its constraints. Because I quickly got to a fast linear time, constant space approach that used the division operator, but without that, it was clear you would need to "build up" the correct product for many different "combos" of numbers. There's immediately a N^2 time approach comes to mind when you scan the list for every index. But eventually to get to this clever solution that scans the list only twice—-bringing the left numbers into each index, and then brining the right numbers into each index, very efficient and clever!
