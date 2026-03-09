# Student Registration Process Evaluation - Help Guide
## Purpose
This form is used to evaluate the student registration process, capturing essential details and areas of interest to improve student experiences.

## How To Complete This Form
1. Start by filling out the required fields, which include:
	* Student Information (Page 1)
	* Date of Birth (Page 2)
	* Phone Number (Page 3)
	* Email (Page 4)
	* Current Address (Page 5)
	* Major or Department (Page 6)
	* Areas of Interest (Page 7)
2. Select the correct status of your registration (Is Registration Complete?).
3. If you want to provide additional comments or feedback, you can use the Additional Comments field (Page 9). You can also select multiple options for Areas of Interest and Submission.

## Field-by-Field Explanation

* **Student Information** (`student_info`, text, required):
    This field is used to collect the student's personal information.
* **Date of Birth** (`date_of_birth`, date, required):
    Enter your date of birth in the format mm/dd/yyyy.
* **Phone Number** (`phone_number`, text, required):
    Enter your phone number for contact purposes.
* **Email** (`email`, email, required):
    Enter your email address for communication purposes.
* **Current Address** (`current_address`, text, required):
    Enter your current address for contact purposes.
* **Major or Department** (`major_department`, text, required):
    Select your major or department from the options.
* **Areas of Interest** (`areas_of_interest`, select_multiple, required):
    Select all areas of interest that apply to you:
	+ Academic Support
	+ Career Guidance
	+ Financial Aid
* **Is Registration Complete?** (`registration_complete`, select_one, required):
    Select whether your registration is complete or not.
* **Additional Comments** (`additional_comments`, note, optional):
    Provide any additional comments or feedback about your registration experience.
* **Submission** (`submit_application`, select_multiple, required):
    Select whether you have submitted your application or not.
* **Additional Information** (`more_info`, text, optional):
    Provide any additional information that may be helpful for your registration.
* **Feedback** (`feedback`, select_multiple, optional):
    Select whether you have provided feedback or not.
