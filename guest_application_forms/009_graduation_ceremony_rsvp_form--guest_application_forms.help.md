# Graduation Ceremony RSVP Form - Help Guide
## Purpose
This form is used to capture information from guests and family members planning to attend a graduation ceremony to ensure an accurate headcount for the ceremony.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the **Graduation Ceremony Host**'s name in the first field.
2. Select the **Graduation Date** of the ceremony that you plan to attend.
3. Choose whether you will be attending as a **Guest**, **Family Member**, or **Other**.
4. If attending as **Other**, enter the relationship to the graduate in the **Guest Relation** field.
5. Enter any additional **Message** you'd like to communicate with the graduation committee.
6. Enter the **Graduation Date**, **Graduation Time**, and **Graduation Location** of the ceremony.
7. If you're planning to attend online, choose the **Form Filled Out** method and enter the **Online RSVP URL**.
8. Finally, select the **RSVP Deadline** and choose your preferred **Confirmation Message** and **Cancel Message**.

## Field-by-Field Explanation

### Graduation Ceremony Host
*   **Graduation Ceremony Host** (`name`, `text`, required: false): Enter the name of the person hosting the graduation ceremony.

### Graduation Date
*   **Graduation Date** (`name`, `date`, required: false): Select the date of the graduation ceremony.

### RSVP
*   **RSVP** (`name`, `number`, required: false): Choose how many people will be attending the ceremony.

### Contact Information
*   **Contact Name** (`name`, `text`, required: false): Enter your name.
*   **Contact Email** (`name`, `email`, required: false): Enter your email.
*   **Contact Phone** (`name`, `text`, required: false): Enter your phone number.

### Attendance Information
*   **Attending as** (`name`, `select_one`, required: false): Choose whether you will be attending as **Guest**, **Family Member**, or **Other**.
*   **Guest Relation** (`name`, `text`, required: false): If attending as **Other**, enter the relationship to the graduate.

### Ceremony Details
*   **Graduation Time** (`name`, `time`, required: false): Enter the time of the graduation ceremony.
*   **Graduation Location** (`name`, `text`, required: false): Enter the location of the graduation ceremony.

### Online RSVP
*   **Form Filled Out** (`name`, `select_multiple`, required: false): Choose how you plan to RSVP, **Guest List**, **RSVP Card**, or **Online RSVP**.
*   **Online RSVP URL** (`name`, `text`, required: false): Enter the URL where you plan to RSVP online.

### Deadline and Messages
*   **RSVP Deadline** (`name`, `date`, required: false): Select the RSVP deadline.
*   **Confirmation Message** (`name`, `text`, required: false): Enter a message to be sent to you upon successful RSVP.
*   **Cancel Deadline** (`name`, `date`, required: false): Select the cancel deadline.
*   **Cancellation Message** (`name`, `text`, required: false): Enter a message to be sent to you upon cancellation.
*   **Confirmation Message** (`name`, `text`, required: false): Enter a message to be sent to you upon confirmation.
*   **Cancel Message** (`name`, `text`, required: false): Enter a message to be sent to you upon cancellation.

### Submission Options
*   **Submit** (`name`, `select_multiple`, required: false): Finally, select whether to **Submit**, **Cancel**, or **Save as draft**.
