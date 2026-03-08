<thinking>
This form appears to be for collecting information from clients for life coaching services. The form is designed to gather client information, contact preferences, emergency contact information, medical history, fitness goals, and other relevant details. The form likely serves as an initial intake for life coaching services, and the information collected will be used to tailor coaching sessions and provide personalized guidance. 
The form structure suggests that the client will be contacted and worked with closely, requiring emergency contact information, and possibly medical history for safety considerations. It's likely that the form will be filled out by the client themselves or by someone with their consent. The "goals" field is a select_one field, which implies that the client must choose one or more specific goals to work towards during their coaching sessions. The form appears to be designed for a one-time intake, rather than an ongoing or repeatable form.

</thinking>

# fit_life_coaching_intake_form - Help Guide
## Purpose
The fit_life_coaching_intake_form is a questionnaire designed to collect essential information from clients seeking life coaching services. The form is used to understand the client's goals, preferences, and medical history, enabling the coach to provide personalized guidance and support.

## How To Complete This Form
To complete the fit_life_coaching_intake_form, follow these steps:

1. Provide your client's information in the "Client Information" section.
2. Specify your contact preferences in the "Contact Preferences" section.
3. List emergency contacts in the "Emergency Contacts" section.
4. Choose your primary, secondary, and additional emergency contacts in the "Emergency Contact" sections.
5. Describe your medical history in the "Medical History" section.
6. State your fitness goals in the "Fitness Goals" section.
7. Select one or more of the provided goals that resonate with you in the "Goals" section.
8. Enter your availability for coaching sessions in the "Availability" and "Availability 2" sections (if applicable).
9. Provide emergency contact information in the "Emergency Contact Info" section.
10. Enter the name, phone, and email of your emergency contact in the "Emergency Contact Name", "Contact Phone", and "Contact Email" sections (if applicable).

## Field-by-Field Explanation

* **Client Information** (`client_information`, `text`, required: false):
	+ Enter your name, address, and any other relevant information about yourself.
* **Contact Preferences** (`contact_preferences`, `text`, required: false):
	+ Specify how you would like to be contacted (e.g., phone, email, or in-person).
* **Emergency Contacts** (`emergency_contacts`, `text`, required: false):
	+ List the names and contact information of people you would like us to contact in case of an emergency.
* **Primary Contact** (`emergency_contacts_0`, `text`, required: false):
	+ Enter the name of your primary emergency contact.
* **Secondary Contact** (`emergency_contacts_1`, `text`, required: false):
	+ Enter the name of your secondary emergency contact.
* **Emergency Contact 3** (`emergency_contacts_2`, `text`, required: false):
	+ Enter the name of your third emergency contact (if applicable).
* **Medical Information** (`medical_info`, `text`, required: false):
	+ Describe any medical conditions or concerns you have.
* **Medical History** (`medical_history`, `text`, required: false):
	+ Summarize your medical history, including any relevant health issues or surgeries.
* **Fitness Goals** (`fitness_goals`, `text`, required: false):
	+ State your fitness goals and aspirations.
* **Goals** (`goals`, `select_one`, required: true):
	+ Choose one or more of the provided goals that align with your aspirations.
* **Availability** (`availability`, `date`, required: false):
	+ Select the dates and times you are available for coaching sessions.
* **Availability 2** (`availability_2`, `date`, required: false):
	+ Select additional availability for coaching sessions.
* **Emergency Contact Info** (`emergency_contact_info`, `text`, required: false):
	+ Provide any additional information about your emergency contacts.
* **Emergency Contact Name** (`emergency_contact_name`, `text`, required: false):
	+ Enter the name of your emergency contact.
* **Relationship** (`emergency_contact_relationship`, `text`, required: false):
	+ Specify your relationship with your emergency contact (e.g., spouse, child, or friend).
* **Contact Phone** (`emergency_contact_phone`, `text`, required: false):
	+ Enter the phone number of your emergency contact.
* **Contact Email** (`emergency_contact_email`, `text`, required: false):
	+ Enter the email of your emergency contact.

## Tips
* Please fill out this form accurately and honestly.
* If you have any questions or concerns, reach out to your life coach for guidance.
* The information collected will be kept confidential and used to tailor coaching sessions to your specific needs.
