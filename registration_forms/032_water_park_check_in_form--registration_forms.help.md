<thinking>
The form is designed to collect information from visitors to a water park, including their name, contact information, visit details, and check-in/check-out times. This form is likely used by park staff to record and manage visitor records. To avoid duplication, the form should not be filled out by visitors who have already checked in or out. This form should be completed by a visitor or a member of their group.
</thinking>

# water_park_check_in_form - Help Guide
## Purpose
This form is used for visitors to check in to a water park, providing essential information for park staff to manage their visit.

## How To Complete This Form

1. Choose the correct category from the "Park Check In" dropdown menu:
	* Adult: For visitors over 18 years old.
	* Child: For visitors under 18 years old.
	* Group: For groups of visitors, such as school groups or family reunions.
2. Enter your name in the "Guest Name" field. This is the required field for park staff to identify you.
3. If you have a date of visit, select it in the "Date Visited" field. This helps park staff track your visit history.
4. Enter your contact number in the "Contact Number" field. This is optional, but helps park staff reach out to you if needed.
5. Enter your email address in the "Email" field. This is optional, but helps park staff communicate with you.
6. Provide any additional group information in the "Group Information" field. This is optional, but helps park staff understand your group's needs.
7. Enter any visit details in the "Visit Details" field. This is optional, but helps park staff understand your visit experience.
8. If you have any special instructions for park staff, enter them in the "Special Instructions" field. This is optional, but helps park staff provide better service.
9. Enter any staff notes in the "Staff Notes" field. This is optional, but helps park staff document your visit.
10. Select the "Check In Time" when you arrived at the park.
11. Select the "Check Out Time" when you are leaving the park.
12. Enter the total time spent at the park in the "Total Time" field. This is optional, but helps park staff track your visit duration.
13. Enter the total number of people in your group in the "Total People" field. This is optional, but helps park staff plan for your group's needs.
14. Select the size of your group from the "Group Size" dropdown menu.

## Field-by-Field Explanation

* **Check In** (`park_check_in`, `select_one`, required): Choose the correct category for your visit.
* **Guest Name** (`guest_name`, `text`, required): Enter your name as it appears on your identification.
* **Date Visited** (`date_visited`, `date`, optional): If you have a date of visit, select it from the calendar.
* **Time Entered** (`time_entered`, `time`, optional): Enter the time you arrived at the park.
* **Contact Number** (`contact_number`, `text`, optional): Enter your contact number for park staff to reach out to you.
* **Email** (`email`, `email`, optional): Enter your email address for park staff to contact you.
* **Group Information** (`group_info`, `note`, optional): Provide any additional information about your group, such as a group name or special needs.
* **Visit Details** (`visit_details`, `text`, optional): Enter any additional details about your visit, such as your visit purpose or any special requests.
* **Special Instructions** (`special_instructions`, `text`, optional): Enter any special instructions for park staff to follow during your visit.
* **Staff Notes** (`staff_notes`, `text`, optional): Enter any notes for park staff to document your visit.
* **Check In Time** (`check_in_time`, `time`, optional): Select the time you arrived at the park.
* **Check Out Time** (`check_out_time`, `time`, optional): Select the time you are leaving the park.
* **Total Time** (`total_time`, `number`, optional): Enter the total time spent at the park.
* **Total People** (`total_people`, `number`, optional): Enter the total number of people in your group.
* **Group Size** (`group_size`, `select_multiple`, optional): Select the size of your group from the dropdown menu.
