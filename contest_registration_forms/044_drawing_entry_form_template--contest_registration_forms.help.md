# Drawing Entry Form Template - Help Guide
## Purpose
The drawing entry form is designed to collect information about a drawing entry for registration and tracking purposes.

## How To Complete This Form

1. Ensure that all required fields are filled out before submitting the form. Required fields are marked with an asterisk (\*).
2. Enter your first and last name in the "First Name" and "Last Name" fields respectively.
3. Provide your email address in the "Email Address" field.
4. Enter your phone number in the "Phone Number" field (if available).
5. Enter the drawing ID number in the "Drawing ID" field.
6. Select the date and time of the entry in the "Entry Date" and "Entry Time" fields, respectively.
7. Enter the date and time of the drawing in the "Entry Date/Time" field.
8. Provide any additional entry details in the "Entry Details" field.
9. Enter the winner's details in the "Winner Details" field.
10. Select the status of the entry and winner in the "Entry Status" and "Winner Status" fields, respectively.
11. Enter the prize details in the "Prize Details" field.
12. Add any additional notes in the "Entry Date/Time Note", "Winner Date/Time Note", and "Drawing Date/Time Note" fields.

## Field-by-Field Explanation

* **First Name** (`contact_info`, `text`, required*): Enter your first name.
* **Last Name** (`last_name`, `text`, required*): Enter your last name.
* **Email Address** (`email_address`, `email`, required*): Enter a valid email address.
* **Phone Number** (`contact_phone`, `text`, optional): Enter your phone number.
* **Drawing ID** (`drawing_id`, `text`, required*): Enter the drawing ID number.
* **Entry Date** (`entry_date`, `date`, required*): Select the date of the entry.
* **Entry Time** (`entry_time`, `time`, optional): Select the time of the entry.
* **Entry Date/Time** (`entry_date_time`, `date`, required*): Select the date and time of the entry.
* **Entry Details** (`entry_details`, `note`, optional): Provide any additional entry details.
* **Winner Details** (`winner_details`, `note`, optional): Provide any additional winner details.
* **Winner Name** (`winner_name`, `text`, optional): Enter the winner's name.
* **Winner Phone** (`winner_phone`, `text`, optional): Enter the winner's phone number.
* **Winner Address** (`winner_address`, `text`, optional): Enter the winner's address.
* **Drawing Details** (`drawing_details`, `text`, optional): Enter any additional drawing details.
* **Drawing Type** (`drawing_type`, `select_one`, required*): Select the type of drawing (e.g., Free Drawings, Sponsored Drawings, etc.).
* **Entry Status** (`entry_status`, `select_one`, required*): Select the status of the entry (e.g., Confirmed, Not Confirmed, Pending).
* **Winner Status** (`winner_status`, `select_one`, required*): Select the status of the winner (e.g., Confirmed, Not Confirmed, Pending).
* **Drawing Location** (`drawing_location`, `text`, optional): Enter the location of the drawing.
* **Prize Details** (`prize_details`, `text`, required*): Enter the prize details.
* **Entry Date/Time Note** (`entry_date_time_note`, `note`, optional): Add any additional notes about the entry date and time.
* **Winner Date/Time Note** (`winner_date_time_note`, `note`, optional): Add any additional notes about the winner date and time.
* **Drawing Date/Time Note** (`drawing_date_time_note`, `note`, optional): Add any additional notes about the drawing date and time.
* **Contact Email** (`contact_email`, `email`, optional): Enter a contact email address.
* **Contact Phone** (`contact_phone`, `text`, optional): Enter a contact phone number.
* **Contact Info** (`contact_info`, `note`, optional): Add any additional contact information.
