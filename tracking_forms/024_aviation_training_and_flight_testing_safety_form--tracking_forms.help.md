# Aviation Training And Flight Testing Safety Form - Help Guide
## Purpose
This form is designed to track and document safety data for aviation training and flight testing operations. It ensures that pilots and instructors follow established safety protocols, and the collected data helps in maintaining accurate and reliable records.

## How To Complete This Form

1. Fill in the form completely and accurately to ensure the data is reliable and consistent.
2. Start by filling in the flight metadata (Date of Flight, Aircraft Registration, Pilot Full Name, and Instructor/Examiner Name).
3. Select the type of operation performed (e.g., Dual Training Flight, Solo Training Flight, etc.).
4. Enter the total flight time in decimal hours.
5. Confirm pre-flight inspection completion (Yes, No, or Deferred).
6. Indicate if a safety and crew briefing was completed (Yes, No, or Not Applicable).
7. Enter the number of people on board (total count).
8. Record the starting fuel level (in Gallons or Lbs).
9. Select any maneuvers performed during the flight (e.g., Stalls, Steep Turns, etc.).
10. If any safety incidents or concerns occurred, describe them in the provided field.
11. Indicate the final aircraft status after the flight (e.g., Airworthy, Grounded, etc.).
12. Sign and date the form with your full name to certify the flight record.

## Field-by-Field Explanation
* **Date of Flight** (`flight_date`, date, required): Enter the date of the flight in the format MM/DD/YY.
* **Aircraft Registration** (`aircraft_registration`, text, required): Enter the tail number (e.g., N12345) of the aircraft used for the flight.
* **Pilot Full Name** (`pilot_name`, text, required): Enter your full name as the pilot.
* **Instructor/Examiner Name** (`instructor_name`, text, optional): If an instructor or examiner was present, enter their name.
* **Type of Operation** (`operation_type`, select_one, required): Select the type of operation performed (e.g., Dual Training Flight).
* **Total Flight Time** (`block_times`, number, required): Enter the total flight time in decimal hours (e.g., 1.2).
* **Pre-Flight Inspection Completed?** (`preflight_status`, select_one, required): Confirm if the pre-flight inspection was completed (Yes, No, or Deferred).
* **Safety and Crew Briefing Completed?** (`safety_briefing`, select_one, required): Confirm if a safety and crew briefing was completed (Yes, No, or Not Applicable).
* **Number of People on Board** (`souls_on_board`, number, required): Enter the total count of people on board (pilots, crew, and passengers).
* **Starting Fuel on Board** (`fuel_status_start`, number, required): Enter the fuel level at the start of the flight (in Gallons or Lbs).
* **Maneuvers Performed** (`maneuvers_performed`, select_multiple, optional): Select all maneuvers performed during the flight (e.g., Stalls, Steep Turns, etc.).
* **Safety and Maintenance Outcomes** (`section_safety_outcomes`, note, optional): Enter any safety and maintenance notes or outcomes.
* **Safety Incidents or Concerns** (`safety_incidents`, text, optional): Describe any safety incidents or concerns that occurred during the flight.
* **Final Aircraft Status** (`aircraft_status_end`, select_one, required): Indicate the final aircraft status after the flight (e.g., Airworthy, Grounded, etc.).
* **Pilot Digital Signature** (`pilot_digital_signature`, text, required): Enter your full name to certify the flight record.
