# Employee Time Clock Check In/Check Out Log - Help Guide
## Purpose
The Employee Time Clock Check In/Check Out Log is a form used to record employee time clock check in and check out information, providing a concise and organized way to track employee attendance and hours worked.

## How To Complete This Form
1. Select "Check In" to indicate the start of your shift.
2. Enter your Clock In Time, which is the time you started working.
3. Select "Check Out" to indicate the end of your shift.
4. Enter your Clock Out Time, which is the time you finished working.
5. Enter the Date, which is the date you worked.
6. Optionally, provide your User Name and Employee ID for identification purposes.
7. Indicate if your Shift Length is within the expected timeframe.
8. Indicate if you worked Overtime Hours.
9. Leave any Comments regarding your shift or work hours.

## Field-by-Field Explanation
* **Check In** (`user_check_in`, select_one, required/optional): Select this option to indicate the start of your shift.
* **Clock In Time** (`clock_in_time`, time, optional): Enter the time you started working.
* **Check Out** (`user_check_out`, select_one, optional): Select this option to indicate the end of your shift.
* **Clock Out Time** (`clock_out_time`, time, optional): Enter the time you finished working.
* **Date** (`date`, date, optional): Enter the date you worked.
* **User Name** (`user_name`, text, optional): Optionally provide your name for identification purposes.
* **Employee ID** (`employee_id`, text, optional): Optionally provide your employee ID for identification purposes.
* **Shift Length** (`shift_length`, select_one, optional): Indicate if your shift length is within the expected timeframe.
* **Overtime Hours** (`overtime_hours`, select_one, optional): Indicate if you worked overtime hours.
* **Comments** (`comments`, note, optional): Leave any comments regarding your shift or work hours.
