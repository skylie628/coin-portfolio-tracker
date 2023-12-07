import { Button, ButtonGroup, VisuallyHidden } from "@chakra-ui/react";
import { GitHubIcon, GoogleIcon } from "./ProviderIcon";

const providers = [
  { name: "Google", icon: <GoogleIcon /> },
  { name: "GitHub", icon: <GitHubIcon /> },
];

export const OAuthButtonGroup = () => (
  <ButtonGroup variant="secondary" spacing="4">
    {providers.map(({ name, icon }) => (
      <Button key={name} flexGrow={1}>
        <VisuallyHidden>Sign in with {name}</VisuallyHidden>
        {icon}
      </Button>
    ))}
  </ButtonGroup>
);
