# Veterinary Prescription Form - Help Guide
## Purpose
The Veterinary Prescription Form is used to create and document veterinary prescriptions for pets. It captures the necessary details for the prescription, including owner and pet information, prescription details, and signatures from both the veterinarian and the owner.

## How To Complete This Form
To complete this form, follow these steps:

* Fill in the pet owner's information, including their name and any relevant contact details.
* Provide information about the pet, including its name and species.
* Enter the prescription details, including any relevant medical information and treatment instructions.
* Choose the veterinarian's signature, selecting the correct doctor from the list.
* Choose the owner's signature, selecting the correct owner from the list.
* Enter the date and time the prescription was given.
* Optionally, enter any comments from the veterinarian or owner.
* If required, enter the prescription number and expiration date.

## Field-by-Field Explanation
### Pet Owner Information
* **Pet Owner Information** (`pet_owner_info`, text, required: false): Provide the name and contact information of the pet's owner.

### Pet Info
* **Pet Info** (`pet_info`, text, required: false): Enter the name and species of the pet.

### Prescription Info
* **Prescription Info** (`prescription_info`, text, required: false): Enter prescription details here.

### Veterinarian Signature
* **Veterinarian Signature** (`veterinary_signature`, select_multiple, required: true): Select the correct veterinarian from the list, ensuring that only one is chosen.

### Owner Signature
* **Owner Signature** (`owner_signature`, select_multiple, required: true): Select the correct owner from the list, ensuring that only one is chosen.

### Date Given
* **Date Given** (`date_given`, date, required: false): Enter the date the prescription was given.

### Time Given
* **Time Given** (`time_given`, time, required: false): Enter the time the prescription was given.

### Veterinarian Comments
* **Veterinarian Comments** (`veterinarian_comments`, text, required: false): Enter any comments from the veterinarian regarding the prescription.

### Owner Comments
* **Owner Comments** (`owner_comments`, text, required: false): Enter any comments from the owner regarding the prescription.

### Prescription Number
* **Prescription Number** (`prescription_number`, number, required: false): If required, enter the prescription number here.

### Expiration Date
* **Expiration Date** (`expiration_date`, date, required: false): Enter the expiration date of the prescription.

## Tips
* Ensure that all required fields are filled out accurately and completely.
* Review the form carefully before submitting it.
* The form should only be used for legitimate veterinary prescriptions, and its completion should be in accordance with relevant laws and regulations.
* If you are unsure about any part of the form, consult a veterinarian or the relevant authority for guidance.
