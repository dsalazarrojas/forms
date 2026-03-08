<thinking>
This form is designed to collect data about the acceptance level of different products in a business setting. It is primarily meant for internal use, and the data collected will help the assigned user in understanding the acceptance level of various products. 

Before filling out this form, ensure that you have a clear understanding of the product's brand name, its ID, product type, and name. If the product has an acceptance level, it is recommended to fill it out accurately. If not, you can choose an "Acceptance Level Other" to provide a custom description. 

This form does not aim to collect redundant or duplicate data. Ensure that you have not filled out similar surveys for this product before, or if you have, please be concise and provide updated information when necessary. 

Please be specific when filling out this form, and provide as much detail as possible, especially for the "Influencing Factors" and "Feedback" sections. The "Notes" section is meant to be a short note about your feedback, not a detailed report.
</thinking>

# liquid_acceptance_survey - Help Guide
## Purpose
This form is designed to collect data about the acceptance level of different products in a business setting.

## How To Complete This Form
1. Start by entering the brand name, brand ID, product type, and product name related to the product you are filling out the survey for.
2. If the product has an acceptance level, select it from the options provided. If not, choose "Acceptance Level Other" and describe it in the text field provided.
3. In the "Influencing Factors" section, choose all factors that have an impact on the product's acceptance level. If you need to include an additional factor not listed, select "Other" and provide a description in the text field.
4. In the "Feedback" section, provide any comments or suggestions you have about the product.
5. Fill out your contact information (Email and Phone) and the date and time you filled out the survey.
6. If you have any additional information to add to the survey, please use the "Notes" field.
7. Finally, fill out your name and select the output file format you would like to save the survey in.

## Field-by-Field Explanation
* **Brand Name** (`brand_name`, text, required): Enter the name of the product brand.
* **Brand ID** (`brand_id`, text, required): Enter the product's brand ID.
* **Product Type** (`product_type`, text, required): Enter the product's type.
* **Product Name** (`product_name`, text, required): Enter the product's name.
* **Acceptance Level** (`acceptance_level`, select_one, optional): Choose how high or low you accept the product, or "Other" if it's not listed.
* **Influencing Factors** (`influencing_factors`, select_multiple, optional): Choose all factors that impact the product's acceptance level.
* **Feedback** (`feedback`, text, optional): Provide any comments or suggestions about the product.
* **Email** (`email`, email, optional): Enter your contact email.
* **Phone** (`phone`, text, optional): Enter your contact phone number.
* **Date** (`date`, date, optional): Enter the date you filled out the survey.
* **Time** (`time`, time, optional): Enter the time you filled out the survey.
* **Product ID** (`product_id`, text, optional): Enter the product's ID.
* **Acceptance Level Other** (`acceptance_level_other`, text, optional): Provide a custom description of the product's acceptance level if it's not listed.
* **Influencing Factors Other** (`influencing_factors_other`, text, optional): Provide a description of any additional factors that impact the product's acceptance level.
* **Feedback Other** (`feedback_other`, text, optional): Provide any additional comments or suggestions about the product.
* **Liquidity Acceptance Survey** (`liquid_acceptance_survey`, text, optional): Enter a custom description of the survey.
* **Assigned User** (`assigned_user`, text, optional): Enter the name of the user assigned to the product.
* **Notes** (`notes`, text, optional): Enter a short note about your feedback.
* **Output File** (`output_file`, text, optional): Select the format you would like to save the survey in.
