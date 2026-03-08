<thinking>
To prevent duplication, this help guide is intended for internal use only and should not be shared externally. It's a one-time use guide for the event_planner_forms category.
</thinking>

# short_sleeve_t_shirt_order_form - Help Guide
## Purpose
The short_sleeve_t_shirt_order_form is a form used for customers to order t-shirts with various options such as size, color, and design. This form helps customers to provide their contact details, select the required options for their t-shirt, and specify the payment details. 

## How To Complete This Form
To complete the form, follow these steps:

1. Fill in your contact details in the "contact_details" field.
2. Select the options for your t-shirt:
   * "t_shirt_selection" field will be used for selecting whether or not to include the t-shirt.
   * "t_shirt_size" field will be used for selecting the size of the t-shirt.
   * "t_shirt_color" field will be used for selecting the color of the t-shirt.
   * "t_shirt_design_option" field will be used for selecting the design options of the t-shirt.
   * "t_shirt_image_option" field will be used for selecting the image option for the t-shirt.
   * "t_shirt_designer_price" field will be used for specifying the designer's price.
3. Provide your payment details:
   * "payment_gateway" field will be used for selecting the payment gateway.
   * "payment_gateway_fee" field will be used for specifying the payment gateway fee.
4. Add any additional order notes in the "order_notes" field.
5. Enter your email in the "customer_email" field.
6. Enter your phone number in the "customer_phone" field.
7. Specify the quantity of t-shirts you want to order in the "t_shirt_quantity" field.
8. Specify the price of the t-shirt in the "t_shirt_price" field.
9. Upload the t-shirt image in the "t_shirt_image" field.
10. Specify the t-shirt image alt text in the "t_shirt_image_alt" field.
11. Specify the designer's URL in the "t_shirt_designer_url" field.
12. Specify the order total in the "order_total" field.

## Field-by-Field Explanation

* **contact_details** (`contact_details`, `text`, required): Enter your contact details here.
* **t_shirt_selection** (`t_shirt_selection`, `select_one`, required): Select Yes to include the t-shirt or No to exclude it.
* **size** (`t_shirt_size`, `select_one`, required): Select the size of the t-shirt.
* **color** (`t_shirt_color`, `select_multiple`, optional): Select the color of the t-shirt.
* **t_shirt_design_option** (`t_shirt_design_option`, `select_multiple`, optional): Select the design options for the t-shirt.
* **payment_details** (`payment_details`, `text`, optional): Enter your payment details here.
* **payment_gateway** (`payment_gateway`, `select_one`, optional): Select the payment gateway.
* **t_shirt_image** (`t_shirt_image`, `text`, optional): Upload the t-shirt image here.
* **t_shirt_designer** (`t_shirt_designer`, `text`, optional): Enter the t-shirt designer here.
* **order_notes** (`order_notes`, `note`, optional): Add any additional order notes here.
* **customer_email** (`customer_email`, `email`, optional): Enter your email address here.
* **customer_phone** (`customer_phone`, `text`, optional): Enter your phone number here.
* **quantity** (`t_shirt_quantity`, `number`, optional): Specify the quantity of t-shirts you want to order.
* **color** (`t_shirt_color`, `select_multiple`, optional): Select the color of the t-shirt.
* **size_color** (`t_shirt_size_color`, `select_multiple`, optional): Select the size and color of the t-shirt.
* **t_shirt_color_option** (`t_shirt_color_option`, `select_multiple`, optional): Select the color option for the t-shirt.
* **t_shirt_design_option** (`t_shirt_design_option`, `select_multiple`, optional): Select the design option for the t-shirt.
* **price** (`t_shirt_price`, `number`, optional): Specify the price of the t-shirt.
* **t_shirt_image_option** (`t_shirt_image_option`, `select_multiple`, optional): Select the image option for the t-shirt.
* **customer_address** (`customer_address`, `text`, optional): Enter your customer address here.
* **t_shirt_image_url** (`t_shirt_image_url`, `text`, optional): Specify the t-shirt image URL here.
* **t_shirt_image_alt** (`t_shirt_image_alt`, `text`, optional): Specify the t-shirt image alt text here.
* **t_shirt_designer_url** (`t_shirt_designer_url`, `text`, optional): Specify the t-shirt designer URL here.
* **order_total** (`order_total`, `number`, optional): Specify the order total here.
* **t_shirt_designer_price** (`t_shirt_designer_price`, `number`, optional): Specify the designer's price here.
* **payment_gateway_fee** (`payment_gateway_fee`, `number`, optional): Specify the payment gateway fee here.
* **t_shirt_image_file** (`t_shirt_image_file`, `text`, optional): Upload the t-shirt image file here.

## Tips
* Please make sure to fill in all required fields.
* Please make sure to select the correct options for the t-shirt.
* Please make sure to specify the correct payment details.
* Please make sure to add any additional order notes.
* Please make sure to enter the correct email and phone number.
* Please make sure to specify the correct quantity and price of the t-shirt.
* Please make sure to upload the correct t-shirt image.
* Please make sure to specify the correct order total.
* Please make sure to specify the correct designer's price and payment gateway fee.
