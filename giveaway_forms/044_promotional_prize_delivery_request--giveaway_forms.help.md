<thinking>
The "promotional_prize_delivery_request" form is used to capture information about prizes that are being delivered to customers after a promotional event. This form is likely used to gather details such as the name of the prize winner, their shipping address, and the type of prize being delivered. It also captures additional information like phone number for contact and the method of shipping. This form might be used in a scenario where a company is hosting a promotional event and needs to collect data on the winners of the prizes.
To avoid duplication, the form should only be filled out once per prize winner. It is also assumed that the form will only be filled out by authorized personnel or the prize winner themselves.
</thinking>

# promotional_prize_delivery_request - Help Guide
## Purpose
The "promotional_prize_delivery_request" form is used to capture information about prizes that are being delivered to customers after a promotional event.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the name of the prize winner
2. Enter the shipping address of the prize winner
3. Choose the type of prize being delivered
4. Provide a description of the prize
5. Enter the value of the prize
6. Select the shipping method

## Field-by-Field Explanation

* **Name** (`name`, text, required): Enter the name of the prize winner. This is a required field and should match the name of the person who won the prize.
* **Shipping Address** (`shipping_address`, text, required): Enter the shipping address of the prize winner. This will ensure that the prize is delivered to the correct location.
* **Phone** (`phone`, text, optional): Enter the phone number of the prize winner for contact purposes. This is optional, but it will help with communication.
* **Prize Type** (`prize_type`, select_one, required): Choose the type of prize being delivered. This will help with inventory tracking and prize categorization.
* **Prize Description** (`prize_description`, text, optional): Provide a brief description of the prize. This will help with prize tracking and communication with the prize winner.
* **Prize Value** (`prize_value`, number, required): Enter the value of the prize. This is required to accurately track prize inventory and financial records.
* **Shipping Method** (`shipping_method`, select_multiple, required): Choose the shipping method for the prize. This will ensure that the prize is delivered on time and at the right place.

## Tips
* Make sure to enter accurate information to avoid any issues with prize delivery.
* Double-check the prize type to ensure it aligns with the prize description.
* Use the phone number for contact purposes only.
* Use the shipping method to ensure timely and proper delivery.
