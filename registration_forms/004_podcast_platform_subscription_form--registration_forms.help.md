<thinking>...The form is intended to register users for a podcast platform, allowing them to provide their contact information and subscription preferences. This form will help the platform understand user preferences for subscription plans, start and end dates, and frequency of subscription. The form should only be submitted once per user, to prevent duplication. It will be used in the context of a podcast platform, and the user input will determine their subscription settings...</thinking>

# Podcast Platform Subscription Form - Help Guide
## Purpose
This form is used to register a user for a podcast platform. It collects essential information to configure the user's subscription settings.

## How To Complete This Form
1. To complete the form, please follow these steps:
	* Fill in your User Email address.
	* Provide your Name.
	* Select your preferred Subscription Plan.
	* Choose the Start Date and End Date of your subscription.
	* Choose your subscription frequency, such as Daily, Weekly, or Monthly.
	* Select your Subscription Timezone (UTC offset).
	* Optionally, enter your Timezone Offset (HH).
2. Make sure to fill out all required fields and select at least one subscription plan and time zone option.

## Field-by-Field Explanation

* **User Email** (`user_email`, `email`, required: false): Enter your email address to be contacted for updates and notifications.
* **Name** (`name`, `text`, required: false): Enter your name for reference purposes.
* **Subscription Plan** (`subscription_plan`, `select_one`, required: false): Choose from Free Trial, Pro Monthly, or Premium Quarterly to determine your subscription tier.
* **Start Date** (`subscription_start_date`, `date`, required: false): Choose the start date of your subscription in YYYY-MM-DD format.
* **End Date** (`subscription_end_date`, `date`, required: false): Choose the end date of your subscription in YYYY-MM-DD format.
* **Subscription Frequency** (`subscription_frequency`, `select_multiple`, required: false): Select Daily, Weekly, or Monthly to determine how often you want to be subscribed.
* **Subscription Timezone** (`subscription_timezone`, `select_one`, required: false): Choose UTC-0, UTC-1, or UTC-2 to determine your time zone offset.
* **Timezone Offset** (`timezone_offset`, `number`, required: false): Enter the offset value for your time zone, measured in hours.
