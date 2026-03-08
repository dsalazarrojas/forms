<thinking>
The form is meant to collect information for a test drive booking. To determine if this form is relevant for your purpose, consider the following:

- You need to book a test drive for a vehicle.
- You have access to a vehicle ID (e.g., Toyota, Honda, Tesla).
- You might be collecting information for a customer with contact details.
- The form is likely used by a dealer or salesperson who needs to track test drive bookings.

If you have already created a form for booking test drives or have a similar form, you might want to consider using the provided form to consolidate or replace your existing one.

</thinking>

# test_drive_booking_form - Help Guide
## Purpose
The test_drive_booking_form is designed to collect information for a test drive booking, allowing users to book a test drive with a chosen vehicle, customer, and test drive status.

## How To Complete This Form
To complete the test_drive_booking_form, follow these steps:

1. Fill in the **test_drive_booking_form** field with a short title for the test drive booking.
2. Enter the **customer_name** field with the name of the person booking the test drive.
3. Select a date and time for the test drive in the **test_drive_date** and **test_drive_hour** fields.
4. Choose the vehicle brand from the **vehicle_id** field, which determines the vehicle for the test drive.
5. Enter the customer's email address in the **customer_email** field.
6. Enter the customer's phone number in the **customer_phone** field.
7. Select the dealer ID from the **dealer_id** field, which determines the dealer or salesperson managing the test drive.
8. Set the test drive status to **pending**, **completed**, or **cancelled** using the **test_drive_status** field.
9. Add any additional notes about the test drive in the **test_drive_notes** field.

## Field-by-Field Explanation
- **test_drive_booking_form**: Enter a short title for the test drive booking.
  (text, required: false)
- **customer_name**: Enter the name of the person booking the test drive.
  (text, required: false)
- **test_drive_date**: Select a date for the test drive (e.g., MM/DD/YYYY).
  (date, required: false)
- **test_drive_hour**: Select a time for the test drive (e.g., 08:30 AM).
  (time, required: false)
- **vehicle_id**: Choose the vehicle brand for the test drive (e.g., Toyota).
  (select_one, required: false)
- **test_drive_time**: Select a time for the test drive (e.g., 08:30 AM).
  (time, required: false)
- **test_drive_notes**: Add any notes about the test drive.
  (note, required: false)
- **customer_email**: Enter the customer's email address.
  (email, required: false)
- **customer_phone**: Enter the customer's phone number.
  (text, required: false)
- **dealer_id**: Choose the dealer or salesperson managing the test drive (e.g., John Doe).
  (select_one, required: false)
- **test_drive_status**: Set the test drive status (e.g., pending, completed, cancelled).
  (select_multiple, required: false)

## Tips
- Double-check the vehicle ID to ensure it matches the correct vehicle.
- Verify the customer's contact information before proceeding.
- Use the test drive status to keep track of the booking's progress.
