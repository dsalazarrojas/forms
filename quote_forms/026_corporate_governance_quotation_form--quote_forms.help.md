# corporate_governance_quotation_form - Help Guide

## Purpose
The corporate governance quotation form is used to collect information for quotations related to corporate services, including the date, amount, currency, services provided, and other relevant details.

## How To Complete This Form

1. Fill out the form by following the on-screen instructions and guidelines.
2. Ensure that all required fields are filled in before submitting the form.
3. Double-check your entries for accuracy and completeness.

## Field-by-Field Explanation

* **Corporate Quotation** (`corporate_quotation`, `text`, required: false): Enter a brief description of the quotation, if necessary.
* **Quotation Date** (`quotation_date`, `date`, required: true): Enter the date of the quotation.
* **Quotation Time** (`quotation_time`, `time`, required: false): Enter the time of the quotation, if applicable.
* **Quotation Amount** (`quotation_amount`, `number`, required: true): Enter the amount of the quotation.
* **Quotation Currency** (`quotation_currency`, `select_one`, required: true): Select the currency of the quotation from the options provided (USD, EUR, JPY).
* **Quotation Service** (`quotation_service`, `select_multiple`, required: true): Select all services that apply to the quotation from the options provided (Service A, Service B, Service C).
* **Quotation Note** (`quotation_note`, `note`, required: false): Enter any additional comments or notes related to the quotation.
* **Quotation Email** (`quotation_email`, `email`, required: true): Enter the email of the client or contact person.
* **Quotation Phone** (`quotation_phone`, `text`, required: false): Enter the phone number of the client or contact person.
