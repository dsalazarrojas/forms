# real_estate_sale_declaration_form - Help Guide
## Purpose
This form is designed to capture essential information for real estate sales transactions. It is intended for use by agents and professionals in the real estate industry to declare sales and gather relevant details about the sale.

## How To Complete This Form
To complete this form, simply follow these steps:

1. Enter the contact details of the seller and buyer.
2. Provide the address of the property being sold.
3. Enter the sale price and date of the sale.
4. Indicate the time of the sale (if applicable).
5. Answer whether the buyer and seller have a prior relationship.
6. Specify the type of property being sold.
7. Enter any additional notes from the buyer and seller.
8. Provide the name, phone number, email, and website (if applicable) of the real estate agency involved.

## Field-by-Field Explanation

* **seller_contact** (`seller_contact`, text, required: false): Enter the contact details of the seller.
* **buyer_contact** (`buyer_contact`, text, required: false): Enter the contact details of the buyer.
* **property_address** (`property_address`, text, required: false): Provide the address of the property being sold.
* **sale_price** (`sale_price`, number, required: false): Enter the price of the sale.
* **sale_date** (`sale_date`, date, required: false): Enter the date of the sale.
* **sale_time** (`sale_time`, time, required: false): Enter the time of the sale (if applicable).
* **buyer_seller_relation** (`buyer_seller_relation`, select_one, required: false): Answer whether the buyer and seller have a prior relationship.
* **property_type** (`property_type`, select_one, required: false): Specify the type of property being sold.
* **buyer_contact_note** (`buyer_note`, note, required: false): Enter any additional notes from the buyer.
* **seller_contact_note** (`seller_note`, note, required: false): Enter any additional notes from the seller.
* **real_estate_agency_name** (`real_estate_agency`, text, required: false): Enter the name of the real estate agency involved.
* **real_estate_agency_phone** (`real_estate_agency_phone`, text, required: false): Enter the phone number of the real estate agency.
* **real_estate_agency_email** (`real_estate_agency_email`, email, required: false): Enter the email of the real estate agency.
* **real_estate_agency_website** (`real_estate_agency_website`, text, required: false): Enter the website of the real estate agency (if applicable).
