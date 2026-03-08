<thinking>

# Game T Shirt Order Form - Help Guide

## Purpose
The Game T Shirt Order Form is designed to collect information for game T shirt orders. It allows users to select their preferred T shirt design, size, color, and other details to make the ordering process efficient and accurate. This form is meant to be filled out by individuals placing orders for game-themed T shirts.

## How To Complete This Form

To complete the Game T Shirt Order Form, follow these steps:

1.  Select your preferred T shirt design from the options provided.
2.  Choose your preferred T shirt size.
3.  Select your preferred T shirt color.
4.  Enter your name.
5.  Provide your email address.
6.  Enter your phone number.
7.  Select your preferred T shirt type.
8.  Enter any custom text or number you'd like on your T shirt.
9.  Enter any custom number you'd like on your T shirt.
10.  Enter the date of the game you will be attending.
11.  Enter the time of the game you will be attending.
12.  Enter your address.
13.  Enter your zip code.
14.  Enter your city.
15.  Enter your state.
16.  Enter any additional notes you'd like to include with your order.
17.  Enter the name of the game you are ordering for.
18.  Enter the date of the game you are ordering for.
19.  Enter the time of the game you are ordering for.
20.  Select your preferred payment method.
21.  Select your preferred payment application.
22.  Enter the price of the T shirt.
23.  Select your payment status.
24.  Enter the ID of the game you are ordering for.

## Field-by-Field Explanation

*   **Game T Shirt Order Form** (`game_t_shirt_order_form`, text, required): This is the title of the form.
*   **Game T-shirt Design** (`game_tshirt_design`, select_one, optional): Select your preferred T shirt design.
    *   Options: Design 1, Design 2, Design 3
*   **T-shirt Size** (`tshirt_size`, select_multiple, optional): Choose your preferred T shirt size. 
    *   Options: Small, Medium, Large
*   **T-shirt Color** (`tshirt_color`, select_one, optional): Select your preferred T shirt color.
    *   Options: Red, Blue, Green
*   **Name** (`name`, text, optional): Enter your name.
*   **Email** (`email`, email, optional): Enter your email address.
*   **Phone** (`phone`, text, optional): Enter your phone number.
*   **T-shirt Type** (`tshirt_type`, select_one, optional): Select your preferred T shirt type.
    *   Options: Raglan, Sleeve
*   **Custom Text** (`custom_text`, text, optional): Enter any custom text you'd like on your T shirt.
*   **Custom Number** (`custom_number`, number, optional): Enter any custom number you'd like on your T shirt.
*   **Date** (`date`, date, optional): Enter the date of the game you will be attending.
*   **Time** (`time`, time, optional): Enter the time of the game you will be attending.
*   **Address** (`address`, text, optional): Enter your address.
*   **Zip** (`zip`, text, optional): Enter your zip code.
*   **City** (`city`, text, optional): Enter your city.
*   **State** (`state`, text, optional): Enter your state.
*   **Note** (`note`, note, optional): Enter any additional notes you'd like to include with your order.
*   **Game Name** (`game_name`, text, optional): Enter the name of the game you are ordering for.
*   **Game Date** (`game_date`, date, optional): Enter the date of the game you are ordering for.
*   **Game Time** (`game_time`, time, optional): Enter the time of the game you are ordering for.
*   **Payment Method** (`payment_method`, select_multiple, optional): Select your preferred payment method.
    *   Options: Credit card, PayPal
*   **Payment App** (`payment_app`, select_multiple, optional): Select your preferred payment application.
    *   Options: Stripe, Square
*   **T-shirt Price** (`t_shirt_price`, number, optional): Enter the price of the T shirt.
*   **Payment Status** (`payment_status`, select_one, optional): Select your payment status.
    *   Options: Paid, Unpaid
*   **Game ID** (`game_id`, number, optional): Enter the ID of the game you are ordering for.

Note: Some fields may not be required as per the provided YAML structure, but they are all included in the help guide for completeness and user understanding.
