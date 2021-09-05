import Chart from "react-apexcharts";
import { ChartContainers } from "../../atoms/ChartContainer";
import { mockAdherenceMichael } from "../../mocks/adherence-michael";
import styled from "styled-components";
import { CenterContainer } from "../../atoms/CenteringContainer";

const AdherenceContainer = styled.div`
  margin: 0 auto;
  padding: 16px 0;
  width: 90%;
`;

function Adherence() {
  const quarters = mockAdherenceMichael.map((item) => item.Quarter);

  // Chart data for Target Actions
  const michaelTargetActions: number[] = mockAdherenceMichael.map(
    (item) => item["Michael Adherence- % On target actions"]
  );
  const repTargetActions: number[] = mockAdherenceMichael.map((item) =>
    parseInt(item["Aggregate Rep Adherence (% Actions Taken)"])
  );

  const targetOptions = {
    chart: {
      id: "bar",
    },
    title: {
      text: "% of Target Actions",
    },
    xaxis: {
      categories: quarters,
    },
  };

  const targetSeries = [
    {
      name: "Michael's Performance",
      data: michaelTargetActions,
    },
    {
      name: "Aggregate Rep Performance",
      data: repTargetActions,
    },
  ];

  // Chart data for reports viewed/opened
  const michaelReportsViewed: number[] = mockAdherenceMichael.map(
    (item) => item["Michael Adherence- % Reports viewed"]
  );
  const repReportsViewed: number[] = mockAdherenceMichael.map((item) =>
    parseInt(item["Aggregate Rep adherence (% reports opened)"])
  );

  const reportOptions = {
    chart: {
      id: "bar",
    },
    title: {
      text: "% of Reports Viewed",
    },
    xaxis: {
      categories: quarters,
    },
  };

  const reportSeries = [
    {
      name: "Michael's Performance",
      data: michaelReportsViewed,
    },
    {
      name: "Aggregate Rep Performance",
      data: repReportsViewed,
    },
  ];

  return (
    <AdherenceContainer>
      <h2>Adherence</h2>
      <ChartContainers>
        <CenterContainer>
          <Chart
            options={targetOptions}
            series={targetSeries}
            type="bar"
            width="600"
          />
        </CenterContainer>
        <CenterContainer>
          <Chart
            options={reportOptions}
            series={reportSeries}
            type="line"
            width="600"
          />
        </CenterContainer>
      </ChartContainers>
    </AdherenceContainer>
  );
}

export default Adherence;
