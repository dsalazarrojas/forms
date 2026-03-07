<thinking>
The form "sales_operations_handover_checklist" is a sales operations handover checklist used to track and document the progress of sales orders. Its purpose is to ensure a smooth transition of sales orders between different stages of the sales process, reducing errors and ensuring consistency. The form should only be filled out for sales orders that are being handed over, not for new sales orders.
</thinking>

# sales_operations_handover_checklist - Help Guide
## Purpose
The sales operations handover checklist is used to track and document the progress of sales orders, ensuring a smooth transition of sales orders between different stages of the sales process.

## How To Complete This Form
1. Fill out the form for each sales order that is being handed over.
2. Make sure to complete each section thoroughly and accurately.
3. Review and validate your input before submitting the form.

## Field-by-Field Explanation

* **Sales Order Details** (`sales_order_details`, `text`, required/optional): This field is used to provide a brief description of the sales order.
* **Client Name** (`client_name`, `text`, required/optional): This field is used to enter the name of the client associated with the sales order.
* **Sale Stage** (`sale_stage`, `select_one`, required/optional): Select the current stage of the sales process this sales order is in. Options are:
	+ Onboarding
	+ Qualified
	+ Qualified and Negotiating
	+ Qualified and Qualified but no Decision Made
* **Account Manager** (`account_manager`, `select_multiple`, required/optional): Select one or more account managers associated with this sales order from the list below:
	+ John
	+ Jane
	+ Jim
* **Sales Manager** (`sales_manager`, `select_multiple`, required/optional): Select one or more sales managers associated with this sales order from the list below:
	+ John
	+ Jane
	+ Jim
* **Sales Team** (`sales_team`, `select_multiple`, required/optional): Select one or more sales teams associated with this sales order from the list below:
	+ Sales Team 1
	+ Sales Team 2
	+ Sales Team 3
* **Deal Size** (`deal_size`, `select_one`, required/optional): Select the size of the deal. Options are:
	+ Small
	+ Medium
	+ Large
* **Deal Status** (`deal_status`, `select_multiple`, required/optional): Select the current status of the deal. Options are:
	+ Active
	+ Closed
	+ Lost
* **Sales Stage Details** (`sales_stage_details`, `text`, required/optional): This field is used to provide additional details about the sales stage this sales order is in.
* **Client Details** (`client_details`, `text`, required/optional): This field is used to provide additional details about the client.
* **Deal Value** (`deal_value`, `number`, required/optional): This field is used to enter the value of the sales order.
* **Sales Order Date** (`sales_order_date`, `date`, required/optional): This field is used to enter the date of the sales order.
* **Sales Stage** (`sale_stage`, `select_one`, required/optional) should be filled out as described above.
* **Account Manager** (`account_manager`, `select_multiple`, required/optional) and **Sales Manager** (`sales_manager`, `select_multiple`, required/optional) fields should be filled out as described above.
* **Sales Team** (`sales_team`, `select_multiple`, required/optional) should be filled out as described above.
* **Deal Status** (`deal_status`, `select_multiple`, required/optional) should be filled out as described above.
* **Deal Size** (`deal_size`, `select_one`, required/optional) should be filled out as described above.
* **Deal Value** (`deal_value`, `number`, required/optional) should be filled out as a number.
