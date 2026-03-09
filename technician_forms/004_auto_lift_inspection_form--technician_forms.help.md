# Auto Lift Inspection Form - Help Guide

## Purpose
The Auto Lift Inspection Form is used for inspecting and maintaining the condition and functionality of vehicle lifts. The form is used to assess the overall condition of the lift, including its mechanical and safety features. The information gathered from this form helps determine the status of the lift and informs maintenance decisions.

## How To Complete This Form

To complete the form, please follow the steps below:

1. Select a date and time for the inspection, as shown on the "Inspection Date" field.
2. Enter the name of the technician performing the inspection in the "Technician Name" field.
3. Enter the technician's badge number in the "Technician Badge Number" field.
4. Enter the lift model number in the "Lift Model Number" field.
5. Enter the lift serial number in the "Lift Serial Number" field.
6. Enter the lift's capacity in pounds in the "Lift Capacity" field.
7. Enter the location of the lift in the "Lift Location" field.
8. Assess the condition of the hydraulic fluid level, hydraulic leaks, pump condition, platform or pad damage, and other mechanical issues using the corresponding select fields.
9. Check the functionality of safety features, such as the emergency stop button, safety locks and latches, and warning lights.
10. Record the last service date and next service due date if applicable.
11. Provide an overall inspection result, using the options provided.
12. Enter any additional notes or recommendations in the "Additional Notes or Recommendations" field.

## Field-by-Field Explanation

* **Inspection Date** (`inspection_date`, date, required): Enter the date of the inspection.
* **Inspection Time** (`inspection_time`, time, required): Enter the time of the inspection.
* **Technician Name** (`technician_name`, text, required): Enter the name of the technician performing the inspection.
* **Technician Badge Number** (`technician_badge_number`, text, required): Enter the technician's badge number.
* **Lift Model Number** (`lift_model_number`, text, required): Enter the lift model number.
* **Lift Serial Number** (`lift_serial_number`, text, required): Enter the lift serial number.
* **Lift Capacity** (`lift_capacity`, number, required): Enter the lift capacity in pounds.
* **Lift Location** (`lift_location`, text, required): Enter the location of the lift.
* **Hydraulic Fluid Level** (`hydraulic_fluid_level`, select_one, required): Assess the condition of the hydraulic fluid level using the options provided.
* **Visible Hydraulic Leaks** (`hydraulic_leaks`, select_one, required): Assess the condition of hydraulic leaks using the options provided.
* **Pump Condition** (`pump_condition`, select_one, required): Assess the condition of the pump using the options provided.
* **Platform or Pad Damage** (`platform_damage`, select_one, required): Assess the condition of the platform or pad using the options provided.
* **Emergency Stop Button Functions** (`emergency_stop_button`, select_one, required): Check if the emergency stop button functions properly.
* **Safety Locks and Latches** (`safety_locks`, select_one, required): Assess the condition of safety locks and latches using the options provided.
* **Warning Light Function** (`warning_lights`, select_one, required): Check if all warning lights function properly.
* **Last Service Date** (`last_service_date`, date, optional): Enter the last service date if applicable.
* **Next Service Due** (`next_service_due`, date, required): Enter the next service due date.
* **Overall Inspection Result** (`inspection_result`, select_one, required): Provide an overall inspection result using the options provided.
* **Additional Notes or Recommendations** (`notes`, text, optional): Enter any additional notes or recommendations.
