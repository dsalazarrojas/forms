<thinking>
This form is used to sign up for the dessert distribution event. 
The form requires the user to provide information about themselves and the event details.
The form is meant to be filled out by the volunteers who are going to the event to help with dessert distribution.
</thinking>

# Dessert Distribution Sign Up - Help Guide
## Purpose
This form is used to collect information from volunteers who are going to participate in the dessert distribution event. It includes fields for volunteer contact information, event details, and volunteer notes.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide your basic contact information as a volunteer in the "Volunteer Information" section.
2. Fill out the event details in the "Dessert Distribution Event Information" section.

## Field-by-Field Explanation
- **Volunteer Information**
  - **Volunteer Name** (`volunteer_name`, text, required): Enter your name as a volunteer.
  - **Email** (`volunteer_email`, email, required): Enter your email address.
  - **Phone** (`volunteer_phone`, text, required): Enter your phone number.
- **Dessert Distribution Event Information**
  - **Item Name** (`item_name`, text, required): Enter the name of the dessert item you want to distribute.
  - **Quantity** (`item_quantity`, number, required): Enter the quantity of the dessert item you want to distribute.
  - **Size** (`item_size`, select_one, required): Choose the size of the dessert item you want to distribute.
  - **Description** (`item_description`, text, required): Enter a brief description of the dessert item.
  - **Price** (`item_price`, number, required): Enter the price of the dessert item.
  - **Event Date** (`event_date`, date, required): Choose the date of the event.
  - **Event Time** (`event_time`, time, required): Choose the time of the event.
  - **Location** (`event_location`, text, required): Enter the location of the event.
  - **Additional Details** (`event_details`, text, required): Enter any additional event details.
  - **Event Status** (`event_status`, select_multiple, required): Choose the status of the event (active or inactive).
  - **Event Organizer** (`event_organizer`, text, required): Enter the name of the event organizer.
  - **Contact** (`event_contact`, text, required): Enter the contact information for the event.
  - **Address** (`event_address`, text, required): Enter the address of the event location.
  - **City** (`event_city`, text, required): Enter the city of the event location.
  - **State** (`event_state`, text, required): Enter the state of the event location.
  - **Zip** (`event_zip`, text, required): Enter the zip code of the event location.
  - **Phone** (`event_phone`, text, required): Enter the phone number of the event contact.
  - **Email** (`event_email`, text, required): Enter the email address of the event contact.
- **Event Notes**
  - **Volunteer Notes** (`volunteer_notes`, note, optional): Enter any notes about the volunteer.
  - **Event Note** (`event_note`, note, optional): Enter any notes about the event.
