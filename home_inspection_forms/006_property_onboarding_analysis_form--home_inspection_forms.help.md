# property-onboarding-analysis-form - Help Guide
## Purpose
This form is used to collect information about a property's onboarding status, including its address, condition, and ownership details. The form is designed to help real estate professionals assess the property's status and provide insights for potential buyers or renters.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the property's address in the "Property Address" field.
2. If applicable, select one or more options for "property_type" to describe the type of property (e.g., residential, commercial, etc.).
3. Enter the building's size in the "building_size" field.
4. Enter the lot's size in the "lot_size" field.
5. Choose the current status of the property by selecting "Active" or "Inactive" from the "property_status" dropdown.
6. If necessary, enter the date and time of the last inspection in the "inspection_date" and "inspection_time" fields, respectively.
7. Describe the property's current condition in the "property_condition" field.
8. List any notable features of the property in the "property_features" field.
9. Add any additional notes about the property in the "property_notes" field.
10. Enter the property owner's name, manager's name, contact person's name, phone number, and email address in their respective fields.
11. Finally, add any additional notes or information about the property in the "property_additional_notes" field.

## Field-by-Field Explanation
* **Property Address** (`property_address`, text, required): Enter the property's address, including street number and name, city, state, and zip code.
* **property_type** (`property_type`, select_multiple, optional): Select one or more types of property (e.g., residential, commercial, etc.).
* **building_size** (`building_size`, number, required): Enter the building's size, including the total square footage.
* **lot_size** (`lot_size`, number, optional): Enter the lot's size, including the total square footage.
* **property_status** (`property_status`, select_one, optional): Choose the current status of the property (Active or Inactive).
* **inspection_date** (`inspection_date`, date, optional): If necessary, enter the date of the last inspection.
* **inspection_time** (`inspection_time`, time, optional): If necessary, enter the time of the last inspection.
* **property_condition** (`property_condition`, text, optional): Describe the property's current condition, including any notable issues or concerns.
* **property_features** (`property_features`, text, optional): List any notable features of the property, such as pools, security systems, etc.
* **property_notes** (`property_notes`, note, optional): Add any additional notes or information about the property.
* **property_owner** (`property_owner`, text, optional): Enter the property owner's name.
* **property_manager** (`property_manager`, text, optional): Enter the property manager's name.
* **property_contact_person** (`property_contact_person`, text, optional): Enter the contact person's name.
* **property_phone** (`property_phone`, text, optional): Enter the property's phone number.
* **property_email** (`property_email`, email, optional): Enter the property's email address.
* **property_additional_notes** (`property_additional_notes`, text, optional): Add any additional notes or information about the property.
