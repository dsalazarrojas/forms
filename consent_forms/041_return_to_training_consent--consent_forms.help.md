<thinking>
This form is used to obtain consent from users to return to training. The purpose of this form is to collect information from users to ensure they are aware of and agree to the rules and guidelines associated with returning to training. The form is not a one-time activity and can be completed multiple times. It is intended to be filled out by users who are already familiar with the rules and guidelines, hence the option to select from a list of rules and guidelines. The form fields are designed to collect specific information from the user, such as their return date, the facilities they are returning to, and the staff they will be interacting with.
</thinking>

# return_to_training_consent - Help Guide
## Purpose
This form is used to obtain consent from users to return to training, allowing them to confirm their understanding of the rules and guidelines associated with returning to the training program.

## How To Complete This Form
To complete this form, follow these steps:

* Start by selecting the facility you are returning to from the list of available facilities.
* Enter the start and end dates of your return to training.
* Select the rules and guidelines you have read and understood.
* Enter the name and contact information of the staff member you will be interacting with during your return to training.
* Enter the contact information for your emergency contact.
* Enter the phone number for the facility you will be returning to.
* Enter the email addresses for the staff member who will read you the rules and guidelines, and the facility's email address.

## Field-by-Field Explanation

* **Return To Training Consent** (`return_to_training_consent`, text, required): Enter your consent statement indicating you understand and agree to the rules and guidelines for returning to training.
* **Facility** (`facility`, select_one, required): Select the facility you are returning to from the list of available facilities.
* **Start Date** (`start_date`, date, required): Enter the date you will start your return to training.
* **End Date** (`end_date`, date, required): Enter the date you will end your return to training.
* **Rules Read** (`rules_read`, select_multiple, required): Select the rules you have read and understood from the list.
* **Guidelines Read** (`guidelines_read`, select_one, required): Select the guidelines you have read and understood.
* **Rules Followed** (`rules_follow`, time, required): Enter the amount of time you will follow the rules.
* **Guidelines Followed** (`guidelines_follow`, time, required): Enter the amount of time you will follow the guidelines.
* **Facility Staff** (`facility_staff`, text, required): Enter the name of the staff member you will be interacting with during your return to training.
* **Emergency Contact** (`emergency_contact`, text, required): Enter the name and contact information of your emergency contact.
* **Facility Phone** (`facility_phone`, text, required): Enter the phone number for the facility you will be returning to.
* **Rules Read By** (`rules_read_by`, email, required): Enter the email address of the staff member who will read you the rules.
* **Guidelines Read By** (`guidelines_read_by`, email, required): Enter the email address of the staff member who will read you the guidelines.
* **Facility Email** (`facility_email`, email, required): Enter the email address of the facility.
* **Emergency Phone** (`emergency_phone`, text, not required): Enter the phone number for your emergency contact.
