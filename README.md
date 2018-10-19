# agile-exercise

# Install:
npm install <br>
npm start<br>
Open in browser: http://localhost:3000

# Requirements:
We are looking to build a money accounting system. The application should be a web service. It should not do any real “transactional” work, just emulate the financial transactions logic. No security is required. So don't worry about authentication.

# Must have
The App must be able to receive credit and debit financial transactions.
The web-app serves a single user, so we always have just one financial account.
Any transaction, which leads to negative amount within the system, should be refused. 
The App must store transactions history.
In general, the App will be used programmatically via its RESTful API. For testing purposes Postman or any similar app can be used.

# UX/UI requirements:
We need a simple UI for this application.
UI should display the transactions history list only. No other operation is required.
Transactions list should be done in accordion manner. By default the list shows short summary for each transaction. The detailed info of for a transaction should be shown on click.
It would be good to have some coloring for credit and debit transactions.
