# Automation Line Replacement Part Order Form - Help Guide
## Purpose
This form is used to request and track replacement parts for automation lines. It is essential to provide accurate and detailed information to ensure timely and correct fulfillment of the requested parts.

## How To Complete This Form

1. Fill out the form completely, ensuring that all required fields are filled in correctly.
2. Provide accurate and detailed information about the requester and their contact details.
3. Enter the necessary equipment information, including equipment name, ID or serial number, and manufacturer.
4. Select the type of part required from the provided options.
5. Specify the quantity needed and current inventory level.
6. Choose the urgency level of the order, which will influence the priority of the order.
7. Enter the date by which the part is needed.
8. If applicable, provide a preferred supplier and existing purchase order number.

## Field-by-Field Explanation

* **Requester Name** (`requester_name`, text, required): Enter the name of the person requesting the part.
* **Email Address** (`requester_email`, email, required): Enter the email address of the person requesting the part.
* **Phone Number** (`requester_phone`, text, required): Enter the phone number of the person requesting the part.
* **Department** (`department`, text, required): Enter the department responsible for the equipment.
* **Cost Center** (`cost_center`, text, optional): Enter the cost center for accounting purposes.
* **Equipment Name** (`equipment_name`, text, required): Enter the name of the equipment that requires the replacement part.
* **Equipment ID or Serial Number** (`equipment_id`, text, required): Enter the ID or serial number of the equipment.
* **Manufacturer** (`equipment_manufacturer`, text, optional): Enter the manufacturer of the equipment.
* **Automation Line Number** (`automation_line`, text, required): Enter the automation line number where the equipment is located.
* **Part Number** (`part_number`, text, required): Enter the original part number from the documentation.
* **Part Description** (`part_description`, text, required): Enter the name and specifications of the part.
* **Type of Part** (`part_type`, select_one, required): Select the type of part required from the provided options.
* **Quantity Needed** (`part_quantity`, number, required): Enter the quantity of the part needed.
* **Current Inventory Level** (`current_inventory`, number, optional): Enter the current inventory level of the part.
* **Order Urgency** (`urgency_level`, select_one, required): Select the urgency level of the order, which will influence the priority of the order.
* **Date Needed By** (`required_date`, date, required): Enter the date by which the part is needed.
* **Preferred Supplier** (`preferred_supplier`, text, optional): Enter the preferred supplier for the part.
* **Estimated Cost** (`estimated_cost`, number, optional): Enter the estimated cost of the part.
* **Existing Purchase Order Number** (`purchase_order`, text, optional): Enter the existing purchase order number.
* **Additional Notes or Special Instructions** (`additional_notes`, text, optional): Enter any additional notes or special instructions for the order.
