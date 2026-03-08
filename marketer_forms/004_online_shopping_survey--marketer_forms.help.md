# Online Shopping Survey - Help Guide
## Purpose
This form is designed to collect information from customers about their online shopping experiences to improve services.

## How To Complete This Form
1. Select the type of store where you made your purchase.
2. Enter the name of the store.
3. If you have an email address associated with your purchase, enter it.
4. If you have a phone number associated with your purchase, enter it.
5. Share any feedback you have about your shopping experience.
6. Rate your shopping experience (Good or Fair).
7. Enter the date you made your purchase.
8. Enter the time you made your purchase.

## Field-by-Field Explanation

* **Store Type** (`store_type`, `select_one`, required): Select 'Yes' if you have purchased from the store in question.
* **Store Name** (`store_name`, `text`, required): Enter the name of the store where you made your purchase.
* **Email** (`email`, `email`, optional): If you have an email address associated with your purchase, please enter it (if you're unsure, you can skip this field).
* **Phone** (`phone`, `text`, optional): If you have a phone number associated with your purchase, please enter it (if you're unsure, you can skip this field).
* **Feedback** (`feedback`, `note`, optional): Share any comments or feedback about your shopping experience.
* **Rating** (`rating`, `select_one`, required): Choose how you would rate your shopping experience (Good or Fair).
* **Purchase Date** (`purchase_date`, `date`, optional): Enter the date you made your purchase.
* **Purchase Time** (`purchase_time`, `time`, optional): Enter the time you made your purchase.
