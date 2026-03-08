# Hotel Booking Quotation Form - Help Guide
## Purpose
This form is for guests to book a room at a hotel. Please fill it out with the required information to facilitate a smooth booking process.

## How To Complete This Form
To complete this form, follow these steps:
1. Select the date you plan to check in.
2. Choose the room type that suits your needs.
3. Indicate the number of rooms you need.
4. Enter your full name as it appears on your identification.
5. Enter your email address for contact purposes.
6. If you have any special requests, type them in the "Special Request" field.
7. Provide your phone number so we can contact you.
8. Add any additional message if you have any other requirements.
9. Click "Submit" to send your booking request.

## Field-by-Field Explanation
### Hotel Checkin
• **Hotel Checkin** (`hotel_checkin_date`, date, required: false): Select the date you plan to check in to the hotel.
### Room Type
• **Room Type** (`room_type`, select_one, required: false): Choose the type of room that suits your needs. You can select one of the following options: Double Room, Single Room, Suite, Junior Suite, Executive Room, or Family Room.
### Room Quantity
• **Room Quantity** (`room_quantity`, number, required: false): Indicate the number of rooms you need.
### Guest Full Name
• **Guest Full Name** (`guest_full_name`, text, required: false): Enter your full name as it appears on your identification.
### Guest Email
• **Guest Email** (`guest_email`, email, required: false): Enter your email address for contact purposes.
### Special Request
• **Special Request** (`special_request`, text, required: false): If you have any special requests, type them in this field.
### Phone
• **Phone** (`phone`, text, required: false): Provide your phone number so we can contact you.
### Message
• **Message** (`message`, text, required: false): Add any additional message if you have any other requirements.
### Submit
• **Submit** (`submit`, text, required: false): Click "Submit" to send your booking request to the hotel staff.
