import React from "react";
import { Link } from "react-router-dom";
import { 
    Box, 
    Button, 
    Container, 
    Icon, 
    Stack, 
    StackDivider, 
    Text, 
    useColorMode
} from "@chakra-ui/react";
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
} from "react-icons/bs"

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    const { toggleColorMode } = useColorMode();

    return (
        <Container height="100%" paddingX={0} alignSelf="center" maxWidth="container.md">
            <Stack direction="row" height="100%" divider={<StackDivider />}>
                <Stack minWidth={72} paddingX={6} paddingY={3} spacing={8}>
                    <Icon width={7} height={7} as={FaTwitter} onClick={toggleColorMode}/>
                    <Stack fontWeight="bold" fontSize="xl" spacing={7}>
                        <Link to={"/home"}>
                            <Stack direction="row" alignItems="center" spacing={5}>
                                <Icon as={BsHouse} width={6} height={6}/>
                                <Text fontWeight="bold" fontSize="lg">Inicio</Text>
                            </Stack>
                        </Link>
                        <Stack direction="row" alignItems="center" spacing={5}>
                            <Icon as={BsHash} width={6} height={6}/>
                            <Text fontWeight="bold" fontSize="lg">Explorar</Text>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={5}>
                            <Icon as={BsBell} width={6} height={6}/>
                            <Text fontWeight="bold" fontSize="lg">Notificaciones</Text>
                        </Stack>
                        <Link to={"/messages"}>
                            <Stack direction="row" alignItems="center" spacing={5}>
                                <Icon as={BsEnvelope} width={6} height={6}/>
                                <Text fontWeight="bold" fontSize="lg">Mensajes</Text>
                            </Stack>
                        </Link>
                        <Stack direction="row" alignItems="center" spacing={5}>
                            <Icon as={BsBookmark} width={6} height={6}/>
                            <Text fontWeight="bold" fontSize="lg">Guardados</Text>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={5}>
                            <Icon as={BsList} width={6} height={6}/>
                            <Text fontWeight="bold" fontSize="lg">Listas</Text>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={5}>
                            <Icon as={BsPerson} width={6} height={6}/>
                            <Text fontWeight="bold" fontSize="lg">Perfil</Text>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={5}>
                            <Icon as={BsThreeDots} width={6} height={6}/>
                            <Text fontWeight="bold" fontSize="lg">Más opciones</Text>
                        </Stack>
                    </Stack>
                    <Button colorScheme="primary" size="lg" width="100%">
                        Twittear
                    </Button>
                </Stack>
                <Box paddingX={4}>{children}</Box>
            </Stack>
        </Container>
    );
};

export default Layout;