<thinking>...</thinking>

# Ambulance Driver Checklist Form - Help Guide
## Purpose
This form is designed to ensure that ambulance drivers are able to perform pre- and post-trip checks on their vehicle, identifying any potential issues or concerns that may impact the vehicle's performance and safety. It is a crucial tool for maintaining the integrity of the vehicle and preventing accidents or injuries. By following this checklist, you can help ensure that your vehicle is in good working condition, ready for service, and that you're aware of any issues that need to be addressed before returning to service.

## How To Complete This Form

### Pre-Trip Checks

1. Fill in the date and time of the shift.
2. Enter your name and the ambulance unit number.
3. Select the shift you are working (Day, Evening, or Night).
4. Record the starting odometer reading.
5. Check the vehicle's exterior for any damage or issues.
6. Perform a walk-around inspection to ensure all lights, including headlights, taillights, and emergency lights, are functional.
7. Check for any body damage.
8. Ensure that all tires, including the spare, are in good condition and properly inflated.
9. Check the vehicle's fluid levels, including engine oil, coolant, and brake fluid.
10. Check the brakes for proper function and feel.
11. Check the power steering and parking brake.
12. Check the horn to ensure it's functional.
13. Check the seatbelts, seats, and adjustments.
14. Check the climate control (heating and air conditioning).

### Post-Trip Checks

1. Check for any new damage on the exterior.
2. Inspect the interior for cleanliness and condition.
3. Record the ending odometer reading.
4. Enter the miles driven during the shift.
5. Describe any issues found during the trip.
6. If issues were found, describe them in detail.
7. Determine if any maintenance is required.
8. If maintenance is needed, describe the specific issues that require attention.
9. Indicate whether the vehicle is ready for service.
10. Provide any additional notes or comments.
11. Sign the form as the driver, and if required, have the supervisor sign as well.

## Field-by-Field Explanation

### General Information
* **Driver Name (Driver Name)** (`driver_name`, `text`, required): Your name as the driver completing this form.
* **Ambulance Unit Number (ambulance_unit)** (`ambulance_unit`, `text`, required): The vehicle's identification number.

### Checklist Date and Time
* **Checklist Date (checklist_date)** (`checklist_date`, `date`, required): The date and time you are completing this form.
* **Checklist Time (checklist_time)** (`checklist_time`, `time`, required): The time you are completing this form.

### Shift
* **Shift (shift)** (`shift`, `select_one`, required): The shift you are working (Day, Evening, or Night).

### Pre-Trip Exterior Inspection
* **Complete Walkaround Inspection (exterior_walkaround)** (`exterior_walkaround`, `select_one`, required): Check the vehicle's exterior for any issues or concerns.
* **Body Damage Check (body_damage)** (`body_damage`, `select_one`, required): Look for any new or existing body damage.
* **Lights Check (lights_check)** (`lights_check`, `select_one`, required): Check that all lights, including headlights, taillights, and emergency lights, are functional.
* **Siren/Audible Warning Check (siren_check)** (`siren_check`, `select_one`, required): Test the siren in all modes.
* **Tire Condition and Pressure Check (tires_check)** (`tires_check`, `select_one`, required): Check all tires, including the spare.
* **Fluid Leaks Check (fluid_leaks_check)** (`fluid_leaks_check`, `select_one`, required): Check for any signs of leaks under the vehicle.
* **Fluid Levels Check (engine_oil_check, coolant_check, brake_fluid_check)** (`engine_oil_check`, `select_one`, `coolant_check`, `select_one`, `brake_fluid_check`, `select_one`, required): Check engine oil, coolant, and brake fluid levels.
* **Hoses Check (hoses_check)** (`hoses_check`, `select_one`, required): Check for any signs of wear or damage.
* **Battery and Connections Check (battery_check)** (`battery_check`, `select_one`, required): Check the battery and its connections.
* **Windshield Washer Fluid Check (windshield_washer_check)** (`windshield_washer_check`, `select_one`, required): Check and fill the windscreen washer fluid.
* **Belts Check (belts_check)** (`belts_check`, `select_one`, required): Check the belts for wear and proper tension.
* **Seats and Adjustments Check (seats_check)** (`seats_check`, `select_one`, required): Check that all seats and adjustments are secure and functional.

### Pre-Trip Engine Compartment Check
* **Engine Oil Level (engine_oil_check)** (`engine_oil_check`, `select_one`, required): Check the engine oil level.
* **Coolant Level (coolant_check)** (`coolant_check`, `select_one`, required): Check the coolant level.
* **Brake Fluid Level (brake_fluid_check)** (`brake_fluid_check`, `select_one`, required): Check the brake fluid level.
* **Power Steering Fluid (power_steering_check)** (`power_steering_check`, `select_one`, required): Check the power steering fluid.
* **Windshield Washer Fluid (windshield_washer_check)** (`windshield_washer_check`, `select_one`, required): Check and fill the windscreen washer fluid.

### Pre-Trip Interior Check
* **Dashboard Gauges and Warning Lights (dashboard_gauges_check)** (`dashboard_gauges_check`, `select_one`, required): Check that all gauges and warning lights are functioning.
* **Steering Operation (steering_check)** (`steering_check`, `select_one`, required): Check the steering operation.
* **Brake Pedal Operation (brakes_check)** (`brakes_check`, `select_one`, required): Check the brake pedal feel and response.
* **Parking Brake (parking_brake_check)** (`parking_brake_check`, `select_one`, required): Check that the parking brake holds the vehicle securely.
* **Horn (horn_check)** (`horn_check`, `select_one`, required): Check that the horn is functional.
* **Seatbelts (seatbelts_check)** (`seatbelts_check`, `select_one`, required): Check that all seatbelts are functional and accessible.
* **Seats and Adjustments (seats_check)** (`seats_check`, `select_one`, required): Check that all seats and adjustments are secure and functional.
* **Climate Control (climate_control_check)** (`climate_control_check`, `select_one`, required): Check that the climate control (heating and air conditioning) is functional.

### Post-Trip Interior Check
* **Post-Trip Exterior Check (post_trip_exterior)** (`post_trip_exterior`, `select_one`, required): Check the vehicle's exterior for any new damage or issues.
* **Post-Trip Interior Check (post_trip_interior)** (`post_trip_interior`, `select_one`, required): Inspect the interior for cleanliness and condition.
* **Ending Odometer Reading (odometer_end)** (`odometer_end`, `number`, required): Record the ending odometer reading.
* **Miles Driven (miles_driven)** (`miles_driven`, `number`, required): Calculate the miles driven during the shift.
* **Post-Trip Exterior Check (post_trip_exterior)** (`post_trip_exterior`, `select_one`, required): Check the vehicle's exterior for any new damage or issues.
* **Post-Trip Interior Check (post_trip_interior)** (`post_trip_interior`, `select_one`, required): Inspect the interior for cleanliness and condition.

### Safety Equipment
* **Fire Extinguisher (fire_extinguisher_check)** (`fire_extinguisher_check`, `select_one`, required): Check that the fire extinguisher is charged and accessible.
* **First Aid Kit (first_aid_check)** (`first_aid_check`, `select_one`, required): Check that the first aid kit is complete.
* **PPE Supplies (ppe_check)** (`ppe_check`, `select_one`, required): Check that PPE supplies are adequate.
* **Vehicle Ready for Service (vehicle_ready)** (`vehicle_ready`, `select_one`, required): Check that the vehicle is ready for service.

### Issues and Maintenance
* **Were Any Issues Found (issues_found)** (`issues_found`, `select_one`, required): Check if any issues were found.
* **Describe Issues (issues_description)** (`issues_description`, `text`, required): Describe all issues found.
* **Maintenance Required (maintenance_needed)** (`maintenance_needed`, `select_one`, required): Determine if any maintenance is required.
* **Describe Maintenance Needed (maintenance_description)** (`maintenance_description`, `text`, required): Describe the specific maintenance issues.
* **Is Vehicle Ready for Service (vehicle_ready)** (`vehicle_ready`, `select_one`, required): Check if the vehicle is ready for service.

### Driver Signature
* **Driver Signature (driver_signature)** (`driver_signature`, `text`, required): Sign the form as the driver.
* **Supervisor Signature (supervisor_signature)** (`supervisor_signature`, `text`, optional): If required, sign the form as the supervisor.

## Tips

* Always complete the form in a thorough and accurate manner.
* Be sure to check all sections and fields carefully.
* If an issue is found, be sure to describe it accurately and clearly.
* If maintenance is required, clearly describe the issue and any steps needed to resolve it.
* Remember to record the ending odometer reading and miles driven.
* Sign the form as the driver and supervisor if required.
* If an issue is found that requires immediate attention, contact the mechanic or supervisor immediately.
* If an issue is found that requires long-term repair, document it and schedule a repair time.
* Always keep the form on file for reference and review.
