<thinking>
This form is used to document and track parking violations. It should only be used by authorized personnel, such as parking enforcement officers. The form is used to gather information about the vehicle that received the parking violation, including its license plate number, color, make, model, year, and owner's contact information. It also captures details about the parking offense, such as the issue date and time, fine amount, and parking garage/meter status. The form will help in issuing and tracking parking tickets effectively. Please fill in the form accurately and completely.</thinking>

# Parking Ticket Form - Help Guide
## Purpose
This form is used to document and track parking violations.

## How To Complete This Form
1.  Select "Yes" or "No" to indicate whether a parking violation was issued.
2.  Enter the vehicle's license plate number.
3.  Enter the vehicle's color.
4.  Describe the parking offense in detail.
5.  Select the issue date for the parking violation.
6.  Select the issue time for the parking violation.
7.  Enter the fine amount to be applied.
8.  Enter the vehicle's make.
9.  Enter the vehicle's model.
10.  Enter the vehicle's year.
11.  Select "Yes" or "No" to indicate the vehicle's color.
12.  Enter the owner's name.
13.  Enter the owner's address.
14.  Enter the owner's phone number.
15.  Enter the owner's email address.
16.  Enter any comments from the officer issuing the fine.
17.  Enter the officer's name.
18.  Enter the officer's ID number.
19.  Select "Yes" or "No" to indicate whether the parking garage is active.
20.  Select "Yes" or "No" to indicate whether the parking meter is active.
21.  Select "Active" or "Inactive" to indicate the issue status of the fine.
22.  Select "Active" or "Inactive" to indicate the parking meter status.
23.  Enter the number of parking hours applied.
24.  Enter the number of parking days applied.
25.  Enter the fine date.

## Field-by-Field Explanation
*   **Issue Parking Violation**: (`parking_ticket_form`, select_one, required) 
    Select "Yes" or "No" to indicate whether a parking violation was issued.
*   **Vehicle License Plate**: (`vehicle_license_plate`, text, required) Enter the vehicle's license plate number.
*   **Vehicle Color**: (`vehicle_color`, text, required) Enter the vehicle's color.
*   **Parking Offense Description**: (`parking_offense_description`, text, required) Describe the parking offense in detail.
*   **Issue Date**: (`issue_date`, date, required) Select the issue date for the parking violation.
*   **Issue Time**: (`issue_time`, time, required) Select the issue time for the parking violation.
*   **Fine Amount**: (`fine_amount`, number, required) Enter the fine amount to be applied.
*   **Vehicle Make**: (`vehicle_make`, text, required) Enter the vehicle's make.
*   **Vehicle Model**: (`vehicle_model`, text, required) Enter the vehicle's model.
*   **Vehicle Year**: (`vehicle_year`, text, required) Enter the vehicle's year.
*   **Vehicle Color**: (`vehicle_color`, select_one, required) Select "Yes" or "No" to indicate the vehicle's color.
*   **Owner Name**: (`owner_name`, text, required) Enter the owner's name.
*   **Owner Address**: (`owner_address`, text, required) Enter the owner's address.
*   **Owner Phone**: (`owner_phone`, text, required) Enter the owner's phone number.
*   **Owner Email**: (`owner_email`, email, required) Enter the owner's email address.
*   **Officer Comments**: (`officer_comments`, text, required) Enter any comments from the officer issuing the fine.
*   **Officer Name**: (`officer_name`, text, required) Enter the officer's name.
*   **Officer ID**: (`officer_id`, text, required) Enter the officer's ID number.
*   **Parking Garage**: (`parking_garage`, select_one, required) Select "Yes" or "No" to indicate whether the parking garage is active.
*   **Parking Area**: (`parking_area`, select_one, required) Select "Yes" or "No" to indicate whether the parking meter is active.
*   **Issue Status**: (`issue_status`, select_one, required) Select "Active" or "Inactive" to indicate the issue status of the fine.
*   **Parking Meter Status**: (`parking_meter_status`, select_one, required) Select "Active" or "Inactive" to indicate the parking meter status.
*   **Parking Hours**: (`parking_hours`, number, required) Enter the number of parking hours applied.
*   **Parking Days**: (`parking_days`, number, required) Enter the number of parking days applied.
*   **Fine Date**: (`fine_date`, date, required) Enter the fine date.
