<thinking>
To design a help guide for the Hospital Emergency Contact Form, I need to understand its purpose and how to complete it. From the provided YAML, I see that this form is for patients to provide information about their emergency contact, including contact information, relationship, and other relevant details. The form is designed for patients to provide information that can be useful in case of an emergency. The fields in this form seem to be self-explanatory, so I can provide a clear and concise help guide without needing further clarification.
</thinking>

# Hospital Emergency Contact Form - Help Guide
## Purpose
The Hospital Emergency Contact Form is designed for patients to provide information about their emergency contact in case of an emergency. This form helps the hospital to quickly get in touch with the patient's emergency contact and provide them with updates on the patient's status.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter the patient's information:
	* Patient (text): Enter the patient's name.
2. Select the emergency contact:
	* Emergency contact (select one): Choose the type of relationship between the patient and the emergency contact (Spouse, Partner, Other).
3. Enter the emergency contact's information:
	* Name (text): Enter the emergency contact's name.
	* Phone (text): Enter the emergency contact's phone number.
	* Relationship (select one): Choose the type of relationship between the patient and the emergency contact (Spouse, Partner, Other).
4. Add additional details:
	* Medical History (text): Enter any relevant medical history or conditions that the emergency contact should be aware of.
	* Allergies (text): Enter any allergies that the emergency contact should be aware of.
	* Medications (text): Enter any medications that the emergency contact should be aware of.
	* Date (date): Enter the date of the emergency.
	* Time (time): Enter the time of the emergency.
	* Hospital (text): Enter the hospital where the patient is being treated.
	* Clinic (text): Enter the clinic where the patient is being treated.
	* Doctor (text): Enter the doctor's name.
5. Add any additional notes:
	* Emergency Contact Note (note): Enter any additional notes or comments that the emergency contact should be aware of.

## Field-by-Field Explanation
* **Patient (text)** (`Patient`, `text`, required/optional)
	* This field is where you enter the patient's name.
* **Emergency Contact (select one)** (`emergency_contact`, `select_one`, required/optional)
	* This field is where you choose the type of relationship between the patient and the emergency contact (Spouse, Partner, Other).
* **Name (text)** (`Name`, `text`, required/optional)
	* This field is where you enter the emergency contact's name.
* **Phone (text)** (`Phone`, `text`, required/optional)
	* This field is where you enter the emergency contact's phone number.
* **Relationship (select one)** (`Relationship`, `select_multiple`, required/optional)
	* This field is where you choose the type of relationship between the patient and the emergency contact (Spouse, Partner, Other).
* **Medical History (text)** (`Medical History`, `text`, required/optional)
	* This field is where you enter any relevant medical history or conditions that the emergency contact should be aware of.
* **Allergies (text)** (`Allergies`, `text`, required/optional)
	* This field is where you enter any allergies that the emergency contact should be aware of.
* **Medications (text)** (`Medications`, `text`, required/optional)
	* This field is where you enter any medications that the emergency contact should be aware of.
* **Date (date)** (`Date`, `date`, required/optional)
	* This field is where you enter the date of the emergency.
* **Time (time)** (`Time`, `time`, required/optional)
	* This field is where you enter the time of the emergency.
* **Hospital (text)** (`Hospital`, `text`, required/optional)
	* This field is where you enter the hospital where the patient is being treated.
* **Clinic (text)** (`Clinic`, `text`, required/optional)
	* This field is where you enter the clinic where the patient is being treated.
* **Doctor (text)** (`Doctor`, `text`, required/optional)
	* This field is where you enter the doctor's name.
* **Emergency Contact Note (note)** (`Emergency Contact Note`, `note`, required/optional)
	* This field is where you enter any additional notes or comments that the emergency contact should be aware of.
