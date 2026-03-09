# Maintenance Device Tracking Consent Form - Help Guide
## Purpose
This form is used to track user's preferences for maintenance devices, such as how often they want to be tracked, the method of tracking, and which devices they are willing to track.

## How To Complete This Form

To complete this form, follow these steps:

1. Review each question carefully and answer according to your preferences.
2. Select your preferred options for tracking frequency, tracking method, and devices to be tracked.
3. Submit the form when you have completed all the required fields.

## Field-by-Field Explanation

* **User Consent** (`user_consent`, select_one, required: false): This question asks for your consent to be tracked. You can choose between Agree and Decline.
* **Tracking Frequency** (`tracking_frequency`, number, required: false): This question asks how often you would like to be tracked. Enter a number to specify the frequency, such as 1 for once a day or 30 for once a month.
* **Tracking Frequency Unit** (`tracking_frequency_unit`, select_one, required: false): This question asks for the unit of time for your tracking frequency. You can choose between daily, weekly, and monthly.
* **Tracking Device** (`tracking_device`, select_multiple, required: false): This question asks which devices you are willing to track. You can select multiple devices, such as Phone, Tablet, or Laptop.
* **Tracking Method** (`tracking_method`, select_one, required: false): This question asks for the method of tracking you prefer. You can choose between GPS and Bluetooth.
* **User Email** (`user_email`, email, required: false): This question asks for your email address. This will be used for contact purposes.
* **Submit** (`submit`, note, required: false): This question is not actually a question, but rather a button to submit your form when you have completed all the required fields.
