<thinking>...</thinking>

# Energy Flow Assessment - Help Guide
## Purpose
The Energy Flow Assessment form is used to collect site-specific information for energy flow analysis. This form is used to gather data on site inflow and outflow, loss areas, and other relevant site information.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the relevant site information and energy flow options from the dropdown menus.
2. Choose the correct site inflow and outflow options.
3. Identify the loss areas affecting the site.
4. Provide any additional comments or site-specific data.

## Field-by-Field Explanation

### Main Page
* **Main Page** (`main_page`, text, required: false): This is the title of the form.

### Site Information
* **Site Information** (`site_info`, select_multiple, required: false): Select the Site Name, Site ID, Site Location, and Site Capacity that apply to your site.
  - Site Name: the name of the site.
  - Site ID: a unique identifier for the site.
  - Site Location: the physical location of the site.
  - Site Capacity: the maximum capacity of the site.

### Energy Flow
* **Energy Flow** (`energy_flow`, select_one, required: false): Select the type of energy flow that applies to your site.
  - Site Inflow: energy entering the site from off-site.
  - Process Inflow: energy entering the site from internal processes.
  - Transmission Inflow: energy entering the site from transmission lines.
  - Distribution Inflow: energy entering the site from distribution lines.
  - Site Outflow: energy leaving the site.
  - Process Outflow: energy leaving the site from internal processes.
  - Transmission Outflow: energy leaving the site from transmission lines.
  - Distribution Outflow: energy leaving the site from distribution lines.

### Loss Areas
* **Loss Areas** (`loss_areas`, select_multiple, required: false): Select the areas where losses occur at the site.
  - Site Equipment Loss: losses due to equipment inefficiencies.
  - Pipe Leakage: losses due to leaks in pipes.
  - Heat Gain Loss: losses due to heat gain in the system.
  - Transmission Loss: losses during transmission.
  - Distribution Loss: losses during distribution.

### Efficiency Planning
* **Efficiency Planning** (`efficiency_planning`, text, required: false): Enter any additional comments or suggestions for improving site efficiency.

### Site Data
* **Site Data** (`site_data`, text, required: false): Enter any additional site-specific data.

### Site Comments
* **Site Comments** (`site_comments`, text, required: false): Enter any additional comments or suggestions for the site.
