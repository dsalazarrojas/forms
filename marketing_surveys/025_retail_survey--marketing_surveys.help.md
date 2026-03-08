# Retail Survey - Help Guide
## Purpose
The Retail Survey form is designed to collect data about customer visits to our store. It includes questions about the frequency of visits, customer preferences, and contact methods.

## How To Complete This Form

1. Start by filling out the store ID, which is the unique identifier for our store.
2. Next, select the frequency of your visits to our store from the options provided.
3. Then, select what you like most about visiting our store.
4. Choose how you usually contact us.
5. Answer the question about visiting our store's website.
6. Select the primary purpose of your visit.
7. If you have an email address, you can enter it. This is optional.
8. If you have any additional comments or notes, you can enter them here. This is optional.
9. Finally, enter your contact information (if available) and date and time of your visit (if you remember it).

## Field-by-Field Explanation

* **store_id** (`store_id`, number, required/optional): Enter the store's unique identifier.
* **product_id** (`product_id`, number, required/optional): This field is not currently used in the form, but it may be used in the future for product-specific surveys.
* **customer_id** (`customer_id`, number, required/optional): This field is not currently used in the form, but it may be used in the future for customer-specific tracking.
* **How often do you visit our store?** (`question1`, select_one, required): Select how often you visit our store from the options provided.
* **Enter store name (optional)** (`store_name_hint`, text, required/optional): If you remember the store's name, you can enter it here. This is optional.
* **Store phone** (`store_phone`, text, required/optional): If you have the store's phone number, you can enter it here.
* **What do you like most about visiting our store?** (`question2`, select_multiple, required): Select what you like most about visiting our store from the options provided.
* **How do you contact us?** (`question3`, select_one, required): Choose how you usually contact us from the options provided.
* **How often do you visit our store's website?** (`question4`, select_one, required): Select how often you visit our store's website from the options provided.
* **What is the primary purpose of your visit?** (`question5`, select_one, required): Select the primary purpose of your visit from the options provided.
* **email** (`email`, email, required/optional): If you have an email address, you can enter it here. This is optional.
* **Notes** (`note`, note, required/optional): If you have any additional comments or notes, you can enter them here. This is optional.
* **Date** (`date`, date, required/optional): If you remember the date of your visit, you can enter it here. This is optional.
* **Time** (`time`, time, required/optional): If you remember the time of your visit, you can enter it here. This is optional.
* **Customer name** (`customer_name`, text, required/optional): If you are willing to share your name, you can enter it here. This is optional.
* **Customer email** (`customer_email`, email, required/optional): If you are willing to share your email address, you can enter it here. This is optional.
* **Customer phone** (`customer_phone`, text, required/optional): If you are willing to share your phone number, you can enter it here. This is optional.
* **Customer address** (`customer_address`, text, required/optional): If you are willing to share your address, you can enter it here. This is optional.
* **Customer city** (`customer_city`, text, required/optional): If you are willing to share your city, you can enter it here. This is optional.
* **Customer state** (`customer_state`, text, required/optional): If you are willing to share your state, you can enter it here. This is optional.
* **Customer zip** (`customer_zip`, text, required/optional): If you are willing to share your zip code, you can enter it here. This is optional.
* **How likely are you to recommend our store to a friend?** (`question6`, select_one, required): Select how likely you are to recommend our store to a friend from the options provided.
* **Store id 2** (`store_id_2`, text, required/optional): This field is not currently used in the form, but it may be used in the future for store-specific tracking.
* **Store hours** (`store_hours`, time, required/optional): If you know the store's hours, you can enter them here. This is optional.
