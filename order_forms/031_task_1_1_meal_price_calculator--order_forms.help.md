<thinking>...the purpose of this form is to determine the total price of a meal after applying a discount and tax. It is used to calculate the final price of a meal after considering the original price and any applicable discounts or taxes. This form should not be used in cases where the original meal price, discount, or tax rate are not known, as it does not account for these factors. Users should only select "Yes" to the Meal Price Calculator question if they have already calculated the original meal price and wish to apply a discount and tax rate. Users must answer the "Meal Price" question if they choose "Yes" to the Meal Price Calculator question.</thinking>

# Task 1.1 Meal Price Calculator - Help Guide
## Purpose
This form is used to determine the total price of a meal after applying a discount and tax, given the original meal price, discount, and tax rate.

## How To Complete This Form
To use this form, follow these steps:

1.  Determine if a meal price calculator is needed. If so, select "Yes" on the first page.
2.  Enter the meal price, discount, and tax rate on the subsequent pages.
3.  The form will calculate the total price after applying the discount and tax.

## Field-by-Field Explanation
*  **Meal Price Calculator** (`meal_price_calculator`, dropdown, optional): This is a checkbox that determines if you want to use the meal price calculator. Select "Yes" if you have already calculated the original meal price and wish to apply a discount and tax rate.
*  **Meal Price** (`meal_price`, number, optional): Enter the original price of the meal.
*  **Discount** (`discount`, number, optional): Enter the discount rate as a decimal value (e.g. 0.10 for 10% off).
*  **Meal Price After Discount** (`meal_price_after_discount`, number, read-only): This field is automatically calculated based on the meal price and discount rate.
*  **Tax** (`tax`, number, optional): Enter the tax rate as a decimal value (e.g. 0.08 for 8% tax).
*  **Total Price** (`total_price`, number, read-only): This field is automatically calculated based on the meal price, discount, and tax rates.

## Tips
*  Make sure to enter the original meal price and discount rate in decimal format (e.g. 10% as 0.10).
*  Enter the tax rate in decimal format (e.g. 8% as 0.08).
*  This form assumes a single tax rate applies to the entire meal price.
*  The form only calculates the price after applying the discount and tax rate. Other costs such as tips, service charges, etc. are not considered.
