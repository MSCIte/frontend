import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

export const queryClient = new QueryClient({
  defaultOptions: {},
});
