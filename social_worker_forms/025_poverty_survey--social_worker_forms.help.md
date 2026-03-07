<thinking>
As a form designer and technical writer, I understand the importance of creating clear and concise help guides for end-users. Before diving into the help guide, I want to acknowledge that the form "Poverty Survey" is designed to collect information about households' economic situations, specifically focusing on income and expenses. This form will help organizations or researchers gather data to better understand and address poverty-related issues. I'll ensure that the help guide is concrete, practical, and relevant to the form's purpose. I'll review the provided YAML fields and create a user-facing help guide that explains each field's purpose, making sure not to invent unsupported business logic.
</thinking>

# Poverty Survey - Help Guide
## Purpose
This form, called "Poverty Survey," is designed to collect information about households' economic situations. It helps organizations or researchers gather data to better understand and address poverty-related issues.

## How To Complete This Form
To complete this form, follow these steps:

1. Answer each field as accurately and completely as possible. If you're unsure about a field, refer to the field explanations below.
2. Fill out the form in order, from the first field to the last.
3. Be honest and truthful when filling out the form. The information collected will be used to improve the community and help those in need.

## Field-by-Field Explanation

* **household_income** (`1`, `number`, required/optional): This question asks about the total income of your household in a month. Answer with a number that represents this income.
* **household_members** (`2`, `number`, required/optional): This question is about the number of people living in your household.
* **family_structure** (`3`, `select_one`, required/true): This question is about the type of family structure you have. Please select one of the following options: Single Person, Married, Single Parent, or Cohabiting.
* **family_type** (`4`, `select_one`, required/true): This question is about the type of family you live with. Please select one of the following options: Family, Non-Family, Non-family living with family member, or Other.
* **household_income_source** (`5`, `select_multiple`, required/true): This question is about the source of your household's income. Please select all that apply from the following options: Job, Investment, Pension, Other, Government assistance, Non-governmental organization.
* **household_expense** (`6`, `number`, required/optional): This question is about the total monthly expenses of your household. Please answer with a number that represents this expense.
* **household_expense_source** (`7`, `select_multiple`, required/true): This question is about the source of your household's expenses. Please select all that apply from the following options: Rent, Utilities, Transportation, Food, Other, Government assistance, Non-governmental organization.
* **household_expense_other** (`8`, `text`, required/optional): This is a free text field where you can provide any other expense not listed in the previous option. Please be as specific as possible.

## Tips

* Answering this form will help organizations or researchers understand your economic situation and help them develop programs and services to support your household.
* If you need help or clarification about any of the fields, refer to the explanations above or contact the organization collecting this information.
* Remember to be honest and truthful when filling out this form.
