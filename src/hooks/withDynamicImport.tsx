// Only using react lazy in this file
// eslint-disable-next-line no-restricted-imports
import { FunctionComponent, JSX, lazy, Suspense } from "react";

export const withDynamicImport = <TComponent extends FunctionComponent<any>>(
  callback: () => Promise<{ default: TComponent }>,
  options?: {
    loading: React.ReactNode | boolean;
  }
): FunctionComponent<React.ComponentProps<TComponent>> => {
  const { loading } = options || {};
  const LazyElement = lazy(callback);

  if (!loading) {
    return (props: React.ComponentProps<TComponent>): JSX.Element => {
      return (
        <Suspense>
          <LazyElement {...props} />
        </Suspense>
      );
    };
  }

  // const defaultLoadingEl = <Loader />;

  // const loadingEl = loading === true ? defaultLoadingEl : loading;

  return (props: React.ComponentProps<TComponent>): JSX.Element => {
    return (
      // <Suspense fallback={loadingEl}>
      <Suspense>
        <LazyElement {...props} />
      </Suspense>
    );
  };
};
