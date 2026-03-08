<thinking>
To create an effective user-facing help guide for the "Event Gift Claim Form", I need to analyze the provided YAML fields and provide a clear, concise, and practical explanation of each field. This guide should cover the form's purpose, how to complete it, and an explanation of each field, including any hints or instructions to help users navigate the form successfully.
</thinking>

# Event Gift Claim Form - Help Guide

## Purpose
This form is used to claim gifts associated with events. Users need to provide information about the gift, including its details, delivery status, and other relevant information.

## How To Complete This Form
To complete this form, follow these steps:

1. Start on the "Claim Request" page, where you'll be asked to provide your event ID and other basic information.
2. On the "Attendee Information" page, enter your name and email to verify your identity.
3. On the "Gift Details" page, provide the gift's name, type, and value.
4. On the "Shipping Information" page, select whether the gift will be shipped or not.
5. On the final page, review and submit your claim.

## Field-by-Field Explanation

* **Event ID (ID 1)** (`title`, `text`, required): Enter the event ID related to the gift you are claiming.
* **Attendee Name (ID 2)** (`attendee_name`, `text`, required): Type your name as it appears on your attendee badge or registration information.
* **Email (ID 3)** (`attendee_email`, `email`, required): Enter your email address associated with your attendee information.
* **Claim Details (ID 4)** (`claim_details`, `note`, optional): Provide any additional details about your claim, if necessary.
* **Claim Date (ID 5)** (`claim_date`, `date`, required): Select the date you are claiming the gift.
* **Gift Information (ID 6)** (`gift_info`, `note`, optional): Enter any additional information about the gift.
* **Shipping Address (ID 7)** (`shipping_address`, `select_multiple`, required): Choose whether the gift will be shipped or not.
* **Gift Value (ID 8)** (`gift_value`, `number`, required): Enter the monetary value of the gift.
* **Event ID (ID 9)** (`event_id`, `text`, required): Enter the event ID related to the gift you are claiming.
* **Gift Image (ID 10)** (`gift_image`, `text`, required): Upload an image or enter the URL of the gift image.
* **Shipping Information (ID 11)** (`shipping_info`, `note`, optional): Provide any additional shipping information, if necessary.
* **Delivery Date (ID 12)** (`delivery_date`, `date`, required): Select the date the gift is to be delivered.
* **Delivery Status (ID 13)** (`delivery_status`, `select_one`, required): Choose the status of the delivery (Active or Inactive).
* **Gift Claim Status (ID 14)** (`gift_claim_status`, `select_one`, required): Choose the status of the gift claim (Active or Inactive).
* **Shipping Status (ID 15)** (`shipping_status`, `select_one`, required): Choose the status of the shipping (Active or Inactive).
* **Claimer Note (ID 16)** (`claimer_note`, `note`, optional): Leave any additional notes about your claim.
* **Gift Claimer (ID 17)** (`gift_claimer`, `select_one`, required): Choose whether you are the gift claimer or not.
* **Claimer Information (ID 18)** (`claimer_info`, `note`, optional): Provide any additional information about the claimer.
* **Event ID 2 (ID 19)** (`event_id_2`, `text`, required): Enter the event ID related to the gift you are claiming.
* **Gift Name (ID 20)** (`gift_name`, `text`, required): Enter the name of the gift.
* **Gift Type (ID 21)** (`gift_type`, `select_one`, required): Choose the type of gift (Yes or No).
* **Claim Status (ID 22)** (`claim_status`, `select_one`, required): Choose the status of the claim (Active or Inactive).
* **Shipping Type (ID 23)** (`shipping_type`, `select_one`, required): Choose the type of shipping (Yes or No).
* **Gift Status (ID 24)** (`gift_status`, `select_one`, required): Choose the status of the gift (Active or Inactive).
* **Gift Claimed (ID 25)** (`gift_claimed`, `select_one`, optional): Choose whether the gift is claimed or not.
* **Shipping Details (ID 26)** (`shipping_details`, `note`, optional): Enter any additional shipping details.
