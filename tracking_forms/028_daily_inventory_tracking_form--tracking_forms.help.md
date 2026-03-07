<thinking>
This form is used for daily inventory tracking, allowing users to report issues and track stock quantities, values, and other relevant information. This form should only be used for tracking purposes and should not be used for other purposes. To avoid duplication, please ensure that you are using the correct form for your specific needs.
</thinking>

# <string> - Help Guide
## Purpose
The <string> form is used for daily inventory tracking and reporting. Users can fill out this form to report issues and track stock quantities, values, and other relevant information.

## How To Complete This Form
1. Fill in the form title, which should briefly describe the report.
2. Select the category of the form (Tracking Forms or Storekeeper Forms).
3. Provide a description of the issue or report.
4. Assign the report to a specific person or team.
5. Enter the store and warehouse names, if applicable.
6. Report the stock location and stock quantity.
7. Indicate whether an issue was reported or not.
8. Provide a detailed description of the issue, if applicable.
9. Enter the stock locations and stock quantities for up to four separate stock values.
10. Enter the stock value for each stock value field.
11. Select the date of the report.
12. Enter the item name and item number, if applicable.
13. Enter the unit of measure, if applicable.

## Field-by-Field Explanation
* **Title** (`daily_inventory_tracking_form_title`, text, required): A brief description of the report.
* **Category** (`category`, select_one, required): Select the category of the form (Tracking Forms or Storekeeper Forms).
* **Description** (`description`, text, optional): A detailed description of the issue or report.
* **Assigned To** (`assigned_to`, text, optional): The person or team assigned to report the issue.
* **Store Name** (`store_name`, text, optional): The name of the store associated with the report.
* **Warehouse Name** (`warehouse_name`, text, optional): The name of the warehouse associated with the report.
* **Stock Location** (`stock_location`, text, optional): The stock location associated with the report.
* **Stock Quantity** (`stock_quantity`, number, optional): The stock quantity associated with the report.
* **Issue Reported** (`issue_reported`, select_multiple, optional): Indicate whether an issue was reported or not.
* **Issue Description** (`issue_description`, text, optional): A detailed description of the issue, if applicable.
* **Stock Location 1** (`stock_location_1`, text, optional): The stock location associated with the first stock value field.
* **Stock Quantity 1** (`stock_quantity_1`, number, optional): The stock quantity associated with the first stock value field.
* **Stock Value 1** (`stock_value_1`, number, optional): The stock value associated with the first stock value field.
* **Stock Location 2** (`stock_location_2`, text, optional): The stock location associated with the second stock value field.
* **Stock Quantity 2** (`stock_quantity_2`, number, optional): The stock quantity associated with the second stock value field.
* **Stock Value 2** (`stock_value_2`, number, optional): The stock value associated with the second stock value field.
* **Stock Location 3** (`stock_location_3`, text, optional): The stock location associated with the third stock value field.
* **Stock Quantity 3** (`stock_quantity_3`, number, optional): The stock quantity associated with the third stock value field.
* **Stock Value 3** (`stock_value_3`, number, optional): The stock value associated with the third stock value field.
* **Stock Location 4** (`stock_location_4`, text, optional): The stock location associated with the fourth stock value field.
* **Stock Quantity 4** (`stock_quantity_4`, number, optional): The stock quantity associated with the fourth stock value field.
* **Stock Value 4** (`stock_value_4`, number, optional): The stock value associated with the fourth stock value field.
* **Date** (`date`, date, optional): The date of the report.
* **Item Name** (`item_name`, text, optional): The name of the item being reported.
* **Item Number** (`item_number`, text, optional): The item number associated with the report.
* **Unit of Measure** (`unit_of_measure`, text, optional): The unit of measure associated with the report.

Note: Fields marked with "optional" can be left blank or filled out as needed.
