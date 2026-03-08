# online_product_purchase_form - Help Guide
## Purpose
The online product purchase form is used to gather information about online product purchases, including delivery addresses, payment methods, and order notes.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the delivery address of the recipient of the product.
2. Enter the name of the person who will be receiving the delivery.
3. Enter the phone number of the recipient.
4. Enter the email address of the recipient.
5. Enter the name of the product purchased.
6. Enter the price of the product.
7. Choose the payment method (Cash, PayPal, or Bank Transfer).
8. Add any additional order notes.

## Field-by-Field Explanation

### 1. **Delivery Address** (<name> delivery_address, <type> note): 
This field is for the address where the product will be delivered. Enter the street address, apartment number (if applicable), city, state, and zip code.

### 2. **Delivery Name** (<name> delivery_name, <type> text): 
Enter the name of the person receiving the product.

### 3. **Delivery Phone** (<name> delivery_phone, <type> text): 
Enter the phone number of the person receiving the product.

### 4. **Delivery Email** (<name> delivery_email, <type> email): 
Enter the email address of the person receiving the product.

### 5. **Product Purchased** (<name> product_purchased, <type> text): 
Enter the name or description of the product being purchased.

### 6. **Price Purchased** (<name> price_purchased, <type> number): 
Enter the price of the product being purchased.

### 7. **Payment Method** (<name> payment_method, <type> select_one): 
Choose the payment method used for the purchase (Cash, PayPal, or Bank Transfer).

### 8. **Payment Proof** (<name> payment_proof, <type> note): 
This field is not currently used and is likely for future development or testing purposes.

### 9. **Order Notes** (<name> order_notes, <type> note): 
Add any additional notes or comments about the order.

### 10. **Payment Proof** (<name> payment_proof, <type> note) ( duplicate field, not used for now ): 
This field is not used and should be removed or replaced with a more meaningful field. If you need to add more information about payment, please use other fields like "Payment Method" field.
