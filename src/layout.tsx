import { Box, Container, Divider, Icon, Stack, Text } from "@chakra-ui/react";
import { FaBell, FaBookmark, FaEnvelope, FaHashtag, FaHome, FaTwitter } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <Container height="100%" paddingX={0} alignSelf="center" maxWidth="container.md">
            <Stack direction="row" height="100%">
                <Stack 
                    borderRightColor="gray.700" 
                    borderRightWidth={1} 
                    paddingX={4}
                    paddingY={4} 
                    spacing={8}
                >
                    <Link to={"/"}><Icon width={6} height={6} as={FaTwitter}/></Link>
                    <Stack spacing={6}>
                        <Link to={"/"}>
                            <Stack direction="row" alignItems="center" spacing={4}>
                                <Icon as={FaHome} width={6} height={6}/>
                                <Text fontWeight="bold" fontSize="lg">Inicio</Text>
                            </Stack>
                        </Link>
                        <Stack direction="row" alignItems="center" spacing={4}>
                            <Icon as={FaHashtag} width={6} height={6}/>
                            <Text fontWeight="bold" fontSize="lg">Explorar</Text>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={4}>
                            <Icon as={FaBell} width={6} height={6}/>
                            <Text fontWeight="bold" fontSize="lg">Notificaciones</Text>
                        </Stack>
                        <Link to={"/messages"}>
                            <Stack direction="row" alignItems="center" spacing={4}>
                                <Icon as={FaEnvelope} width={6} height={6}/>
                                <Text fontWeight="bold" fontSize="lg">Mensajes</Text>
                            </Stack>
                        </Link>
                        <Stack direction="row" alignItems="center" spacing={4}>
                            <Icon as={FaBookmark} width={6} height={6}/>
                            <Text fontWeight="bold" fontSize="lg">Guardados</Text>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={4}>
                            <Icon as={FaTwitter} width={6} height={6}/>
                            <Text fontWeight="bold" fontSize="lg">Listas</Text>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={4}>
                            <Icon as={FaTwitter} width={6} height={6}/>
                            <Text fontWeight="bold" fontSize="lg">Perfil</Text>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={4}>
                            <Icon as={FaTwitter} width={6} height={6}/>
                            <Text fontWeight="bold" fontSize="lg">Más opciones</Text>
                        </Stack>
                    </Stack>
                </Stack>
                <Box paddingX={4}>{children}</Box>
            </Stack>
        </Container>
    );
};

export default Layout;