<thinking> 
This form is designed to collect and record information about a unit, likely a medical or scientific instrument, in a healthcare setting. The form is intended to track the inventory of units, including details about the patient it belongs to, the unit's status, and other relevant information. This form appears to be a comprehensive tool for managing and tracking units in a clinical setting.

</thinking>

# Unit Inventory - Help Guide
## Purpose
The purpose of this form is to collect and record detailed information about a unit, including its patient, status, location, and other relevant details.

## How To Complete This Form
To complete this form, simply follow these steps:

1. Enter the patient ID of the person who owns the unit.
2. Enter the name of the patient.
3. Enter the ID of the unit.
4. Enter the name of the unit.
5. Select the unit's status (Active or Inactive).
6. Select the date and time the unit was received.
7. If relevant, enter additional details about the unit, such as its location, serial number, model, make, year, vendor, and description.
8. Optionally, add any remarks or notes about the unit.
9. Enter the email address of the person responsible for the unit (if applicable).
10. Finally, select the date and time the form was completed.

## Field-by-Field Explanation

* **Patient Id** (`patient_id`, number, required): Enter the ID of the patient who owns the unit.
* **Patient Name** (`patient_name`, text, required): Enter the full name of the patient.
* **Unit Id** (`unit_id`, number, optional): Enter the ID of the unit (if applicable).
* **Unit Name** (`unit_name`, text, required): Enter the name of the unit.
* **Date Received** (`date_received`, date, required): Select the date the unit was received.
* **Time Received** (`time_received`, time, optional): Select the time the unit was received (if applicable).
* **Unit Status** (`unit_status`, select_one, required): Select the status of the unit (Active or Inactive).
* **Unit Condition** (`unit_condition`, text, optional): Enter any additional details about the unit's condition (if applicable).
* **Remarks** (`remarks`, text, optional): Add any notes or remarks about the unit.
* **Assigned Tool** (`assigned_tool`, text, optional): Enter the tool assigned to the unit (if applicable).
* **Created By** (`created_by`, text, optional): Enter the name of the person who created the unit record.
* **Updated By** (`updated_by`, text, optional): Enter the name of the person who last updated the unit record.
* **Updated On** (`updated_on`, date, required): Select the date and time the form was last updated.
* **Created On** (`created_on`, date, required): Select the date and time the unit record was created.
* **Unit Location** (`unit_location`, text, optional): Enter the location of the unit (if applicable).
* **Inventory Type** (`inventory_type`, select_one, required): Select the type of inventory (Stock or Non-Stock).
* **Serial Number** (`serial_number`, text, optional): Enter the serial number of the unit (if applicable).
* **Unit Model** (`unit_model`, text, optional): Enter the model of the unit (if applicable).
* **Unit Make** (`unit_make`, text, optional): Enter the make of the unit (if applicable).
* **Unit Year** (`unit_year`, number, optional): Enter the year of the unit (if applicable).
* **Unit Vendor** (`unit_vendor`, text, optional): Enter the vendor of the unit (if applicable).
* **Unit Description** (`unit_description`, text, optional): Enter a detailed description of the unit (if applicable).
* **Unit Image** (`unit_image`, text, optional): Enter the location of the unit image (if applicable).
* **Unit Note** (`unit_note`, note, optional): Add any additional notes about the unit.
* **Unit Email** (`unit_email`, email, optional): Enter the email address of the person responsible for the unit (if applicable).
