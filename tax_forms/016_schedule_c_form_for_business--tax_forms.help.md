# Schedule C Form For Business - Help Guide
## Purpose
The Schedule C form is used to report the income and expenses of a business or self-employment income for tax purposes. This form is used by business owners and self-employed individuals to report their business activities and calculate their tax liability.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the form title and category fields.
2. Enter your business's address and fiscal year information.
3. Provide your gross income and net profit/loss information.
4. List your business assets, liabilities, and equity.
5. Choose whether you have a Schedule C, E, F, SE, K, or none of these schedules.
6. Choose your tax year and submit the form.

## Field-by-Field Explanation

* **Form Title** (`form_title`, text, optional): Enter the title of your business.
* **Category** (`form_category`, text, optional): Enter the category of your business (e.g. Sole Proprietorship, S Corporation, Partnership).
* **Description** (`form_description`, text, optional): Enter a brief description of your business.
* **Business Name** (`form_business_name`, text, optional): Enter the name of your business.
* **Address** (`form_address`, text, optional): Enter your business's address.
* **City** (`form_city`, text, optional): Enter the city of your business.
* **State** (`form_state`, text, optional): Enter the state of your business.
* **Zip** (`form_zip`, text, optional): Enter the zip code of your business.
* **Fiscal Year** (`form_fiscal_year`, select_one, required): Select the fiscal year of your business (e.g. 2020, 2021, 2022, 2023).
* **Gross Income** (`form_gross_income`, number, optional): Enter your business's gross income.
* **Net Profit** (`form_net_profit`, number, optional): Enter your business's net profit.
* **Business Assets** (`form_business_assets`, text, optional): List your business's assets.
* **Business Liabilities** (`form_business_liabilities`, text, optional): List your business's liabilities.
* **Business Equity** (`form_business_equity`, text, optional): List your business's equity.
* **Net Profit/Loss** (`form_net_profit_loss`, number, optional): Enter your business's net profit/loss.
* **Tax Year** (`form_tax_year`, select_one, required): Select the tax year of your business (e.g. 2020, 2021, 2022, 2023).
* **Schedule C Form** (`form_schedule_c_form`, select_multiple, required): Choose whether you have a Schedule C form for your business (Yes or No).
* **Schedule E** (`form_schedule_e`, select_multiple, required): Choose whether you have a Schedule E form for your business (Yes or No).
* **Schedule F** (`form_schedule_f`, select_multiple, required): Choose whether you have a Schedule F form for your business (Yes or No).
* **Schedule SE** (`form_schedule_se`, select_multiple, required): Choose whether you have a Schedule SE form for your business (Yes or No).
* **Schedule K** (`form_schedule_k`, select_multiple, required): Choose whether you have a Schedule K form for your business (Yes or No).
* **Partnership Interest** (`form_partnership_interest`, text, optional): Enter your partnership interest.
* **Partner Name** (`form_partner_name`, text, optional): Enter the name of your partner.
* **Partner Percentage** (`form_partner_percentage`, text, optional): Enter the percentage of partner interest.
* **Submit** (`form_submit`, select_one, required): Choose to submit or save as draft the form.

Note: The required fields are indicated by `required: true` in the form yaml, and should be completed before submitting the form.
