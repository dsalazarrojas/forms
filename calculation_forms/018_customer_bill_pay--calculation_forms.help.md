# Customer Bill Pay - Help Guide
## Purpose
This form is used to input customer billing information and pay bills for customers. 

## How To Complete This Form
To complete this form, follow these steps:
1. Enter the customer's information, including their name, in the **Customer Information** field.
2. Provide the customer's address in the **Address** field.
3. Enter the customer's city in the **City** field.
4. Select whether the customer's state is 'Yes' or 'No' in the **State** field.
5. Enter the customer's zip code in the **Zip** field.
6. Select the payment method for the customer in the **Payment Method** field (if applicable).
7. Enter the payment date in the **Payment Date** field.
8. (Optional) Enter the customer's phone number in the **Phone** field.
9. Enter the customer's email address in the **Email** field.
10. Add any additional notes about the customer's bill in the **Note** field (if applicable).

## Field-by-Field Explanation
* **Customer Information** (`customer_bill_pay_form`, text, required): Enter the customer's name.
* **Address** (`billing_address`, text, required): Enter the customer's address.
* **City** (`billing_city`, text, required): Enter the customer's city.
* **State** (`billing_state`, select_one, required): Select whether the customer's state is 'Yes' or 'No'.
* **Zip** (`billing_zip`, number, required): Enter the customer's zip code.
* **Payment Method** (`payment_method`, select_multiple, optional): Select the payment method for the customer (if applicable).
* **Payment Date** (`payment_date`, date, required): Enter the payment date.
* **Phone** (`customer_phone`, text, optional): Enter the customer's phone number (if applicable).
* **Email** (`customer_email`, email, required): Enter the customer's email address.
* **Note** (`note`, note, optional): Add any additional notes about the customer's bill (if applicable).
