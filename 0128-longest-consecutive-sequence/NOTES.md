# Notes

The main issue with this problem was achieving O(N) time complexity. It quickly occured to me that you could sort the list and then scan the list once, keeping track of the longest continuous sequence. But that would be O(NlogN) time.  

I tried a bucket sort that would be in O(N) time, and I could still scan it for the longest sequence, but certain test cases made this prohibitively inefficient as you could arbitrarily space out the numbers very far apart.  

So you have to get to, say it with me, a HashSet. Using a hash set is pretty clever here, and in most other situations because it has constant lookup times and takes care of repeat elements, which we don't care about. But the key insight to speeding up THIS approach is this: it's easy to build the sequence forward by checking is (num + 1) is in the set, but it's more important to check, does (num - 1) appear in the set? In this case, it would build a longer sequence to start from THAT number, so don't bother trying to build the sequnce for now. 
