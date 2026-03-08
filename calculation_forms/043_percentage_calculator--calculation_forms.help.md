<thinking>
The purpose of the "Percentage Calculator" form is to calculate a percentage value based on a given base value and percentage value. This form is used in various business scenarios where a percentage value needs to be calculated for a given base amount. For example, calculating a discount percentage on a product price, or finding the percentage change in stock prices. 

The form is designed to be straightforward, with only the base value and percentage value fields required. The base amount field is optional, which means users can fill it in if they want to provide additional context or information. 

There is also a field for the result of the calculation, which will be populated automatically after entering the base value and percentage value. Additionally, a hint field for the result will be displayed to provide context and feedback to the user.

The form will calculate the percentage result by using the base value and percentage value entered by the user, and will display the calculated result in the result field. The form's logic is based on the following formula: (base value * percentage value) / 100.

This form will be useful for anyone who needs to calculate a percentage value for a given base amount, such as business analysts, financial professionals, or anyone who needs to make quick percentage calculations.
</thinking>

# percentage_calculator - Help Guide
## Purpose
The "percentage_calculator" form is designed to calculate a percentage value based on a given base value and percentage value. 

## How To Complete This Form
To use this form, follow these steps:

1. Enter the base value that you want to calculate a percentage for. This is the amount that you want to apply the percentage to.
2. Enter the percentage value that you want to apply to the base value.
3. Leave the base amount field optional, as it is not required.
4. Press the "Calculate" button to get the percentage result.

## Field-by-Field Explanation
* **base_value** (`base_value`, `number`, required): Enter the base value that you want to calculate a percentage for.
* **percentage_value** (`percentage_value`, `number`, required): Enter the percentage value that you want to apply to the base value.
* **base_amount** (`base_amount`, `number`, optional): Enter additional base amount information if needed.
* **percentage_result** (`percentage_result`, `number`, optional): This is the calculated percentage result, which will be populated automatically after entering the base value and percentage value.
* **percentage_result_hint** (`percentage_result_hint`, `text`, optional): A hint field providing context and feedback to the user about the result.

## Tips
* Make sure to enter a valid base value and percentage value to get an accurate percentage result.
* You can leave the base amount field blank if you do not have additional base amount information.
* The calculated percentage result will be displayed in the "percentage_result" field.
