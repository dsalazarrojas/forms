# Pet Insurance Claim Form - Help Guide
## Purpose
The Pet Insurance Claim Form is used to report a claim for your pet's insurance policy.

## How To Complete This Form
To complete this form, simply follow these steps:

* Enter your pet's name in the "Pet Name" field.
* Select the type of pet you are claiming for in the "Pet Type" field.
* Enter the date of the claim in the "Claim Date" field.
* Enter the insurance provider for your pet's policy in the "Insurance Provider" field.
* Enter the amount of the claim in the "Claim Amount" field.
* Provide a brief description of the claim in the "Description" field (optional).
* If your pet has a vet, enter their name in the "Vet Name" field.
* If your pet has a vet, enter their address in the "Vet Address" field (optional).
* If your pet has a medical condition, enter it in the "Medical Condition" field (optional).
* If you have a medical record ID, enter it in the "Medical Record ID" field (optional).
* If you have any supporting documents, upload them in the "Uploaded Documents" field (optional).
* Enter the name of the person submitting the claim in the "Submitted By" field.
* Enter the date the claim was submitted in the "Submitted Date" field.
* Select the status of the claim in the "Claim Status" field.
* Add any additional notes about the claim in the "Notes" field (optional).

## Field-by-Field Explanation
* **Pet Name** (`pet_name`, text, required): Enter the name of the pet you are claiming for.
* **Pet Type** (`pet_type`, select_one, required): Select the type of pet you are claiming for (e.g., Dog, Cat, Other).
* **Claim Date** (`claim_date`, date, required): Enter the date of the claim.
* **Insurance Provider** (`insurance_provider`, text, required): Enter the insurance provider for your pet's policy.
* **Claim Amount** (`claim_amount`, number, required): Enter the amount of the claim.
* **Description** (`description`, text, optional): Provide a brief description of the claim (optional).
* **Vet Name** (`vet_name`, text, optional): If your pet has a vet, enter their name.
* **Vet Address** (`vet_address`, text, optional): If your pet has a vet, enter their address (optional).
* **Medical Condition** (`medical_condition`, text, optional): If your pet has a medical condition, enter it (optional).
* **Medical Record ID** (`medical_record_id`, text, optional): If you have a medical record ID, enter it (optional).
* **Uploaded Documents** (`uploaded_documents`, text, optional): If you have any supporting documents, upload them (optional).
* **Submitted By** (`submitted_by`, text, required): Enter the name of the person submitting the claim.
* **Submitted Date** (`submitted_date`, date, required): Enter the date the claim was submitted.
* **Claim Status** (`claim_status`, select_one, required): Select the status of the claim (e.g., Pending, Approved, Denied).
* **Notes** (`notes`, text, optional): Add any additional notes about the claim (optional).
* **Submitted By Title** (`submitted_by_title`, text, optional): If you want to specify a title for the person submitting the claim (optional).
* **Submitted By Phone** (`submitted_by_phone`, text, optional): If you want to specify a phone number for the person submitting the claim (optional).
* **Submitted By Email** (`submitted_by_email`, email, optional): If you want to specify an email for the person submitting the claim (optional).
* **Submitted By Address** (`submitted_by_address`, text, optional): If you want to specify an address for the person submitting the claim (optional).
* **Submitted By Company** (`submitted_by_company`, text, optional): If you want to specify a company for the person submitting the claim (optional).
* **Submitted By Job Title** (`submitted_by_job_title`, text, optional): If you want to specify a job title for the person submitting the claim (optional).
* **Submitted By Department** (`submitted_by_department`, text, optional): If you want to specify a department for the person submitting the claim (optional).
* **Submitted By Job Function** (`submitted_by_job_function`, text, optional): If you want to specify a job function for the person submitting the claim (optional).
* **Submitted By Work Phone** (`submitted_by_work_phone`, text, optional): If you want to specify a work phone number for the person submitting the claim (optional).
* **Submitted By Work Email** (`submitted_by_work_email`, email, optional): If you want to specify a work email for the person submitting the claim (optional).
