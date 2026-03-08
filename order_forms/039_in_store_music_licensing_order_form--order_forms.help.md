# In Store Music Licensing Order Form - Help Guide
## Purpose
This form is used for in-store music licensing, allowing stores to provide their details to music licensing agencies for payment processing and music usage verification.

## How To Complete This Form
- Start by filling out the first page, which requires store details such as store name, email, and address.
- On the following pages, provide music licensing agency details, including their contact information and payment details.
- Finally, select the payment method and status, and confirm your payment terms.

## Field-by-Field Explanation

### Store Details
* **Store Name** (`store_name`, text, required): Enter your store's name as it appears on your business card or sign.
* **Store Email** (`store_email`, email, required): Enter your store's email address.
* **Store Address** (`store_address`, text, required): Enter your store's address.
* **Store Phone** (`store_phone`, text, required): Enter your store's phone number.

### Music Licensing Agency Details
* **Music License Agency** (`music_license_agency`, text, required): Enter the name of your music licensing agency.
* **Agency Phone** (`music_license_agency_phone`, text, required): Enter the agency's phone number.
* **Agency Email** (`music_license_agency_email`, email, required): Enter the agency's email address.
* **Agency Address** (`music_license_agency_address`, text, required): Enter the agency's address.

### Payment Details
* **Payment Method** (`payment_method`, text, required): Select the payment method used (Credit Card, Check, E-transfer, Money Order).
* **Payment Date** (`payment_date`, date, required): Enter the date of payment.
* **Payment Amount** (`payment_amount`, number, required): Enter the amount paid.
* **Payment Status** (`payment_status`, select_one, required): Select the payment status (Online, Offline, In-store).
* **Payment Instrument** (`payment_instrument`, select_one, required): Select the payment instrument (Credit Card, Check, E-transfer, Money Order).
* **Payment Terms** (`payment_terms`, text, required): Enter any additional payment terms or conditions.

### Manager Details
* **Store Manager** (`store_manager`, text, required): Enter your store manager's name.
* **Manager Email** (`manager_email`, email, required): Enter your store manager's email address.
* **Manager Phone** (`manager_phone`, text, required): Enter your store manager's phone number.
* **Manager Address** (`manager_address`, text, required): Enter your store manager's address.

### Consent
* **Consent Date** (`consent_date`, date, required): Enter the date of consent.
* **Music License Terms** (`music_license_terms`, text, required): Read and agree to the music licensing terms.
