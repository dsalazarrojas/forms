<thinking>As an expert form designer and technical writer, I'm considering the following:

* The form is for registering attendees for an orientation day event, which likely involves a series of pages with various fields to collect information from attendees.
* The form has multiple pages with fields that cover personal information, contact details, and event specifics.
* Some fields have hints or labels that seem to indicate that they are optional, but I'm not sure if this is correct. For instance, the "Name" field has no hint, which might suggest it's not optional, but its "required" attribute is set to false.
* I'm considering how to best explain each field in a way that's clear and concise, while avoiding jargon and technical terms that might confuse non-technical users.
* I'll aim to provide concrete, actionable advice on how to complete each field, while keeping the tone friendly and approachable.
</thinking>

# Orientation Day Registration Form - Help Guide
## Purpose
The Orientation Day Registration Form is used to collect information from attendees for an orientation day event. Please fill out this form to provide us with your details and preferences for the event.

## How To Complete This Form
1. Review each page carefully and fill out the required and optional fields as prompted.
2. Make sure to enter accurate information for each field, especially for contact and payment details.
3. If you have any special requests or concerns, use the "Special Note" field to let us know.

## Field-by-Field Explanation
* **Attendants Personal Information** (`personal_info`, `text`, required/optional): This field collects your personal details as an attendee. Please provide a brief description of yourself.
* **Name** (`name`, `text`, required/optional): Please enter your full name.
* **Email** (`email`, `email`, required/optional): Enter a valid email address where we can contact you.
* **Phone** (`phone`, `text`, required/optional): Enter your contact phone number.
* **Contact Information** (`contact_info`, `text`, required/optional): This field is for emergency contact information, but feel free to enter any additional contact details you'd like us to know.
* **Contact Name** (`contact_name`, `text`, required/optional): If you have an emergency contact, please enter their name.
* **Contact E-mail** (`contact_email`, `email`, required/optional): If you have an emergency contact, please enter their email address.
* **Contact Phone** (`contact_phone`, `text`, required/optional): If you have an emergency contact, please enter their phone number.
* **Emergency Contact Information** (`emergency_contact_info`, `text`, required/optional): This field is for emergency contact information.
* **E Contact Name** (`e_contact_name`, `text`, required/optional): If you have an emergency contact, please enter their name.
* **Relationship** (`e_contact_relationship`, `select_one`, required/optional): Please select your relationship with your emergency contact.
* **E Contact Phone** (`e_contact_phone`, `text`, required/optional): If you have an emergency contact, please enter their phone number.
* **E Contact Email** (`e_contact_email`, `email`, required/optional): If you have an emergency contact, please enter their email address.
* **Address** (`e_contact_address`, `text`, required/optional): If you have an emergency contact, please enter their address.
* **Special Note** (`e_contact_note`, `note`, required/optional): If you have any special requests or concerns, please use this field to let us know.
* **Event Information** (`event_info`, `text`, required/optional): Please enter any relevant event information.
* **Date** (`event_date`, `date`, required/optional): Please select the event date.
* **Time** (`event_time`, `time`, required/optional): Please select the event time.
* **Location** (`event_location`, `text`, required/optional): Please enter the event location.
* **Details** (`event_details`, `text`, required/optional): Please enter any additional event details.
* **Payment Information** (`payment_info`, `text`, required/optional): This field collects payment information. Please be sure to provide accurate details.
* **Method** (`payment_method`, `select_one`, required/optional): Please select your payment method.
* **Other (please specify)** (`payment_method_other`, `text`, required/optional): If you've selected "Other" for payment method, please enter the method in this field.
* **Total Amount** (`payment_total`, `number`, required/optional): Please enter the total amount to be paid.
* **Submit** (`submit`, `text`, required/optional): Once you've filled out all the required fields, click "Submit" to submit your registration.
