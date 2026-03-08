<thinking>
To check if this form is properly filled out, the customer must input their name, email, phone number, delivery address, bike brand, model, serial number, and bike color. They must also specify the bike type, frame size, and whether a warranty is included. Additionally, they must select the date and time of handover and the bike's condition. Finally, they must acknowledge receipt of the bike in the condition described.
</thinking>

# Bike Handover Form - Help Guide
## Purpose
The Bike Handover Form is a form used to collect information from customers about a bike being handed over. This form is used to ensure a smooth handover process and to document the bike's details.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the customer information section with your full name, email address, and phone number.
2. Enter the bike's details, including brand, model, serial number, and color.
3. Specify the bike type and frame size.
4. Indicate whether a warranty is included with the bike.
5. Select the date and time of handover.
6. Assess the bike's condition and select the appropriate option.
7. Add any additional condition notes if necessary.
8. Finally, acknowledge receipt of the bike in the condition described.

## Field-by-Field Explanation

* **Customer Full Name** (`customer_full_name`, text, required): Enter your complete name as it appears on your identification.
* **Email Address** (`customer_email`, email, required): We'll use this for your receipt and support.
* **Phone Number** (`customer_phone`, text, required): Contact number for delivery or questions.
* **Delivery Address** (`customer_address`, text, required): Full address where bike will be delivered.
* **Bike Brand** (`bike_brand`, text, required): Manufacturer or brand name.
* **Bike Model** (`bike_model`, text, required): Specific model name or number.
* **Serial Number** (`bike_serial_number`, text, required): Found on the frame or components.
* **Bike Color** (`bike_color`, text, required): Primary color of the bike.
* **Bike Type** (`bike_type`, select_one, required): What category is this bike (e.g., Road, Mountain, Hybrid).
* **Frame Size** (`bike_frame_size`, text, required): Size in inches or centimeters.
* **Accessories Included** (`included_accessories`, select_multiple, optional): Select all that apply (e.g., Lights, Bell).
* **Warranty Included** (`warranty_included`, select_one, required): Does bike come with warranty.
* **Warranty Expiration** (`warranty_expiration`, date, optional): When does warranty expire.
* **Date of Handover** (`handover_date`, date, required): When is the bike being handed over.
* **Time of Handover** (`handover_time`, time, optional): Preferred time for pickup or delivery.
* **Bike Condition** (`bike_condition`, select_one, required): Current condition of the bike (e.g., Brand New, Like New).
* **Additional Condition Notes** (`condition_notes`, text, optional): Any damage or issues to note.
* **I Acknowledge Receipt** (`customer_signature_agreement`, select_one, required): Check to confirm you accept the bike.
