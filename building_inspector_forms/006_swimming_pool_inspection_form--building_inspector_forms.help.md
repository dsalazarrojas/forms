# swimming_pool_inspection_form - Help Guide
## Purpose
The swimming pool inspection form is used to document the condition and details of a swimming pool during a routine inspection.

## How To Complete This Form

1. **Pool Address**: Enter the address of the swimming pool being inspected.
2. **Inspector Name**: Enter the name of the inspector performing the inspection.
3. **Inspection Date**: Select the date of the inspection using the date picker.
4. **Pool Type**: Select the type of pool (in-ground, above-ground, or semi-in-ground).
5. **Pool Condition**: Select all conditions that apply to the pool's current state (good, needs repair, or abandoned).
6. **Pool Size**: Enter the size of the pool.

## Field-by-Field Explanation

* **Pool Address**: (`pool_address`, `text`, required: false) - Enter the address of the swimming pool to be inspected.
* **Inspector Name**: (`inspector_name`, `text`, required: false) - Enter the name of the inspector performing the inspection.
* **Inspection Date**: (`inspection_date`, `date`, required: false) - Select the date of the inspection.
* **Pool Type**: (`pool_type`, `select_one`, required: false) - Select the type of pool (in-ground, above-ground, or semi-in-ground).
* **Pool Condition**: (`pool_condition`, `select_multiple`, required: false) - Select all conditions that apply to the pool's current state (good, needs repair, or abandoned).
* **Pool Size**: (`pool_size`, `number`, required: false) - Enter the size of the pool.
