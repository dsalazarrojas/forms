# Summer Camp Detailed Registration Form - Help Guide
## Purpose
This form is designed to collect detailed information from participants of the Summer Camp, to ensure that all necessary contact and demographic information is gathered for each participant.

## How To Complete This Form

To complete this form, follow these steps:
1. Fill in your **First Name** and **Last Name** in the respective fields.
2. If you have a **Participant ID**, please enter it in the designated field.
3. Enter your **Date of Birth** in the format `MM/DD/YYYY`.
4. Enter your **Contact Phone** number.
5. Enter your **Address** where you can be reached.
6. Enter your **Email** address.
7. Enter your **Phone** number.
8. If you have an **Emergency Contact**, fill in their **First Name** and **Last Name**.
9. Enter their **Phone** number.
10. Specify your **Emergency Contact Relationship** with the participant.
11. Select your **Participant Type** from the provided options.
12. If you've already registered, enter the **Registration Date** you registered.
13. Finally, select your **Participant Status** from the provided options.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required)
	+ Enter your first name.
* **Last Name** (`last_name`, text, required)
	+ Enter your last name.
* **Date of Birth** (`date_of_birth`, date, required)
	+ Enter your date of birth in the format `MM/DD/YYYY`.
* **Participant ID** (`participant_id`, text, optional)
	+ Enter your participant ID if you have one.
* **Contact Phone** (`contact_phone`, text, required)
	+ Enter your phone number.
* **Address** (`address`, text, optional)
	+ Enter your address.
* **Email** (`email`, email, optional)
	+ Enter your email address.
* **Phone** (`phone`, text, required)
	+ Enter your phone number.
* **Emergency Contact First Name** (`emergency_contact_first_name`, text, required)
	+ Enter your emergency contact's first name.
* **Emergency Contact Last Name** (`emergency_contact_last_name`, text, optional)
	+ Enter your emergency contact's last name.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, required)
	+ Enter your emergency contact's phone number.
* **Emergency Contact Relationship** (`emergency_contact_relationship`, text, required)
	+ Specify your relationship with the participant.
* **Participant Type** (`participant_type`, select_one, optional)
	+ Select your participant type from the provided options.
* **Registration Date** (`registration_date`, date, optional)
	+ Enter the date you registered if you've already done so.
* **Participant Status** (`participant_status`, select_multiple, required)
	+ Select your participant status from the provided options.
