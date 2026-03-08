# trade_delegation_welcome_party_rsvp - Help Guide
## Purpose
This form is used to collect RSVP information for a welcome party related to a trade event or conference.
## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your Guest First Name and Guest Last Name.
2. Enter your Guest Email for communication purposes.
3. Provide your Guest Phone number for contact.
4. Indicate if you will be attending the event by selecting 'Yes' or 'No'.
5. If you are not attending, you may be asked to provide a reason.
6. You may also provide additional comments or details about the event.

## Field-by-Field Explanation

* **Guest First Name** (`first_name`, text, required): Enter your first name as a guest.
* **Guest Last Name** (`last_name`, text, required): Enter your last name as a guest.
* **Guest Email** (`email`, email, required): Enter your email address for communication purposes.
* **Guest Phone** (`phone`, text, required): Enter your phone number for contact purposes.
* **Attending** (`attending`, select_one, false): Indicate if you will be attending the event by selecting 'Yes' or 'No'.
* **Not Attending** (`not_attending`, select_multiple, false): Select all reasons why you will not be attending.
* **Guest Details** (`guest_details`, text, false): Provide any additional details about yourself as a guest.
* **Event Details** (`event_details`, text, false): Provide additional information about the event.
* **Event Date** (`event_date`, date, false): Enter the date of the event.
* **Event Time** (`event_time`, time, false): Enter the time of the event.
* **Location** (`location`, text, false): Enter the location of the event.
* **Message** (`message`, note, false): Provide any additional comments or messages about the event.
* **Company** (`company`, text, false): Enter your company name.
* **Job Title** (`job_title`, text, false): Enter your job title.
* **Department** (`department`, text, false): Enter your department.
* **Role** (`role`, select_multiple, false): Select all roles you would like to take on at the event.
* **Company URL** (`company_url`, text, false): Enter your company URL.
* **Job URL** (`job_url`, text, false): Enter the URL of your job listing.
* **Event Type** (`event_type`, select_one, false): Select the type of event you are attending.
* **Event Type Details** (`event_type_details`, text, false): Provide more information about the event type.
* **Other (please specify)** (`attending_other`, text, false): If 'Yes' is selected for attending, provide a brief description of the event.
* **Reason for not attending** (`not_attending_reason`, text, false): If 'No' is selected for attending, provide a brief reason for not attending.
* **Other event details** (`event_details_other`, text, false): Provide any additional details about the event that is not specified.
* **Additional Comments** (`additional_comments`, note, false): Provide any additional comments about the event.
