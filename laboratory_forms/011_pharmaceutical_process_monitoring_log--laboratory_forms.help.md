# Pharmaceutical Process Monitoring Log - Help Guide
## Purpose
The Pharmaceutical Process Monitoring Log form is used to collect important information about production shifts, equipment usage, and production timelines. This data helps in monitoring and improving the pharmaceutical process.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the production shift that occurred or did not occur using the "Production Shift" dropdown.
2. Indicate whether any equipment was used during the production process by selecting all applicable options in the "Equipment Used" field.
3. Enter the batch number of the production.
4. Provide the date of production using the "Production Date" field.
5. Enter the start and end times of the production process using the "Production Start Time" and "Production End Time" fields, respectively.
6. Add any additional comments or observations in the "Notes" field.

## Field-by-Field Explanation
- **Production Shift** (`production_shift`, select_one, required/optional): Select "Yes" to indicate that a production shift occurred, or "No" if no shift occurred.
- **Equipment Used** (`equipment_used`, select_multiple, required/optional): Select all equipment used during the production process.
- **Batch Number** (`batch_number`, number, required/optional): Enter the batch number of the production process. Please use numeric values only.
- **Production Date** (`production_date`, date, required/optional): Enter the date of the production process in the format MM/DD/YYYY.
- **Production Start Time** (`production_start_time`, time, required/optional): Enter the start time of the production process in the format HH:MM AM/PM.
- **Production End Time** (`production_end_time`, time, required/optional): Enter the end time of the production process in the format HH:MM AM/PM.
- **Notes** (`notes`, note, required/optional): Add any additional comments or observations about the production process.
