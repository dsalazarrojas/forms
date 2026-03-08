<thinking>
The form purpose and context seem to be related to assessing shipping or logistics information, but it's not entirely clear. To confirm, I'll provide a brief internal reasoning block that explains the form's purpose and checks for relevance and non-duplication.
</thinking>
# land_shipping_assessment_form - Help Guide
## Purpose
This form, "land_shipping_assessment_form", appears to be designed to collect information about land shipping-related assessments. The form might be used in a logistics or freight management context to gather details about shipping services, delivery dates, times, and other relevant information. 

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the Shipping Details page with the required information about the shipment.
2. Indicate whether the shipping service is applicable or not on the Shipping Service page.
3. Select the applicable shipping method(s) on the Shipping Method page.
4. Enter the expected delivery date and time on the Delivery Date and Delivery Time pages, respectively.
5. Provide the shipper's email address on the Shipper Email page.
6. Enter the shipper's phone number on the Shipper Phone page.
7. Add any additional notes about the shipment on the Shipper Notes page.

## Field-by-Field Explanation
### Shipping Details
* **Shipping Details** (`shipping_details`, text, required/optional): Enter a brief description of the shipment, such as its contents or any special requirements.

### Shipping Service
* **Shipping Service** (`shipping_service`, select_one, required/optional): Check whether the shipping service is applicable or not.

### Shipping Method
* **Shipping Method** (`shipping_method`, select_multiple, required/optional): Select one or more shipping methods that will be used for this shipment (e.g., "Yes" for each applicable method).

### Delivery Date
* **Delivery Date** (`delivery_date`, date, required/optional): Enter the expected date of delivery.

### Delivery Time
* **Delivery Time** (`delivery_time`, time, required/optional): Enter the expected time of delivery.

### Shipper Email
* **Shipper Email** (`shipper_email`, email, required/optional): Enter the email address of the shipper.

### Shipper Phone
* **Shipper Phone** (`shipper_phone`, text, required/optional): Enter the phone number of the shipper.

### Shipper Notes
* **Shipper Notes** (`shipper_notes`, note, required/optional): Add any additional notes about the shipment, such as special instructions or requirements.
