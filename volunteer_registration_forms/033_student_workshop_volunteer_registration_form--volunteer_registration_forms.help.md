# Student Workshop Volunteer Registration Form - Help Guide
## Purpose
The Student Workshop Volunteer Registration Form is used to collect information from students who want to volunteer for a workshop. This form is used to gather details about each volunteer for internal tracking and organization purposes.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your first name in the First Name field.
2. Enter your last name in the Last Name field.
3. Provide your email address in the Email field.
4. Enter your phone number in the Phone field.
5. Select the workshop you want to volunteer for from the Select Workshop field.
6. Enter your date of birth in the Date of Birth field (in the format `MM/DD/YYYY`).
7. Select the duration of the workshop you want to attend from the Workshop Duration field.
8. Choose your volunteer type by selecting one or more options from the Volunteer Type field.
9. Indicate your volunteer status by selecting one option from the Volunteer Status field.
10. Add any additional notes about yourself in the Note field.

## Field-by-Field Explanation
### First Name
* **First Name** (`first_name`, text, required: false): Please enter your first name.

### Last Name
* **Last Name** (`last_name`, text, required: false): Please enter your last name.

### Email
* **Email** (`email`, email, required: false): Enter your email address. This will be used to contact you.

### Phone
* **Phone** (`phone`, text, required: false): Enter your phone number.

### Select Workshop
* **Select Workshop** (`select_workshop`, select_one, required: false): Choose the workshop you want to volunteer for from the options provided.

### Date of Birth
* **Date of Birth** (`date_of_birth`, date, required: false): Enter your date of birth in the format `MM/DD/YYYY`.

### Workshop Duration
* **Workshop Duration** (`workshop_duration`, time, required: false): Select the duration of the workshop you want to attend.

### Volunteer Type
* **Volunteer Type** (`volunteer_type`, select_multiple, required: false): Choose one or more options to describe your role as a volunteer (e.g., student, staff, faculty).

### Volunteer Status
* **Volunteer Status** (`volunteer_status`, select_one, required: false): Indicate your current volunteer status (e.g., active, inactive, pending).

### Note
* **Note** (`note`, note, required: false): Add any additional notes about yourself.
