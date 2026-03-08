# Pedestrian Accident Incident Form - Help Guide
## Purpose
The Pedestrian Accident Incident Form is used to report incidents involving pedestrians that occur on the road or sidewalk. This form helps gather important details about the incident, which will be used to aid in investigations or inquiries.

## How To Complete This Form
To complete this form, follow these steps:

1. Ensure you are reporting an incident that occurred on the road or sidewalk.
2. Enter your name in the User Name field.
3. Provide the date of the collision in the Date of Collision field.
4. Enter the time of the collision in the Time of Collision field.
5. Describe the location of the collision in the Location of Collision field.
6. Provide a detailed description of the collision in the Description of Collision field.
7. Explain any injuries sustained in the Injury Description field.
8. Indicate if witnesses were present in the Witnesses Present field.
9. Enter any witness statements in the Witness Statements field.
10. Check if a vehicle was involved in the Vehicle Collision field.
11. Check if a pedestrian was involved in the Pedestrian Collision field.
12. If a vehicle was involved, provide its type in the Vehicle Type field.
13. If a vehicle was involved, provide its color in the Vehicle Color field.

## Field-by-Field Explanation
* **User Name** (`user_name`, text, required: false): Enter your name.
* **Date of Collision** (`date_of_collision`, date, required: false): Enter the date of the collision. Use the format MM/DD/YYYY.
* **Time of Collision** (`time_of_collision`, time, required: false): Enter the time of the collision. Use the format 12:00 PM/12:00 AM.
* **Location of Collision** (`location_of_collision`, text, required: false): Provide the location where the collision occurred.
* **Description of Collision** (`description_of_collision`, text, required: false): Describe the events leading up to and including the collision.
* **Injury Description** (`injury_description`, text, required: false): Describe any injuries sustained during the collision.
* **Witnesses Present** (`witnesses_present`, select_multiple, required: false): Check if witnesses were present during the collision.
* **Witness Statements** (`witness_statements`, note, required: false): Enter any witness statements.
* **Vehicle Collision** (`vehicle_collision`, select_one, required: false): Check if a vehicle was involved in the collision.
* **Pedestrian Collision** (`pedestrian_collision`, select_multiple, required: false): Check if a pedestrian was involved in the collision.
* **Vehicle Type** (`vehicle_type`, text, required: false): If a vehicle was involved, enter its type (e.g., car, bike, etc.).
* **Vehicle Color** (`vehicle_color`, text, required: false): If a vehicle was involved, enter its color.
