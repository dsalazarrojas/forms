# pet_sodium_intake_tracker_form - Help Guide
## Purpose
This form is designed to track the sodium intake of pets in a veterinary setting, for monitoring and management of pet health.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the **Pet Sodium Intake** value, which is the amount of sodium consumed by the pet.
2. Enter the **Pet Name** in the text field.
3. Select the date of **Intake Date** using the calendar icon.
4. Select the time of **Feeding Time** using the clock icon.
5. Choose the **Feeding Method** from the dropdown menu (Free feeding, Limited feeding, or Intermittent feeding).
6. Enter the name of the **Owner Name** (optional, but recommended for record-keeping).
7. Enter the name of the **Veterinarian Name** (optional, but recommended for record-keeping).
8. Select the **Pet Type** from the dropdown menu (Dog, Cat, or Other).
9. Add any additional **Notes** about the pet's sodium intake or health.

## Field-by-Field Explanation
* **Pet Sodium Intake** (`pet_sodium_intake`, number, required): Enter the amount of sodium consumed by the pet.
* **Pet Name** (`pet_name`, text, required): Enter the name of the pet.
* **Intake Date** (`intake_date`, date, required): Select the date of sodium intake.
* **Feeding Time** (`feeding_time`, time, required): Select the time of feeding.
* **Feeding Method** (`feeding_method`, select_one, required): Choose from Free feeding, Limited feeding, or Intermittent feeding.
* **Owner Name** (`owner_name`, text, optional): Enter the name of the pet owner.
* **Veterinarian Name** (`veterinarian_name`, text, optional): Enter the name of the veterinarian.
* **Pet Type** (`pet_type`, select_multiple, required): Choose from Dog, Cat, or Other.
* **Notes** (`notes`, note, optional): Add any additional notes about the pet's sodium intake or health.
