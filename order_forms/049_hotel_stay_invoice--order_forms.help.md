# Hotel Stay Invoice - Help Guide
## Purpose
This form is used to generate an invoice for a hotel stay, allowing users to input details such as hotel, guest name, room type, dates, room rate, and service charge.

## How To Complete This Form
To complete this form, follow the steps outlined in the "thinking" block above.

## Field-by-Field Explanation
* **Hotel ID** (`hotel_id`, select_one, optional): Select the hotel from the available options to associate the invoice with the correct hotel.
* **Guest Name** (`guest_name`, text, optional): Enter the name of the guest who stayed at the hotel.
* **Room Type** (`room_type`, select_multiple, optional): Choose the type of room(s) the guest stayed in during their visit.
* **Stay Start Date** (`stay_start`, date, optional): Enter the start date of the guest's stay in the hotel.
* **Stay End Date** (`stay_end`, date, optional): Enter the end date of the guest's stay in the hotel.
* **Room Rate** (`room_rate`, number, optional): Enter the rate charged for the room(s) the guest stayed in.
* **Room Rate Currency** (`room_rate_currency`, text, optional): Select the currency of the room rate.
* **Total Amount** (`total_amount`, number, optional): Enter the total amount of the invoice.
* **Service Charge** (`service_charge`, number, optional): Enter any service charge that was added to the invoice.
