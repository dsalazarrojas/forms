</thinking>

# Childhood Learning Center Registration Form - Help Guide
## Purpose
The purpose of this form is to collect information about a child and their parents or guardians for enrollment in the Childhood Learning Center. This form is used to gather essential details such as the child's name, date of birth, address, and contact information. It also includes fields for parent or guardian information, program preferences, and any special needs or allergies the child may have.

## How To Complete This Form

To complete this form, follow these steps:

1. Start by filling out the child's information:
	* Enter the child's first name in the "Child First Name" field.
	* Enter the child's last name in the "Child Last Name" field.
	* Enter the child's date of birth in the "Date of Birth" field.
	* Select the child's gender from the "Gender" field.
2. Enter the child's address:
	* Enter the street address in the "Street Address" field.
	* Enter the city in the "City" field.
	* Enter the state in the "State" field.
	* Enter the zip code in the "Zip Code" field.
3. Enter the parent or guardian's information:
	* Enter the parent or guardian's first name in the "Parent First Name" field.
	* Enter the parent or guardian's last name in the "Parent Last Name" field.
	* Select the relationship to the child from the "Relationship to Child" field.
	* Enter the email address of the parent or guardian in the "Email Address" field.
	* Enter the phone number of the parent or guardian in the "Phone Number" field.
4. Choose the program preferences:
	* Select the program type from the "Program Type" field.
	* Select the desired start date for the program in the "Desired Start Date" field.
	* Select the age group for the child from the "Age Group" field.
5. Finally, provide any additional information:
	* If the child has any special needs or allergies, select "Yes" in the "Does the child have any special needs or allergies" field and provide a description in the "Please describe any special needs or allergies" field.
	* Enter the emergency contact's name in the "Emergency Contact Name" field.
	* Enter the emergency contact's phone number in the "Emergency Contact Phone" field.
	* Select the relationship to the child from the "Relationship to Child" field.

## Field-by-Field Explanation

* **Child First Name** (`child_first_name`, `text`, required): Enter the child's first name.
* **Child Last Name** (`child_last_name`, `text`, required): Enter the child's last name.
* **Date of Birth** (`date_of_birth`, `date`, required): Enter the child's date of birth in the format MM/DD/YYYY.
* **Gender** (`gender`, `select_one`, required): Select the child's gender (Male, Female, Other, or Prefer not to say).
* **Street Address** (`address`, `text`, required): Enter the child's street address.
* **City** (`city`, `text`, required): Enter the city where the child lives.
* **State** (`state`, `text`, required): Enter the state where the child lives.
* **Zip Code** (`zip_code`, `text`, required): Enter the child's zip code.
* **Parent First Name** (`parent_first_name`, `text`, required): Enter the parent or guardian's first name.
* **Parent Last Name** (`parent_last_name`, `text`, required): Enter the parent or guardian's last name.
* **Relationship to Child** (`relationship`, `select_one`, required): Select the relationship of the parent or guardian to the child (Mother, Father, Guardian, Other).
* **Email Address** (`parent_email`, `email`, required): Enter the email address of the parent or guardian.
* **Phone Number** (`parent_phone`, `text`, required): Enter the phone number of the parent or guardian.
* **Program Type** (`program_type`, `select_one`, required): Select the program type (Part-time (2-3 days), Part-time (4 days), Full-time (5 days), Extended hours).
* **Desired Start Date** (`start_date`, `date`, required): Select the desired start date for the program.
* **Age Group** (`age_group`, `select_one`, required): Select the age group for the child (Infants (0-12 months), Toddlers (1-3 years), Preschool (3-5 years), Pre-K (4-5 years)).
* **Does the child have any special needs or allergies** (`special_needs`, `select_one`, required): Select "Yes" if the child has any special needs or allergies, and provide a description in the "Please describe any special needs or allergies" field.
* **Emergency Contact Name** (`emergency_name`, `text`, required): Enter the emergency contact's name.
* **Emergency Contact Phone** (`emergency_phone`, `text`, required): Enter the emergency contact's phone number.
* **Relationship to Child** (`emergency_relationship`, `text`, required): Select the relationship of the emergency contact to the child (Mother, Father, Guardian, Other).
* **Please describe any special needs or allergies** (`special_needs_details`, `text`, optional): Provide a description of any special needs or allergies the child may have.
