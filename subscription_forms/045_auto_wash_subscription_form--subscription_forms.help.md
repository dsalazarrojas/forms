# Auto Wash Subscription Form - Help Guide
## Purpose
The Auto Wash Subscription Form is designed for users to sign up for an auto wash service, providing their contact information, subscription preferences, and vehicle details.

## How To Complete This Form
To complete the form, follow the sequence of pages:

1. Member Details: Enter your name, email address, phone number, and select your membership level.
2. Subscription Plan: Choose your subscription options and payment frequency.
3. Vehicle Enrollment: Enter your vehicle's make and model, license plate number, and color.
4. Payment and Scheduling: Select your preferred payment method and choose your primary location.
5. Accept Subscription Terms: Confirm your subscription agreement and acceptance of terms.

## Field-by-Field Explanation
- **Member Name** (`member_name`, text, required): Enter your full name.
- **Email Address** (`email`, email, required): Enter your email address for digital pass and billing.
- **Phone Number** (`phone`, text, required): Enter your primary contact number.
- **Wash Plan** (`wash_plan`, select_one, required): Select your membership level: Basic Wash, Premium Polish, Ultimate Ceramic, or Fleet Business Plan.
- **Billing Cycle** (`billing_cycle`, select_one, required): Choose your billing frequency: Monthly, Quarterly, or Annually.
- **Vehicle Make and Model** (`vehicle_desc`, text, required): Enter your vehicle's make and model, e.g. Tesla Model 3.
- **License Plate Number** (`plate_number`, text, required): Enter your vehicle's license plate number.
- **Vehicle Color** (`color`, text, required): Enter your vehicle's color.
- **Payment Method** (`payment_method`, select_one, required): Select your preferred payment method: Credit Card, Digital Wallet, or Billing Invoice.
- **Primary Location** (`primary_location`, select_one, required): Choose your primary location: Downtown, Uptown, Suburb North, or Suburb South.
- **Accept Subscription Terms** (`accept_terms`, select_one, required): Confirm you accept the automatic renewal and cancellation policies.
- **Account Notes or Referral** (`account_notes`, text, optional): Mention how you heard about us.
