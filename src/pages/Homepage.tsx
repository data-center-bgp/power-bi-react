import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, CardFooter, Heading, Text, Button } from "@chakra-ui/react";

function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-6 text-3xl font-bold text-gray-700">Homepage</h1>
      <div>
        <Card align="center">
          <CardHeader>
            <Heading size="md">Dashboard Invoice PT Mashud Bersaudara International</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View the dashboard of invoice of PT Mashud Bersaudara International.
            </Text>
          </CardBody>
          <CardFooter>
            <Button as={Link} to="/invoice-masbro" colorScheme="blue">View dashboard</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Homepage;