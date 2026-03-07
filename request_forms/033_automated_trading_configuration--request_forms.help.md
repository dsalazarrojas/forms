<thinking>
This form is used to configure settings for automated trading, which is a crucial part of trading activities. To confirm, you are about to configure settings for automated trading, not manual trading. This form will help you set up your trading account, risk management, and other relevant details.
Please ensure that you're not already set up or in the middle of configuring these settings. If you're unsure, double-check with your supervisor or trading team.
</thinking>

# Automated Trading Configuration - Help Guide
## Purpose
This guide helps users understand the Automated Trading Configuration form. It walks them through the form's purpose, how to complete it, and explains each field in detail.

## How To Complete This Form
To complete this form, follow these steps:
1. Read this guide carefully.
2. Review each field and its corresponding explanation.
3. Fill out the form accordingly.

## Field-by-Field Explanation
### 1. First Name (<code>first_name</code>, <code>text</code>, required: <code>true</code>)
Your first name is the first part of your name.
### 2. Last Name (<code>last_name</code>, <code>text</code>, required: <code>true</code>)
This field is for your last name.
### 3. Email Address (<code>email</code>, <code>email</code>, required: <code>true</code>)
Enter your primary email address that will be used for communication and notifications.
### 4. Phone Number (<code>phone</code>, <code>text</code>, required: <code>true</code>)
Your contact number for urgent matters.
### 5. Trading Account Number (<code>account_number</code>, <code>text</code>, required: <code>true</code>)
Your trading account number.
### 6. Account Type (<code>account_type</code>, <code>select_one</code>, required: <code>true</code>)
Choose the type of account you have:
	* Individual
	* Joint
	* Corporate
	* IRA
	* Trust
	* Other
### 7. Trading Platform (<code>trading_platform</code>, <code>select_one</code>, required: <code>true</code>)
Select the trading platform you use:
	* MetaTrader 4
	* MetaTrader 5
	* TradingView
	* ThinkOrSwim
	* Interactive Brokers
	* E-Trade
	* TD Ameritrade
	* Other
### 8. Broker Name (<code>broker_name</code>, <code>text</code>, required: <code>true</code>)
Enter the name of your broker.
### 9. Trading Strategy Information (<code>strategy_info</code>, <code>note</code>, required: <code>false</code>)
This field is for any additional information about your trading strategy.
### 10. Strategy Type (<code>strategy_type</code>, <code>select_one</code>, required: <code>true</code>)
Choose the type of trading strategy:
	* Trend Following
	* Mean Reversion
	* Breakout
	* Scalping
	* Day Trading
	* Swing Trading
	* Position Trading
	* Arbitrage
	* Grid Trading
	* Martingale
	* Other
### 11. Strategy Name (<code>strategy_name</code>, <code>text</code>, required: <code>false</code>)
This field is for a custom name for your trading strategy.
### 12. Trading Instruments (<code>trading_instruments</code>, <code>select_multiple</code>, required: <code>true</code>)
Select the instruments you want to trade:
	* Forex Pairs
	* Stocks
	* Indices
	* Commodities
	* Cryptocurrencies
	* Options
	* Futures
	* ETFs
### 13. Specific Symbols (<code>specific_symbols</code>, <code>text</code>, required: <code>false</code>)
List specific symbols you want to trade.
### 14. Chart Timeframe (<code>timeframe</code>, <code>select_one</code>, required: <code>true</code>)
Choose the timeframe for your chart:
	* 1 Minute
	* 5 Minutes
	* 15 Minutes
	* 30 Minutes
	* 1 Hour
	* 4 Hours
	* Daily
	* Weekly
### 15. Trading Hours (<code>trading_hours</code>, <code>select_one</code>, required: <code>true</code>)
Choose when you want to trade:
	* 24 Hours
	* Market Hours Only
	* Specific Sessions
	* Custom Hours
### 16. Risk Management (<code>risk_management</code>, <code>note</code>, required: <code>false</code>)
This field is for any additional information about your risk management settings.
### 17. Risk Per Trade (<code>risk_per_trade</code>, <code>number</code>, required: <code>true</code>)
Set a percentage for risk per trade.
### 18. Maximum Daily Loss (<code>max_daily_loss</code>, <code>number</code>, required: <code>true</code>)
Set a maximum daily loss percentage.
### 19. Maximum Drawdown (<code>max_drawdown</code>, <code>number</code>, required: <code>true</code>)
Set a maximum drawdown percentage.
### 20. Stop Loss Type (<code>stop_loss_type</code>, <code>select_one</code>, required: <code>true</code>)
Choose the type of stop loss:
	* Fixed Pips
	* Percentage
	* Trailing
	* ATR Based
	* Support Resistance
	* None
### 21. Stop Loss Value (<code>stop_loss_value</code>, <code>number</code>, required: <code>false</code>)
Set a default stop loss value.
### 22. Take Profit Type (<code>take_profit_type</code>, <code>select_one</code>, required: <code>true</code>)
Choose the type of take profit:
	* Fixed Pips
	* Percentage
	* Risk Reward Ratio
	* Trailing
	* Multiple Targets
	* None
### 23. Take Profit Value (<code>take_profit_value</code>, <code>number</code>, required: <code>false</code>)
Set a default take profit value.
### 24. Risk Reward Ratio (<code>risk_reward_ratio</code>, <code>number</code>, required: <code>false</code>)
Set a minimum risk reward ratio.
### 25. Position Sizing Method (<code>position_sizing</code>, <code>select_one</code>, required: <code>true</code>)
Choose how to size positions:
	* Fixed Lot
	* Percentage of Equity
	* Risk Based
	* Kelly Criterion
	* Fixed Dollar
### 26. Fixed Lot Size (<code>fixed_lot_size</code>, <code>number</code>, required: <code>false</code>)
If you choose fixed lot size, set the value here.
### 27. Maximum Open Positions (<code>max_positions</code>, <code>number</code>, required: <code>true</code>)
Set a maximum open positions limit.
### 28. Investment Information (<code>investment_info</code>, <code>note</code>, required: <code>false</code>)
This field is for any additional information about your investment details.
### 29. Initial Capital (<code>initial_capital</code>, <code>number</code>, required: <code>true</code>)
Set the initial capital amount.
### 30. Account Currency (<code>currency</code>, <code>select_one</code>, required: <code>true</code>)
Choose the base currency for your account:
	* USD
	* EUR
	* GBP
	* JPY
	* CHF
	* AUD
	* CAD
	* Other
### 31. Leverage (<code>leverage</code>, <code>select_one</code>, required: <code>false</code>)
Select the leverage for your account:
	* 6:1
	* 7:1
	* 9:1
	* 11:1
	* 1:100
	* 1:200
	* 1:500
### 32. Automation Settings (<code>automation_settings</code>, <code>note</code>, required: <code>false</code>)
This field is for any additional information about your automation settings.
### 33. Level of Automation (<code>automation_level</code>, <code>select_one</code>, required: <code>true</code>)
Choose the level of automation:
	* Fully Automated
	* Semi-Automated
	* Signal Based
	* Manual Confirmation Required
### 34. Trade Execution (<code>trade_execution</code>, <code>select_one</code>, required: <code>true</code>)
Choose the type of trade execution:
	* Market Order
	* Limit Order
	* Stop Order
	* Best Available
### 35. Slippage Tolerance (<code>slippage_tolerance</code>, <code>number</code>, required: <code>false</code>)
Set the maximum slippage tolerance.
### 36. Notifications (<code>notifications</code>, <code>select_multiple</code>, required: <code>false</code>)
Select which notifications you want:
	* Trade Opened
	* Trade Closed
	* Stop Loss Hit
	* Take Profit Hit
	* Daily Summary
	* Weekly Report
	* Margin Alert
	* Error Notifications
### 37. Notification Method (<code>notification_method</code>, <code>select_one</code>, required: <code>false</code>)
Choose the notification method:
	* Email
	* SMS
	* Push Notification
	* All of Above
### 38. Backtesting (<code>backtesting</code>, <code>note</code>, required: <code>false</code>)
This field is for any additional information about your backtesting preferences.
### 39. Backtest Required (<code>backtest_required</code>, <code>select_one</code>, required: <code>true</code>)
Choose whether backtesting is required:
	* 'True'
	* 'False'
### 40. Backtest Period (<code>backtest_period</code>, <code>select_one</code>, required: <code>false</code>)
Choose the backtest period:
	* 1 Month
	* 3 Months
	* 6 Months
	* 1 Year
	* 2 Years
	* 5 Years
	* Max Available
### 41. Demo Period (<code>demo_period</code>, <code>select_one</code>, required: <code>false</code>)
Choose the demo period:
	* 1 Week
	* 2 Weeks
	* 1 Month
	* Skip Go Live
### 42. Additional Parameters (<code>additional_parameters</code>, <code>text</code>, required: <code>false</code>)
This field is for any other settings you may need.
### 43. Terms and Conditions (<code>terms_acceptance</code>, <code>select_one</code>, required: <code>true</code>)
Acknowledge that you agree to the terms and conditions.
### 44. Risk Disclosure Acknowledgment (<code>risk_disclosure</code>, <code>select_one</code>, required: <code>true</code>)
Acknowledge that you understand the risks involved.
### 45. Trader Signature (<code>trader_signature</code>, <code>text</code>, required: <code>true</code>)
Provide your digital signature.

## Tips
* Review each field carefully.
* Ensure you fill out all required fields.
* Double-check your settings before submitting the form.

---

This guide should help users understand and fill out the Automated Trading Configuration form accurately and effectively.
