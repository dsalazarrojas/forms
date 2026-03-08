# Supply Lead Time Analysis Report - Help Guide
## Purpose
The Supply Lead Time Analysis Report form is used to collect and analyze data on the lead time of a particular supply from a supplier. This form helps in tracking and monitoring the time taken by the supplier to deliver the supply, which is essential for effective supply chain management.

## How To Complete This Form

1. To complete this form, select the supplier's ID number.
2. Enter the supplier's name.
3. Select the start date and time of the supply delivery.
4. Enter the end date and time of the supply delivery.
5. If you are reporting a delay, enter the document ID related to the delay.
6. Enter a brief description of the delay reason.
7. Select the delay status (delayed or on-time).

## Field-by-Field Explanation

* **Supplier ID** (`supplier_id`, number, required: false): Enter the supplier's ID number, if available.
* **Supplier Name** (`supplier_name`, text, required: false): Enter the name of the supplier.
* **Start Date** (`start_date`, date, required: false): Select the date when the supply was initially expected to be delivered.
* **Start Time** (`start_time`, time, required: false): Select the time when the supply was initially expected to be delivered.
* **End Date** (`end_date`, date, required: false): Select the actual date when the supply was delivered.
* **End Time** (`end_time`, time, required: false): Select the actual time when the supply was delivered.
* **Document ID** (`document_id`, number, required: false): Enter the ID of the document related to the delay, if applicable.
* **Document Name** (`document_name`, text, required: false): Enter a brief description of the document related to the delay, if applicable.
* **Document Delay** (`document_delay`, number, required: false): Enter the delay in days or hours, if applicable.
* **Delay Reason** (`delay_reason`, text, required: false): Enter a brief description of the reason for the delay.
* **Delay Status** (`delay_status`, select_one, required: false): Select the status of the delay (delayed or on-time).

## Tips

* Ensure that all required fields are filled in accurately to ensure the correctness of the data.
* If you are experiencing issues with the supply delivery, please provide a clear reason for the delay.
