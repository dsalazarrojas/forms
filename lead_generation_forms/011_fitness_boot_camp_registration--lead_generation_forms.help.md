# fitness_boot_camp_registration - Help Guide
## Purpose
This form is used for registering participants in a fitness boot camp. It collects essential information for the boot camp organization, including personal details, emergency contact information, medical considerations, and boot camp specifics.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your first name and last name in the respective fields.
2. Provide your email address and phone number.
3. Enter your birth date (in the format MM/DD/YYYY).
4. If you have an emergency contact, provide their name, phone number, and relation to you.
5. If you have medical conditions, list them in the field provided.
6. Enter the day of the week you plan to attend the boot camp.
7. Choose the start and end times of your session.
8. Select the location of the boot camp (if applicable).
9. Enter your unique boot camp ID (if applicable).
10. Choose the type of boot camp you are enrolling in (Weight Loss, Fitness Class, or Wellness).
11. Add any additional notes or comments about your registration.

## Field-by-Field Explanation

* **First name** (`first_name`, text, required): Enter your first name as it appears on your identification.
* **Last name** (`last_name`, text, required): Enter your last name as it appears on your identification.
* **Email** (`email`, email, required): Enter a valid email address where you can be reached for updates and communications.
* **Phone** (`phone`, text, required): Enter your phone number where you can be contacted.
* **Birthdate** (`birth_date`, date, required): Enter your birthdate in the format MM/DD/YYYY.
* **Emergency contact name** (`emergency_contact_name`, text, optional): If you have an emergency contact, enter their name.
* **Emergency contact phone** (`emergency_contact_phone`, text, optional): If you have an emergency contact, enter their phone number.
* **Relation with emergency contact** (`emergency_contact_relation`, select_one, optional): Choose how you are related to your emergency contact (Parent, Child, Spouse).
* **Emergency contact other** (`emergency_contact_other_relation`, text, optional): If your emergency contact relation is not listed, provide the correct relation.
* **Emergency contact other info** (`emergency_contact_other_info`, text, optional): Add any additional information about your emergency contact.
* **Medical conditions** (`medical_conditions`, text, optional): List any medical conditions you have.
* **Allergies** (`allergies`, text, optional): List any allergies you have.
* **Medical devices** (`medical_devices`, text, optional): List any medical devices you use (e.g., pacemaker, prosthetic).
* **Medical procedures** (`medical_procedures`, text, optional): List any medical procedures you have had.
* **Medical notes** (`medical_notes`, text, optional): Add any additional medical notes.
* **First day** (`first_day`, select_one, required): Choose the day of the week you plan to attend the boot camp (Monday to Sunday).
* **Start time** (`start_time`, time, required): Choose the start time of your session.
* **End time** (`end_time`, time, required): Choose the end time of your session.
* **Location** (`location`, text, optional): If the boot camp has a specific location, enter it here.
* **Boot camp ID** (`boot_camp_id`, number, required): Enter your unique boot camp ID.
* **Boot camp name** (`boot_camp_name`, text, optional): Enter the name of the boot camp (if not provided, use the boot camp ID).
* **Boot camp location** (`boot_camp_location`, text, optional): Enter the location of the boot camp (if not provided, use the boot camp ID).
* **Boot camp type** (`boot_camp_type`, select_one, required): Choose the type of boot camp you are enrolling in (Weight Loss, Fitness Class, or Wellness).
* **Notes** (`notes`, note, optional): Add any additional notes or comments about your registration.
