# Army Supply Request Form - Help Guide
## Purpose
This form is used by military personnel to request supplies for their units or departments. It collects information about the requestor, the supply requested, and the required delivery information. The form helps ensure that the supply request is properly documented and submitted to the relevant authorities for approval and processing.

## How To Complete This Form
To complete this form, follow these steps:

1.  Fill in the requestor's information, including their name, rank, unit, and contact number.
2.  Specify the item you are requesting, including its name or description, category, and specifications or model number.
3.  Provide the quantity and unit of measure for the requested item.
4.  Select the priority level and desired delivery date for the item.
5.  Enter the delivery location and budget information (estimated cost and total cost).
6.  Provide a brief justification for the request, explaining why the item is needed.
7.  If necessary, indicate the operational impact if the item is not fulfilled.
8.  Finally, obtain approval from your supervisor before submitting the form.

## Field-by-Field Explanation

* **Requestor Name** (`requestor_name`, `text`, required): Enter your name as the requesting officer or personnel.
* **Rank** (`requestor_rank`, `text`, required): Enter your rank as the requesting officer or personnel.
* **Unit or Department** (`requestor_unit`, `text`, required): Enter the name of your unit or department.
* **Contact Number** (`requestor_contact`, `text`, required): Enter your contact number for follow-up.
* **Date of Request** (`request_date`, `date`, required): Enter the date on which you are making the request.
* **Item Name or Description** (`item_name`, `text`, required): Enter the name or description of the item you are requesting.
* **Item Category** (`item_category`, `select_one`, required): Select the category of the item you are requesting (e.g., Equipment and gear, Ammunition and weapons, etc.).
* **Item Specifications or Model Number** (`item_specifications`, `text`, optional): Enter any additional specifications or model number for the item.
* **Quantity Requested** (`quantity_requested`, `number`, required): Enter the quantity of the item you are requesting.
* **Unit of Measure** (`unit_of_measure`, `text`, required): Enter the unit of measure for the quantity requested (e.g., each, case, pallet, etc.).
* **Priority Level** (`priority_level`, `select_one`, required): Select the priority level of the request (e.g., Routine, Priority, Urgent).
* **Date Needed By** (`date_needed`, `date`, required): Enter the date by which you need the item to be delivered.
* **Delivery Location** (`delivery_location`, `text`, required): Enter the location where the item should be delivered.
* **Purpose or Justification** (`purpose`, `text`, required): Enter a brief justification for why the item is needed.
* **Operational Impact if Not Fulfilled** (`operational_impact`, `text`, optional): If necessary, indicate the operational impact if the item is not fulfilled.
* **Estimated Cost** (`estimated_cost`, `number`, optional): Enter the estimated cost per unit of the item.
* **Total Estimated Cost** (`total_cost`, `number`, optional): Enter the total estimated cost of the requested quantity.
* **Budget Account or Fund Code** (`budget_account`, `text`, required): Enter the budget account or fund code for the request.
* **Supervisor Approval** (`supervisor_approval`, `select_one`, required): Select the status of the request (e.g., Approved, Pending approval, Not approved).
* **Supervisor Name** (`supervisor_name`, `text`, required): Enter the name of your supervisor who approved or will approve the request.
