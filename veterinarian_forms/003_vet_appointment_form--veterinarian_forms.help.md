# vet_appointment_form - Help Guide
## Purpose
This form is designed for scheduling appointments with pet owners, allowing you to gather essential information about their pets and preferences.

## How To Complete This Form

To complete this form, please follow these steps:

1. Fill in the following information about the pet:
	* Enter the Pet Name and Date of Birth of your pet.
	* Provide the Owner Name and their contact information (Email and Phone Number).
2. Select the preferred Appointment Date and Time for the consultation.
3. Choose your preferred Veterinarian Name and their specialization (e.g., General Practice, Surgery, Dentistry, or Cardiology).
4. Indicate the type of pet you have (e.g., Dog, Cat, Bird, Fish, or Other).
5. Specify how you would like to be contacted (Owner Contact Method).

## Field-by-Field Explanation

* **Pet Name** (`pet_name`, text, required): Enter the name of your pet.
* **Owner Name** (`owner_name`, text, required): Enter your name as the pet owner.
* **Date of Birth** (`pet_date_of_birth`, date, required): Enter the Date of Birth of your pet.
* **Appointment Date** (`appointment_date`, date, required): Schedule the preferred appointment date for the consultation.
* **Veterinarian Name** (`veterinarian_name`, text, required): Enter the name of the veterinarian you prefer to see.
* **Veterinarian Specialization** (`veterinarian_specialization`, select_one, required): Select the veterinarian's specialization (e.g., General Practice, Surgery, Dentistry, or Cardiology).
* **Pet Type** (`pet_type`, select_multiple, required): Indicate the type of pet you have (e.g., Dog, Cat, Bird, Fish, or Other).
* **Owner Contact Method** (`owner_contact_method`, text, required): Specify how you would like to be contacted (e.g., phone call, email, or in-person).
* **Email** (`email`, email, required): Enter your email address for contact.
* **Phone Number** (`phone_number`, text, required): Enter your phone number for contact.
* **Appointment Time** (`appointment_time`, time, required): Select the preferred appointment time for the consultation.
* **Notes** (`notes`, note, required): Enter any additional comments or instructions.

## Tips

* Please ensure that all required fields are filled out correctly to avoid any delays or issues with your appointment.
* If you have any questions or concerns about the form, feel free to ask your veterinarian for assistance.
* Double-check your contact information to ensure it is accurate and up-to-date.
