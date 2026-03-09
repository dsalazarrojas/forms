# Sample Work Order Form - Help Guide
## Purpose
The "Sample Work Order Form" is a template designed to collect essential details about a work order, helping ensure accuracy and completeness in the work order creation process. 

## How To Complete This Form
To fill out the form, follow these steps:
1. Start by filling out the "customer_details" section with the relevant customer information.
2. Select the "work_order_type" that best describes the work order.
3. Enter the customer's "customer_address" and any additional "work_order_specification" information required.
4. Provide the "date_of_execution" and estimated "quantity_material" and "estimated_cost" needed for the work order.
5. Enter the "labor_cost" and "hours_spent" for the work order, if applicable.
6. Write a detailed "job_description" of the work order.
7. Finally, enter the "customer_name" to confirm the customer's name.

## Field-by-Field Explanation
### customer_details
* **Customer Details** (`customer_details`, `text`, optional): This field is used to enter the customer's name, contact information, and any other relevant details.

### work_order_type
* **Work Order Type** (`work_order_type`, `select_one`, optional): This field provides a list of work order types (e.g., Type 1, Type 2, Type 3). Select the type that best describes the work order.

### customer_address
* **Customer Address** (`customer_address`, `text`, optional): Enter the customer's address in the text field.

### work_order_specification
* **Work Order Specification** (`work_order_specification`, `text`, optional): Enter any additional information required for the work order.

### date_of_execution
* **Date of Execution** (`date_of_execution`, `date`, optional): Enter the date when the work order is expected to be executed.

### quantity_material
* **Quantity of Materials** (`quantity_material`, `number`, optional): Enter the quantity of materials needed for the work order.

### estimated_cost
* **Estimated Cost** (`estimated_cost`, `number`, optional): Enter the estimated cost of the work order.

### labor_cost
* **Labor Cost** (`labor_cost`, `text`, optional): Enter the labor cost for the work order, if applicable.

### hours_spent
* **Hours Spent** (`hours_spent`, `number`, optional): Enter the hours spent on the work order.

### job_description
* **Job Description** (`job_description`, `text`, optional): Provide a detailed description of the job.

### customer_name
* **Customer Name** (`customer_name`, `text`, optional): Enter the customer's name to confirm.
