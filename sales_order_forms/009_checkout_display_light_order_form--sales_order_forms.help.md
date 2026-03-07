<thinking>
This form is designed for creating and submitting new orders for display lights. It captures the necessary information to process an order, including contact details, order specifics, and delivery preferences.
The form has 22 fields, and users should be aware that some fields have specific requirements and options to ensure accurate order submission. This form is intended for internal use within the company, and it's essential to understand the purpose and requirements for each field to avoid any confusion or errors.
The form will be reviewed for relevance and potential duplication before submission.
</thinking>

# Checkout Display Light Order Form - Help Guide
## Purpose
This form is used to create new orders for display lights. It captures essential information to process and fulfill orders correctly.

## How To Complete This Form
1. Fill out the store-specific details, including store name, location, contact person's name, email, phone number, and contact date.
2. Provide date of the order and when it's required to be delivered.
3. Select the type of display light needed and its size specifications.
4. Enter the quantity of lights to order and preferred color temperature.
5. Choose the desired brightness level and power requirements for the display lights.
6. Select the mounting type for the display light.
7. Determine if custom branding is needed and specify the details if so.
8. Decide on professional installation or self-installation.
9. Choose the preferred shipping method.
10. Select the payment method for the order.
11. Add any special delivery or installation notes.
12. Optionally, provide an estimated total cost for the order.
13. Confirm acceptance of terms and conditions.

## Field-by-Field Explanation

* **Store Name** (`store_name`, `text`, required): Enter the name of the retail store.
* **Store Location** (`store_location`, `text`, required): Enter the full address of the store.
* **Contact Name** (`contact_name`, `text`, required): Enter the name of the store contact person.
* **Contact Email** (`contact_email`, `email`, required): Enter the email address for order communications.
* **Contact Phone** (`contact_phone`, `text`, required): Enter the phone number for order inquiries.
* **Order Date** (`order_date`, `date`, required): Enter the date of this order.
* **Required Delivery Date** (`delivery_date`, `date`, required): Enter when you need the order delivered.
* **Display Type** (`display_type`, `select_one`, required): Select the type of display light needed from the available options.
	+ Options: LED Strip Lights, Spotlight Display, Backlit Panel, Neon Sign, Light Box, Custom Display.
* **Display Size** (`display_size`, `select_one`, required): Select the size specifications for the display from the available options.
	+ Options: Small (under 2 ft), Medium (2-4 ft), Large (4-6 ft), Extra Large (over 6 ft), Custom size.
* **Quantity** (`quantity`, `number`, required): Enter the number of display lights to order.
* **Color Temperature** (`color_temperature`, `select_one`, required): Select the preferred light color from the available options.
	+ Options: Warm White (2700K-3000K), Natural White (4000K), Cool White (5000K-6500K), RGB Color Changing, Custom.
* **Brightness Level** (`brightness_level`, `select_one`, required): Select the desired brightness from the available options.
	+ Options: Low (ambient), Medium (standard), High (bright), Dimmable.
* **Power Requirements** (`power_requirements`, `select_one`, required): Select the power specifications from the available options.
	+ Options: Standard 110V, 220V, Battery powered, USB powered, Custom.
* **Mounting Type** (`mounting_type`, `select_one`, required): Select the mounting type from the available options.
	+ Options: Wall mount, Ceiling mount, Floor stand, Counter display, Hanging.
* **Custom Branding** (`custom_branding`, `select_one`, required): Select if custom branding is needed from the available options.
	+ Options: Yes, with logo, Yes, with text, No custom branding.
* **Installation Required** (`installation_required`, `select_one`, required): Select if professional installation is needed from the available options.
	+ Options: Yes, professional installation, No, self-install.
* **Shipping Method** (`shipping_method`, `select_one`, required): Select the preferred shipping method from the available options.
	+ Options: Standard shipping, Express shipping, Overnight shipping, Store pickup.
* **Payment Method** (`payment_method`, `select_one`, required): Select the payment method from the available options.
	+ Options: Credit card, Debit card, Purchase order, Bank transfer, Check.
* **Special Instructions** (`special_instructions`, `text`, optional): Add any special delivery or installation notes.
* **Estimated Order Total** (`order_total`, `number`, optional): Optionally, enter the estimated total cost for the order.
* **Terms and Conditions** (`terms_accepted`, `select_one`, required): Confirm acceptance of terms and conditions.
	+ Options: Yes, I accept, False.
