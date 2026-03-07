<thinking>
To confirm hotel stay extension, we want to ensure all relevant and required fields are filled out properly.
- The "guest_name" field is to be filled out with the guest's name.
- The "checkin_date" field is to be filled out with the date the guest plans to check in.
- The "checkout_date_request" field is to be filled out with the date the guest plans to check out.
- The "reason_for_request" field is to be filled out with a clear and concise reason for the extension.
- The "contact_number" field is to be filled out with the guest's contact number.
- The "email" field is to be filled out with the guest's email address.
- The "assigned_staff" field is a multi-select field where staff members can be assigned or not.
- The "comments" field is to be filled out with any additional comments or notes regarding the extension request.
- The "confirm" field is a confirmation of the extension request.
</thinking>

# hotel_stay_extension_form - Help Guide
## Purpose
The hotel stay extension form is used for guests to request an extension to their existing hotel stay. This form is used to collect information from the guest to assess and process their request.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the "Guest Name" field with the guest's name.
2. Enter the date of checkin and checkout in the "Checkin Date" and "Checkout Date Request" fields, respectively.
3. Provide a clear and concise reason for the extension in the "Reason for Request" field.
4. Enter the guest's contact number in the "Contact Number" field.
5. Enter the guest's email address in the "Email" field.
6. If applicable, select the staff members to be assigned to the guest's room in the "Assigned Staff" field.
7. Add any additional comments or notes in the "Comments" field.
8. Finally, confirm the extension request by selecting "Yes" in the "Confirm" field.

## Field-by-Field Explanation

* **Guest Name** (`text`, required: false): Enter the guest's name.
* **Checkin Date** (`date`, required: false): Enter the date the guest plans to check in.
* **Checkout Date Request** (`date`, required: false): Enter the date the guest plans to check out.
* **Reason for Request** (`text`, required: false): Provide a clear and concise reason for the extension request.
* **Contact Number** (`text`, required: false): Enter the guest's contact number.
* **Email** (`email`, required: false): Enter the guest's email address.
* **Assigned Staff** (`select_multiple`, required: false): Select the staff members to be assigned to the guest's room.
* **Comments** (`note`, required: false): Add any additional comments or notes regarding the extension request.
* **Confirm** (`select_one`, required: false): Confirm the extension request by selecting "Yes".
