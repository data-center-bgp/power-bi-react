import Footer from "../components/Footer";
import HomepageCard from "../components/HomepageCards";

function Homepage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="mb-6 text-3xl font-bold text-gray-700">
          Archive for storing Power BI Dashboards
        </h1>
        <div>
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
