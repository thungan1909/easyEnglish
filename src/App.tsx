import AppRoutes from "./routers/AppRoutes.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { QUERY_CACHE_TIME_DEFAULT } from "./constants/index.ts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { createTheme, ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: QUERY_CACHE_TIME_DEFAULT,
      retry: 3,
    },
    mutations: {
      retry: false,
    },
  },
});

(window as any)["queryClient"] = queryClient;

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "var(--font-family) !important",
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily: "var(--font-family) !important",
          },
        },
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </LocalizationProvider>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
