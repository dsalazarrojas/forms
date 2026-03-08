# pac - Help Guide
## Purpose
The pac form is a service request form designed to gather information from customers or clients who are requesting a service or support. This form collects basic contact and service-related information, which will be used to assess and fulfill the service request.

## How To Complete This Form
To complete this form, follow these steps:

1. Determine if you are requesting a service (Service Type field).
2. Enter your full name (Name field).
3. Provide your email address (Email field) so we can get in touch with you.
4. Enter your phone number (Phone field) if you wish to be contacted.
5. Select a service location (Service Location field, if applicable) where the service will be provided or where you need the service.
6. Enter your preferred date and time for the service (Date/Time fields).
7. Optionally, include any additional notes or comments in the Note field.
8. Optionally, enter your address for service delivery or pickup (Address field).

## Field-by-Field Explanation
* **Service Type (1)** (`Service Type`, `select_one`): Please select 'Yes' if you are requesting a service, 'No' otherwise.
* **Full Name (2)** (`name`, `text`, `required`: false): Enter your full name for service request purposes.
* **Email (3)** (`email`, `text`, `required`: false): Enter your email address so we can get in touch with you.
* **Phone (4)** (`phone`, `text`, `required`: false): Enter your phone number, if you wish to be contacted.
* **Date (5)** (`date`, `date`, `required`: false): Select your preferred date for the service.
* **Time (6)** (`time`, `time`, `required`: false): Select your preferred time for the service.
* **Note (7)** (`note`, `note`, `required`: false): Add any additional comments or notes about your service request.
* **Address (8)** (`address`, `text`, `required`: false): Enter your address for service delivery or pickup, if applicable.
* **Service Location (9)** (`service_location`, `select_multiple`, `required`: false): Select where the service will be provided or where you need the service.
