<thinking>
This help guide is for the internal use of employees who need to fill out the "Financial Statement Form". This guide is to ensure a proper understanding of the form's purpose, how to complete it, and what each field means. 
</thinking>

# Financial Statement Form - Help Guide
## Purpose
The Financial Statement Form is a document that provides a structured way to submit financial reports. It is intended to collect information about a financial report, including the category, description, date, and other relevant details. This form helps to ensure that financial reports are accurately and consistently recorded.

## How To Complete This Form
To complete this form, follow these steps:
1. Select the category of the financial report from the drop-down list.
2. Provide a brief description of the report in the "Description" field.
3. Enter the date the report was created in the "Date" field.
4. If applicable, enter the time the report was created in the "Time" field.
5. Choose how you want to submit the report: "Submit", "Print", or "Email".
6. If you want to receive an email notification, enter your email address in the "Email" field.
7. If you want to print the report, select "Print" from the "Submit" options.
8. Finally, provide your phone number in the "Phone" field if applicable.

## Field-by-Field Explanation
- **Financial Statement** (`financial_statement_form`, text, required: false): Enter a brief description of the report.
- **Category** (`category`, select_multiple, required: false): Select the category of the financial report.
  - This field is for selecting the type of report (e.g., Accountant Forms, Other).
- **Description** (`description`, text, required: false): Describe the financial report in detail.
  - This field is for providing context for the report.
- **Date** (`date`, date, required: false): Enter the date the report was created.
  - This field is for recording the date of the report.
- **Time** (`time`, time, required: false): Enter the time the report was created.
  - This field is for recording the time of the report.
- **Submit** (`submit_button`, select_one, required: false): Choose how to submit the report: "Submit", "Print", or "Email".
  - This field determines the action to take with the report.
- **Email** (`email`, email, required: false): Enter your email address if you want to receive a notification.
  - This field is for entering your email address to receive a notification.
- **Phone** (`phone`, text, required: false): Enter your phone number if applicable.
  - This field is for recording your phone number.
- **Print Report** (`print_report`, select_one, required: false): Choose to print or email the report.
  - This field is for choosing how to receive the report.
