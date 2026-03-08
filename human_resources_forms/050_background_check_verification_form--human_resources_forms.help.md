# Background Check Verification Form - Help Guide
## Purpose
This form is designed to be used by HR staff to verify information about a candidate or employee.

## How To Complete This Form

To complete this form, please follow these steps:
1. Please enter the verifier's name and date verified in fields 1 and 6.
2. Select what type of verification was performed in fields 3.
3. Select the verification result in field 4.
4. Summarize the findings of the verification in field 5.
5. Select your recommendation based on the verification result in field 8.
6. If any attachments were made, please enter the notes in field 9.
7. Finally, please enter your typed name in field 10 to certify the verification.

## Field-by-Field Explanation

* **Verifier name** (`verifier_name`, `text`, required): Enter the name of the person who completed the verification.
* **Candidate name** (`candidate_name`, `text`, required): Enter the full legal name of the candidate or employee being verified.
* **Verification type** (`verification_type`, `select_multiple`, required): Select what type of verification was performed (Employment, Education, Criminal record, References).
* **Verification result** (`verification_result`, `select_one`, required): Select the outcome of the verification (Verified, Discrepancy noted, Not verified).
* **Details of findings** (`details_of_findings`, `text`, optional): Summarize the results of the verification.
* **Date verified** (`date_verified`, `date`, required): Enter the date of the verification.
* **Verifier contact information** (`verified_by_contact`, `text`, optional): Enter the email or phone number of the verifier.
* **Recommendation** (`recommendation`, `select_one`, required): Select the recommendation based on the verification result (Proceed to hire, Further review required, Do not hire).
* **Attachment notes** (`record_attachment_notes`, `note`, optional): Enter any notes about the attachments made to the record.
* **HR signature** (`hr_signature`, `text`, required): Enter your typed name to certify the verification.
