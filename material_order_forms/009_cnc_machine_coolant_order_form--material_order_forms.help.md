# CNC Machine Coolant Order Form - Help Guide
## Purpose

This form is used to place a request for CNC machine coolant. The purpose of this form is to gather information required for ordering and managing the supply of CNC machine coolant within the organization.

## How To Complete This Form

To complete this form, follow these steps:

1. Select a date for the order to be placed.
2. Enter the department responsible for placing this order.
3. Provide your full name and email address.
4. If applicable, enter your phone number and cost center.
5. Choose the type of coolant needed.
6. Select the preferred brand of coolant.
7. Enter the quantity of coolant required.
8. Choose the unit of measurement for the quantity.
9. Specify the required delivery date.
10. Enter the delivery location.
11. List the CNC machine models using this coolant.
12. If applicable, provide the approximate current inventory level and estimated weekly usage rate.
13. If applicable, describe any performance issues with the current coolant.
14. If applicable, specify any special handling or disposal requirements.
15. If applicable, confirm if budget is pre-approved.
16. Select the priority level of this order.
17. Enter the name of the department supervisor approving this order.

## Field-by-Field Explanation

* **Order Date** (`order_date`, date, required): Enter the date this order is being placed.
* **Ordering Department** (`ordering_department`, text, required): Enter the department responsible for placing this order.
* **Requester Name** (`requester_name`, text, required): Provide your full name.
* **Email Address** (`requester_email`, email, required): Enter your email address.
* **Phone Number** (`requester_phone`, text, optional): If you want to be contacted, enter your phone number.
* **Cost Center** (`cost_center`, text, optional): If applicable, enter your cost center.
* **Coolant Type** (`coolant_type`, select_one, required): Select the type of coolant needed from the available options.
* **Coolant Brand** (`coolant_brand`, text, optional): Select your preferred brand of coolant, if applicable.
* **Quantity Needed** (`coolant_quantity`, number, required): Enter the quantity of coolant required.
* **Unit of Measurement** (`quantity_unit`, select_one, required): Choose the unit of measurement for the quantity.
* **Required Delivery Date** (`delivery_date`, date, required): Enter the date by which you need this coolant.
* **Delivery Location** (`delivery_location`, text, required): Enter the location where the coolant is to be delivered.
* **CNC Machine Models** (`machine_models`, text, optional): List the machine models that will use this coolant, if applicable.
* **Current Inventory Level** (`current_inventory`, text, optional): Enter your approximate current inventory level, if applicable.
* **Estimated Weekly Usage Rate** (`usage_rate`, text, optional): Estimate your weekly usage rate, if applicable.
* **Coolant Performance Issues** (`coolant_performance`, text, optional): Describe any issues with the current coolant, if applicable.
* **Environmental or Safety Requirements** (`environmental_requirements`, text, optional): Specify any special handling or disposal requirements, if applicable.
* **Budget Pre-Approved** (`budget_approved`, select_one, optional): Confirm if budget is pre-approved.
* **Priority Level** (`priority_level`, select_one, optional): Select the priority level of this order.
* **Supervisor Name** (`supervisor_approval`, text, required): Enter the name of the department supervisor approving this order.
