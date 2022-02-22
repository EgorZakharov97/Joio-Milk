import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { HelloWorld } from "./components/HelloWorld";
import EmailSubmission from "./components/EmailSubmission";
import Map from "./components/Map";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "3k71iwEfRBw8HeHJz1QRrJ",
      token: "ySiNSq4h5JQk5R7v46cZqVs9TYSK2gAYkR8dboagwtSrMN3fLsI5Pq09yCYozYC8jIymNASW5scdfhUBqA",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

PLASMIC.registerComponent(HelloWorld, {
  name: 'HelloWorld',
  props: {
    verbose: 'boolean',
    children: 'slot'
  }
});

PLASMIC.registerComponent(Map, {
  name: 'Map',
  props: {
    className: 'string',
  },
});

PLASMIC.substituteComponent(EmailSubmission, 'EmailCollector');

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);