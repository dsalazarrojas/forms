# Smart Manufacturing Hub Equipment Order Form - Help Guide
## Purpose
The Smart Manufacturing Hub Equipment Order Form is used to manage the request and tracking of equipment within the Smart Manufacturing Hub. This form allows users to submit requests for equipment, including specifying the type of equipment, status, and order date and time. The form is used to ensure that equipment is properly tracked and managed, and that orders are accurately recorded and communicated.

## How To Complete This Form
To complete this form, please follow these steps:
1. Select the appropriate option for "Equipment Type" to indicate whether the equipment is available or not.
2. In the "Requested Equipment" field, type in the specific equipment you are requesting.
3. Enter your "Contact Information" in the "Contact Information" field.
4. Ensure the "Order Date" and "Order Time" fields are accurate and complete.
5. Select the current "Order Status" of the equipment from the available options.
6. Choose the current "Equipment Status" from the available options.
7. Add any additional "Notes" regarding the order or equipment.
8. Indicate whether "Assigned" equipment has been assigned to a user.
9. Select whether the order was "Submitted By" a user or not.

## Field-by-Field Explanation
- **Equipment Type** (`equipment_type`, `select_one`, required/optional): This field indicates whether the equipment is available or not.
  - Select "Yes" if the equipment is available, and "No" if it is not.
- **Requested Equipment** (`requested_equipment`, `text`, required/optional): This field is used to specify the specific equipment being requested.
  - Type in the exact equipment name or description.
- **Contact Information** (`contact_info`, `text`, required/optional): This field is used to provide contact information for the equipment requester.
  - Enter the name, email, and phone number of the person or department responsible for the equipment.
- **Email** (`email`, `email`, required/optional): This field is used to enter the email address of the contact person or department.
  - Enter the email address of the person or department responsible for the equipment.
- **Phone** (`phone`, `text`, required/optional): This field is used to enter the phone number of the contact person or department.
  - Enter the phone number of the person or department responsible for the equipment.
- **Order Date** (`order_date`, `date`, required/optional): This field is used to record the date the equipment was ordered.
  - Select a date in the format MM/DD/YYYY.
- **Order Time** (`order_time`, `time`, required/optional): This field is used to record the time the equipment was ordered.
  - Select a time in the format HH:MM AM/PM.
- **Order Status** (`order_status`, `select_multiple`, required/optional): This field is used to select the current status of the equipment order.
  - Select from the available options: "Available", "Ordered", "Delivered", or "Cancelled".
- **Equipment Status** (`equipment_status`, `select_one`, required/optional): This field is used to select the current status of the equipment.
  - Select from the available options: "Available", "Out of Service", "Maintenance", or "Ordered".
- **Notes** (`notes`, `note`, required/optional): This field is used to add any additional notes regarding the equipment or order.
  - Enter any additional comments or details regarding the equipment or order.
- **Assigned** (`assigned_tool`, `select_one`, required/optional): This field is used to indicate whether equipment has been assigned to a user.
  - Select "Yes" if the equipment has been assigned, and "No" if it has not.
- **Submitted By** (`submitted_by`, `select_one`, required/optional): This field is used to indicate whether the order was submitted by a user or not.
  - Select "Yes" if the order was submitted by a user, and "No" if it was not submitted by a user.

## Tips
- Ensure all required fields are completed accurately and completely.
- Double-check the "Order Date" and "Order Time" fields for accuracy.
- Enter all necessary contact information for the equipment requester.
- Select the correct "Equipment Type" and "Equipment Status" for the requested equipment.
- Add any additional "Notes" regarding the equipment or order.
- Verify that the "Order Status" reflects the current state of the equipment order.
