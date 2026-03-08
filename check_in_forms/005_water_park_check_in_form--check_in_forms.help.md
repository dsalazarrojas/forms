<thinking>Check if the form is indeed for checking in guests at a "Water Park", and if not, please reconfigure. Assuming it's for a water park check-in form...</thinking>

# Water Park Check In Form - Help Guide
## Purpose
This form is used for checking in guests at the water park. Please use this form to provide your details so that we can ensure a safe and enjoyable visit for you and your group.

## How To Complete This Form
To complete this form, please follow these steps:

* Fill out the form with your name, contact information, and visit details.
* Choose the type of visit you're planning (e.g., check-in, check-out, etc.).
* Specify your visit start and end times.
* Provide the number of guests in your group.
* Choose the frequency of your visit (e.g., once, regularly, etc.).
* Specify any special requests or food allergies.
* Provide contact information for an emergency contact person.
* If you're part of a group, provide the group leader's name, phone number, and email.
* Specify the type of park staff who will be with your group (e.g., lifeguard, etc.).

## Field-by-Field Explanation
- **Park Name** (`park_name`, `text`, required): Enter the name of the water park you're visiting.
- **Visit Start Time** (`visit_start_time`, `time`, required): Select the time you plan to start your visit.
- **Visit End Time** (`visit_end_time`, `time`, required): Select the time you plan to end your visit.
- **Visit Duration** (`visit_duration`, `number`, required): Enter the length of your planned visit in hours.
- **Check In Group** (`check_in_group`, `text`, required): Enter the name of your group or team.
- **Guest Name** (`guest_name`, `text`, required): Enter your name.
- **Contact Number** (`contact_number`, `text`, required): Enter your contact phone number.
- **Email Address** (`email_address`, `email`, optional): Enter your email address (if you'd like to be contacted).
- **Special Notes** (`special_notes`, `note`, optional): Add any special requests or notes about your visit.
- **Guest Age** (`guest_age`, `number`, required): Enter the age of the guest(s) in your group.
- **Visit Frequency** (`visit_frequency`, `select_one`, required): Choose the frequency of your visit (e.g., once, regularly, etc.).
- **Check In Type** (`check_in_type`, `select_one`, required): Choose the type of check-in (e.g., check-in, check-out, etc.).
- **Group Size** (`group_size`, `text`, required): Enter the number of guests in your group.
- **Special Requests** (`special_requests`, `select_multiple`, optional): Specify any special requests or food allergies.
- **Emergency Contact Person** (`emergency_contact_person`, `text`, required): Enter the name of the emergency contact person.
- **Emergency Contact Number** (`emergency_contact_number`, `text`, required): Enter the emergency contact number.
- **Emergency Contact Relationship** (`emergency_contact_relationship`, `text`, optional): Specify the relationship of the emergency contact person.
- **Group Leader** (`group_leader`, `text`, required): Enter the name of the group leader.
- **Group Leader Phone** (`group_leader_phone`, `text`, required): Enter the group leader's phone number.
- **Group Leader Email** (`group_leader_email`, `email`, optional): Enter the group leader's email address.
- **Group Leader Notes** (`group_leader_notes`, `note`, optional): Add any notes about the group leader.
- **Park Staff** (`park_staff`, `text`, required): Choose the type of park staff who will be with your group (e.g., lifeguard, etc.).
- **Staff Name** (`staff_name`, `text`, required): Enter the name of the park staff member who will be with your group.
- **Staff Email** (`staff_email`, `email`, optional): Enter the park staff member's email address.
- **Staff Notes** (`staff_notes`, `note`, optional): Add any notes about the park staff member.
