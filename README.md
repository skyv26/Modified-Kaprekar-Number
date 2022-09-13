# Modified-Kaprekar-Number

> In mathematics, a Kaprekar number for a given base is a non-negative integer, the representation of whose square in that base can be split into two parts that add up to the original number again. For instance, 45 is a Kaprekar number, because 45² = 2025 and 20+25 = 45.

## Explanation

A modified Kaprekar number is a positive whole number with a special property. If you square it, then split the number into two integers and sum those integers, you have the same value you started with.

Consider a positive whole number  with  digits. We square  to arrive at a number that is either  digits long or  digits long. Split the string representation of the square into two parts,  and . The right hand part,  must be  digits long. The left is the remaining substring. Convert those two substrings back to integers, add them and see if you get .

Function Description

Complete the kaprekarNumbers function in the editor below.

**kaprekarNumbers has the following parameter(s):**

 - int p: the lower limit
 - int q: the upper limit

**Prints**

It should print the list of modified Kaprekar numbers, space-separated on one line and in ascending order. If no modified Kaprekar numbers exist in the given range, print `INVALID RANGE`. No return value is required.


**Input Format**

The first line contains the lower integer limit *p*.
The second line contains the upper integer limit *q*.

**Note:** Your range should be inclusive of the limits.