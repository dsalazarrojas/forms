# Medical Reimbursement Claim Form - Help Guide
## Purpose
The Medical Reimbursement Claim Form is used to submit medical claims to insurance providers and other relevant parties. It captures essential patient and medical information, along with claim specifics and submission details.

## How To Complete This Form
To complete this form accurately and efficiently, follow these steps:

1. Start by filling in the patient's first and last name.
2. Enter the date of service, which is the date the medical treatment was provided.
3. Enter the physician's name and license type.
4. Provide a clear diagnosis and treatment description.
5. Enter the medical expenses incurred.
6. Enter the date the claim was submitted.
7. Specify the claimed amount.
8. Select the claim form type and insurance provider.
9. Indicate the claim date range.
10. Enter the patient's name, address, city, state, zip, and country.
11. Enter the insurance provider status (yes or no).
12. Enter the contact information for the healthcare provider (phone, email, fax).
13. Upload any supporting documentation required for the claim.
14. Finally, ensure the form is submitted by the correct healthcare provider.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required): This is the patient's first name.
* **Last Name** (`last_name`, text, required): This is the patient's last name.
* **Date of Service** (`date_of_service`, date, required): This is the date the medical treatment was provided.
* **Physician's Name** (`physician_name`, text, required): This is the name of the healthcare provider submitting the claim.
* **Diagnosis** (`diagnosis`, text, required): A clear description of the patient's medical condition.
* **Treatment Description** (`treatment_description`, text, required): A detailed description of the medical treatment provided.
* **Medical Expenses** (`medical_expenses`, number, required): The total medical expenses incurred.
* **Claimed Date** (`claimed_date`, date, required): The date the claim was submitted.
* **Claimed Amount** (`claimed_amount`, number, required): The amount claimed.
* **Claim Form Type** (`claim_form_type`, select_one, required): Select the type of claim form being submitted (e.g., Medical Reimbursement Form, Insurance Claim).
* **Medical Insurance Provider** (`medical_insurance_provider`, select_multiple, required): Choose the relevant insurance provider from the list.
* **Claim Date Range** (`claim_date_range`, select_multiple, required): Choose the claim date range (e.g., Past, Present, Future).
* **Patient Name** (`patient_name`, text, required): The patient's full name.
* **Physician License** (`physician_license`, select_one, required): The type of medical license held by the healthcare provider (e.g., MD, DO, PharmD).
* **Insurance Provider** (`insurance_provider`, select_multiple, required): Choose whether the patient has insurance coverage or not.
* **Address** (`address`, text, optional): The healthcare provider's address.
* **City** (`city`, text, required): The city where the medical treatment was provided.
* **State** (`state`, text, required): The state where the medical treatment was provided.
* **Zip** (`zip`, text, required): The zip code where the medical treatment was provided.
* **Country** (`country`, text, required): The country where the medical treatment was provided.
* **Phone** (`phone`, text, required): The phone number of the healthcare provider.
* **E-mail** (`email`, email, required): The email address of the healthcare provider.
* **Fax** (`fax`, text, optional): The fax number of the healthcare provider.
* **Upload File** (`upload_file`, text, required): Upload any supporting documentation required for the claim.
* **Submitted By** (`submitted_by`, text, required): The name of the healthcare provider submitting the claim.
