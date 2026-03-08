<thinking>
To create a user-friendly help guide for the "Baby Diaper Delivery Order Form", I will first review the provided YAML fields and identify the form's purpose, how to complete it, and each field's meaning. This process ensures that the form's intent and requirements are understood correctly.

The form's purpose is to collect customer information, delivery details, and diaper order preferences for a baby delivery service. The goal is to make it easy for users to provide necessary information and understand their options.

Now, let's create the help guide using the specified Markdown structure.

# Baby Diaper Delivery Order Form - Help Guide

## Purpose

This form helps us understand your needs for a baby delivery service, ensuring we deliver what you need. Please complete the form with accurate information to get personalized service.

## How To Complete This Form

- Fill out your personal details in **Customer Information**, including your full name, email address, and phone number.
- In **Delivery Information**, provide your delivery address, city, and state/zip code.
- Select your preferred delivery day and time.
- Choose your preferred diaper brand and size.
- Indicate the number of packages and diapers per package you need.
- In **Pricing and Checkout**, review your calculated total amount due.
- Select your preferred payment method and choose whether this is a one-time or recurring order.

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, text, required): Enter your full name to help us address your order correctly.
* **Email Address** (`customer_email`, email, required): We will contact you for order confirmation at this email.
* **Phone Number** (`customer_phone`, text, required): Provide your phone number for delivery coordination and updates.
* **Delivery Address** (`delivery_address`, text, required): Enter your full address where you want the diapers delivered.
* **City** (`city`, text, required): Enter your city for accurate delivery planning.
* **State and ZIP Code** (`state_zip`, text, required): Provide your state and zip code for delivery logistics.
* **Phone Number at Delivery Address** (`phone_at_delivery`, text, optional): If you have a different contact number for delivery coordination, use this.
* **Preferred Delivery Day** (`preferred_delivery_day`, select_one, required): Choose a day for your preferred delivery: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, or Sunday.
* **Preferred Delivery Time** (`preferred_delivery_time`, select_one, optional): Select a time for your preferred delivery, if applicable: Morning (8am-12pm), Afternoon (12pm-5pm), Evening (5pm-8pm), or Anytime.
* **Diaper Brand** (`diaper_brand`, select_one, optional): Choose a preferred diaper brand: Pampers, Huggies, Luvs, Seventh Generation, Other, or No preference.
* **Diaper Size Needed** (`diaper_size`, select_one, required): Select the size diapers you need: Newborn, Size 1, Size 2, Size 3, Size 4, Size 5, or Size 6.
* **Diaper Type** (`diaper_type`, select_one, optional): Choose the type of diapers you prefer: Disposable, Eco-friendly, Overnight, Pull-ups, or Mixed.
* **Number of Packages** (`quantity_packages`, number, required): Enter the number of diaper packages you need.
* **Count per Package** (`quantity_per_package`, number, optional): Specify the count of diapers per package.
* **Unit Price per Package** (`unit_price`, number, required): Review your calculated unit price for each package in dollars.
* **Subtotal** (`subtotal`, number, required): This is calculated based on your preferences.
* **Delivery Fee** (`delivery_fee`, number, optional): Review the calculated delivery fee in dollars.
* **Total Amount Due** (`total_amount`, number, required): Review your final calculated total in dollars.
* **Is This a Recurring Order?** (`recurring_order`, select_one, required): Choose if this is a one-time or recurring order: Yes, weekly, Yes, bi-weekly, Yes, monthly, or No, one-time order.
* **Payment Method** (`payment_method`, select_one, required): Select your preferred payment method: Credit Card, Debit Card, PayPal, Bank Transfer, or Cash on Delivery.
* **Special Instructions** (`special_instructions`, text, optional): Add any special instructions for your order, such as placement details or entry requirements.

## Tips

- Please fill out the form accurately to ensure correct delivery and billing.
- If you have any questions or concerns, contact us for assistance.
- We will review and confirm your order before processing it.
- You will receive an email confirmation once your order is processed.

</thinking>
