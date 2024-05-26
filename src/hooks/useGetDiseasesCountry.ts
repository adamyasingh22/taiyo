import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getDiseasesByCountry = async () => {
    try {
        const response = await axios.get("https://disease.sh/v3/covid-19/countries")
        return response.data;
    }
    catch(err){
        return err
    }
}

export const useGetDiseasesCountry = () => {
    return useQuery({
        queryKey: ["diseases_by_country"],
        queryFn: () => getDiseasesByCountry()
    })
}