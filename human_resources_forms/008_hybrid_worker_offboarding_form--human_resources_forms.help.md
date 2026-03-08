# Hybrid Worker Offboarding Form - Help Guide
## Purpose
The Hybrid Worker Offboarding Form is designed to document the offboarding process, particularly the return of company properties, when an employee departs from the company.

## How To Complete This Form
1. Ensure you have all the required information before starting the form.
2. Select the correct department from the options provided in the "Department" field.
3. If applicable, specify the company properties returned and their return date in the "Company Property Returns" and "Company Property Return Date" fields respectively.
4. Select the status of the company property returns in the "Company Property Return Status" field.
5. Provide feedback in the "Feedback" field if you have any comments or concerns.
6. Enter the manager's name, email, and phone number in the "Manager Name", "Manager Email", and "Manager Phone" fields respectively.
7. Add any additional comments for the manager's review in the "Manager Comments" field.
8. Ensure the "Company Property Returned" field indicates whether the employee returned company properties before submitting the form.

## Field-by-Field Explanation

* **Form Title** (`form_title`, text, required: false): Enter the offboarding form title, if you want to add a specific title to this document.
* **Employee Name** (`employee_name`, text, required: false): Enter the employee's name whose offboarding process you are documenting.
* **Department** (`department`, select_one, required: true): Select the department the employee belongs to.
* **Company Property Returns** (`company_property_returns`, text, required: false): If applicable, specify the company properties returned, including items such as laptops, phones, or any other company issued items.
* **Company Property Return Date** (`company_property_return_date`, date, required: false): If applicable, enter the date the company property was returned.
* **Company Property Return Reason** (`company_property_return_reason`, text, required: false): If applicable, specify the reason for returning the company property.
* **Feedback** (`feedback`, text, required: false): Add any comments or concerns you have about the offboarding process or company property returns.
* **Submit** (`submit`, select_one, required: true): Select this option to submit the form, indicating the offboarding process is complete.
* **Company Property** (`company_property`, select_multiple, required: false): If applicable, specify if company properties were issued to the employee during their tenure.
* **Company Property Return Status** (`company_property_return_status`, select_one, required: true): Select the status of company property returns.
* **Manager Name** (`manager_name`, text, required: false): Enter the manager's name who oversaw the offboarding process.
* **Manager Email** (`manager_email`, text, required: false): Enter the manager's email.
* **Manager Phone** (`manager_phone`, text, required: false): Enter the manager's phone number.
* **Form Comments** (`form_comments`, text, required: false): Add any comments or feedback about the form or the offboarding process.
* **Manager Comments** (`manager_comments`, text, required: false): Add comments or feedback for the manager's review.
* **Company Property Returned Date** (`company_property_returned_date`, date, required: false): If applicable, enter the date the company property was returned.
* **Manager Comments** (`manager_comments`, text, required: false): Add comments or feedback for the manager's review.
