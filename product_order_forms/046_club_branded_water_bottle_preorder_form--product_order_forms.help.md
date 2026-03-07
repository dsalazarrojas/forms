<thinking>
This form is designed to collect information from customers for a water bottle preorder for their club. It's intended to capture details about the customer, their preferences for the bottle, and payment and delivery information. The form is divided into several sections, each focusing on a different aspect of the preorder.

To confirm that the form is relevant to your use case, please check if your club is indeed planning to preorder water bottles for its members. If you're not a club officer or member, please don't proceed with filling out the form.

Before starting, make sure to review the form carefully to ensure you're aware of all the required fields and options. Some fields are mandatory, while others offer optional personalization options or additional details.

If you're not sure about any aspect of the form, feel free to ask your club's officer or the form's creators for clarification.
</thinking>

# Club Branded Water Bottle Preorder Form - Help Guide

## Purpose

This form is designed for club members to preorder branded water bottles for their club events or activities. It captures essential information about the customer, bottle preferences, payment, and delivery details.

## How To Complete This Form

1.  Fill out the form with your personal and club information.
2.  Select your preferred bottle color, size, and material.
3.  Specify the number of bottles you want to preorder.
4.  Choose your preferred pickup or delivery method.
5.  Confirm your preorder and provide payment details.

## Field-by-Field Explanation

*  **Your Name** (`customer_name`, text, required): Enter your full name.
*  **Email Address** (`customer_email`, email, required): Enter your contact email.
*  **Phone Number** (`customer_phone`, text, required): Enter your contact phone number.
*  **Club or Organization** (`club_name`, text, required): Enter the name of the club or organization you're with.
*  **-- Water Bottle Selection --** (`section_bottle`, note, required): Select your preferred water bottle color, size, and material.
*   **Bottle Color** (`bottle_color`, select_one, required): Choose a color from the options (Black, Navy blue, White, Stainless steel, Green, Red, Purple, Other).
*   **Bottle Size** (`bottle_size`, select_one, required): Select from (16 oz (small), 24 oz (medium), 32 oz (large), 40 oz (extra large)).
*   **Bottle Material** (`bottle_material`, select_one, required): Choose from (Plastic, Stainless steel, Aluminum, BPA-free plastic).
*  **Number of Bottles** (`quantity`, number, required): Enter the number of bottles you want to preorder.
*  **-- Custom Branding --** (`section_customization`, note, optional): Provide optional custom personalization details.
*   **Personalize with Your Name** (`custom_name`, text, optional): Enter your name to be printed on the bottle.
*   **Custom Text or Logo** (`custom_text`, text, optional): Enter any special text or logo you'd like to add.
*  **-- Pickup and Delivery --** (`section_pickup`, note, optional): Choose your preferred pickup or delivery method.
*   **Pickup or Delivery Method** (`pickup_method`, select_one, required): Select from (Pickup at club event, Pickup at designated location, Ship to address, Local delivery).
*   **Preferred Pickup Location** (`pickup_location`, text, optional): If picking up, specify the location and date.
*   **Shipping Address if Needed** (`delivery_address`, text, optional): If shipping, enter the address where the bottles should be sent.
*   **Expected Pickup or Delivery Date** (`pickup_date`, date, required): Enter the date when you need the bottles.
*  **-- Pricing and Payment --** (`section_pricing`, note, optional): Review your price and payment details.
*   **Price Per Bottle** (`unit_price`, number, required): Review the cost per bottle.
*   **Subtotal** (`subtotal`, number, required): Calculate the total price based on the quantity.
*   **Payment Method** (`payment_method`, select_one, required): Select from (Cash, Check, Credit card, Venmo, PayPal, Other).
*   **Payment Status** (`payment_status`, select_one, required): Choose from (Will pay on pickup, Payment enclosed, Will pay online, Other arrangement).
*   **Special Notes or Requests** (`special_notes`, text, optional): Add any additional information.
*   **I confirm this water bottle preorder** (`preorder_confirmation`, select_one, required): Confirm your preorder by selecting "Yes, confirmed".
*   **Club Officer Name (for records)** (`club_officer_signature`, text, optional): Enter your officer's name for club records.
