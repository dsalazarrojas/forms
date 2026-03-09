# Guest Lecturer Claim Form - Help Guide
## Purpose
The Guest Lecturer Claim Form is a document used to submit claims for compensation or expenses related to your visit to an institution. This form is for guest lecturers who have visited an institution and wish to receive reimbursement for their expenses.

## How To Complete This Form
1. Please ensure you have visited the institution and are eligible to claim expenses or compensation.
2. Fill out the form with accurate and complete information.
3. Upload any required supporting documents, such as receipts or invoices, to the 'File upload' field.
4. Select the correct category from the 'Category' dropdown menu that best describes your claim.
5. Ensure that your claim is accurate and truthful.
6. Review and submit the form.

## Field-by-Field Explanation

* **Email** (`user_email`, email, required=false): Please enter your email address to help the institution contact you with any questions or updates related to your claim.
* **guest_name** (`guest_name`, text, required=false): Your name as a guest lecturer.
* **Date of visit** (`date_of_visit`, date, required=false): The date of your visit to the institution.
* **Total claim** (`total_claim`, number, required=false): Enter the total amount of your claim for expenses or compensation.
* **Claim details** (`claim_details`, text, required=false): Please provide a brief description of your claim, including any necessary details.
* **File upload** (`file_upload`, text, required=false): You can upload any supporting documents, such as receipts or invoices, related to your claim.
* **Category** (`category`, select_multiple, required=false): Please select the category that best describes your claim. (Options: Academia, Business, Sports)
* **Institution** (`institution`, text, required=false): The name of the institution you visited.
* **Department** (`department`, text, required=false): The department within the institution you visited.
* **Claimant** (`claimant`, select_one, required=false): Who claimed the visit (Options: John Doe, Jane Doe, Jim Doe)
* **Status** (`status`, select_one, required=false): The current status of your claim. (Options: pending, approved, rejected)
* **Remarks** (`remarks`, text, required=false): Any additional comments or remarks about your claim.
* **Signature** (`signature`, text, required=false): Your signature, which is required to validate your claim.
* **Submit** (`submit`, text, required=false): Submit your form to complete your claim.
