<thinking>
To avoid duplication of efforts, this guide is only for the Hotel Reservation Extension Form and is intended for users who are already familiar with hotel reservations. This form is designed for guests who need to extend their stay, and its purpose is to facilitate the request process, allowing the guest service staff to process and manage such requests efficiently. The guide aims to provide a clear understanding of the form's requirements and fields to help users complete it correctly.
</thinking>

# Hotel Reservation Extension Form - Help Guide
## Purpose
This form is used to request an extension of a guest's hotel stay. It collects information necessary for the guest service staff to process and manage such requests.

## How To Complete This Form
To complete the Hotel Reservation Extension Form, follow these steps:

* Ensure you have all the required information ready before filling out the form.
* Select the correct options for each field based on your needs.
* Fill out all the required fields.
* Review your answers for accuracy before submitting the form.

## Field-by-Field Explanation
### Request Extension
* **Request Extension** (`hotel_reservation_extension_form_1`, `select_one`, required: false): Select 'Yes' if you are requesting an extension for your hotel stay, or 'No' if you are not.

### Check In Date
* **Check In Date** (`check_in_date`, `date`, required: false): Enter the date you are currently checking in, in the format YYYY-MM-DD.

### Check In Time
* **Check In Time** (`check_in_time`, `time`, required: false): Enter the time you are currently checking in, in the format HH:MM.

### Check Out Date
* **Check Out Date** (`check_out_date`, `date`, required: false): Enter the date you would like to extend your stay to, in the format YYYY-MM-DD.

### Check Out Time
* **Check Out Time** (`check_out_time`, `time`, required: false): Enter the time you would like to extend your stay to, in the format HH:MM.

### Reason for Extension
* **Reason for Extension** (`reason_for_extension`, `select_multiple`, required: false): Select all applicable reasons for your extension request.

### Room Type
* **Room Type** (`room_type`, `select_one`, required: false): Select your room type.

### Room Number
* **Room Number** (`room_number`, `select_multiple`, required: false): Select your current room number.

### Number of People
* **Number of People** (`number_of_people`, `number`, required: false): Enter the number of people in your party.

### Contact Number
* **Contact Number** (`contact_number`, `text`, required: false): Enter your contact number for any follow-up communication.
