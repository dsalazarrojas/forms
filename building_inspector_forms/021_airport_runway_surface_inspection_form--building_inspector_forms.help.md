# Airport Runway Surface Inspection Form - Help Guide
## Purpose
The form is used to collect data on the condition of airport runways to ensure their safe and efficient operation.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your name and title as the inspector performing the inspection.
2. Enter the date of the inspection.
3. Enter the time of the inspection.
4. Enter the runway identifier (e.g., 09L/27R).
5. Select the current weather conditions (Dry, Wet, Damp, Ice/Snow, or Standing Water).
6. Evaluate the pavement surface condition and provide a detailed description if necessary.
7. Check if there are any cracks or other forms of damage (Low, Medium, or High).
8. Indicate if potholes or rutting are present or not.
9. Check for the presence of foreign object debris (Clear, Minor debris, or Major debris).
10. Evaluate the visibility of runway paint markings and lighting (Excellent, Good, Fair, or Poor).
11. Check if the runway edge and centerline lighting are functional or not.
12. Assess the level of rubber deposit on the touchdown zone (Low, Moderate, or Heavy).
13. Add any additional maintenance observations.
14. Select the overall status of the runway (Safe for Operations, Restricted Operations, or Closed for Maintenance).
15. Indicate if immediate follow-up action is required.

## Field-by-Field Explanation

* **Inspector Name** (`inspector_name`, text, **Required**): Enter your name and title as the inspector performing the inspection.
* **Date of Inspection** (`inspection_date`, date, **Required**): Enter the date of the inspection in a standard date format (e.g., 2023-02-15).
* **Time of Inspection** (`inspection_time`, time, **Required**): Enter the time of the inspection in a 24-hour format (e.g., 08:00).
* **Runway Identifier** (`runway_identifier`, text, **Required**): Enter the runway identifier (e.g., 09L/27R).
* **Weather Conditions** (`weather_conditions`, select_one, **Required**): Select the current weather conditions (Dry, Wet, Damp, Ice/Snow, or Standing Water).
* **Pavement Surface Condition** (`section_surface_condition`, note, **Optional**): Describe the condition of the pavement surface.
* **Crack Presence and Severity** (`crack_assessment`, select_one, **Required**): Evaluate the presence and severity of cracks or other forms of damage (None, Low (Hairline), Medium (Spalling), or High (Structural)).
* **Potholes or Rutting** (`potholes_rutting`, select_one, **Required**): Indicate if potholes or rutting are present or not.
* **Foreign Object Debris (FOD) Presence** (`fod_check`, select_one, **Required**): Check for the presence of foreign object debris (Clear, Minor debris, or Major debris).
* **Markings and Lighting** (`section_markings_lighting`, note, **Optional**): Describe the condition of runway paint markings and lighting.
* **Runway Paint Marking Visibility** (`paint_condition`, select_one, **Required**): Evaluate the visibility of runway paint markings (Excellent, Good, Fair (Requires repainting soon), or Poor (Requires immediate repainting)).
* **Runway Edge and Centerline Lighting Functionality** (`lighting_functionality`, select_one, **Required**): Check if the runway edge and centerline lighting are functional (All functional, Some outages (Non-critical), or Critical outages).
* **Rubber Deposit Level (Touchdown Zone)** (`rubber_buildup`, select_one, **Required**): Assess the level of rubber deposit on the touchdown zone (Low, Moderate, or Heavy (Requires removal)).
* **Additional Maintenance Observations** (`additional_observations`, text, **Optional**): Add any additional maintenance observations.
* **Overall Runway Status** (`overall_runway_status`, select_one, **Required**): Select the overall status of the runway (Safe for Operations, Restricted Operations, or Closed for Maintenance).
* **Is immediate follow-up action required?** (`follow_up_required`, select_one, **Required**): Indicate if immediate follow-up action is required.
