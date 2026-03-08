# Simple Time Sheet Form - Help Guide
## Purpose
The Simple Time Sheet Form is designed to collect employee time sheet information, including employee name, working hours, and other relevant details. This form aims to provide a quick and easy way to track work hours and notes.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your **Employee Name** in the first field. This is the name of the person submitting the time sheet.
2. Select the **Date** you worked in the calendar input field.
3. Enter your **Start Time** and **End Time** in the respective time input fields.
4. Enter the total **Hours Worked** for the day.
5. If applicable, add a brief **Work Description** in the text field to describe your work activities.
6. Select the appropriate **Name** from the dropdown menu in the **Select Name** field. This field is likely a test or dummy field.
7. Add any comments or notes in the **Comments** field, which is optional.
8. In the **Multi Select Name** field, select all applicable options that apply. This is another test or dummy field.
9. If you have any email address, enter it in the **Email** field, which is optional.
10. Add any additional notes or comments in the **Note** field, which is also optional.
11. If applicable, enter a value in the **Numeric Field**, which is likely a test field.
12. Select a date in the **Date Field**, which is another test field.
13. Enter a time in the **Time Field**, which is another test field.
14. Select **Yes/No** options in the **Yes/No Select** field, which is optional.
15. Select multiple options in the **Multi Yes/No Select** field, which is also optional.
16. Enter a value in the **Numeric Field 2**, which is another test field.
17. Enter a time in the **Time Field 2**, which is another test field.

## Field-by-Field Explanation
* **Employee Name** (`employee_name`, text, required): Enter your name as it appears on your employee ID or badge.
* **Date** (`date`, date, required): Select the date you worked using the calendar input field.
* **Start Time** (`start_time`, time, required): Enter the start time of your workday.
* **End Time** (`end_time`, time, required): Enter the end time of your workday.
* **Hours Worked** (`hours_worked`, number, required): Enter the total hours you worked.
* **Work Description** (`work_description`, text, optional): Add a brief description of your work activities, if applicable.
* **Select Name** (`select_name`, select_one, required): Select the name of the person you worked with or the task you completed.
* **Comments** (`comments`, note, optional): Add any comments or notes about your workday.
* **Multi Select Name** (`multi_select_name`, select_multiple, optional): Select all applicable options that apply. (This field is likely another test or dummy field.)
* **Email** (`email`, email, optional): Enter your email address, if applicable.
* **Note** (`note`, text, optional): Add any additional notes or comments.
* **Numeric Field** (`numeric_field`, number, optional): Enter a value, which is likely a test field.
* **Date Field** (`date_field`, date, optional): Select a date, which is another test field.
* **Time Field** (`time_field`, time, optional): Enter a time, which is another test field.
* **Yes/No Select** (`yes_no_select`, select_one, optional): Select **Yes** or **No** options.
* **Multi Yes/No Select** (`multi_yes_no_select`, select_multiple, optional): Select multiple options, which is also optional.
* **Numeric Field 2** (`numeric_field_2`, number, optional): Enter a value, which is another test field.
* **Time Field 2** (`time_field_2`, time, optional): Enter a time, which is another test field.
