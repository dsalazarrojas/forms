# Fashion Buyer Preview RSVP Form - Help Guide
## Purpose
This form is designed for Fashion Buyers to RSVP for preview events, allowing them to schedule their attendance and receive updates on upcoming fashion lines or collections.

## How To Complete This Form
To complete this form, follow these steps:

1.  **Fill out the Buyer Information page**
    *   Provide your name and email address to be contacted with event details.
    *   You can optionally enter any additional information about yourself.
2.  **Select your available dates for the event**
    *   Choose one or more dates you are available to attend the event.
3.  **Choose a time slot for the event**
    *   Select a time of day to attend the event.
4.  **Provide your guest's information (if applicable)**
    *   Enter your guest's name and email address (if you're attending with someone).

## Field-by-Field Explanation
*   **Buyer Information (1)**
    *   **Buyer Information** (`buyer_info`, text, required: false)
    *   Enter your name and any additional details about yourself.
*   **Event Details (2)**
    *   **Event Details** (`event_details`, text, required: false)
    *   Enter any relevant details about the event (e.g., event name, location, date).
*   **RSVP (3)**
    *   **RSVP** (`rsvp_dates`, select_multiple, required: false)
    *   Choose one or more dates you are available to attend the event.
*   **Time (4)**
    *   **Time** (`rsvp_time`, select_one, required: false)
    *   Select a time of day to attend the event.
*   **Guest Information (5)**
    *   **Guest Information** (`guest_details`, text, required: false)
    *   Enter your guest's name and email address (if you're attending with someone).
*   **Name (6)**
    *   **Name** (`name`, text, required: false)
    *   Enter your name.
*   **Email (7)**
    *   **Email** (`email`, email, required: false)
    *   Enter your email address.
*   **Phone (8)**
    *   **Phone** (`phone`, text, required: false)
    *   Enter your phone number.
