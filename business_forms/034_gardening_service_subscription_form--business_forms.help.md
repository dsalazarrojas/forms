<thinking>As a form designer and technical writer, my first step is to understand the form's purpose and ensure it's relevant to the users who will be completing it. Upon reviewing the provided YAML, it appears that this form is designed for customers to subscribe to a gardening service, providing information about their subscription preferences, such as frequency of service, service type, and other details. To confirm the form's purpose, I'll check if it's meant for customers to sign up for a recurring service or if it's for one-time orders. The form seems to be geared towards the former, allowing customers to schedule regular gardening services.</thinking>

# Gardening Service Subscription Form - Help Guide
## Purpose
This form is for customers to subscribe to a regular gardening service. Please provide the necessary information to help us understand your service needs.

## How To Complete This Form

To complete this form, simply fill in the required fields and select the appropriate options for your service. If you need any assistance, feel free to ask.

## Field-by-Field Explanation

* **First Name** (`first_name`, `text`, required): Enter your first name please.
* **Email** (`email`, `email`, optional): Enter your email address for us to contact you.
* **Phone Number** (`phone_number`, `text`, optional): Enter your contact phone number for scheduling and service confirmation.
* **Subscription Start Date** (`subscription_start_date`, `date`, optional): If you have a specific start date for your subscription, please enter it here.
* **Subscription End Date** (`subscription_end_date`, `date`, optional): If you have a specific end date for your subscription, please enter it here.
* **Frequency** (`frequency`, `select_multiple`, optional): Choose how often you would like to receive services:
	+ Daily
	+ Weekly
	+ Monthly
* **Service Type** (`service_type`, `select_one`, optional): Select the type of service you require:
	+ Lawn Mowing
	+ Yard Work
	+ Landscaping
* **Address** (`address`, `text`, optional): Enter your address for service delivery.
* **Service Frequency** (`service_frequency`, `select_multiple`, optional): Choose the frequency of service:
	+ Daily
	+ Weekly
	+ Monthly
* **Day of Service** (`service_day`, `select_one`, optional): Select a day for your service:
	+ Monday
	+ Tuesday
	+ Wednesday
	+ Thursday
	+ Friday
	+ Saturday
	+ Sunday
* **Subscription End Date 2** (`subscription_start_date_2`, `date`, optional): If you have a specific end date for your subscription, please enter it here.
* **Notes** (`notes`, `note`, optional): Add any additional information about your order.
* **Service Start Time** (`service_start_time`, `time`, optional): Select the start time for your service.
* **Service Duration** (`service_duration`, `select_one`, optional): Choose the duration of your service:
	+ 30
	+ 60
	+ 90
	+ 120
* **Service Frequency 2** (`service_frequency_2`, `select_multiple`, optional): Choose the frequency of service:
	+ Daily
	+ Weekly
	+ Monthly
* **Service Start Time 2** (`service_start_time_2`, `time`, optional): Select the start time for your service.
* **Service Duration 2** (`service_duration_2`, `select_one`, optional): Choose the duration of your service:
	+ 30
	+ 60
	+ 90
	+ 120

Note: All fields marked as optional are not required for the form submission.
