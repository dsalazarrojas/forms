# Pet Prescription Form - Help Guide
## Purpose
This form is used to create a prescription for your pet's medical needs. It's a simple, one-page form that gathers information about your pet, your relationship with the owner, and the treatment or medication being prescribed.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields with accurate and clear information.
2. Select the correct species of your pet from the pet_species field.
3. Choose the correct veterinarian that will be administering the treatment or prescribing the medication.

## Field-by-Field Explanation

* **pet_prescription_form** (`text`, required/optional): This field is the form's title. This field is not a user-facing field, but an internal label for the form.
* **pet_name** (`text`, required/optional): Enter your pet's name, as this will help us track the prescription to your pet.
* **pet_species** (`select_one`, required/optional): Select the species of your pet (cat, dog, bird, or fish).
* **pet_weight** (`number`, required/optional): Enter your pet's weight.
* **owner_name** (`text`, required/optional): Enter your name as the owner of the pet.
* **contact_number** (`text`, required/optional): Enter your contact number in case we need to reach you.
* **medical_condition** (`text`, required/optional): Describe your pet's medical condition that requires treatment or medication.
* **treatment_plan** (`note`, required/optional): Briefly describe the treatment or medication plan required for your pet.
* **veterinarian** (`select_multiple`, required/optional): Select one or more veterinarians that will be administering the treatment or prescribing the medication (Dr. Smith, Dr. Johnson, Dr. Thompson).
* **prescription_dosage** (`time`, required/optional): If applicable, enter the dosage and schedule for the treatment or medication.
* **medication** (`text`, required/optional): Enter the name and dosage of the medication prescribed.
* **prescription_type** (`select_one`, required/optional): Select the type of prescription (medication, food, or supplement).
* **expiration_date** (`date`, required/optional): If applicable, enter the expiration date of the medication or treatment.
* **prescription_status** (`select_one`, required/optional): Select the status of the prescription (pending, approved, or rejected).

Note: Fields marked as "optional" can be left blank if not applicable.
