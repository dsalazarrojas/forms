<thinking>
To determine the purpose of this form, let's analyze the provided YAML fields. The form appears to be for payroll corrections, which suggests it's used to address errors or discrepancies in employee pay. This form likely serves as a way to document and manage these corrections, ensuring they're properly tracked and processed. To confirm, the presence of fields like "Error Date", "Error Type", "Pay Cycle", and "Pay Currency" support this hypothesis. Additionally, the form likely needs to be non-duplicative, as indicated by the required "employee_id" field.

Let's verify this by examining the fields:
- The "Pay Cycle" field, with options "Yes" and "No", might be used to indicate if the error affects the current pay cycle.
- The "Error Type" field, also with options "Yes" and "No", could be used to specify the type of error.
- The "Description" field is a free-text field for adding further details about the error.
- The "Attachment" field is likely for uploading supporting documents or evidence related to the correction.
- The "Submitter" field, with options "Yes" and "No", might indicate who submitted the correction request. 
- The "Submitter Email", "Submitter Phone", "Submitter Department", and "Submitter Job Title" fields likely provide contact information for the person submitting the request.
- The "Pay Adjustment Amount" field might be used to specify the amount of the pay correction.
- The "Pay Currency" field, with options "Yes" and "No", might indicate if the error affects pay in a specific currency.
</thinking>

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
