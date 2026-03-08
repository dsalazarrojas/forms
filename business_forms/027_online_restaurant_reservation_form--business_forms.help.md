<thinking> 
This guide is intended to be a comprehensive resource for users interacting with the online restaurant reservation form. It should provide clear guidance on the form's purpose, how to complete it, and what each field represents. 

To start with, the form is designed to gather information from users for reservations at a restaurant. Its primary purpose is to collect details about guests, including their contact information, preferences, and requirements. The form also serves as a means to communicate with the restaurant staff, allowing users to convey any special requests or messages. 

Upon completion, the form should be filled out accurately and thoroughly, ensuring that all required fields are completed and the user's preferences and requirements are clearly stated. 

This guide will cover each field in the form, explaining its meaning, relevance, and expected user input. 

Please note that this guide is tailored to the specific fields and options presented in the provided YAML configuration. Each field and option is carefully explained to avoid any confusion or duplication of effort.

</thinking>

# Online Restaurant Reservation Form - Help Guide
## Purpose
The online restaurant reservation form is designed to collect information from guests for reservations at the restaurant. This includes contact details, preferences, and any special requests. By filling out this form accurately, guests can ensure that their reservations are handled efficiently and effectively.

## How To Complete This Form
To complete this form, follow these steps:

1.  Start by entering your guest's name.
2.  Enter your email address to allow the restaurant staff to contact you.
3.  Provide your phone number so the restaurant can reach out to you about your reservation.
4.  Specify the number of guests you will be dining with.
5.  Select a date for your reservation.
6.  Choose a time for your reservation.
7.  Decide on the reservation duration.
8.  Leave any additional messages or messages to the host.
9.  If required, specify table preferences and reservation requests.
10.  Confirm your reservation details before submission.

## Field-by-Field Explanation
### **Guest Name** (`guest_name`, text, required): 
Enter the name of the guest(s) making the reservation.

### **Guest Email** (`guest_email`, text, required): 
Enter your email address to allow the restaurant to contact you.

### **Guest Phone** (`guest_phone`, text, required): 
Enter 10 digit phone number for the restaurant to contact you.

### **Number of Guests** (`number_of_guests`, number, required): 
Indicate how many people will be dining.

### **Date** (`date`, date, required): 
Specify the date for your reservation.

### **Time** (`time`, time, required): 
Choose the time for your reservation.

### **Reservation Time** (`reservation_time`, time, required): 
Select the specific time for your reservation.

### **Reservation Duration** (`reservation_time_duration`, number, required): 
Decide on the length of your reservation.

### **Message to Host** (`message_to_host`, text, optional): 
Leave any additional messages for the host.

### **Table Request** (`table_request`, select_one, optional): 
Choose your preferred table location (by the window or by the kitchen).

### **Table Preferences** (`table_preferences`, select_multiple, optional): 
Specify your table preferences (smoking or non-smoking, or both).

### **Reservation Message** (`reservation_message`, text, optional): 
Add any additional comments or messages for your reservation.

### **Reservation Note** (`reservation_note`, text, optional): 
Enter any special notes or comments for your reservation.

### **Reservation Request** (`reservation_request`, select_multiple, optional): 
Specify your reservation preferences (food, drink, or both).

### **Special Request** (`special_request`, text, optional): 
Leave any special requests or comments for the host.

### **Reservation ID** (`reservation_id`, text, required): 
Enter a unique identifier for your reservation.

### **Submit** (`submit`, note, required): 
Click to submit your reservation request.

### **Cancel** (`cancel`, note, required): 
Click to cancel and abandon your reservation request.

### **Back** (`back`, note, required): 
Click to return to the previous page.

### **Save** (`save`, note, required): 
Click to save your changes before submission.

### **Cancel Changes** (`cancel_changes`, note, required): 
Click to cancel any changes.

### **Reset** (`reset`, note, required): 
Click to reset all fields.

### **Save Changes** (`save_changes`, note, required): 
Click to save any changes.

### **Confirm** (`confirm`, note, required): 
Click to confirm your reservation details.

### **Confirm Changes** (`confirm_changes`, note, required): 
Click to confirm any changes.

Please note that the provided YAML configuration includes fields that are not directly used in this guide. Those fields are not covered here, but users are still free to fill them out as needed.
