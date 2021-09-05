import Chart from "react-apexcharts";
import { ChartContainers } from "../../atoms/ChartContainer";
import { salesData } from "../../mocks/sales-michael";
import styled from "styled-components";
import { CenterContainer } from "../../atoms/CenteringContainer";

const SalesContainer = styled.div`
  margin: 0 auto;
  padding: 16px 0;
  width: 90%;
`;

function SalesPerformance() {
  const quarters = salesData.map((item) => item.Quarter);
  const salesRepAverages = salesData.map(
    (item) => item["Average Rep Sales (£)"]
  );
  const michaelSales = salesData.map((item) => item["Michael Sales (£)"]);

  const salesOptions = {
    chart: {
      id: "bar",
    },
    title: {
      text: "Michael's Sales",
    },
    xaxis: {
      categories: quarters,
    },
  };

  const sales = [
    {
      name: "Michael Sales (£)",
      data: michaelSales,
    },
  ];

  const averageSalesOptions = {
    chart: {
      id: "line",
    },
    title: {
      text: "Average Rep Sales",
    },
    xaxis: {
      categories: quarters,
    },
  };

  const averageSales = [
    {
      name: "Average Rep Sales (£)",
      data: salesRepAverages,
    },
  ];

  return (
    <SalesContainer>
      <h2>Sales Performance</h2>
      <ChartContainers>
        <CenterContainer>
          <Chart options={salesOptions} series={sales} type="bar" width="600" />
        </CenterContainer>
        <CenterContainer>
          <Chart
            options={averageSalesOptions}
            series={averageSales}
            type="line"
            width="600"
          />
        </CenterContainer>
      </ChartContainers>
    </SalesContainer>
  );
}

export default SalesPerformance;
