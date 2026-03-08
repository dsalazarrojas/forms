# End Of Day Sales Report Form - Help Guide
## Purpose
The End Of Day Sales Report Form is a tool for sales representatives to report their sales performance at the end of each day. This form helps management track and analyze sales data to evaluate performance and identify areas for improvement.

## How To Complete This Form

1. Select the sales period for which you want to report sales (if any).
2. Enter the sales amount for that period.
3. Enter any sales tax applicable to that period.
4. Enter any shipping fees for that period.
5. Enter the net sales amount after tax.
6. Select which products were sold (Yes/No).
7. Select which sales representative(s) handled the sale (Yes/No).
8. Enter the name of the sales representative(s) handling the sale (Yes/No).
9. Enter the date of the sale.
10. Select the region where the sale occurred (Yes/No).
11. Select the status of the sale (Active/Inactive).
12. Enter any comments or notes on the sale.

## Field-by-Field Explanation
* **Sales Period** (`sales_period`, `date`, optional): Select the period for which you are reporting sales.
* **Sales Amount** (`sales_amount`, `number`, optional): Enter the total sales amount for that period.
* **Sales Tax** (`sales_tax`, `number`, optional): Enter any sales tax applicable to that period.
* **Shipping Fees** (`shipping_fees`, `number`, optional): Enter any shipping fees for that period.
* **Net Sales** (`net_sales`, `number`, optional): Enter the net sales amount after tax.
* **Product ID** (`product_id`, `select_multiple`, optional): Select which products were sold during that period (Yes/No).
* **Sales Rep ID** (`sales_rep_id`, `select_multiple`, optional): Select which sales representative(s) handled the sale (Yes/No).
* **Sales Rep Name** (`sales_rep_name`, `select_multiple`, optional): Enter the name of the sales representative(s) handling the sale (Yes/No).
* **Sales Date** (`sales_date`, `time`, optional): Enter the date of the sale in 24-hour format.
* **Sales Region** (`sales_region`, `select_one`, optional): Select the region where the sale occurred (Yes/No).
* **Sales Status** (`sales_status`, `select_one`, optional): Select the status of the sale (Active/Inactive).
* **Comments** (`comments`, `text`, optional): Enter any comments or notes on the sale.

## Tips
* Fill out this form daily to ensure accurate and up-to-date sales data.
* Make sure to select the correct sales period and status to accurately reflect your sales performance.
* If a field is not applicable, you can leave it blank, but please do not select "Yes" or "No" in select fields.
