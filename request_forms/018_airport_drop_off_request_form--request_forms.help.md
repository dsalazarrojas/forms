# Airport Drop Off Request Form - Help Guide
## Purpose

The Airport Drop Off Request Form is used to provide information for airport drop-off services. This includes services such as transporting passengers and their luggage to their desired destination after a flight arrival.

## How To Complete This Form

To complete this form, follow the steps below:

1.  Enter the passenger(s) name as it appears on their boarding pass.
2.  Enter the contact phone number of the person responsible for the drop-off.
3.  Enter the arrival flight number.
4.  Choose the date of arrival.
5.  Select the estimated arrival time.
6.  Enter the drop-off destination address, e.g., hotel name or residential address.
7.  Choose the destination city.
8.  Enter the total number of passengers.
9.  Enter the total number of luggage pieces, including carry-ons.
10.  Select the preferred vehicle type.
11.  If necessary, choose the child or infant seats required.
12.  Choose if a meet and greet service is required.
13.  (Optional) Enter any special instructions or accessibility needs.
14.  Finally, confirm that you understand that drop-off times may vary based on traffic and flight delays.

## Field-by-Field Explanation

*   **Passenger Name** (`passenger_name`, `text`, required): Enter the name of the passenger as it appears on their boarding pass.
*   **Contact Phone Number** (`contact_phone`, `text`, required): Enter your contact phone number so we can get in touch with you if needed.
*   **Arrival Flight Number** (`flight_number`, `text`, required): Enter the arrival flight number for easy identification.
*   **Date of Arrival** (`arrival_date`, `date`, required): Enter the date of arrival in the format mm/dd/yyyy.
*   **Estimated Arrival Time** (`arrival_time`, `time`, required): Select the estimated time of arrival.
*   **Drop-off Details --** (`section_dropoff`, `note`, optional): Add any specific details about your drop-off requirements.
*   **Drop-off Destination Address** (`destination_address`, `text`, required): Enter the exact address where you need to be dropped off.
*   **Destination City** (`destination_city`, `text`, required): Enter the city of destination.
*   **Total Number of Passengers** (`number_of_passengers`, `number`, required): Enter the total number of passengers.
*   **Total Number of Luggage Pieces** (`luggage_count`, `number`, required): Enter the total number of luggage pieces, including carry-ons.
*   **Preferred Vehicle Type** (`vehicle_type_preference`, `select_one`, required): Choose the preferred vehicle type from Sedan, SUV, Van (6+ passengers), or Luxury Vehicle.
*   **Child/Infant Seats Required?** (`infant_seats_required`, `select_one`, required): If you have children or infants, choose the number of seats you need.
*   **Require Meet and Greet Service?** (`meet_and_greet`, `select_one`, required): Choose if you need a meet and greet service.
*   **Special Instructions or Accessibility Needs** (`special_instructions`, `text`, optional): Enter any special instructions or accessibility needs you may have.
*   **I understand that drop-off times may vary based on traffic and flight delays** (`acknowledgment`, `select_one`, required): Confirm that you understand that drop-off times may vary.
