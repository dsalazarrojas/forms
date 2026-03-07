<thinking>
The purpose of the Transportation Route Optimization Audit Form is to collect information about a specific transportation route, including the origin and destination cities, travel date, route distance, travel time, travel speed, vehicle type, fuel type, and any additional notes about the route. This form will help identify potential areas for improvement in the route's efficiency and effectiveness.
</thinking>

# Transportation Route Optimization Audit Form - Help Guide
## Purpose
The Transportation Route Optimization Audit Form is designed to gather data about a specific transportation route to identify opportunities for improvement in its efficiency and effectiveness.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the **Origin City** where the journey starts.
2. Enter the **Destination City** where the journey ends.
3. Select the **Travel Date** of the journey.
4. Enter the **Route Distance** traveled (in miles or kilometers).
5. Enter the estimated **Travel Time** (in hours and minutes).
6. Enter the estimated **Travel Speed** (e.g., miles per hour or kilometers per hour).
7. Select the type of **Vehicle Type** used for the journey (e.g., Bus, Truck, Car).
8. Select the type of **Fuel Type** used for the journey (e.g., Gas, Diesel, Electric).
9. Add any additional **Route Notes** relevant to the journey.

## Field-by-Field Explanation
* **Origin City** (`origin_city`, text, required: false): Enter the city where the journey starts.
* **Destination City** (`destination_city`, text, required: false): Enter the city where the journey ends.
* **Travel Date** (`travel_date`, date, required: false): Enter the date of the journey in the format YYYY-MM-DD.
* **Route Distance** (`route_distance`, number, required: false): Enter the distance traveled in miles or kilometers.
* **Travel Time** (`travel_time`, time, required: false): Enter the estimated travel time in hours and minutes.
* **Travel Speed** (`travel_speed`, text, required: false): Enter the estimated travel speed in miles or kilometers per hour.
* **Vehicle Type** (`vehicle_type`, select_multiple, required: false): Select one or more types of vehicles used for the journey (e.g., Buses, Trucks, Cars).
* **Fuel Type** (`fuel_type`, select_multiple, required: true): Select the type of fuel used for the journey (e.g., Gas, Diesel, Electric). Note: This field is required.
* **Route Notes** (`route_notes`, note, required: false): Add any additional notes about the route relevant to the journey (e.g., road conditions, traffic congestion). 

## Tips
* Ensure to enter accurate and precise information to help identify areas for improvement in the route's efficiency and effectiveness.
* Select all applicable vehicle and fuel types used for the journey.
* Keep the **Route Notes** field concise and focused on relevant information about the route.
