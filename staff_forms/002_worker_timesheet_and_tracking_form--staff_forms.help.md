# Worker Timesheet And Tracking Form - Help Guide
## Purpose
The Worker Timesheet And Tracking Form is used for tracking a worker's hours worked during a shift. This form helps in accurately logging in and clock out times, break durations, and other relevant details.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the time you clocked in using the "clock_in_page" field. Please choose from the available options.
2. Select the time you clocked out using the "clock_out_page" field. Again, choose from the provided options.
3. If you took a lunch break, enter the start and end times of your break using the "lunch_break_start" and "lunch_break_end" fields, respectively.
4. Enter the total number of hours you worked using the "total_hours_worked" field.
5. Add any additional notes or comments about your shift in the "notes" field.
6. Enter your work email address and phone number for contact purposes.

## Field-by-Field Explanation
### clock_in_page
* **clock_in_page** (`clock_in_page`, select_one, required/optional): This field allows you to select the time you clocked in.
*   Choose the time you started work from the provided options.

### clock_out_page
* **clock_out_page** (`clock_out_page`, select_one, required/optional): This field allows you to select the time you clocked out.
*   Choose the time you finished work from the provided options.

### lunch_break_start
* **lunch_break_start** (`lunch_break_start`, time, required/optional): This field is for entering the start time of your lunch break.
*   Enter the time you started your lunch break.

### lunch_break_end
* **lunch_break_end** (`lunch_break_end`, time, required/optional): This field is for entering the end time of your lunch break.
*   Enter the time you finished your lunch break.

### total_hours_worked
* **total_hours_worked** (`total_hours_worked`, number, required/optional): This field is for entering the total hours worked during the shift.
*   Enter the total number of hours worked.

### notes
* **notes** (`notes`, note, required/optional): This field is for adding any additional notes or comments about your shift.
*   Enter any relevant notes or comments.

### email
* **email** (`email`, email, required/optional): This field is for entering your work email address.
*   Enter your work email address.

### phone
* **phone** (`phone`, text, required/optional): This field is for entering your work phone number.
*   Enter your work phone number.

**Tips**

* Please ensure that you complete this form accurately to avoid any discrepancies in hours worked.
* If you have any issues or concerns, please reach out to your supervisor or HR representative.
* This form is for your personal use, and your details will not be shared with anyone else.
