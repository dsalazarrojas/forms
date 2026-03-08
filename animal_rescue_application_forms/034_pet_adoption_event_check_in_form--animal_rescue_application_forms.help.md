# Pet Adoption Event Check In Form - Help Guide
## Purpose
The purpose of this form is to collect information for a pet adoption event, including event details and attendee information.

## How To Complete This Form
1. Fill out the form completely and accurately.
2. Make sure to select a valid contact method (Phone, Email, Text, or Other (Specify) if not listed).
3. Enter a valid phone number if using Phone as the contact method.
4. Enter a valid email if using Email as the contact method.
5. Enter a unique Event ID if available.
6. Enter a unique User ID if available.

## Field-by-Field Explanation

### Event Details

* **Event Name** (`Event Name`, `text`, required): Enter the name of the pet adoption event.
* **Event Date** (`Event Date`, `date`, required): Enter the date of the pet adoption event.
* **Event Time** (`Event Time`, `time`, required): Enter the time of the pet adoption event.
* **Event Location** (`Event Location`, `text`, required): Enter the location of the pet adoption event.

### Attendee Info

* **Attendee Name** (`Attendee Name`, `text`, required): Enter the name of the attendee.
* **Attendee DOB** (`Attendee DOB`, `date`, required): Enter the date of birth of the attendee.
* **Attendee Gender** (`Attendee Gender`, `select_one`, required): Select the gender of the attendee (Male, Female).
* **Attendee Age** (`Attendee Age`, `number`, required): Enter the age of the attendee.

### Contact Information

* **Contact Method** (`Contact Method`, `select_one`, required): Select how the attendee would like to be contacted (Phone, Email, Text, or Other (Specify)).
* If **Contact Method** is set to **Other (Specify)**, enter the **Other (Specify)** field with a valid method of contact (e.g. Email, Phone, etc.).
* **Phone Number** (`Phone Number`, `text`, required): Enter a valid phone number if using Phone as the contact method.
* **Email** (`Email`, `email`, required): Enter a valid email if using Email as the contact method.

### Additional Info

* **Event ID** (`Event ID`, `text`, optional): Enter the unique ID of the pet adoption event if available.
* **User ID** (`User ID`, `text`, optional): Enter the unique ID of the user if available.
