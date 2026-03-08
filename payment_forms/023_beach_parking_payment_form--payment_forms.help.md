# Beach Parking Payment Form - Help Guide
## Purpose
This form collects information from beach-goers for parking payment purposes.

## How To Complete This Form
1. Fill out the vehicle information section with the actual license plate, state or province, and type of your vehicle.
2. Enter the date and time of parking.
3. Select the parking duration from the available options.
4. Choose the parking zone.
5. Select the parking rate based on the parking duration.
6. Enter the total amount due.
7. Choose the payment method.
8. If you are a season pass holder, select 'True' and enter your season pass number.
9. Select any additional services you may want.
10. Accept the terms and conditions.

## Field-by-Field Explanation
* **Vehicle License Plate** (`vehicle_license_plate`, text, required): Enter the license plate number of your vehicle.
* **Vehicle State or Province** (`vehicle_state`, text, required): Enter the state or province where your vehicle is registered.
* **Vehicle Type** (`vehicle_type`, select_one, required): Select the type of vehicle (Car, SUV, Truck, Motorcycle, RV or Camper, Bus).
* **Parking Date** (`parking_date`, date, required): Enter the date of parking.
* **Arrival Time** (`arrival_time`, time, required): Enter the time of arrival at the beach.
* **Parking Duration** (`parking_duration`, select_one, required): Select the duration of parking (0-2 Hours, 2-4 Hours, 4-8 Hours, Full Day, Overnight, Multi-Day).
* **Parking Zone** (`parking_zone`, select_one, required): Select the parking zone (Zone A - Main Beach, Zone B - North Beach, Zone C - South Beach, Zone D - Overflow, Zone E - VIP).
* **Parking Rate** (`parking_rate`, select_one, required): Select the parking rate based on the parking duration.
* **Total Amount Due** (`total_amount`, number, required): Enter the total amount due.
* **Payment Method** (`payment_method`, select_one, required): Select the payment method (Credit Card, Debit Card, Mobile Pay, Cash at Kiosk, Season Pass).
* **Card Number** (`card_number`, text, optional): Enter the last 4 digits of your credit or debit card number.
* **Cardholder Name** (`cardholder_name`, text, optional): Enter the name on your credit or debit card.
* **Expiry Date** (`expiry_date`, text, optional): Enter the expiry date of your credit or debit card in MM/YY format.
* **Email Address for Receipt** (`email_receipt`, email, required): Enter your email address to receive the receipt.
* **Are You a Season Pass Holder** (`season_pass_holder`, select_one, required): Select 'True' if you are a season pass holder.
* **Season Pass Number** (`season_pass_number`, text, optional): Enter your season pass number if you are a season pass holder.
* **Additional Services** (`additional_services`, select_multiple, optional): Select any additional services you may want (Beach Chair Rental, Umbrella Rental, Locker Rental, Shower Access, None).
* **I Accept Terms and Conditions** (`terms_accepted`, select_one, required): Select 'True' to accept the terms and conditions.
