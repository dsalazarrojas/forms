<thinking>
The "flight_punctuality_statistics_report" form is designed to collect data on flight punctuality statistics. It's intended for analyzing flight performance and identifying trends. This form should not be used for real-time flight scheduling or flight operation planning purposes.

Please ensure that this form is used correctly to prevent data duplication. Make sure to select the correct category (Airline, Airport, Other) and flight status (On time, Delayed, Cancelled) accordingly. Selecting all possible options may lead to inaccurate data collection. Similarly, ensure that you're selecting the correct delay reasons and causes.

This guide is to help you complete the form accurately and effectively.
</thinking>

# flight_punctuality_statistics_report - Help Guide
## Purpose
The "flight_punctuality_statistics_report" form is designed to collect data on flight punctuality statistics. It helps in analyzing flight performance and identifying trends.

## How To Complete This Form
- To start, select the category that best describes the flight (Airline, Airport, Other).
- Choose the correct flight status (On time, Delayed, Cancelled) from the available options.
- Enter the flight number (if available).
- Select the date of the flight.
- Choose the flight status (On time, Delayed, Cancelled).
- Select the delay reason(s) that apply to the flight.
- Enter the flight duration (if available).
- Enter the delay duration (if applicable).
- Select the delay cause(s) that apply to the flight.

## Field-by-Field Explanation

* **Category** (`category`, `select_one`, required: false): Select the category that best describes the flight. This could be an airline, airport, or other.
* **Flight Number** (`flight_number`, `number`, required: false): Enter the flight number if it's available. This will help in identifying the specific flight.
* **Date** (`date`, `date`, required: false): Select the date of the flight. This is crucial for analyzing historical data.
* **Flight Status** (`flight_status`, `select_one`, required: false): Choose the correct flight status (On time, Delayed, Cancelled).
* **Delay Reason** (`delay_reason`, `select_multiple`, required: false): Select the reason(s) for the delay. This could be ATC, Weather, Maintenance, Mechanical, or Other.
* **Flight Duration** (`flight_duration`, `number`, required: false): Enter the total flight duration. This will help in calculating average flight times.
* **Delay Duration** (`delay_duration`, `number`, required: false): Enter the total delay duration. This will help in identifying average delay times.
* **Delay Cause** (`delay_cause`, `select_multiple`, required: false): Select the cause(s) for the delay. This could be Air Traffic Control, Weather, Aircraft Maintenance, or Other.
