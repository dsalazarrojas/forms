<thinking>
The internal reasoning block to consider when creating this help guide:

- The form is intended to collect information about a pet, specifically its exam details.
- The form has a mix of text fields, select options, and a note field, indicating that users need to provide various types of information.
- The form is not required, which means that users can leave some fields blank.
- The select options for "Pet Type", "Breed", "Color", "Health", and "Vaccinations" suggest that the user should have a clear understanding of the available options.
- The presence of a "note" field for "Medical Notes" suggests that users may need to provide a brief description or additional information about the pet.
- The fields "Doctor Name", "Doctor Phone", and "Doctor Email" imply that the user may need to provide contact information for the pet's doctor.
- There is no clear indication of how the user will use the form, but it is likely used for medical purposes.

</thinking>

# Pet Exam Form - Help Guide

## Purpose
The Pet Exam Form is a collection of questions designed to gather information about a pet's exam details. This form is intended to be completed by pet owners to provide their pet's medical information.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the pet's name in the "Pet Name" field.
2. Select the pet's type from the "Pet Type" dropdown list.
3. Select the pet's breed from the "Pet Breed" dropdown list.
4. Enter the pet's weight in the "Weight" field.
5. Enter the pet's age in the "Age" field.
6. Select the pet's color from the "Color" dropdown list.
7. Select the pet's health conditions from the "Health" dropdown list.
8. Select the pet's vaccination status from the "Vaccinations" dropdown list.
9. Enter any medication the pet is taking in the "Medication" field.
10. Add any additional medical notes about the pet in the "Medical Notes" field.
11. Enter the doctor's name in the "Doctor Name" field.
12. Enter the doctor's phone number in the "Doctor Phone" field.
13. Enter the doctor's email address in the "Doctor Email" field.

## Field-by-Field Explanation

* **Pet Name** (`pet_name`, text, required): Enter the pet's name.
* **Pet Type** (`pet_type`, select_one, required): Select the pet's type, such as Cat, Dog, or Other.
* **Pet Breed** (`pet_breed`, select_multiple, required): Select the pet's breed, such as Labrador, Poodle, Golden, or Other.
* **Weight** (`pet_weight`, number, required): Enter the pet's weight in pounds or kilograms.
* **Age** (`pet_age`, number, required): Enter the pet's age in years.
* **Color** (`pet_color`, select_one, required): Select the pet's color, such as Black, White, or Grey.
* **Health** (`pet_health`, select_multiple, required): Select any health conditions the pet has, such as Heart, Lungs, Liver, or Other.
* **Vaccinations** (`pet_vaccinations`, select_multiple, required): Select the pet's vaccination status, such as Up-to-date, Not Up-to-date, or Partially Up-to-date.
* **Medication** (`pet_medication`, text, required): Enter any medication the pet is taking.
* **Medical Notes** (`medical_notes`, note, required): Add any additional medical notes about the pet.
* **Doctor Name** (`doctor_name`, text, required): Enter the doctor's name.
* **Doctor Phone** (`doctor_phone`, text, required): Enter the doctor's phone number.
* **Doctor Email** (`doctor_email`, email, required): Enter the doctor's email address.

## Tips
- Make sure to enter accurate information about the pet and its medical history.
- Use the "select_all" and "deselect_all" buttons to manage the pet's breeds and health conditions.
- If you need to add more information about the pet's medical history, you can add additional "Medical Notes" fields.
- Double-check the doctor's contact information to ensure it is accurate.
