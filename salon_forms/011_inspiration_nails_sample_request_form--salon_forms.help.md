# <string> - Help Guide
## Purpose
The <string> form is used to collect information from users regarding a sample collection. This includes their basic contact information (First Name, Last Name, and Email) and specific details about their sample requirements (Sample Request Date, Sample Request Time, Color Request, Number of Samples, Follow-up Request, and Notes).

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your First Name, Last Name, and Email address in the respective fields.
2. Provide a valid phone number if you have one.
3. Select all applicable colors from the Color Request field.
4. Enter the desired date and time for the sample collection.
5. Specify the number of samples you need.
6. Check the Follow-up Request field accordingly.
7. Leave a note if you have any additional comments or requests.

## Field-by-Field Explanation

* **First Name** (`first_name`, `text`, required: false): Enter your first name.
* **Last Name** (`last_name`, `text`, required: false): Enter your last name.
* **Email** (`email`, `email`, required: false): Enter a valid email address where you can be contacted.
* **Phone Number** (`phone_number`, `text`, required: false): Provide your phone number if you have one.
* **Sample Request Date** (`sample_request_date`, `date`, required: false): Enter the desired date for the sample collection.
* **Sample Request Time** (`sample_request_time`, `time`, required: false): Enter the desired time for the sample collection.
* **Sample Color** (`color_request`, `select_multiple`, required: false): Select all the colors that you are interested in (Light Brown, Dark Brown, Pastel Pink, Neon Pink, Red, Blue, Green, and Purple).
* **Number of Samples** (`number_of_samples`, `number`, required: false): Enter the number of samples you need.
* **Follow-up Request** (`follow_up_request`, `select_one`, required: false): Check the option that best describes your follow-up request (True, False, Maybe Later).
* **Notes** (`notes`, `note`, required: false): Leave a note if you have any additional comments or requests.

## Tips
* Make sure to provide a valid email address and phone number to ensure efficient communication.
* Be as specific as possible when selecting the sample colors and desired dates and times.
* If you have any special requests or comments, leave a note in the Notes field.
