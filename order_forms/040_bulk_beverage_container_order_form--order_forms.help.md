# Bulk Beverage Container Order Form - Help Guide

## Purpose

This form is designed to process bulk beverage container orders for your business.

## How To Complete This Form

1. Select the order date and ensure it is accurate and complete.
2. Provide your business details, including name, type, contact person name, email, and phone number.
3. Enter your billing and delivery addresses, including city, state, and zip code.
4. Specify the container type, size, and material type.
5. Choose the quantity of containers needed.
6. Select the unit type (individual, case, etc.).
7. Indicate the intended beverage type and any special requests.
8. Optionally, provide custom branding details or unit prices.
9. Set the requested delivery date and preferred shipping method.
10. Choose a time window for delivery (if applicable).
11. Finally, add any special requests or instructions.

## Field-by-Field Explanation

* **Order Date** (`order_date`, date, required): Enter the date you are placing this order.
* **Business or Establishment Name** (`business_name`, text, required): Enter your business name as it appears on your official documents.
* **Business Type** (`business_type`, select_one, required): Select the type of business you represent (e.g., Restaurant, Bar, Hotel).
* **Contact Person Name** (`contact_name`, text, required): Enter the contact person's full name.
* **Email Address** (`contact_email`, email, required): Enter the email address of the contact person.
* **Phone Number** (`contact_phone`, text, required): Enter the contact person's phone number.
* **Billing Address** (`billing_address`, text, required): Enter your business's street address.
* **City** (`billing_city`, text, required): Enter the city name.
* **State or Province** (`billing_state`, text, required): Enter the state or province name.
* **Zip or Postal Code** (`billing_zip`, text, required): Enter the zip or postal code.
* **Delivery Address** (`delivery_address`, text, required): Enter the address where you would like us to deliver the containers.
* **Delivery City** (`delivery_city`, text, required): Enter the city name for the delivery address.
* **Container Type** (`container_type`, select_one, required): Select the type of container you need (e.g., Plastic Cups, Glass Bottles).
* **Container Size** (`container_size`, select_one, required): Select the size of the container (e.g., Small - 8-12 oz, Large - 24-32 oz).
* **Material Type** (`material_type`, select_one, required): Select the material type of the container (e.g., Plastic, Glass, Aluminum).
* **Quantity** (`quantity_amount`, number, required): Enter the number of containers you need.
* **Unit Type** (`unit_type`, select_one, required): Select the unit type (e.g., Individual Containers, Cases, Pallets).
* **Intended Beverage Type** (`beverage_type`, select_multiple, optional): Select the type of beverage this container is intended for (e.g., Hot Beverages, Cold Beverages).
* **Custom Branding or Printing** (`branding`, select_one, optional): Check if you need custom printing or branding.
* **Branding Details** (`branding_details`, text, optional): Enter any custom branding details, such as logo, colors, or text.
* **Unit Price** (`unit_price`, number, optional): Enter the price per container.
* **Total Estimated Cost** (`total_cost`, number, optional): Enter an approximate total cost.
* **Requested Delivery Date** (`delivery_date`, date, required): Enter the date you need the containers delivered.
* **Preferred Shipping Method** (`shipping_method`, select_one, required): Select the preferred shipping method (e.g., Standard Delivery, Expedited Delivery).
* **Preferred Delivery Time** (`delivery_time`, select_one, optional): Select a time window for delivery (e.g., Morning 8am-12pm, Afternoon 12pm-5pm).
* **Special Requests or Instructions** (`special_requests`, text, optional): Add any special requests or instructions for delivery.

Note to the user: Please ensure you review each field carefully and enter accurate information to ensure a smooth transaction process.
