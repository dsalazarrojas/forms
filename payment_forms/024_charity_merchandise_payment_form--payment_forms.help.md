## <thinking>...thinking>
This form is meant to collect information for a charity merchandise payment form. It's likely used for online or in-person sales of charity merchandise, where customers can select items to purchase and provide their contact and shipping information. The form is designed to be simple and straightforward, but may have some technical fields for calculating totals and handling payment options. To avoid duplication, users should only fill out this form once per order. To ensure accuracy, please double-check your selections before submitting.</thinking>

# Charity Merchandise Payment Form - Help Guide
## Purpose
The Charity Merchandise Payment Form is designed to collect information from customers for charity merchandise sales. It includes fields for customer contact information, merchandise selection, order totals, shipping details, and payment method.

## How To Complete This Form

1. Fill in your contact information, including First Name, Last Name, Email Address, and Phone Number.
2. Select the items you would like to purchase by filling in the Item 1 - Product Name, Item 1 - Size, and Item 1 - Quantity fields. You can add additional items if needed.
3. Fill in the shipping address for the merchandise, including Street Address, City, State or Province, and Zip Code.
4. Choose a payment method from the options provided.
5. Finally, review the order totals, including Subtotal, Shipping Cost, Tax Amount, and Total Amount Due.

## Field-by-Field Explanation

* **First Name** (`id: 2`, `label: First Name`, `hint: Your first name`, `type: text`, `required: true`): Enter your first name in this field.
* **Last Name** (`id: 3`, `label: Last Name`, `hint: Your last name`, `type: text`, `required: true`): Enter your last name in this field.
* **Email Address** (`id: 4`, `label: Email Address`, `hint: For order confirmation`, `type: email`, `required: true`): Enter your email address here for order confirmation purposes.
* **Phone Number** (`id: 5`, `label: Phone Number`, `hint: Contact number`, `type: text`, `required: true`): Enter your phone number here.
* **Item 1 - Product Name** (`id: 7`, `label: Item 1 - Product Name`, `hint: What are you ordering`, `type: text`, `required: true`): Select the product you would like to purchase from the available options.
* **Item 1 - Size** (`id: 8`, `label: Item 1 - Size`, `hint: Size if applicable`, `type: select_one`, `required: false`): Choose the size of the item if applicable.
* **Item 1 - Quantity** (`id: 9`, `label: Item 1 - Quantity`, `hint: How many`, `type: number`, `required: true`): Enter the quantity of the item you would like to purchase.
* **Item 1 - Unit Price** (`id: 10`, `label: Item 1 - Unit Price`, `hint: Price per item`, `type: number`, `required: true`): Enter the price per unit of the item.
* **Item 2 - Product Name** (`id: 11`, `label: Item 2 - Product Name`, `hint: Optional second item`, `type: text`, `required: false`): Select the product you would like to purchase from the available options (if you want to add more than one item).
* **Item 2 - Quantity** (`id: 12`, `label: Item 2 - Quantity`, `hint: How many of item 2`, `type: number`, `required: false`): Enter the quantity of the item 2 you would like to purchase.
* **Item 2 - Unit Price** (`id: 13`, `label: Item 2 - Unit Price`, `hint: Price per unit`, `type: number`, `required: false`): Enter the price per unit of item 2.
* **Subtotal** (`id: 15`, `label: Subtotal`, `hint: Cost of merchandise`, `type: number`, `required: true`): This field will auto-calculate based on your selections.
* **Shipping Cost** (`id: 16`, `label: Shipping Cost`, `hint: Delivery charge`, `type: number`, `required: false`): This field will auto-calculate based on your shipping address and other selections.
* **Tax Amount** (`id: 17`, `label: Tax Amount`, `hint: Sales tax if applicable`, `type: number`, `required: false`): This field will auto-calculate based on your selections.
* **Total Amount Due** (`id: 18`, `label: Total Amount Due`, `hint: Final total to pay`, `type: number`, `required: true`): This field will auto-calculate based on your selections.
* **Street Address** (`id: 20`, `label: Street Address`, `hint: Where to ship`, `type: text`, `required: true`): Enter the street address where you would like the merchandise to be shipped.
* **City** (`id: 21`, `label: City`, `hint: Destination city`, `type: text`, `required: true`): Enter the city for the shipping address.
* **State or Province** (`id: 22`, `label: State or Province`, `hint: State code`, `type: text`, `required: true`): Enter the state or province for the shipping address.
* **Zip Code** (`id: 23`, `label: Zip Code`, `hint: Postal code`, `type: text`, `required: true`): Enter the zip code for the shipping address.
* **Payment Method** (`id: 25`, `label: Payment Method`, `hint: How will you pay`, `type: select_one`, `required: true`): Choose your payment method from the options provided.
* **Order Date** (`id: 26`, `label: Order Date`, `hint: Today's date`, `type: date`, `required: true`): This field will be filled in automatically with the current date.

## Tips

* Please double-check your selections before submitting the form to ensure accuracy.
* If you have any issues with the form, contact us at [support email or contact info].
