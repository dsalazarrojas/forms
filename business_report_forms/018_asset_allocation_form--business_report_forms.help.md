<thinking>
To determine whether to display the Asset Allocation Form, the following checks should be performed:

- The user is a registered investor or has the authority to invest on behalf of the entity.
- The user has not already completed the form. To check for this, verify that the user's investor ID is not present in the database or that a specific flag has not been set to prevent duplicate forms from being filled out.

If the conditions are met, the form should be displayed. Otherwise, an error message should be displayed to the user, indicating that they are not authorized or that they have already completed the form.

The Asset Allocation Form is used to collect information from investors to create their investment portfolios. This form is a crucial part of the investment process, as it helps the investment advisor create a tailored investment plan that suits the investor's goals, risk tolerance, and current financial situation.

The form is divided into two main sections: the demographic and experience section, and the investment preferences and objectives section.

The demographic and experience section collects information about the investor, such as their name, contact information, and experience with investing. This section helps the advisor understand the investor's background and make recommendations accordingly.

The investment preferences and objectives section collects information about the investor's investment goals, risk tolerance, and current investments. This section helps the advisor create an investment plan that aligns with the investor's objectives and risk tolerance.

The form is filled out by the investor, and the information is then used by the advisor to create a comprehensive investment plan. The plan is regularly reviewed and updated as the investor's situation changes.

The Asset Allocation Form is a powerful tool for creating personalized investment plans that meet the needs of diverse investors. By filling out the form accurately and honestly, investors can expect a tailored investment strategy that helps them achieve their financial goals.

</thinking>

# Asset Allocation Form - Help Guide
## Purpose

The Asset Allocation Form is a crucial part of the investment process. It is used to collect information from investors to create their personalized investment portfolios. The form is divided into two main sections: demographic and experience, and investment preferences and objectives.

## How to Complete This Form

To complete the form accurately, please follow these steps:

1. **Provide your demographic and experience information**: Fill in your full legal name, contact information, and experience with investing.
2. **Choose your investment objectives and risk tolerance**: Select your primary investment objective, risk tolerance, and investment timeframe.
3. **Specify your investment preferences**: Allocate your investment amount, choose your preferred sectors, and select your liquidity needs.
4. **Review your current investments**: Indicate whether you have existing investments and provide their approximate value.
5. **Review and sign the form**: Review your answers carefully and sign the form to confirm.

## Field-by-Field Explanation

* **Investor Name** (`1`, `text`, required): Enter your full legal name.
* **Investor ID or Account Number** (`2`, `text`, required): Provide your investor ID or account number.
* **Email Address** (`3`, `email`, required): Enter your email address for communication purposes.
* **Phone Number** (`4`, `text`, required): Enter your contact phone number.
* **Date of Birth** (`5`, `date`, required): Enter your date of birth for age verification.
* **Investment Experience** (`6`, `select_one`, required): Select your level of investment experience.
	+ `Beginner - New to Investing`
	+ `Intermediate - Some Experience`
	+ `Advanced - Very Experienced`
	+ `Professional - Expert Level`
* **Primary Investment Objective** (`7`, `select_one`, required): Select your primary investment objective.
	+ `Capital Preservation`
	+ `Income Generation`
	+ `Balanced Growth`
	+ `Aggressive Growth`
	+ `Speculation`
* **Risk Tolerance** (`8`, `select_one`, required): Select your risk tolerance level.
	+ `Conservative - Low Risk`
	+ `Moderate - Medium Risk`
	+ `Aggressive - High Risk`
	+ `Very Aggressive - Very High Risk`
* **Investment Timeframe** (`9`, `select_one`, required): Select your investment timeframe.
	+ `Short Term - Less than 3 years`
	+ `Medium Term - 3 to 10 years`
	+ `Long Term - 10 to 20 years`
	+ `Very Long Term - Over 20 years`
* **Total Investment Amount** (`10`, `number`, required): Enter the total amount you plan to invest.
* **Stocks Allocation Percentage** (`11`, `number`, required): Enter the percentage you want to allocate to stocks.
* **Bonds Allocation Percentage** (`12`, `number`, required): Enter the percentage you want to allocate to bonds.
* **Cash Allocation Percentage** (`13`, `number`, required): Enter the percentage you want to allocate to cash equivalents.
* **Real Estate Allocation Percentage** (`14`, `number`, optional): Enter the percentage you want to allocate to real estate (optional).
* **Alternatives Allocation Percentage** (`15`, `number`, optional): Enter the percentage you want to allocate to alternative investments (optional).
* **Geographic Preference** (`16`, `select_one`, required): Select where you want to invest.
	+ `Domestic Only`
	+ `International Developed`
	+ `Emerging Markets`
	+ `Global Diversified`
* **Sector Preferences** (`17`, `select_multiple`, optional): Select your preferred sectors.
	+ `Technology`
	+ `Healthcare`
	+ `Financial Services`
	+ `Consumer Goods`
	+ `Energy`
	+ `Utilities`
	+ `Real Estate`
	+ `No Preference`
* **Do You Need Regular Income?** (`18`, `select_one`, required): Select whether you need regular income from investments.
	+ `Yes - Primary Income Source`
	+ `Yes - Supplemental Income`
	+ `No - Reinvest All`
* **Tax Considerations** (`19`, `select_one`, optional): Select any tax concerns.
	+ `Tax-Advantaged Accounts Only`
	+ `Taxable Accounts`
	+ `Tax Loss Harvesting Needed`
	+ `No Specific Concerns`
* **Liquidity Needs** (`20`, `select_one`, required): Select your liquidity needs.
	+ `High - Need Access Within 1 Year`
	+ `Medium - May Need in 1-5 Years`
	+ `Low - Won't Need for 5+ Years`
* **Do You Have Existing Investments?** (`21`, `select_one`, required): Select whether you have existing investments.
	+ `Yes`
	+ `No`
* **Existing Portfolio Value** (`22`, `number`, optional): Enter the approximate value of your existing investments (optional).
* **Financial Advisor Name** (`23`, `text`, optional): Enter your financial advisor's name if you have one.
* **Next Review Date** (`24`, `date`, required): Select when you want to review your investment allocation.
* **Investor Signature** (`25`, `text`, required): Type your name to sign the form.
* **Financial Advisor Signature** (`26`, `text`, optional): Type your financial advisor's name to sign the form (optional).

## Tips

* Please answer the questions honestly and accurately to ensure the best possible investment plan.
* Review your answers carefully before signing the form.
* If you have any questions or concerns, please contact your financial advisor.
