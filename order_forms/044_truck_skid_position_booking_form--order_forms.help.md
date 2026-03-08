# Truck Skid Position Booking Form - Help Guide
## Purpose
This form is designed to capture information for scheduling truck skid positions at specific warehouses. It will ask for details such as arrival and departure times, position selection, truck and skid numbers, and other relevant information for efficient coordination of truck skid positions.

## How To Complete This Form
To complete this form, follow these steps:

1.  Select your schedule arrival time from the options available.
2.  Choose the desired skid position from A, B, or C.
3.  Select the start and end times of your truck skid position from the available options.
4.  Enter the truck number if you have one (optional).
5.  Enter the skid number if you have one (optional).
6.  Choose the warehouse where your truck skid position will be located.
7.  Select the contact person responsible for your truck skid position from the options.

## Field-by-Field Explanation

* **Schedule Arrival**: 
  *   <label>schedule_arrival</label> (`schedule_arrival`, `select_multiple`, optional): 
    Choose your schedule arrival time for the truck skid position.
* **Select Skid Position**:
  *   <label>select_skid_position</label> (`skid_position`, `select_one`, optional): 
    Select the desired skid position for your truck, which can be A, B, or C.
* **Select Start Time**: 
  *   <label>select_start_time</label> (`start_time`, `select_one`, optional): 
    Select the start time for your truck skid position. 
* **Select End Time**: 
  *   <label>select_end_time</label> (`end_time`, `select_one`, optional): 
    Select the end time for your truck skid position. 
*   **Enter Truck Number**: 
    <label>enter_truck_number</label> (`truck_number`, `text`, optional): 
    Enter your truck number if you have one. 
*   **Enter Skid Number**: 
    <label>enter_skid_number</label> (`skid_number`, `text`, optional): 
    Enter your skid number if you have one. 
*   **Warehouse**: 
    <label>select_warehouse</label> (`warehouse`, `select_one`, optional): 
    Choose the warehouse where your truck skid position will be located. 
*   **Contact Person**: 
    <label>select_contact_person</label> (`contact_person`, `select_one`, optional): 
    Select the contact person responsible for your truck skid position.
