# Audio Visual Equipment Booking Form - Help Guide
## Purpose

This form is used to book audio visual equipment for events.

## How To Complete This Form

To complete this form, please follow these steps:

1. Fill out the required fields with your contact information and event details.
2. Select the equipment needed for the event.
3. Specify the technical support required.
4. Provide any additional requirements or notes.
5. Enter your estimated budget range (if applicable).

## Field-by-Field Explanation

* **Requester Full Name** (`requester_full_name`, text, required): Name of person making the booking.
* **Email Address** (`requester_email`, email, required): Contact email for booking confirmation.
* **Phone Number** (`requester_phone`, text, required): Contact phone number.
* **Organization Name** (`organization_name`, text, required): Company or organization name.
* **Booking Date** (`booking_date`, date, required): Date of this booking request.
* **Event Date** (`event_date`, date, required): Date when equipment is needed.
* **Event Start Time** (`event_start_time`, time, required): When does the event start?
* **Event End Time** (`event_end_time`, time, required): When does the event end?
* **Setup Time Required** (`setup_time_required`, select_one, required): How much setup time is needed (1 hour before, 2 hours before, 3 hours before, 4+ hours before, Day before).
* **Event Type** (`event_type`, select_one, required): What type of event is this (Conference, Meeting, Presentation, Training Session, Webinar, Live Stream, Hybrid Event, Other).
* **Venue Name** (`venue_name`, text, required): Name of event venue.
* **Room or Space** (`venue_room`, text, required): Specific room or area.
* **Expected Attendees** (`expected_attendees`, select_one, required): Approximate number of attendees (Under 10, 10-25, 26-50, 51-100, 101-250, 251-500, Over 500).
* **Projection Equipment** (`projection_needed`, select_multiple, required): Select projection equipment needed (Projector, Projection screen, LED display, Monitor, Not needed).
* **Audio Equipment** (`audio_equipment_needed`, select_multiple, required): Select audio equipment needed (Wireless microphones, Wired microphones, Lapel microphones, Speakers, Mixing console, Audio recorder, Not needed).
* **Lighting Equipment** (`lighting_equipment_needed`, select_multiple, required): Select lighting equipment needed (Stage lighting, Spotlights, Ambient lighting, Video lighting, Not needed).
* **Recording and Streaming** (`recording_streaming`, select_multiple, required): Select recording or streaming needs (Video recording, Audio recording, Live streaming, Video conferencing, Not needed).
* **Technical Support** (`technical_support`, select_one, required): Do you need on-site technical support? (Yes, full-time support, Yes, setup only, Yes, on-call support, No, self-operated).
* **Special Requirements** (`special_requirements`, text, optional): Any additional requirements or notes.
* **Budget Range** (`budget_range`, select_one, optional): Estimated budget for equipment rental (Under $500, $500 - $1,000, $1,000 - $2,500, $2,500 - $5,000, Over $5,000).
* **Purchase Order Number** (`purchase_order_number`, text, optional): PO number if applicable.

Please note that all required fields are marked with an asterisk (\*).
