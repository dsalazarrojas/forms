<thinking>

**Internal reasoning block:**
The Bike Handover Form is a crucial document used to record and verify the details of a bike handover between the company and the customer. This form ensures that all relevant information about the bike, including its condition, accessories, and warranty, is accurately recorded. It also serves as a reference point for any potential issues that may arise during the handover process. To ensure accuracy and clarity, this guide will walk the user through each step and field of the form.

</thinking>

# Bike Handover Form - Help Guide
## Purpose
The Bike Handover Form is a document used to capture and verify the details of a bike handover between the company and the customer. It helps to ensure that all relevant information about the bike, including its condition, accessories, and warranty, is accurately recorded.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the customer's contact information in the **Customer Information** page.
2. Fill out the **Bike Details** page with the bike's manufacturer, model, serial number, color, and frame size.
3. Select the accessories included with the bike in the **Accessories Included** page.
4. Fill out the handover details, including the date and time of handover, in the **Handover Details** page.
5. Choose the bike's condition at handover and whether a warranty is included in the **Bike Condition at Handover** and **Warranty Included** pages.
6. Enter the total price of the bike and payment method used in the **Total Price** and **Payment Method** pages.
7. Have the customer sign and acknowledge the bike's condition in the **Customer Acknowledgment** page.
8. Add any additional notes from the handover in the **Staff Notes** page.

## Field-by-Field Explanation
* **Customer Information** (`Customer Information`, note, required: false)
	+ Enter the customer's contact details, including their name, email address, and phone number.
* **First Name** (`customer_first_name`, text, required: true)
	+ Enter the customer's first name.
* **Last Name** (`customer_last_name`, text, required: true)
	+ Enter the customer's last name.
* **Email Address** (`customer_email`, email, required: true)
	+ Enter the customer's email address for receipt and warranty purposes.
* **Phone Number** (`customer_phone`, text, required: true)
	+ Enter the customer's phone number for delivery updates.
* **Bike Details** (`bike_details`, note, required: false)
	+ Enter any additional information about the bicycle, such as its condition or any specific features.
* **Bike Brand** (`bike_brand`, text, required: true)
	+ Enter the manufacturer of the bicycle.
* **Bike Model** (`bike_model`, text, required: true)
	+ Enter the specific model name or number of the bicycle.
* **Serial Number** (`bike_serial_number`, text, required: true)
	+ Enter the frame serial number of the bicycle for registration purposes.
* **Color** (`bike_color`, text, required: true)
	+ Enter the primary color of the bicycle.
* **Frame Size** (`bike_size`, text, required: true)
	+ Enter the frame size of the bicycle in inches or centimeters.
* **Accessories Included** (`accessories_included`, select multiple, required: true)
	+ Select all accessories included with the bike, such as a helmet, bike lock, lights, water bottle holder, bike pump, or repair kit.
* **Handover Details** (`handover_details`, note, required: false)
	+ Enter any additional information about the handover process.
* **Handover Date** (`handover_date`, date, required: true)
	+ Enter the date when the bike is handed over to the customer.
* **Handover Time** (`handover_time`, time, required: true)
	+ Enter the scheduled pickup time of the bike.
* **Bike Condition at Handover** (`bike_condition`, select one, required: true)
	+ Select the condition of the bike at handover, such as brand new, excellent, good, fair, or refurbished.
* **Warranty Included** (`warranty_included`, select one, required: true)
	+ Choose whether a warranty is included with the bike, such as full warranty, limited warranty, or no warranty.
* **Warranty Duration** (`warranty_duration`, text, required: false)
	+ Enter the length of the warranty coverage.
* **Total Price** (`total_price`, number, required: true)
	+ Enter the final purchase price of the bike, including accessories.
* **Payment Method** (`payment_method`, select one, required: true)
	+ Choose how the purchase was paid, such as cash, credit card, debit card, financing, or gift card.
* **Customer Acknowledgment** (`customer_signature`, select one, required: true)
	+ Have the customer sign and acknowledge the bike's condition.
* **Staff Notes** (`staff_notes`, text, required: false)
	+ Add any additional notes from the handover process.

## Tips
- Make sure to fill out all required fields accurately and completely.
- Double-check the customer's information for any errors.
- Ensure that the bike's condition and warranty details are accurate.
- Have the customer sign and acknowledge the bike's condition.
- Keep a record of any additional notes from the handover process.
