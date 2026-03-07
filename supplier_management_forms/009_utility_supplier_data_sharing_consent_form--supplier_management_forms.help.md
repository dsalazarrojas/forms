<thinking>
This form is intended to gather information from suppliers about their data sharing preferences and consent for utility data sharing. The purpose of this form is to ensure that suppliers are aware of the data sharing process and are able to provide their consent for the data sharing of their utility usage data. This form should only be filled out by authorized personnel in the company and should not be accessed by suppliers directly. The information collected in this form will be used to update the supplier's profile in the database and to inform their data sharing consent status.
</thinking>

# utility_supplier_data_sharing_consent_form - Help Guide
## Purpose
This form is used to collect information from suppliers about their data sharing preferences and consent for utility data sharing.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the supplier's name in the "Supplier Name" field.
2. Enter the supplier's ID if available (optional).
3. Provide a brief description of the purpose for data sharing in the "Purpose" field.
4. Indicate whether data sharing will last for a specific duration by selecting "Yes" or "No" in the "Duration" field.
5. If applicable, select the start date for data sharing.
6. Enter the customer's ID to associate the supplier's data with the correct customer.
7. Select the list of customers whose data will be shared with the supplier (if applicable).
8. Add any additional notes about the data sharing arrangement.

## Field-by-Field Explanation

* **Supplier Name** (`supplier_name`, text, required): Enter the name of the supplier.
* **Supplier ID** (`supplier_id`, number, optional): Enter the supplier's ID if available.
* **Purpose** (`purpose`, text, required): Describe the purpose for data sharing.
* **Duration** (`duration`, select_one, required): Indicate whether data sharing will last for a specific duration.
* **Start Date** (`start_date`, date, optional): Select the start date for data sharing (if applicable).
* **End Date** (`end_date`, date, required): Enter the end date for data sharing.
* **Customer ID** (`customer_id`, text, required): Enter the customer's ID to associate the supplier's data with the correct customer.
* **Supplier List** (`supplier_list`, select_multiple, required): Select the list of customers whose data will be shared with the supplier (if applicable).
* **Notes** (`notes`, note, optional): Add any additional notes about the data sharing arrangement.

## Tips
* Make sure to fill in all required fields.
* Be clear and concise in providing the purpose and description for data sharing.
* Review the form carefully before submission to ensure accuracy.
