# hvac_service_report_form - Help Guide
## Purpose
The HVAC Service Report Form is designed for technicians to document the status of a HVAC system after performing maintenance or repairs. This form collects information about the system, customer, and other relevant details to ensure accurate reporting and tracking.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your information as the technician who performed the service.
   - Sign your name in the "Technician Sign" field.
   - Enter any notes or comments you want to add in the "Technician Comment" field.
2. Enter customer information:
   - Fill in the customer's name in the "Customer Name" field.
   - Enter the customer's address, city, and state in the corresponding fields.
   - Add a note or comment for the customer in the "Customer Comment" field.
3. Document the system information:
   - Select the type of system inspected (e.g., HVAC, Air Conditioning, Heating).
   - Check the system's condition.
   - Enter the temperature setting of the system.
   - Select the system's status (e.g., Running, Standby, False).
   - Enter the system's temperature reading.
4. Enter any additional information:
   - Add any notes or comments about the system in the "System Notes" field.
   - Enter the system's make, model, year of manufacture, and serial number.

## Field-by-Field Explanation
* **Technician Sign** (`technician_signature`, `text`, required): Sign your name as the technician who performed the service.
* **Customer Sign** (`customer_signature`, `text`, required): Sign your name as the customer who authorized the service.
* **System Inspected** (`system_inspected`, `select_one`, required): Select the type of system inspected (e.g., HVAC, Air Conditioning, Heating).
* **System Condition** (`system_condition`, `select_multiple`, required): Check the condition of the system (e.g., Yes, No).
* **Temperature Setting** (`temperature_setting`, `number`, required): Enter the temperature setting of the system.
* **System Status** (`system_status`, `select_one`, required): Select the system's status (e.g., Running, Standby, False).
* **Temperature** (`temperature`, `number`, required): Enter the system's temperature reading.
* **Note** (`note`, `text`, required): Enter any additional notes or comments about the system.
* **Technician Comment** (`technician_comment`, `text`, required): Enter any additional comments or notes from the technician.
* **Customer Comment** (`customer_comment`, `text`, required): Enter any additional comments or notes from the customer.
* **Date** (`date`, `date`, required): Enter the date of the service.
* **Time** (`time`, `time`, required): Enter the time of the service.
* **Email** (`email`, `email`, required): Enter the customer's email address.
* **Phone** (`phone`, `text`, required): Enter the customer's phone number.
* **Technician Name** (`technician_name`, `text`, required): Enter your name as the technician.
* **Customer Name** (`customer_name`, `text`, required): Enter the customer's name.
* **System Make** (`system_make`, `text`, required): Enter the system's make.
* **System Model** (`system_model`, `text`, required): Enter the system's model.
* **Year of Manufacture** (`system_year_of_manufacture`, `number`, required): Enter the system's year of manufacture.
* **System Serial Number** (`system_serial_number`, `text`, required): Enter the system's serial number.
* **System Location** (`system_location`, `text`, required): Enter the system's location.
* **Customer Address** (`customer_address`, `text`, required): Enter the customer's address.
* **Customer City** (`customer_city`, `text`, required): Enter the customer's city.
* **Customer State** (`customer_state`, `text`, required): Enter the customer's state.

## Tips
* Make sure to fill in all required fields to ensure accurate and complete reporting.
* Review the form carefully before submitting it to ensure all information is correct and complete.
