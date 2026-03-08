# fitness_membership_cancellation_form - Help Guide
## Purpose
The Fitness Membership Cancellation Form is used to cancel a user's membership. This form helps users provide a clear reason for cancellation and ensures a smooth exit process.

## How To Complete This Form
To complete this form, follow these steps:

* Ensure you have not already submitted a cancellation request or are not currently in a trial period.
* Verify your membership status and history in the system.
* If you are unsure, contact your membership administrator or customer support for assistance.
* Fill out the form with the required information:
	+ Select the relevant membership type (e.g., Yes or No).
	+ Choose the membership status (Active or Inactive).
	+ Provide a valid reason for cancellation.
	+ Choose the date for cancellation (optional but recommended).
	+ Add any comments or explanations about the cancellation.
	+ Indicate if the cancellation has been assigned to a specific tool (Yes or No).
* Click submit to submit the form.

## Field-by-Field Explanation
* **Membership Type** (`membership_type`, select_one, required: false): Select 'Yes' if you want to cancel your membership, and 'No' otherwise.
* **Membership Status** (`membership_status`, select_one, required: false): Choose 'Active' or 'Inactive' to reflect your current status.
* **Reason for Cancellation** (`reason_for_cancellation`, text, required: false): Provide a clear and concise reason for cancelling your membership.
* **Date of Cancellation** (`date_of_cancellation`, date, required: false): Enter the date you want the membership to be cancelled from (optional, but recommended).
* **Comments** (`comments`, note, required: false): Add any additional comments or explanations about the cancellation.
* **Assigned Tool** (`assigned_tool`, select_one, required: false): Indicate if the cancellation has been assigned to a specific tool (Yes or No).
* **Form ID** (`form_id`, number, required: false): This field is not relevant for end-users and is only used for internal purposes.

## Tips
* Be honest and clear when providing the reason for cancellation.
* Ensure all required fields are filled out for the cancellation process to be processed smoothly.
* If you are unsure about any field, contact your membership administrator or customer support for assistance.
