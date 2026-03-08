# Cryptocurrency Trade Order Form - Help Guide
## Purpose
The purpose of this form is to help users place trades on cryptocurrencies with ease and accuracy. It captures essential details about the trade, including the type of trade, currency involved, and payment details.

## How To Complete This Form
1. Select the type of trade you want to execute: "Buy" or "Sell".
2. Choose the cryptocurrency you want to trade.
3. Enter the amount and unit price of the trade.
4. Specify the type of order (Market Order, Limit Order, or Stop Order).
5. Set the stop price and stop limit price as needed.
6. Determine your risk management strategy (Aggressive or Conservative).
7. Set the order status (Open, Closed, or Cancelled).
8. Add any comments about the trade.
9. Confirm the form and review the details.
10. Select the payment method (PayPal, Bank Transfer, or Other).
11. Set the payment status (Paid, Unpaid, or Processing).
12. Add the payment date and time.

## Field-by-Field Explanation
- **Buy or Sell** (`buy_or_sell`, `select_one`, required/optional): Select the type of trade you want to execute, either "Buy" or "Sell".
- **Currency** (`currency`, `select_one`, required/optional): Choose the cryptocurrency you want to trade.
- **Amount** (`amount`, `number`, required/optional): Enter the amount of the cryptocurrency you want to trade.
- **Unit Price** (`unit_price`, `number`, required/optional): Enter the unit price of the trade.
- **Order Type** (`order_type`, `select_one`, required/optional): Choose the type of order (Market Order, Limit Order, or Stop Order).
- **Stop Price** (`stop_price`, `number`, required/optional): Enter the stop price of the trade.
- **Stop Limit Price** (`stop_limit_price`, `number`, required/optional): Enter the stop limit price of the trade.
- **Take Profit** (`take_profit`, `number`, required/optional): Set the take profit of the trade.
- **Risk Management** (`risk_management`, `select_one`, required/optional): Determine your risk management strategy (Aggressive or Conservative).
- **Order Status** (`order_status`, `select_one`, required/optional): Set the order status (Open, Closed, or Cancelled).
- **Comments** (`order_comments`, `text`, required/optional): Add any comments about the trade.
- **Submit Form** (`submit_form`, `text`, required/optional): Confirm and review the details before submitting the form.
- **Confirm Form** (`confirm_form`, `text`, required/optional): Review and confirm the form details.
- **Confirm Comments** (`confirm_comments`, `text`, required/optional): Add any final comments before submitting the form.
- **Order Preferences** (`order_preferences`, `note`, required/optional): Add any notes about the trade.
- **Payment Method** (`payment_method`, `select_one`, required/optional): Choose the payment method (PayPal, Bank Transfer, or Other).
- **Payment Status** (`payment_status`, `select_one`, required): Set the payment status (Paid, Unpaid, or Processing).
- **Payment Date** (`payment_date`, `date`, required/optional): Add the payment date and time.
- **Payment Time** (`payment_time`, `time`, required/optional): Add the payment time.
