# Solving problems: Calculating birthdays using Calendar dates.
# 1. What are the inputs?
# Inputs: two dates
#     What is the set of valid inputs?
#         second date must not be before first date. Use defensive programming,
#         make sure two inputs meet a criteria.
#     Use the Gregorian Calendar (15 Oct 1582)
#     How are the inputs represented?
#     def daysBetweenDates(year1, month1, day1, year2, month2, day2):
# 2. What are the outputs?
# 3. Solve problems

def leapYear(year):
    # Pseudo code below is from wikipedia
    # if (year is not divisible by 4) then (it is a common year)
    # else if (year is not divisible by 100) then (it is a leap year)
    # else if (year is not divisible by 400) then (it is a common year)
    # else (it is a leap year)
    if year % 4 == 0:
        return True
    elif year % 100 != 0:
        return True
    elif year % 400:
        return True
    else:
        return True
