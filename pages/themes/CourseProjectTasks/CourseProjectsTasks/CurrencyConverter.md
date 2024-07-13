# Currency Converter Project

## Objective
Develop a user-friendly web application that converts amounts between different currencies. The application will allow users to select source and target currencies, input an amount, and then view the converted amount based on real-time exchange rates.

## Features

### Currency Selection
- **Source and Target Currencies:** Users can choose from a list of available currencies for both the source and target of their conversion.
- **Currency Information:** Display the currency name and symbol next to each selection for better user understanding.

### Conversion Functionality
- **Amount Input:** Users can input the amount they wish to convert. Input validation ensures that only numbers can be entered.
- **Conversion Button:** A button to initiate the conversion process after selecting currencies and inputting an amount.
- **Conversion Result:** Display the converted amount in the target currency, along with the exchange rate used for the conversion.

### Historical Exchange Rates (Optional)
- **Rate History:** Optionally, users can view historical exchange rates for a selected currency pair over a specified period.
- **Graphical Representation:** Display the historical exchange rates in a graph for easy visualization of trends. This can be accomplished by a chart library that supports interactivity, like Chart.js or D3.js.

## Data Source
- [ExchangeRate-API](https://www.exchangerate-api.com/): Provides current and historical foreign exchange rates. Free plan available, API key required.

## Wireframe Description

### Main Layout
- **Navigation Bar:** Includes the application name and links to different functionalities like home, historical rates, and about.
- **Currency Selection Area:** Dropdown menus or similar UI elements for selecting source and target currencies.
- **Conversion Section:** An input field for the amount, a convert button, and a display area for showing the conversion result.

### Historical Rates Section (Optional)
- **Date Range Selection:** Input fields or a calendar picker to select the start and end dates for viewing historical rates.
- **Graph Area:** A section to display the historical exchange rates graph.

---

This project focuses on API integration for fetching real-time and historical exchange rate data, frontend development for creating an intuitive and responsive user interface.
