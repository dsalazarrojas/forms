# Pallet Receipt Confirmation - Help Guide
## Purpose
This form is used to confirm the receipt of a pallet and its contents. It ensures accurate inventory tracking and helps prevent discrepancies.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the **Pallet Id** field with the unique identifier of the pallet.
2. Select the type of pallet from the options provided (**Pallet**, **Crate**, **Box**, or **Carton**).
3. Indicate if the pallet contains any contents (**Yes** or **No**).
4. Enter the weight of the pallet.
5. Enter the length, width, and height of the pallet.
6. Enter the receipt date and time of the pallet.
7. Specify who received the pallet (**Received By**).
8. Add any remarks or comments about the pallet (**Remarks**).

## Field-by-Field Explanation

* **Pallet Id** (`pallet_id`, text, required/optional): Enter the unique identifier of the pallet.
* **Pallet Type** (`pallet_type`, select_one, required/optional): Select the type of pallet from the options provided.
* **Pallet Contents** (`pallet_contents`, select_multiple, required/optional): Indicate if the pallet contains any goods or products (**Yes** or **No**).
* **Pallet Weight** (`pallet_weight`, number, required/optional): Enter the weight of the pallet.
* **Pallet Length** (`pallet_length`, number, required/optional): Enter the length of the pallet.
* **Pallet Width** (`pallet_width`, number, required/optional): Enter the width of the pallet.
* **Pallet Height** (`pallet_height`, number, required/optional): Enter the height of the pallet.
* **Receipt Date** (`receipt_date`, date, required/optional): Enter the date the pallet was received.
* **Receipt Time** (`receipt_time`, time, required/optional): Enter the time the pallet was received.
* **Received By** (`received_by`, text, required/optional): Specify who received the pallet.
* **Remarks** (`remarks`, note, required/optional): Add any comments or remarks about the pallet.
