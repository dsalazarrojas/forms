# sale_time_slot_registration_form - Help Guide
## Purpose
The sale time slot registration form is a tool used to collect information from customers for a specific sale time slot. This form helps our sales team to prepare and follow up on the customers' needs.

## How To Complete This Form
To complete this form, follow these steps:

1. Determine if you have already registered for this sale time slot.
2. If not, fill out the form below.

## Field-by-Field Explanation
* **Sale Time Slot** (`sale_time_slot`, `select_one`, required: false): Choose whether you have a sale time slot by selecting 'Yes' or 'No'.
* **Customer Name** (`customer_name`, `text`, required: false): Enter the customer's name as it appears on their record.
* **Customer Email** (`customer_email`, `email`, required: false): Enter the customer's email address for communication purposes.
* **Customer Phone** (`customer_phone`, `text`, required: false): Enter the customer's phone number for follow-up calls.
* **Sales Event ID** (`sales_event_id`, `select_one`, required: false): Confirm whether you have the Sales Event ID or not. If you're unsure, you can contact your sales team for clarification.
* **Reservation Date** (`reservation_date`, `date`, required: false): Select the date you would like to schedule the sale time slot.
* **Reservation Time** (`reservation_time`, `time`, required: false): Select the time you would like to schedule the sale time slot.
* **Customer Notes** (`customer_notes`, `note`, required: false): Add any additional notes about the customer or sale event.
* **Assigned User** (`assigned_user`, `select_multiple`, required: false): Choose whether you want to be assigned to this sale time slot or not.
