import Footer from "../components/Footer";
import HomepageCard from "../components/HomepageCards";
import ToggleDarkMode from "../components/ToggleDarkMode";
import { Text, Flex, Spacer, Box } from "@chakra-ui/react";

function Homepage() {
  return (
    <>
      <Flex m={12} justifyContent="center" alignItems="center">
        <Box position="absolute" left="50%" transform="translateX(-50%)">
        <Text fontSize="3xl" fontWeight="bold">
          Archive of Power BI Dashboards by PT Barokah Perkasa Group
        </Text>
        </Box>
        <Spacer />
        <ToggleDarkMode />
      </Flex>
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="flex flex-col gap-5">
          <HomepageCard
            title="Dashboard Invoice PT Mashud Bersaudara International"
            description="View invoice dashboard of PT Mashud Bersaudara International (MASBRO)"
            link="/invoice-masbro"
          />
          <HomepageCard
            title="Coming soon..."
            description="Coming soon..."
            link="/"
          />
          <HomepageCard
            title="Coming soon..."
            description="Coming soon..."
            link="/"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
