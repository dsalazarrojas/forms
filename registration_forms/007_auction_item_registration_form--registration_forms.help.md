# Auction Item Registration Form - Help Guide

## Purpose
This form is used to register a new auction item for sale. It captures detailed information about the item, including its title, description, dimensions, and valuation details.

## How To Complete This Form
1. Fill out the required fields with accurate and relevant information about the auction item.
2. Ensure that all fields marked as "required" are filled out correctly.
3. Review the form for accuracy and completeness before submitting it.

## Field-by-Field Explanation

* **Registrant Name** (`full_name`, text, required): Enter the name of the person or organization registering the item for sale.
* **Mailing Address** (`mailing_address`, text, required): Enter the address where the auction item can be mailed to in the event of a sale.
* **Phone Number** (`phone_number`, text, required): Enter a contact number for the registrant.
* **Email Address** (`email_address`, email, required): Enter the email address of the registrant.
* **Item Title** (`item_title`, text, required): Enter the official name for the auction catalog.
* **Detailed Description** (`item_description_detailed`, text, required): Provide a detailed description of the auction item, including its history, materials, and significance.
* **Provenance and Ownership History** (`provenance`, text, optional): Describe how you came to own the item.
* **Dimensions** (`item_dimensions`, text, optional): Enter the dimensions of the auction item in centimeters (e.g., Height x Width x Depth).
* **Has this item been professionally appraised?** (`appraisal_status`, select_one, required): Choose the correct answer from the options provided.
* **Estimated Market Value** (`estimated_market_value`, number, required): Enter the estimated market value of the item based on appraisal or research.
* **Reserve Price (Minimum Bid)** (`reserve_price_requested`, number, required): Enter the minimum bid price for the auction item. Leave 0 for no reserve.
* **Percentage of Sale to Charity** (`charity_donation_percentage`, number, optional): If applicable, enter the percentage of the sale that will go to charity.
