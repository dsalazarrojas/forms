<thinking>

# diving_customer_record_form - Help Guide

## Purpose
The purpose of this form is to collect information about a customer's scuba diving experience, including their name, instructor name, dive site, certification status, and other relevant details.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the customer's name in the "Customer Name" field.
2. Enter the name of the instructor or guide for the dive in the "Instructor Name" field.
3. Select a date for the customer's dive in the "Customer Dive Date" field.
4. Enter the location of the dive in the "Dive Site" field.
5. Select the customer's level of diving experience in the "Diver Experience" field.
6. Indicate whether the customer is certified or not in the "Certification" field.
7. Enter the date of the customer's certification or certification expiration date in the "Certification Date" field.
8. Enter the customer's phone number in the "Customer Phone" field (optional but recommended for communication purposes).

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, text, required: no): Enter the customer's name as it appears on their certification or ID card.
* **Instructor Name** (`instructor_name`, text, required: no): Enter the name of the instructor or guide who led the dive.
* **Customer Dive Date** (`customer_dive_date`, date, required: no): Select the date of the customer's dive.
* **Dive Site** (`dive_site`, text, required: no): Enter the location of the dive, including the name of the dive shop or site.
* **Diver Experience** (`dive_diver_experience`, number, required: no): Select the customer's level of diving experience from 1-10.
* **Certification** (`certification`, select_one, required: no): Indicate whether the customer is certified or not.
* **Certification Date** (`certification_date`, date, required: no): Enter the date of the customer's certification or certification expiration date.
* **Customer Phone** (`customer_phone`, text, required: no): Enter the customer's phone number for communication purposes (recommended but not required).
