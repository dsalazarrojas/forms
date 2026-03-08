<thinking>
We need to create a user-facing help guide for a form titled "Perfume Box". This form is likely used for subscription management, specifically for managing perfume box subscriptions. The form likely asks for subscription type, frequency, and other details related to the subscription. It might also request contact information such as name, email, and phone number for billing or communication purposes. The "Perfume Box" form could be used by perfume box service providers to manage their subscriptions and communicate with customers.
To ensure the guide is not duplicated, we'll make sure to highlight the key features and requirements of the form.
</thinking>

# Perfume Box - Help Guide
## Purpose
The "Perfume Box" form is designed to manage perfume box subscriptions for customers. It's used to collect essential details about the subscription, including the type, frequency, and payment method.

## How To Complete This Form
To complete this form, follow these steps:

* Select the subscription type from the options provided (e.g., Monthly Subscription or One Time Box).
* Choose the subscription frequency (e.g., Every 30 Days or Other).
* Enter your name and email address for billing or communication purposes.
* Provide your phone number for easy contact.
* Optionally, provide a description of the subscription if necessary.
* Select the payment method (e.g., Credit Card or PayPal).
* Enter the amount of the subscription.
* Add any additional notes or comments about the subscription.

## Field-by-Field Explanation

* **Subscription Type** (`subscription_type`, select_one, required): Choose the type of subscription you're interested in (e.g., Monthly Subscription or One Time Box).
* **Subscription Frequency** (`subscription_frequency`, select_multiple, required): Select how often you'd like to receive your perfume box (e.g., Every 30 Days or Other).
* **Name** (`name`, text, required): Enter your name for billing or communication purposes.
* **Email** (`email`, email, required): Enter your email address for billing or communication purposes.
* **Phone** (`phone`, text, required): Enter your phone number for easy contact.
* **Description** (`description`, note, required): Provide a brief description of your subscription if necessary.
* **Subscription Date** (`subscription_date`, date, required): Enter the date you'd like to start your subscription.
* **Subscription Time** (`subscription_time`, time, required): Enter the time you'd like to start your subscription.
* **Payment Method** (`payment_method`, select_one, required): Choose your preferred payment method (e.g., Credit Card or PayPal).
* **Amount** (`amount`, number, required): Enter the amount of the subscription.
* **Notes** (`notes`, note, required): Add any additional notes or comments about your subscription.
