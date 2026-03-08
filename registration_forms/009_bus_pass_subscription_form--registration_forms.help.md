# Bus Pass Subscription Form - Help Guide
## Purpose
The Bus Pass Subscription Form is designed to collect necessary information for bus pass subscription. Please fill out the form to create and purchase a bus pass that suits your needs.

## How To Complete This Form
- Click on "Submit" to proceed with the subscription.

## Field-by-Field Explanation
* **Full Name (Subscriber Name)** (`subscriber_name`, `text`, required): This is your name as it appears on your ID.
* **Email Address** (`subscriber_email`, `email`, required): For digital pass delivery, use your email address to receive your digital bus pass.
* **Phone Number** (`phone_contact`, `text`, required): This is your phone number, which helps us contact you for any updates or verification.
* **Pass Type** (`bus_pass_type`, `select_one`, required): Choose the type of bus pass that best suits your needs:
	+ Adult Standard
	+ Student (ID Required)
	+ Senior (65+)
	+ Veteran
	+ Corporate/Employee
* **Subscription Duration** (`pass_duration`, `select_one`, required): Choose how long you want your pass to be active:
	+ Monthly Pass
	+ Quarterly Pass
	+ Annual Pass (Best Value)
	+ 10-Ride Flex Pass
* **Primary Route of Use** (`primary_commute_route`, `text`, optional): This field helps us with capacity planning, but it's not required for your subscription.
* **Preferred Start Date** (`subscription_start_date`, `date`, required): Choose when you want your pass to become active.
* **Government ID or Student ID Number** (`id_verification_number`, `text`, required): For verification upon inspection, please enter your government ID or student ID number.
* **Photo Consent** (`digital_photo_consent`, `select_one`, required): If you're getting an Annual or Student pass, please indicate that you consent to having your photo taken for the pass:
	+ Yes, I consent
	+ False
* **Payment Method** (`payment_method_choice`, `select_one`, required): Choose your preferred payment method:
	+ Credit/Debit Card
	+ Apple Pay / Google Pay
	+ Direct Debit
	+ Employer Payroll Deduction
* **Terms of Service Agreement** (`terms_agreement`, `select_one`, required): Please agree to the Transit Authority Terms of Service:
	+ I Agree
	+ Other
