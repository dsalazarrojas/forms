# Tip Payment Form - Help Guide
## Purpose
The Tip Payment Form is a tool used to calculate the total cost of a meal or service, including the tip.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the original bill price in the "Original Bill" field.
2. Select the desired tip percentage from the "Tip Percent" dropdown menu.
3. Alternatively, you can choose to enter a specific tip amount in the "Tip" field.
4. The "Total" field will automatically be populated with the calculated final amount.

## Field-by-Field Explanation

* **Original Bill** (`bill_amount`, number, required): Enter the original price of the bill.
* **Tip Percent** (`tip_percent`, select, optional): Select a tip percentage from the provided options.
	+ Options: 0%, 10%, 15%, 20%, 25%, 50%
* **Tip** (`tip_amount`, number, optional): Enter a specific tip amount (if you've chosen to do so).
* **Bill Subtotal** (`bill_subtotal`, number, optional): Enter the original bill subtotal. Note: This is usually the total of the food/beverage order.
* **Total** (`total`, number, optional): The automatically calculated final amount, including tip.
* **Tip Payment** (`tip_payment`, number, optional): This field is currently empty as it should be the calculated tip amount, not a field to be filled.
