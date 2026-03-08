# Tip Payment Form - Help Guide
## Purpose
The Tip Payment Form is designed to help users calculate and pay tips for bills. This form allows users to input the base price of a bill and choose a tip percentage or amount to calculate the tip, or simply pay the tip amount.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter the base price of the bill into the "Base Price" field.
2. Choose a tip percentage from the dropdown menu or enter a custom tip amount in the "Tip Amount" field.
3. Click "Calculate Tip" to calculate the total bill with the selected tip.
4. Review the result in the "Result" field.
5. Click "Submit" to submit the form for payment.

## Field-by-Field Explanation
* **Base Price** (`Base Price`, number, required): Enter the total price of the bill without tip.
* **Tip Percentage** (`Tip Percentage`, select_one, optional): Choose from 10%, 15%, or 20% to calculate the tip.
* **Tip Amount** (`Tip Amount`, number, optional): Enter a custom tip amount instead of choosing a percentage.
* **Total Bill** (`Total Bill`, number, optional): This field is populated automatically after you calculate the tip.
* **Tip Payment Form Fields** (`Tip Payment Form Fields`, select_multiple, optional): Select from the fields to populate in the "Result" field.
* **Calculate Tip** (`Calculate Tip`, select_one, required): Calculate the tip based on your selection.
* **Reset** (`Reset`, select_one, required): Reset the form to its original state.
* **Result** (`Result`, text, optional): Review the total bill with the selected tip.
