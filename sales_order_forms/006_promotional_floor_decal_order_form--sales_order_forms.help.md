<thinking>
The form appears to be designed for sales orders, specifically for promotional floor decals. This form likely aims to gather information from customers for custom decal orders, such as artwork type, size, color, and quantity, as well as shipping details. However, there seems to be some redundancy in the field names and labels, which may indicate that some fields are intended to be used as alternatives or for different types of decals. 
</thinking>

# promotional_floor_decal_order_form - Help Guide

## Purpose
This form is designed to collect information for custom floor decals orders, including artwork details, shipping details, and customer contact information.

## How To Complete This Form
1. Fill out the **Order Details** page with the basic order information, including any customer notes.
2. On the **Customer Info** page, enter the customer's contact details.
3. On the **Artwork Selections** page, choose the type and size of the decal and select the color and quantity.
4. On the **Shipping Info** page, fill out the shipping address and select the shipping method (not visible in the YAML).
5. Review the **Order Summary** page to ensure all details are correct before submitting the order.
6. Enter any additional **Customer Notes** on the last page.

## Field-by-Field Explanation

* **Order Details** (`order_details`, text, not required): Enter a brief description of the order.
* **Customer Info** (`customer_info`, text, not required): Enter the customer's name, phone number, and email.
* **Artwork Selections** (`artwork_selections`, text, not required): Choose the type of decal you want to order (Vinyl Sticker, Vinyl Decal, Magnetic Decal, Printed Decal).
* **Artwork Size** (`artwork_size`, select_multiple, not required): Select the size of the decal (2in x 2in, 4in x 4in, 6in x 6in, 8in x 8in).
* **Artwork Color** (`artwork_color`, select_multiple, not required): Select the color(s) of the decal (Red, Blue, Green, Yellow).
* **Artwork Quantity** (`artwork_quantity`, number, not required): Enter the quantity of decal(s) to order.
* **Shipping Name** (`shipping_name`, text, not required): Enter the shipping name.
* **Shipping Address 1** (`shipping_address1`, text, not required): Enter the shipping address line 1.
* **Shipping Address 2** (`shipping_address2`, text, not required): Enter the shipping address line 2.
* **Shipping City** (`shipping_city`, text, not required): Enter the shipping city.
* **Shipping State** (`shipping_state`, text, not required): Enter the shipping state.
* **Shipping Zip** (`shipping_zip`, text, not required): Enter the shipping zip code.
* **Shipping Country** (`shipping_country`, text, not required): Enter the shipping country.
* **Decal Type** (`decal_type`, select_one, not required): Choose the type of decal you want to order (Vinyl Decal, Magnetic Decal, Printed Decal).
* **Decal Size** (`decal_size`, select_multiple, not required): Select the size of the decal (6in x 6in, 8in x 8in, 10in x 10in, 12in x 12in).
* **Decal Quantity** (`decal_quantity`, number, not required): Enter the quantity of decal(s) to order.
* **Customer Notes** (`customer_notes`, text, not required): Enter any additional customer notes.
* **Submit Order** (`submit_order`, text, not required): Review and submit the order.

Note: The form has many fields with similar labels, which may cause confusion. It would be better to re-label or re-design some fields for clarity and consistency.
