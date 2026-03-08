# Athletics Program Enrollment Form - Help Guide
## Purpose
The Athletics Program Enrollment Form is used to gather information from athletes to enroll them in a sports program. This form collects personal details and sports preferences of the athlete.

## How To Complete This Form

1.  Fill in the required fields with accurate and up-to-date information.
2.  Select the correct sport and experience level from the given options.
3.  Make sure to provide your parent/guardian's email and phone number.
4.  Review the form carefully before submission to avoid any errors.

## Field-by-Field Explanation

*   **First Name** (`first_name`, `text`, `required`): Enter your first name.
*   **Last Name** (`last_name`, `text`, `required`): Enter your last name.
*   **Student ID Number** (`student_id`, `text`, `required`): Enter your school or district ID number.
*   **Date of Birth** (`date_of_birth`, `date`, `required`): Enter your date of birth in the format 'YYYY-MM-DD'.
*   **Grade Level** (`grade`, `select_one`, `required`): Select your current grade level from the options '9th', '10th', '11th', or '12th'.
*   **School Name** (`school_name`, `text`, `required`): Enter the name of your school.
*   **Current GPA** (`gpa`, `number`, `required=false`): Enter your current academic GPA. (Not required but recommended).
*   **Home Address** (`home_address`, `text`, `required`): Enter your home address.
*   **City** (`city`, `text`, `required`): Enter the city where you reside.
*   **State** (`state`, `text`, `required`): Enter the state where you reside.
*   **ZIP Code** (`zip_code`, `text`, `required`): Enter your zip code.
*   **Email Address** (`student_email`, `email`, `required`): Enter your student email address.
*   **Phone Number** (`student_phone`, `text`, `required`): Enter your student phone number.
*   **Primary Sport** (`primary_sport`, `select_one`, `required`): Select your primary sport from the options 'Football', 'Volleyball', 'Basketball', 'Baseball', 'Softball', 'Soccer', 'Tennis', 'Track and Field', 'Cross Country', 'Golf', 'Swimming', 'Other'.
*   **Position/Event** (`position`, `text`, `required=false`): Enter your preferred position or event in the selected sport.
*   **Experience Level** (`experience_level`, `select_one`, `required`): Select your experience level in the sport from the options 'Beginner', 'Intermediate', 'Advanced', 'Elite'.
*   **Previous Program Participation** (`previous_participation`, `select_one`, `required`): Select whether you have participated before from the options 'Yes, Multiple Seasons', 'Yes, One Season', 'No, First Time'.
*   **Parent/Guardian Name** (`parent_name`, `text`, `required`): Enter the name of your parent/guardian.
*   **Parent/Guardian Phone** (`parent_phone`, `text`, `required`): Enter your parent/guardian's phone number.
*   **Parent/Guardian Email** (`parent_email`, `email`, `required`): Enter your parent/guardian's email address.
*   **Emergency Contact Information** (`emergency_contact`, `text`, `required=false`): Enter emergency contact information if different from your parent/guardian.
