# weekly_sales_report_form - Help Guide
## Purpose
The "weekly_sales_report_form" is used to report sales data for weekly sales periods.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter the weekly sales period.
2. Select the sales channels and regions that apply.
3. Enter the sales amount and any additional comments in the "notes" field.
4. Select the sales manager responsible for the sales.
5. Enter the date and time of the sales (if applicable).
6. Enter the sales contact email and phone number (if applicable).

## Field-by-Field Explanation
* **weekly_sales_period** (`week`, number, required: false):
This field is used to enter the weekly sales period.
* **sales_amount** (`sales_amount`, number, required: false):
Enter the total sales amount for the period.
* **sales_channel** (`sales_channel`, select_multiple, required: true):
Select all the sales channels that applied during the sales period. The options are:
	+ Option 1
	+ Option 2
	+ Option 3
* **sales_region** (`sales_region`, select_one, required: true):
Select the sales region for the sales period.
* **notes** (`notes`, note, required: false):
Enter any additional comments or notes about the sales period.
* **sales_manager** (`sales_manager`, select_one, required: true):
Select the sales manager responsible for the sales period. The options are:
	+ Option 1
	+ Option 2
	+ Option 3
* **date** (`date`, date, required: false):
Enter the date of the sales (if applicable).
* **time** (`time`, time, required: false):
Enter the time of the sales (if applicable).
* **sales_email** (`sales_email`, email, required: false):
Enter the sales contact email.
* **sales_phone** (`sales_phone`, text, required: false):
Enter the sales contact phone number.

## Tips
- Make sure to fill out all required fields before submitting the form.
- Double-check the entered data for accuracy before submitting.
- If you have any questions or concerns about filling out this form, please reach out to your supervisor or support team.
