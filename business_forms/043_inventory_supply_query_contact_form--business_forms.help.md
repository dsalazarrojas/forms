<thinking>...</thinking>

# Inventory Supply Query Contact Form - Help Guide
## Purpose
This form is designed to gather information from suppliers regarding their inventory supply needs. It will be used to query potential suppliers for available stock and delivery schedules.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your supplier name and title to help us identify your company.
2. Select 'Yes' or 'No' for each supply item to indicate what you need.
3. Enter the quantity needed for each selected supply item.
4. Choose a start date and end date for the supply request.
5. Enter your contact email address.
6. Enter your contact phone number.
7. Provide any additional query details in the space provided.
8. Finally, select 'Yes' to submit the form.

## Field-by-Field Explanation
* **Supplier Name** (`supplier_name`, `text`, required: false): Enter your company name or supplier name.
* **Query Title** (`query_title`, `text`, required: false): Add a brief title to describe the supply request.
* **Supply Item** (`supply_item`, `select_multiple`, required: false): Select 'Yes' for each item you need in stock.
* **Supply Item Quantity** (`supply_item_quantity`, `number`, required: false): Enter the quantity needed for each selected item.
* **Start Date** (`start_date`, `date`, required: false): Choose the earliest date you need the supply to start.
* **End Date** (`end_date`, `date`, required: false): Choose the latest date you need the supply to end.
* **Contact Email** (`contact_email`, `email`, required: false): Enter your work email address.
* **Contact Phone** (`contact_phone`, `text`, required: false): Enter your work phone number.
* **Query Details** (`query_details`, `note`, required: false): Add any additional information to help us understand your needs.
* **Submit** (`submit`, `select_one`, required: false): Select 'Yes' to submit the form and query the supplier.
