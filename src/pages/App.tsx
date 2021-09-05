import Chart from "react-apexcharts";
import styled from "styled-components";
import { ChartContainers } from "../atoms/ChartContainer";
import Adherence from "../components/Adherence";
import Recommendations from "../components/Recommendations";
import SalesPerformance from "../components/SalesPerformance";
import okraLogo from "../img/okraLogo.svg";

function App() {
  const AppContainer = styled.div`
    background: #f5f5f5;
  `;

  const Container = styled.div`
    margin: 0 auto;
    max-width: 95%;
    background: white;
  `;

  const Divider = styled.hr`
    border-bottom: 0;
    border-left: 0;
    border-right: 0;
    border-top: 12px dotted #f5f5f5;
    width: 25%;
  `;

  const AppFooter = styled.div`
    background-image: linear-gradient(to right, #006072, #98c210);
    height: 56px;
  `;

  const Logo = styled.img`
    max-width: 200px;
    padding: 24px;
  `;

  const Navbar = styled.div`
    background-image: linear-gradient(to right, #006072, #98c210);
    padding: 0;
  `;

  return (
    <AppContainer>
      <Container>
        <Navbar>
          <Logo src={okraLogo} alt="Okra logo" />
        </Navbar>
        <Recommendations />
        <Divider />
        <SalesPerformance />
        <Adherence />
        {/* <h2>Adherence</h2>
      <ChartContainer>
        <div>
          <Chart options={options} series={series} type="line" width="700" />
        </div>
        <div>
          <Chart options={options} series={series} type="line" width="700" />
        </div>
      </ChartContainer>
      <h2>Suggestions</h2>
      <ChartContainer>
        <div>
          <Chart options={options} series={series} type="line" width="700" />
        </div>
        <div>
          <Chart options={options} series={series} type="line" width="700" />
        </div>
      </ChartContainer> */}
        <AppFooter />
      </Container>
    </AppContainer>
  );
}

export default App;
