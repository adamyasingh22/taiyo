import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getDiseases = async () => {
    try {
        const response = await axios.get("https://disease.sh/v3/covid-19/all")
        return response.data;
    }
    catch(err){
        return err
    }
}

export const useGetDiseases = () => {
    return useQuery({
        queryKey: ["diseases"],
        queryFn: () => getDiseases()
    })
}