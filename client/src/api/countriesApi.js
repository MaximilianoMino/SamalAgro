import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getCountries = async () => {
  const response = await axios.get(
    "https://restcountries.com/v3.1/independent?status=true&fields=name,idd,flags"
  );
  return response.data;
};

export const useCountries = () => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });
};
