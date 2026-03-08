<thinking>
The Commission Transaction Record form is a crucial tool for accounting and sales teams to accurately track and record commission transactions. This form ensures that all relevant details are captured, making it easier to calculate commissions and manage financials. To avoid duplication, ensure that each transaction is recorded once and accurately. This form is designed to be comprehensive, covering all aspects of a commission transaction from transaction information to payment details.
</thinking>

# Commission Transaction Record - Help Guide
## Purpose
The Commission Transaction Record form is used to track and record commission transactions, ensuring accurate and timely financial management.

## How To Complete This Form
1.  Fill in the required fields with accurate and detailed information about the commission transaction.
2.  Select the relevant transaction type from the provided options.
3.  Enter the transaction details, including employee information, deal value, product or service sold, commission rate, commission amount, and net commission.
4.  Specify the payment information, including payment status, payment method, and payment date.
5.  Confirm the fiscal period this transaction belongs to.
6.  Provide any additional notes or comments about the transaction.
7.  Record the transaction by specifying the name of the person recording this transaction.

## Field-by-Field Explanation
* **Transaction Date** (`id: 2`, `type: date`, required): Enter the date of the commission transaction.
* **Transaction ID** (`id: 3`, `type: text`, required): Enter the unique transaction reference number.
* **Transaction Type** (`id: 4`, `type: select_one`, required): Select the type of commission transaction (e.g., New Sale, Renewal, Referral, etc.).
* **Employee Name** (`id: 6`, `type: text`, required): Enter the full name of the employee who earned the commission.
* **Employee ID** (`id: 7`, `type: text`, required): Enter the employee identification number.
* **Department** (`id: 8`, `type: select_one`, required): Select the department of the employee (e.g., Sales, Business Development, Account Management, etc.).
* **Deal Value** (`id: 11`, `type: number`, required): Enter the total value of the deal in USD.
* **Product/Service** (`id: 12`, `type: text`, required): Enter the product or service sold.
* **Commission Rate** (`id: 14`, `type: number`, required): Enter the commission percentage applied.
* **Commission Amount** (`id: 15`, `type: number`, required): Enter the total commission amount in USD.
* **Net Commission** (`id: 17`, `type: number`, required): Enter the net commission after splits in USD.
* **Payment Status** (`id: 19`, `type: select_one`, required): Select the current payment status (e.g., Pending, Approved, Paid, etc.).
* **Payment Date** (`id: 20`, `type: date`, required): Enter the date payment was or will be made.
* **Payment Method** (`id: 21`, `type: select_one`, required): Select the method of payment (e.g., Direct Deposit, Check, Payroll, etc.).
* **Fiscal Period** (`id: 22`, `type: text`, required): Enter the fiscal period this transaction belongs to.
* **Approval Required** (`id: 25`, `type: select_one`, required): Specify if this transaction requires approval (Yes or No).
