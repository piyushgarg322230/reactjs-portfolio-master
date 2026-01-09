import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = "lxamxe2z";
const dataset = "production";
const apiVersion = "2021-10-21";
const useCdn = false;
export const client = sanityClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: useCdn,
  token: process.env.REACT_APP_SANITY_TOKEN,
  // Do not set `withCredentials` here. If you need credentialed requests,
  // configure CORS in your Sanity project to allow credentials instead.
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
