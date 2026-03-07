<thinking>...This form is designed to generate a random number based on the user's input. The form has 5 pages, but for the sake of this example, we will focus on the first 4 pages. The first page is for inputting a random number, the second page is for specifying a mathematical formula, the third page is for selecting a button to generate the random number, and the fourth page is for displaying the result. The user can choose to reload the form or not...</thinking>

# Generate Random Number - Help Guide
## Purpose
The purpose of this form is to generate a random number based on the user's input. This number can be generated with a specific mathematical formula, and the user can choose to reload the form for new results.

## How To Complete This Form
To complete this form, follow these steps:

1. On the first page, enter a random number in the field labeled "Random Number".
2. On the second page, type in a mathematical formula that defines the random number you want to generate.
3. On the third page, select the "Generate Random Number" button that best describes the type of random number you want to generate (e.g. "Random Number", "Another Number", "Even More").
4. Optionally, you can choose to reload the form for new results by selecting the "Reload" option on the fourth page.

## Field-by-Field Explanation
- **Random Number** (`random_number`, `number`, required/optional): Enter a random number that you want to use as a starting point for the generated number.
- **Formula** (`formula`, `text`, required/optional): Type in a mathematical formula that defines the random number you want to generate. This will be used in conjunction with the random number you entered on the previous page.
- **Generate Random Number** (`generate_button`, `select_one`, required/optional): Select the type of random number you want to generate (e.g. "Random Number", "Another Number", "Even More").
- **Result** (`result`, `number`, required/optional): This is the random number generated based on your input. You will not need to fill anything in this field, as it will be automatically filled in.
- **Reload** (`reload`, `select_one`, required/optional): Select "Yes - Random" to reload the form and generate a new random number, or select "False" to not reload.
