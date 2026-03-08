<thinking>...</thinking>

# Catering Quantity Adjustment Request Form - Help Guide

## Purpose
This form is used to request adjustments to a catering order. Use this form to inform the catering team of changes to the original order, including changes to guest count, specific items, or other adjustments. The form is required for all adjustments that need to be made at least 72 hours prior to the event.

## How To Complete This Form
1. Fill in the original order reference (or order invoice number) to help us locate your order.
2. Enter your name as the representative of the company or organization placing this order.
3. Choose an event date to associate this request with the relevant order.
4. Provide the original guest count, which is the number of guests that were originally ordered for.
5. Enter the new total guest count, which is the updated number of guests you expect.
6. Specify any specific item quantity changes, e.g., "Increase 10 sandwiches to 15".
7. Choose the reason for the adjustment from the provided options.
8. Confirm that you understand that adjustments must be made at least 72 hours prior to the event.
9. Acknowledge that any change to the order will affect the final invoice amount.
10. Enter your phone number for immediate contact, in case we need to clarify any details.
11. If you need to, provide any additional details or instructions for the team to consider.
12. If necessary, select the internal approval status from the provided options.
13. If necessary, add any internal staff notes.

## Field-by-Field Explanation

* **Original Order/Invoice Number** (`original_order_number`, `text`, required): Enter the original order reference or invoice number to help us locate your order in our system.
* **Client Name** (`client_name_ref`, `text`, required): Enter your full name as the representative of the company or organization placing this order.
* **Event Date** (`event_date_ref`, `date`, required): Select the date of the event associated with this order.
* **Previous Guest Count** (`previous_guest_count`, `number`, required): Enter the original number of guests that were ordered for.
* **New Total Guest Count** (`new_guest_count`, `number`, required): Enter the updated total number of guests expected.
* **Detailed Item Quantity Changes** (`specific_item_adjustments`, `text`, required): Describe any specific item quantity changes, e.g., "Increase 10 sandwiches to 15".
* **Reason for Adjustment** (`adjustment_reason`, `select_one`, required): Choose the reason for the adjustment from the provided options.
* **Deadline Acknowledgment** (`deadline_check_ack`, `select_one`, required): Confirm that you understand that adjustments must be made at least 72 hours prior to the event.
* **Price Change Acknowledgment** (`price_change_acknowledgment`, `select_one`, required): Acknowledge that any change to the order will affect the final invoice amount.
* **Phone Number for Immediate Clarification** (`contact_phone_followup`, `text`, required): Enter your phone number for immediate contact, in case we need to clarify any details.
* **Requested By (Full Name)** (`requested_by_name`, `text`, required): Enter the name of the person making this request.
* **Date of Request** (`request_date`, `date`, required): Enter the date of this request.
* **Internal Approval Status** (`internal_approval_status`, `select_one`, required): Select the internal approval status from the provided options.
* **Internal Staff Notes** (`staff_notes_internal`, `text`, optional): Add any additional internal staff notes.
* **Authorization** (`section_authorization`, `text`, optional): Add any authorization information, if necessary.

Note: Fields marked `required` are necessary for the form to be considered complete.
