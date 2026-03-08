# Event Decor Payment Form - Help Guide
## Purpose
The Event Decor Payment Form is used for processing payments for event decoration services.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the payment method you wish to use (Credit Card, E-Check, or PayPal).
2. Choose the event decoration services you are paying for (Event Decor Service 1, Event Decor Service 2, or Event Decor Service 3).
3. Enter the price of the services.
4. Enter the quantity of the services.
5. Enter the name of the service.
6. Enter the date of the services (if applicable).
7. Optionally, add a note about the payment.

## Field-by-Field Explanation

### Payment Details
* **Payment Method** (`payment_method`, `select_one`, required): Select the payment method you wish to use (Credit Card, E-Check, or PayPal).

### Order Information
* **Event Decor Service 1** (`event_decor_service_1`, `select_multiple`, required): Select the services you are paying for.
* **Event Decor Service 2** (`event_decor_service_2`, `select_multiple`, required): Select the services you are paying for.
* **Event Decor Service 3** (`event_decor_service_3`, `select_multiple`, required): Select the services you are paying for.

### Price
* **Price** (`event_decor_service_price`, `number`, required): Enter the price of the services you are paying for.

### Service Name
* **Service Name** (`event_decor_service_name`, `text`, required): Enter the name of the service you are paying for.

### Quantity
* **Quantity** (`event_decor_service_quantity`, `number`, required): Enter the quantity of the services.

### Date
* **Date** (`event_decor_service_date`, `date`, required): Enter the date of the services if applicable.

### Note
* **Note** (`event_decor_service_note`, `text`, optional): Add any additional information about the payment.
