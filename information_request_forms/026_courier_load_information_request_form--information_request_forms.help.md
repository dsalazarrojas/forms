# Courier Load Information Request Form - Help Guide
## Purpose
The Courier Load Information Request Form is used to collect essential details about a load, including its pickup and dropoff locations, type, weight, size, and other relevant information. This form is designed to ensure accurate and efficient delivery of the load.

## How To Complete This Form
To complete this form, follow the steps below:

1. Select the pickup location of the load from the options provided.
2. Select the dropoff city/cities where the load needs to be delivered (multiple selections are allowed).
3. Choose the load type (e.g., General, Express, Local, or Intermodal).
4. Enter the pickup date for the load (in the format mm/dd/yyyy).
5. Enter the weight of the load.
6. Enter the size of the load.
7. Provide a brief description of the load.
8. Enter any additional information about the load (if required).

## Field-by-Field Explanation
* **Load Information Request** (`load_information_request`, number, required): This field is the first step in the form, where you need to confirm that this is a genuine load information request.
* **Pickup Location** (`pickup_location`, select_one, required): Here, you will select the location where the load is picked up. You will be provided with options to choose from (e.g., New York, Chicago, Los Angeles, San Francisco).
* **Dropoff City** (`dropoff_city`, select_multiple, optional): Select all the cities where the load needs to be delivered. You can choose multiple cities (e.g., New York, Chicago, Los Angeles, San Francisco).
* **Load Type** (`load_type`, select_one, optional): Choose the type of load you are requesting (e.g., General, Express, Local, Intermodal).
* **Pickup Date** (`pickup_date`, date, optional): Enter the date when the load is to be picked up (in the format mm/dd/yyyy).
* **Load Weight** (`load_weight`, number, optional): Enter the weight of the load.
* **Load Size** (`load_size`, number, optional): Enter the size of the load.
* **Load Description** (`load_description`, note, optional): Give a brief description of the load.
* **Load Details** (`load_details`, text, optional): Provide any additional information about the load (if required).
* **Additional Information** (`additional_info`, text, optional): Enter any other information about the load that may be relevant.

## Tips
* Make sure to fill out all required fields to ensure accurate and complete information.
* If you are unsure about any of the fields, please contact your logistics or shipping representative for assistance.
* Please note that this form will not be submitted if duplicate entries are detected. This is to prevent confusion and inaccuracies in the delivery process.
