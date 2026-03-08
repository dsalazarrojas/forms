# Flower Inventory Report Form - Help Guide
## Purpose
The Flower Inventory Report Form is a tool used to track flower stock levels and manage stock replenishment. This form helps flower vendors and buyers to monitor and manage their flower stock levels effectively, reducing the risk of stockouts and overstocking.

## How To Complete This Form
To complete this form, follow these steps:

1. **Flower Stock Levels**: Enter the current stock level of each flower type (Bulbs, Bulbs and Mums, Cut Flowers, Succulents, and Stems).
2. **Flower Condition**: Select the condition of the flowers (Good, Fair, Poor).
3. **Replenishment Needs**: Enter the number of flowers needed for replenishment.
4. **Date Last Checked**: Enter the date the stock was last checked.
5. **Stock Type**: Select the type of stock being reported (Bulbs, Bulbs and Mums, Cut Flowers, Succulents, Stems).
6. **Stock Status**: Select the current status of the stock (In stock, Out of stock, Needs replenishment).
7. **Stock Condition**: Select the condition of the stock (Good, Fair, Poor).
8. **Vendor Name**: Enter the name of the vendor.
9. **Notes**: Enter any additional comments or notes about the stock.
10. **Contact Phone**: Enter the contact phone number of the vendor.
11. **Contact Email**: Enter the contact email of the vendor.
12. **Vendor Email**: Enter the email of the vendor.
13. **Comments**: Enter any comments about the stock.
14. **Stock Date**: Enter the date the stock was received or last checked.
15. **Stock Status Date**: Enter the date the stock status was last updated.
16. **Stock Count**: Enter the number of flowers in stock.
17. **Stock Replenished**: Enter the number of flowers replenished.
18. **Stock Low Level**: Enter the low stock level threshold.
19. **Stock Critical Level**: Enter the critical stock level threshold.
20. **Stock Warning Level**: Enter the stock warning level threshold.
21. **Stock High Level**: Enter the high stock level threshold.
22. **Stock Status Critical**: Select the critical status of the stock (In stock, Out of stock, Needs replenishment).
23. **Stock Replenishment**: Enter the number of flowers needed for replenishment.

## Field-by-Field Explanation

* **flower_stock_levels** (`flower_stock_levels`, `number`, required): Enter the current stock level of each flower type.
* **flower_condition** (`flower_condition`, `text`, required): Select the condition of the flowers (Good, Fair, Poor).
* **replenishment_needs** (`replenishment_needs`, `number`, required): Enter the number of flowers needed for replenishment.
* **date_last_checked** (`date_last_checked`, `date`, required): Enter the date the stock was last checked.
* **stock_type** (`stock_type`, `select_one`, required): Select the type of stock being reported (Bulbs, Bulbs and Mums, Cut Flowers, Succulents, Stems).
* **stock_status** (`stock_status`, `select_multiple`, required): Select the current status of the stock (In stock, Out of stock, Needs replenishment).
* **stock_level** (`stock_level`, `number`, required): Enter the stock level.
* **stock_condition** (`stock_condition`, `select_one`, required): Select the condition of the stock (Good, Fair, Poor).
* **vendor_name** (`vendor_name`, `text`, required): Enter the name of the vendor.
* **notes** (`notes`, `note`, optional): Enter any additional comments or notes about the stock.
* **contact_phone** (`contact_phone`, `text`, optional): Enter the contact phone number of the vendor.
* **contact_email** (`contact_email`, `email`, optional): Enter the contact email of the vendor.
* **vendor_email** (`vendor_email`, `email`, optional): Enter the email of the vendor.
* **comments** (`comments`, `text`, optional): Enter any comments about the stock.
* **stock_date** (`stock_date`, `date`, optional): Enter the date the stock was received or last checked.
* **stock_status_date** (`stock_status_date`, `date`, optional): Enter the date the stock status was last updated.
* **stock_count** (`stock_count`, `number`, optional): Enter the number of flowers in stock.
* **stock_replenished** (`stock_replenished`, `number`, optional): Enter the number of flowers replenished.
* **stock_low_level** (`stock_low_level`, `number`, optional): Enter the low stock level threshold.
* **stock_critical_level** (`stock_critical_level`, `number`, optional): Enter the critical stock level threshold.
* **stock_warning_level** (`stock_warning_level`, `number`, optional): Enter the stock warning level threshold.
* **stock_high_level** (`stock_high_level`, `number`, optional): Enter the high stock level threshold.
* **stock_status_critical** (`stock_status_critical`, `select_multiple`, required): Select the critical status of the stock (In stock, Out of stock, Needs replenishment).
* **stock_replenishment** (`stock_replenishment`, `number`, required): Enter the number of flowers needed for replenishment.
