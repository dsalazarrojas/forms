# Contact Lens Insurance Claim Form - Help Guide
## Purpose
This form is designed for policy holders to submit claims related to their contact lens insurance policy. Please provide accurate information to ensure efficient processing.

## How To Complete This Form
To complete this form, follow these steps:

1. Review the form carefully and ensure you have all required information available.
2. Fill in the policy holder's full name in the "Policy Holder Full Name" field.
3. Enter the insurance policy number in the "Insurance Policy Number" field.
4. If the patient's name is different from the policy holder's, please enter the patient's name in the "Patient Name" field.
5. Enter the date of purchase/examination in the "Date of Purchase / Examination" field.
6. Provide the name of the optical provider or clinic in the "Optical Provider / Clinic Name" field.
7. Enter the provider's phone number in the "Provider Phone Number" field.
8. Select the claim category from the list in the "Claim Category" field.
9. Choose the type of lens prescription from the list in the "Lens Prescription Type" field.
10. Enter the total amount paid for the claim in the "Total Amount Paid (USD)" field, as shown on your receipt.
11. Indicate whether you have your itemized receipt available for upload.
12. Choose your preferred reimbursement method from the list in the "Preferred Reimbursement Method" field.
13. Certify that the information provided is true and correct by selecting the correct option in the "I Certify That the Information Provided is True and Correct" field.
14. Enter the date of submission in the "Submission Date" field.
15. If necessary, provide additional information for the claims adjuster in the "Additional Information for Claims Adjuster" field.

## Field-by-Field Explanation
### Policy Holder Full Name
* **Policy Holder Full Name** (`policy_holder_name`, `text`, required): Enter the policy holder's full name as it appears on your policy.

### Insurance Policy Number
* **Insurance Policy Number** (`policy_number`, `text`, required): Enter the policy holder's insurance policy number.

### Patient Name
* **Patient Name** (`patient_name`, `text`, required if different): Enter the patient's name if it differs from the policy holder's.

### Date of Purchase / Examination
* **Date of Purchase / Examination** (`date_of_service`, `date`, required): Enter the date of purchase or examination.

### Optical Provider / Clinic Name
* **Optical Provider / Clinic Name** (`provider_name`, `text`, required): Provide the name of the optical provider or clinic.

### Provider Phone Number
* **Provider Phone Number** (`provider_phone`, `text`, required): Enter the provider's phone number.

### Claim Category
* **Claim Category** (`claim_type`, `select_one`, required): Choose the category of the claim from the list.

### Lens Prescription Type
* **Lens Prescription Type** (`lens_prescription_type`, `select_one`, required): Select the type of lens prescription from the list.

### Total Amount Paid (USD)
* **Total Amount Paid (USD)** (`total_amount_paid`, `number`, required): Enter the total amount paid as shown on your receipt.

### Do You Have Your Itemized Receipt Ready to Upload?
* **Do You Have Your Itemized Receipt Ready to Upload?** (`receipt_uploaded`, `select_one`, required): Indicate whether you have your itemized receipt available for upload.

### Preferred Reimbursement Method
* **Preferred Reimbursement Method** (`reimbursement_method`, `select_one`, required): Choose your preferred reimbursement method from the list.

### I Certify That the Information Provided is True and Correct
* **I Certify That the Information Provided is True and Correct** (`certification_statement`, `select_one`, required): Certify that the information provided is true and correct.

### Submission Date
* **Submission Date** (`claim_submission_date`, `date`, required): Enter the date of submission.

### Additional Information for Claims Adjuster
* **Additional Information for Claims Adjuster** (`adjuster_notes`, `text`, optional): If necessary, provide additional information for the claims adjuster.

## Tips
* Please ensure that you have all required information before submitting the form.
* If you have any questions or concerns, please don't hesitate to contact us.
* We appreciate your prompt submission of accurate and complete information to ensure efficient processing of your claim.
