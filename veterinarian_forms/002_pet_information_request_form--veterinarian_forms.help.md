# pet_information_request_form - Help Guide
## Purpose
This form is for gathering information about a pet and its owner. It will help us better serve our animal friends.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the required fields: pet_name, owner_name, pet_type, pet_breed, pet_age, contact_email, and contact_phone.
2. Choose the correct pet_type and pet_breed options (Yes/No) based on the pet's characteristics.
3. Enter the pet's name and owner's name accurately.
4. Provide a valid email address for contact_email.
5. Enter a phone number for contact_phone.

## Field-by-Field Explanation
* **pet_name** (`pet_name`, text, required): Enter the name of the pet, e.g., "Bella" or "Max".
* **owner_name** (`owner_name`, text, required): Enter the name of the pet's owner, e.g., "John Doe".
* **pet_type** (`pet_type`, select_multiple, required): Choose "Yes" if the pet has the characteristic, "No" otherwise.
* **pet_breed** (`pet_breed`, select_one, required): Choose the best description of the pet's breed (e.g., "Yes, Labrador" for a Labrador mix).
* **pet_weight** (`pet_weight`, number, not required): If known, enter the pet's weight in pounds or kilograms.
* **pet_age** (`pet_age`, number, required): Enter the pet's age in years.
* **contact_email** (`contact_email`, email, required): Enter the email address of the pet's owner.
* **contact_phone** (`contact_phone`, text, required): Enter the pet's owner's phone number.

## Tips
- Please double-check that all required fields are filled out accurately.
- If you're unsure about a field, ask for help or clarification.
- If the pet has a mix of characteristics, choose the closest match for pet_type and pet_breed.
- Use a valid email address and phone number for contact_email and contact_phone.
