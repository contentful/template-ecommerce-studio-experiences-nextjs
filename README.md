# Contentful Studio Experiences Demo

Powered by Next.js and Contentful.

## Set up Contentful Space

Starting a new project:
1. Create a new empty space
2. Collect the Space ID of your new Space (e.g. under General Settings of the Space) and navigate to this address replacing the ID placeholder: https://app.contentful.com/spaces/YOUR_SPACE_ID/template-recommendation
3. If the web app immediately starts importing a template, cancel it and try opening the template-recommendation page again. This page should offer 3 different templates to use. Select the Ecommerce template on the left side by clicking "Use Template" button to import the sample content model & content.
4. Navigate to Content Model tab & select in top right corner Create New -> Experience Type
5. Define a name for your new Experience Type and collect the Api Identifier for later use in the .env file
6. Define a new Preview URL like so: http://localhost:3000/{entry.fields.slug}?preview=true & Finish the preview defition widget

Starting from existing project:
1. Navigate to Content Model tab and look for existing Experience Type & collect its ID for later use in the .env file. If Experience Type hasn't been created yet, follow the steps from above. If you're working from a completely empty Space, you will need to first create at least 1 Content Type to make Experience Type creation available in the web app UI.
2. Double check that a Preview definition exists for the Experience Type via the Content Preview settings of the Space. This frontend expects the format http://localhost:3000/{entry.fields.slug}?preview=true

After following above steps, you now have an Experience Type with its own Preview definition in place and you are ready to complete the .env file as required under the section below. Please follow the "Running locally" steps.

## Running locally

1. Copy `.env.example` file as `.env` and fill it out with necessary environment variables
2. Run `npm install`
3. To run the project in dev mode, run it with `npm run dev`

## Running remotely

1. Make sure that necessary environment variables (mentioned in the `.env.example` file) are configured
2. Run `npm install`
3. Run `npm build`
4. Run `npm start`
