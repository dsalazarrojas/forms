# Accident Report Form - Help Guide
## Purpose
The Accident Report Form is used to collect information about accidents that have occurred. This form helps gather details about the accident location, time, and parties involved, which is essential for understanding and addressing the consequences of the accident.

## How To Complete This Form
To complete this form, follow the instructions below:

1. Fill in the **Report Number** field with the unique identifier for this accident report.
2. Enter your **Reporter Name** and provide your **Reporter Contact** information to allow us to contact you for further clarification or follow-up.
3. Select the **Accident Date** when the accident occurred.
4. Choose the **Accident Time** when the accident occurred.
5. Enter the **Accident Location**, providing a complete address or specific location where the accident occurred.
6. Select the **Weather Conditions** at the time of the accident from the provided options.
7. Choose the **Accident Type** from the available options.
8. Enter the **Number of Parties Involved** in the accident.
9. Provide the **Number of Injuries Reported**.
10. Enter the **Number of Fatalities Reported**.
11. If applicable, estimate the **Property Damage** amount.
12. Provide a detailed description of the **Accident Description**.
13. Enter the **Witness Count**, the number of people who witnessed the accident.
14. If necessary, provide the **Witness Details**, including names and contact information.
15. Select if a **Police Report** was filed for this incident and provide the report number if applicable.
16. Indicate if **Emergency Services** were called to the scene.
17. Select the **Contributing Factors** that led to the accident.
18. Enter any **Additional Comments** about the accident.

## Field-by-Field Explanation

* **Report Number** (`report_number`, text, required): Unique identifier for this accident report.
* **Reporter Name** (`reporter_name`, text, required): Full name of the person reporting the accident.
* **Reporter Contact** (`reporter_contact`, text, required): Contact information for the person reporting the accident.
* **Accident Date** (`accident_date`, date, required): Date when the accident occurred.
* **Accident Time** (`accident_time`, time, required): Time when the accident occurred.
* **Accident Location** (`accident_location`, text, required): Complete address or specific location where the accident occurred.
* **Weather Conditions** (`weather_conditions`, select_one, required): Weather conditions at the time of the accident. Options are Clear, Rain, Snow, Fog, Windy, Nighttime, and Other.
* **Accident Type** (`accident_type`, select_one, required): Type of accident that occurred. Options are Motor Vehicle Collision, Pedestrian Accident, Workplace Injury, Slip and Fall, Property Damage, Personal Injury, and Other.
* **Parties Involved** (`parties_involved`, number, required): Number of parties involved in the accident.
* **Injuries Reported** (`injuries_reported`, number, required): Number of people injured in the accident.
* **Fatalities Reported** (`fatalities_reported`, number, required): Number of fatalities resulting from the accident.
* **Property Damage Estimated** (`property_damage_estimated`, number, not required): Estimated dollar amount of property damage.
* **Accident Description** (`accident_description`, text, required): Detailed description of how the accident occurred.
* **Witness Count** (`witness_count`, number, required): Number of witnesses to the accident.
* **Witness Details** (`witness_details`, text, not required): Names and contact information of witnesses.
* **Police Report Filed** (`police_report_filed`, select_one, required): If a police report was filed for this accident. Options are Yes, No, and Pending.
* **Police Report Number** (`police_report_number`, text, not required): If applicable, provide the police report number.
* **Emergency Services Called** (`emergency_services_called`, select_one, required): If emergency services were called to the scene. Options are Police, Fire Department, Ambulance, None, and All Services.
* **Contributing Factors** (`contributing_factors`, text, required): What factors contributed to the accident.
* **Additional Comments** (`additional_comments`, text, not required): Any other relevant information about the accident.
