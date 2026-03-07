</thinking>
# Leave Request Form - Help Guide

## Purpose
The Leave Request Form is used for employees to submit leave requests to their managers. This form collects information such as employee details, leave type, duration, start and end times, and comments. 

## How To Complete This Form
- Fill in your employee name
- Provide your employee ID (if applicable)
- Enter your manager's name
- Choose the type of leave you are requesting (e.g., Leave, Holiday, Other)
- Select the duration of your leave in hours
- Choose the format for your leave start time (12h or 24h)
- Choose the format for your leave end time (12h or 24h)
- Add any additional comments you'd like to include in your request

## Field-by-Field Explanation
- **Employee Name** (`employee_name`, text, optional): Enter your name as it appears on your employee ID card.
- **Employee ID** (`employee_id`, number, optional): If you have an employee ID, please enter it here.
- **Manager Name** (`manager_name`, text, optional): Enter the name of your direct manager.
- **Start Date** (`start_date`, date, optional): The date you would like to start your leave.
- **End Date** (`end_date`, date, optional): The date you would like to end your leave.
- **Reason** (`reason`, text, optional): Briefly explain the reason for your leave request.
- **Leave Start Time** (`leave_start_time`, time, optional): Enter the time you would like to start your leave in the selected format (12h or 24h).
- **Leave End Time** (`leave_end_time`, time, optional): Enter the time you would like to end your leave in the selected format (12h or 24h).
- **Leave Type** (`leave_type`, select_one, required): Choose the type of leave you are requesting (e.g., Leave, Holiday, Other).
- **Duration (hours)** (`duration_hours`, select_multiple, optional): Select the number of hours for your leave.
- **Start Location** (`start_location`, text, optional): Enter the location where you will be starting your leave from.
- **End Location** (`end_location`, text, optional): Enter the location where you will be ending your leave.
- **Leave Start Time Format** (`leave_start_time_format`, select_one, required): Choose the format for your leave start time (12h or 24h).
- **Leave End Time Format** (`leave_end_time_format`, select_one, required): Choose the format for your leave end time (12h or 24h).
- **Comments** (`comments`, text, optional): Add any additional comments about your leave request.
