<thinking>
We need to ensure that the "Furniture Requisition Form" is used correctly to submit requests for new furniture items. This form should be filled out by employees who need to request furniture items for their workspaces or offices. The form should be used only once, and not repeatedly for the same request. The employee's name, department, and submitter's department should match to ensure the request is valid. The employee should fill out the required fields accurately to provide sufficient information for the purchase decision.
</thinking>

# Furniture Requisition Form - Help Guide
## Purpose
This form is used to submit a request for new furniture items. Please fill out the form carefully to provide all the necessary information for the purchase decision.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your name and department.
2. Describe the furniture item you need.
3. Enter the price and quantity of the item.
4. Provide your email address and phone number.
5. Choose the department where the item will be used.
6. Select the type of furniture you are requesting.
7. Choose the status of the request (Approved, Declined, or Pending).
8. Enter the date for the item status.

## Field-by-Field Explanation

* **Employee Name** (`employee_name`, text, required): Please enter your full name as it appears on your personnel record.
* **Department** (`department`, select_one, required): Select the department you belong to (e.g., HR, Finance, Sales).
* **Item Description** (`item_description`, text, optional): Provide a detailed description of the furniture item you are requesting.
* **Item Price** (`item_price`, number, required): Enter the price of the furniture item.
* **Item Quantity** (`item_quantity`, number, required): Enter the quantity of the furniture item you need.
* **Submitter Email** (`submitter_email`, email, required): Enter your work email address.
* **Submitter Phone** (`submitter_phone`, text, required): Enter your work phone number.
* **Department** (`department`, select_multiple, required): Select the department where the item will be used (e.g., Finance, Sales).
* **Furniture Type** (`furniture_type`, text, optional): Provide more details about the type of furniture you are requesting.
* **Item Location** (`item_location`, note, optional): Note the location where the item will be placed.
* **Submitter Location** (`submitter_location`, text, optional): Note the location of the person submitting the request.
* **Submitter Comments** (`submitter_comments`, text, optional): Provide any additional comments or notes about the request.
* **Submitter Department** (`submitter_department`, select_one, required): Select the department of the person submitting the request.
* **Item Status** (`item_status`, select_one, required): Select the status of the request (e.g., Approved, Declined, Pending).
* **Item Status Date** (`item_status_date`, date, required): Enter the date for the item status.

This form is designed to gather necessary information for the purchase decision, and your accurate input will help in making an informed decision. Please fill out the form carefully and submit it once to avoid duplication of requests.
