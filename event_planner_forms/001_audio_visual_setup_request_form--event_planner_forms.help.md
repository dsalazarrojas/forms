# Audio Visual Setup Request Form - Help Guide
## Purpose
The Audio Visual Setup Request Form is used to request audio visual equipment and services for events. This form gathers necessary information from event coordinators to ensure that the event runs smoothly and that all equipment and services are prepared and ready for the event.

## How To Complete This Form
1.  Enter the name of the event in the "Event Name" field.
2.  Select the date of the event in the "Event Date" field.
3.  Enter the start time of the event in the "Event Start Time" field.
4.  Enter the name of the location in the "Venue Name" field.
5.  Enter the full address of the venue in the "Venue Address" field.
6.  Estimate the projected attendance for the event in the "Projected Attendance" field.
7.  Select all the audio visual equipment needed for the event in the "AV Equipment Needed" field.
8.  Choose the type of projector needed for the event in the "Projector Type Needed" field (if applicable).
9.  Specify the screen size required for the event in the "Screen Size Required (inches)" field (if applicable).
10.  Choose the microphone setup needed for the event in the "Microphone Setup" field (if applicable).
11.  Describe any special lighting requirements for the event in the "Lighting Requirements" field (if applicable).
12.  Select whether high-speed internet is required for the event in the "Internet/WiFi Required" field.
13.  Choose the purpose for which internet will be used during the event in the "Bandwidth Usage Type" field (if applicable).
14.  Select whether technical support is required on-site during the event in the "Request Onsite Technical Support" field.
15.  Enter the number of hours available for setup before the event in the "Setup Time Available (hours)" field.
16.  Enter any additional equipment or customization needs in the "Special Requests or Comments" field (if applicable).
17.  Enter the name of the contact person in the "Contact Person Name" field.
18.  Enter the email address for the event coordinator in the "Contact Email" field.
19.  Enter the phone number for urgent communication in the "Contact Phone" field.
20.  Enter the name of the organization hosting the event in the "Organization/Company Name" field (if applicable).

## Field-by-Field Explanation

* **Event Name** (`event_name`, text, required): Enter the name of the event.
* **Event Date** (`event_date`, date, required): Select the date of the event.
* **Event Start Time** (`event_start_time`, time, required): What time does the event begin.
* **Venue Name** (`venue_name`, text, required): Name of the location.
* **Venue Address** (`venue_address`, text, required): Full address of the venue.
* **Projected Attendance** (`projected_attendance`, number, required): Estimated number of attendees.
* **AV Equipment Needed** (`av_equipment_needed`, select_multiple, required): Select all equipment required.
	+ **Standard LCD** (`projector_type`, select_one, required, if selected from AV Equipment Needed): What type of projector do you need.
* **Screen Size Required (inches)** (`screen_size`, number, required, if selected from AV Equipment Needed): Approximate screen diagonal measurement.
* **Microphone Setup** (`microphone_setup`, select_one, required, if applicable): How many microphone inputs needed.
* **Lighting Requirements** (`lighting_requirements`, text, required, if applicable): Describe special lighting needs.
* **Internet/WiFi Required** (`internet_needed`, select_one, required): Is high-speed internet needed.
* **Bandwidth Usage Type** (`bandwidth_usage`, select_multiple, required, if selected from Internet/WiFi Required): What will internet be used for.
* **Request Onsite Technical Support** (`technical_support_onsite`, select_one, required): Do you need a technician present during the event.
* **Setup Time Available (hours)** (`setup_time_needed`, number, required): How many hours before the event for setup.
* **Special Requests or Comments** (`special_requests`, text, required, if applicable): Any additional equipment or customization needs.
* **Contact Person Name** (`contact_person_name`, text, required): Name of event coordinator.
* **Contact Email** (`contact_email`, email, required): Email address for confirmation.
* **Contact Phone** (`contact_phone`, text, required): Phone number for urgent communication.
* **Organization/Company Name** (`organization_name`, text, required, if applicable): Organization hosting the event.

## Tips

* Make sure to review the form carefully before submitting it to ensure all required fields are completed.
* If you are unsure about any field or have questions, contact the event planning team for clarification.
* Please provide accurate information to ensure that the event runs smoothly and that all necessary equipment and services are prepared.
