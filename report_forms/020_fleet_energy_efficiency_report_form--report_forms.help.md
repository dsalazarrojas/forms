<thinking>
This form is used to report on the energy efficiency of a vehicle. It is likely intended for use by fleet managers or other users within an organization to document and track the efficiency of vehicles in their fleet. The purpose of this form is to gather information about a specific vehicle, including its type, id, usage history (start and end dates, start and end times, distance traveled, and fuel used), and efficiency rating.

The form is designed to be completed by a single user, and it is not clear whether it is intended for real-time reporting or for recording historical data. The "vehicle_type" field is labeled twice, which may indicate a duplicate or error in the schema. The "fuel_type" field has a limited set of options, which may be incomplete or outdated.

Please review this form to ensure it aligns with your organization's needs and goals.

</thinking>

# Fleet Energy Efficiency Report Form - Help Guide
## Purpose
The Fleet Energy Efficiency Report Form is a tool to gather information about a vehicle's energy efficiency. Use this form to report on a vehicle's type, id, usage history, and efficiency rating.

## How To Complete This Form
1. Select the "vehicle type" from the options provided.
2. Enter the "vehicle id" if known.
3. Choose the "start date" and "start time" of the vehicle's use.
4. Enter the distance traveled and fuel used.
5. Select the "efficiency rating" based on the provided scale.
6. Enter any notes or observations about the vehicle's efficiency.

## Field-by-Field Explanation
* **General Info** (`general_info`, text, optional): Enter a brief description or note about the vehicle being reported on.
* **Vehicle Type** (`vehicle_type`, select_one, optional): Select the type of vehicle being reported on, such as "Car" or "Truck".
* **Vehicle ID** (`vehicle_id`, text, optional): Enter the vehicle's unique identification number or code.
* **Start Date** (`start_date`, date, optional): Enter the date the vehicle was used.
* **Start Time** (`start_time`, time, optional): Enter the time the vehicle was started.
* **End Date** (`end_date`, date, optional): Enter the date the vehicle was ended.
* **Distance Traveled** (`distance_traveled`, number, optional): Enter the total distance the vehicle traveled.
* **Fuel Used** (`fuel_used`, number, optional): Enter the amount of fuel used during the vehicle's use.
* **Efficiency Rating** (`efficiency_rating`, select_one, optional): Select the vehicle's efficiency rating based on the scale "Excellent", "Good", "Average", or "Poor".
* **Notes** (`notes`, note, optional): Enter any additional comments or observations about the vehicle's efficiency.
* **Fuel Type** (`fuel_type`, select_one, optional): Select the type of fuel used by the vehicle, such as "Gasoline", "Diesel", or "Electric".
* **Vehicle Type (again)** (`vehicle_type`, select_multiple, optional): Select multiple types of vehicles that this report applies to, such as both "Car" and "Truck".
