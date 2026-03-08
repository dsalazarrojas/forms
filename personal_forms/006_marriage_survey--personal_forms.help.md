# Marriage Survey - Help Guide

## Purpose
The Marriage Survey is designed to collect information on marriage-related data for analysis and reporting. It asks questions about marital status, family structure, income, and other demographic details to provide insights into marriage and family dynamics.

## How To Complete This Form
1. Select the correct answer for each question based on your marital status and family situation.
2. Fill in any required fields (indicated by an asterisk \*).
3. If you have family members not listed, use the "other_family_member" fields to provide details.

## Field-by-Field Explanation
* **Are You Married?** (`are_you_married`, select_one, required/optional):
	+ Select "never married" if you've never been married.
	+ Select "married" if you're currently married.
	+ Select "in a domestic partnership" if you're in a domestic partnership.
	+ Select "in a civil union" if you're in a civil union.
	+ Select "other" if you have another marital status.
* **Husband/Wife Name** (`husband_wife_name`, text, optional):
	+ Enter your spouse's name if you're married or in a domestic partnership.
* **Years Married** (`years_married`, number, optional):
	+ Enter the number of years you've been married.
* **Have Children?** (`have_children`, select_multiple, optional):
	+ Select all that apply if you have children:
		- "no children"
		- "one child"
		- "two or more children"
* **Husband's Income** (`income_husband`, number, optional):
	+ Enter your spouse's annual income (if applicable).
* **Wife's Income** (`income_wife`, number, optional):
	+ Enter your wife's annual income (if applicable).
* **Family Members** (`family_members`, select_multiple, optional):
	+ Select all that apply if you're related to other family members:
		+ "spouse"
		+ "parents"
		+ "children"
		+ "other relatives"
		+ "other"
	+ Use "other_family_member" fields to provide details about other family members not listed.
* **Other Family Members?** (`other_family_member`, select_multiple, optional):
	+ Select "Yes" if you have other family members not listed.
* **Other Family Member Details** (`other_family_member_details`, text, optional):
	+ Enter details about other family members not listed.
* **Annual Income of Other Family Member** (`other_family_member_details`, number, optional):
	+ Enter the annual income of other family members not listed.
