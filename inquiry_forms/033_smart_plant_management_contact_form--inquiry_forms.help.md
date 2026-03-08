# smart_plant_management_contact_form - Help Guide
## Purpose
This form is used to collect contact information from users for inquiring about smart plant management services.

## How To Complete This Form
1. Fill in your First Name.
2. Fill in your Last Name.
3. Enter your Email address.
4. Enter your Phone number.
5. Type a Message regarding your inquiry.
6. Select the type of service you are interested in (Service Type).
7. Select the size of the plant you are interested in (Plant Size).
8. Choose a date for the service.
9. (Optional) Choose a time for the service.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required): Your first name.
* **Last Name** (`last_name`, text, required): Your last name.
* **Email** (`email`, email, required): Your email address.
* **Phone** (`phone`, text, required): Your phone number.
* **Message** (`message`, text, required): Type a message regarding your inquiry.
* **Service Type** (`service_type`, select_one, optional): Select the type of service you are interested in.
* **Plant Size** (`plant_size`, select_multiple, optional): Select the size of the plant you are interested in.
* **Service Date** (`service_date`, date, required): Choose a date for the service.
* **Service Time** (`service_time`, time, optional): (Optional) Choose a time for the service.

## Tips
* Please fill in all required fields.
* If you have any attachments or additional information, you can include them in your message.
* For the Service Date field, select a date when you would like to receive the service.
* For the Service Time field, if selected, it will be taken into account when scheduling the service.
