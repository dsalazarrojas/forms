# Bill Of Sale Request Form - Help Guide
## Purpose
This form is used to provide a detailed description of the goods being sold and the terms of the transaction. It is essential for establishing a clear understanding between the seller and buyer, ensuring a smooth and secure transaction.

## How To Complete This Form
1.  Fill in the seller's information, including their full name, email address, phone number, and address.
2.  Fill in the buyer's information, including their full name, email address, phone number, and address.
3.  Provide a detailed description of the goods being sold, including the item's category and condition.
4.  Specify the sale price and payment method.
5.  Choose the date of the sale and the delivery/pickup date (if applicable).
6.  Select the return policy and warranty included (if applicable).
7.  Confirm agreement to the terms of the sale.

## Field-by-Field Explanation
* **Seller Full Name**: (`seller_full_name`, `text`, `required`): Enter your complete legal name as the seller.
* **Email Address**: (`seller_email`, `email`, `required`): Enter your contact email address for correspondence.
* **Phone Number**: (`seller_phone`, `text`, `required`): Enter your contact phone number.
* **Address**: (`seller_address`, `text`, `required`): Enter your street address.
* **Buyer Full Name**: (`buyer_full_name`, `text`, `required`): Enter the purchaser's complete legal name.
* **Buyer Email Address**: (`buyer_email`, `email`, `required`): Enter the buyer's contact email address.
* **Buyer Phone Number**: (`buyer_phone`, `text`, `required`): Enter the buyer's contact phone number.
* **Buyer Address**: (`buyer_address`, `text`, `required`): Enter the buyer's street address.
* **Item Description**: (`item_description`, `text`, `required`): Provide a detailed description of the goods being sold.
* **Quantity**: (`item_quantity`, `number`, `required`): Specify the number of items being sold.
* **Item Category**: (`item_category`, `select_one`, `required`): Select the type of goods being sold.
*   Options: Electronics, Furniture, Vehicles, Equipment, Merchandise, Other
* **Item Condition**: (`item_condition`, `select_one`, `required`): Select the current condition of the goods.
*   Options: Brand New, Like New, Excellent, Good, Fair, Used
* **Sale Price**: (`sale_price`, `number`, `required`): Specify the total purchase price in dollars.
* **Payment Method**: (`payment_method`, `select_one`, `required`): Select the method of payment.
*   Options: Cash, Check, Bank Transfer, Credit Card, Other
* **Date of Sale**: (`sale_date`, `date`, `required`): Specify when the transaction occurs.
* **Delivery/Pickup Date**: (`delivery_date`, `date`, `optional`): Specify when the buyer will receive the goods.
*   If not applicable, leave blank or select a date that reflects the transaction's status (e.g., "TBD" for "To Be Determined").
* **Return Policy**: (`return_policy`, `select_one`, `required`): Select the return policy.
*   Options: No Returns, 7 Days, 14 Days, 30 Days, As Is Sale
* **Warranty Included**: (`warranty_included`, `select_one`, `optional`): Select whether the purchase includes a warranty.
*   Options: True, False, Partial
* **I Acknowledge and Agree**: (`acknowledgment`, `select_one`, `required`): Confirm agreement to the terms of the sale.
*   Options: I Agree, I Do Not Agree

## Tips
*   Always review and confirm the accuracy of the information entered.
*   Ensure all required fields are completed before submitting the form.
*   If you need to make changes, please contact the seller or buyer directly.
