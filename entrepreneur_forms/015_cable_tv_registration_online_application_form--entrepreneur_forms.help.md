# Cable TV Registration Online Application Form - Help Guide
## Purpose
The purpose of this form is to create a new cable TV account. Please fill out the form with accurate and complete information to ensure a successful registration.

## How To Complete This Form

1. Start by filling out the personal details section, which includes your name, email address, phone number, and business information (if applicable).
2. Provide your service address, which is the address where the service will be installed.
3. Choose your preferred installation type and select your desired cable package.
4. If desired, choose any premium channels or equipment you need.
5. Specify the number of TV outlets you will be using.
6. Select any additional services, such as internet or phone, you would like to add.
7. Choose your preferred installation date and time.
8. Select your payment method and confirm that the billing address is the same as the service address.
9. Finally, agree to the terms and conditions and provide any additional services or comments.

## Field-by-Field Explanation

* **Full Name**: (`applicant_full_name`, `text`, required): Enter your legal name as it appears on your identification.
* **Email Address**: (`email_address`, `email`, required): Enter your primary contact email address.
* **Phone Number**: (`phone_number`, `text`, required): Provide your best contact phone number.
* **Business Name**: (`business_name`, `text`, optional): If you are representing a business, enter the name of the business.
* **Business Type**: (`business_type`, `select_one`, required): Select the type of business entity you represent (e.g., Individual residential, Sole proprietorship, Partnership, Corporation, LLC, Non-profit, Government, Other).
* **Service Address**: (`service_address`, `text`, required): Enter the address where the service will be installed.
* **City**: (`service_city`, `text`, required): Enter the city for the service address.
* **State**: (`service_state`, `text`, required): Enter the state for the service address.
* **ZIP Code**: (`service_zip`, `text`, required): Enter the ZIP code for the service address.
* **Installation Type**: (`installation_type`, `select_one`, required): Choose the type of installation you need (e.g., New installation, Transfer existing service, Upgrade current service, Add additional outlets).
* **Cable Package Selection**: (`package_selection`, `select_one`, required): Select your desired cable package (e.g., Basic - 30 channels, Standard - 75 channels, Deluxe - 150 channels, Premium - 250 plus channels, Custom package).
* **Premium Channel Add-ons**: (`premium_channels`, `select_multiple`, optional): If desired, select any premium channels you would like to add (e.g., HBO, Showtime, Starz, Cinemax).
* **Equipment Needed**: (`equipment_needed`, `select_multiple`, optional): If needed, select the equipment you require for your installation (e.g., Cable box HD, DVR recorder, Additional remote, Cable modem, WiFi router).
* **Number of TV Outlets**: (`number_of_tv_outlets`, `number`, required): Specify the number of TV outlets you will be using.
* **Internet Service**: (`internet_service`, `select_one`, optional): If desired, choose to add internet service (e.g., No internet needed, Basic 50 Mbps, Standard 200 Mbps, High-speed 500 Mbps, Gigabit 1000 Mbps).
* **Phone Service**: (`phone_service`, `select_one`, optional): If desired, choose to add phone service (e.g., No phone needed, Basic home phone, Unlimited domestic, Unlimited international).
* **Preferred Installation Date**: (`preferred_installation_date`, `date`, optional): Choose your preferred installation date.
* **Preferred Time Slot**: (`preferred_time_slot`, `select_one`, optional): Choose your preferred time slot for installation (e.g., Morning 8am-12pm, Afternoon 12pm-5pm, Evening 5pm-8pm, No preference).
* **Payment Method**: (`payment_method`, `select_one`, required): Select your preferred payment method (e.g., Credit card, Debit card, Bank draft, Check, Cash).
* **Billing Address Same as Service**: (`billing_address_same`, `select_one`, required): Confirm that the billing address is the same as the service address.
* **Terms and Conditions**: (`terms_and_conditions`, `select_one`, required): Agree to the terms and conditions of service.
* **Additional Services or Comments**: (`additional_services`, `text`, optional): If you have any other services or special requests, enter them here.
