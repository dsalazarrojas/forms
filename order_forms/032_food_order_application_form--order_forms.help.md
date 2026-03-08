# Food Order Application Form - Help Guide
## Purpose
This form is used to gather information from customers for food orders for events such as weddings, birthday parties, and corporate events.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your **Customer Name**, **Email**, **Phone**, and **Quantity** fields with your details.
2. Select the type of event you are ordering for (**Event Type**).
3. Choose the types of food and drinks you want to order (**Order Type**). You can select **Food**, **Drinks**, or both.
4. If you have any special requests, provide them in the **Special Request** field.
5. Enter the date and time of your event in the **Event Date** and **Event Time** fields.
6. Enter your event location, including **Address**, **City**, and **State**, and **Zip**.
7. If you have any special instructions or notes, provide them in the **Special Instructions** and **Order Notes** fields.

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, text, required): Enter your name as the customer.
* **Email** (`email`, email, required): Enter your email address.
* **Phone** (`phone`, text, required): Enter your phone number.
* **Event Type** (`event_type`, select_one, required): Select the type of event (e.g., Wedding, Birthday Party, Corporate Event).
* **Order Type** (`order_type`, select_multiple, required): Select the types of food and drinks you want to order (e.g., Food, Drinks, Both).
* **Quantity** (`quantity`, number, required): Enter the quantity of food and drinks you want to order.
* **Message** (`message`, note, optional): Enter any message or special requests.
* **Minimalist List** (`minimalist`, select_one, optional): Select the type of minimalist options you want to order.
* **Special Request** (`special_request`, text, optional): Enter any special requests.
* **Event Date** (`event_date`, date, required): Enter the date of your event.
* **Event Time** (`event_time`, time, required): Enter the time of your event.
* **Address** (`address`, text, required): Enter the address of your event location.
* **City** (`city`, text, required): Enter the city of your event location.
* **State** (`state`, text, required): Enter the state of your event location.
* **Zip** (`zip`, text, required): Enter the zip code of your event location.
* **Special Instructions** (`special_instructions`, text, optional): Enter any special instructions or notes.
* **Order Notes** (`order_notes`, text, optional): Enter any additional order notes.

## Tips

* Make sure to double-check your information before submitting the form to avoid any errors.
* If you have any questions or need assistance, contact the relevant support team.
* This form is intended to provide essential information for processing your food order.
