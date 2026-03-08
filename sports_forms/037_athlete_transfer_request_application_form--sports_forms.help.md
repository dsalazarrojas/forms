# Athlete Transfer Request Application Form - Help Guide
## Purpose
This form is used to request the transfer of an athlete to a new team or club. It requires information about the athlete, their current club, and the reason for the transfer.

## How To Complete This Form
To fill out this form, please follow these steps:

1. Enter the athlete's personal information:
	* **Athlete Full Name**: Enter the athlete's full name as it appears on their official documents (e.g. passport, driver's license).
	* **Date of Birth**: Enter the athlete's date of birth in the format MM/DD/YYYY.
	* **Primary Sport**: Select the athlete's primary sport.
	* **Current Competition Level**: Select the current competition level of the athlete.
2. Provide transfer details:
	* **Current Team or Club Name**: Enter the name of the athlete's current team or club.
	* **Desired New Team or Club Name**: Enter the name of the desired new team or club.
	* **Requested Transfer Effective Date**: Enter the date the transfer is requested to take effect.
	* **Primary Reason for Transfer**: Select the primary reason for the transfer.
	* **If Other - Please Provide Details**: If you selected "Other" as the reason for transfer, provide a brief explanation.
3. Check eligibility and compliance:
	* **Is the athlete currently under a formal contract?**: Check if the athlete is currently under a formal contract.
	* **Contract Expiration Date**: If the athlete is under a contract, enter the contract expiration date.
	* **Are there any outstanding financial obligations to the current club?**: Check if there are any outstanding financial obligations to the current club.
	* **Number of Transfers in the Last 12 Months**: Enter the number of transfers the athlete has had in the last 12 months. If none, enter 0.
4. Add contact information:
	* **Athlete Email Address**: Enter the athlete's email address.
	* **Athlete Phone Number**: Enter the athlete's phone number.
	* **Parent or Guardian Name (if applicable)**: Enter the name of the athlete's parent or guardian (if the athlete is under 18).
	* **Parent or Guardian Phone Number (if applicable)**: Enter the phone number of the athlete's parent or guardian (if the athlete is under 18).
5. Declaration and Consent:
	* **I certify that all information provided in this application is accurate**: Check to confirm that all information provided is accurate.
	* **I consent to my current club being notified of this transfer request**: Check to consent to the current club being notified of the transfer request.
6. Sign and submit:
	* **Athlete Electronic Signature**: Type your full name as proof of signature.
	* **Parent or Guardian Electronic Signature (if applicable)**: Type the parent or guardian's full name as proof of signature (if the athlete is under 18).
	* **Date of Application**: Enter the date you are submitting this application.

## Field-by-Field Explanation
* **Athlete Full Name** (`athlete_name`, text, **required**): Enter the athlete's full name as it appears on their official documents (e.g. passport, driver's license).
* **Date of Birth** (`athlete_dob`, date, **required**): Enter the athlete's date of birth in the format MM/DD/YYYY.
* **Primary Sport** (`primary_sport`, text, **required**): Select the athlete's primary sport.
* **Current Competition Level** (`competition_level`, text, **required**): Select the current competition level of the athlete.
* **Current Team or Club Name** (`current_club`, text, **required**): Enter the name of the athlete's current team or club.
* **Desired New Team or Club Name** (`new_club`, text, **required**): Enter the name of the desired new team or club.
* **Requested Transfer Effective Date** (`transfer_date`, date, **required**): Enter the date the transfer is requested to take effect.
* **Primary Reason for Transfer** (`transfer_reason`, select_one, **required**): Select the primary reason for the transfer.
* **If Other - Please Provide Details** (`other_reason_text`, text, **optional**): If you selected "Other" as the reason for transfer, provide a brief explanation.
* **Is the athlete currently under a formal contract?** (`contract_status`, select_one, **required**): Check if the athlete is currently under a formal contract.
* **Contract Expiration Date** (`contract_expiration`, date, **optional**): If the athlete is under a contract, enter the contract expiration date.
* **Are there any outstanding financial obligations to the current club?** (`financial_obligations`, select_one, **required**): Check if there are any outstanding financial obligations to the current club.
* **Number of Transfers in the Last 12 Months** (`previous_transfer_count`, number, **required**): Enter the number of transfers the athlete has had in the last 12 months. If none, enter 0.
* **Athlete Email Address** (`athlete_email`, email, **required**): Enter the athlete's email address.
* **Athlete Phone Number** (`athlete_phone`, text, **required**): Enter the athlete's phone number.
* **Parent or Guardian Name (if applicable)** (`guardian_name`, text, **optional**): Enter the name of the athlete's parent or guardian (if the athlete is under 18).
* **Parent or Guardian Phone Number (if applicable)** (`guardian_phone`, text, **optional**): Enter the phone number of the athlete's parent or guardian (if the athlete is under 18).
* **I certify that all information provided in this application is accurate** (`info_accuracy_certification`, select_one, **required**): Check to confirm that all information provided is accurate.
* **I consent to my current club being notified of this transfer request** (`club_notification_consent`, select_one, **required**): Check to consent to the current club being notified of the transfer request.
* **Athlete Electronic Signature** (`athlete_signature`, text, **required**): Type your full name as proof of signature.
* **Parent or Guardian Electronic Signature (if applicable)** (`guardian_signature`, text, **optional**): Type the parent or guardian's full name as proof of signature (if the athlete is under 18).
* **Date of Application** (`submission_date`, date, **required**): Enter the date you are submitting this application.
