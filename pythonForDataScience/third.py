# from ast import Slice

import numpy as np

a = np.array([2])
b = np.array([[[1,2,3],[4,5,6]],[[7,8,9],[10,11,12]]])

# print(a.ndim)
# print(b.ndim)

# print(b[0][0][-1])

arr = np.array([[1,2,3,4,5], [6,7,8,9,10]])
# print('2nd element on 1st row: ', arr[0,1])

# Access the third element of the second array of the first array:
import numpy as np
arr = np.array([[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]])
# print(arr[0][1][2])
# print(arr[0, 1, 2])

# Slice elements from index 1 to index 5 from the following array:
arr = np.array([1, 2, 3, 4, 5, 6, 7])
# print(arr[1:5])

arr = np.array([1, 2, 3, 4, 5, 6, 7])
# print(arr[4:])

arr = np.array([1, 2, 3, 4, 5, 6, 7])
# print(arr[:4])

arr = np.array([1, 2, 3, 4, 5, 6, 7])
# print(arr[-3:-1])

arr = np.array([1, 2, 3, 4, 5, 6, 7])
# print(arr[1:5:2])
# print(arr[::2])

# Shape:
import numpy as np
arr = np.array([[1, 2, 3, 4], [5, 6, 7, 8]])
# print(arr.shape)


arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
newarr = arr.reshape(4, 3) #(4 rows, 3 columns)
# print(newarr)


# arr = np.array([1, 2, 3])
# for x in arr:
#     print(x)
    

# arr1 = np.array([[1, 2, 3], [4, 5, 6]])
# for x in arr1:
#     print(x)

# arr = np.array([[1, 2, 3], [4, 5, 6]])
# for x in arr:
#     print(x)
#     for y in x:
#         print(y)


# arr = np.array([[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]])
# for x in arr:
#     for y in x:
#         for z in y:
#             print(z)


# JOINING NUMPY ARRAYS
arr1 = np.array([1, 2, 3])
arr2 = np.array([4, 5, 6])
arr3 = np.concatenate((arr1,arr2))
# print(arr3)

arr1 = np.array([[1, 2], [3, 4]])
arr2 = np.array([[5, 6], [7, 8]])
arr = np.concatenate((arr1, arr2),axis=0)
arr3 = np.concatenate((arr1, arr2),axis=1)
# print(arr)
# print(arr3)

arr = np.array([1, 2, 3, 4, 5, 6])
newarr = np.array_split(arr, 3)
# print(newarr)

arr = np.array([1, 2, 3, 4, 5, 6])
newarr = np.array_split(arr, 3)
# print(newarr)
# print(newarr[1])
# print(newarr[2])


# Array Search
arr = np.array([1, 2, 3, 4, 5, 4, 4])
x = np.where(arr == 4)
# print(x)

arr = np.array([6, 7, 8, 9])
x = np.searchsorted(arr, 10)
# print(x)

# Array Sorting
arr = np.array(['banana', 'cherry', 'apple'])
# print(np.sort(arr))

arr = np.array([True, False, True])
# print(np.sort(arr))

arr1 = np.array([10, 11, 12, 13, 14, 15])
arr2 = np.array([20, 21, 22, 23, 24, 25])
newarr = np.minimum(arr1[0:5], arr2[1:6])
# print(newarr)


def add_Numbers(a,b):
    return a+b

# print(add_Numbers([1,2,3],[4,5,6]))

arr1 = np.array([1, 2, 3, 4])
arr2 = np.array([5, 6, 7, 8])
def myadd(x, y):
    return x+y
newFun = np.frompyfunc(myadd, 2, 1)
# print(newFun(arr1, arr2))


# Pandas Series

import pandas as pd
a = [1, 7, 2]
myvar = pd.Series(a)
# print(myvar[0])

a = [1, 7, 2]
myvar = pd.Series(a, index = ["x", "y", "z"])
# print(myvar)

# Load the CSV into a DataFrame:

df = pd.read_csv('data.csv')
print(df.to_string())