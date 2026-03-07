<thinking>
This form is designed to collect information about a dealership's inventory, including the vehicle's make, model, year, price, trim, color, transmission, mileage, and any notes. The form is intended to be completed by dealership staff or inventory managers to register new vehicles or update existing ones in the system. This form should not be used for external parties, such as customers or third-party vendors, as it contains sensitive information about the dealership's inventory.
</thinking>

# dealership_inventory_registration_form - Help Guide
## Purpose
This form is designed to collect information about a dealership's inventory, including vehicle details, status, and notes.

## How To Complete This Form
To complete this form, follow these steps:

1. Select whether the vehicle is "Yes" or "No" to indicate its registration status.
2. Choose the make of the vehicle from the options provided (Toyota, Ford, or Chevrolet).
3. Enter the vehicle's model number or type in the "model" field.
4. Enter the year of the vehicle.
5. Enter the price of the vehicle.
6. Select the vehicle's trim level from the options provided (Sedan, SUV, or Truck).
7. Select multiple colors for the vehicle from the options provided (Red, Blue, or Green).
8. Choose the transmission type from the options provided (Automatic, Manual, or Semi-Automatic).
9. Enter the vehicle's mileage.
10. Enter any notes or comments about the vehicle.

## Field-by-Field Explanation

* **Registration Status** (`registration_form`, select_one, required): This field indicates whether the vehicle is registered or not. Select "Yes" to indicate that the vehicle is registered, or "No" to indicate that it is not.
* **Make** (`make`, select_multiple, required): Choose the make of the vehicle from the options provided (Toyota, Ford, or Chevrolet).
* **Model** (`model`, text, required): Enter the vehicle's model number or type.
* **Year** (`year`, text, required): Enter the year of the vehicle.
* **Price** (`price`, number, required): Enter the price of the vehicle.
* **Trim** (`trim`, select_one, required): Select the vehicle's trim level from the options provided (Sedan, SUV, or Truck).
* **Color** (`color`, select_multiple, required): Select multiple colors for the vehicle from the options provided (Red, Blue, or Green).
* **Transmission** (`transmission`, select_one, required): Choose the transmission type from the options provided (Automatic, Manual, or Semi-Automatic).
* **Mileage** (`mileage`, text, required): Enter the vehicle's mileage.
* **Notes** (`notes`, note, required): Enter any notes or comments about the vehicle.

## Tips
* Make sure to fill out all required fields.
* Be specific and accurate when entering information about the vehicle.
* If you're unsure about any field, contact the dealership's inventory management team for assistance.
