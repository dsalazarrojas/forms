# Surgical Procedure Pricing Inquiry - Help Guide
## Purpose
This form is used to collect information about a surgical procedure pricing inquiry from a user. It helps the hospital or clinic to provide accurate pricing information to the user.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the form with your contact information, including your name, email, and phone number.
2. Select the type of surgery you are inquiring about.
3. Enter the name of the procedure you are interested in.
4. Enter the estimated duration of the procedure.
5. Enter the name and fee of the surgeon involved.
6. Enter the name and fee of the anesthetist involved.
7. Enter the name and fee of the facility (e.g. hospital or clinic).
8. Enter the name and fee of any additional assistants involved (e.g. nurses, technicians).
9. Calculate the total estimated fee for the procedure.
10. Enter the date and time of the procedure.
11. Enter your name and contact information for follow-up.
12. Add any additional comments or information about your inquiry.

## Field-by-Field Explanation
* **User Input** (`user_input`, text, required: false): A field for the user to enter any additional information or comments about their inquiry.
* **Surgery Type** (`surgery_type`, select_one, required: false): Select one of the following options to indicate the type of surgery you are inquiring about:
	+ Cardiac
	+ Dermatologic
	+ Gastrointestinal
	+ Neurosurgery
	+ Obstetrics And Gynecology
	+ Ophthalmic
	+ Plastics
	+ Thoracic
	+ Urology
* **Procedure Name** (`procedure_name`, text, required: false): Enter the name of the surgical procedure you are interested in.
* **Procedure Duration** (`procedure_duration`, number, required: false): Enter the estimated duration of the surgical procedure in minutes or hours.
* **Surgeon** (`surgeon_fee`, text, required: false): Enter the name and fee of the surgeon involved in the procedure.
* **Anesthetist** (`anesthetist_fee`, text, required: false): Enter the name and fee of the anesthetist involved in the procedure.
* **Facility** (`facility_fee`, text, required: false): Enter the name and fee of the facility (e.g. hospital or clinic) where the procedure will take place.
* **Assistant** (`assistant_fee`, text, required: false): Enter the name and fee of any additional assistants involved (e.g. nurses, technicians).
* **Total Fee** (`total_fee`, number, required: false): Calculate the estimated total fee for the procedure by adding the fees of the surgeon, anesthetist, and other personnel involved.
* **Date** (`date`, date, required: false): Enter the date of the procedure.
* **Time** (`time`, time, required: false): Enter the time of the procedure.
* **Contact Name** (`contact_name`, text, required: false): Enter your name as a contact person.
* **Contact Email** (`contact_email`, email, required: false): Enter your email address as a contact person.
* **Contact Phone** (`contact_phone`, text, required: false): Enter your phone number as a contact person.
* **Additional Comments** (`additional_comments`, note, required: false): Add any additional comments or information about your inquiry.
