<thinking>
This form is designed to collect customer information for a coffee bean order. The form is divided into several sections, each with its own specific purpose. Section 1 collects customer information, such as name, email, and phone number. Sections 2-3 are for shipping address details and include fields for street address, city, state or province, and ZIP or postal code. Section 4 is for coffee selection, where customers can choose the type of coffee, roast level, origin, grind type, and quantity of coffee. Section 5 is for flavor profile, where customers can select their preferred flavors. Section 6 is for special requests, including dietary restrictions and gift options. Section 7 is for payment method, where customers can choose how they would like to pay.

</thinking>

# Coffee Beans Order Form - Help Guide
## Purpose
This form is designed to collect customer information and preferences for ordering coffee beans. It guides the customer through a step-by-step process of providing their contact information, shipping details, coffee preferences, and payment method.

## How To Complete This Form
To complete this form, follow the steps below:

1. Fill out the customer information section with your full name, email address, and phone number.
2. Enter your shipping address details in the shipping section, including street address, city, state or province, and ZIP or postal code.
3. Select your preferred coffee type, roast level, origin, grind type, and quantity in the coffee selection section.
4. Choose your flavor preferences in the flavor profile section.
5. If applicable, select your dietary restrictions and any special requests in the special requests section.
6. Choose your payment method in the payment method section.
7. Fill out the optional gift message and special instructions fields, if applicable.
8. Review and submit your form.

## Field-by-Field Explanation

* **Full Name** (`customer_name`, `text`, required): This field is for your full name as the customer.
* **Email Address** (`email`, `email`, required): This field is for your email address where you can be reached.
* **Phone Number** (`phone`, `text`, optional): This field is for your phone number where you can be reached.
* **Street Address** (`street_address`, `text`, required): This field is for your street address where you would like your order to be shipped.
* **City** (`city`, `text`, required): This field is for the city of your shipping address.
* **State or Province** (`state_province`, `text`, required): This field is for the state or province of your shipping address.
* **ZIP or Postal Code** (`zip_postal`, `text`, required): This field is for the ZIP or postal code of your shipping address.
* **Country** (`country`, `text`, required): This field is for the country of your shipping address.
* **Coffee Type** (`coffee_type`, `select_one`, required): This field is to select your preferred type of coffee.
* **Roast Level** (`roast_level`, `select_one`, required): This field is to select your preferred roast level.
* **Coffee Origin** (`origin`, `select_one`, required): This field is to select your preferred coffee origin.
* **Grind Type** (`grind_type`, `select_one`, required): This field is to select your preferred grind type.
* **Quantity - pounds** (`quantity_pounds`, `number`, required): This field is to select the quantity of coffee you would like to order.
* **Quantity - number of bags** (`quantity_bags`, `number`, required): This field is to select the number of bags you would like to order.
* **Flavor Notes of Interest** (`flavor_notes`, `select_multiple`, required): This field is to select all flavor notes that interest you.
* **Acidity Preference** (`acidity_preference`, `select_one`, optional): This field is to select your preferred acidity level.
* **Dietary Restrictions** (`dietary_restrictions`, `select_multiple`, optional): This field is to select all dietary restrictions that apply to you.
* **This is a gift** (`gift_option`, `select_one`, optional): This field is to indicate if this order is a gift.
* **Gift Message** (`gift_message`, `text`, optional): This field is for an optional personalized message for the gift.
* **Special Instructions** (`special_instructions`, `text`, optional): This field is for any special requests or preferences.
* **Payment Method** (`payment_method`, `select_one`, required): This field is to select how you would like to pay.
* **Special Requests** (`special_instructions`, `text`, optional): This field is for any additional special requests.
