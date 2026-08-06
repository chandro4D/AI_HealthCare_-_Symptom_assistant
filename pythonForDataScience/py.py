# input_number = int(input("Enter a number:"))
# all_Divisors = []
# for i in range(1, input_number + 1):
#     if input_number % i == 0:
#         all_Divisors.append(i)
#     else:
#        continue
# print("All divisors of", input_number, "are:", all_Divisors)


import numpy as np
def myadd(x, y):
    return x+y
myadd = np.frompyfunc(myadd, 2, 1)
print(myadd([1, 2, 3, 4], [5, 6, 7, 8]))



# for x in range(2, 30, 3):
#     print(x)
# for x in range(6):
#     print(x)

# for x in range(6):
#     print(x)
# else:
#     print("Finally finished!")


# import numpy as np
# arr = np.array([[1, 2, 3, 4], [5, 6, 7, 8]])
# print(arr.shape)
# import numpy as np
# arr = np.array([6, 7, 8, 9])
# x = np.searchsorted(arr, 10)
# print(x)

### Question 1

# Write a Python program to determine whether a given number is positive, negative, or zero.

# ---

# ### Question 2

# Write a Python program to determine whether a given number is even or odd.

# ---

# ### Question 3

# Write a Python program to find the larger of two given numbers using an `if-else` statement.

# ---

# ### Question 4

# Write a Python program to find the largest among three given numbers using nested `if` statements.

# ---

# ### Question 5

# Write a Python program to determine whether a student has passed or failed based on the obtained marks. Consider the passing mark as 40.

# ---

# ### Question 6

# Write a Python program to assign grades according to the following criteria:

# * A: 80–100
# * B: 70–79
# * C: 60–69
# * D: 50–59
# * F: Below 50

# Use an `if-elif-else` statement.

# ---

# ### Question 7

# Write a Python program using `match-case` to display the name of a weekday according to the given day number (1–7).

# ---

# ### Question 8

# Write a Python program using `match-case` to perform a simple calculator operation (`+`, `-`, `*`, `/`).

# ---

# ### Question 9

# Write a Python program using `match-case` to display the corresponding month name based on a month number (1–12).

# ---

# ### Question 10

# Write a Python program to print all numbers from 1 to 20 using a `while` loop.

# ---

# ### Question 11

# Write a Python program to print all even numbers between 1 and 50 using a `while` loop.

# ---

# ### Question 12

# Write a Python program to calculate the sum of the first 100 natural numbers using a `while` loop.

# ---

# ### Question 13

# Write a Python program to print the multiplication table of a given number using a `while` loop.

# ---

# ### Question 14

# Write a Python program to print numbers from 1 to 20, but stop the loop when the number becomes 12 using the `break` statement.

# ---

# ### Question 15

# Write a Python program to print numbers from 1 to 20, skipping all multiples of 3 using the `continue` statement.

# ---

# ### Question 16

# Write a Python program to print all elements of a given list using a `for` loop.

# ---

# ### Question 17

# Write a Python program to print each character of a given string using a `for` loop.

# ---

# ### Question 18

# Write a Python program to print all numbers from 1 to 50 using the `range()` function.

# ---

# ### Question 19

# Write a Python program to print all even numbers from 2 to 100 using the `range()` function.

# ---

# ### Question 20

# Write a Python program to print every third number between 3 and 30 using the `range()` function.

# ---

# ### Question 21

# Write a Python program to print the square of each number from 1 to 10 using a `for` loop.

# ---

# ### Question 22

# Write a Python program to calculate the sum of all elements in a given list.

# ---

# ### Question 23

# Write a Python program to count how many even numbers are present in a given list.

# ---

# ### Question 24

# Write a Python program to create a new list containing only the odd numbers from a given list.

# ---

# ### Question 25

# Write a Python program to create a new list containing only the positive numbers from a given list.

# ---

# ### Question 26

# Write a Python program to find the largest element in a given list.

# ---

# ### Question 27

# Write a Python program to find the smallest element in a given list.

# ---

# ### Question 28

# Write a Python program to calculate the average of all elements in a given list.

# ---

# ### Question 29

# Write a Python program to search for a given number in a list using a `for-else` loop.

# ---

# ### Question 30

# Write a Python program to search for a given student's name in a list using a `for-else` loop.

# ---

# ### Question 31

# Write a Python function named `add()` that returns the sum of two numbers.

# ---

# ### Question 32

# Write a Python function that returns the larger of two given numbers.

# ---

# ### Question 33

# Write a Python function to determine whether a given number is even or odd.

# ---

# ### Question 34

# Write a Python function to convert a temperature from Fahrenheit to Celsius.

# ---

# ### Question 35

# Write a Python function to convert a temperature from Celsius to Fahrenheit.

# ---

# ### Question 36

# Write a Python function to calculate the area of a rectangle.

# ---

# ### Question 37

# Write a Python function to calculate the area of a circle.

# ---

# ### Question 38

# Write a Python program to print only the numbers divisible by both 3 and 5 from 1 to 100.

# ---

# ### Question 39

# Write a Python program to count the number of vowels in a given string.

# ---

# ### Question 40

# Write a Python program to count the number of consonants in a given string.

# ---

# ### Question 41

# Write a Python program to reverse a given string using a loop.

# ---

# ### Question 42

# Write a Python program to print the first 10 multiples of a given number.

# ---

# ### Question 43

# Write a Python program to create a new list containing only numbers greater than 50 from a given list.

# ---

# ### Question 44

# Write a Python program to print all numbers between 1 and 50 except 10, 20, and 30.

# ---

# ### Question 45

# Write a Python program to print all odd numbers from 1 to 100 using a `for` loop.

# ---

# ### Question 46

# Write a Python program to print all numbers from 100 down to 1 using a `while` loop.

# ---

# ### Question 47

# Write a Python program to print all elements of a list except the element `"banana"` using the `continue` statement.

# ---

# ### Question 48

# Write a Python program to stop printing elements of a list when the element `"banana"` is found using the `break` statement.

# ---

# ### Question 49

# Write a Python program that reads a list of integers and creates another list containing only the even numbers.

# **Example:**

# Input:

# ```
# [1, 2, 3, 4, 5, 6, 7, 8]
# ```

# Output:

# ```
# [2, 4, 6, 8]
# ```

# ---

# ### Question 50

# Write a Python program that performs the following tasks:

# * Read a list of integers.
# * Create a new list containing only the even numbers.
# * Print the new list.
# * Display the total number of even numbers found.


                         # Important Problems to Practice:
# 1. Positive, Negative, or Zero
# 2. Even or Odd
# 3. Largest of Three Numbers
# 4. Grade Calculation (`if-elif-else`)
# 5. `match-case` (Weekday or Calculator)
# 6. `while` Loop (Sum of 1–100)
# 7. `break` and `continue`
# 8. Print Even Numbers using `for` and `range()`
# 9. Sum of List Elements
# 10. Largest Element in a List
# 11. Count Even Numbers in a List
# 12. Filter Even Numbers into a New List
# 13. Search an Item using `for-else`
# 14. Fahrenheit to Celsius Function
# 15. Maximum of Two Numbers using a Function

