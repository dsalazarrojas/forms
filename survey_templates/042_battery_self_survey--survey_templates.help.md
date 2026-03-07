<thinking>

To create a user-facing help guide for the "Battery Self Survey" form, I'll first need to understand its purpose and requirements.

The "Battery Self Survey" form is likely used for quality control and maintenance of batteries. It seems to collect information about a battery's production and manufacturer details, internal specifications, quality control checks, and survey completion date. The form requires input for various fields, including manufacturer's name, battery model number, production date, internal resistance, open circuit voltage, nominal capacity, quality checks, estimated shelf life, overall quality control rating, quality control technician's name, and survey completion date.

To ensure relevance and non-duplication, this guide will assume that the user has access to the relevant information and is filling out the form to provide accurate and consistent data.

</thinking>

# Battery Self Survey - Help Guide
## Purpose
The "Battery Self Survey" form is used to gather information about a battery's production and manufacturer details, internal specifications, quality control checks, and survey completion date. This data helps in maintaining accurate records and ensuring quality control processes are followed.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide the manufacturer's name as it appears on the battery packaging or documentation.
2. Enter the battery model or series number as specified by the manufacturer.
3. Record the date the battery was produced.
4. Enter the internal resistance (measured in mOhms) as specified on the battery's documentation.
5. Enter the open circuit voltage as specified on the battery's documentation.
6. Enter the nominal capacity test result (in Ah) as specified on the battery's documentation.
7. Perform a quality control check on the battery and select one of the options provided.
8. Conduct a physical integrity check on the battery and select one of the options provided.
9. Estimate the shelf life of the battery in months.
10. Provide an overall quality control rating for the battery.
11. Record the name of the quality control technician who performed the survey.
12. Enter the date the survey was completed.

## Field-by-Field Explanation
- **Manufacturer Name** (`manufacturer_name`, `text`, required): Enter the name of the battery's manufacturer as it appears on the packaging or documentation.
- **Battery Model / Series Number** (`battery_model_number`, `text`, required): Enter the model or series number of the battery as specified by the manufacturer.
- **Date of Production** (`date_of_production`, `date`, required): Record the date the battery was produced.
- **Internal Resistance (mOhms)** (`internal_resistance_mOhm`, `number`, required): Enter the internal resistance measured in mOhms as specified on the battery's documentation.
- **Open Circuit Voltage (V)** (`open_circuit_voltage`, `number`, required): Enter the open circuit voltage as specified on the battery's documentation.
- **Rated Capacity Test Result (Ah)** (`nominal_capacity_test`, `number`, required): Enter the nominal capacity test result (in Ah) as specified on the battery's documentation.
- **Load Test Result** (`load_test_disposition`, `select_one`, required): Perform a quality control check on the battery by selecting one of the options provided:
	+ Passed
	+ Failed - Low Voltage
	+ Failed - Excessive Heat
- **Physical Integrity Inspection** (`physical_integrity_check`, `select_one`, required): Conduct a physical integrity check on the battery by selecting one of the options provided:
	+ Excellent - No defects
	+ Minor Cosmetic Scratches
	+ Significant Deformity (Reject)
	+ Leakage Detected (Reject)
- **Estimated Shelf Life (Months)** (`shelf_life_estimate`, `number`, required): Estimate the shelf life of the battery in months.
- **Overall Quality Control Rating** (`quality_assurance_rating`, `select_one`, required): Provide an overall quality control rating for the battery by selecting one of the options provided:
	+ Grade A - Premium
	+ Grade B - Standard
	+ Grade C - Refurbished
	+ Reject
- **QC Technician Name** (`qc_technician_name`, `text`, required): Enter the name of the quality control technician who performed the survey.
- **Survey Date** (`survey_completion_date`, `date`, required): Record the date the survey was completed.

## Tips
- Ensure accuracy and consistency in filling out the form.
- If you're unsure about any information, consult the battery's documentation or manufacturer's guidelines.
- Complete the form as soon as possible after inspecting the battery.
