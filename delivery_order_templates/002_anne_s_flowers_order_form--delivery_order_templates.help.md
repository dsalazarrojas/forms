# Anne's Flowers Order Form - Help Guide
## Purpose

This form is designed to collect information from customers to efficiently process their flower arrangement orders. Please fill it out carefully to ensure your order is completed correctly.

## How To Complete This Form

1.  In the -- Customer Information -- section, enter your name, email address, and phone number.
2.  In the -- Order Details -- section, select the type of flower arrangement you want, choose the arrangement size, and specify any special flower preferences you may have.
3.  Enter the date you would like to receive the flowers, select the preferred delivery time, and provide the delivery address.
4.  If the flowers are to be received by someone else, enter their name.
5.  You can include a message to be included with the flowers, if desired.
6.  In the last field, you can provide any special instructions for the delivery, such as a gate code or where to leave the flowers.

## Field-by-Field Explanation

- **Customer Name** (`customer_name`, text, required): Enter your name as it appears on your identification.
- **Customer Email** (`customer_email`, email, required): Enter your email address that we can use to contact you.
- **Customer Phone Number** (`customer_phone`, text, required): Enter your phone number that we can use to contact you.
- **Flower Arrangement Type** (`flower_arrangement_type`, select_one, required): Choose from the options:
  - Birthday Bouquet
  - Anniversary Special
  - Get Well Soon
  - Sympathy Arrangement
  - Custom Design
- **Arrangement Size** (`arrangement_size`, select_one, required): Choose from the options:
  - Standard
  - Deluxe
  - Premium
- **Specific Flower Preferences** (`specific_flower_preferences`, text, optional): Enter any specific flower types you would like to include in your arrangement, e.g., Roses, Lilies, Tulips, etc.
- **Delivery Date** (`delivery_date`, date, required): Enter the date you would like to receive the flowers.
- **Preferred Delivery Time** (`delivery_time_slot`, select_one, required): Choose from the options:
  - Morning (9AM - 12PM)
  - Afternoon (12PM - 4PM)
  - Evening (4PM - 7PM)
- **Delivery Address** (`delivery_address`, text, required): Enter the full address including city and zip code.
- **Recipient Name** (`recipient_name`, text, required): Enter the name of the person receiving the flowers, if not the customer.
- **Card Message** (`card_message`, text, optional): Enter any message you would like to be included with the flowers.
- **Special Delivery Instructions** (`special_instructions`, text, optional): Enter any special instructions for the delivery, e.g., gate code, leave at front door, etc.
