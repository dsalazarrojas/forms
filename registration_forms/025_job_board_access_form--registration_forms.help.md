# job_board_access_form - Help Guide
## Purpose
This form is designed for job seekers to provide their job board access information.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the options that apply to your job preferences from the "Job Preferences" field.
2. Enter your contact information in the "Contact Information" field.
3. Upload your resume in the "Resume" field.
4. Optional: Select "Yes" or "No" for "Application Process" to indicate if you are interested in applying to jobs.
5. You can add any relevant job skills in the "Job Skills" field.
6. Enter your email address in the "Email" field.
7. Enter your phone number in the "Phone" field.

## Field-by-Field Explanation
* **Application Process** (`application_process`, select_multiple, required: false):
	+ This field allows you to indicate if you are interested in applying to jobs. You can select "Yes" or "No" from the dropdown menu.
* **Contact Information** (`personal_details`, date, required: false):
	+ This field is used to collect your contact information. You can enter your date of birth, as the field type is set to "date" but this seems to be an error, as there are no date options provided. Please enter your date of birth in the format MM/DD/YYYY.
* **Resume** (`resume`, number, required: false):
	+ This field is intended for uploading your resume, but the field type is set to "number", which is not suitable for this purpose. Please ignore this field.
* **Job Preferences** (`job_preferences`, select_one, required: false):
	+ This field allows you to select the type of job you are interested in. Choose one of the provided options: Accounting, Administration, Consulting, Engineering, IT, Management, Marketing, or Sales.
* **Job Skills** (`skills`, text, required: false):
	+ This field is for listing your relevant job skills. Enter any skills you have that are relevant to the job you are interested in.
* **Resume** (`resume_upload`, text, required: false):
	+ This field is also for uploading your resume, but the field type is set to "text", which is not suitable for this purpose. Please ignore this field.
* **Email** (`email`, email, required: false):
	+ This field is for entering your email address.
* **Phone** (`phone`, text, required: false):
	+ This field is for entering your phone number.
