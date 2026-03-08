# sms Opt In Form Template - Help Guide
## Purpose
This form is for businesses to opt in or out of transactional text message communications. It is used to gather information about a business's preferences and settings for transactional communications.

## How To Complete This Form
To complete this form, follow these steps:

* Read the form carefully and make sure you understand what is being asked.
* Fill in the required fields with the requested information.
* Select the options that apply to your business's preferences.
* Review your selections carefully before submitting the form.

## Field-by-Field Explanation

### What is your business name
* **business_name** (`business_name`, `text`, required: false): Fill in your business's name as it appears on file or is commonly known.
*   This field is used to identify your business.

### What is your email
* **email** (`email`, `email`, required: false): Enter your business's email address.
*   This field is used to contact you in case of any issues or questions.

### What is your phone number
* **phone_number** (`phone_number`, `text`, required: false): Enter your business's phone number.
*   This field is used to contact you in case of any issues or questions.

### Message
* **message** (`message`, `text`, required: false): Enter any message you have for this opt in.
*   This field is for any message you want to include with your opt in.

### Category
* **Category** (`category`, `select_one`, required: true): Select the category that best describes this opt in.
*   This field is used to categorize your opt in so we can provide you with relevant information and communications.

### Description
* **description** (`description`, `note`, required: false): Enter a brief description of your opt in.
*   This field is for any additional information you want to provide about your opt in.

### Transactional communications
* **transactional_comms** (`transactional_comms`, `select_one`, required: true): Select whether you want to receive transactional communications via text messages.
*   This field determines whether you will receive transactional communications via text messages.

### Promotions
* **promotions** (`promotions`, `select_multiple`, required: true): Select whether you want to receive promotional offers and information via text messages.
*   This field determines whether you will receive promotional offers and information via text messages.

### Reminders
* **reminders** (`reminders`, `select_multiple`, required: true): Select whether you want to receive reminders via text messages.
*   This field determines whether you will receive reminders via text messages.

### Feedback
* **feedback** (`feedback`, `select_multiple`, required: true): Select whether you want to receive feedback via text messages.
*   This field determines whether you will receive feedback via text messages.

### Event Reminders
* **event_reminders** (`event_reminders`, `select_multiple`, required: true): Select whether you want to receive event reminders via text messages.
*   This field determines whether you will receive event reminders via text messages.

### Transactional communications via SMS
* **transactional_comms_via_sms** (`transactional_comms_via_sms`, `select_one`, required: true): Select whether you want to receive transactional communications via text messages.
*   This field determines whether you will receive transactional communications via text messages.

### Deliver Promotions
* **deliver_promotions** (`deliver_promotions`, `select_multiple`, required: true): Select whether you want to receive promotions via text messages.
*   This field determines whether you will receive promotions.

### Send Reminders
* **send_reminders** (`send_reminders`, `select_multiple`, required: true): Select whether you want to send reminders via text messages.
*   This field determines whether you will send reminders via text messages.

### Gather Feedback
* **gather_feedback** (`gather_feedback`, `select_multiple`, required: true): Select whether you want to gather feedback via text messages.
*   This field determines whether you will gather feedback via text messages.

### Consent
* **consent** (`consent`, `text`, required: false): Enter your consent for us to contact you.
*   This field is used to obtain your consent for us to contact you.

### Consent Date
* **consent_date** (`consent_date`, `date`, required: false): Enter the date of your consent.
*   This field is used to track the date of your consent.

### Notes
* **notes** (`notes`, `note`, required: false): Enter any notes about your opt in.
*   This field is for any additional information you want to provide about your opt in.

### Assigned User
* **assigned_user** (`assigned_user`, `text`, required: false): Enter the name of the user who assigned this opt in.
*   This field is for internal use to track who assigned this opt in.
