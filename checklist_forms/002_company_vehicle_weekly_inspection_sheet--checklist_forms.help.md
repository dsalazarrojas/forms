# Company Vehicle Weekly Inspection Sheet - Help Guide
## Purpose
The Company Vehicle Weekly Inspection Sheet is a form used to record the condition of company vehicles on a weekly basis. This helps identify any issues with the vehicle and ensures that necessary repairs are made to prevent accidents and downtime.

## How To Complete This Form

To complete this form, follow these steps:

1. Ensure you have the required information, such as the vehicle's plate number or ID, and the date of the inspection.
2. Enter the inspector's name, which will help identify who performed the inspection.
3. Enter the vehicle's plate number or ID.
4. Choose the inspection date from the available dates.
5. Evaluate the tire condition and select the best match from the options.
6. Check if the brakes are functional and select the corresponding option.
7. Verify if the lights are working properly and select the correct option.
8. Check the fluid levels and select the best match from the options.
9. Describe any additional remarks or maintenance required in the text field.
9. Finally, enter your printed name for record purposes.

## Field-by-Field Explanation
* **inspector name** (`inspector_name`, text, required): Enter the name of the person performing the inspection.
* **vehicle plate or id** (`vehicle_plate`, text, required): Enter the fleet ID or license plate number of the vehicle being inspected.
* **inspection date** (`inspection_date`, date, required): Choose the date of the weekly check.
* **tire condition** (`tire_condition`, select_one, required): Select the best match for the tire condition from the options: Good, Fair, Poor.
* **brakes functional** (`brakes_functional`, select_one, required): Check if the brakes are functional and select the correct option: True or False.
* **lights working** (`lights_working`, select_one, required): Check if the lights are working properly and select the correct option: True or False.
* **fluid levels** (`fluid_levels`, select_one, required): Check the fluid levels and select the best match from the options: Acceptable, Low, Needs attention.
* **additional remarks** (`additional_remarks`, text, optional): Describe any issues or maintenance required.
* **inspector printed name for record** (`inspector_signature`, text, required): Enter your printed name for record purposes.

## Tips
* Be thorough when evaluating the vehicle's condition to ensure accuracy.
* Use the correct format for dates (dd/mm/yyyy).
* Take note of any issues or maintenance required and record them in the additional remarks field.
