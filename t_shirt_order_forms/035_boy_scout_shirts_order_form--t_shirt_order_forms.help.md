# Boy Scout Shirts Order Form - Help Guide
## Purpose
The Boy Scout Shirts Order Form is designed to collect information from customers or Boy Scouts (or their parents/guardians) to place an order for Boy Scout shirts. The form guides the user through the process of selecting the necessary fields for their order, such as troop number, order date, scout details, shirt type and size, patches, and delivery method.

## How To Complete This Form
1.  Fill out the required fields in the following order:
    *   Troop Number
    *   Order Date
    *   Scout First Name
    *   Scout Last Name
    *   Scout Rank
    *   Parent or Guardian Name
    *   Parent Phone
    *   Parent Email
    *   Shirt Type
    *   Shirt Size
    *   Sleeve Length
    *   Quantity
    *   Patches Needed
    *   Rush Order
    *   Delivery Method
    *   Subtotal
    *   Tax
    *   Total Amount
    *   Payment Method
2.  Select any additional options you may need, such as patches and name embroidery.
3.  Review your order for accuracy and completeness.

## Field-by-Field Explanation

*   **Troop Number** (`troop_number`, `text`, required): Enter your Boy Scout troop number.
*   **Order Date** (`order_date`, `date`, required): Enter the date of the order.
*   **Scout First Name** (`scout_first_name`, `text`, required): Enter the first name of the scout.
*   **Scout Last Name** (`scout_last_name`, `text`, required): Enter the last name of the scout.
*   **Scout Rank** (`scout_rank`, `select_one`, required): Select the current rank of the scout from the options provided.
*   **Parent or Guardian Name** (`parent_guardian_name`, `text`, required): Enter the full name of the parent or guardian.
*   **Parent Phone** (`parent_phone`, `text`, required): Enter the phone number of the parent or guardian.
*   **Parent Email** (`parent_email`, `email`, required): Enter the email of the parent or guardian for order communications.
*   **Shirt Type** (`shirt_type`, `select_one`, required): Select the type of scout shirt you need from the options provided.
*   **Shirt Size** (`shirt_size`, `select_one`, required): Select the size of the shirt from the options provided.
*   **Sleeve Length** (`sleeve_length`, `select_one`, required): Select the sleeve length of the shirt from the options provided.
*   **Quantity** (`quantity`, `number`, required): Enter the number of shirts needed.
*   **Patches Needed** (`patches_needed`, `select_multiple`, required): Select the patches you need from the options provided.
*   **Patch Placement** (`patch_placement`, `text`, optional): Enter special instructions for patches placement.
*   **Rush Order** (`rush_order`, `select_one`, required): Select whether you need a rush order or standard timing.
*   **Delivery Method** (`delivery_method`, `select_one`, required): Select how you will receive your order from the options provided.
*   **Subtotal** (`subtotal`, `text`, required): Review the subtotal of your order.
*   **Tax** (`tax`, `text`, required): Review the tax amount.
*   **Total Amount** (`total_amount`, `text`, required): Review the total amount of your order.
*   **Payment Method** (`payment_method`, `select_one`, required): Select how you will pay for your order from the options provided.
*   **Special Instructions** (`special_instructions`, `text`, optional): Enter any special instructions or notes about your order.
*   **Neckerchief Needed** (`neckerchief_needed`, `select_one`, required): Select whether you need a neckerchief or not.
*   **Neckerchief Slide Needed** (`neckerchief_slide_needed`, `select_one`, required): Select whether you need a neckerchief slide or not.
*   **Belt Needed** (`belt_needed`, `select_one`, required): Select whether you need a scout belt or not.
*   **Belt Size** (`belt_size`, `text`, optional): Enter the waist size in inches.
*   **Other Items Needed** (`other_items`, `text`, optional): Enter any additional uniform items needed.
*   **Embroidery Name** (`embroidery_name`, `text`, optional): Enter the name to be embroidered if needed.
*   **Embroidery Thread Color** (`embroidery_thread_color`, `select_one`, optional): Select the thread color for embroidery from the options provided.
*   **Neckerchief Slide Size** (`other_items`, `text`, optional): Enter any other notes or instructions.
*   **Shipping Address** (`shipping_address`, `text`, optional): Enter the shipping address if needed.

## Tips

*   Make sure to review your order carefully before submitting it.
*   Double-check the patches and patches placement for accuracy.
*   Enter a valid email address for order communications.
*   Enter a valid phone number for contact.
*   Review the payment method and total amount before submitting the order.

Note: This guide is intended to be a general help document and may not cover all possible edge cases or special situations. If you have any questions or concerns, please contact the administrator or customer support.
