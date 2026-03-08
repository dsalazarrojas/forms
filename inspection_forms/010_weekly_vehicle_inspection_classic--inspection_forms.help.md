<thinking>

Before proceeding, I will create an internal reasoning block to understand the form purpose and verify that there are no duplicated information.

The form, "weekly_vehicle_inspection_classic", is designed to collect information about a vehicle's condition and status for regular inspections. It appears to be used for tracking and maintaining vehicle records. I will ensure that the explanations provided in this help guide are accurate and clear.

</thinking>

# weekly_vehicle_inspection_classic - Help Guide
## Purpose
The "weekly_vehicle_inspection_classic" form is used to collect information about a vehicle's condition and status for regular inspections. This information will help in tracking and maintaining vehicle records.

## How To Complete This Form
1. Select the correct "vehicle make" from the provided options.
2. Enter the "vehicle year" using numerical digits.
3. Enter the "vehicle model" as a text.
4. (Optional) Enter the "vehicle color" as a text.
5. Enter the "vehicle license" number.
6. Choose the "vehicle status" as either "Active" or "Inactive".
7. (Optional) Enter the "last inspection date" using the date format (YYYY-MM-DD).
8. (Optional) Enter the "next inspection date" using the date format (YYYY-MM-DD).
9. Enter the "mileage" using numerical digits.
10. Choose the overall "vehicle condition" as a combination of "Yes" or "No" answers to various conditions.
11. (Optional) Enter the "mileage last inspection" using numerical digits.
12. Choose the "vehicle condition last inspection" as a combination of "Yes" or "No" answers to various conditions.
13. (Optional) Enter any additional "notes" about the vehicle.
14. Choose the "vehicle type" as either "Yes" or "No".
15. (Optional) Choose the "fuel level" as either "High" or "Low".
16. (Optional) Select the "fuel type" as either "Yes" or "No".
17. (Optional) Choose the "fuel level last inspection" as either "High" or "Low".
18. (Optional) Select the "fuel type last inspection" as either "Yes" or "No".
19. (Optional) Choose the "engine condition" as a combination of "Yes" or "No" answers to various conditions.
20. (Optional) Choose the "transmission condition" as a combination of "Yes" or "No" answers to various conditions.
21. (Optional) Choose the "suspension condition" as a combination of "Yes" or "No" answers to various conditions.
22. (Optional) Choose the "brakes condition" as a combination of "Yes" or "No" answers to various conditions.
23. (Optional) Choose the "body condition" as a combination of "Yes" or "No" answers to various conditions.
24. (Optional) Choose the "tire condition" as a combination of "Yes" or "No" answers to various conditions.
25. (Optional) Choose the "overall condition" as a combination of "Yes" or "No" answers to various conditions.

## Field-by-Field Explanation

* **vehicle_make** (`vehicle_make`, `select_multiple`, required): Select the correct "vehicle make" from the provided options.
* **vehicle_year** (`vehicle_year`, `number`, required): Enter the "vehicle year" using numerical digits.
* **vehicle_model** (`vehicle_model`, `text`, required): Enter the "vehicle model" as a text.
* **vehicle_color** (`vehicle_color`, `text`, optional): (Optional) Enter the "vehicle color" as a text.
* **vehicle_license** (`vehicle_license`, `text`, required): Enter the "vehicle license" number.
* **vehicle_status** (`vehicle_status`, `select_one`, required): Choose the "vehicle status" as either "Active" or "Inactive".
* **last_inspection_date** (`last_inspection_date`, `date`, optional): (Optional) Enter the "last inspection date" using the date format (YYYY-MM-DD).
* **next_inspection_date** (`next_inspection_date`, `date`, optional): (Optional) Enter the "next inspection date" using the date format (YYYY-MM-DD).
* **mileage** (`mileage`, `number`, required): Enter the "mileage" using numerical digits.
* **vehicle_condition** (`vehicle_condition`, `select_multiple`, required): Choose the overall "vehicle condition" as a combination of "Yes" or "No" answers to various conditions.
* **mileage_last_inspection** (`mileage_last_inspection`, `number`, optional): (Optional) Enter the "mileage last inspection" using numerical digits.
* **vehicle_condition_last_inspection** (`vehicle_condition_last_inspection`, `select_multiple`, required): Choose the "vehicle condition last inspection" as a combination of "Yes" or "No" answers to various conditions.
* **notes** (`notes`, `text`, optional): (Optional) Enter any additional "notes" about the vehicle.
* **vehicle_type** (`vehicle_type`, `select_one`, required): Choose the "vehicle type" as either "Yes" or "No".
* **fuel_level** (`fuel_level`, `select_multiple`, optional): (Optional) Choose the "fuel level" as either "High" or "Low".
* **fuel_type** (`fuel_type`, `select_multiple`, optional): (Optional) Select the "fuel type" as either "Yes" or "No".
* **fuel_level_last_inspection** (`fuel_level_last_inspection`, `select_multiple`, optional): (Optional) Choose the "fuel level last inspection" as either "High" or "Low".
* **fuel_type_last_inspection** (`fuel_type_last_inspection`, `select_multiple`, optional): (Optional) Select the "fuel type last inspection" as either "Yes" or "No".
* **engine_condition** (`engine_condition`, `select_multiple`, optional): (Optional) Choose the "engine condition" as a combination of "Yes" or "No" answers to various conditions.
* **transmission_condition** (`transmission_condition`, `select_multiple`, optional): (Optional) Choose the "transmission condition" as a combination of "Yes" or "No" answers to various conditions.
* **suspension_condition** (`suspension_condition`, `select_multiple`, optional): (Optional) Choose the "suspension condition" as a combination of "Yes" or "No" answers to various conditions.
* **brakes_condition** (`brakes_condition`, `select_multiple`, optional): (Optional) Choose the "brakes condition" as a combination of "Yes" or "No" answers to various conditions.
* **body_condition** (`body_condition`, `select_multiple`, optional): (Optional) Choose the "body condition" as a combination of "Yes" or "No" answers to various conditions.
* **tire_condition** (`tire_condition`, `select_multiple`, optional): (Optional) Choose the "tire condition" as a combination of "Yes" or "No" answers to various conditions.
* **overall_condition** (`overall_condition`, `select_multiple`, optional): (Optional) Choose the "overall condition" as a combination of "Yes" or "No" answers to various conditions.

## Tips
- Always ensure that the "vehicle make" and "vehicle type" are accurately selected.
- If a condition is selected as "Yes" in "vehicle condition", ensure that all other conditions related to it are also selected as "Yes".
- Review the "overall condition" carefully before submitting the form.
- Ensure that all required fields are filled in before submitting the form.
