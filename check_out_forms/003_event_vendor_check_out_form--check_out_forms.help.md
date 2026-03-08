# event_vendor_check_out_form - Help Guide
## Purpose
This form is used by event vendors to check out their events and manage their associated data.

## How To Complete This Form
1. Enter your **Event Vendor Name** in the "Event Vendor Name" field.
2. Enter your **Email** in the "Email" field.
3. Select the **Event Start Date** and **Event End Date** using the date fields.
4. Select your preferred **Payment Method** from the dropdown menu.
5. Enter your **Address** in the "Address" field.
6. Enter your **Phone Number** in the "Phone" field.
7. Enter any additional **Notes** in the "Notes" field.
8. If necessary, select the status of your **Payment** using the "Payment Confirmation" field.
9. Confirm the status of your **Event Vendor** using the "Event Vendor Confirmation" field.
10. Assign the event to a specific **User** using the "Assigned To" field.
11. Select the time of **Assignment** using the "Assigned At" field.
12. Select the **User** who assigned the event using the "Assigned By" field.
13. Select the time of **Update** using the "Updated At" field.
14. Select the time of **Creation** using the "Created At" field.
15. Select the time of **Deletion** using the "Deleted At" field.
16. Select the user who **Deleted** the event using the "Deleted By" field.

## Field-by-Field Explanation
* **Event Vendor Name** (`event_vendor_name`, `text`, required): Enter the name of the event vendor.
* **Email** (`email`, `email`, required): Enter the email address of the event vendor.
* **Event Start Date** (`event_start_date`, `date`, required): Select the start date of the event.
* **Event End Date** (`event_end_date`, `date`, required): Select the end date of the event.
* **Payment Method** (`vendor_payment_method`, `select_one`, required): Select the payment method for the event (Cash, Check, Credit Card, Bank Transfer).
* **Address** (`vendor_address`, `text`, required): Enter the address associated with the event vendor.
* **Phone** (`vendor_phone`, `text`, required): Enter the phone number associated with the event vendor.
* **Notes** (`notes`, `note`, required): Enter any additional notes or comments about the event.
* **Payment Confirmation** (`payment_confirmation`, `select_multiple`, required): Select the status of the payment (Paid, Unpaid, Partially Paid).
* **Event Vendor Confirmation** (`event_vendor_confirmation`, `select_one`, required): Confirm the status of the event vendor (Confirmed, Unconfirmed, Pending).
* **Assigned To** (`assigned_user`, `select_one`, required): Select the user who assigned the event.
* **Assigned At** (`assigned_at`, `time`, required): Select the time of assignment.
* **Updated At** (`updated_at`, `time`, required): Select the time of update.
* **Created At** (`created_at`, `time`, required): Select the time of creation.
* **Deleted At** (`deleted_at`, `time`, required): Select the time of deletion.
* **Assigned By** (`assigned_by`, `select_one`, required): Select the user who assigned the event.
* **Updated By** (`updated_by`, `select_one`, required): Select the user who updated the event.
* **Created By** (`created_by`, `select_one`, required): Select the user who created the event.
* **Deleted By** (`deleted_by`, `select_one`, required): Select the user who deleted the event.
* **Notes 1-6** (`notes_1-6`, `note`, optional): Enter additional notes or comments about the event.
