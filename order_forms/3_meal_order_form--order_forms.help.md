# 3 Meal Order Form - Help Guide
## Purpose
The 3 Meal Order Form is designed to gather information from customers for a 3 meal order. It includes fields for customer contact information, meal selections, delivery details, and payment method.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your **Customer name** in the designated field.
2. Enter your **Contact phone** number, including the area code.
3. (Optional) Enter your **Contact email** for order confirmation.
4. Enter your **Delivery address** in the format of Street, city, and ZIP/postal code.
5. Select the desired **Delivery date** for the order.
6. Choose your **Preferred delivery time** from the available options.
7. Select one option per meal slot for **Breakfast**, **Lunch**, and **Dinner**.
8. Specify the number of **Breakfast**, **Lunch**, and **Dinner** portions required.
9. Select any **Optional add-ons** that you would like to include with your order.
10. Provide any **Special instructions or dietary requirements** for your order.
11. Enter the total **Order total** (e.g., 29.99).
12. Select the **Payment method** for your order.

## Field-by-Field Explanation
* **Customer Name** (`customer_name`, text, required): Enter your name as the customer placing the order.
* **Contact Phone** (`customer_phone`, phone, required): Enter your phone number including the area code.
* **Contact Email** (`customer_email`, email, optional): Enter your email for order confirmation (if desired).
* **Delivery Address** (`delivery_address`, text, required): Enter the address where the order will be delivered.
* **Delivery Date** (`delivery_date`, date, required): Select the date for delivery.
* **Preferred Delivery Time** (`delivery_time`, time, required): Choose the time for delivery.
* **Breakfast Selection** (`breakfast_choice`, select_one, required): Choose one of the breakfast options (Continental, Full English, Vegan Bowl, or Pancake Stack).
* **Breakfast Quantity** (`breakfast_quantity`, integer, required): Enter the number of breakfast portions required.
* **Lunch Selection** (`lunch_choice`, select_one, required): Choose one of the lunch options (Grilled Chicken Plate, Veggie Wrap, Pasta Primavera, or Sushi Box).
* **Lunch Quantity** (`lunch_quantity`, integer, required): Enter the number of lunch portions required.
* **Dinner Selection** (`dinner_choice`, select_one, required): Choose one of the dinner options (Salmon Fillet, Steak & Vegetables, Buddha Bowl, or Tofu Stir-fry).
* **Dinner Quantity** (`dinner_quantity`, integer, required): Enter the number of dinner portions required.
* **Optional Add-ons** (`add_ons`, select_multiple, optional): Select all the optional add-ons (Extra sauce, Side salad, Fruit cup, Dessert, or Extra protein) you would like to include.
* **Special Instructions or Dietary Requirements** (`special_instructions`, text, optional): Enter any special instructions or dietary requirements for your order.
* **Order Total** (`order_total`, decimal, required): Enter the total price for your order.
* **Payment Method** (`payment_method`, select_one, required): Choose how you will pay for the order (Cash on delivery, Card on delivery, or Online payment (link)).
