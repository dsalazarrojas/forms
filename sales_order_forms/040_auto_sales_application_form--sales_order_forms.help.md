# Auto Sales Application Form - Help Guide
## Purpose
This form is designed to gather information from potential car buyers to facilitate the sale process. It is intended to be completed by buyers who wish to purchase a vehicle from the dealership.

## How To Complete This Form
To complete this form, please follow these steps:

1. Start by providing your buyer identification and contact information.
2. Enter your full name, SSN or Tax ID, Date of Birth, Email Address, and Phone Number.
3. Indicate the type of vehicle you are interested in, including the make, model, and year.
4. Specify how you intend to pay for the vehicle (Financing, Cash, or Lease).
5. Provide information about your financial status, including estimated down payment and gross monthly income.
6. If you have a vehicle to trade in, indicate whether you have one available and provide details about it.
7. Authorize the dealership to perform a credit check to facilitate financing.

## Field-by-Field Explanation

* **Buyer Full Name** (`buyer_full_name`, `text`, required): Please enter your complete legal name.
* **SSN or Tax ID** (`ssn_tax_id`, `text`, required): Required for financing applications. Please enter your SSN or Tax ID number.
* **Date of Birth** (`dob`, `date`, required): Enter your date of birth in MM-DD-YYYY format.
* **Email Address** (`email`, `email`, required): Enter your email address for sales updates.
* **Phone Number** (`phone`, `text`, required): Enter your mobile or home phone number.
* **Vehicle of Interest** (`vehicle_interest_header`, `note`, not required): This section is for you to provide details about the vehicle you are interested in.
* **Vehicle Stock Number** (`stock_number`, `text`, not required): If you know the internal dealership ID of the vehicle, please enter it here.
* **Vehicle Make, Model, and Year** (`vehicle_desc`, `text`, required): Describe the vehicle you wish to purchase.
* **Purchase Type** (`purchase_type`, `select_one`, required): Select one of the following options:
	+ Financing
	+ Cash
	+ Lease
* **Estimated Down Payment** (`down_payment`, `number`, required): Enter the amount you can pay upfront.
* **Employer Name** (`employer_name`, `text`, required): Enter the name of your current employer.
* **Gross Monthly Income** (`gross_monthly_income`, `number`, required): Enter your income before taxes.
* **Trade-In Available** (`trade_in_available`, `select_one`, required): Indicate whether you have a vehicle to trade in:
	+ True
	+ False
* **Trade-In Details** (`trade_in_details`, `text`, not required): If you have a vehicle to trade in, provide details about it.
* **Authorize Credit Check** (`authorize_credit_check`, `select_one`, required): Indicate whether you authorize the dealership to verify your credit history:
	+ True
	+ False
