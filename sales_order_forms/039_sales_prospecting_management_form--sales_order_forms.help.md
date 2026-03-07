<thinking>
The sales_prospecting_management_form is designed to manage sales prospects by capturing crucial information such as sales stage, customer details, and team member assignment. This form ensures that sales teams can efficiently track and follow up on leads, improving sales performance and customer relationships. To prevent data duplication, users should only fill out the form once per lead, and updates should be made through the "Update" feature.
</thinking>

# sales_prospecting_management_form - Help Guide
## Purpose
The sales_prospecting_management_form is used to manage sales prospects by capturing relevant information such as sales stage, customer details, and team member assignment.

## How To Complete This Form
To complete this form, follow these steps:
- Select the current sales stage of the prospect.
- Enter the customer's name.
- Enter the customer's email address.
- Enter the customer's phone number.
- (Optional) Enter the customer's address.
- Select the sales representative assigned to the prospect.
- Select the sales manager for the prospect.
- Select the sales stage email status.
- (Optional) Add a note about the customer.
- Select the sales prospecting manager for the lead.

## Field-by-Field Explanation
* **Sales Stage** (`sales_stage`, `select_one`, required): Select the current stage of the sales process the customer is in (Stage1, Stage2, or Stage3).
* **Customer Name** (`customer_name`, `text`, required): Enter the name of the customer.
* **Customer Email** (`customer_email`, `email`, required): Enter the customer's email address.
* **Phone Number** (`phone_number`, `text`, required): Enter the customer's phone number.
* **Customer Address** (`customer_address`, `note`, optional): If available, enter the customer's physical address. (Note: This field is not required.)
* **Sales Rep** (`sales_rep`, `select_one`, required): Select the sales representative assigned to the customer.
* **Sales Manager** (`sales_manager`, `select_multiple`, required): Select one or more sales managers responsible for the customer.
* **Sales Stage Email** (`sales_stage_email`, `select_one`, required): Select the sales stage email status (Stage1, Stage2, or Stage3).
* **Customer Note** (`customer_note`, `text`, optional): Add any additional notes or information about the customer. (Note: This field is not required.)
* **Sales Prospecting Manager** (`sales_prospecting_manager`, `select_one`, required): Select the sales prospecting manager for the lead.
