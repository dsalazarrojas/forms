# Raffle Ticket Form - Help Guide
## Purpose
This form is used to create a raffle ticket with all the necessary information.

## How To Complete This Form
To complete this form, follow these steps:
- Fill in the required fields: raffle_name, raffle_price, raffle_quantity, raffle_draw_date, and raffle_draw_time.
- If you want to add a description, it is optional but recommended. You can enter a short description to provide more context to the raffle ticket.
- If you want to add a prize for the raffle, enter the prize description. Note that this field is optional.
- To add an image to the raffle ticket, you can upload an image file.
- Select a payment gateway to process payments for the raffle. Currently supported payment gateways are Stripe, PayPal, Square, and Authorize.net.
- Enter the email address for payment testing purposes.
- Select the language, color, and background of the form.
- Optionally, you can choose to add a form header and footer.
- If you want to add terms and conditions, you can use the text area below.
- If you want to set up custom JavaScript code, you can do so below.
- Finally, fill in the image upload information if you've uploaded an image. 

## Field-by-Field Explanation
- **Raffle Name** (`raffle_name`, `text`, required): Enter the name of the raffle.
- **Raffle Price** (`raffle_price`, `number`, required): Enter the price of the raffle.
- **Raffle Quantity** (`raffle_quantity`, `number`, required): Enter the quantity of the raffle.
- **Raffle Draw Date** (`raffle_draw_date`, `date`, required): Enter the draw date of the raffle.
- **Raffle Draw Time** (`raffle_draw_time`, `time`, required): Enter the draw time of the raffle.
- **Raffle Description** (`raffle_description`, `text`, optional): Enter a brief description of the raffle.
- **Raffle Prize** (`raffle_prize`, `text`, optional): Enter the description of the prize.
- **Raffle Image** (`raffle_image`, `text`, optional): Upload an image to be displayed on the raffle ticket.
- **Raffle Image URL** (`raffle_image_url`, `text`, optional): Enter the URL of the image if it's hosted somewhere else.
- **Raffle Form Type** (`raffle_form_type`, `select_one`, required): Select the type of raffle form you want to use. Options are Raffle with Image and Description, Raffle with Only Description, Raffle with Image, and Raffle with Only Title.
- **Raffle Payment Gateway** (`raffle_payment_gateway`, `select_multiple`, required): Select one or more payment gateways to process payments for the raffle. Currently supported payment gateways are Stripe, PayPal, Square, and Authorize.net.
- **Raffle Payment Test** (`raffle_payment_test`, `email`, required): Enter the email address for payment testing purposes.
- **Raffle User** (`raffle_user`, `text`, required): Enter your username.
- **Raffle Form Language** (`raffle_form_language`, `select_one`, required): Select the language of the raffle form. Options are English and Spanish.
- **Raffle Form Color** (`raffle_form_color`, `select_one`, required): Select the color of the raffle form. Options are Blue and Red.
- **Raffle Form Background** (`raffle_form_background`, `select_one`, required): Select the background of the raffle form. Options are White and Black.
- **Raffle Form Header** (`raffle_form_header`, `select_one`, optional): Optionally select to add a form header.
- **Raffle Form Footer** (`raffle_form_footer`, `select_one`, optional): Optionally select to add a form footer.
- **Raffle Terms and Conditions** (`raffle_terms_and_conditions`, `note`, optional): Enter the terms and conditions of the raffle.
- **Raffle Image Upload** (`raffle_image_upload`, `text`, optional): Upload the image file if you've selected to add an image.
- **Raffle Image Max Size** (`raffle_image_max_size`, `number`, optional): Set the maximum size of the image. 
- **Raffle Image Min Size** (`raffle_image_min_size`, `number`, optional): Set the minimum size of the image.
- **Raffle Image Width** (`raffle_image_width`, `number`, optional): Set the width of the image.
- **Raffle Image Height** (`raffle_image_height`, `number`, optional): Set the height of the image.
- **Raffle Custom JS** (`raffle_custom_js`, `text`, optional): Enter the custom JavaScript code.
- **Payment Gateways** (`raffle_payment_gateway`, `select_multiple`, optional): Select one or more payment gateways to process payments for the raffle. Currently supported payment gateways are Stripe, PayPal, Square, and Authorize.net.
- **Payment Test Email** (`raffle_payment_test`, `email`, optional): Enter the email address for payment testing purposes.
- **Terms and Conditions** (`raffle_terms_and_conditions`, `note`, optional): Enter the terms and conditions of the raffle.
- **Custom JavaScript** (`raffle_custom_js`, `text`, optional): Enter the custom JavaScript code.
- **Image Upload** (`raffle_image_upload`, `text`, optional): Upload the image file if you've selected to add an image.
- **Image Width** (`raffle_image_width`, `number`, optional): Set the width of the image.
- **Image Height** (`raffle_image_height`, `number`, optional): Set the height of the image.
- **Image Max Size** (`raffle_image_max_size`, `number`, optional): Set the maximum size of the image.
- **Image Min Size** (`raffle_image_min_size`, `number`, optional): Set the minimum size of the image.

## Tips
- Make sure to fill in all the required fields.
- If you've selected to add an image, make sure to upload a valid image file.
- Test the form before submitting it to ensure everything is correct.
- If you're unsure about any field, refer to the field-by-field explanation above.
