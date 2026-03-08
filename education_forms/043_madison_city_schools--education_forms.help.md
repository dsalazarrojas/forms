<thinking> 
This form seems to be for collecting demographic information from students and their parents, likely for educational purposes. The form appears to be designed to gather data on the student's personal details, such as name, birth date, and contact information, as well as their parent's details, including income, ethnicity, and proficiency in English and math. The form also asks about the student's physical capability, English and math proficiency, and other relevant details.

The form has a mix of required and optional fields, indicating that some information is mandatory while others are not. The fields can be grouped into several categories, such as student and parent demographics, contact information, and educational background.

This form seems to be part of a larger system used to manage student data, possibly for administrative or educational purposes.

</thinking>

# madison-city-schools - Help Guide
## Purpose
This help guide is intended to assist users in completing the `madison-city-schools` form, which collects demographic information from students and their parents for educational purposes.

## How To Complete This Form

1. Start by ensuring you have all the necessary information and data to complete the form accurately.
2. Begin by filling in the student's personal details, including their name, birth date, and gender.
3. Provide the student's contact information, such as home and cell phone numbers, and email address.
4. Answer the questions about the student's language spoken at home and their highest educational attainment in the household.
5. For students who are not fully proficient in English or math, please indicate their level of proficiency.
6. Answer the questions about the student's ethnic identity and their parent's ethnic identity.
7. Complete the questions about the parent's contact information, income, and educational background.
8. Provide any additional information you feel is relevant to the student's situation.

## Field-by-Field Explanation

* **Student Name** (`student_name`, `text`, Required)
	+ Enter the student's name as it should be listed in school records.
* **Birth Date** (`birth_date`, `date`, Required)
	+ Enter the student's birth date in the format MM/DD/YYYY.
* **Student Gender** (`student_gender`, `select_one`, Required)
	+ Select the student's gender (Male or Female).
* **Parent Name** (`parent_name`, `text`, Required)
	+ Enter the parent's name as it should be listed in school records.
* **Home Phone** (`home_phone`, `text`, Required)
	+ Enter the parent's home phone number.
* **Work Phone** (`work_phone`, `text`, Optional)
	+ Enter the parent's work phone number (if applicable).
* **Contact Email** (`contact_email`, `email`, Required)
	+ Enter the parent's email address.
* **Language Spoken at Home** (`language_spoken`, `select_one`, Required)
	+ Select the language spoken at home (English or Spanish).
* **Highest Education in the Household** (`highest_education`, `select_one`, Required)
	+ Select the highest level of education in the household (None, High School, Some College, Bachelor's, Master's, or Doctorate).
* **Student Ethnicity** (`student_ethnicity`, `select_multiple`, Optional)
	+ Select all relevant ethnic identities of the student.
* **Address** (`address`, `text`, Required)
	+ Enter the parent's address.
* **Cell Phone** (`cell_phone`, `text`, Optional)
	+ Enter the parent's cell phone number.
* **Parent Ethnicity** (`parent_ethnicity`, `select_multiple`, Optional)
	+ Select all relevant ethnic identities of the parent.
* **Parent Income** (`parent_income`, `select_one`, Optional)
	+ Select the parent's income level.
* **Student Physical Capability** (`student_physical_capability`, `select_one`, Optional)
	+ Select the student's physical capability.
* **Address 2** (`address_2`, `text`, Optional)
	+ Enter any additional address information.
* **Address 3** (`address_3`, `text`, Optional)
	+ Enter any additional address information.
* **Student English Proficiency** (`student_english_proficiency`, `select_one`, Optional)
	+ Select the student's level of English proficiency.
* **Student Math Proficiency** (`student_math_proficiency`, `select_one`, Optional)
	+ Select the student's level of math proficiency.
* **Student Science Proficiency** (`student_science_proficiency`, `select_one`, Optional)
	+ Select the student's level of science proficiency.
* **Parent English Proficiency** (`parent_english_proficiency`, `select_one`, Optional)
	+ Select the parent's level of English proficiency.
* **Parent Math Proficiency** (`parent_math_proficiency`, `select_one`, Optional)
	+ Select the parent's level of math proficiency.
* **Parent Science Proficiency** (`parent_science_proficiency`, `select_one`, Optional)
	+ Select the parent's level of science proficiency.
* **Other Info** (`other_info`, `text`, Optional)
	+ Enter any additional information that may be relevant to the student's situation.

## Tips

* Ensure you have all necessary information before starting the form.
* Double-check your answers for accuracy to avoid errors.
* If you need help or clarification on any field, please contact the relevant authority.
* This form is designed to gather data for educational purposes only.
* All information provided will be used to create a comprehensive student profile for educational purposes only.
