<thinking>
The purpose of this form is to collect information about the maintenance and inspection of vehicles within a fleet. The form is used to track and report on the status of vehicles, including their maintenance schedule, repairs, inspections, and inspection results. This information is crucial for fleet managers to keep track of the condition and performance of their vehicles, ensuring they are running smoothly and safely. It's essential to fill out this form accurately and thoroughly to ensure that the data is up-to-date and reliable.

Before proceeding, please ensure that you have all the necessary information and documents required to complete the form. This form should not be used to report on vehicles that have already been reported on in a previous submission. If you're unsure whether a vehicle has been previously reported, please check with your team or the fleet management system.

</thinking>

# Fleet Maintenance Report Form - Help Guide
## Purpose
This form is designed to collect information about the maintenance and inspection of vehicles within a fleet.

## How To Complete This Form
- To complete this form, start by selecting the correct options for each field. For multiple select fields, choose all applicable options.
- Ensure you fill out all required fields (marked as required: true) to the best of your ability.
- If you're unsure about any field or option, refer to the Field-by-Field Explanation section below.

## Field-by-Field Explanation
- **Vehicle Details** (`vehicle_details`, text, required: false): Enter the vehicle's make, model, and any other relevant details.
  - This field is used to provide a brief description of the vehicle being reported on.
  - Please ensure the description is accurate and concise.
- **Maintenance Schedule** (`vehicle_maintenance`, select_multiple, required: false): Select all applicable maintenance schedules for the vehicle.
  - This field is used to track the maintenance schedule for the vehicle, including oil changes, tire rotations, and other routine maintenance.
  - If the vehicle has not undergone any maintenance, select the 'No' option.
- **Vehicle Repairs** (`vehicle_repair`, text, required: false): Enter any repairs or issues with the vehicle.
  - This field is used to report any repairs or issues that have been identified during the vehicle's inspection.
  - Be as detailed as possible, including any notes or observations.
- **Vehicle Inspections** (`vehicle_inspection`, select_multiple, required: false): Select all applicable inspection options for the vehicle.
  - This field is used to track the vehicle's inspections, including any issues or concerns identified during the process.
  - If the vehicle has not undergone any inspections, select the 'No' option.
- **Inspection Notes** (`vehicle_inspection_notes`, note, required: false): Enter any notes or observations from the vehicle's inspection.
  - This field is used to provide additional details or comments about the vehicle's inspection.
  - Be as detailed as possible.
- **Inspection Date** (`vehicle_inspection_date`, date, required: false): Enter the date of the vehicle's inspection.
  - This field is used to track the date and time of the vehicle's inspection.
  - Ensure the date is accurate and in the correct format (YYYY-MM-DD).
- **Inspection Status** (`vehicle_inspection_status`, select_one, required: false): Select the inspection status for the vehicle.
  - This field is used to indicate whether the vehicle is active or inactive.
  - Select the 'Active' option if the vehicle is currently in operation, and 'Inactive' if it is not.
- **Inspection Result** (`vehicle_inspection_result`, select_one, required: false): Select the result of the vehicle's inspection.
  - This field is used to indicate whether the inspection was passed or failed.
  - Select the 'Yes' option if the inspection passed, and 'No' if it failed.
- **Remarks** (`vehicle_inspection_remarks`, note, required: false): Enter any additional remarks or comments about the vehicle's inspection.
  - This field is used to provide any additional information or comments about the vehicle's inspection.
  - Be as detailed as possible.
- **Inspection Cost** (`vehicle_inspection_cost`, number, required: false): Enter the cost of the vehicle's inspection.
  - This field is used to track the cost of the vehicle's inspection.
  - Ensure the cost is accurate and up-to-date.
- **Inspection Mileage** (`vehicle_inspection_mileage`, number, required: false): Enter the vehicle's mileage at the time of inspection.
  - This field is used to track the vehicle's mileage at the time of inspection.
  - Ensure the mileage is accurate and up-to-date.
- **Additional Remarks** (`vehicle_inspection_remarks`, note, required: false): Enter any additional remarks or comments about the vehicle's inspection.
  - This field is used to provide any additional information or comments about the vehicle's inspection.
  - Be as detailed as possible.
- **Status Change** (`vehicle_inspection_status_change`, select_one, required: false): Select the status change for the vehicle.
  - This field is used to indicate whether the vehicle's status has been changed.
  - Select the 'Active' option if the vehicle's status has been changed to active, and 'Inactive' if it has been changed to inactive.
