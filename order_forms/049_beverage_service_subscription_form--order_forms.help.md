# Beverage Service Subscription Form - Help Guide
## Purpose
The Beverage Service Subscription Form is designed to collect information for a beverage service subscription. 

## How To Complete This Form
1. Fill in all required fields marked as "required".
2. Select your preferred subscription type and service package from the given options.
3. Choose your preferred service start date.
4. Select your preferred payment method and billing frequency.
5. If applicable, fill in any special requests or dietary restrictions.
6. Confirm that you accept the terms and conditions.
7. If you have any additional comments, fill them in at the end of the form.

## Field-by-Field Explanation

* **Full Name**: `customer_name` (<type>: Text, <required>: True): Enter your first and last name. This field is required.
* **Email Address**: `customer_email` (<type>: Email, <required>: True): We will send subscription updates here. This field is required.
* **Phone Number**: `customer_phone` (<type>: Text, <required>: True): For delivery coordination. This field is required.
* **Company Name**: `company_name` (<type>: Text, <required>: False): Business name if applicable. This field is not required.
* **Service Address**: `service_address` (<type>: Text, <required>: True): Full address for beverage service. This field is required.
* **City**: `city` (<type>: Text, <required>: True): City for service. This field is required.
* **State**: `state` (<type>: Text, <required>: True): State for service. This field is required.
* **ZIP Code**: `postal_code` (<type>: Text, <required>: True): Postal code for service. This field is required.
* **Subscription Type**: `subscription_type` (<type>: Select One, <required>: True): Choose your subscription plan. Select from Weekly Service, Bi-Weekly Service, Monthly Service, Quarterly Service, or On-Demand Service.
* **Service Package**: `service_package` (<type>: Select One, <required>: True): Select your preferred service package. Choose from Basic Service, Standard Service, Premium Service, Enterprise Service, or Custom Package.
* **Beverage Selection**: `beverage_selection` (<type>: Select Multiple, <required>: True): What beverages you would like included. Select from Coffee, Tea, Soft Drinks, Juice, Water, Energy Drinks, Sports Drinks, Milk, Plant-Based Milk, or Other.
* **Equipment Needed**: `equipment_needed` (<type>: Select Multiple, <required>: True): What equipment you need. Select from Coffee Machine, Water Cooler, Refrigerator, Dispenser, Ice Machine, or No Equipment Needed.
* **Number of People Served**: `serving_size` (<type>: Select One, <required>: True): How many people will be served. Choose from 1 to 10 people, 11 to 25 people, 26 to 50 people, 51 to 100 people, or Over 100 people.
* **Service Start Date**: `start_date` (<type>: Date, <required>: True): When should service begin. Select a date.
* **Preferred Service Time**: `service_time` (<type>: Time, <required>: False): What time works best for delivery. This field is not required.
* **Payment Method**: `payment_method` (<type>: Select One, <required>: True): How would you like to pay. Select from Credit Card, Debit Card, Bank Transfer, Invoice, or PayPal.
* **Billing Frequency**: `billing_frequency` (<type>: Select One, <required>: True): How often would you like to be billed. Choose from Weekly, Bi-Weekly, Monthly, Quarterly, or Annually.
* **Special Requests**: `special_requests` (<type>: Text, <required>: False): Any special requirements for your service. This field is not required.
* **Dietary Restrictions**: `dietary_restrictions` (<type>: Text, <required>: False): Any dietary requirements we should know. This field is not required.
* **I Accept the Terms and Conditions**: `terms_accepted` (<type>: Select One, <required>: True): Do you agree to the subscription terms. Select Yes, I Accept or No, I Do Not Accept.
* **Additional Comments**: `additional_comments` (<type>: Text, <required>: False): Any other information about your subscription. This field is not required. 

Please make sure to fill in all required fields to ensure a smooth subscription setup. If you're unsure about any field, refer to this guide for clarity. 

**Tips**

* Double-check your selections and filled-in information before submitting the form.
* Use the given options for select fields to avoid errors.
* If you need any clarification, do not hesitate to reach out to us.
