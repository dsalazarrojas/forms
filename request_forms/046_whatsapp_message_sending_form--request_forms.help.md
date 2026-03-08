# WhatsApp Message Sending Form - Help Guide
## Purpose
This form is used for sending messages on WhatsApp with options for scheduling and customization.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the required fields:
	* `send_message`
	* `message`
	* `recipient`
2. Optional fields:
	* `scheduled_outreach`: Choose 'Yes' if you want to schedule the message.
	* `schedule_outreach`: Select a date to schedule the message.
	* `send_at`: Select a time to send the message.
	* `send_at_time`: This field is not recommended for use; instead, use `send_at` for time selection.
	* `send_message_to`: Enter the recipient's phone number (without the '+').
3. Review and submit your form.

## Field-by-Field Explanation
* **Send Message** (`send_message`, `text`, required): Enter the message you want to send on WhatsApp.
* **Message** (`message`, `text`, required): Enter the message content.
* **Recipient** (`recipient`, `text`, required): Enter the phone number of the recipient (without the '+').
* **Scheduled Outreaches** (`scheduled_outreach`, `select_multiple`, optional): Choose 'Yes' to schedule the message.
* **Scheduled Outreaches** (`scheduled_outreaches`, `select_multiple`, optional): This field is a duplicate of the above; choose 'Yes' to schedule the message.
* **Schedule Outreaches** (`schedule_outreach`, `date`, optional): Select a date to schedule the message.
* **Send at** (`send_at`, `time`, optional): Select a time to send the message.
* **Send at Time** (`send_at_time`, `time`, not recommended): This field is not recommended for use; instead, use `send_at` for time selection.
* **Schedule Outreaches** (`schedule_outreach_at`, `time`, optional): This field is not used; it's a duplicate of `send_at` and `schedule_outreach` seems to be the correct option.
* **Send Message To** (`send_message_to`, `text`, optional): Enter the recipient's phone number (without the '+').
* **Send Message At** (`send_message_at`, `time`, optional): Select a time to send the message.
