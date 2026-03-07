<thinking>
The form is intended for users to generate shipping quotes for shipments. It captures information about the shipper's details, shipping service selection, shipment dimensions, and additional services required.
This form does not appear to be designed for repeat use or for tracking previous quotes, as there are no fields for quote IDs or tracking numbers. It is likely meant for one-off quote generation.
The fields appear to be designed to collect necessary information for shipping quotes, such as shipper details, shipment details, and shipping service options. Each field has a clear and concise label, which should aid in usability.
However, the form does not appear to be fully fleshed out, as some fields are missing descriptions or hints. For example, the `shipping_service` field has a select-one type but no options or description.
</thinking>

# Shipping Quote Form - Help Guide
## Purpose
The Shipping Quote Form is designed to help you generate shipping quotes for shipments. Fill out the form with the shipper's details, shipment dimensions, and additional services required to get an accurate quote.

## How To Complete This Form
1. Fill out the form with the shipper's details, including their name, address, phone number, email, city, province, postal code, and country.
2. Select the shipping service that best suits your needs (Ground, Air, or Other).
3. Enter the weight, length, width, and height of the shipment.
4. Add any additional services required, such as extra handling or special instructions.
5. Review and confirm the quote details, including the shipping quote price and total cost.

## Field-by-Field Explanation

* **Shipping Quote Form** (`shipping_quote_form`, text): Enter a brief description of the shipment, if needed.
* **Shipper Name** (`shipper_name`, text, required): The shipper's name as it should be displayed on the quote.
* **Shipper Address** (`shipper_address`, text, required): The shipper's address, including the street address, apartment number (if applicable), city, and province.
* **Shipper Phone** (`shipper_phone`, text, required): The shipper's phone number for contact purposes.
* **Shipper Email** (`shipper_email`, email, required): The shipper's email address for contact and quote confirmation.
* **Shipper City** (`shipper_city`, text, required): The shipper's city of residence.
* **Shipper Province** (`shipper_province`, text, required): The shipper's province of residence.
* **Shipper Postal Code** (`shipper_postal_code`, text, required): The shipper's postal code (Zip or postal code).
* **Shipper Country** (`shipper_country`, text, required): The shipper's country of residence.
* **Shipping Service** (`shipping_service`, select_one, required): Select the shipping service that best suits your needs (Ground, Air, or Other).
* **Weight** (`weight`, number, required): The weight of the shipment in kilograms or pounds.
* **Length** (`length`, number, required): The length of the shipment in meters or feet.
* **Width** (`width`, number, required): The width of the shipment in meters or feet.
* **Height** (`height`, number, required): The height of the shipment in meters or feet.
* **Shipper Notes** (`shipper_notes`, text, required): Additional comments or instructions for the shipper.
* **Shipper Instructions** (`shipper_instructions`, text, required): Any special instructions for the shipper, such as handling or packaging requirements.
* **Shipping Quote** (`shipping_quote`, text, required): A description of the shipment quote generated.
* **Quote Price** (`quote_price`, number, required): The total cost of the shipping quote.
* **Shipper Date** (`shipper_date`, date, required): The date the shipment is expected to be shipped.
* **Shipper Time** (`shipper_time`, time, required): The time the shipment is expected to be shipped.
* **Shipping Service Cost** (`shipping_service_cost`, number, required): The cost of the selected shipping service.
* **Shipper Additional Service Fee** (`shipper_additional_service_fee`, number, required): Any additional service fees or charges.
* **Shipper Discount** (`shipper_discount`, number, required): Any applicable discounts or promotions.
* **Shipper Total Cost** (`shipper_total_cost`, number, required): The total cost of the shipment, including all applicable fees and charges.
* **Shipper Terms** (`shipper_terms`, text, required): The shipper's terms and conditions of service.
