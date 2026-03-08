# Beauty Advisor Course Registration Form - Help Guide
## Purpose
This form is intended for students to register for a course in beauty advising. It collects relevant information required for the registration process, including personal details, course selection, and payment preferences.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your first name in the "First Name" field.
2. Enter your last name in the "Last Name" field.
3. Enter your date of birth in the "Date of Birth" field in the format mm/dd/yyyy.
4. Enter your email address in the "Email Address" field.
5. Enter your phone number in the "Phone Number" field.
6. Enter your full address in the "Address" field.
7. Enter your city in the "City" field.
8. Enter your state in the "State" field.
9. Enter your ZIP code in the "ZIP Code" field.
10. Select the course you are interested in from the "Course Selection" dropdown menu.
11. Choose the format in which you would like to study the course from the "Course Format" dropdown menu.
12. Enter the date you prefer to start the course in the "Preferred Start Date" field in the format mm/dd/yyyy.
13. Select your highest level of education from the "Highest Education Level" dropdown menu.
14. Indicate your level of experience in the beauty industry from the "Beauty Industry Experience" dropdown menu.
15. Describe what you hope to achieve through the course in the "Career Goals" field.
16. Select your preferred payment method from the "Payment Method" dropdown menu.
17. (Optional) If you need a payment plan, select "True" from the "Payment Plan Needed" field.
18. (Optional) If you are applying for financial aid, select "True" from the "Financial Aid Application" field.
19. (Optional) Select how you heard about the course from the "How Did You Hear About Us" dropdown menu.
20. Select "True" from the "Terms and Conditions Accepted" field to confirm you have read and agree to the terms.

## Field-by-Field Explanation

* **First Name** (`student_first_name`, text, required): Enter your first name as it appears on your identification.
* **Last Name** (`student_last_name`, text, required): Enter your last name as it appears on your identification.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in the format mm/dd/yyyy.
* **Email Address** (`email_address`, email, required): Enter the email address where you can be reached.
* **Phone Number** (`phone_number`, text, required): Enter your phone number where you can be reached.
* **Address** (`address`, text, required): Enter your full address.
* **City** (`city`, text, required): Enter the city where you reside.
* **State** (`state`, text, required): Enter the state where you reside.
* **ZIP Code** (`zip_code`, text, required): Enter your postal code.
* **Course Selection** (`course_selection`, select_one, required): Select the course you are interested in from the available options.
* **Course Format** (`course_format`, select_one, required): Choose the format in which you would like to study the course.
* **Preferred Start Date** (`start_date`, date, required): Enter the date you prefer to start the course in the format mm/dd/yyyy.
* **Highest Education Level** (`education_level`, select_one, required): Select your highest level of education from the available options.
* **Beauty Industry Experience** (`beauty_experience`, select_one, required): Select your level of experience in the beauty industry from the available options.
* **Career Goals** (`career_goals`, text, required): Describe what you hope to achieve through the course.
* **Payment Method** (`payment_method`, select_one, required): Select your preferred payment method from the available options.
* **Payment Plan Needed** (`payment_plan`, select_one, false): If you need a payment plan, select "True".
* **Financial Aid Application** (`financial_aid`, select_one, false): If you are applying for financial aid, select "True".
* **How Did You Hear About Us** (`how_did_you_hear`, select_one, false): Select how you heard about the course from the available options.
* **Terms and Conditions Accepted** (`terms_accepted`, select_one, required): Select "True" to confirm you have read and agree to the terms and conditions.

Note: All required fields are marked as required and must be completed. Optional fields are not required but may be necessary for further processing or consideration.
