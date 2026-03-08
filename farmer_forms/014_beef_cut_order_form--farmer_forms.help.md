<thinking>
To avoid duplication and ensure the correct understanding of the form's purpose, I'll provide a brief internal reasoning block to clarify the context and requirements for this "Beef Cut Order Form". The form is designed to gather information from customers who are interested in placing an order for beef products. It is intended for customers who want to specify their preferences for the cut and type of beef they want, as well as their desired packaging and delivery method. The form will guide the customer through selecting their preferences for various aspects of their order, including the type of beef, cut preference, and packaging method. It is also designed to collect demographic information for the customer, such as their name, email, and phone number. The form will help the customer to submit their order and provide any additional information they may need to complete the transaction. This form is part of a larger system for managing orders and providing customer service.
</thinking>

# Beef Cut Order Form - Help Guide
## Purpose
The "Beef Cut Order Form" is a tool for customers to place orders for beef products, specifying their preferences for cut, type, and packaging. This form is designed to guide customers through the ordering process and gather relevant information for order fulfillment.

## How To Complete This Form
1. Fill out the form completely, ensuring all required fields are filled in.
2. Select the type of beef and cut preference that suits your needs.
3. Choose your desired packaging and delivery method.
4. Add any additional notes or instructions for your order.
5. Review and submit your order.

## Field-by-Field Explanation
- **Customer Name** (`customer_name`, `text`, required): Enter your full name as it appears on your identification.
- **Email Address** (`customer_email`, `email`, required): Enter your primary contact email address.
- **Phone Number** (`customer_phone`, `text`, required): Enter your contact phone number for further communication.
- **Shipping or Pickup Address** (`customer_address`, `text`, required): Enter your full shipping or pickup address.
- **Order Date** (`order_date`, `date`, required): Enter the date you would like to receive your order.
- **Beef Type** (`beef_type`, `select_one`, required): Select the type of beef that suits your needs.
- **Animal Weight** (`animal_weight`, `number`, optional): If known, enter the weight of the animal in pounds.
- **Cut Preference** (`cut_preference`, `select_one`, required): Choose the cut of beef you desire.
- **Steak Thickness Preference** (`steak_thickness`, `select_one`, required): Select the preferred thickness for steaks.
- **Roast Size Preference** (`roast_size`, `select_one`, required): Choose the preferred size for roasts.
- **Ground Beef Amount** (`ground_beef_amount`, `select_one`, required): Select the amount of ground beef you want.
- **Ground Beef Fat Ratio** (`ground_beef_fat_ratio`, `select_one`, optional): If desired, choose the preferred ground beef fat ratio.
- **Steak Cuts Desired** (`steak_cuts`, `select_multiple`, required): Select the steak cuts you prefer.
- **Roast Cuts Desired** (`roast_cuts`, `select_multiple`, required): Select the roast cuts you prefer.
- **Additional Cuts** (`additional_cuts`, `select_multiple`, optional): If desired, select additional cuts.
- **Packaging Preference** (`packaging_preference`, `select_one`, required): Choose the packaging preference for your order.
- **Aging Preference** (`aging_preference`, `select_one`, required): Select the aging preference for your beef.
- **Delivery Method** (`delivery_method`, `select_one`, required): Choose the delivery method for your order.
- **Processing Fee Acknowledgment** (`processing_fee`, `select_one`, required): Confirm you understand the processing fee.
- **Deposit Paid** (`deposit_paid`, `select_one`, required): Confirm if the deposit has been paid.
- **Estimated Total** (`estimated_total`, `number`, required): Review the estimated cost based on your order.
- **Special Instructions** (`special_instructions`, `text`, optional): Enter any special instructions for your order.
- **Order Notes** (`order_notes`, `text`, optional): Enter any additional information about your order.
