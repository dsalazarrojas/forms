# College Dormitory Access Check In Form - Help Guide

## Purpose
This form is used to check in students and visitors into the college dormitory. It captures essential information about the check-in date and time, the type of person checking in, and any additional details required for the visit.

## How To Complete This Form
1. Select the check-in date from the calendar picker.
2. Enter the check-in time in 24-hour format (e.g., 14:00 for 2:00 PM).
3. Choose the correct dormitory building from the dropdown list.
4. Enter the room number where the person is staying.
5. Select the type of person checking in (student, guest, etc.).
6. If the person is a guest or visitor, enter their name and purpose of visit.
7. If applicable, enter the student ID number or visitor ID information.
8. Enter the student's email address (if applicable).
9. Enter the guest's or visitor's name (if applicable).
10. Select the purpose of the visit from the dropdown list.
11. Indicate whether a visitor ID was checked.
12. If the visitor ID was checked, select the type of ID presented.
13. Choose whether a package or delivery was received.
14. Provide a brief description of the package or delivery (if applicable).
15. Enter the package tracking number (if applicable).
16. Check if any violations or concerns were observed during the check-in.
17. Provide a brief description of any violations or concerns observed (if applicable).
17. Enter the name of the staff member conducting the check-in.
18. Enter any additional notes or comments about the check-in.

## Field-by-Field Explanation
* **Check-In Date** (`check_in_date`, date, required): This field is used to select the date of the check-in.
* **Check-In Time** (`check_in_time`, time, required): This field is used to select the time of the check-in.
* **Dormitory Building Name** (`building_name`, select_one, required): This field is used to select the dormitory building where the person is staying.
* **Room Number** (`room_number`, text, required): This field is used to enter the room number where the person is staying.
* **Type of Person Checking In** (`visitor_type`, select_one, required): This field is used to select the type of person checking in (student, guest, etc.).
* **Resident Student First Name** (`resident_first_name`, text, required): This field is used to enter the first name of the resident student.
* **Resident Student Last Name** (`resident_last_name`, text, required): This field is used to enter the last name of the resident student.
* **Student ID Number** (`student_id`, text, required): This field is used to enter the student ID number.
* **Student Email** (`resident_email`, email, optional): This field is used to enter the student's email address.
* **Guest or Visitor Name** (`visitor_name`, text, optional): This field is used to enter the guest or visitor's name (if applicable).
* **Purpose of Visit** (`visitor_purpose`, select_one, required): This field is used to select the purpose of the visit.
* **Visitor ID Checked** (`visitor_id_check`, select_one, required): This field is used to indicate whether a visitor ID was checked.
* **Type of ID Presented** (`visitor_id_type`, select_one, optional): This field is used to select the type of ID presented (if applicable).
* **Expected Departure Time** (`expected_departure`, time, optional): This field is used to select the expected departure time.
* **Number of Guests Visiting** (`number_of_guests`, number, optional): This field is used to enter the number of guests visiting.
* **Package or Delivery Received** (`package_delivery`, select_one, required): This field is used to indicate whether a package or delivery was received.
* **Package Description** (`package_description`, text, optional): This field is used to provide a brief description of the package or delivery (if applicable).
* **Package Tracking Number** (`package_tracking`, text, optional): This field is used to enter the package tracking number (if applicable).
* **Violations or Concerns Observed** (`violation_observed`, select_one, required): This field is used to indicate whether any violations or concerns were observed during the check-in.
* **Violation or Concern Details** (`violation_description`, text, optional): This field is used to provide a brief description of any violations or concerns observed (if applicable).
* **Staff Member Name Conducting Check-In** (`staff_name`, text, required): This field is used to enter the name of the staff member conducting the check-in.
* **Additional Notes or Comments** (`additional_notes`, text, optional): This field is used to enter any additional notes or comments about the check-in.
