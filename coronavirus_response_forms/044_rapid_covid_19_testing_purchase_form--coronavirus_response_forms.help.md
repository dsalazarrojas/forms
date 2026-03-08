<thinking>
To create a user-facing help guide for the "rapid_covid_19_testing_purchase_form" form, we need to understand the form's purpose and the fields included in it. The form is likely used for purchasing rapid COVID-19 testing services, and it asks for various details from the user, such as their appointment time, testing location, payment method, contact information, and personal details like age, height, and income. 

To confirm, the form has 26 fields, each with a specific label, type, and options. The fields can be categorized into three main sections: Appointment, Testing Details, and Contact Information. The form requires the user to select an appointment time, choose a testing location, and provide contact information. The fields that can be filled in are:

- **Patient Appointment** (optional): Select the time of the appointment
- **Select Appointment Time** (optional): Select the time of the appointment
- **Testing Location** (optional): Choose the testing location
- **Payment Method** (optional): Choose the payment method
- **Card Number** (optional): Enter the credit card number
- **CVV** (optional): Enter the Card Verification Value (CVV)
- **Name** (optional): Enter the name
- **Email** (optional): Enter the email
- **Phone** (optional): Enter the phone number
- **Billing Address** (optional): Enter the billing address
- **Shipping Address** (optional): Enter the shipping address
- **ZIP** (optional): Enter the ZIP code
- **Date** (optional): Enter the date
- **Time** (optional): Select the time
- **Age** (optional): Enter the age
- **Height** (optional): Enter the height
- **Gender** (optional): Choose the gender
- **Occupation** (optional): Enter the occupation
- **Income** (optional): Enter the income
- **Marital Status** (optional): Choose the marital status
- **CVV2** (optional): Enter the second CVV
- **Card Number 2** (optional): Enter the second credit card number
- **Name 2** (optional): Enter the second name
- **Email 2** (optional): Enter the second email
- **Phone 2** (optional): Enter the second phone number

The fields are mostly optional, suggesting that the user can fill in whatever information they have, and the system will handle the rest.

</thinking>

# rapid_covid_19_testing_purchase_form - Help Guide
## Purpose
This form is used to purchase rapid COVID-19 testing services. Fill out this form to schedule an appointment and provide necessary contact information for payment and testing.

## How To Complete This Form
1. Select the time of your appointment by choosing a time slot from 8am to 10pm.
2. Choose a testing location from the available options.
3. Select a payment method for your testing services.
4. Fill in any additional contact information if required for payment or testing.

## Field-by-Field Explanation
- **Patient Appointment** (`appointment`, `note`, required: **false**): Enter a note or description of your appointment.
	* This field is optional and can be filled in if you have any specific requests or comments about your appointment.
- **Select Appointment Time** (`appointment_time`, `select_one`, required: **false**): Select a time slot for your appointment.
	* Choose a time between 8am and 10pm for your appointment.
- **Testing Location** (`testing_location`, `select_one`, required: **false**): Choose a location for your testing.
	* Select a testing location from the available options.
- **Payment Method** (`payment_method`, `select_one`, required: **false**): Choose a payment method for your testing services.
	* Select a payment method from the available options.
- **Card Number** (`card_number`, `number`, required: **false**): Enter your credit card number.
	* Enter your credit card number for payment purposes.
- **CVV** (`cvv`, `number`, required: **false**): Enter the Card Verification Value (CVV).
	* Enter the CVV for payment purposes.
- **Name** (`name`, `text`, required: **false**): Enter your name.
	* Enter your name for identification purposes.
- **Email** (`email`, `email`, required: **false**): Enter your email address.
	* Enter your email address for contact purposes.
- **Phone** (`phone`, `text`, required: **false**): Enter your phone number.
	* Enter your phone number for contact purposes.
- **Billing Address** (`billing_address`, `text`, required: **false**): Enter your billing address.
	* Enter your billing address for payment purposes.
- **Shipping Address** (`shipping_address`, `text`, required: **false**): Enter your shipping address.
	* Enter your shipping address for delivery purposes.
- **ZIP** (`zip`, `number`, required: **false**): Enter your ZIP code.
	* Enter your ZIP code for delivery purposes.
- **Date** (`date`, `date`, required: **false**): Enter the date of your appointment.
	* Enter the date of your appointment.
- **Time** (`time`, `time`, required: **false**): Select the time of your appointment.
	* Select the time of your appointment.
- **Age** (`age`, `number`, required: **false**): Enter your age.
	* Enter your age.
- **Height** (`height`, `number`, required: **false**): Enter your height.
	* Enter your height.
- **Gender** (`gender`, `select_one`, required: **false**): Choose your gender.
	* Choose your gender.
- **Occupation** (`occupation`, `text`, required: **false**): Enter your occupation.
	* Enter your occupation.
- **Income** (`income`, `number`, required: **false**): Enter your income.
	* Enter your income.
- **Marital Status** (`marital_status`, `select_one`, required: **false**): Choose your marital status.
	* Choose your marital status.
- **CVV2** (`cvv2`, `text`, required: **false**): Enter the second CVV.
	* Enter the second CVV.
- **Card Number 2** (`card_number2`, `number`, required: **false**): Enter the second credit card number.
	* Enter the second credit card number.
- **Name 2** (`name2`, `text`, required: **false**): Enter the second name.
	* Enter the second name.
- **Email 2** (`email2`, `email`, required: **false**): Enter the second email address.
	* Enter the second email address.
- **Phone 2** (`phone2`, `text`, required: **false**): Enter the second phone number.
	* Enter the second phone number.
