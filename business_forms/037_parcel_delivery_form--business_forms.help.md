# parcel_delivery_form - Help Guide
## Purpose
The parcel delivery form is designed to collect information for efficient management and tracking of parcel delivery operations. It covers various aspects of delivery, including contact details, delivery specifics, and payment options.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the **Delivery Address** page with the recipient's address where the parcel will be delivered.
2. On the **Contact Info** page, provide your contact details, including your email address if necessary.
3. Enter your **Contact Name** and **Contact Phone** on the respective pages.
4. If applicable, select the **Delivery Date** and **Delivery Time** for the parcel.
5. Choose the **Package Info** option that best describes the parcel being delivered.
6. Enter any additional **Shipping Details** if necessary.
7. If required, select the relevant **Payment Info** options.
8. Add any relevant **Note** to the parcel delivery.
9. Finally, review and agree to the **Terms and Conditions**.

## Field-by-Field Explanation

* **Delivery Address** (`delivery_address`, text, required): Fill in the recipient's delivery address, including house number, street name, city, state, and postal code.
* **Contact Info** (`contact_info`, email, optional): Provide your contact email address for communication purposes. If you don't have an email, leave this field empty.
* **Contact Name** (`contact_name`, text, required): Enter your name to be associated with the parcel delivery.
* **Contact Phone** (`contact_phone`, text, optional): Enter your phone number for contact purposes. This can be useful for delivery coordination or follow-up communication.
* **Delivery Date** (`delivery_date`, date, optional): Choose the date when the parcel is expected to be delivered. If not known, leave this field empty.
* **Delivery Time** (`delivery_time`, time, optional): Select the time of the day for the parcel delivery. If not applicable, skip this field.
* **Package Info** (`package_info`, select_one, required): Choose the package type from the available options, such as "Package 1" or "Package 2", to describe the parcel being delivered.
* **Shipping Details** (`shipping_details`, text, optional): Enter any additional details about the parcel shipping, such as special handling requirements.
* **Payment Info** (`payment_info`, select_multiple, optional): Select the payment method(s) used for the parcel delivery, if applicable.
* **Note** (`note`, note, optional): Add any relevant note to the parcel delivery for internal reference.
* **Terms and Conditions** (`terms_and_conditions`, text, required): Review and agree to the terms and conditions of the parcel delivery service, as applicable.

## Tips

- Ensure you complete all required fields (e.g., **Delivery Address**, **Contact Name**, **Package Info**) before submitting the form.
- If a field is optional, fill it in only if it's relevant to your parcel delivery operation.
- Use the **Terms and Conditions** field to agree to the terms and conditions of the service, if applicable.
- Review the form carefully before submitting it to avoid errors or missing information.
