import { useMediaQuery } from "./useMediaQuery";

const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

type BreakpointKey = keyof typeof breakpoints;

export const useBreakpoint = <K extends BreakpointKey>(breakpointKey: K) => {
  const bool = useMediaQuery(
    `(min-width: ${breakpoints[breakpointKey]})`,
    true,
    { getInitialValueInEffect: false },
  );
  const capitalizedKey =
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    breakpointKey[0]!.toUpperCase() + breakpointKey.substring(1);
  type Key = `is${Capitalize<K>}`;
  return {
    [`is${capitalizedKey}`]: bool,
  } as Record<Key, boolean>;
};
