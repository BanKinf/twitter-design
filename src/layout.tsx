import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
    Box, 
    Button, 
    Container, 
    Icon, 
    Stack, 
    StackDivider, 
    Text, 
    useColorMode,
    useColorModeValue
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaTwitter } from "react-icons/fa";
import {
    BsEnvelope,
    BsHouse,
    BsHash,
    BsBell,
    BsBookmark,
    BsList,
    BsPerson,
    BsThreeDots,
} from "react-icons/bs" // Outline (Inactive)
import {
    BsHouseFill,
    BsBellFill,
    BsEnvelopeFill,
    BsBookmarkFill,
    BsPersonFill,
} from "react-icons/bs" // Filled (Active)

interface Props {
    children: React.ReactNode;
}

interface ListLink {
    href: string;
    text: string;
    activeIcon: IconType;
    inactiveIcon: IconType;
}

const LINKS: ListLink[] = [
    {
        href: "/home",
        text: "Inicio",
        activeIcon : BsHouseFill,
        inactiveIcon : BsHouse,
    },
    {
        href: "/explore",
        text: "Explorar",
        activeIcon : BsHash,
        inactiveIcon : BsHash,
    },
    {
        href: "/notifications",
        text: "Notificaciones",
        activeIcon : BsBellFill,
        inactiveIcon : BsBell,
    },
    {
        href: "/messages",
        text: "Mensajes",
        activeIcon : BsEnvelopeFill,
        inactiveIcon : BsEnvelope,
    },
    {
        href: "/bookmarks",
        text: "Guardados",
        activeIcon : BsBookmarkFill,
        inactiveIcon : BsBookmark,
    },
    {
        href: "/lists",
        text: "Listas",
        activeIcon : BsList,
        inactiveIcon : BsList,
    },
    {
        href: "/profile",
        text: "Perfil",
        activeIcon : BsPersonFill,
        inactiveIcon : BsPerson,
    },
    {
        href: "/options",
        text: "Más Opciones",
        activeIcon : BsThreeDots,
        inactiveIcon : BsThreeDots,
    },
];

const Layout: React.FC<Props> = ({ children }) => {
    const { toggleColorMode } = useColorMode();
    const { pathname } = useLocation();
    const logoColor = useColorModeValue('primary.500', undefined);

    return (
        <Container height="100%" paddingX={0} alignSelf="center" maxWidth="container.md">
            <Stack direction="row" height="100%" divider={<StackDivider />}>
                <Stack justifyContent="space-between">
                    <Stack minWidth={72} paddingX={6} paddingY={3} spacing={8}>
                        <Icon color={logoColor} width={7} height={7} as={FaTwitter} onClick={toggleColorMode}/>
                        <Stack fontWeight="bold" fontSize="xl" spacing={7}>
                            {LINKS.map(link => (
                            <Link to={link.href} key={link.href}>
                                    <Stack 
                                        direction="row" 
                                        alignItems="center" 
                                        spacing={5} 
                                        color={pathname === link.href ? 'white.500' : 'inherit'}>
                                    <Icon 
                                        as={pathname === link.href ? link.activeIcon : link.inactiveIcon} width={6} 
                                        height={6}/>
                                    <Text 
                                        fontWeight={pathname === link.href ? '700' : 'normal'}   fontSize="lg">{link.text}
                                    </Text>
                                </Stack>
                             </Link>))}
                        </Stack>
                        <Button colorScheme="primary" size="lg" width="100%">
                            Twittear
                        </Button>
                    </Stack>
                    <Stack>
                        <Stack></Stack>
                    </Stack>
                </Stack>
                <Box paddingX={4}>{children}</Box>
            </Stack>
        </Container>
    );
};

export default Layout;