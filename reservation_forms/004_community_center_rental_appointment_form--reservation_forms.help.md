# Community Center Rental Appointment Form - Help Guide
## Purpose
The purpose of this form is to help event organizers and planners submit a rental request for the community center. It is used to gather essential information about the event, including details about the renter, the event type, and the specific requirements for the event.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your first and last name in the "First Name" and "Last Name" fields.
2. If you are representing an organization, fill in the "Organization Name" field with the name of your organization.
3. Select the type of organization you represent from the "Organization Type" dropdown list.
4. Enter your street address in the "Street Address" field.
5. Enter your city, state, and ZIP code in the "City, State, ZIP" field.
6. Fill in your primary contact phone number in the "Phone Number" field.
7. Enter the email address you want to use for booking confirmations in the "Email Address" field.
8. Select the type of event you are planning from the "Event Type" dropdown list.
9. Choose a preferred date for your event in the "Event Date" field.
10. If you have a backup date option, choose it in the "Alternate Date" field.
11. Select the start time of your event in the "Event Start Time" field.
12. Select the end time of your event in the "Event End Time" field.
13. Enter the approximate number of guests attending your event in the "Expected Number of Guests" field.
14. Choose the room or space you would like to rent from the "Room Preference" dropdown list.
15. Select any equipment you will need for your event from the "Equipment Needed" dropdown list.
16. Check the "Catering Required" box if you will need catering services.
17. Check the "Special Requests" box if you have any additional needs or accommodations.
18. Check the "Will Alcohol Be Served" box if you will be serving alcohol at your event.
19. Check the "Do You Have Event Insurance" box and provide proof if you have event insurance.
20. Review your form carefully before submitting it.

## Field-by-Field Explanation
- **First Name** (`renter_first_name`, `text`, required): Enter your legal first name.
- **Last Name** (`renter_last_name`, `text`, required): Enter your legal last name.
- **Organization Name** (`organization_name`, `text`, optional): If you are representing an organization, enter the name of your organization.
- **Organization Type** (`organization_type`, `select_one`, required): Select the type of organization you represent from the dropdown list.
- **Street Address** (`street_address`, `text`, required): Enter your street address.
- **City, State, ZIP** (`city_state_zip`, `text`, required): Enter your city, state, and ZIP code.
- **Phone Number** (`phone_number`, `text`, required): Enter your primary contact phone number.
- **Email Address** (`email_address`, `email`, required): Enter the email address you want to use for booking confirmations.
- **Event Type** (`event_type`, `select_one`, required): Select the type of event you are planning from the dropdown list.
- **Event Date** (`event_date`, `date`, required): Choose a primary date for your event.
- **Alternate Date** (`alternate_date`, `date`, optional): Choose a backup date option if you have one.
- **Event Start Time** (`start_time`, `time`, required): Select the start time of your event.
- **Event End Time** (`end_time`, `time`, required): Select the end time of your event.
- **Expected Number of Guests** (`expected_guests`, `number`, required): Enter the approximate number of guests attending your event.
- **Room Preference** (`room_preference`, `select_one`, required): Choose the room or space you would like to rent from the dropdown list.
- **Equipment Needed** (`equipment_needed`, `select_multiple`, optional): Select any equipment you will need for your event from the dropdown list.
- **Catering Required** (`catering_required`, `select_one`, required): Check the box if you will need catering services.
- **Special Requests** (`special_requests`, `text`, optional): Check the box if you have any additional needs or accommodations.
- **Will Alcohol Be Served** (`alcohol_service`, `select_one`, required): Check the box if you will be serving alcohol at your event.
- **Do You Have Event Insurance** (`insurance_provided`, `select_one`, required): Check the box and provide proof if you have event insurance.
- **Will Purchase** (`insurance_provided`, `select_one`, optional): Select this option if you will purchase event insurance.
