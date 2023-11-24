```markdown
# CRM-CRUD-REST

## Description

CRM-CRUD-REST is a customer management system following the CRUD (Create, Read, Update, Delete) model and utilizing a RESTful architecture. The user interface is styled with Tailwind CSS, and data is managed using a simulated JSON server with json-server.

## Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Project Structure](#project-structure)
5. [Contributions](#contributions)

## Requirements

Ensure you have Node.js and npm installed. You will also need to install json-server globally:

```bash
npm install -g json-server
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/TrujiDev/CRM-CRUD-REST.git
cd CRM-CRUD-REST
```

2. Install dependencies:

```bash
npm install
```

3. Start the simulated JSON server:

```bash
json-server --watch db.json --port 4000
```

4. Open the application in your browser:

```bash
npm start
```

## Usage

Access the application from your browser at [http://localhost:3000](http://localhost:3000).

## Project Structure

- **`index.html`**: Main page to list customers.
- **`newCustomer.html`**: Page to add new customers.
- **`editCustomer.html`**: Page to edit existing customers.
- **`css/tailwind.min.css`**: Tailwind CSS styles file.
- **`js/`**: Directory containing JavaScript scripts.

## Contributions

Contributions are welcome. If you wish to contribute, follow these steps:

1. Open an issue to discuss the contribution.
2. Fork the repository.
3. Create a branch for your contribution: `git checkout -b feature/new-feature`.
4. Make your changes and commit with descriptive messages.
5. Open a pull request.
