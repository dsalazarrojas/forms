# Start Of Shift Vehicle Inspection Report Form - Help Guide
## Purpose
This form is used to document the status of a vehicle at the start of a shift. It is intended to be completed by the driver or the person responsible for the vehicle during the shift.

## How To Complete This Form
1. Review the vehicle's condition carefully and answer the questions honestly.
2. Complete each field according to the instructions below.
3. Make sure to submit the form before starting the vehicle or operating the equipment.

## Field-by-Field Explanation
* **Vehicle Status** (`vehicle_status`, text, optional): Enter a brief description of the vehicle's overall condition.
* **Fuel Level** (`fuel_level`, number, optional): Enter the current fuel level of the vehicle (e.g., "full", "half full", etc.).
* **Tire Condition** (`tire_condition`, select_one, optional):
	+ **Good**: The tires are in excellent condition with no visible wear or damage.
	+ **Fair**: The tires have some visible wear or minor damage, but are still safe to operate.
	+ **Poor**: The tires are severely damaged or worn and may be a safety hazard.
* **Oil Level** (`oil_level`, select_multiple, optional):
	+ **Full**: The oil level is at the recommended level.
	+ **Empty**: The oil level is below the recommended level.
	+ **Low**: The oil level is low but not empty.
* **Brakes** (`brakes`, text, optional): Describe the condition of the brakes, including any issues or concerns.
* **Suspension** (`suspension`, text, optional): Describe the condition of the suspension, including any issues or concerns.
* **Steering** (`steering`, select_one, optional):
	+ **Good**: The steering is working properly with no issues.
	+ **Fair**: The steering has some issues or minor problems.
	+ **Poor**: The steering is severely damaged or malfunctioning.
* **Transmission** (`transmission`, select_multiple, optional):
	+ **Good**: The transmission is functioning properly with no issues.
	+ **Fair**: The transmission has some issues or minor problems.
	+ **Poor**: The transmission is severely damaged or malfunctioning.
* **Electrical Systems** (`electrical_systems`, text, optional): Describe any issues or concerns with the electrical systems, including headlights, taillights, etc.
* **Safety Equipment** (`safety_equipment`, text, optional): Describe the condition of safety equipment, including seatbelts, mirrors, etc.
* **Lights and Signals** (`lights_and_signals`, text, optional): Describe the condition of lights and signals, including any issues or concerns.
* **Vehicle Damage** (`vehicle_damage`, select_one, optional):
	+ **Good**: The vehicle has no visible damage.
	+ **Fair**: The vehicle has some visible damage, but is still safe to operate.
	+ **Poor**: The vehicle has severe damage and may be a safety hazard.
* **Driver Documentation** (`driver_documentation`, text, optional): Describe any relevant driver documentation, including licenses, insurance, etc.
* **Vehicle Registration** (`vehicle_registration`, text, optional): Describe the vehicle's registration status, including any issues or concerns.
