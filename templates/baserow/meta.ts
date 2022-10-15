// Generated using "yarn build-templates"

export const meta = {
  name: "Baserow",
  description:
    "Open source no-code database and Airtable alternative. Create your own online database without technical experience. Our user friendly no-code tool gives you the powers of a developer without leaving your browser.",
  instructions: "It may take several minutes for Baserow to boot up.",
  changeLog: [{ date: "2022-10-05", description: "first release" }],
  links: [
    { label: "Website", url: "https://baserow.io/" },
    { label: "Gitlab", url: "https://gitlab.com/bramw/baserow" },
  ],
  contributors: [{ name: "Andrei Canta", url: "https://github.com/deiucanta" }],
  schema: {
    type: "object",
    required: ["projectName", "appServiceName"],
    properties: {
      projectName: { type: "string", title: "Project Name" },
      appServiceName: {
        type: "string",
        title: "App Service Name",
        default: "baserow",
      },
    },
  },
  logo: "logo.svg",
  screenshots: ["screenshot.png"],
};

export type ProjectName = string;
export type AppServiceName = string;

export interface Input {
  projectName: ProjectName;
  appServiceName: AppServiceName;
}
