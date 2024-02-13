import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL as string;

export const queryClient = new QueryClient({
  defaultOptions: {},
});
