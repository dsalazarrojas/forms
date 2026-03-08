# Cake Quote Form - Help Guide
## Purpose
The Cake Quote Form is designed for customers to provide their contact information, event details, cake preferences, and delivery preferences to get a quote for a custom cake order.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your contact information (Full Name, Email Address, and Phone Number).
2. Provide your event details (Event Date and Number of Guests to Serve).
3. Select your preferred cake details (Cake Flavor, Shape, and Frosting Type).
4. Choose your budget range.
5. If applicable, mention any special dietary or allergy requirements.
6. If applicable, describe any custom decorations or design you'd like to have.
7. Select your delivery preference (Delivery or Pickup) and provide the delivery location if applicable.

## Field-by-Field Explanation
* **Full Name** (`full_name`, `text`, required): Enter your full name as you would like it to be printed on the cake.
* **Email Address** (`email`, `email`, required): Enter your email address to contact you with the quote.
* **Phone Number** (`phone`, `text`, required): Enter your phone number for us to contact you with the quote.
* **Event Date** (`event_date`, `date`, required): Enter the date of the event.
* **Number of Guests to Serve** (`number_of_guests`, `number`, required): Enter the number of guests you plan to serve.
* **Preferred Cake Flavor** (`cake_flavor_preference`, `select_one`, required): Choose from the options: Chocolate, Vanilla, Strawberry, Red Velvet, Lemon, or Carrot Cake.
* **Cake Shape** (`cake_shape`, `select_one`, required): Choose from the options: Round, Square, Rectangular, Heart-shaped, or Tiered.
* **Frosting Type** (`frosting_choice`, `select_one`, required): Choose from the options: Buttercream, Cream Cheese, Chocolate Ganache, or Fondant.
* **Budget Range** (`budget_amount`, `select_one`, required): Choose from the options: Under $100, $100 - $250, $250 - $500, $500 - $1000, or $1000+.
* **Special Dietary or Allergy Requirements** (`special_requirements`, `text`, optional): If you have any dietary or allergy requirements, describe them here.
* **Custom Decorations or Design** (`custom_decorations`, `text`, optional): Describe any custom decorations or design you'd like to have.
* **Delivery or Pickup?** (`delivery_pickup`, `select_one`, required): Choose from the options: Delivery or Pickup.
* **Delivery Location** (`delivery_location`, `text`, optional): Enter the address where you'd like the cake to be delivered.
* **Message or Text for Cake** (`cake_message`, `text`, optional): If you have any message or text you'd like to have on the cake, enter it here.
