# Gym Membership Form With PayPal Integration - Help Guide

## Purpose
This form is designed to gather user information and integrate with PayPal for payment processing. It is meant to be used by gym members to join the gym or purchase a membership.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out the User Information section with your name, email, and phone number.
2. Select your preferred Payment Method (PayPal, Credit/Debit Card, or Other).
3. Enter your Payment Details (the amount to be paid).
4. Choose your desired Membership Plan (Monthly, Quarterly, etc.).
5. Read and agree to the Membership Terms.
6. Select your preferred option for Submit and Pay.

## Field-by-Field Explanation

* **User Information (Page 1)** (`user_info`, text, required): This is the first section of the form where you will enter your basic information such as name, email, and phone number.
* **Payment Method (Page 2)** (`payment_method`, select_one, optional): This section allows you to choose how you want to make the payment. You can select PayPal, Credit/Debit Card, or Other.
* **Payment Details (Page 3)** (`payment_details`, number, optional): This section is where you will enter the amount to be paid.
* **Membership Plan (Page 4)** (`membership_plan`, select_multiple, optional): This is where you can choose your desired membership plan. You can select multiple options if desired.
* **Membership Terms (Page 5)** (`membership_terms`, note, optional): This section is a note section where you will find the terms and conditions of the membership.
* **Submit and Pay (Page 6)** (`submit_and_pay`, select_one, optional): This is the final step where you will confirm your payment and submit the form.
