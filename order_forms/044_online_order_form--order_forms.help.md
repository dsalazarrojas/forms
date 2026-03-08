# Online Order Form - Help Guide
## Purpose
This is an online order form designed to collect information from a sender and a receiver for flower delivery. The sender provides details about themselves, while the receiver provides details about themselves and their delivery preferences. This form collects necessary information to process the order accurately and ensure successful delivery.

## How To Complete This Form
To complete this form, please follow these steps:
* Fill out the sender's information with your details (sender's name, address, phone number, etc.)
* Enter the receiver's information with their details (name, address, phone number, etc.)
* Select the delivery date for the flowers
* Enter the delivery address
* Decide if you would like to include flowers in the order (select "Yes" or "No")
* If including flowers, select the type of flowers you would like to include (e.g., red rose, blue tulip, yellow sunflower)
* Add a personal message for the receiver (optional)
* Select the quantity of flowers
* Enter the price of the order
* Provide payment information
* Review and confirm the order details (including a confirmation message)

## Field-by-Field Explanation
### Sender Information (<required>)
* **Sender Information** (`sender_info`, `text`, required): This field is for the sender to input their name, phone number, and address.

* **Receiver Information** (`receiver_info`, `text`, required): This field is for the receiver to input their name, phone number, and address.

* **Delivery Date** (`delivery_info`, `date`, required): Select the date for the flower delivery.

* **Delivery Address** (`delivery_address`, `text`, required): Input the receiver's delivery address for accurate delivery.

* **Select Flowers** (`flowers`, `select_one`, optional): Choose whether to include flowers in the order (select "Yes" or "No").

* **Flower Options** (`flower_options`, `select_multiple`, required): If including flowers, select the type of flowers you would like to include (e.g., red rose, blue tulip, yellow sunflower).

* **Quantity** (`quantity`, `number`, required): Enter the quantity of flowers.

* **Price** (`price`, `number`, required): Enter the price of the order.

* **Payment Information** (`payment_info`, `text`, required): Input payment information (e.g., credit card details, payment method).

* **Confirmation** (`confirmation`, `note`, required): Review and confirm the order details before submission.
* **Confirmation Message** (`confirmation_message`, `note`, optional): Add any additional confirmation or instructions for the receiver (optional).
