# School Bus Pre Trip Inspection Report Form - Help Guide
## Purpose
This form is designed to document the pre-trip inspection of a school bus, ensuring its safety and maintenance are up-to-date.

## How To Complete This Form
1. Review the form to ensure you are aware of the fields and their requirements.
2. Complete the form in real-time, taking care to fill in all the necessary information.
3. Use the provided fields to record the results of the inspection, including any issues or hazards found.
4. Sign and date the form, ensuring that all required fields are completed.

## Field-by-Field Explanation

* **Vehicle Make** (`vehicle_make`, `text`, required/optional): Enter the make of the school bus being inspected.
* **Odometer Reading** (`odometer_reading`, `number`, required): Record the current odometer reading of the vehicle.
* **Air Breather** (`air_breather`, `select_one`, required): Select the type of air breather used on the vehicle (Air, Ground, Sea, or Other).
* **Air Breather Hazards** (`air_breather_hazards`, `text`, optional): Record any hazards or issues found with the air breather.
* **Brakes** (`brakes`, `select_multiple`, required): Select the condition of the brakes (normal, worn, or damaged).
* **Steering** (`steering`, `text`, optional): Record any issues or hazards found with the steering.
* **Tires** (`tires`, `select_multiple`, required): Select the condition of the tires (good, worn, or damaged).
* **Parking Brakes** (`parking_brakes`, `text`, optional): Record any issues or hazards found with the parking brakes.
* **Emergency Lockout** (`emergency_lockout`, `select_one`, optional): Select whether the emergency lockout is present (Yes or No).
* **Parking Brake Hazards** (`parking_brake_hazards`, `text`, optional): Record any hazards or issues found with the parking brakes.
* **Fire Extinguishing System** (`fire_extinguishing_system`, `select_multiple`, required): Select the status of the fire extinguishing system (normal, faulty, or not installed).
* **Fire Exinguisher Location** (`fire_extinguisher_location`, `select_one`, required): Select whether the fire extinguisher is present (Yes or No).
* **Fire Exinguisher** (`fire_extinguisher`, `text`, optional): Record any issues or hazards found with the fire extinguisher.
* **Route Number** (`route_number`, `text`, optional): Record the route number of the trip.
* **Trip Number** (`trip_number`, `text`, required): Enter the trip number.
* **Route Start Time** (`route_start`, `time`, required): Record the start time of the trip.
* **Route End Time** (`route_end`, `time`, required): Record the end time of the trip.
* **Notes** (`notes`, `text`, optional): Record any additional comments or information.
* **Vehicle ID** (`vehicle_id`, `text`, required): Enter the vehicle ID.
* **Driver Signature** (`driver_signature`, `text`, required): Sign and date the driver's signature.
* **Inspector Signature** (`inspector_signature`, `text`, required): Sign and date the inspector's signature.
* **Date** (`date`, `date`, required): Enter the date of the inspection.
* **Time** (`time`, `time`, optional): Record the time of the inspection.
* **Submitted By** (`submitted_by`, `text`, optional): Record the person submitting the form.
