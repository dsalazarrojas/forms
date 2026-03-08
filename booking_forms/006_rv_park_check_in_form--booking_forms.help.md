# rv_park_check_in_form - Help Guide
## Purpose
The RV Park Check-in Form is designed to collect essential information from RV park guests for efficient check-in and management of their stay.

## How To Complete This Form
1. Start by filling out the RV Park Details section if you have specific requirements for your RV.
2. Move on to the Guest Information section, which is a required section that needs to be filled out completely.
3. If you have any contact information that you'd like to share with the park staff, you can provide it in the Contact Information section.
4. In the Arrival and Departure section, select your preferred arrival and departure times from the options provided.
5. If you have a preferred check-out time, you can select it in the Check Out Time section.
6. Choose your preferred payment method in the Payment Method section.
7. In the Payment Details section, provide more details about your payment method, such as the amount paid or payment due date.
8. Finally, if you have any additional information about your stay, you can provide it in the Additional Information section.

## Field-by-Field Explanation

* **RV Park Details** (`rv_park_details`, text, optional): This section is for you to provide any specific details about your RV, such as its size or type.
* **Guest Information** (`guest_info`, text, required): This is a required section where you need to provide your name and address for contact purposes.
* **Contact Information** (`contact_info`, text, optional): If you'd like to share your contact information, such as phone number or email, with the park staff, you can do so here.
* **Arrival and Departure** (`arrival_departure`, select_one, not required): Select your preferred arrival and departure times from the options provided.
* **Check Out Time** (`check_out_time`, select_one, not required): Select your preferred check-out time from the options provided.
* **Payment Method** (`payment_method`, select_one, optional): Choose your preferred payment method, such as cash or credit card.
* **Payment Details** (`payment_details`, text, required): This is a required section where you need to provide more details about your payment method, such as the amount paid or payment due date.
* **Additional Information** (`additional_info`, note, optional): If you have any additional comments or details about your stay, you can provide them here.
