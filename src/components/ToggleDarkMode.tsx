import { useColorMode, Button } from "@chakra-ui/react";

function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? "Dark" : "Light"} Mode
      </Button>
    </header>
  );
}

export default ToggleDarkMode;
