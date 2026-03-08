# professional_development_volunteer_registration_form - Help Guide
## Purpose
This form is used to register as a volunteer for a professional development workshop or training session.

## How To Complete This Form
To complete this form, please follow these steps:

1. Provide your first name and last name in the "First Name" and "Last Name" fields.
2. Enter your email address and phone number in the "Email" and "Phone" fields, respectively.
3. If you are registering for a workshop, select the type of workshop you are interested in (e.g., "workshop", "training", "seminar", or "other").
4. If you have a specific workshop in mind, enter the name of the workshop in the "Workshop Name" field.
5. If you are registering for a training session, select the time slot you are available for the training session.
6. Enter your role(s) and the name of the organization you are with in the "Role" and "Organization" fields, respectively.
7. Select the location of the workshop or training session from the "Workshop Location" options.
8. Enter the number of volunteer hours you are willing to commit in the "Volunteer Hours" field.
9. Select the date and time you are available to volunteer in the "Available Date" and "Available Time" fields.
10. If you have any additional comments or information, you can enter them in the "Notes" field.

## Field-by-Field Explanation
### First Name
* **First Name** (`first_name`, text, required): Enter your first name.

### Last Name
* **Last Name** (`last_name`, text, required): Enter your last name.

### Email
* **Email** (`email`, email, required): Enter your email address.

### Phone
* **Phone** (`phone`, text, required): Enter your phone number.

### Date of Birth
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth.

### Workshop Type
* **Workshop Type** (`workshop_type`, select_one, required): Select the type of workshop you are interested in (e.g., "workshop", "training", "seminar", or "other").

### Workshop Name
* **Workshop Name** (`workshop_name`, text, required): If you have a specific workshop in mind, enter the name of the workshop.

### Training Session
* **Training Session** (`training_session`, time, required): If you are registering for a training session, select the time slot you are available for.

### Organization
* **Organization** (`organization`, text, required): Enter the name of the organization you are with.

### Role
* **Role** (`role`, select_multiple, required): Select your role(s) as a volunteer (e.g., "staff", "volunteer", "guest").

### Workshop Location
* **Workshop Location** (`workshop_location`, select_multiple, required): Select the location of the workshop or training session from the options.

### Volunteer Hours
* **Volunteer Hours** (`volunteer_hours`, number, required): Enter the number of volunteer hours you are willing to commit.

### Available Date
* **Available Date** (`available_date`, date, required): Select the date you are available to volunteer.

### Available Time
* **Available Time** (`available_time`, time, required): Select the time slot you are available to volunteer.

### Notes
* **Notes** (`notes`, note, required): If you have any additional comments or information, you can enter them here.
