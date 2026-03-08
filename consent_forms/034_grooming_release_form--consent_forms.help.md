<thinking>

This form is used to gather essential information from pet owners or individuals responsible for a pet's grooming needs. This form is designed to provide a clear and concise means of communication between pet groomers and pet owners. Please ensure that the information provided is accurate and complete, as it will be used to tailor the pet's grooming experience to their specific needs. 

Duplicate entries or submissions should be avoided to prevent errors and ensure consistency in our records.

</thinking>

# Grooming Release Form - Help Guide
## Purpose
The Grooming Release Form is used to collect information about a pet's grooming needs, health status, and any special requirements or allergies. This information will be used to provide a tailored grooming experience for your pet.

## How To Complete This Form
To complete the form, please follow these steps:

1. Enter your pet's information in the "Pet Information" section.
2. Provide your contact information in the "Contact Information" section.
3. Answer questions about your pet's health status in the "Pet Health" section.
4. Select the vaccination status of your pet in the "Vaccination Status" section.
5. Share any allergy information and special instructions for your pet's groomer in the "Allergy Information" and "Special Instructions" sections.
6. List any medical conditions that may affect your pet's grooming experience in the "Medical Conditions" section.
7. Give your consent for the groomer to perform the scheduled service.
8. Finally, choose the date for the appointment in the "Date" section.

## Field-by-Field Explanation
### Pet Information
* **Pet Information (pet_info)** (`pet_info`, `text`, required: `false`): This is where you will enter your pet's basic information such as their name, breed, and species.
### Owner Information
* **Owner Information (owner_info)** (`owner_info`, `text`, required: `false`): This is where you will provide your contact information so we can reach you for any questions or updates.
### Contact Information
* **Contact Information (contact_info)** (`contact_info`, `text`, required: `false`): This is where you will enter your name and any additional contact information we might need to reach you.
### Pet Health
* **Pet Health (pet_health)** (`pet_health`, `text`, required: `false`): This is where you will report any health issues or concerns that may affect your pet's grooming experience.
### Vaccination Status
* **Vaccination Status (vaccination_status)** (`vaccination_status`, `select_multiple`, required: `false`): Select "Active" if your pet is up-to-date on vaccinations, or "Inactive" if they are not.
### Allergy Information
* **Allergy Information (allergy_info)** (`allergy_info`, `text`, required: `false`): This is where you will list any allergies or sensitivities your pet may have that we should be aware of.
### Special Instructions
* **Special Instructions (special_instructions)** (`special_instructions`, `text`, required: `false`): Provide any special instructions or requirements we should be aware of while grooming your pet.
### Medical Conditions
* **Medical Conditions (medical_conditions)** (`medical_conditions`, `text`, required: `false`): List any medical conditions that may affect your pet's grooming experience.
### Consent
* **Consent (consent)** (`consent`, `text`, required: `false`): Give your consent for us to perform the scheduled service.
### Date
* **Date (date)** (`date`, `date`, required: `false`): Choose the date for your pet's appointment.

Note: The fields that are marked as `required: false` can be left blank, but please be aware that providing accurate and complete information will help us provide the best service for your pet.
