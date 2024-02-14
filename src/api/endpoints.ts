/**
 * Generated by orval v6.23.0 🍺
 * Do not edit manually.
 * FastAPI
 * OpenAPI spec version: 0.1.0
 */
import { useMutation, useQuery } from "@tanstack/react-query";
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import * as axios from "axios";
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { faker } from "@faker-js/faker";
import { HttpResponse, delay, http } from "msw";
export type TagsCoursesTagsGetParams = {
  degree_name: string;
  degree_year: string;
};

export type SearchCoursesCoursesSearchGetParams = {
  degree_name: string;
  degree_year: number;
  q?: string | null;
  offset?: number | null;
  page_size?: number | null;
};

export type DegreeReqsDegreeDegreeNameReqsGetParams = {
  year: string;
};

export type OptionsReqsOptionOptIdReqsGetParams = {
  year: string;
};

export type ValidationErrorLocItem = string | number;

export interface ValidationError {
  loc: ValidationErrorLocItem[];
  msg: string;
  type: string;
}

export interface TagSchema {
  code: string;
  color?: ColorsEnum;
  longName: string;
  shortName: string;
}

export interface RequirementsResults {
  message: string;
  result: boolean;
}

export interface OptionRequirement {
  courses: string[];
  numberOfCourses: number;
}

export interface OptionsSchema {
  optionName: string;
  requirements: OptionRequirement[];
}

export interface HTTPValidationError {
  detail?: ValidationError[];
}

export interface DegreeRequirement {
  courses: string[];
  numberOfCourses: number;
}

export type DegreeReqsAdditionalReqs = { [key: string]: DegreeRequirement };

export interface DegreeReqs {
  additionalReqs: DegreeReqsAdditionalReqs;
  mandatoryCourses: string[];
}

export type DegreeMissingReqsAdditionalReqs = {
  [key: string]: AdditionalReqCount;
};

export interface DegreeMissingReqs {
  additionalReqs: DegreeMissingReqsAdditionalReqs;
  mandatoryCourses: string[];
}

export interface DegreeMissingIn {
  courseCodesTaken: string[];
  year: string;
}

export interface CoursesTakenIn {
  courseCodesTaken: string[];
}

export type CourseWithTagsSchemaPrerequisites = string | null;

export type CourseWithTagsSchemaLocation = string | null;

export type CourseWithTagsSchemaCredit = number | null;

export type CourseWithTagsSchemaCorequisites = string | null;

export type CourseWithTagsSchemaAntirequisites = string | null;

export interface CourseWithTagsSchema {
  antirequisites?: CourseWithTagsSchemaAntirequisites;
  corequisites?: CourseWithTagsSchemaCorequisites;
  courseCode: string;
  courseName: string;
  credit?: CourseWithTagsSchemaCredit;
  description?: string;
  location?: CourseWithTagsSchemaLocation;
  prerequisites?: CourseWithTagsSchemaPrerequisites;
  tags?: TagSchema[];
}

export type ColorsEnum = (typeof ColorsEnum)[keyof typeof ColorsEnum];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ColorsEnum = {
  red: "red",
  green: "green",
  orange: "orange",
  yellow: "yellow",
  blue: "blue",
  purple: "purple",
  pink: "pink",
  indigo: "indigo",
  gray: "gray",
} as const;

export interface AdditionalReqCount {
  completed: string;
  total: string;
}

/**
 * @summary Read Root
 */
export const readRootGet = (
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<unknown>> => {
  return axios.default.get(`/`, options);
};

export const getReadRootGetQueryKey = () => {
  return [`/`] as const;
};

export const getReadRootGetQueryOptions = <
  TData = Awaited<ReturnType<typeof readRootGet>>,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof readRootGet>>, TError, TData>
  >;
  axios?: AxiosRequestConfig;
}) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getReadRootGetQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof readRootGet>>> = ({
    signal,
  }) => readRootGet({ signal, ...axiosOptions });

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof readRootGet>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type ReadRootGetQueryResult = NonNullable<
  Awaited<ReturnType<typeof readRootGet>>
>;
export type ReadRootGetQueryError = AxiosError<unknown>;

/**
 * @summary Read Root
 */
export const useReadRootGet = <
  TData = Awaited<ReturnType<typeof readRootGet>>,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof readRootGet>>, TError, TData>
  >;
  axios?: AxiosRequestConfig;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getReadRootGetQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Read Item
 */
export const readItemQueryGet = (
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<unknown>> => {
  return axios.default.get(`/query`, options);
};

export const getReadItemQueryGetQueryKey = () => {
  return [`/query`] as const;
};

export const getReadItemQueryGetQueryOptions = <
  TData = Awaited<ReturnType<typeof readItemQueryGet>>,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof readItemQueryGet>>, TError, TData>
  >;
  axios?: AxiosRequestConfig;
}) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getReadItemQueryGetQueryKey();

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof readItemQueryGet>>
  > = ({ signal }) => readItemQueryGet({ signal, ...axiosOptions });

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof readItemQueryGet>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type ReadItemQueryGetQueryResult = NonNullable<
  Awaited<ReturnType<typeof readItemQueryGet>>
>;
export type ReadItemQueryGetQueryError = AxiosError<unknown>;

/**
 * @summary Read Item
 */
export const useReadItemQueryGet = <
  TData = Awaited<ReturnType<typeof readItemQueryGet>>,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof readItemQueryGet>>, TError, TData>
  >;
  axios?: AxiosRequestConfig;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getReadItemQueryGetQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Options Reqs
 */
export const optionsReqsOptionOptIdReqsGet = (
  optId: string,
  params: OptionsReqsOptionOptIdReqsGetParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<OptionsSchema>> => {
  return axios.default.get(`/option/${optId}/reqs`, {
    ...options,
    params: { ...params, ...options?.params },
  });
};

export const getOptionsReqsOptionOptIdReqsGetQueryKey = (
  optId: string,
  params: OptionsReqsOptionOptIdReqsGetParams,
) => {
  return [`/option/${optId}/reqs`, ...(params ? [params] : [])] as const;
};

export const getOptionsReqsOptionOptIdReqsGetQueryOptions = <
  TData = Awaited<ReturnType<typeof optionsReqsOptionOptIdReqsGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  optId: string,
  params: OptionsReqsOptionOptIdReqsGetParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof optionsReqsOptionOptIdReqsGet>>,
        TError,
        TData
      >
    >;
    axios?: AxiosRequestConfig;
  },
) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ??
    getOptionsReqsOptionOptIdReqsGetQueryKey(optId, params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof optionsReqsOptionOptIdReqsGet>>
  > = ({ signal }) =>
    optionsReqsOptionOptIdReqsGet(optId, params, { signal, ...axiosOptions });

  return {
    queryKey,
    queryFn,
    enabled: !!optId,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof optionsReqsOptionOptIdReqsGet>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type OptionsReqsOptionOptIdReqsGetQueryResult = NonNullable<
  Awaited<ReturnType<typeof optionsReqsOptionOptIdReqsGet>>
>;
export type OptionsReqsOptionOptIdReqsGetQueryError =
  AxiosError<HTTPValidationError>;

/**
 * @summary Options Reqs
 */
export const useOptionsReqsOptionOptIdReqsGet = <
  TData = Awaited<ReturnType<typeof optionsReqsOptionOptIdReqsGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  optId: string,
  params: OptionsReqsOptionOptIdReqsGetParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof optionsReqsOptionOptIdReqsGet>>,
        TError,
        TData
      >
    >;
    axios?: AxiosRequestConfig;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getOptionsReqsOptionOptIdReqsGetQueryOptions(
    optId,
    params,
    options,
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Options Missing Reqs
 */
export const optionsMissingReqsOptionOptIdMissingReqsPost = (
  optId: string,
  degreeMissingIn: DegreeMissingIn,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<OptionRequirement[]>> => {
  return axios.default.post(
    `/option/${optId}/missing_reqs`,
    degreeMissingIn,
    options,
  );
};

export const getOptionsMissingReqsOptionOptIdMissingReqsPostMutationOptions = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof optionsMissingReqsOptionOptIdMissingReqsPost>>,
    TError,
    { optId: string; data: DegreeMissingIn },
    TContext
  >;
  axios?: AxiosRequestConfig;
}): UseMutationOptions<
  Awaited<ReturnType<typeof optionsMissingReqsOptionOptIdMissingReqsPost>>,
  TError,
  { optId: string; data: DegreeMissingIn },
  TContext
> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof optionsMissingReqsOptionOptIdMissingReqsPost>>,
    { optId: string; data: DegreeMissingIn }
  > = (props) => {
    const { optId, data } = props ?? {};

    return optionsMissingReqsOptionOptIdMissingReqsPost(
      optId,
      data,
      axiosOptions,
    );
  };

  return { mutationFn, ...mutationOptions };
};

export type OptionsMissingReqsOptionOptIdMissingReqsPostMutationResult =
  NonNullable<
    Awaited<ReturnType<typeof optionsMissingReqsOptionOptIdMissingReqsPost>>
  >;
export type OptionsMissingReqsOptionOptIdMissingReqsPostMutationBody =
  DegreeMissingIn;
export type OptionsMissingReqsOptionOptIdMissingReqsPostMutationError =
  AxiosError<HTTPValidationError>;

/**
 * @summary Options Missing Reqs
 */
export const useOptionsMissingReqsOptionOptIdMissingReqsPost = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof optionsMissingReqsOptionOptIdMissingReqsPost>>,
    TError,
    { optId: string; data: DegreeMissingIn },
    TContext
  >;
  axios?: AxiosRequestConfig;
}) => {
  const mutationOptions =
    getOptionsMissingReqsOptionOptIdMissingReqsPostMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * @summary Degree Reqs
 */
export const degreeReqsDegreeDegreeNameReqsGet = (
  degreeName: string,
  params: DegreeReqsDegreeDegreeNameReqsGetParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<DegreeReqs>> => {
  return axios.default.get(`/degree/${degreeName}/reqs`, {
    ...options,
    params: { ...params, ...options?.params },
  });
};

export const getDegreeReqsDegreeDegreeNameReqsGetQueryKey = (
  degreeName: string,
  params: DegreeReqsDegreeDegreeNameReqsGetParams,
) => {
  return [`/degree/${degreeName}/reqs`, ...(params ? [params] : [])] as const;
};

export const getDegreeReqsDegreeDegreeNameReqsGetQueryOptions = <
  TData = Awaited<ReturnType<typeof degreeReqsDegreeDegreeNameReqsGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  degreeName: string,
  params: DegreeReqsDegreeDegreeNameReqsGetParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof degreeReqsDegreeDegreeNameReqsGet>>,
        TError,
        TData
      >
    >;
    axios?: AxiosRequestConfig;
  },
) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ??
    getDegreeReqsDegreeDegreeNameReqsGetQueryKey(degreeName, params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof degreeReqsDegreeDegreeNameReqsGet>>
  > = ({ signal }) =>
    degreeReqsDegreeDegreeNameReqsGet(degreeName, params, {
      signal,
      ...axiosOptions,
    });

  return {
    queryKey,
    queryFn,
    enabled: !!degreeName,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof degreeReqsDegreeDegreeNameReqsGet>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type DegreeReqsDegreeDegreeNameReqsGetQueryResult = NonNullable<
  Awaited<ReturnType<typeof degreeReqsDegreeDegreeNameReqsGet>>
>;
export type DegreeReqsDegreeDegreeNameReqsGetQueryError =
  AxiosError<HTTPValidationError>;

/**
 * @summary Degree Reqs
 */
export const useDegreeReqsDegreeDegreeNameReqsGet = <
  TData = Awaited<ReturnType<typeof degreeReqsDegreeDegreeNameReqsGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  degreeName: string,
  params: DegreeReqsDegreeDegreeNameReqsGetParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof degreeReqsDegreeDegreeNameReqsGet>>,
        TError,
        TData
      >
    >;
    axios?: AxiosRequestConfig;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getDegreeReqsDegreeDegreeNameReqsGetQueryOptions(
    degreeName,
    params,
    options,
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Degrees
 */
export const degreesDegreeGet = (
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<string[]>> => {
  return axios.default.get(`/degree`, options);
};

export const getDegreesDegreeGetQueryKey = () => {
  return [`/degree`] as const;
};

export const getDegreesDegreeGetQueryOptions = <
  TData = Awaited<ReturnType<typeof degreesDegreeGet>>,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof degreesDegreeGet>>, TError, TData>
  >;
  axios?: AxiosRequestConfig;
}) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getDegreesDegreeGetQueryKey();

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof degreesDegreeGet>>
  > = ({ signal }) => degreesDegreeGet({ signal, ...axiosOptions });

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof degreesDegreeGet>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type DegreesDegreeGetQueryResult = NonNullable<
  Awaited<ReturnType<typeof degreesDegreeGet>>
>;
export type DegreesDegreeGetQueryError = AxiosError<unknown>;

/**
 * @summary Degrees
 */
export const useDegreesDegreeGet = <
  TData = Awaited<ReturnType<typeof degreesDegreeGet>>,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof degreesDegreeGet>>, TError, TData>
  >;
  axios?: AxiosRequestConfig;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getDegreesDegreeGetQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Degree Missing Reqs
 */
export const degreeMissingReqsDegreeDegreeIdMissingReqsPost = (
  degreeId: string,
  degreeMissingIn: DegreeMissingIn,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<DegreeMissingReqs>> => {
  return axios.default.post(
    `/degree/${degreeId}/missing_reqs`,
    degreeMissingIn,
    options,
  );
};

export const getDegreeMissingReqsDegreeDegreeIdMissingReqsPostMutationOptions =
  <TError = AxiosError<HTTPValidationError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<
      Awaited<
        ReturnType<typeof degreeMissingReqsDegreeDegreeIdMissingReqsPost>
      >,
      TError,
      { degreeId: string; data: DegreeMissingIn },
      TContext
    >;
    axios?: AxiosRequestConfig;
  }): UseMutationOptions<
    Awaited<ReturnType<typeof degreeMissingReqsDegreeDegreeIdMissingReqsPost>>,
    TError,
    { degreeId: string; data: DegreeMissingIn },
    TContext
  > => {
    const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};

    const mutationFn: MutationFunction<
      Awaited<
        ReturnType<typeof degreeMissingReqsDegreeDegreeIdMissingReqsPost>
      >,
      { degreeId: string; data: DegreeMissingIn }
    > = (props) => {
      const { degreeId, data } = props ?? {};

      return degreeMissingReqsDegreeDegreeIdMissingReqsPost(
        degreeId,
        data,
        axiosOptions,
      );
    };

    return { mutationFn, ...mutationOptions };
  };

export type DegreeMissingReqsDegreeDegreeIdMissingReqsPostMutationResult =
  NonNullable<
    Awaited<ReturnType<typeof degreeMissingReqsDegreeDegreeIdMissingReqsPost>>
  >;
export type DegreeMissingReqsDegreeDegreeIdMissingReqsPostMutationBody =
  DegreeMissingIn;
export type DegreeMissingReqsDegreeDegreeIdMissingReqsPostMutationError =
  AxiosError<HTTPValidationError>;

/**
 * @summary Degree Missing Reqs
 */
export const useDegreeMissingReqsDegreeDegreeIdMissingReqsPost = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof degreeMissingReqsDegreeDegreeIdMissingReqsPost>>,
    TError,
    { degreeId: string; data: DegreeMissingIn },
    TContext
  >;
  axios?: AxiosRequestConfig;
}) => {
  const mutationOptions =
    getDegreeMissingReqsDegreeDegreeIdMissingReqsPostMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * @summary Courses Can Take
 */
export const coursesCanTakeCoursesCanTakeCourseCodePost = (
  courseCode: string,
  coursesTakenIn: CoursesTakenIn,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<RequirementsResults>> => {
  return axios.default.post(
    `/courses/can-take/${courseCode}`,
    coursesTakenIn,
    options,
  );
};

export const getCoursesCanTakeCoursesCanTakeCourseCodePostMutationOptions = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof coursesCanTakeCoursesCanTakeCourseCodePost>>,
    TError,
    { courseCode: string; data: CoursesTakenIn },
    TContext
  >;
  axios?: AxiosRequestConfig;
}): UseMutationOptions<
  Awaited<ReturnType<typeof coursesCanTakeCoursesCanTakeCourseCodePost>>,
  TError,
  { courseCode: string; data: CoursesTakenIn },
  TContext
> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof coursesCanTakeCoursesCanTakeCourseCodePost>>,
    { courseCode: string; data: CoursesTakenIn }
  > = (props) => {
    const { courseCode, data } = props ?? {};

    return coursesCanTakeCoursesCanTakeCourseCodePost(
      courseCode,
      data,
      axiosOptions,
    );
  };

  return { mutationFn, ...mutationOptions };
};

export type CoursesCanTakeCoursesCanTakeCourseCodePostMutationResult =
  NonNullable<
    Awaited<ReturnType<typeof coursesCanTakeCoursesCanTakeCourseCodePost>>
  >;
export type CoursesCanTakeCoursesCanTakeCourseCodePostMutationBody =
  CoursesTakenIn;
export type CoursesCanTakeCoursesCanTakeCourseCodePostMutationError =
  AxiosError<HTTPValidationError>;

/**
 * @summary Courses Can Take
 */
export const useCoursesCanTakeCoursesCanTakeCourseCodePost = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof coursesCanTakeCoursesCanTakeCourseCodePost>>,
    TError,
    { courseCode: string; data: CoursesTakenIn },
    TContext
  >;
  axios?: AxiosRequestConfig;
}) => {
  const mutationOptions =
    getCoursesCanTakeCoursesCanTakeCourseCodePostMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * @summary Search Courses
 */
export const searchCoursesCoursesSearchGet = (
  params: SearchCoursesCoursesSearchGetParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<CourseWithTagsSchema[]>> => {
  return axios.default.get(`/courses/search`, {
    ...options,
    params: { ...params, ...options?.params },
  });
};

export const getSearchCoursesCoursesSearchGetQueryKey = (
  params: SearchCoursesCoursesSearchGetParams,
) => {
  return [`/courses/search`, ...(params ? [params] : [])] as const;
};

export const getSearchCoursesCoursesSearchGetQueryOptions = <
  TData = Awaited<ReturnType<typeof searchCoursesCoursesSearchGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  params: SearchCoursesCoursesSearchGetParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof searchCoursesCoursesSearchGet>>,
        TError,
        TData
      >
    >;
    axios?: AxiosRequestConfig;
  },
) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getSearchCoursesCoursesSearchGetQueryKey(params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof searchCoursesCoursesSearchGet>>
  > = ({ signal }) =>
    searchCoursesCoursesSearchGet(params, { signal, ...axiosOptions });

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof searchCoursesCoursesSearchGet>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type SearchCoursesCoursesSearchGetQueryResult = NonNullable<
  Awaited<ReturnType<typeof searchCoursesCoursesSearchGet>>
>;
export type SearchCoursesCoursesSearchGetQueryError =
  AxiosError<HTTPValidationError>;

/**
 * @summary Search Courses
 */
export const useSearchCoursesCoursesSearchGet = <
  TData = Awaited<ReturnType<typeof searchCoursesCoursesSearchGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  params: SearchCoursesCoursesSearchGetParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof searchCoursesCoursesSearchGet>>,
        TError,
        TData
      >
    >;
    axios?: AxiosRequestConfig;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getSearchCoursesCoursesSearchGetQueryOptions(
    params,
    options,
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Tags
 */
export const tagsCoursesTagsGet = (
  params: TagsCoursesTagsGetParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<CourseWithTagsSchema[]>> => {
  return axios.default.get(`/courses/tags`, {
    ...options,
    params: { ...params, ...options?.params },
  });
};

export const getTagsCoursesTagsGetQueryKey = (
  params: TagsCoursesTagsGetParams,
) => {
  return [`/courses/tags`, ...(params ? [params] : [])] as const;
};

export const getTagsCoursesTagsGetQueryOptions = <
  TData = Awaited<ReturnType<typeof tagsCoursesTagsGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  params: TagsCoursesTagsGetParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof tagsCoursesTagsGet>>,
        TError,
        TData
      >
    >;
    axios?: AxiosRequestConfig;
  },
) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getTagsCoursesTagsGetQueryKey(params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof tagsCoursesTagsGet>>
  > = ({ signal }) => tagsCoursesTagsGet(params, { signal, ...axiosOptions });

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof tagsCoursesTagsGet>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type TagsCoursesTagsGetQueryResult = NonNullable<
  Awaited<ReturnType<typeof tagsCoursesTagsGet>>
>;
export type TagsCoursesTagsGetQueryError = AxiosError<HTTPValidationError>;

/**
 * @summary Tags
 */
export const useTagsCoursesTagsGet = <
  TData = Awaited<ReturnType<typeof tagsCoursesTagsGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  params: TagsCoursesTagsGetParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof tagsCoursesTagsGet>>,
        TError,
        TData
      >
    >;
    axios?: AxiosRequestConfig;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getTagsCoursesTagsGetQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Sample Path
 */
export const samplePathSamplePathGet = (
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<unknown>> => {
  return axios.default.get(`/sample-path`, options);
};

export const getSamplePathSamplePathGetQueryKey = () => {
  return [`/sample-path`] as const;
};

export const getSamplePathSamplePathGetQueryOptions = <
  TData = Awaited<ReturnType<typeof samplePathSamplePathGet>>,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof samplePathSamplePathGet>>,
      TError,
      TData
    >
  >;
  axios?: AxiosRequestConfig;
}) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getSamplePathSamplePathGetQueryKey();

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof samplePathSamplePathGet>>
  > = ({ signal }) => samplePathSamplePathGet({ signal, ...axiosOptions });

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof samplePathSamplePathGet>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type SamplePathSamplePathGetQueryResult = NonNullable<
  Awaited<ReturnType<typeof samplePathSamplePathGet>>
>;
export type SamplePathSamplePathGetQueryError = AxiosError<unknown>;

/**
 * @summary Sample Path
 */
export const useSamplePathSamplePathGet = <
  TData = Awaited<ReturnType<typeof samplePathSamplePathGet>>,
  TError = AxiosError<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof samplePathSamplePathGet>>,
      TError,
      TData
    >
  >;
  axios?: AxiosRequestConfig;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getSamplePathSamplePathGetQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const getOptionsReqsOptionOptIdReqsGetMock = () => ({
  optionName: faker.word.sample(),
  requirements: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    courses: Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => faker.word.sample()),
    numberOfCourses: faker.number.int({ min: undefined, max: undefined }),
  })),
});

export const getOptionsMissingReqsOptionOptIdMissingReqsPostMock = () =>
  Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    courses: Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => faker.word.sample()),
    numberOfCourses: faker.number.int({ min: undefined, max: undefined }),
  }));

export const getDegreeReqsDegreeDegreeNameReqsGetMock = () => ({
  additionalReqs: {
    [faker.string.alphanumeric(5)]: {
      courses: Array.from(
        { length: faker.number.int({ min: 1, max: 10 }) },
        (_, i) => i + 1,
      ).map(() => faker.word.sample()),
      numberOfCourses: faker.number.int({ min: undefined, max: undefined }),
    },
  },
  mandatoryCourses: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => faker.word.sample()),
});

export const getDegreesDegreeGetMock = () =>
  Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, () =>
    faker.word.sample(),
  );

export const getDegreeMissingReqsDegreeDegreeIdMissingReqsPostMock = () => ({
  additionalReqs: {
    [faker.string.alphanumeric(5)]: {
      completed: faker.word.sample(),
      total: faker.word.sample(),
    },
  },
  mandatoryCourses: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => faker.word.sample()),
});

export const getCoursesCanTakeCoursesCanTakeCourseCodePostMock = () => ({
  message: faker.word.sample(),
  result: faker.datatype.boolean(),
});

export const getSearchCoursesCoursesSearchGetMock = () =>
  Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    antirequisites: faker.helpers.arrayElement([
      faker.helpers.arrayElement([faker.word.sample(), {}]),
      undefined,
    ]),
    corequisites: faker.helpers.arrayElement([
      faker.helpers.arrayElement([faker.word.sample(), {}]),
      undefined,
    ]),
    courseCode: faker.word.sample(),
    courseName: faker.word.sample(),
    credit: faker.helpers.arrayElement([
      faker.helpers.arrayElement([
        faker.number.int({ min: undefined, max: undefined }),
        {},
      ]),
      undefined,
    ]),
    description: faker.helpers.arrayElement([faker.word.sample(), undefined]),
    location: faker.helpers.arrayElement([
      faker.helpers.arrayElement([faker.word.sample(), {}]),
      undefined,
    ]),
    prerequisites: faker.helpers.arrayElement([
      faker.helpers.arrayElement([faker.word.sample(), {}]),
      undefined,
    ]),
    tags: faker.helpers.arrayElement([
      Array.from(
        { length: faker.number.int({ min: 1, max: 10 }) },
        (_, i) => i + 1,
      ).map(() => ({
        code: faker.word.sample(),
        color: faker.helpers.arrayElement([
          faker.helpers.arrayElement([
            faker.helpers.arrayElement(Object.values(ColorsEnum)),
          ]),
          undefined,
        ]),
        longName: faker.word.sample(),
        shortName: faker.word.sample(),
      })),
      undefined,
    ]),
  }));

export const getTagsCoursesTagsGetMock = () =>
  Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    antirequisites: faker.helpers.arrayElement([
      faker.helpers.arrayElement([faker.word.sample(), {}]),
      undefined,
    ]),
    corequisites: faker.helpers.arrayElement([
      faker.helpers.arrayElement([faker.word.sample(), {}]),
      undefined,
    ]),
    courseCode: faker.word.sample(),
    courseName: faker.word.sample(),
    credit: faker.helpers.arrayElement([
      faker.helpers.arrayElement([
        faker.number.int({ min: undefined, max: undefined }),
        {},
      ]),
      undefined,
    ]),
    description: faker.helpers.arrayElement([faker.word.sample(), undefined]),
    location: faker.helpers.arrayElement([
      faker.helpers.arrayElement([faker.word.sample(), {}]),
      undefined,
    ]),
    prerequisites: faker.helpers.arrayElement([
      faker.helpers.arrayElement([faker.word.sample(), {}]),
      undefined,
    ]),
    tags: faker.helpers.arrayElement([
      Array.from(
        { length: faker.number.int({ min: 1, max: 10 }) },
        (_, i) => i + 1,
      ).map(() => ({
        code: faker.word.sample(),
        color: faker.helpers.arrayElement([
          faker.helpers.arrayElement([
            faker.helpers.arrayElement(Object.values(ColorsEnum)),
          ]),
          undefined,
        ]),
        longName: faker.word.sample(),
        shortName: faker.word.sample(),
      })),
      undefined,
    ]),
  }));

export const getFastAPIMock = () => [
  http.get("*/", async () => {
    await delay(1000);
    return new HttpResponse(null, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }),
  http.get("*/query", async () => {
    await delay(1000);
    return new HttpResponse(null, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }),
  http.get("*/option/:optId/reqs", async () => {
    await delay(1000);
    return new HttpResponse(
      JSON.stringify(getOptionsReqsOptionOptIdReqsGetMock()),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }),
  http.post("*/option/:optId/missing_reqs", async () => {
    await delay(1000);
    return new HttpResponse(
      JSON.stringify(getOptionsMissingReqsOptionOptIdMissingReqsPostMock()),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }),
  http.get("*/degree/:degreeName/reqs", async () => {
    await delay(1000);
    return new HttpResponse(
      JSON.stringify(getDegreeReqsDegreeDegreeNameReqsGetMock()),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }),
  http.get("*/degree", async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(getDegreesDegreeGetMock()), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }),
  http.post("*/degree/:degreeId/missing_reqs", async () => {
    await delay(1000);
    return new HttpResponse(
      JSON.stringify(getDegreeMissingReqsDegreeDegreeIdMissingReqsPostMock()),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }),
  http.post("*/courses/can-take/:courseCode", async () => {
    await delay(1000);
    return new HttpResponse(
      JSON.stringify(getCoursesCanTakeCoursesCanTakeCourseCodePostMock()),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }),
  http.get("*/courses/search", async () => {
    await delay(1000);
    return new HttpResponse(
      JSON.stringify(getSearchCoursesCoursesSearchGetMock()),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }),
  http.get("*/courses/tags", async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(getTagsCoursesTagsGetMock()), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }),
  http.get("*/sample-path", async () => {
    await delay(1000);
    return new HttpResponse(null, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }),
];
