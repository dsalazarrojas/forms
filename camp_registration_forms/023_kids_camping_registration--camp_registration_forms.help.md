# Kids Camping Registration - Help Guide
## Purpose
The purpose of this form is to collect information from parents or guardians about their children who will be participating in a camping activity. The form is used to gather essential details about each child, including their names, contact information, and preferences for the activity.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the child's first name in the "First Name" field.
2. Enter the child's last name in the "Last Name" field.
3. Provide the father's name in the "Father's Name" field.
4. Enter the mother's name in the "Mother's Name" field.
5. Enter the parent's email address in the "Email" field.
6. Input the parent's phone number in the "Phone" field.
7. Enter the name of the child's school in the "School Name" field (if applicable).
8. Choose the activity date for the child in the "Activity Date" field (in YYYY-MM-DD format).
9. Select the time the child will participate in the activity in the "Activity Time" field.
10. Enter the location of the activity in the "Activity Location" field.
11. Check the "Parent's Consent" checkbox with the correct option (True or False).
12. Select the preferred activity type for the child from the available options in the "Activity Type" field (Camping, Outdoor Picnic, Picnic in the Park, Picnic at the Zoo).

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required: false): Enter the child's first name.
* **Last Name** (`last_name`, text, required: false): Enter the child's last name.
* **Father's Name** (`parents_first_name`, text, required: false): Enter the father's name.
* **Mother's Name** (`parents_last_name`, text, required: false): Enter the mother's name.
* **Email** (`email`, email, required: false): Enter the parent's email address.
* **Phone** (`phone`, text, required: false): Input the parent's phone number.
* **School Name** (`school_name`, text, required: false): Enter the name of the child's school (if applicable).
* **Activity Date** (`activity_date`, date, required: false): Choose the date of the activity (in YYYY-MM-DD format).
* **Activity Time** (`activity_time`, time, required: false): Select the time the child will participate in the activity.
* **Activity Location** (`activity_location`, text, required: false): Enter the location of the activity.
* **Parent's Consent** (`parent_consent`, select_one, required: false): Check this box with the correct option (True or False).
* **Activity Type** (`activity_type`, select_multiple, required: false): Select the preferred activity type for the child from the available options.
