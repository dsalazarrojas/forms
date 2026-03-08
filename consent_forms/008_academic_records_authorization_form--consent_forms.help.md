<thinking> 
This form is used for authorizing the release of academic records for students. The purpose of this form is to ensure that students are able to control who has access to their personal and educational information. By completing this form, students can specify which records they are willing to release and to whom. The form should only be used by authorized personnel within the institution, and students are not required to fill it out unless they are explicitly instructed to do so. It is essential to ensure that all required fields are filled correctly to avoid any issues with the records release process. The form may not be duplicated or used for any other purpose other than the one described here.

</thinking>

# Academic Records Authorization Form - Help Guide
## Purpose
The Academic Records Authorization Form is used to authorize the release of academic records to a specific person or organization. This form ensures that students have control over who has access to their personal and educational information.

## How To Complete This Form

To complete this form, please follow these steps:

1. Enter your student full legal name as it appears on official records.
2. Provide your date of birth.
3. Enter your student ID number.
4. Enter your student email address.
5. (Optional) Enter your phone number.
6. Enter your current mailing address.
7. Select which academic records you authorize for release. Make sure to select all that apply.
8. Enter the name of the person or organization receiving the records.
9. Enter the address or email of the recipient.
10. Select the purpose of the records release.
11. Choose how long the authorization should remain valid.
12. Confirm that you understand your rights under FERPA and voluntarily authorize the release of the records.
13. Date of authorization.
14. Provide any additional instructions for the records office.

## Field-by-Field Explanation

* **Student full legal name** (`student_full_name`, text, required): Enter your full legal name as it appears on official records.
* **Date of birth** (`date_of_birth`, date, required): Enter your date of birth in the format MM/DD/YYYY.
* **Student ID number** (`student_id`, text, required): Enter your student ID number.
* **Student email address** (`student_email`, email, required): Enter your student email address.
* **Phone number** (`student_phone`, text, optional): Enter your phone number (optional).
* **Current mailing address** (`mailing_address`, text, required): Enter your current mailing address.
* **Records to Be Released** (`records_section`, note, required): This is an introduction to the records to be released. Select all that apply:
	+ **Official transcripts**
	+ **Enrollment verification**
	+ **Degree verification**
	+ **Grade reports**
	+ **Disciplinary records**
	+ **Financial aid records**
* **Which academic records do you authorize for release** (`records_to_release`, select_multiple, required): Select all the records you are willing to release:
	+ **Official transcripts**
	+ **Enrollment verification**
	+ **Degree verification**
	+ **Grade reports**
	+ **Disciplinary records**
	+ **Financial aid records**
* **Name of person or organization receiving the records** (`release_recipient_name`, text, required): Enter the name of the person or organization receiving the records.
* **Address or email of the recipient** (`release_recipient_address`, text, required): Enter the address or email of the recipient, where the records should be sent.
* **Purpose of the records release** (`purpose_of_release`, select_one, required): Select the purpose of the records release:
	+ **Employment verification**
	+ **Graduate school application**
	+ **Transfer to another institution**
	+ **Scholarship application**
	+ **Personal records**
	+ **Other**
* **How long should this authorization remain valid** (`authorization_duration`, select_one, required): Select how long the authorization should remain valid:
	+ **One-time release only**
	+ **30 days**
	+ **6 months**
	+ **1 year**
	+ **Until revoked in writing**
* **I understand my rights under FERPA and voluntarily authorize the release of the records** (`ferpa_acknowledgment`, select_one, required): Confirm that you understand your rights under FERPA and voluntarily authorize the release of the records:
	+ **Yes - I understand and authorize**
	+ **No - I do not authorize**
* **Date of authorization** (`signature_date`, date, required): Enter the date of authorization in the format MM/DD/YYYY.
* **Any additional instructions for the records office** (`additional_instructions`, text, optional): Enter any additional instructions for the records office.
