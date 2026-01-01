import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = "lxamxe2z";
const dataset = "production";
const apiVersion = "2023-05-03";
const useCdn = true;
const token = "skgX0yr81zZKNouIva7Nf3HAJMMs9QyoNBJF554KV0CeZMgxIwjuIP9zLT6X5lIOFwvfWdYZsUQlvn7ZasCNWojiJjkrxMST8qNgJc1HzMG64bE3uQTzl7nSOksQwd8MwQAcJberBGWwOG0bBcwra9sfOSlufbZmq69GOd8Xq2cOrpsOvAYC";
export const client = sanityClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: useCdn,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
