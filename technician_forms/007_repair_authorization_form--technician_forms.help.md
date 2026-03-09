## Repair Authorization Form - Help Guide

### Purpose
This form is used to request repair authorization for customer equipment. The form collects essential information from the customer, including their contact details and equipment description. It serves as a starting point for technicians to schedule and complete the repair work.

### How To Complete This Form
To complete this form, please follow these steps:

1. Fill out the form completely, ensuring all required fields are provided.
2. Enter accurate and relevant information in each field.
3. Ensure you have the customer's permission to access and work on their equipment.

### Field-by-Field Explanation

* **Customer Name** (`customer_name`, text, required): Enter the name of the customer.
* **Contact Number** (`contact_number`, text, required): Enter the customer's contact number, which will be used for communication and scheduling.
* **Contact Email** (`contact_email`, email, required): Enter the customer's email address, which will be used for communication and updates.
* **Customer Equipment Type** (`customer_equipment_type`, text, required): Describe the type of equipment being repaired, such as printer or computer.
* **Customer Equipment Description** (`customer_equipment_description`, text, required): Provide a detailed description of the equipment being repaired.
* **Technician Name** (`technician_name`, text, required): Enter the name of the technician assigned to the work order.
* **Work Order Number** (`work_order_number`, text, required): Enter the specific work order number assigned to the repair job.
* **Equipment Condition** (`equipment_condition`, select, required): Select the condition of the equipment to help technicians understand the scope of work:
	+ **Normal**: The equipment is in working order.
	+ **Used**: The equipment is not brand new, but still functional.
	+ **Refurbished**: The equipment was previously repaired or returned to its original condition.
	+ **Damaged**: The equipment is not in working order.
	+ **New**: The equipment is brand new.
	+ **Other**: If none of the above conditions apply, select this option and provide further details in the notes section.
* **Work Location** (`work_location`, text, required): Enter the location where the equipment is located.
* **Notes** (`notes`, note, optional): Add any additional information or comments about the repair job.
