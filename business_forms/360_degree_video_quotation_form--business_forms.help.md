<thinking>

To determine the form's purpose, let's review the form's title and fields:

The 401(k) Hardship Withdrawal Request form is used to request a hardship withdrawal from a 401(k) plan. The form is likely used by employees or plan administrators to submit a request for a withdrawal due to a qualifying event, such as medical expenses or funeral costs. The form is designed to gather necessary information from the participant, including their personal details, reason for withdrawal, and supporting documents.

To avoid duplication of effort, let's consider the following:

* Is the form used for initial requests or follow-up submissions?
* Are there any specific requirements or restrictions for submitting this form, such as time limits or additional documentation?
* Are there any specific guidelines or rules that need to be followed when completing this form?

Assuming this form is used for initial requests, and there are no specific requirements or restrictions mentioned in the provided YAML. We will assume that the form is a standard hardship withdrawal request form.

</thinking>

# 401(k) Hardship Withdrawal Request - Help Guide
## Purpose
This form is used to request a hardship withdrawal from a 401(k) plan due to a qualifying event, such as medical expenses or funeral costs.

## How To Complete This Form

To complete this form, follow these steps:

1. Provide your personal information:
	* Enter your participant name as shown on plan records.
	* Enter your employee or plan ID (if applicable).
2. Contact Information:
	* Enter your contact email address for case updates.
	* Enter your contact phone number (best number to reach you).
3. Plan Information:
	* Enter the name of your 401(k) plan (e.g., Company 401(k) Plan).
4. Withdrawal Request:
	* Select the category that best matches your reason for the hardship withdrawal from the list below:
		+ Medical expenses (participant or dependent)
		+ Prevent eviction / foreclosure
		+ Funeral / burial expenses
		+ Repair of principal residence
		+ Tuition / educational expenses
5. Specify the details of your request:
	* Enter the amount you are requesting (in USD, with decimals allowed).
	* Enter the date of the qualifying event (e.g., date of medical expense or notice).
6. Supporting Documents:
	* Indicate whether you are attaching supporting documents to your request.
7. Certification and Signature:
	* Type your name to certify that the statements are true.
	* Enter the date of your signature.

## Field-by-Field Explanation

* **Participant Full Name** (`participant_name`, text, required): As shown on plan records.
* **Employee or Plan ID** (`employee_id`, text, optional): Enter ID or payroll number.
* **Contact Email** (`contact_email`, email, required): Used for case updates.
* **Contact Phone** (`contact_phone`, phone, required): Best number to reach participant.
* **Plan Name** (`plan_name`, text, required): Enter the name of your 401(k) plan (e.g., Company 401(k) Plan).
* **Reason for Hardship Withdrawal** (`hardship_reason`, select_one, required): Choose the category that best matches your reason for the hardship withdrawal:
	+ Medical expenses (participant or dependent)
	+ Prevent eviction / foreclosure
	+ Funeral / burial expenses
	+ Repair of principal residence
	+ Tuition / educational expenses
* **Amount Requested** (`amount_requested`, decimal, required): Enter the amount you are requesting (in USD, with decimals allowed).
* **Date of Qualifying Event** (`date_of_event`, date, required): Enter the date of the qualifying event (e.g., date of medical expense or notice).
* **Supporting Documents Attached** (`supporting_documents_attached`, select_one, required): Indicate whether you are attaching supporting documents to your request.
* **Participant Certification** (`certification_statement`, note, optional): Type your name to certify that the statements are true.
* **Typed Participant Signature** (`participant_signature_name`, text, required): Type your full name as a signature.
* **Signature Date** (`signature_date`, date, required): Enter the date of your participant signature.

**Tips**

* Make sure to attach any supporting documents that are required or recommended.
* Review the form carefully before submitting to ensure all required fields are filled out correctly.
* If you are unsure about any part of the form, contact your HR representative or plan administrator for guidance.
