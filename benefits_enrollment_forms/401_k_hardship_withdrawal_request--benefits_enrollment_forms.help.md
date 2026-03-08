<thinking>
This help guide should only include information that would be useful to end users who would be filling out this form, not internal details or technical specifications.</thinking>

# 401(k) Hardship Withdrawal Request - Help Guide
## Purpose
This form is used to request a 401(k) hardship withdrawal due to an unforeseen financial hardship. The purpose of this form is to provide a structured way for participants to provide necessary information for the plan administrator to review and process their request.

## How To Complete This Form
To complete this form, follow these steps:
* Ensure you have all necessary information and supporting documentation ready.
* Fill out the participant information section with your details.
* Select the reason for the hardship withdrawal from the provided options.
* Provide detailed information about the reason, including dates, amounts, and third-party names if applicable.
* Enter the amount you are requesting.
* Enter your estimated available plan balance.
* If required, attach supporting documentation as instructed by the plan administrator.
* Review and certify the accuracy of the information provided.
* Submit the form with all necessary information.

## Field-by-Field Explanation
* **Participant full name** (`employee_name`, text, required): Enter your full name as registered in the plan records.
* **Participant ID or SSN (last 4 digits acceptable)** (`employee_id`, text, required): Use your internal ID for privacy if preferred. Enter the last 4 digits of your SSN if that's the case.
* **Participant email address** (`participant_email`, email, required): Enter your email address for notifications about the request.
* **Participant phone number** (`participant_phone`, phone, optional): Enter your phone number for contact purposes.
* **Plan name or employer plan ID** (`plan_name`, text, required): Enter the name of the plan or the employer's plan ID.
* **Reason for hardship withdrawal** (`hardship_reason`, select_one, required): Choose one of the provided categories that best fits your reason.
* **Details supporting hardship claim** (`hardship_details`, text, required): Provide detailed information, including dates, amounts, and third-party names where relevant.
* **Amount requested** (`amount_requested`, decimal, required): Enter the numeric amount you are requesting.
* **Participant available plan balance** (`available_balance`, decimal, optional): Provide a best estimate of your available plan balance from an account statement.
* **Supporting documentation required** (`supporting_documents`, note, optional): Attach any invoices, bills, or proof as instructed by the plan administrator.
* **Request submission date** (`submission_date`, date, required): Enter the date you are submitting the request.
* **Certification** (`participant_certification`, select_one, required): Select 'Yes' to acknowledge that the information above is true and accurate.
* **Administration use: approval status** (`approval_status`, select_one, optional): This field is for internal use only.
* **Administrator notes and conditions** (`administrator_notes`, text, optional): This field is for internal review notes, conditions, and next steps.
