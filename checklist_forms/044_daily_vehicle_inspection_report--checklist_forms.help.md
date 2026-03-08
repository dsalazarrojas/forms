<thinking>Before creating the help guide, let's briefly consider the purpose and context of the form. This "Daily Vehicle Inspection Report" form appears to be designed to gather information about the overall condition and functionality of a vehicle after a regular inspection. The form collects data on various aspects of the vehicle, such as engine, transmission, brakes, suspension, steering, and other critical systems. The form likely aims to provide a comprehensive overview of the vehicle's condition, helping identify potential issues or maintenance needs. To confirm the form's purpose and context, let's ensure the guide accurately reflects this understanding.</thinking>

# daily_vehicle_inspection_report - Help Guide
## Purpose
The Daily Vehicle Inspection Report form is designed to gather information about the overall condition and functionality of a vehicle after a regular inspection. This form helps identify potential issues or maintenance needs, ensuring the vehicle's safety and performance.

## How To Complete This Form
1. Select the vehicle's current condition for each field based on your observation.
2. Be honest and accurate when evaluating the condition of each aspect.
3. If unsure, select "not specified" or "not applicable" as needed.

## Field-by-Field Explanation
* **vehicle_registration** (`vehicle_registration`, text, optional): This field is where you enter the vehicle's registration information.
* **odometer_reading** (`odometer_reading`, number, optional): Record the vehicle's current odometer reading.
* **engine_oil_level** (`engine_oil_level`, select_one, required): Choose the engine oil level from the options: "oil low", "oil medium", "good".
* **brake_pad_condition** (`brake_pad_condition`, select_multiple, required): Select the current condition of the brake pads: "good", "fair", "poor".
* **suspension_system** (`suspension_system`, note, optional): Enter any notable information about the suspension system.
* **steering_system** (`steering_system`, select_one, optional): Choose the steering system condition from the options: "steering well", "not steering", "unsure".
* **transmission_system** (`transmission_system`, select_multiple, optional): Select the current condition of the transmission system: "working fine", "not working", "not applicable".
* **tire_condition** (`tire_condition`, select_one, required): Choose the tire condition from the options: "good", "poor", "not applicable".
* **exterior_condition** (`exterior_condition`, select_multiple, optional): Select the current exterior condition: "clean", "dirty", "not applicable".
* **wheel_tire_pressure** (`wheel_tire_pressure`, select_one, optional): Choose the wheel tire pressure from the options: "correct", "under inflated", "not specified".
* **brake_pads_worn** (`brake_pads_worn`, select_multiple, required): Select whether the brake pads are worn: "True", "False".
* **air_leak_in_system** (`air_leak_in_system`, select_multiple, optional): Select whether there's an air leak in the system: "True", "False".
* **transmission_fluid_condition** (`transmission_fluid_condition`, select_one, required): Choose the transmission fluid condition from the options: "good", "poor", "not applicable".
* **engine_performance** (`engine_performance`, note, optional): Enter any notable information about the engine performance.
* **exhaust_condition** (`exhaust_condition`, select_one, required): Choose the exhaust condition from the options: "good", "fair", "poor".
* **battery_condition** (`battery_condition`, select_one, optional): Select the battery condition from the options: "good", "not good", "not specified".
* **brake_system** (`brake_system`, select_multiple, required): Select the current brake system condition: "working", "not working", "not applicable".
* **suspension_condition** (`suspension_condition`, select_multiple, optional): Select the current suspension condition: "good", "poor", "not applicable".
* **tire_tread** (`tire_tread`, select_one, optional): Choose the tire tread condition from the options: "good", "poor", "not applicable".
* **wheel_tire_type** (`wheel_tire_type`, select_one, optional): Choose the wheel tire type from the options: "radial", "non-radial", "not specified".
* **wheel_tire_size** (`wheel_tire_size`, select_one, optional): Choose the wheel tire size from the options: "correct", "not specified".
* **wheel_tire_depth** (`wheel_tire_depth`, select_one, optional): Choose the wheel tire depth from the options: "correct", "not specified".
* **engine_condition** (`engine_condition`, select_one, required): Choose the engine condition from the options: "good", "poor", "not applicable".
* **transmission_condition** (`transmission_condition`, select_one, required): Choose the transmission condition from the options: "good", "poor", "not applicable".
* **overall_condition** (`overall_condition`, select_multiple, required): Select the overall condition from the options: "good", "fair", "poor".
