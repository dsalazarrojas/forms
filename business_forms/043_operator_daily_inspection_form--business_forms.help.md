# Operator Daily Inspection Form - Help Guide
## Purpose
The Operator Daily Inspection Form is a tool used to collect data from operators on a daily basis. It helps in maintaining accurate and up-to-date information about vehicle condition, maintenance, and other relevant details.

## How To Complete This Form
To complete this form effectively, follow these steps:

1.  Review each field carefully and ensure you are filling out information for the correct vehicle.
2.  Fill in any applicable fields with the required information.
3.  Select the correct options for "check_engine", "transmission", and "engine_radiator" fields as per your observations.
4.  Enter any additional comments or observations in the "report_details" field.
5.  Fill in the "notes" field for any additional information that is not covered in other fields.
6.  Enter the email address of the person assigned to handle the vehicle in the "assigned_to" field.
7.  Fill in the "date" field with the date of the daily inspection.

## Field-by-Field Explanation
### Vehicle Details
*   **Vehicle Details** (`operator_daily_inspection_form`, text): This field is where you enter the vehicle's make, model, and any other relevant details. Please enter the information as it appears on the vehicle's documentation or label.

### Check Engine
*   **Check Engine** (`check_engine`, select_one): In this field, select the condition of the vehicle's engine. Choose from the options "prophets" or "other". If the engine is not functioning correctly, choose "other" and provide further explanation in the "notes" field.

### Engine Oil Level
*   **Engine Oil Level** (`engine_oil_level`, number): This field is used to measure the engine oil level. Please enter the level as per the manufacturer's recommended level or other relevant standards.

### Engine Radiator
*   **Engine Radiator** (`engine_radiator`, select_multiple): In this field, select the condition of the vehicle's engine radiator. Choose from the options "prophets" or "other". If the radiator is not functioning correctly, choose "other" and provide further explanation in the "notes" field.

### Transmission
*   **Transmission** (`transmission`, select_one): In this field, select the condition of the vehicle's transmission. Choose from the options "prophets" or "other". If the transmission is not functioning correctly, choose "other" and provide further explanation in the "notes" field.

### Vehicle Condition
*   **Vehicle Condition** (`vehicle_condition`, select_multiple): In this field, select the overall condition of the vehicle. Choose from the options "prophets" or "other". If the vehicle's condition is not as expected, choose "other" and provide further explanation in the "notes" field.

### Report Details
*   **Report Details** (`report_details`, text): This field is for any additional comments or observations you'd like to make about the vehicle's condition or any other relevant details.

### Notes
*   **Notes** (`notes`, text): This field is for any additional information that is not covered in other fields.

### Assigned To
*   **Assigned To** (`assigned_to`, email): Enter the email address of the person assigned to handle the vehicle.

### Date
*   **Date** (`date`, date): Fill in the date of the daily inspection.
