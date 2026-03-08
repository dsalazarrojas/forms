# Flu Vaccine Voucher Form - Help Guide
## Purpose
The Flu Vaccine Voucher Form is used to collect information from potential patients or clients for flu vaccination purposes. This form helps healthcare providers to determine eligibility and provide a flu vaccine voucher for those who are eligible.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the User Information section with your name, date of birth, and phone number.
2. Indicate your insurance status to help us determine if you are eligible for a free or reduced-cost flu vaccine.
3. Choose your preferred day of vaccination from the options provided.
4. Select your voucher type (Single Voucher, Couple Voucher, or Family Voucher).
5. Add any additional notes or comments you think are relevant to your situation.
6. Enter your email address (if you have one).
7. Finally, provide your name as a patient.

## Field-by-Field Explanation
* **User Information** (`user_info`, text, optional): Enter your name and date of birth to help us better understand your situation.
* **Date of Birth** (`date_of_birth`, date, optional): Enter your date of birth in the format `YYYY-MM-DD`.
* **Phone Number** (`phone_number`, text, optional): Enter your phone number so we can contact you about your vaccination schedule.
* **Insurance Status** (`insurance_status`, select_one, optional): Indicate whether you currently have insurance coverage. This will help us determine eligibility for a free or reduced-cost flu vaccine.
	+ Options: None, True (yes), or False (no).
* **Medical Insurance Provider** (`medical_insurance_provider`, select_multiple, optional): Choose your medical insurance provider from the options provided.
	+ Options: Medicaid, Medicare, or Other.
* **Preferred Vaccination Day** (`preferred_vaccination_day`, select_one, optional): Choose a day that works best for you to receive the flu vaccine.
	+ Options: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.
* **Voucher Type** (`voucher_type`, select_one, optional): Select the type of voucher you need.
	+ Options: Single Voucher, Couple Voucher, Family Voucher.
* **Additional Notes** (`additional_notes`, note, optional): Add any additional comments or information about your situation.
* **Email** (`email`, email, optional): Enter your email address (if you have one).
* **Patient Name** (`patient_name`, text, optional): Enter your name as a patient.

Note: Please review this form carefully and fill it out accurately to ensure we can provide you with the correct flu vaccine voucher.
