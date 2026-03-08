# Daily Farmers Registration Form - Help Guide
## Purpose
This form is designed to collect registration information from farmers for various agricultural purposes.

## How To Complete This Form

1.  Fill in your first name, last name, and email address to identify yourself as a farmer.
2.  Provide your farm's size in the farm size field.
3.  Enter your farm's location.
4.  Indicate if your farm has cattle or not.
5.  Specify your farm's certification status.
6.  Choose your farm's size in terms of land or animal count.
7.  Select your farm's type (e.g., livestock, crop, or mixed farm).
8.  Provide a description of your farm.
9.  List the products you sell or produce at your farm.
10.  Enter your contact information, including name, email, phone number, and address.
11.  Specify your social media handles for Facebook, Twitter, and Instagram.
12.  Enter your farm's registration date.

## Field-by-Field Explanation

* **First Name** (`first_name`, `text`, required): Enter your first name as it appears on your official documents.
* **Last Name** (`last_name`, `text`, required): Enter your last name as it appears on your official documents.
* **Email** (`email`, `email`, required): Enter your official email address where you can be reached.
* **Phone** (`phone`, `text`, optional): Enter your phone number where you can be reached.
* **Location** (`location`, `text`, required): Enter your farm's location.
* **Type of Cattle** (`type_of_cattle`, `select_multiple`, required): Indicate if your farm has livestock.
* **Farm Size** (`farm_size`, `number`, required): Specify your farm's size in terms of land or animal count.
* **Farm Location** (`farm_location`, `text`, required): Enter your farm's location.
* **Farm Type** (`farm_type`, `select_one`, required): Select the type of farm you manage (e.g., livestock, crop, or mixed farm).
* **Farm Description** (`farm_description`, `note`, optional): Enter a brief description of your farm.
* **Farm Products** (`farm_product`, `select_multiple`, optional): List the products you sell or produce at your farm.
* **Farm Product Description** (`farm_product_description`, `text`, optional): Describe each of the products you listed in the previous field.
* **Contact Name** (`contact_name`, `text`, required): Enter your name as the contact person for your farm.
* **Contact Email** (`contact_email`, `email`, required): Enter your email address for contact purposes.
* **Contact Phone** (`contact_phone`, `text`, required): Enter your phone number for contact purposes.
* **Contact Address** (`contact_address`, `text`, required): Enter your contact address.
* **Contact Location** (`contact_location`, `text`, required): Enter your contact location.
* **Contact Hours** (`contact_hours`, `time`, optional): Specify your contact hours.
* **Contact Facebook** (`contact_facebook`, `text`, optional): Enter your Facebook handle.
* **Contact Twitter** (`contact_twitter`, `text`, optional): Enter your Twitter handle.
* **Contact Instagram** (`contact_instagram`, `text`, optional): Enter your Instagram handle.
* **Contact Website** (`contact_website`, `text`, optional): Enter your website URL.
* **Farm Certification** (`farm_certification`, `select_one`, required): Indicate if your farm is certified.
* **Farm License** (`farm_license`, `select_one`, optional): Select if your farm has a license.
* **Farm Registration Date** (`farm_registration_date`, `date`, required): Enter the date your farm is registered.

Note: This help guide is based on the provided YAML fields. If a field label is unclear or requires additional explanation, refer to the original field description.
