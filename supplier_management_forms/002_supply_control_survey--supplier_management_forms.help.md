<thinking>...</thinking>

# Supply Control Survey - Help Guide
## Purpose

This form, known as the "Supply Control Survey," is designed to collect information about the current stock levels, stockout situations, and ordering performance of your suppliers. The purpose of this form is to help you gather data that can inform your supply chain management decisions, such as optimizing stock levels, improving stockout management, and enhancing ordering processes.

## How To Complete This Form

To complete this form, follow these steps:

1. Select all applicable stock levels for your suppliers by checking the relevant options under the "Stock Levels" section.
2. Choose whether you have experienced stockouts with your suppliers by selecting "Yes" or "No" under the "Stockout" section.
3. Evaluate your suppliers' ordering performance by selecting the best fit from the options under the "Ordering Performance" section.
4. Review the "Stock Levels Historical" section to provide additional comments or notes about your suppliers' historical stock levels.

## Field-by-Field Explanation

* **Stock Levels** (`stock_levels`, select_multiple, required: false): 
Choose all applicable stock levels for your suppliers from the list of options (Stock level is low, Stock level is medium, Stock level is high).
* **Stockout** (`stockout`, select_one, required: false): Select "Yes" if you have experienced stockouts with your suppliers, or "No" otherwise.
* **Ordering Performance** (`ordering_performance`, select_multiple, required: false): Evaluate your suppliers' ordering performance by selecting the best fit from the list of options (Excellent, Good, Fair).
* **Stockouts** (`stockouts`, select_one, required: false): This field is not actually a field in the form, but based on the YAML provided, we'll assume it was meant to be a field "Stockouts" and its label will be ignored, instead we'll use "Stockouts" as the label for the field "stockout".
* **Stock Levels Historical** (`stock_levels_historical`, note, required: false): You can add any additional comments or notes about your suppliers' historical stock levels in this section.

## Tips

* Please answer all questions honestly and accurately.
* If you're unsure about any of the options, refer to your supplier agreements or contracts for guidance.
* This form is meant to be a quick and easy way to gather information about your suppliers, so answer each field as briefly as possible while still providing accurate and complete information.
