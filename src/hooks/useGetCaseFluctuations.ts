import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getCases = async () => {
    try {
        const response = await axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
        return response.data;
    }
    catch(err){
        return err
    }
}

export const useGetCaseFuctuations = () => {
    return useQuery({
        queryKey: ["cases"],
        queryFn: () => getCases()
    })
}