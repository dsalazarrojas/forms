# Tip Payment Form - Help Guide
## Purpose
The Tip Payment Form is used to collect information from customers about whether they would like to include a tip with their bill.

## How To Complete This Form

1. To start, select "Yes" or "No" from the "Tip" field. If you select "Yes", you will be asked for a "Tip Amount".
2. Enter a value in the "Bill Subtotal" field with the amount of the bill before taxes.
3. If you selected "Yes" for the "Tip" field, enter a value in the "Tip Amount" field with the amount of the tip.
4. The "Total Amount" field will automatically be populated with the sum of the "Bill Subtotal" and "Tip Amount" fields.
5. Finally, select "Yes" or "No" from the "Calculate Tip" field to confirm whether you want to include the tip in the total.

## Field-by-Field Explanation

* **Bill Subtotal** (`bill_subtotal`, number, required: false): Enter the amount of the bill before taxes.
* **Tip Amount** (`tip_amount`, number, required: false): If you selected "Yes" for the "Tip" field, enter the amount of the tip.
* **Total Amount** (`total_amount`, number, required: false): The sum of the "Bill Subtotal" and "Tip Amount" fields.
* **Tip** (`tip_calculator`, select_multiple, required: false): Select "Yes" to indicate that you would like to include a tip with your bill.
* **Calculate Tip** (`calculate_tip`, select_one, required: false): Select "Yes" to confirm that you want to include the tip in the total.

## Tips

* Make sure to enter the correct amount for the "Bill Subtotal" field.
* If you selected "Yes" for the "Tip" field, enter a reasonable amount for the "Tip Amount" field.
* The "Total Amount" field will automatically be populated with the sum of the "Bill Subtotal" and "Tip Amount" fields.
* Select "Yes" or "No" for the "Calculate Tip" field to confirm your choice.
