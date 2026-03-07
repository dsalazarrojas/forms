<Thinking>
To ensure we don't duplicate effort and only provide support where needed, I'll first review the form purpose and fields to confirm relevance and accuracy. This form seems to be a Blackout Ice Request Form for scheduling blacked-out ice time for teams or events. I will create a clear and concise help guide for end-users, explaining each field's purpose and required information.
</Thinking>

# Blackout Ice Request Form - Help Guide
## Purpose
The Blackout Ice Request Form is a tool for teams or organizations to request blacked-out ice time for their events or activities. This form will help the ice center staff schedule and manage blackout ice time requests efficiently.

## How To Complete This Form
To complete this form accurately, please follow these steps:

1. Fill out the required fields with your team or event information.
2. Ensure that all fields are correctly filled out before submitting the form.

## Field-by-Field Explanation
* **Blackout Ice Request Form** (`request_intro`, `note`, required: false): This field is a brief introduction to the form. It serves as a title and a hint about the form's purpose. You can leave this field blank.
* **Requestor Name** (`requestor_name`, `text`, required: true): Please enter the full name of the person making the request.
* **Organization or Team** (`organization`, `text`, required: true): Enter the name of your team or organization.
* **Email Address** (`email`, `email`, required: true): Provide a contact email for further communication.
* **Phone Number** (`phone`, `text`, required: true): Enter a contact phone number for easy communication.
* **Event Type** (`event_type`, `select_one`, required: true): Select the type of event (e.g., Hockey Game, Figure Skating, Practice Session, etc.).
* **Requested Date** (`requested_date`, `date`, required: true): Choose the primary date for your event.
* **Requested Start Time** (`requested_start_time`, `time`, required: true): Enter the start time for your event.
* **Requested End Time** (`requested_end_time`, `time`, required: true): Enter the end time for your event.
* **Alternate Date 1** (`alternate_date_1`, `date`, required: false): If you have a backup date, please enter it here. Leave this field blank if you don't have a backup date.
* **Alternate Date 2** (`alternate_date_2`, `date`, required: false): Another backup date, if needed. Leave blank if not applicable.
* **Number of Participants** (`number_of_participants`, `number`, required: true): Enter the expected number of participants in your event.
* **Team Name** (`team_name`, `text`, required: false): If applicable, enter the name of your team.
* **Age Group** (`age_group`, `select_one`, required: true): Select the age category of participants (e.g., Youth under 12, Teen 13-17, etc.).
* **Skill Level** (`skill_level`, `select_one`, required: true): Choose the average skill level of your participants (e.g., Beginner, Intermediate, Advanced, etc.).
* **Equipment Needed** (`equipment_needed`, `select_multiple`, required: false): If you need any equipment, please select from the options provided.
* **Concession Services** (`concession_needed`, `select_one`, required: true): Check if you want concession services for your event.
* **Security Services** (`security_needed`, `select_one`, required: true): Check if you need security staff for your event.
* **Special Requests** (`special_requests`, `text`, required: false): Enter any additional requirements or requests.
* **Have You Booked Before** (`previous_bookings`, `select_one`, required: true): Check if you have previously booked with us before.
* **How Did You Hear About Us** (`how_did_you_hear`, `select_one`, required: false): Choose the source of information about our blackout ice requests.
* **Additional Notes** (`additional_notes`, `text`, required: false): Enter any other information that may be helpful for us to know.
