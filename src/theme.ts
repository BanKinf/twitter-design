import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false,
    },
    colors: {
        primary: theme.colors.twitter,
    },
    styles: {
        global: {
            "html, body, #root": {
                height: "100%",
            },
        },
    },
});

