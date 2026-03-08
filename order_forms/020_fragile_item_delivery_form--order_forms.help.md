<thinking>

This form is designed for fragile item delivery, allowing customers to provide details about the item being delivered, including its value, condition, and insurance information. This form helps streamline the delivery process, ensuring that all relevant details are collected and recorded accurately.

It's essential to note that this form is used by customers to provide information about the delivery, whereas other forms (e.g., delivery staff forms) might be used by delivery staff to record their own experiences and observations during the delivery process.

Before completing this form, ensure that you're authorized to submit this information and that the item is properly packaged and insured for its value.

Please review the form carefully and fill it out accurately to avoid any issues or miscommunication during the delivery process.

</thinking>

# fragile_item_delivery_form - Help Guide
## Purpose
The fragile_item_delivery_form is used by customers to provide essential details about the item being delivered, including its value, condition, and insurance information. This helps ensure accurate and safe delivery.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the item's details, including a brief description, in the **Item Description** field.
2. Specify the item's **Item Value** and **Item Condition** to help the delivery staff understand its worth and fragility.
3. Choose the **Payment Method** (PayPal, Bank Transfer, or Credit/Debit Card) and enter the **Amount** being paid.
4. Select the **Payment Status** (Paid, Pending, or Failed) to indicate the current payment status.
5. Enter the **Delivery Details**, including the **Delivery Date** and **Delivery Time** for the item.
6. Select the **Delivery Status** (On Track, Delayed, or Cancelled) to inform the delivery staff of the item's current status.
7. Choose the **Item Insurance Type** (Full or Partial) and enter the **Item Insurance Value** if applicable.
8. Select whether **Shipping Insurance** is required or not.
9. Finally, ensure both the **Customer Signature** and **Delivery Staff Signature** fields are filled out for record-keeping purposes.

## Field-by-Field Explanation
- **Item Description** (item_description): Enter a detailed description of the item being delivered to ensure it is handled correctly.
  * Type: text
  * Required: false
- **Item Value** (item_value): Specify the item's monetary value to ensure it is properly insured and handled with care.
  * Type: number
  * Required: false
- **Item Condition** (item_condition): Select the item's condition to inform the delivery staff of its fragility and handling requirements.
  * Type: select_one
  * Options: Excellent, Good, Fair, Poor
  * Required: false
- **Payment Method** (payment_method): Choose the payment method used for this delivery (PayPal, Bank Transfer, or Credit/Debit Card).
  * Type: select_one
  * Options: PayPal, Bank Transfer, Credit/Debit Card
  * Required: false
- **Amount** (payment_amount): Enter the monetary amount being paid for this delivery.
  * Type: number
  * Required: false
- **Payment Status** (payment_status): Select the current payment status (Paid, Pending, or Failed).
  * Type: select_one
  * Options: Paid, Pending, Failed
  * Required: false
- **Delivery Details** (delivery_details): Enter the delivery date and time for the item.
  * Type: text
  * Required: false
- **Delivery Status** (delivery_status): Inform the delivery staff of the item's current status (On Track, Delayed, or Cancelled).
  * Type: select_one
  * Options: On Track, Delayed, Cancelled
  * Required: false
- **Delivery Date** (delivery_date): Enter the date the item is to be delivered.
  * Type: date
  * Required: false
- **Delivery Time** (delivery_time): Enter the time the item is to be delivered.
  * Type: time
  * Required: false
- **Delivery Address** (delivery_address): Enter the delivery address for the item.
  * Type: text
  * Required: false
- **Delivery Staff Name** (delivery_staff_name): Enter the name of the delivery staff responsible for this delivery.
  * Type: text
  * Required: false
- **Delivery Staff Contact** (delivery_staff_contact): Enter the contact information for the delivery staff.
  * Type: text
  * Required: false
- **Fragile Item Value** (fragile_item_value): Specify the item's monetary value to ensure it is properly insured and handled with care.
  * Type: number
  * Required: false
- **Fragile Item Insurance Type** (item_insurance_type): Choose the type of insurance required for this item (Full or Partial).
  * Type: select_one
  * Options: Full, Partial
  * Required: false
- **Fragile Item Insurance Value** (item_insurance_value): Enter the item insurance value if applicable.
  * Type: number
  * Required: false
- **Shipping Insurance** (shipping_insurance): Select whether shipping insurance is required or not.
  * Type: select_one
  * Options: True, False
  * Required: false
- **Customer Signature** (customer_signature): Ensure the customer signs this field to confirm their understanding of the delivery details.
  * Type: note
  * Required: false
- **Delivery Staff Signature** (delivery_staff_signature): Ensure the delivery staff signs this field to confirm receipt of the item.
  * Type: note
  * Required: false
