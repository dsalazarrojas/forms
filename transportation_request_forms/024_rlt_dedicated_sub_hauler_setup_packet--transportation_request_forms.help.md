# rlt_dedicated_sub_hauler_setup_packet_transportation_request_forms - Help Guide
## Purpose
The purpose of this form is to create a transportation request setup packet for dedicated sub-haulers.

## How To Complete This Form
To complete this form:

1. Fill out the Transport Request Form (Page 1) with the relevant details of your transport request.
2. On Page 2, select whether you will transport anything (yes/no) and what type of transport you will do (yes/no).
3. On Page 3, enter your name in the Hauler Name field.
4. On Page 4, input your phone number in the Phone Number field.
5. On Page 5, select the start time of your transport request in the Start Time field.
6. On Page 6, select the end time of your transport request in the End Time field.
7. On Page 7, select the type of vehicle you will use for transport (yes/no) and what type of vehicle it is (yes/no).
8. On Page 8, enter your vehicle's license number in the Vehicle License field.
9. On Page 9, input your address in the Hauler Address field.

## Field-by-Field Explanation
* **Transport Request Form** (`transport_request_form`, `text`, required): This is the main form field where you can input your transport request details.
* **Transport Type** (`transport_type`, `select_multiple`, required): Select whether you will transport anything (yes/no) and what type of transport you will do (yes/no).
* **Hauler Name** (`hauler_name`, `text`, required): Enter your name in this field.
* **Phone Number** (`phone_number`, `text`, required): Input your phone number here.
* **Start Time** (`start_time`, `time`, required): Select the start time of your transport request.
* **End Time** (`end_time`, `time`, required): Select the end time of your transport request.
* **Vehicle Type** (`vehicle_type`, `select_multiple`, required): Select the type of vehicle you will use for transport (yes/no) and what type of vehicle it is (yes/no).
* **Vehicle License** (`vehicle_license`, `text`, required): Enter your vehicle's license number here.
* **Hauler Address** (`hauler_address`, `text`, required): Input your address here.
