<thinking>
This form is intended to be used for billing purposes of floral arrangements, likely for an e-commerce or retail business that offers customized floral arrangements. The form should only be completed when a floral arrangement is sold or a payment is made. This form is likely not intended for internal use, such as for employees within the company.

To complete this form, the user will need to navigate through the different pages, which are likely organized by category, such as "Order Details", "Customer Info", "Costs", etc. Each page should be filled out accordingly, making sure that all required fields are completed. The form may not have any conditional logic that would prevent users from proceeding, as indicated by the "required" property being set to "false" for all fields.

The form's purpose is to accurately calculate and display the subtotal, total, and other relevant costs associated with a given floral arrangement. This form likely relies on the "service_cost", "labor_cost", and "materials_cost" fields to calculate the "subtotal" which is then added to "taxes" to calculate the "total".

</thinking>

# floral_arrangement_billing_form - Help Guide
## Purpose
The purpose of this form is to accurately calculate and display the costs associated with a given floral arrangement, including subtotal, total, and taxes.

## How To Complete This Form
This form is organized into different sections, each focusing on a specific aspect of the costs associated with a floral arrangement. To complete this form, please follow these steps:

1. Navigate through the different sections, such as "Order Details", "Customer Info", "Costs", etc.
2. Fill out each field according to its label and instructions.
3. Make sure to review all fields before submitting the form.

## Field-by-Field Explanation
- **Order Details** (`title`, `text`, required: false): Enter the relevant details of the order, such as the type of arrangement, date, and any special instructions or notes.
- **Customer Info** (`title`, `select_one`, required: false): Choose the type of customer from the options provided.
	+ Select "Full-time Florist" if the customer is a professional florist.
	+ Select "Part-time Florist" if the customer is not a professional florist.
- **Service Cost** (`label`, `number`, required: false): Enter the cost of the service provided.
- **Labor Cost** (`label`, `number`, required: false): Enter the cost of labor involved in creating the arrangement.
- **Materials Cost** (`label`, `number`, required: false): Enter the cost of materials used in the arrangement.
- **Subtotal** (`label`, `number`, required: false): This field is automatically calculated based on the service and labor costs entered above.
- **Taxes** (`label`, `number`, required: false): Enter the amount of taxes applied to the arrangement.
- **Total** (`label`, `number`, required: false): This field is automatically calculated based on the subtotal and taxes entered above.
- **Payment Method** (`title`, `select_one`, required: false): Choose the method of payment from the options provided.
	+ Select "Online Payment" for online payment options.
	+ Select "Offline Payment" for offline payment options.
- **Notes** (`title`, `note`, required: false): Enter any additional notes or comments about the arrangement.

## Tips
- Make sure to review all fields before submitting the form to ensure accuracy.
- The form may not have any conditional logic that would prevent users from proceeding, so make sure to complete all fields.
- The form is likely used for billing purposes, so make sure to enter accurate costs and taxes.
- If you are unsure about any field, please refer to your supervisor or relevant documentation.
