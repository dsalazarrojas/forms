# Consultant Booking System - Help Guide
## Purpose
The Consultant Booking System is an online form designed to help clients book a consultation with a consultant. The form collects information such as client identification, consultation details, and preferred meeting format.

## How To Complete This Form
To complete this form, follow these steps:

1.  Enter your full name and email address.
2.  Provide your phone number in the format `(555) 555-5555`.
3.  Enter your company or organization's name (if applicable).
4.  Select the preferred date and time for the consultation.
5.  Choose the consultation service you would like to book.
6.  Describe the primary topic or problem you would like to discuss.
7.  Select your preferred meeting format (video call, phone call, or in-person).
8.  Decide if you would like to receive the meeting link by email.
9.  Specify your current time zone.
10.  Confirm your acknowledgement of the booking fee and cancellation policy.
11.  Confirm your agreement to the 24-hour cancellation policy.
12.  Provide any additional information or special requests (if applicable).
13.  Specify the date of the booking request.

## Field-by-Field Explanation

*   **Full Name** (`client_full_name_ident`, `text`, required): Enter your full name as it appears on your official documents. This will be used to identify you as a client.
*   **Email Address** (`client_email_ident`, `email`, required): Enter your email address where you can receive booking confirmations and other important updates.
*   **Phone Number** (`client_phone_ident`, `text`, required): Enter your phone number in the format `(555) 555-5555`.
*   **Company/Organization Name** (`company_organization_ident`, `text`, required): Enter your company or organization's name (if applicable).
*   **Preferred Date for Consultation** (`preferred_booking_date`, `date`, required): Select a date and time for the consultation.
*   **Preferred Time Slot** (`preferred_booking_time`, `time`, required): Select a time slot for the consultation.
*   **Select a Consultation Service** (`consultation_service_ident`, `select_one`, required): Choose the type of consultation service you would like to book (e.g., Strategy Session, Project Assessment, Full-day Workshop, etc.).
*   **Primary Topic/Problem to be Discussed** (`consultation_topic_desc`, `text`, required): Briefly describe the primary topic or problem you would like to discuss.
*   **Preferred Meeting Format** (`meeting_format_pref`, `select_one`, required): Choose the meeting format you prefer (e.g., Video Call, Phone Call, In-person).
*   **Request Calendar Invitation with Meeting Link** (`virtual_meeting_link_req`, `select_one`, required): Decide if you would like to receive the meeting link by email.
*   **Your Current Time Zone** (`time_zone_ident`, `text`, required): Enter your current time zone.
*   **Acknowledgment of Booking/Consultation Fee** (`booking_fee_ack_ident`, `select_one`, required): Confirm your acknowledgement of the booking fee and standard consulting agreement.
*   **Agreement to 24-hour Cancellation Policy** (`cancellation_policy_ack`, `select_one`, required): Confirm your agreement to the 24-hour cancellation policy.
*   **Additional Information or Special Requests** (`additional_booking_notes`, `text`, required): Provide any additional information or special requests (if applicable).
*   **Date of Booking Request** (`submission_date`, `date`, required): Specify the date of the booking request.
*   **Booking Status (Internal Use Only)** (`booking_status_auto_label`, `text`, required): This field is for internal use only and should not be filled in by the client.
