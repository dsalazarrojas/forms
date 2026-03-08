<thinking>
As I review the form schema, it appears that this is a simple lunch menu pre-order form designed to capture the user's preferences for ordering lunch, including options for sides, drinks, and special requests. The form seems to be intended for users to quickly and easily submit their order preferences, making it ideal for a fast-paced environment like a cafeteria or food court. I do not see any duplication or redundancy in the form fields, and the options provided appear to be sufficient for capturing the necessary information. The form does not require any complex calculations or dependencies between fields, making it straightforward to complete and review. The form's simplicity and ease of use make it accessible to a wide range of users. However, it's worth noting that the "Special Requests" field is a text field, which may be better suited for more detailed descriptions. Considering this field's label, users might expect a more specific option list. Nevertheless, the field can still be utilized for providing any additional information the user deems necessary. </thinking>

# Lunch Menu Pre Order Form - Help Guide
## Purpose
The Lunch Menu Pre Order Form is designed to allow users to quickly and efficiently pre-order their lunch preferences. The form gathers essential details such as sides, drinks, and special requests, making it an ideal tool for busy individuals.

## How To Complete This Form
To complete this form, follow these steps:

1. Review the options for "Select Your Order" and choose one of the available options.
2. If you would like to add any sides, select the options for "Select Your Side" and choose one or more of the available options.
3. If you have a preference for a drink, select the option for "Select Your Drink" and choose one of the available options.
4. In the "Additional Comments" field, type any special requests or additional information you would like to share with the person preparing your order.
5. If you have any specific contact information, such as a phone number or email, you can enter it in the "Email" and "Phone" fields. 
6. Finally, confirm that your order is accurate by reviewing the "Order Total" field, which will display the sum of your selections.
7. Once you have reviewed and verified your order, select "Yes" to submit it, or "No" to cancel.

## Field-by-Field Explanation
* **Select Your Order** (`Select Your Order`, `select_one`, **required: false**): Choose one option to select the main course of your lunch order.
* **Select Your Side** (`Select Your Side`, `select_multiple`, **required: false`): Select one or more of the options for sides to accompany your meal.
* **Select Your Drink** (`Select Your Drink`, `select_one`, **required: false`): Choose one option for your drink preference.
* **Additional Comments** (`Additional Comments`, `note`, **required: false`): Type in any special requests or additional information you would like to include with your order.
* **Special Requests** (`Special Requests`, `text`, **required: false`): If you have any specific requests or additional information, please type them in here.
* **Email** (`Email`, `email`, **required: false`): If you have an email address associated with your order, enter it here.
* **Phone** (`Phone`, `text`, **required: false`): If you would like to provide a phone number for contact purposes, enter it here.
* **Order Total** (`Order Total`, `number`, **required: false`): This field displays the total cost of your order, which you can review before submitting your selection.
* **Submit** (`Submit`, `select_one`, **required: false`): Confirm that your order is accurate and select "Yes" to submit it, or "No" to cancel.
