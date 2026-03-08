# Warehouse Delivery Check In Form - Help Guide
## Purpose

This form is used for collecting information related to delivery check in processes. This includes details about the delivery, such as driver arrival time, delivery status, and priority.

## How To Complete This Form

To complete this form, follow these steps:

1.  Complete the delivery details section with the necessary information.
2.  Select the correct options for driver and delivery location.
3.  Choose the appropriate delivery status and priority.
4.  Upload relevant files if necessary.
5.  Confirm the delivery dock and status.

## Field-by-Field Explanation

*   **Delivery Details** (`delivery_details`, `text`, required: false): Enter a brief description of the delivery.
*   **Delivery Date** (`delivery_date`, `date`, required: false): Enter the date of the delivery.
*   **Delivery Driver** (`delivery_driver`, `select_one`, required: false): Choose 'Yes' if the delivery driver is involved, 'No' otherwise.
*   **Delivery Location** (`delivery_location`, `select_multiple`, required: false): Choose 'Yes' for each location that the delivery is being made to.
*   **Delivery Note** (`delivery_note`, `note`, required: false): Enter any additional notes about the delivery.
*   **Upload File** (`upload_file`, `text`, required: false): Upload files related to the delivery.
*   **Warehouse Dock** (`warehouse_dock`, `select_one`, required: false): Choose 'Yes' if the delivery is at the warehouse dock, 'No' otherwise.
*   **Driver Arrival Time** (`driver_arrival_time`, `time`, required: false): Enter the time of the driver's arrival.
*   **Delivery Status** (`delivery_status`, `select_one`, required: false): Choose 'Active' or 'Inactive' to indicate the status of the delivery.
*   **Delivery Priority** (`delivery_priority`, `select_one`, required: false): Choose 'Yes' to indicate high priority for the delivery, 'No' otherwise.
*   **Upload Document** (`upload_document`, `text`, required: false): Upload documents related to the delivery.
*   **Delivery Date 2** (`delivery_date2`, `date`, required: false): Enter the date of the second delivery.
*   **Upload File 2** (`upload_file2`, `text`, required: false): Upload files related to the second delivery.
*   **Warehouse Dock 2** (`warehouse_dock2`, `select_one`, required: false): Choose 'Yes' if the second delivery is at the warehouse dock, 'No' otherwise.
*   **Delivery Status 2** (`delivery_status2`, `select_one`, required: false): Choose 'Active' or 'Inactive' to indicate the status of the second delivery.

## Tips

*   Ensure all required fields are filled in for accurate tracking and processing of the delivery.
*   Double-check the delivery status and priority to ensure accurate categorization.
*   Upload relevant files and documents to ensure timely processing of the delivery.
