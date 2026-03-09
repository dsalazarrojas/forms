# Cold Transport Route Report Form - Help Guide
## Purpose
The Cold Transport Route Report Form is used to record the details of a cold transport route, including the date and time of the route, the driver and vehicle information, cargo details, route start and end points, and any incidents or issues that occurred during the trip.

## How To Complete This Form

To complete this form, please follow these steps:

1. Select the report date from the calendar provided.
2. Enter the route number, which is a unique identifier for this specific route.
3. Enter the driver's full name and ID number.
4. Enter the vehicle's registration number.
5. Select the departure location, which is the start point of the route.
6. Choose the departure time from the time picker.
7. Enter the arrival location, which is the final destination of the route.
8. Select the arrival time from the time picker.
9. Enter the initial temperature reading in degrees Celsius.
10. Enter the final temperature reading in degrees Celsius.
11. Select whether any temperature excursions were detected during the trip.
12. If temperature excursions were detected, provide a brief description of the incident.
13. Select the category of cargo being transported (e.g., Pharmaceuticals, Food Products, etc.).
14. Enter the total weight of the cargo in kilograms.
15. Enter the total distance traveled in kilometers.
16. Select whether any incidents or delays occurred during the trip.
17. If incidents or delays occurred, provide a brief description of the issue.
18. Select the vehicle's condition upon return.
19. If maintenance is required, provide a brief description of the needed repairs.
20. Select the status of the route (e.g., Completed Successfully, Cancelled, etc.).

## Field-by-Field Explanation

* **Report Date** (`report_date`, required, date): Enter the date of the transport route.
* **Route Number** (`route_number`, required, text): Enter the unique identifier for this route.
* **Driver Name** (`driver_name`, required, text): Enter the full name of the assigned driver.
* **Driver ID Number** (`driver_id`, required, text): Enter the employee or license ID number of the driver.
* **Vehicle Registration Number** (`vehicle_registration`, required, text): Enter the license plate or vehicle ID number of the vehicle.
* **Departure Location** (`departure_location`, required, text): Enter the start point of the route.
* **Departure Time** (`departure_time`, required, time): Select the time of departure from the time picker.
* **Arrival Location** (`arrival_location`, required, text): Enter the final destination of the route.
* **Arrival Time** (`arrival_time`, required, time): Select the time of arrival from the time picker.
* **Initial Temperature Reading - deg C** (`initial_temperature`, required, number): Enter the temperature reading at the start of the route.
* **Final Temperature Reading - deg C** (`final_temperature`, required, number): Enter the temperature reading at the end of the route.
* **Temperature Excursions Detected** (`temperature_excursions`, required, select_one): Select whether any temperature excursions were detected during the trip.
* **Temperature Excursion Details** (`excursion_details`, optional, text): If temperature excursions were detected, provide a brief description of the incident.
* **Cargo Type** (`cargo_type`, required, select_one): Select the category of cargo being transported (e.g., Pharmaceuticals, Food Products, etc.).
* **Cargo Weight - kg** (`cargo_quantity`, required, number): Enter the total weight of the cargo in kilograms.
* **Distance Traveled - km** (`distance_traveled`, required, number): Enter the total distance traveled in kilometers.
* **Any Incidents or Delays** (`incidents_reported`, required, select_one): Select whether any incidents or delays occurred during the trip.
* **Incident Description** (`incident_description`, optional, text): If incidents or delays occurred, provide a brief description of the issue.
* **Vehicle Condition Upon Return** (`vehicle_condition`, required, select_one): Select the condition of the vehicle upon return (e.g., Good, Minor Issues, etc.).
* **Maintenance Required** (`maintenance_required`, optional, text): If maintenance is required, provide a brief description of the needed repairs.
* **Route Status** (`route_status`, required, select_one): Select the status of the route (e.g., Completed Successfully, Cancelled, etc.).
* **I confirm the accuracy of this report** (`driver_signature_consent`, required, select_one): Select whether you confirm the accuracy of this report.
