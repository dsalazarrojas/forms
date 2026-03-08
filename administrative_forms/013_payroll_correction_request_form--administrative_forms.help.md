# Payroll Correction Request Form - Help Guide
## Purpose
This form is used to request corrections to employee pay, ensuring accuracy and transparency in payroll processing.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the employee's ID number.
2. Select the date the error occurred.
3. Specify if the error affects the current pay cycle.
4. Choose the type of error.
5. Add a description of the error.
6. If necessary, upload supporting documents or evidence.
7. Choose the person submitting the request.
8. Enter your contact information (email, phone, department, job title).
9. If the correction affects pay in a specific currency, specify that.
10. Specify the amount of the pay adjustment.

## Field-by-Field Explanation

* **Employee ID** (`employee_id`, Number, required): Enter the employee's unique ID number.
* **Error Date** (`error_date`, Date, required): Enter the date the error occurred.
* **Pay Cycle** (`pay_cycle`, Select, required): Choose if the error affects the current pay cycle.
* **Error Type** (`error_type`, Select, required): Choose the type of error.
* **Description** (`description`, Text, optional): Add a detailed description of the error.
* **Attachment** (`attachment`, Attachment, optional): If necessary, upload supporting documents or evidence related to the error.
* **Submitter** (`submitter`, Select, optional): Choose the person submitting the request.
* **Submitter Email** (`submitter_email`, Email, required): Enter your email address.
* **Submitter Phone** (`submitter_phone`, Text, optional): Enter your phone number.
* **Submitter Department** (`submitter_department`, Text, optional): Enter your department name.
* **Submitter Job Title** (`submitter_job_title`, Text, optional): Enter your job title.
* **Pay Cycle** (`pay_cycle`, Select, optional): Repeated field for pay cycle, this field is related to the correction of the pay cycle.
*   **Pay Currency** (`pay_currency`, Select, optional): Choose if the error affects pay in a specific currency.
*   **Pay Adjustment Amount** (`pay_adjustment_amount`, Number, optional): Enter the amount of the pay adjustment.
