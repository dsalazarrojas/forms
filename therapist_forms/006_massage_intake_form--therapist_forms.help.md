# Massage Intake Form - Help Guide
## Purpose
This form is used to gather information from clients before booking a massage appointment. It helps the massage therapist to tailor the massage experience to the client's needs and preferences.

## How To Complete This Form
1. Select the massage type that you are interested in (e.g., "Massage Oil", "Swedish", "Deep Tissue", or "Sports").
2. Choose how long you would like the massage to be, either 30 minutes, 60 minutes, or 90 minutes.
3. Select how often you would like to book a massage, whether it's once, regularly (every 1-2 weeks), or irregularly.
4. If you want to provide additional comments or information, you can do so in the "Additional Comments" field.
5. Optionally, you can enter your email address and phone number for contact purposes.

## Field-by-Field Explanation
* **Book Appointment** (`1`, `number`, required: false): This field is for selecting the number of appointments you would like to book. Please enter the number of massages you would like to book.
* **Symptoms** (`2`, `text`, required: false): This field is for describing any symptoms or areas of concern you would like the massage therapist to focus on.
* **Massage Type** (`3`, `select_one`, required: true): Choose the style of massage you are interested in, such as Massage Oil, Swedish, Deep Tissue, or Sports.
* **How long would you like the massage to be?** (`4`, `select_multiple`, required: true): Select the duration of the massage you would like to book, either 30 minutes, 60 minutes, or 90 minutes.
* **How often would you like to book?** (`5`, `select_one`, required: true): Choose how often you would like to book a massage, whether it's once, regularly (every 1-2 weeks), or irregularly.
* **Time** (`6`, `date`, required: false): This field is not currently used in the form, but may be used for future updates. If you have a specific date in mind for your massage, you can enter it here.
* **Preferred Time** (`7`, `time`, required: false): Select your preferred time for the massage appointment.
* **Additional Comments** (`8`, `note`, required: false): If you have any additional comments or information you would like to provide, please enter them here.
* **Email** (`9`, `email`, required: false): Optionally, you can enter your email address for the massage therapist to contact you.
* **Phone** (`10`, `text`, required: false): Optionally, you can enter your phone number for the massage therapist to contact you.
