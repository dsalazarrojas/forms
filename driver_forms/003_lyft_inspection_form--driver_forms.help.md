<thinking>
We need to ensure that the Lyft Inspection Form is completed correctly to accurately reflect the vehicle's condition and status. This form should only be filled out once per vehicle, and any previous form submission for the same vehicle should be deleted. Please note that some fields may not be required, but completing all fields will help provide a thorough inspection.
</thinking>

# Lyft Inspection Form - Help Guide
## Purpose
This form is designed to gather information about a vehicle's condition and status for Lyft's use. It helps to ensure accurate and efficient processing of vehicle-related data.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide the vehicle's basic information (Vehicle Info, Vehicle Status, Vehicle License Plate).
2. Enter the vehicle's year and mileage.
3. Select the vehicle's model and color.
4. Choose the vehicle's registration and maintenance status.
5. Enter the last maintenance date and frequency.
6. Review and submit the form.

## Field-by-Field Explanation

* **Vehicle Info** (`id: 1`, `type: text`, `required: false`): Enter the vehicle's make, model, and any other relevant details.
* **Vehicle Status** (`id: 2`, `type: select_one`, `options: [Active, Inactive]`, `required: false`): Select the current status of the vehicle (Active or Inactive).
* **Vehicle Condition** (`id: 3`, `type: text`, `required: false`): Provide a brief description of the vehicle's overall condition (e.g., clean, dirty, damaged).
* **Vehicle License Plate** (`id: 4`, `type: text`, `required: false`): Enter the vehicle's license plate number and state.
* **Vehicle Year** (`id: 5`, `type: number`, `required: false`): Enter the vehicle's year of manufacture.
* **Vehicle Mileage** (`id: 6`, `type: number`, `required: false`): Enter the vehicle's mileage.
* **Vehicle Model** (`id: 7`, `type: text`, `required: false`): Select the vehicle's model.
* **Vehicle Color** (`id: 8`, `type: text`, `required: false`): Enter the vehicle's color.
* **Vehicle Year of Purchase** (`id: 9`, `type: number`, `required: false`): Enter the year the vehicle was purchased.
* **Vehicle Registration Status** (`id: 10`, `type: select_one`, `options: [Active, Inactive]`, `required: false`): Select the current registration status of the vehicle (Active or Inactive).
* **Vehicle Maintenance Status** (`id: 11`, `type: select_one`, `options: [Active, Inactive]`, `required: false`): Select the current maintenance status of the vehicle (Active or Inactive).
* **Vehicle Maintenance Last Date** (`id: 12`, `type: date`, `required: false`): Enter the last maintenance date for the vehicle.
* **Vehicle Maintenance Frequency** (`id: 13`, `type: select_one`, `options: [Yes, No]`, `required: false`): Select whether regular maintenance is performed on the vehicle (Yes or No).
