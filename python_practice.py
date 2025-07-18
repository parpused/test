# def are_you_playing_banjo(name):
#     if name[0] == "R" or name[0] == "r":
#         return name + " plays banjo"
#     else:
#         return name + " does not play banjo"

# ------------------------------------------

# def areYouPlayingBanjo(name):
    # if name[0].lower() == 'r':
    #     return name + ' plays banjo'
    # else:
    #     return name + ' does not play banjo'

# print(are_you_playing_banjo("Rikke"))

# -------------------------------------

# def logical_calc(array, op):
#     result = array[0]
#     for i in range(1,len(array)):
#         if op == 'AND':
#             result = result and array[i]
#         elif op == "OR":
#             result = result or array[i]
#         elif op == "XOR":
#             result = result != array[i]
#     return result

#     #  while i < len(array):
#     #     if op.lower() == "and":
#     #         result = array[i] & array[i+1]
#     #     elif op.lower() == "or":
#     #         result = array[i] | array[i+1]
#     #     elif op.lower() == "xor":
#     #         result = array[i] ^ array[i+1]
#     #  i += 1

#     # return result


# print(logical_calc([True, False], "AND"))

# -----------------------------------------------

# def logical_calc(array, op):
#     res = array[0]
#     for x in array[1:]:
#         if op == "AND":
#             res &= x
#         elif op == "OR":
#             res |= x
#         else:
#             res ^= x
        
#     return res #boolean

# -----------------------------------------------------

# def merge_arrays(arr1, arr2):
#     merged_arr = arr1 + arr2
#     sorted_arr = sorted(merged_arr)
#     i = 0
#     while i < len(sorted_arr) -1:
#         if sorted_arr[i] == sorted_arr[i + 1]:      
#             del sorted_arr[i]
#             i -= 1
#         else:
#             i += 1
#             continue
#     return sorted_arr

#  ---------------------------------------

# def merge_arrays(arr1, arr2):
#     return sorted(set(arr1+arr2))

# print(merge_arrays([-100, -34, 23, 25, 56, 56, 124, 213, 325,213, 325, 601],[-27, -27, -8, 5, 6, 12,601]))

# ---------------------------------------------

# def sum_mul(n, m):
#     i =0
#     result = 0
#     if m <=  0 or n <= 0  :
#         return "INVALID" 
#     else:
#         while i < m:
#             val = n*i
#             if val < m :
#                 result+=val
#                 i+=1
#             else:
#                 break
#     return result
# print(sum_mul(2, 10))

# ----------------------------------------------

# def sum_mul(n, m):
#     if m>0 and n>0:
#         return sum(range(n, m, n))
#     else:
#         return 'INVALID'

# ----------------------------------------

# def correct(s):
#     newStr =s.replace("0","O")
#     s= newStr
#     newStr = s.replace("5", "S")
#     s= newStr
#     newStr = s.replace("1", "I")
#     return newStr
        
# print(correct("L0ND0N"))

# -------------------------------------------

# def correct(string):
#     return string.translate(str.maketrans("501", "SOI"))

# -------------------------------------------