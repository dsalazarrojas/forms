<thinking>
We need to ensure that the form is clear and easy to use for end-users. The form is an "Meat Order Form" that is likely used by butcher shops or restaurants to record customer orders of meat. The form should be filled out for each order made. This form likely does not need any specific checks for duplication since it's an order form, which typically has different orders.

This guide will cover each field and how to complete it for users.
</thinking>

# Meat Order Form - Help Guide

## Purpose
This form is used for customers or sales staff to record an order for meat products at butcher shops or restaurants.

## How To Complete This Form

- First, start by filling out the required fields for the order details.
- Ensure that you select the correct meat type and sub-type for the order.
- Enter the quantity of each type and sub-type of meat in the corresponding fields.
- If necessary, add tax and calculate the subtotal and total for the order.
- Finally, select the order date.

## Field-by-Field Explanation

- **Meat Type** (`meat_type`, select_one, optional):
  Choose the type of meat for the order, such as Beef, Poultry, or Seafood.
- **Meat Sub Type** (`meat_sub_type`, select_multiple, optional):
  Choose multiple sub-types of meat for the order, such as Ground, Steak, Roast, or Grill.
- **Meat Cut** (`meat_cut`, select_multiple, optional):
  Choose multiple cuts of meat for the order, such as Rib, Loin, Rump, or Round.
- **Quantity** (`quantity`, number, optional):
  Enter the quantity of each type and sub-type of meat in whole numbers.
- **Unit Price** (`unit_price`, number, optional):
  Enter the unit price of each type and sub-type of meat.
- **Subtotal** (`sub_total`, number, optional):
  Calculate the subtotal by multiplying the quantity and unit price of each item.
- **Tax** (`tax`, number, optional):
  Enter the tax for the entire order.
- **Total** (`total`, number, optional):
  Calculate the total by adding the subtotal and tax.
- **Order Date** (`order_date`, date, optional):
  Choose the date of the order.

## Tips

- Make sure to accurately record each item in the order form to avoid mistakes.
- If the customer has any special requests or comments, please include them in the "Order Comments" field.
- Double-check the total and subtotal before submitting the form.
- Ensure that the meat type, sub-type, and cut are correctly selected to provide accurate prices and quantity information.
