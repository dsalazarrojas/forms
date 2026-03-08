# Dog Walking Service Check Out Form - Help Guide

## Purpose
This form is used to collect the necessary information for payment and service details after a dog walking service has been rendered.

## How To Complete This Form
To complete this form, follow these steps:

1. Ensure you have all the required information ready.
2. Fill in the details on each page as prompted.
3. Review your answers carefully before submitting the form.

## Field-by-Field Explanation

### Payment Date (Page 1)
* **Payment Date** (`payment_date`, date, required: false): Enter the date the payment is due or was received.

### Service Details (Page 1)
* **Service Details** (`service_details`, text, required: false): Describe the services provided, including any notable events or circumstances.

### Service Cost (Page 1)
* **Service Cost** (`service_cost`, text, required: false): Provide the total cost of the service provided, including any applicable taxes or fees.

### Payment Method (Page 1)
* **Payment Method** (`payment_method`, select_one, required: false): Indicate if the payment was made via a specific method, such as credit card or check.

### Client Information (Page 2)
* **Client Name** (`client_name`, text, required: false): Identify the name of the client receiving the service.
* **Client Email** (`client_email`, email, required: false): Enter the client's email address for communication.
* **Client Phone** (`client_phone`, text, required: false): Provide the client's phone number for contact.

### Service Provider (Page 2)
* **Service Provider** (`service_provider`, select_one, required: false): Confirm if the service was provided by the company or an external service provider.

### Total Cost (Page 2)
* **Total Cost** (`total_cost`, number, required: false): Calculate the total cost of the service, including any applicable taxes or fees.

### Payment Status (Page 2)
* **Payment Status** (`payment_status`, select_one, required: false): Update the payment status to indicate if it is active or inactive.

## Tips
* Be as detailed as possible when describing the service details to ensure accurate billing.
* Ensure the total cost includes all applicable taxes and fees.
* Confirm the client's contact information for future communication.
