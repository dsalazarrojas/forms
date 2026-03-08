# Appointment Request Form Once Upon A Child - Help Guide
## Purpose
The form is designed to collect information about items you want to sell, including the seller information, appointment details, and additional information.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide your seller information (seller name, phone number, and email address) in the corresponding fields.
2. Choose your preferred time for the appointment.
3. Enter your preferred date for the appointment.
4. Describe the items you want to sell, including their condition and category.
5. Provide an estimated number of items you want to sell.
6. Add any additional information that may be helpful for the platform's administrators.

## Field-by-Field Explanation
- **Seller Information** (`seller_name`, `text`, required): Enter your name as the seller.
  This field is required to identify you as the seller.
- **Phone Number** (`phone`, `text`, required): Enter your phone number so we can contact you.
  This field is required to contact you for further information.
- **Email Address** (`email`, `email`, required): Enter your email address so we can reach you.
  This field is required to send you updates about your listing.
- **Appointment Details** (`appointment_details`, `note`, required): Add a brief description of your items.
  This field is optional but recommended to provide more context.
- **Preferred Date for Appointment** (`preferred_date`, `date`, required): Choose your preferred date for the appointment.
  This field is required to schedule the appointment.
- **Preferred Time** (`time_preference`, `select_one`, required): Select your preferred time for the appointment.
  This field is required to schedule the appointment.
- **Items You Want to Sell** (`items_to_sell`, `text`, required): Enter a brief description of the items you want to sell.
  This field is required to provide more information about your items.
- **Primary Category** (`item_category`, `select_multiple`, required): Select the primary category of the items you want to sell.
  This field is required to classify your items.
- **Estimated Number of Items** (`quantity_estimate`, `number`, required): Enter an estimated number of items you want to sell.
  This field is optional but recommended to provide more information about your items.
- **Condition of Items** (`items_condition`, `select_one`, required): Select the condition of the items you want to sell.
  This field is required to provide more information about your items.
- **Additional Information** (`additional_info`, `text`, required): Add any additional information that may be helpful for the platform's administrators.
  This field is optional but recommended to provide more context.
