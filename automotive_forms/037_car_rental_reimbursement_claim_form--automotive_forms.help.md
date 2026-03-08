# Car Rental Reimbursement Claim Form - Help Guide

## Purpose
This form is for employees to claim reimbursement for car rental expenses incurred during business trips. It is used to gather information necessary for processing the reimbursement claim.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out your personal details such as First Name, Last Name, Employee ID, Email Address, Phone Number, and Department.
2. Provide details about your trip, including the Trip Start Date, Trip End Date, Destination, and Business Purpose of the trip.
3. Specify the rental car details, including the Rental Company, Pickup Location, Pickup Date, and Return Date.
4. Enter the vehicle class and description of the vehicle rented.
5. Enter the total amount of the base rental cost, insurance cost, fuel cost, and other additional services cost.
6. Specify the payment method used and the currency of the expense.
7. Justify the business purpose of the trip.
8. Attach any relevant receipts and confirm accuracy of the expense report.

## Field-by-Field Explanation

* **Employee Information (Employee ID, First Name, Last Name, Email Address, Phone Number, Department)** (`employee_information`, text, required): Enter your personal details as an employee.
* **Trip Information (Trip Start Date, Trip End Date, Destination)** (`trip_information`, note, required): Enter the dates and destination of your trip.
* **Trip Purpose (Reason for travel)** (`trip_purpose`, text, required): Enter the reason for your business trip.
* **Vehicle Class (Type of vehicle)** (`vehicle_class`, text, required): Enter the type of vehicle rented.
* **Base Rental Cost (Daily rate total)** (`base_rental_cost`, number, required): Enter the total cost of the base rental.
* **Insurance Cost (Coverage fees)** (`insurance_cost`, number, required): Enter the cost of insurance.
* **Fuel Cost (Fuel expenses)** (`fuel_cost`, number, required): Enter the cost of fuel.
* **Taxes and Fees (Tax amount)** (`taxes_and_fees`, number, required): Enter the amount of taxes and fees.
* **Total Amount (Total expense)** (`total_amount`, number, required): Enter the total expense.
* **Currency (Currency type)** (`currency`, select_one, required): Select the currency type of the expense.
* **Payment Method (How did you pay?)** (`payment_method`, select_one, required): Select the method of payment used.
* **Business Justification (Reason for travel)** (`business_justification`, select_one, required): Select the reason for the business trip.
* **Business Justification Details (Elaborate if needed)** (`business_justification_details`, text, required): Enter additional details if necessary.
* **Rental Confirmation Number (Reservation number)** (`rental_confirmation_number`, text, required): Enter the rental confirmation number.
* **Expense Details (Itemized costs)** (`expense_details`, note, required): Enter any additional expense details.
* **Vehicle Description (Make and model)** (`vehicle_description`, text, required): Enter the make and model of the vehicle rented.
* **Rental Company (Name of rental agency)** (`rental_company`, text, required): Enter the name of the rental agency.
* **Pickup Location (Where did you pick up?)** (`pickup_location`, text, required): Enter the location where the vehicle was picked up.
* **Pickup Date (When did you pick up?)** (`pickup_date`, date, required): Enter the date of pickup.
* **Pickup Time (What time?)** (`pickup_time`, time, required): Enter the time of pickup.
* **Return Location (Where did you return?)** (`return_location`, text, required): Enter the location where the vehicle was returned.
* **Return Date (When did you return?)** (`return_date`, date, required): Enter the date of return.
* **Return Time (What time?)** (`return_time`, time, required): Enter the time of return.
* **Reimbursement Method (How to receive payment?)** (`reimbursement_method`, select_one, required): Select the method of reimbursement.
* **Employee Signature Confirmation (Confirm accuracy)** (`employee_signature`, select_one, required): Confirm that the expense report is accurate.
* **Submission Date (Today's date)** (`submission_date`, date, required): Enter the date of submission.
* **Receipt Attached (Do you have receipts?)** (`receipt_attached`, select_one, required): Indicate if receipts are attached.
* **Missing Receipt Explanation (If applicable)** (`missing_receipt_explanation`, text, required): Enter an explanation if receipts are not attached.
* **Mileage Information (Distance driven)** (`mileage_information`, note, required): Enter the total distance driven.
* **Starting Mileage (Odometer at pickup)** (`starting_mileage`, number, required): Enter the odometer reading at pickup.
* **Ending Mileage (Odometer at return)** (`ending_mileage`, number, required): Enter the odometer reading at return.
* **Total Miles Driven (Total distance)** (`total_miles_driven`, number, required): Enter the total distance driven.
* **Business Miles (Miles for business purposes)** (`business_miles`, number, required): Enter the miles driven for business purposes.
* **Documentation (Receipts and attachments)** (`documentation`, note, required): Attach any relevant documents or receipts.
* **Additional Comments (Any other information)** (`additional_comments`, text, required): Enter any additional comments or information.
* **Rental Vehicle Description (Make and model)** (`vehicle_description`, text, optional): Enter a description of the vehicle rented.
* **Vehicle Class Description (Type of vehicle)** (`vehicle_class`, text, optional): Enter a description of the type of vehicle rented.
