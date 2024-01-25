export default {
  api: {
    output: {
      client: "react-query",
      target: "./src/api/endpoints.ts",
      mock: true,
    },
    input: {
      target: "./openapi.json",
    },
    hooks: {
      afterAllFilesWrite: "pnpx prettier --write ./src ./openapi.json",
    },
  },
};
