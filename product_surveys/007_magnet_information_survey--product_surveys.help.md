# Magnet Information Survey - Help Guide

## Purpose

The Magnet Information Survey is designed to collect information about a product's magnet, including its name, type, usage habits, satisfaction level, and purchase behavior. This data will be used for analysis and improvement purposes.

## How To Complete This Form

1. Fill out the introduction page, where you will find a brief description of the form's purpose and usage guidelines.
2. On the next page, provide the name of the product's magnet.
3. Select the type of magnet from the available options.
4. Indicate the usage habits of the magnet (you can select multiple options).
5. Choose your level of satisfaction with the magnet.
6. Provide any additional comments about the magnet.
7. Enter the email address of the person submitting the form.
8. Optionally, provide your phone number for contact purposes.
9. Enter the date the product was created.
10. Enter the date the product was last updated.
11. Indicate the date the product was deleted (if applicable).

## Field-by-Field Explanation

* **magnet_name** (`magnet_name`, text, optional): Enter the name of the product's magnet.
* **type** (`type`, select_one, optional): Select the type of magnet from the available options.
* **usage_habits** (`usage_habits`, select_multiple, optional): Indicate the usage habits of the magnet (select multiple options).
* **satisfaction** (`satisfaction`, select_one, optional): Choose your level of satisfaction with the magnet.
* **purchase_behavior** (`purchase_behavior`, text, optional): Provide any additional comments about the magnet's purchase behavior.
* **additional_comments** (`additional_comments`, text, optional): Provide any additional comments about the magnet.
* **email** (`email`, email, required): Enter the email address of the person submitting the form.
* **phone** (`phone`, text, optional): Optionally, provide your phone number for contact purposes.
* **created_at** (`created_at`, date, optional): Enter the date the product was created.
* **updated_at** (`updated_at`, date, optional): Enter the date the product was last updated.
* **deleted_at** (`deleted_at`, date, optional): Indicate the date the product was deleted (if applicable).
