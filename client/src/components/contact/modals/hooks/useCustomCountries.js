import { useCountries } from "../../../../api/countriesApi";
import dataEs from "../../../../api/dataEs";
import dataEn from "../../../../api/dataEn";

const useCountryData = (english) => {

    const { data } = useCountries();
   
    const getOptionListData = () => {
      return data?.sort((a, b) => a.name.common.localeCompare(b.name.common)).map((country, index) => ({
        id: `${country.idd.root}-${country.name.common}`,
        value: country.name.common,
        flag: country.flags.png,
        label: country.name.common
      }));
    };

    const products = english ? dataEn.products : dataEs.products;
    const getProducts = () => { 
        return products.map( product => ({
            value: product.title,
            label: product.title,
            flag: product.description.thumbnail
        }))
    }
  
    return { getOptionListData, getProducts };
  };
  
  export default useCountryData;