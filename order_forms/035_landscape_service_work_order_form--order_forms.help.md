# Landscape Service Work Order Form - Help Guide
## Purpose
The Landscape Service Work Order Form is a crucial tool for submitting work orders for various landscape services to the company. This form helps to gather essential information from customers to facilitate efficient service delivery and scheduling.

## How To Complete This Form
To complete this form, follow these steps:
1. Select the type of service you require (e.g., Mowing, Pruning, Planting).
2. Enter the start and end dates for the service, if applicable.
3. Provide your name and email address to ensure we can get in touch with you.
4. Enter your contact phone number, if you wish to be contacted via phone for updates.
5. Specify the location where the service is needed.
6. Add any additional notes about the service, such as specific areas that need attention.
7. Assign a staff member for this order by selecting from the provided options.

## Field-by-Field Explanation
### Service Type
* **Service Type** (`service_type`, `select_one`, required: false): Choose the type of service you require, such as Mowing, Pruning, or Planting.

### Start Date
* **Start Date** (`start_date`, `date`, required: true): If applicable, enter the date you would like the service to start.

### End Date
* **End Date** (`end_date`, `date`, required: false): If you have a specific end date in mind, enter it here.

### Customer Name
* **Customer Name** (`customer_name`, `text`, required: true): Please enter your name to ensure we can get in touch with you.

### Customer Email
* **Customer Email** (`customer_email`, `email`, required: false): Enter your email address so we can contact you for updates.

### Customer Phone
* **Customer Phone** (`customer_phone`, `text`, required: false): Enter your phone number if you'd like to be contacted via phone for updates.

### Service Location
* **Service Location** (`service_location`, `text`, required: true): Specify the location where the service is needed.

### Service Notes
* **Service Notes** (`service_notes`, `note`, required: false): Add any additional comments or notes about the service you need.

### Assigned User
* **Assigned User** (`assigned_user`, `select_one`, required: true): Select a staff member for this order from the provided options.
