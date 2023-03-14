# Notes

This was an interesting one. I first missed the insight that I needed to keep my running list of k elements sorted by frequency count. And then I made a mistake with the sorting callback function for Array.sort().
For an array of numbers, Array.sort((a, b) => b - a) sorts high to low. As a reminder, when the sort function returns a positive value, a sorts after b, when negative, b sorts after a, and when 0, the pre existing order of a and b are preserved.  

But creating a frequency counter and then scanning it isn't the fastest approach, I want to redo this problem but utilizing a priority queue or a heap to speed up the process of "picking the k highest freq count elements".  

Edit: implemented a heap for this problem and it ran about as fast as the previous implementation, a little bit slower in fact.
But I believe it ought to scale better and have been Big O Notation.  

Using a heap should be O(N + klogN), whereas constantly sorting a near sorted list should be O(N + kNlogN).
