# Booster Club Membership Form - Help Guide
## Purpose
The Booster Club Membership Form is designed to collect information from individuals interested in joining the booster club. The form is a crucial tool for registering new members and managing their details.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter your first name in the "First Name" field.
2. Enter your last name in the "Last Name" field.
3. Provide your email address in the "Email Address" field.
4. Enter your phone number in the "Phone Number" field.
5. If applicable, select your relationship to the student in the "Relationship to Student" field.
6. Choose your desired membership level in the "Membership Level" field.
7. If applicable, enter your annual membership fee in the "Annual Membership Fee" field.
8. Select any committee or role interests in the "Committee or Role Interest" field.
9. Indicate your volunteer availability in the "Volunteer Availability" field.
10. Optionally, provide any relevant skills or experience you can contribute in the "Skills or Experience" field.
11. Enter your home address in the "Home Address" field.
12. Confirm that you accept the booster club guidelines by selecting "I accept" in the "I Acknowledge the Club Rules" field.
13. Finally, enter the date of this membership application in the "Membership Start Date" field.

## Field-by-Field Explanation

* **First Name** (`member_first_name`, text, required): Enter your first name.
* **Last Name** (`member_last_name`, text, required): Enter your last name.
* **Email Address** (`member_email`, email, required): Enter your email address, which will be used as your contact information.
* **Phone Number** (`member_phone`, text, required): Enter your best contact number.
* **Student Name** (`student_name`, text, required): Enter the name of the student you are affiliated with.
* **Student Grade** (`student_grade`, select_one, required): Select the current grade level of the student.
* **Relationship to Student** (`relationship_to_student`, select_one, required): Select your relationship to the student (e.g., parent, guardian, etc.).
* **Membership Level** (`membership_level`, select_one, required): Choose your desired membership level (e.g., standard member, premium member, etc.).
* **Annual Membership Fee** (`annual_fee`, number, optional): Enter the annual membership fee, if applicable.
* **Committee or Role Interest** (`committee_interest`, select_multiple, optional): Select any committee or role interests you have (e.g., event planning, fundraising, etc.).
* **Volunteer Availability** (`volunteer_availability`, select_multiple, optional): Indicate your volunteer availability (e.g., weekday mornings, weekends, etc.).
* **Skills or Experience** (`skills_experience`, text, optional): Provide any relevant skills or experience you can contribute.
* **Home Address** (`address`, text, required): Enter your home address.
* **I Acknowledge the Club Rules** (`waiver_acknowledgement`, select_one, required): Confirm that you accept the booster club guidelines.
* **Membership Start Date** (`membership_date`, date, required): Enter the date of this membership application.
