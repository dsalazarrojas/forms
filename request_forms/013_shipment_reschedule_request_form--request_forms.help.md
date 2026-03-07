<thinking>
This guide will cover the shipment reschedule request form, which is used to manage rescheduling requests for shipments. This form is intended for end-users to provide information about the rescheduling needs for a shipment. The purpose of this form is to collect details about the reschedule date, time, and reason for rescheduling, as well as the current shipment status and other relevant details. Please fill out the form accurately to ensure that your rescheduling request is processed correctly. Note that this form is not intended for duplicate requests, so please ensure that you have not already submitted a reschedule request for the same shipment.
</thinking>
# shipment_reschedule_request_form - Help Guide

## Purpose
The shipment reschedule request form allows you to request a reschedule for a shipment, providing details about the new reschedule date, time, and reason for rescheduling. This form also includes fields for the current shipment status and other relevant information.

## How To Complete This Form
1. Fill out the form with your reschedule request information.
2. Enter the **Reschedule Date** in the date format (mm/dd/yyyy).
3. Enter the **Reschedule Time** in the time format (hh:mm AM/PM).
4. Provide a **Reason for Reschedule** explaining the reason for rescheduling.
5. Select the **Shipment Status** from the available options (New, In Transit, Delayed, Cancelled, Arrived).
6. Enter the **Shipment ID**.
7. Enter the **Customer ID**.
8. Select the **Delivery Method** from the available options (In-Store, Delivery Driver, Pickup).
9. Optionally, you can add a **Staff Comment** or a **Customer Response** to provide additional context.

## Field-by-Field Explanation

* **Reschedule Date** (`reschedule_date`, date, required): Enter the new reschedule date for the shipment.
* **Reschedule Time** (`reschedule_time`, time, required): Enter the new reschedule time for the shipment.
* **Reason for Reschedule** (`reason_for_reschedule`, text, required): Provide a clear and concise reason for rescheduling the shipment.
* **Shipment Status** (`shipment_status`, select_one, optional): Select the current status of the shipment from the available options.
* **Shipment ID** (`shipment_id`, number, required): Enter the unique shipment ID.
* **Customer ID** (`customer_id`, number, required): Enter the customer ID associated with the shipment.
* **Delivery Method** (`delivery_method`, select_one, required): Select the delivery method from the available options (In-Store, Delivery Driver, Pickup).
* **Reschedule Reason** (`reschedule_reason`, text, optional): Provide an optional reason for rescheduling the shipment.
* **Staff Comment** (`staff_comment`, text, optional): Enter a comment from the staff member handling the shipment.
* **Customer Response** (`customer_response`, text, optional): Enter a response from the customer.
* **Staff Response** (`staff_response`, text, optional): Enter a response from the staff member.

## Tips
* Ensure that you provide accurate and clear information in the form to help us process your reschedule request efficiently.
* If you have any questions or concerns about the reschedule request, contact us for assistance.
* Please note that this form is intended for rescheduling requests only, and not for other purposes.
