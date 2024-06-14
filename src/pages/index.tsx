import React, { useEffect } from 'react';
import clsx from 'clsx';
import mermaid from 'mermaid';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { Analytics } from '@vercel/analytics/react';
import Link from '@docusaurus/Link';

import styles from './index.module.css';
import { Button,
  Container, extendTheme,
  HStack,
  useColorMode as useChakraColor,
  withDefaultColorScheme,
  ChakraBaseProvider,
  Spacer,
  Flex,
  Center,
  Text,
  Divider,
  Wrap,
  ColorModeProvider,
} from '@chakra-ui/react';
import { useColorMode as useDocColor } from '@docusaurus/theme-common';

mermaid.initialize({
  startOnLoad: true,
  theme: 'dark',
  securityLevel: 'loose',
  fontFamily: 'Nerd Font, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  fontSize: 14,
});

const customTheme = extendTheme({
  ...withDefaultColorScheme({
    colorScheme: 'red',
  }),
  colors: {
    primaryFontColor: {
      lightMode: 'black',
      darkMode: 'white',
    }, 
    secondaryFontColor: {
      lightMode: 'gray.600',
      darkMode: 'gray.300',
    },
  },
});

const features = [
  {
    title: 'Manage',
    description: 'DGate offers tools to allow users to manage routes, modules, and other resources from the CLI. The CLI also exposes advanced features that allow the user to manage the entire lifecycle of the resources.',
  },
  {
    title: 'Monitor',
    description: 'DGate exposes metrics and logs that allow the users to user their favorite monitoring tools to monitor the health of the gateway, resource configurations, and even function execution metrics.',
  },
  {
    title: 'Maintain',
    description: 'Maintaining resources is very simple and easy because results are avaiable in real-time. Additionally, when issues happen debugging and bug fixing is made easy with the help of the logs and metrics.', 
  },
  {
    title: 'Replication',
    description: 'DGate supports replication of resources across multiple instances using the Raft Consensus Algorithm. This allows the user to scale the gateway horizontally and ensure high availability.',
  },
  {
    title: 'JS/TS Functions',
    description: 'Modules support JavaScript and TypeScript functions. This allows the user to write custom functions to manipulate the request and response objects.',
  },
];

const roadmap = [
  {
    title: 'Authentication',
    description: 'DGate plans to offer support for widely used authentication protocols like OAuth 2.0, OIDC and SAML.',
  },
  {
    title: 'Canary',
    description: 'DGate plans to offer support for canary deployments to allow users to test new features in production with a subset of users.',
  },
  {
    title: 'Admin Console',
    description: 'DGate plans to offer an admin console to allow users to manage resources from a web interface. The web interface will also offer monitoring and debugging tools.',
  },
];

export default function HomePage(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <ChakraBaseProvider theme={customTheme}>
      <ColorModeProvider>
        <Layout title={siteConfig.title}>
          <Analytics />
          <Hero siteConfig={siteConfig} />
        </Layout>
      </ColorModeProvider>
    </ChakraBaseProvider>
  );
}

function Hero({ siteConfig }) {
  const { setColorMode } = useChakraColor();
  const { colorMode } = useDocColor();

  useEffect(() => {
    setColorMode(colorMode);
  }, [colorMode])

  return (
    <header>
    <div className={clsx(styles.jumbo, styles.heroBanner)}>
      <img className={styles.jumboImg} src="/img/dgate.svg" alt="logo" />
    </div>
    <div className={clsx(styles.heroBanner)}>
      <Container>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Center>
        <Flex minW="360px" justify="space-evenly">
          <Button as={Link} variant='ghost' href='/docs/getting-started/dgate-server' size='lg'>
            Get Started
          </Button>
          <Spacer />
          <Button as={Link} href='https://github.com/dgate-io/dgate' variant='outline' left={"auto"} size='lg'>
            ⭐&nbsp; on Github
          </Button>
        </Flex>
        </Center>
      </Container>
    </div>
    <Container maxW="5xl" centerContent>
      <Wrap pt='4em' pb='1em'>
        <Heading as='h1'>Features</Heading>
      </Wrap>
      <HStack flexWrap={"wrap"} align={"start"} justify={"space-evenly"} mb="1em">
        {features && features.map((feature, idx) => (
          <Flex key={idx} maxW={"300px"} direction={"column"}>
            <Text fontWeight={"bold"} textAlign={"center"} fontSize={"24px"}>{feature.title}</Text>
            <Text textAlign={"center"}>{feature.description}</Text>
          </Flex>
        ))}
      </HStack>
      <Divider />

      <Wrap pt='4em' pb='1em'>
        <Heading as='h1'>Roadmap Features</Heading>
      </Wrap>
      <HStack flexWrap={"wrap"} align={"start"} justify={"space-evenly"} mb="1em">
        {roadmap && roadmap.map((feature, idx) => (
          <Flex key={idx} maxW={"300px"} direction={"column"}>
            <Text fontWeight={"bold"} textAlign={"center"} fontSize={"24px"}>{feature.title}</Text>
            <Text textAlign={"center"}>{feature.description}</Text>
          </Flex>
        ))}
      </HStack>
    </Container>
  </header>
  );
}