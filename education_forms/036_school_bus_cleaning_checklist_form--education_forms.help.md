# School Bus Cleaning Checklist Form - Help Guide
## Purpose
The School Bus Cleaning Checklist Form is a tool designed to standardize the cleaning process and ensure that all necessary information is captured. This form aims to improve communication and efficiency among staff members.

## How To Complete This Form

### Step 1: Fill in the required fields
- Enter the **Trip ID** to identify the trip or route.
- Enter the **Date** of the cleaning event.
- Choose the **Vehicle Type** of the bus (School Bus or Other).
- Select the **Cleaning Status** of the bus (Cleaning Complete, Partially Cleaned, or Not Cleaned).
- Enter the **Driver Name** for reference.

### Step 2: Provide additional details (optional)
- Enter the **Route** details (if applicable).
- Enter any **Comments** about the cleaning process or vehicle condition.
- Choose the **Vehicle Condition** of the bus (Clean, Not Clean, or Needs Attention).
- Enter the **Student Count** (if applicable).
- Enter the **Vehicle Number** of the bus.
- Enter the **Location** of the cleaning event.
- Add any **Notes** about the bus's condition or cleaning status.

## Field-by-Field Explanation

* **Trip ID** (`trip_id`, number, required): Enter the unique identifier for this trip or route.
* **Date** (`date`, date, required): Enter the date of the cleaning event.
* **Route** (`route`, text, optional): Enter the route details, if applicable.
* **Driver Name** (`driver_name`, text, optional): Enter the driver's name for reference.
* **Student Count** (`student_count`, number, optional): Enter the number of students on the trip (if applicable).
* **Vehicle Number** (`vehicle_number`, number, optional): Enter the vehicle number of the bus.
* **Vehicle Type** (`vehicle_type`, select_one, required): Choose the type of vehicle (School Bus or Other).
* **Cleaning Status** (`cleaning_status`, select_one, required): Choose the status of the bus (Cleaning Complete, Partially Cleaned, or Not Cleaned).
* **Vehicle Condition** (`vehicle_condition`, select_multiple, optional): Choose the condition of the bus (Clean, Not Clean, or Needs Attention).
* **Comments** (`comments`, note, optional): Enter any comments about the cleaning process or vehicle condition.
* **Location** (`location`, text, optional): Enter the location of the cleaning event.
* **Notes** (`notes`, note, optional): Add any additional notes about the bus's condition or cleaning status.
