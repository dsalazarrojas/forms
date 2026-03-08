# Children's Ministry Registration Form - Help Guide
## Purpose
The Children's Ministry Registration Form is designed to collect information from parents or guardians about their child's details, relationship to the child, and participation in ministry programs.

## How To Complete This Form
To complete the form, follow the instructions below:

1. Please ensure that you have all the necessary information about the child and your relationship to the child.
2. Fill in the child's first name, last name, date of birth, and age accurately.
3. Select the correct relationship to the child (Mother, Father, Guardian, or Other).
4. Enter your contact information (email address, phone number, and home address).
5. Select the ministry programs you are interested in for your child.
6. Choose your experience level with ministry programs.
7. If applicable, indicate if your child has any special needs and provide details.
8. Enter any allergies or dietary restrictions.
9. Provide the name and phone number of an emergency contact person.
10. Confirm that you agree to the ministry participation terms.

## Field-by-Field Explanation
- **Child First Name** (`child_first_name`, text, required): Enter the child's first name.
- **Child Last Name** (`child_last_name`, text, required): Enter the child's last name.
- **Date of Birth** (`date_of_birth`, date, required): Enter the child's date of birth in the correct format (mm/dd/yyyy).
- **Current Age** (`age`, number, required): Enter the child's current age.
- **Gender** (`gender`, select_one, required): Select the child's gender (Male, Female, or Other).
- **Parent First Name** (`parent_first_name`, text, required): Enter your first name (parent or guardian).
- **Parent Last Name** (`parent_last_name`, text, required): Enter your last name (parent or guardian).
- **Relationship to Child** (`relationship`, select_one, required): Select your relationship to the child (Mother, Father, Guardian, or Other).
- **Email Address** (`parent_email`, email, required): Enter your email address.
- **Phone Number** (`parent_phone`, text, required): Enter your phone number.
- **Home Address** (`contact_address`, text, required): Enter your home address.
- **City** (`city`, text, required): Enter the city of your home address.
- **State** (`state`, text, required): Enter the state of your home address.
- **Zip Code** (`zip_code`, text, required): Enter the zip code of your home address.
- **Ministry Programs** (`ministry_programs`, select_multiple, required): Select the ministry programs your child is interested in (Sunday School, Youth Group, Summer Camp, Choir, Bible Study, Music Ministry, Other).
- **Previous Experience** (`experience_level`, select_one, required): Choose your child's previous experience level with ministry programs (First time, Some experience, Regular participant).
- **Special Needs** (`has_special_needs`, select_one, required): Indicate if your child has any special needs (Yes, No).
- **Special Needs Details** (`needs_details`, text, required if has_special_needs is yes): If your child has special needs, provide details.
- **Allergies or Dietary Restrictions** (`allergies`, text, optional): Enter any allergies or dietary restrictions your child has.
- **Emergency Contact Person** (`emergency_contact`, text, required): Enter the name and phone number of an emergency contact person.
- **Agreement and Consent** (`agreement_and_consent`, select_one, required): Confirm that you agree to ministry participation (Yes, I agree, No).

Note: Please ensure that you have read and understood the agreement and consent section before confirming. If you are unsure or have any questions, please contact the ministry staff for assistance.
