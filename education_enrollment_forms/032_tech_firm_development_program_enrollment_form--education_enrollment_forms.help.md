# tech_firm_development_program_enrollment_form - Help Guide
## Purpose
The tech firm development program enrollment form is designed to collect information for the tech firm development program. The form is used to gather details about the program, including its name and description, start date and time, duration, location, and other relevant information.

## How To Complete This Form

To complete the form, follow the steps below:

1. Fill in the program details page:
	* Enter the name and description of the program in the "Program Name and Description" field.
	* Enter the start date of the program in the "Training Program Start Date" field in the YYYY-MM-DD format.
	* Enter the start time of the program in the "Training Program Start Time" field in the HH:MM format.
	* Enter the duration of the program in the "Training Program Duration" field.
	* Enter the location of the program in the "Training Program Location" field.
2. Fill in the additional details page:
	* Select the type of the program (full-time or part-time) in the "Training Program Type" field.
	* Enter the focus area of the program in the "Program Focus Area" field.
	* Enter any additional contact information in the "Contact Information" field.

## Field-by-Field Explanation

### Page 1: Program Details

* **Program Name and Description** (`program_details`, `text`, required): This field is used to enter the name and description of the program. Enter a clear and concise title of the program, and a brief description of what it entails.
* **Training Program Start Date** (`program_starting_date`, `date`, required): Enter the start date of the program in the YYYY-MM-DD format.
* **Training Program Start Time** (`program_starting_time`, `time`, required): Enter the start time of the program in the HH:MM format.
* **Training Program Duration** (`program_duration`, `number`, required): Enter the duration of the program, which can be in days, weeks, or months.
* **Training Program Location** (`program_location`, `text`, required): Enter the location of the program.
* **Resume Upload** (`resume_upload`, `text`, optional): If you have a resume, you can attach it for evaluation. This is an optional field.

### Page 2: Additional Details

* **Training Program Type** (`training_program_type`, `select_one`, required): Select the type of the program, which can be either full-time or part-time.
* **Program Focus Area** (`program_focus_area`, `text`, required): Enter the focus area of the program.
* **Resume for Portfolio** (`resume_portfolio`, `text`, optional): If you have a resume for portfolio review, you can attach it. This is an optional field.
* **Contact Information** (`contact_information`, `text`, required): Enter any additional contact information for follow-up questions.

## Tips
Please ensure that you fill in all the required fields and attach any relevant documents, such as a resume and a portfolio, when necessary.
