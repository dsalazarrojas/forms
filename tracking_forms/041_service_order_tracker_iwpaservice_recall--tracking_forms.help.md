# Service Order Tracker iWPAService Recall - Help Guide
## Purpose
The Service Order Tracker iWPAService Recall form is designed to collect and track information about service orders. This form helps customer service representatives or technicians manage and track service orders in a centralized location.

## How To Complete This Form
To complete the form, follow these steps:

1. Select one of the following options for "Customer Info":
  * Customer: If the service order is related to a customer.
  * Other: If the service order is not related to a customer.
2. Enter the "Service Order Number" in the designated field.
3. Select the "Service Order Date" from the calendar.
4. Choose the current status of the service order from the following options:
  * Pending: If the service order is waiting for processing or confirmation.
  * Active: If the service order is currently being worked on.
  * Complete: If the service order has been completed.
5. Enter a brief description of the service order in the "Service Order Description" field.
6. Select the priority of the service order from the following options:
  * High: If the service order requires urgent attention.
  * Medium: If the service order has a moderate priority.
  * Low: If the service order has a low priority.
7. Choose who the service order is assigned to from the following options:
  * Customer: If the customer is responsible for handling the service order.
  * Technician: If a technician is handling the service order.
  * Manager: If a manager is handling the service order.
8. Finally, click on the "Submit" button to save the completed form.

## Field-by-Field Explanation

* **Customer Info** (`customer_info`, select_one, required: false)
  This field allows you to select the type of customer associated with the service order. Please choose either "Customer" or "Other" accordingly.
* **Service Order Number** (`service_order_number`, number, required: false)
  Enter the unique identifier for the service order.
* **Service Order Date** (`service_order_date`, date, required: false)
  Select the date when the service order was created or started.
* **Service Order Status** (`service_order_status`, select_multiple, required: false)
  Choose the current status of the service order from the options: "Pending", "Active", or "Complete".
* **Service Order Details** (`service_order_details`, text, required: false)
  Enter a brief description of the service order.
* **Service Order Priority** (`service_order_priority`, select_one, required: false)
  Select the priority of the service order from the options: "High", "Medium", or "Low".
* **Service Order Assigned To** (`service_order_assigned_to`, select_multiple, required: false)
  Choose who the service order is assigned to from the options: "Customer", "Technician", or "Manager".
* **Service Order Description** (`service_order_description`, text, required: false)
  Enter any additional comments or information about the service order.
