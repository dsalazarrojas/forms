# injection_foam_work_order_form - Help Guide
## Purpose
This form is used to capture information for foam injection services. It is for customers and internal users to provide details about their foam injection service requests.

## How To Complete This Form
1. Fill out the form with the required fields or select the fields that apply to your request.
2. Choose the relevant options for the "Service Request" field, as this will determine the type of foam service you need.
3. Select the desired "Foam Quantity", "Foam Type", "Foam Color", and "Foam Size" options for your needs.
4. Provide any "Special Instructions" or details in the text field.
5. Choose the assigned user from the "Assigned User" dropdown.
6. Optionally, select the "Order Date" if it is relevant to your request.

## Field-by-Field Explanation
* **Customer Information** (`customer_info`, `text`, required: false): Enter the customer's name and contact details, if necessary.
* **Service Request** (`service_request`, `select_multiple`, required: false): Choose the type of foam service you require from the dropdown options.
* **Foam Quantity** (`foam_quantity`, `number`, required: false): Select the quantity of foam you require.
* **Foam Type** (`foam_type`, `select_one`, required: false): Choose the type of foam you need: Standard, Specialized, or Custom.
* **Foam Color** (`foam_color`, `select_one`, required: false): Select the desired color of foam.
* **Foam Size** (`foam_size`, `select_one`, required: false): Choose the size of foam you require: Small, Medium, or Large.
* **Special Instructions** (`special_instructions`, `text`, required: false): Enter any special requirements or details for the foam service.
* **Assigned User** (`assigned_user`, `select_one`, required: false): Select the internal user assigned to handle your request.
* **Order Date** (`order_date`, `date`, required: false): Optionally, select the date for the order if it's relevant to your request.

## Tips
* Make sure to select the correct "Service Request" option to ensure the correct type of foam service is provided.
* Double-check the "Foam Quantity", "Foam Type", "Foam Color", and "Foam Size" options to ensure accuracy.
* If you have any special requirements or instructions, use the "Special Instructions" field to provide details.
* Ensure you select the correct "Assigned User" to handle your request.
* If an "Order Date" is required, select the correct date for the order.
