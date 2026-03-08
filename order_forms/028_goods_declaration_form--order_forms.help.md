<thinking>...</thinking>

To create a user-facing help guide for the "Goods Declaration Form", we can follow these steps:

1. Identify the form's purpose: This form is used for declaring goods, and the main goal is to provide a clear and concise way for users to input necessary information about their goods, including contact information, goods descriptions, and shipping details.
2. Review the YAML file to determine which fields are required and which ones are optional: From the YAML file, it appears that almost all fields are optional. This implies that the form is intended to be completed based on the user's discretion.
3. Consider the potential for overlap or duplication of information: Upon reviewing the form's fields, there is some overlap between related fields (e.g., HS Code, Harmonized System, and Other HS Code). Users may need guidance on how to handle this.

</thinking>

# Goods Declaration Form - Help Guide
## Purpose
This form is used for declaring goods, requiring users to input necessary information about their goods, including contact information, goods descriptions, and shipping details.
## How To Complete This Form

To complete this form, follow these steps:

1. Review each field and input relevant information about your goods.
2. Be sure to select the correct options for HS Code, Harmonized System, and Shipping Method.
3. Enter any additional information about your goods and shipping.

## Field-by-Field Explanation

* **Goods List** (`goods_list`, text, optional): Enter a list of goods being declared.
* **Contact Information** (`contact_info`, text, optional): Enter your contact information, including name and contact details.
* **Goods Description** (`goods_description`, text, optional): Provide a detailed description of the goods being declared.
* **HS Code** (`hs_code`, select_one, optional): Select the Harmonized System code for your goods (e.g., HS 001, HS 002, HS 003).
* **Other HS Code** (`hs_code_other`, text, optional): Enter an other HS Code if the previous field does not apply.
* **Harmoinized System** (`harmoinized_system`, select_multiple, optional): Select multiple Harmonized System codes for your goods (e.g., HS 001, HS 002, HS 003).
* **Other Harmonized System** (`harmoinized_system_other`, text, optional): Enter an other Harmonized System if the previous field does not apply.
* **Declaration Number** (`declaration_number`, number, optional): Enter a declaration number for your goods.
* **Declaration Date** (`declaration_date`, date, optional): Enter the date of the declaration.
* **Shipping Date** (`shipping_date`, date, optional): Enter the shipping date for your goods.
* **Origin Country** (`origin_country`, text, optional): Enter the country of origin for your goods.
* **Destination Country** (`destination_country`, text, optional): Enter the destination country for your goods.
* **Goods Weight** (`goods_weight`, number, optional): Enter the weight of your goods.
* **Shipping Method** (`shipping_method`, select_one, optional): Select the shipping method (e.g., Sea, Air, Ground).
* **Other Shipping Method** (`shipping_method_other`, text, optional): Enter an other shipping method if the previous field does not apply.
* **Shipping Details** (`shipping_details`, text, optional): Provide additional information about shipping.
* **Customs Clearance** (`customs_clearance`, select_multiple, optional): Select whether customs clearance is required (yes or no).
* **Other Customs Clearance** (`customs_clearance_other`, text, optional): Enter an other customs clearance if the previous field does not apply.
* **Declaration Status** (`declaration_status`, select_one, optional): Select the status of the declaration (e.g., Draft, Final).
* **Other Declaration Status** (`declaration_status_other`, text, optional): Enter an other declaration status if the previous field does not apply.
* **Goods Value** (`goods_value`, number, optional): Enter the value of your goods.
* **Other Goods Value** (`goods_value_other`, text, optional): Enter an other goods value if the previous field does not apply.
* **Shipping Value** (`shipping_value`, number, optional): Enter the shipping value for your goods.
* **Other Shipping Value** (`shipping_value_other`, text, optional): Enter an other shipping value if the previous field does not apply.
* **Additional Information** (`additional_info`, text, optional): Enter any additional information about your goods or shipping.

Note: Please review the form carefully, and ensure you have entered all relevant information before submission.
