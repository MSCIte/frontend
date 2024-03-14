export default {
  api: {
    output: {
      client: "react-query",
      target: "./src/api/endpoints.ts",
      mock: false,
      override: {
        searchCoursesCoursesSearchGet: {
          query: {
            useQuery: true,
            useInfinite: true,
            useInfiniteQueryParam: "nextPage",
          },
        },
      },
    },
    input: {
      target: "./openapi.json",
    },
    hooks: {
      afterAllFilesWrite: "pnpx prettier --write ./src ./openapi.json",
    },
  },
};
