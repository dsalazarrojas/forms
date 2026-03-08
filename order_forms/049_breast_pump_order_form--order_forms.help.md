# Breast Pump Order Form - Help Guide
## Purpose
This form is designed to collect information from mothers to be for a breast pump order. The collected information will be used to process the order and ensure timely delivery of the equipment.

## How To Complete This Form
- Please fill out the form in its entirety, providing accurate and complete information.
- Ensure all required fields are filled out.
- If you are unsure about any of the fields, please contact our customer service team for assistance.

## Field-by-Field Explanation
- **Mother Full Name** (`mother_name`, text, required): Your full legal name.
- **Email Address** (`mother_email`, email, required): Enter your email address for order communications.
- **Phone Number** (`mother_phone`, text, required): Enter your contact number.
- **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth.
- **Shipping Address Line 1** (`shipping_address_line1`, text, required): Enter your street address.
- **Shipping Address Line 2** (`shipping_address_line2`, text, optional): Enter apartment, suite, or unit number (if applicable).
- **City** (`shipping_city`, text, required): Enter the city where you live.
- **State** (`shipping_state`, text, required): Enter the state or province where you live.
- **ZIP Code** (`shipping_zip`, text, required): Enter your ZIP or postal code.
- **Baby Due Date** (`baby_due_date`, date, required): Enter the expected date of birth for your baby.
- **Baby Birth Date** (`baby_birth_date`, date, optional): Enter the actual date of birth for your baby (if known).
- **Insurance Provider** (`insurance_provider`, text, required): Enter the name of your insurance company.
- **Member ID** (`insurance_member_id`, text, required): Enter your insurance member ID.
- **Group Number** (`insurance_group_number`, text, optional): Enter your insurance group number (if applicable).
- **Pump Type** (`pump_type_requested`, select_one, required): Select the type of pump you need (Electric Double Pump, Manual Pump, Battery Operated, Hospital Grade Rental, or Not Sure, Need Recommendation).
- **Brand Preference** (`pump_brand_preference`, select_one, required): Select your preferred brand (No Preference, Medela, Spectra, Lansinoh, Elvie, Willow, or Other).
- **Accessories Needed** (`accessories_needed`, select_multiple, required): Select any additional accessories you require (Extra Bottles, Extra Flanges, Storage Bags, Cooler Bag, Nursing Pillow, Breast Pads, Nipple Cream, Cleaning Supplies, or None).
- **Flange Size** (`flange_size`, select_one, required): Select your preferred flange size (24mm Standard, 21mm Small, 27mm Large, 30mm Extra Large, or Not Sure, Need Help).
- **Prescription** (`prescription_attached`, select_one, required): Select whether you have a prescription (Yes, Attached, Will Send Separately, Need Doctor to Send, or Not Required by Insurance).
- **Delivery Urgency** (`delivery_urgency`, select_one, required): Select how soon you need the equipment (Before Baby Arrives, Within 1 Week, Within 2 Weeks, Within 1 Month, or Not Urgent).
- **Lactation Consultation** (`lactation_consultation`, select_one, required): Select whether you would like a lactation consultation (Yes, Interested, No, Not Needed).
- **Special Instructions** (`special_instructions`, text, optional): Enter any special requests or instructions.
- **Terms and Conditions** (`terms_accepted`, select_one, required): Select whether you accept our terms and conditions (I Accept, I Do Not Accept).
