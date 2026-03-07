# Bartender Closing Checklist - Help Guide

## Purpose
The Bartender Closing Checklist is a form designed to help closing bartenders ensure that they have properly closed their shift by completing a comprehensive checklist of tasks. This form helps maintain a clean and organized bar environment, ensures accurate accounting and inventory, and communicates with management. By completing this form, you will be able to accurately report on your tasks, identify any issues, and prepare for the next shift.

## How To Complete This Form
To complete the Bartender Closing Checklist, follow these steps:

1. Enter your name in the `Bartender Name` field.
2. Select the date of your shift in the `Shift Date` field.
3. Enter the time you finished your shift in the `Shift End Time` field.
4. Choose the bar section you worked in from the `Bar Section` dropdown menu.
5. Confirm if you counted and reconciled the cash drawer by selecting the relevant option in the `Cash Drawer Counted` field.
6. Enter the final total cash amount in the `Final Drawer Amount` field, if applicable.
7. Answer the questions regarding credit card batching, tip reporting, and liquor bottle restocking.
8. Confirm if you properly closed and secured all coolers, turned off beer taps, and cleaned all equipment, bar surfaces, and sinks.
9. Select whether or not you notified your manager of the shift's completion.
10. Provide any additional information or issues that need to be reported in the `Any Issues to Report` field.
11. Enter any important information for the next shift in the `Notes for Opening Bartender` field.
12. Sign your name in the `Bartender Signature` field.

## Field-by-Field Explanation

* **Bartender Name** (`bartender_name`, text, required): Enter your full name as the closing bartender.
* **Shift Date** (`shift_date`, date, required): Enter the date of your shift.
* **Shift End Time** (`shift_time`, time, required): Enter the time you finished your shift.
* **Bar Section** (`bar_section`, select_one, required): Choose the bar section you worked in (`Main bar`, `Side bar`, `Patio bar`, `Full bar`, `All sections`).
* **Cash Drawer Counted** (`cash_drawer_count`, select_one, required): Confirm if you counted and reconciled the cash drawer (`Yes, balanced`, `Yes, over by amount`, `Yes, short by amount`, `Not applicable`).
* **Final Drawer Amount** (`drawer_amount`, number, optional): Enter the total cash amount if applicable.
* **Credit Card Batch Closed** (`credit_card_batch`, select_one, required): Confirm if all credit cards were batched out (`True`, `False`, `Not applicable`).
* **Tips Reported** (`tips_reported`, select_one, required): Confirm if you reported all tips (`True`, `False`).
* **Liquor Bottles Restocked** (`liquor_bottles_restocked`, select_one, required): Confirm if all liquor bottles were restocked (`Yes, fully restocked`, `Partially restocked`, `No, manager will handle`).
* **Beer Inventory Checked** (`beer_inventory_checked`, select_one, required): Confirm if you checked and recorded beer levels (`True`, `False`, `Not applicable`).
* **Wine Inventory Checked** (`wine_inventory_checked`, select_one, required): Confirm if you checked and recorded wine bottles (`True`, `False`, `Not applicable`).
* **Garnishes Properly Stored** (`garnishes_stored`, select_one, required): Confirm if all garnishes were refrigerated (`True`, `False`, `Not applicable`).
* **Ice Bins Cleaned** (`ice_bins_cleaned`, select_one, required): Confirm if you cleaned all ice bins (`True`, `False`).
* **Bar Tools Washed** (`bar_tools_washed`, select_one, required): Confirm if all bar tools were washed (`Yes, all washed`, `Some remaining`, `False`).
* **Glassware Washed** (`glassware_washed`, select_one, required): Confirm if all glassware was washed and stored (`True`, `Partially`, `False`).
* **Bar Counters Wiped Down** (`bar_counters_wiped`, select_one, required): Confirm if all bar counters were cleaned (`True`, `False`).
* **Sinks Cleaned** (`sinks_cleaned`, select_one, required): Confirm if all sinks were sanitized (`True`, `False`).
* **Floors Cleaned** (`floors_cleaned`, select_one, required): Confirm if the bar area was swept and mopped (`True`, `False`).
* **Trash Removed** (`trash_removed`, select_one, required): Confirm if all trash was removed (`True`, `False`).
* **Refrigerators Secured** (`refrigerators_secured`, select_one, required): Confirm if all coolers were properly closed (`True`, `False`).
* **Beer Taps Turned Off** (`taps_turned_off`, select_one, required): Confirm if all beer taps and CO2 lines were secured (`True`, `False`, `Not applicable`).
* **Lights Turned Off** (`lights_turned_off`, select_one, required): Confirm if all bar lights were turned off (`True`, `False`).
* **Equipment Secured** (`equipment_secured`, select_one, required): Confirm if all equipment was locked and secured (`True`, `False`).
* **Manager Notified** (`manager_notification`, select_one, required): Confirm if you notified your manager of the shift's completion (`True`, `False`).
* **Any Issues to Report** (`issues_encountered`, text, optional): Enter any important information or issues that need to be reported.
* **Notes for Opening Bartender** (`notes_for_opening`, text, optional): Enter any important information for the next shift.
* **Bartender Signature** (`bartender_signature`, text, required): Sign your name as the closing bartender.
* **Manager Initials** (`manager_initials`, text, optional): Enter your manager's initials for verification purposes.
