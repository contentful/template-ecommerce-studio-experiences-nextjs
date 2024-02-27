import { createClient } from "contentful";

export const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN as string,
  environment: process.env.CONTENTFUL_ENVIRONMENT_ID as string,
  host: 'preview.contentful.com',
});

export const deliveryClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN as string,
  environment: process.env.CONTENTFUL_ENVIRONMENT_ID as string,
  host: 'cdn.contentful.com',
});
