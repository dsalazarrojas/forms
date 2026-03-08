# College Dormitory Access Check In Form - Help Guide
## Purpose
The College Dormitory Access Check In Form is used to verify the identity of visitors, confirm their visit details, and manage the check-in process for dormitory access.

## How To Complete This Form
To complete this form, simply follow the steps below:

1. Enter your first and last name in the "Visitor Full Name" field.
2. Provide your contact email in the "Email Address" field.
3. Enter your contact phone number in the "Phone Number" field.
4. Select your visit category in the "Visitor Type" field.
5. Enter any applicable student ID number in the "Student ID Number" field.
6. Select the dormitory name you are visiting in the "Dormitory Name" field.
7. Enter the room number if applicable.
8. Enter the resident name if applicable.
9. Select the date of your visit in the "Check-In Date" field.
10. Select the time of your visit in the "Check-In Time" field.
11. Specify the purpose of your visit in the "Purpose of Visit" field.
12. Select the expected duration of your visit in the "Expected Duration of Visit" field.
13. Specify if you have a vehicle and select the vehicle details if applicable.
14. Select if you have large items to bring in the "Are You Bringing Large Items" field and describe them in the "Items Description" field.
15. Select if this visit is an overnight stay in the "Is This an Overnight Guest" field.
16. Select if the visit is pre-approved, pending approval, or not applicable in the "Overnight Approval Status" field.
17. Confirm if the resident has confirmed the visit in the "Has Resident Confirmed This Visit" field.
18. Select the ID verification status in the "ID Verification Status" field.
19. Select if a temporary key is issued in the "Temporary Key Issued" field.
20. Enter any applicable temporary key number in the "Key Number" field.
21. Enter the name of the staff member processing the check-in in the "Staff Member Processing Check-In" field.
22. Enter any additional notes in the "Additional Notes" field.

## Field-by-Field Explanation
* **Visitor Full Name** (`visitor_name`, `text`, required): Enter your full name in this field.
* **Email Address** (`visitor_email`, `email`, required): Enter your contact email.
* **Phone Number** (`visitor_phone`, `text`, required): Enter your contact phone number.
* **Visitor Type** (`visitor_type`, `select_one`, required): Select your visit category.
* **Student ID Number** (`student_id`, `text`, optional): Enter your student ID number if applicable.
* **Dormitory Name** (`dormitory_name`, `select_one`, required): Select the name of the building you are visiting.
* **Room Number** (`room_number`, `text`, optional): Enter the room number if applicable.
* **Resident Name** (`resident_name`, `text`, optional): Enter the resident name if applicable.
* **Check-In Date** (`check_in_date`, `date`, required): Select the date of your visit.
* **Check-In Time** (`check_in_time`, `time`, required): Select the time of your visit.
* **Purpose of Visit** (`purpose_of_visit`, `select_one`, required): Select the reason for your visit.
* **Expected Duration of Visit** (`expected_duration`, `select_one`, required): Select the length of your visit.
* **Do You Have a Vehicle** (`vehicle_present`, `select_one`, required): Select if you have a vehicle.
* **Vehicle Make** (`vehicle_make`, `text`, optional): Enter your vehicle make if applicable.
* **Vehicle Model** (`vehicle_model`, `text`, optional): Enter your vehicle model if applicable.
* **Vehicle Color** (`vehicle_color`, `text`, optional): Enter your vehicle color if applicable.
* **License Plate Number** (`license_plate`, `text`, optional): Enter your vehicle plate number if applicable.
* **Parking Location** (`parking_location`, `text`, optional): Enter where you parked your vehicle if applicable.
* **Are You Bringing Large Items** (`items_brought`, `select_one`, required): Select if you are bringing large items.
* **Items Description** (`items_description`, `text`, optional): Describe the items you are bringing if applicable.
* **Is This an Overnight Guest** (`overnight_guest`, `select_one`, required): Select if this is an overnight guest.
* **Overnight Approval Status** (`overnight_approval`, `select_one`, optional): Select the overnight approval status if applicable.
* **Has Resident Confirmed This Visit** (`resident_confirmation`, `select_one`, required): Confirm if the resident has confirmed the visit.
* **ID Verification Status** (`id_verified`, `select_one`, required): Select the ID verification status.
* **Temporary Key Issued** (`key_issued`, `select_one`, required): Select if a temporary key is issued.
* **Key Number** (`key_number`, `text`, optional): Enter the key number if a temporary key is issued.
* **Staff Member Processing Check-In** (`staff_name`, `text`, required): Enter the name of the staff member processing the check-in.
* **Additional Notes** (`additional_notes`, `text`, optional): Enter any additional information.

## Tips
* Please make sure to enter accurate and correct information for a smooth and efficient check-in process.
* If you have any questions or concerns, please contact the dormitory staff for assistance.
* Ensure that all required fields are filled out before submitting the form.
