# Service Work Order Form - Help Guide
## Purpose
This form is used to create and manage service work orders for customers. It helps technicians gather essential information about the service being requested, the customer's details, and the status of the service.

## How To Complete This Form
To complete this form, please follow these steps:

1. Review the form pages to understand what information is required for each section.
2. Fill in the **Customer Info** field with the customer's name, address, phone number, and any other relevant details.
3. In the **Service Details** field, describe the service required, including any relevant equipment or systems involved.
4. Select the **Service Type** from the options provided to indicate the type of service being requested.
5. If applicable, select multiple **Service Type** options to indicate multiple types of service being requested.
6. In the **Technician Info** field, provide any relevant details about the technician assigned to the service, such as their name and contact information.
7. Enter the **Date Of Service** and **Time Of Service** to schedule the service appointment.
8. Fill in the **Location Of Service** field with the location where the service will be performed.
9. Select the **Service Status** from the options provided to indicate the current status of the service.
10. If applicable, select multiple **Service Status** options to indicate multiple statuses of the service.
11. In the **Customer Comments** field, provide any additional comments or concerns from the customer.

## Field-by-Field Explanation

* **Customer Info** (`customer_info`, text, required): Enter the customer's name, address, phone number, and any other relevant details.
* **Service Details** (`service_details`, text, required): Describe the service required, including any relevant equipment or systems involved.
* **Service Type** (`service_type`, select_one, optional): Select the type of service being requested from the options provided.
* **Service Type** (`service_type_options`, select_multiple, optional): Select multiple types of service being requested from the options provided.
* **Technician Info** (`technician_info`, text, optional): Provide any relevant details about the technician assigned to the service, such as their name and contact information.
* **Date Of Service** (`date_of_service`, date, required): Enter the date of the service appointment.
* **Time Of Service** (`time_of_service`, time, required): Enter the time of the service appointment.
* **Location Of Service** (`location_of_service`, text, required): Enter the location where the service will be performed.
* **Service Status** (`service_status`, select_one, optional): Select the current status of the service from the options provided.
* **Service Status** (`service_status_options`, select_multiple, optional): Select multiple statuses of the service from the options provided.
* **Customer Comments** (`customer_comments`, text, optional): Enter any additional comments or concerns from the customer.
