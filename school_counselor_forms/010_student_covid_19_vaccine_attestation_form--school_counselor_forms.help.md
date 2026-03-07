<thinking>
To ensure the form purpose is understood by the end users, we first verify that the form is being used correctly and not being duplicated.
</thinking>

# Student COVID 19 Vaccine Attestation Form - Help Guide
## Purpose
The Student COVID 19 Vaccine Attestation Form is used to gather information about a student's interest and vaccination status, as well as provide a space for them to provide a reason if they are not vaccinated. This form also captures information about who has submitted the form and when it was submitted.

## How To Complete This Form
To complete this form, follow these steps:

1. Choose whether you are interested in being vaccinated, not interested, or undecided about being vaccinated.
2. Select your current vaccination status.
3. If you are not vaccinated, provide a reason for not being vaccinated.
4. Sign the form to confirm your information.
5. Enter the date and time of your vaccination, if applicable.
6. Enter the date the form was submitted.
7. Enter your contact information as the form submitter.

## Field-by-Field Explanation
* **Student Covid 19 Interest** (`student_covid_19_interest`, select_one, required/optional): This field allows you to choose whether you are interested in being vaccinated, not interested, or undecided about being vaccinated.
* **Covid 19 Vaccine Status** (`covid_19_vaccine_status`, select_multiple, required/optional): This field gives you the option to select multiple answers, including being vaccinated, not vaccinated, or not applicable.
* **Vaccination Date** (`vaccination_date`, date, required/optional): This field is used to enter the date of your vaccination, if you have been vaccinated.
* **Vaccination Time** (`vaccination_time`, time, required/optional): This field is used to enter the time of your vaccination, if you have been vaccinated.
* **Reason For Not Vaccinated** (`reason_for_not_vaccinated`, text, required/optional): This field is used to provide a reason for not being vaccinated.
* **Reason For Not Vaccinated Other** (`reason_for_not_vaccinated_other`, text, required/optional): This field is used to provide an additional reason for not being vaccinated, if the reason is not listed in the options provided.
* **Student Signature** (`student_signature`, note, required/optional): This field is used for the student to sign the form, confirming their information.
* **Counselor Signature** (`counselor_signature`, note, required/optional): This field is used for the school counselor to sign the form, confirming they have received the information.
* **Date Submitted** (`date_submitted`, date, required/optional): This field is used to enter the date the form was submitted.
* **Form Submitter** (`form_submitter`, email, required/optional): This field is used to enter the email or contact information of the person submitting the form.
* **Form Submitter** (`form_submitter_phone`, text, required/optional): This field is used to enter the phone number of the person submitting the form.
