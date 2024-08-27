export const projectId = checkValue(
  "6m3cwavu",
  "NEXT_PUBLIC_SANITY_PROJECT_ID",
  "https://sanity.io"
);

export const dataset: string = checkValue(
  "production",
  "NEXT_PUBLIC_SANITY_DATASET",
  "https://sanity.io"
);

export const token = checkValue(
  "skzQRGmUFv23Yzg0aRoGY4bXhW2A5VXhsEnRUKdYV5lxxu7uhnGzrzJcovHKoViB1htxXPWcVP2abxLiqDNS0JSXvv8a86YOQBCY7BbrWlDNeOWOqsM4Kpy7TDJo0kMfdNuSqlbtMgtRWDfO0QzqaV8gn8mKGROwNvoJdv7wgPTjtvKd21CD",
  "NEXT_PUBLIC_SANITY_ACCESS_TOKEN",
  "https://sanity.io"
);

export const hookSecret = process.env.NEXT_PUBLIC_SANITY_HOOK_SECRET;
export const mode = process.env.NODE_ENV;

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-07-21";

// export const giscusRepoId = checkValue(
//   process.env.NEXT_PUBLIC_GISCUS_REPOID,
//   "NEXT_PUBLIC_GISCUS_REPOID",
//   "https://giscus.app/"
// );

// export const giscusCategoryId = checkValue(
//   process.env.NEXT_PUBLIC_GISCUS_CATEGORYID,
//   "NEXT_PUBLIC_GISCUS_CATEGORYID",
//   "https://giscus.app/"
// );
export const umamiSiteId = checkValue(
  "3k4YHJNX0BjMxWAVvkog0xxqRogjmUBw",
  "NEXT_PUBLIC_UMAMI_WEBSITE_ID",
  "https://umami.is"
);


// Validate env varaibles
function checkValue<T>(
  value: T | undefined,
  errorMsg: string,
  url?: string
): T {
  if (value === undefined) {
    throw new Error(
      `Missing Environment Variable: ${errorMsg}\n\nVist ${url} to learn how you can generate your own API keys`
    );
  }
  return value;
}
