# Layover Exit Permission Request Form - Help Guide
## Purpose
The purpose of this form is to request permission for a layover exit during travel. It is meant to be used by travelers who need to leave the plane during a layover. Please ensure that the request is legitimate and not a duplicate.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your travel agency name in the `travel_agency` field.
2. Enter the time you plan to leave the plane during the layover in the `layover_exit_time` field.
3. Provide your flight number in the `flight_number` field.
4. Enter your airline name in the `airline` field.
5. Enter your passenger ID in the `passenger_id` field.
6. Choose the reason for your layover exit from the provided options.
7. Enter your flight departure and arrival times in the `flight_departure_time` and `flight_arrival_time` fields respectively.
8. If you have any travel documents, please attach them in the `travel_documents` field.
9. Select whether your layover exit permission is `Approved` or `Denied`.
10. If your request is denied, please provide a reason in the `reason_for_denial` field.

## Field-by-Field Explanation
### 1. **Travel Agency** (`travel_agency`, text, required)
This field is where you will enter your travel agency name.

### 2. **Layover Exit Time** (`layover_exit_time`, time, required)
Enter the time you plan to leave the plane during the layover.

### 3. **Flight Number** (`flight_number`, text, required)
Enter your flight number to identify the flight you are traveling on.

### 4. **Airline** (`airline`, text, required)
Enter the name of your airline.

### 5. **Passenger ID** (`passenger_id`, text, required)
Enter your passenger ID to verify your identity.

### 6. **Layover Exit Reason** (`reason_for_layover`, select_one, required)
Choose the reason for your layover exit from the provided options.

### 7. **Flight Departure Time** (`flight_departure_time`, date, required)
Enter the departure time of your flight.

### 8. **Flight Arrival Time** (`flight_arrival_time`, date, required)
Enter the arrival time of your flight.

### 9. **Travel Documents** (`travel_documents`, text, optional)
If you have any travel documents, such as boarding passes, visas, or identification cards, you can attach them here.

### 10. **Layover Exit Permission** (`layover_exit_permission`, select_one, required)
Select either `Approved` or `Denied` to indicate whether your layover exit permission is granted or not.

### 11. **Reason for Denial** (`reason_for_denial`, text, optional)
If your layover exit request is denied, please provide a reason for denial.

## Tips

- Make sure to fill out all required fields carefully.
- If your request is denied, ensure that you understand the reason for denial.
- If your layover exit is approved, please be back on board within the specified time.
