import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, CardFooter, Heading, Text, Button } from "@chakra-ui/react";

interface CardProps {
    title: string;
    description: string;
    link: string;
}

const HomepageCard: React.FC<CardProps> = ({ title, description, link }) => {
    return (
        <Card variant="outline" align="center">
            <CardHeader>
                <Heading size="md">{title}</Heading>
            </CardHeader>
            <CardBody>
                <Text>{description}</Text>
            </CardBody>
            <CardFooter>
                <Button as={Link} to={link} colorScheme="yellow">
                    View dashboard
                </Button>
            </CardFooter>
        </Card>
    );
};

export default HomepageCard;