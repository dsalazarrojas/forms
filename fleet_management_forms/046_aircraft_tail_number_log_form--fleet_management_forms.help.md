# Aircraft Tail Number Log Form - Help Guide
## Purpose
The Aircraft Tail Number Log Form is used to record and track flight data for maintenance, training, and other purposes.

## How To Complete This Form
1. Ensure you have not already logged the flight data before filling out this form.
2. Enter the Log Date, which is the date of entry.
3. Enter the Tail Number, which is the aircraft registration number.
4. Enter the Aircraft Make and Model.
5. Enter the Serial Number.
6. Enter the Flight Number, if applicable.
7. Enter the Departure Airport Code.
8. Enter the Departure Time.
9. Enter the Arrival Airport Code.
10. Enter the Arrival Time.
11. Enter the Flight Hours.
12. Enter the Flight Cycles.
13. Enter the Pilot in Command name.
14. Enter the Pilot ID.
15. Select the Fuel Type.
16. Enter the Fuel at Departure.
17. Enter the Fuel at Arrival, if applicable.
18. Enter the Fuel Burn, if applicable.
19. Select the Purpose of Flight.
20. Enter the Route, if applicable.
21. Enter the Cruising Altitude, if applicable.
22. Select the Weather Conditions.
23. Enter any Incidents or Issues.
24. Select if any Maintenance is required.
25. Enter any Maintenance Notes, if applicable.
26. Select the Aircraft Status After Flight.
27. Enter the Next Scheduled Flight, if applicable.
28. Enter the Parking Location.
29. Select the Security Status.
30. Enter the Person making the entry, their name.
31. Enter a digital signature.
32. Review and verify all entries before submitting the form.

## Field-by-Field Explanation

* **Log Date** (`log_date`, date, required): The date of entry, which is the date on which the flight data is being recorded.
* **Tail Number** (`tail_number`, text, required): The aircraft registration number.
* **Aircraft Make** (`aircraft_make`, text, required): The manufacturer of the aircraft.
* **Aircraft Model** (`aircraft_model`, text, required): The model of the aircraft.
* **Serial Number** (`serial_number`, text, required): The manufacturer serial number of the aircraft.
* **Flight Number** (`flight_number`, text, optional): The flight identifier, if applicable.
* **Departure Airport** (`departure_airport`, text, required): The origin airport code.
* **Departure Time** (`departure_time`, time, required): The off-block time of the flight.
* **Arrival Airport** (`arrival_airport`, text, required): The destination airport code.
* **Arrival Time** (`arrival_time`, time, optional): The on-block time of the flight.
* **Flight Hours** (`flight_hours`, number, required): The total flight hours.
* **Flight Cycles** (`cycles`, number, required): The number of takeoff-landing cycles.
* **Pilot in Command** (`pilot_name`, text, required): The name of the pilot in command.
* **Pilot ID** (`pilot_id`, text, required): The pilot's license or employee number.
* **Copilot** (`copilot_name`, text, optional): The second in command's name, if applicable.
* **Number of Passengers** (`passengers`, number, required): The total number of passengers.
* **Cargo Weight (lbs)** (`cargo_weight`, number, optional): The total cargo weight, if applicable.
* **Fuel Uplifted (gallons)** (`fuel_uplifted`, number, required): The total fuel added.
* **Fuel Type** (`fuel_type`, select_one, required): The type of fuel used.
* **Fuel at Departure** (`departure_fuel`, number, required): The total fuel on board at departure.
* **Fuel at Arrival** (`arrival_fuel`, number, optional): The remaining fuel at arrival, if applicable.
* **Fuel Burn (gallons)** (`fuel_burn`, number, optional): The total consumed fuel, if applicable.
* **Purpose of Flight** (`purpose_of_flight`, select_one, required): The flight type.
* **Route** (`route`, text, optional): The flight path, if applicable.
* **Cruising Altitude** (`altitude`, text, optional): The flight level, if applicable.
* **Weather Conditions** (`weather_conditions`, select_one, required): The general conditions encountered during the flight.
* **Incidents or Issues** (`incidents`, text, optional): Any problems encountered during the flight.
* **Maintenance Required** (`maintenance_required`, select_one, required): If any maintenance is required after the flight.
* **Maintenance Notes** (`maintenance_notes`, text, optional): If any maintenance notes are required.
* **Aircraft Status After Flight** (`aircraft_status`, select_one, required): The current status of the aircraft after the flight.
* **Next Scheduled Flight** (`next_scheduled_flight`, text, optional): The next flight assignment, if applicable.
* **Parking Location** (`parking_location`, text, required): Where the aircraft was parked.
* **Security Status** (`security_status`, select_one, required): If the aircraft was secured.
* **Logged By** (`logged_by`, text, required): The name of the person making the entry.
* **Signature** (`log_signature`, text, required): The digital signature of the person making the entry.

## Tips

* Please ensure you fill out all required fields.
* Review and verify all entries before submitting the form.
* Do not submit duplicate entries.
* If you are unsure about any field, please refer to the relevant procedures and guidelines of your organization.
