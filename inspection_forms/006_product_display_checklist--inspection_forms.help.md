<thinking>
The Product Display Checklist form is a tool used by inspectors to record the status of products in a warehouse or inventory. This form is designed to gather information about the condition and location of products, as well as any follow-up actions required. The form is used to document the completion of inspections, including the date and time of completion. It may be used by inspectors or other personnel to track inventory levels and product condition.
Before starting, ensure you are using the correct form for the intended purpose. This form is specifically designed for recording the display status of products, so use it only for that purpose.
</thinking>

# Product Display Checklist - Help Guide
## Purpose
The Product Display Checklist is used to record the status of products on display in a warehouse or inventory.

## How To Complete This Form
1. Start by selecting the location where the product is displayed (Merchandiser Location).
2. Choose the condition of the product (Product Condition).
3. If issues are detected, select the follow-up action required.
4. Add any comments about the product.
5. Record the date and time the inspection was completed.
6. Enter the name of the employee completing the inspection.
7. Enter the employee's ID number.
8. Record the name of the location where the product is displayed.

## Field-by-Field Explanation

* **Merchandiser Location** (`merchandiser_location`, select_one, required/optional): Select the location where the product is displayed. This field helps identify which specific location the product is at.
* **Product Condition** (`product_condition`, select_multiple, required/optional): Choose the condition of the product from the available options. This field helps track the quality of the product.
* **Follow Up** (`follow_up`, select_one, required/optional): If issues are detected with the product, select the follow-up action required. This field helps ensure that any problems are addressed promptly.
* **Comments** (`comments`, note, required/optional): Add any comments about the product, such as notes or observations.
* **Date Completed** (`date_completed`, date, required/optional): Record the date the inspection was completed.
* **Time Completed** (`time_completed`, time, required/optional): Record the time the inspection was completed.
* **Employee Name** (`employee_name`, number, required/optional): Enter the name of the employee completing the inspection.
* **Employee ID** (`employee_id`, number, required/optional): Enter the ID number of the employee completing the inspection.
* **Location Name** (`location_name`, text, required/optional): Record the name of the location where the product is displayed.
 

Note: Fields marked as required/optional in the form YAML will be filled out according to their designated status. If a field is not required, it can be left blank or filled out as needed.
