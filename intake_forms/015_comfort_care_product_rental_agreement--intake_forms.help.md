# Comfort Care Product Rental Agreement - Help Guide
## Purpose
The Comfort Care Product Rental Agreement form is designed to collect information from renters about their rental needs, preferences, and commitments. This includes providing their personal details, renting period, product selection, and payment information.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your full name, email address, and phone number in the corresponding fields.
2. Provide your delivery address, date of birth for age verification, and rental period details (start and end dates, duration).
3. Select the category of products you need (e.g., mobility, bathroom safety, etc.).
4. If you're renting a specific product (e.g., wheelchair or walker), select the type.
5. Add any additional products you may need.
6. Provide information about the pricing and payment method (credit card, debit card, cash, etc.).
7. Confirm your agreement to be responsible for any damages, return the items in good condition, and understand late return fees.
8. Indicate whether the rental is medically necessary and provide your attending physician's name if applicable.
9. Add any special instructions for delivery or setup.

## Field-by-Field Explanation

* **Renter Full Name** (`renter_name`, text, required): Fill in your full name as per your legal ID.
* **Email Address** (`renter_email`, email, required): Enter your email address for rental confirmation and updates.
* **Phone Number** (`renter_phone`, text, required): Provide your contact number for delivery coordination.
* **Delivery Address** (`renter_address`, text, required): Enter your complete address for product delivery.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth for age verification.
* **Rental Start Date** (`rental_start_date`, date, required): Choose when you need the products.
* **Rental End Date** (`rental_end_date`, date, required): Select when you will return the products.
* **Rental Duration** (`rental_duration`, select_one, required): Choose the total rental period (1-7 days, 1-2 weeks, 2-4 weeks, 1-3 months, 3-6 months, 6+ months).
* **Product Category** (`product_category`, select_one, required): Select the category of products you need (e.g., mobility, bathroom safety, etc.).
* **Wheelchair Type** (`wheelchair_type`, select_one, optional): If renting a wheelchair, select the type.
* **Walker Type** (`walker_type`, select_one, optional): If renting a walker, select the type.
* **Hospital Bed** (`hospital_bed`, select_one, optional): If renting a hospital bed, select the type.
* **Bathroom Equipment** (`bathroom_equipment`, select_multiple, optional): Select any bathroom safety items you need (e.g., shower chair, commode, etc.).
* **Oxygen Equipment** (`oxygen_equipment`, select_one, optional): Select if you need oxygen equipment.
* **Additional Products** (`additional_products`, text, optional): Add any other products you may need.
* **Weekly Rental Fee** (`weekly_rental_fee`, number, required): Fill in the fee per week for the rental.
* **Security Deposit** (`security_deposit`, number, required): Enter the refundable deposit amount.
* **Delivery Fee** (`delivery_fee`, number, required): Fill in the cost for delivery service.
* **Total Amount** (`total_amount`, number, required): Calculate the total rental cost.
* **Payment Method** (`payment_method`, select_one, required): Select the payment method (credit card, debit card, cash, etc.).
* **Damage Responsibility** (`damage_responsibility`, select_one, required): Confirm that you agree to be responsible for any damages.
* **Return Condition Agreement** (`return_condition`, select_one, required): Agree to return the items in good condition.
* **Late Return Policy** (`late_return_policy`, select_one, required): Understand late return fees.
* **Medical Necessity** (`medical_necessity`, select_one, required): Indicate if the rental is medically necessary.
* **Physician Name** (`physician_name`, text, optional): Provide your attending physician's name if applicable.
* **Special Instructions** (`special_instructions`, text, optional): Add any special delivery or setup needs.
