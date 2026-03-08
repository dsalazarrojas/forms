# Kids Club Membership Registration Form - Help Guide
## Purpose
The Kids Club Membership Registration Form is designed to collect information from parents or guardians about their child's membership details. This form will help us keep track of membership information, including membership start and end dates, status, and emergency contact details.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your child's first and last name.
2. Enter your email address and your child's date of birth.
3. Provide your address and your child's parent's name.
4. Enter your parent's phone number and emergency contact name.
5. Indicate the relationship of the emergency contact.
6. Choose your membership type (e.g., active or inactive).
7. Select the start and end dates of the membership.
8. Select the current membership status (e.g., active or inactive).
9. Optionally, add any comments about your child's membership.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required): Enter your child's first name.
* **Last Name** (`last_name`, text, required): Enter your child's last name.
* **Email** (`email`, email, required): Enter your email address so we can keep in touch.
* **Parent Name** (`parent_name`, text, required): Enter your name as a parent or guardian.
* **Date of Birth** (`date_of_birth`, date, required): Enter your child's date of birth in the correct format (YYYY-MM-DD).
* **Address** (`address`, text, required): Enter your address so we can contact you if needed.
* **Parent Phone** (`parent_phone`, text, required): Enter your phone number as a parent or guardian.
* **Emergency Contact Name** (`emergency_contact_name`, text, required): Enter the name of the emergency contact person.
* **Emergency Contact Number** (`emergency_contact_number`, text, required): Enter the phone number of the emergency contact person.
* **Emergency Contact Relationship** (`emergency_contact_relationship`, select_one, required): Choose how you are related to the emergency contact person (e.g., parent, guardian, or friend).
* **Membership Type** (`membership_type`, select_one, required): Choose the type of membership (e.g., active or inactive).
* **Membership Start Date** (`membership_start_date`, date, required): Enter the start date of the membership.
* **Membership End Date** (`membership_end_date`, date, required): Enter the end date of the membership.
* **Membership Status** (`membership_status`, select_multiple, required): Choose the current membership status (e.g., active or inactive).
* **Comments** (`comments`, text, optional): Leave any additional comments about your child's membership.
* **Emergency Contact Note** (`emergency_contact_note`, text, optional): Leave any additional comments about the emergency contact person.
