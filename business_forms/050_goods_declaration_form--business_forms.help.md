<thinking>
This form is intended for businesses to declare goods that are being imported into a country. The form is used to provide essential information about the goods, including the business name, goods description, country of origin, customs clearance number, value of goods, date of importation, time of importation, and other relevant details. This form is typically used for official purposes and may be subject to review and approval by relevant authorities.
</thinking>

# goods_declaration_form - Help Guide
## Purpose
The "Goods Declaration Form" is a document used by businesses to declare goods being imported into a country. It is an essential form for official purposes and helps ensure that all necessary details are provided to relevant authorities.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the name of your business.
2. Provide a detailed description of the goods being imported.
3. Indicate whether the goods are Yes or No to "what_are_the_goods".
4. Specify the country of origin for the goods.
5. (Optional) Indicate whether customs clearance is Yes or No, and if so, provide the clearance number.
6. Enter the value of the goods being imported.
7. Enter the date of importation for the goods.
8. Enter the time of importation for the goods.
9. (Optional) Enter a description of the goods.

## Field-by-Field Explanation
- **what_is_the_business_name** (`text`, required): Enter the name of your business.
- **what_is_the_good_description** (`text`, required): Provide a detailed description of the goods being imported.
- **what_are_the_goods** (`select_multiple`, required): Indicate whether the goods are Yes or No.
- **what_is_the_country_of_origin** (`text`, required): Specify the country of origin for the goods.
- **what_is_the_customs_clearance_number** (`select_one`, required if selected, otherwise optional): If you select "Yes" for "what_are_the_goods", enter the customs clearance number.
- **what_is_the_value_of_goods** (`number`, required): Enter the value of the goods being imported.
- **what_is_the_date_of_importation** (`date`, required): Enter the date of importation for the goods.
- **what_is_the_time_of_importation** (`time`, required): Enter the time of importation for the goods.
- **what_are_the_goods_description** (`text`, optional): Provide a description of the goods, if needed.
