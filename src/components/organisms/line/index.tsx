import React, { useEffect, useState } from "react";
import { AxisOptions, Chart } from "react-charts";
import { useGetCaseFuctuations } from "../../../hooks/useGetCaseFluctuations";

export const LineChart = () => {
  const { data: CasesData, isLoading } = useGetCaseFuctuations();
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    if (!isLoading) {
      const { cases, recovered, deaths } = CasesData;
      let slicedCases = Object.fromEntries(Object.entries(cases).slice(20, 40));
      let slicedDeaths = Object.fromEntries(
        Object.entries(deaths).slice(20, 40)
      );
      let slicedRecovered = Object.fromEntries(
        Object.entries(recovered).slice(20, 40)
      );
      const casesData = Object.entries(slicedCases).map(([date, value]) => ({
        date,
        value,
      }));
      const deathsData = Object.entries(slicedDeaths).map(([date, value]) => ({
        date,
        value,
      }));
      const recoveredData = Object.entries(slicedRecovered).map(
        ([date, value]) => ({
          date,
          value,
        })
      );
      setData([
        { label: "Cases", data: casesData },
        { label: "Deaths", data: deathsData },
        { label: "Recovered", data: recoveredData },
      ]);
    }
  }, [isLoading]);
  const primaryAxis = React.useMemo<
    AxisOptions<(typeof data)[number]["data"][number]>
  >(
    () => ({
      getValue: (datum: any) => datum.date as unknown as Date,
      elementType: 'line',
    }),
    []
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<(typeof data)[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: (datum: any) => datum.value,
        elementType: 'line',
      },
    ],
    []
  );
  return (
    <div className="w-full h-96 bg-white rounded shadow-md">
      {data.length > 0 && (
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
      )}
    </div>
  );
};
