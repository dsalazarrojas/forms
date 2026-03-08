<thinking>...</thinking>

# Car Show Entry Form - Help Guide

## Purpose
The Car Show Entry Form is designed to collect information from participants for a car show event. This form is used to collect contact information, vehicle details, and payment details for each participant.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your participant information, including name, email address, and phone number.
2. Add your vehicle information, including year, make, model, color, and engine type.
3. Select the entry category and vehicle age/era category that best fit your vehicle.
4. Choose whether to participate in judging and if it's your first time at this show.
5. Enter the entry fee amount and payment method.
6. Provide any additional information or comments about your vehicle.

## Field-by-Field Explanation
* **Participant name** (`participant_name`, `text`, required): Enter the name of the participant.
* **Email address** (`participant_email`, `text`, required): Enter the email address of the participant.
* **Phone number** (`participant_phone`, `text`, required): Enter the phone number of the participant.
* **Address** (`address`, `text`, optional): Enter the address of the participant (optional).
* **City** (`city`, `text`, optional): Enter the city of the participant (optional).
* **State and zip code** (`state_zip`, `text`, optional): Enter the state and zip code of the participant (optional).
* **Car club affiliation** (`car_club_affiliation`, `text`, optional): If the participant is affiliated with a car club, enter the name of the club.
* **Vehicle year** (`vehicle_year`, `number`, required): Enter the year of the vehicle.
* **Vehicle make** (`vehicle_make`, `text`, required): Enter the make of the vehicle.
* **Vehicle model** (`vehicle_model`, `text`, required): Enter the model of the vehicle.
* **Vehicle color** (`vehicle_color`, `text`, optional): Enter the color of the vehicle (optional).
* **Body style** (`body_style`, `select_one`, optional): Select the body style of the vehicle (Sedan, Coupe, Convertible, Wagon, SUV, Truck, Hatchback, Minivan, Sports Car, Other).
* **Engine type** (`engine_type`, `text`, optional): Enter the engine type of the vehicle (V8, 4-cylinder, etc.).
* **Vehicle modifications and upgrades** (`vehicle_modifications`, `text`, optional): List any custom work done on the vehicle.
* **Vehicle originality level** (`vehicle_originality`, `select_one`, optional): Select the originality level of the vehicle (Stock Original, Modified, Heavily Customized, Restomod, Replica).
* **Entry category** (`entry_category`, `select_one`, required): Select the category of the vehicle (Classic Cars, Muscle Cars, Imports, Low Riders, Trucks, Motorcycles, Hot Rods, Stock, Custom, Specialty, Open Class).
* **Vehicle age/era category** (`age_group_category`, `select_one`, optional): Select the age/era category of the vehicle (Pre-1950, 1950-1960, 1961-1970, 1971-1980, 1981-1990, 1991-2000, 2001-2010, 2011-Present, Mixed).
* **Participate in judging?** (`judging_participation`, `select_one`, optional): Choose whether to participate in judging (True, False).
* **Is this your first time at this show?** (`first_time_participant`, `select_one`, optional): Choose whether it's your first time at the show (True, False, Not Sure).
* **Entry fee amount** (`entry_fee`, `number`, required): Enter the entry fee amount.
* **Payment method** (`payment_method`, `select_one`, required): Select the payment method (Credit Card, Check, Cash, PayPal, Online Payment).
* **Additional information or comments** (`additional_information`, `text`, optional): Provide any additional information or comments about the vehicle.

## Tips
* Make sure to fill out all required fields.
* Double-check your information for accuracy before submission.
* If you have any issues or concerns, contact the show organizers for assistance.
