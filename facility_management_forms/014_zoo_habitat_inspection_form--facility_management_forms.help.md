<thinking>
This is a form for capturing inspection data for zoos regarding their habitat conditions. This form is designed for collecting and tracking information about the zoos' facilities. The purpose of this form is to ensure that the habitats are inspected regularly and that any issues are addressed promptly. This form should not be used for other purposes, such as for reporting animal species or for tracking animal care. The fields in this form are designed to capture specific information about the habitat, animal, and inspection details. Before filling out this form, please ensure that you have all the necessary information and that you are familiar with the fields and their purposes.
</thinking>

# zoo_habitat_inspection_form - Help Guide
## Purpose
This form is designed to collect data about the condition of zoos' facilities during inspections. Please use this form to document the inspection results, which will help the management team address any issues and improve the overall condition of the habitats.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the name of the habitat being inspected.
2. Select the species of animal living in the habitat.
3. Enter the animal's ID number (if applicable).
4. Choose the size of the habitat (if known).
5. Evaluate the condition of the habitat and select one of the provided options.
6. Indicate the current status of the habitat (active or inactive).
7. Enter the name and ID of the animal care team member who performed the inspection.
8. Enter the ID of the person who performed the inspection (if applicable).
9. Enter the date of the inspection.

## Field-by-Field Explanation
- **Habitat Name** (`habitat_name`, text, required: false): Enter the name of the habitat being inspected.
- **Animal Species** (`animal_species`, select_one, required: false): Select the species of animal living in the habitat.
- **Animal ID** (`animal_id`, text, required: false): Enter the ID number of the animal (if known).
- **Habitat Size** (`habitat_size`, number, required: false): Enter the size of the habitat (in square meters or feet).
- **Habitat Condition** (`habitat_condition`, select_multiple, required: false): Evaluate the condition of the habitat and select one or more of the following options:
	+ Good
	+ Poor
	+ Average
- **Habitat Status** (`habitat_status`, select_one, required: false): Indicate the current status of the habitat:
	+ Active
	+ Inactive
- **Animal Care Team** (`animal_care_team`, text, required: false): Enter the name and ID of the animal care team member who performed the inspection.
- **Inspector ID** (`inspector_id`, text, required: false): Enter the ID of the person who performed the inspection (if known).
- **Inspection Date** (`inspection_date`, date, required: false): Enter the date of the inspection (in YYYY-MM-DD format).

## Tips
- Make sure to fill out the form accurately and thoroughly.
- Use the correct format for dates (YYYY-MM-DD).
- Select the correct species of animal and habitat status.
- If you are unsure about any field, please consult with the relevant experts or supervisors.
