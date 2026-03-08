<thinking>
This form seems to be designed to collect information about a problem or issue related to an employee's experience with a product. The form's title suggests that it is intended for internal use within an organization, possibly for tracking and reporting employee-submitted product issues. The form's fields cover various aspects of the issue, including the product in question, its description, image, and associated employee information. However, some fields appear to have similar labels, such as "Reported By" fields. The form's purpose and use case should be clarified to avoid confusion. For example, if this form is used for employee feedback on products they have used, one "Reported By" field could be used for the employee's name and the other for their email. To ensure clarity, it would be beneficial to review the form's purpose and use case to ensure that the labels accurately reflect the expected input. This form is likely used to collect data for reporting and analysis within the organization. To prevent data duplication, it would be best to ensure that the form is not used for redundant purposes.

# NCR Employee Product Reporting Tool - Help Guide
## Purpose
The purpose of this form is to collect information about problems or issues associated with products used by employees. This form is used to track and report employee-submitted product issues.

## How To Complete This Form
To complete this form, follow these steps:

1. Start by selecting the "Employee Product Reporting Form" page.
2. Fill in the "Reported Product" field with the name of the product that is causing the issue.
3. Provide a brief description of the product and the specific problem you are experiencing in the "Product Description" field.
4. If applicable, provide a URL for the product's image in the "Product Image URL" field.
5. Enter your name in the "Reporting Employee" field.
6. Describe the issue you are reporting in the "Product Problem" field.
7. Identify who received the issue in the "Issue Recipient" field.
8. Provide a detailed description of the issue in the "Issue Description" field.
9. Enter the date you reported the issue in the "Report Date" field.
10. Select the current status of the issue from the "Issue Status" dropdown menu.
11. Enter the employee's name in the "Reported By" field.
12. (Optional) Select a status for the product from the "Product Status" field.
13. (Optional) Select a priority level for the issue from the "Issue Priority" field.
14. (Optional) Enter the date of resolution for the issue in the "Issue Resolution Date" field.

## Field-by-Field Explanation

* **Employee Product Reporting Form** (`employee_product_reporting_form`, text, required): This is the first page of the form. Select this option to begin the reporting process.
* **Reported Product** (`reported_product`, text, required): Enter the name of the product that is causing the issue.
* **Product Description** (`product_description`, text, required): Provide a brief description of the product and the specific problem you are experiencing.
* **Product Image URL** (`product_image_url`, text, required): If applicable, provide a URL for the product's image.
* **Reporting Employee** (`reporting_employee`, text, required): Enter your name.
* **Product Problem** (`product_problem`, text, required): Describe the issue you are reporting.
* **Issue Recipient** (`issue_recipient`, text, required): Identify who received the issue.
* **Issue Description** (`issue_description`, text, required): Provide a detailed description of the issue.
* **Report Date** (`report_date`, date, required): Enter the date you reported the issue.
* **Issue Status** (`issue_status`, select_one, required): Select the current status of the issue from the dropdown menu:
	+ Open
	+ Pending
	+ Resolved
	+ Reopened
	+ Closed
* **Reported By** (`reported_by`, email, required): Enter your email.
* **Report Date** (`report_date`, date, optional): (Optional) Enter the date you reported the issue.
* **Reported By** (`reported_by_who`, text, optional): (Optional) Enter your name again.
* **Issue Type** (`issue_type`, text, optional): (Optional) Select a type for the issue.
* **Product Status** (`product_status`, text, optional): (Optional) Select a status for the product.
* **Issue Priority** (`issue_priority`, text, optional): (Optional) Select a priority level for the issue.
* **Issue Resolution Date** (`issue_resolution_date`, date, optional): (Optional) Enter the date of resolution for the issue.
