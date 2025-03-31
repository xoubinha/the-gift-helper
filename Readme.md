# The Gift Helper

The Gift Helper is a tool designed to simplify the process of finding and organizing gift ideas for any special occasion.

## Pre-requisites

Before running the application, ensure you have the following:

- **Node.js**: Install the latest version from [Node.js official website](https://nodejs.org/).
- **npm (Node Package Manager)**: Comes bundled with Node.js.
- **Azure OpenAI Service Model Deployment**: You need an Azure OpenAI Service model deployment (e.g., GPT-3.5 or GPT-4o). Follow the [Azure OpenAI documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/create-resource) to set up your deployment.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/xoubinha/the-gift-helper.git
   ```

2. Navigate to the project directory:

   ```bash
   cd the-gift-helper
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create the `.env` file with the required environment variables, that are available in the template `.env.template`, replaced.

## Usage

1. Start the application:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173`.

3. Complete the form with the fields and click on the "Get Gift Recommendations" button.
