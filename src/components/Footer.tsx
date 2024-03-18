import {
  Stack,
  HStack,
  Link,
  Image,
  IconButton,
  LinkProps,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const links = ["Blog", "Documentation", "Terms of Use", "Privacy Policy"];
const accounts = [
  {
    url: "https://github.com/cgabarokahperkasagroup",
    label: "GitHub Account",
    type: "yellow",
    icon: <FaGithub />,
  },
  {
    url: "https://www.linkedin.com/company/barokah-perkasa-group/",
    label: "LinkedIn Account",
    type: "yellow",
    icon: <FaLinkedin />,
  },
  {
    url: "https://barokahperkasagroup.com/",
    label: "Official Website",
    type: "yellow",
    icon: <CgWebsite />,
  },
];

const CustomLink = ({ children, ...props }: LinkProps) => {
  return (
    <Link
      href="#"
      fontSize="sm"
      _hover={{ textDecoration: "underline" }}
      {...props}
    >
      {children}
    </Link>
  );
};

const Footer = () => {
  return (
    <Stack
      maxW="5xl"
      marginInline="auto"
      p={8}
      spacing={{ base: 8, md: 0 }}
      justifyContent="space-between"
      alignItems="center"
      direction={{ base: "column", md: "row" }}
    >
      <Link href="/" isExternal>
        <Image
          w="100px"
          src="/logo-bpg.png"
          alt="Barokah Perkasa Group"
        />
      </Link>
      <HStack spacing={4} alignItems="center">
        {links.map((link, index) => (
          <CustomLink key={index}>{link}</CustomLink>
        ))}
      </HStack>
      <Stack direction="row" spacing={5} pt={{ base: 4, md: 0 }} alignItems="center">
        {accounts.map((account, index) => (
          <IconButton
            as={Link}
            key={index}
            href={account.url}
            aria-label={account.label}
            icon={account.icon}
            colorScheme={account.type}
            isExternal
            rounded="md"
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Footer;