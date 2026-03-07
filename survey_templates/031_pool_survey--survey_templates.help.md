<thinking>...</thinking>

This form is designed to collect information about a pool's quality, type, shape, size, height, depth, water temperature, and time spent at the pool. The data collected will be used to better understand the characteristics of different pools and provide insights for pool-related services. Please ensure that you are completing this form for the correct purpose and do not duplicate any existing surveys. If you have already completed this form, your responses will be updated accordingly.

# Pool Survey - Help Guide
## Purpose
The Pool Survey is a form designed to collect information about a pool's characteristics and usage patterns. This data will be used to improve pool-related services and provide better insights for pool owners and operators.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the type of pool from the options provided in the "What type of pool?" field.
2. Choose the shape of the pool from the options provided in the "Pool shape" field.
3. Enter the size of the pool in the "Pool size" field. This field is a number that represents the length and width of the pool.
4. Enter the height of the pool in the "Pool height" field. This field is also a number.
5. Enter the depth of the pool in the "Pool depth" field. This field is a text field for any additional information about the pool's depth.
6. Select the water temperature at which you usually spend time at the pool from the options provided in the "Water Temperature" field.
7. Enter the time you spend at the pool in the "Time Spent at Pool" field. This field accepts time values.

## Field-by-Field Explanation
* **Pool Quality** (`pool_survey`, text, optional): Enter a brief description of the pool's quality. This field is not required and is meant to provide any additional comments or notes about the pool.
* **What type of pool?** (`pool_type`, select_multiple, optional): Select one or more from the options provided:
	+ Inground
	+ Outdoors
	+ Above Ground
* **Pool shape** (`pool_shape`, select_one, optional): Select the shape of the pool from:
	+ Rectangle
	+ Octagon
	+ Free Form
* **Pool size** (`pool_size`, number, optional): Enter the size of the pool in meters or feet, depending on the unit you are using for your measurements.
* **Pool height** (`pool_height`, number, optional): Enter the height of the pool in meters or feet, depending on the unit you are using for your measurements.
* **Pool depth** (`pool_depth`, text, optional): Enter any additional information about the pool's depth, such as the minimum and maximum depth, or any other relevant information.
* **Water Temperature** (`water_temperature`, select_one, optional): Select the temperature at which you usually spend time at the pool from:
	+ 70-80°F
	+ 80-90°F
	+ 90-100°F
	+ 100-110°F
* **Time Spent at Pool** (`time_spent_at_pool`, time, optional): Enter the time you spend at the pool. This field accepts time values.
