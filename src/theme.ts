import { extendTheme, theme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { BiLock } from "react-icons/bi";

export default extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false,
    },
    colors: {
        primary: theme.colors.twitter,
    },
    styles: {
        global: (props:any) => ({
            "html, body, #root": {
                color: mode(undefined, "whiteAlpha.800")(props),
                height: "100%",
            },
            TextArea: {
                resize: "none",
                display: "block",
                height: "auto",
                "&::-webkit-scrollbar": {
                    display: "none",
                }
            }
        }),
    },
    components: {
        Button: {
            baseStyle: {
                borderLeftRadius: 9999,
                borderRightRadius: 9999,
            },
            sizes: {
                lg: {
                    paddingY: 6,
                    fontSize: "md",
                }
            },
            variants: {
                solid: (props:any) => ({
                    backgroundColor: `${props.colorScheme}.600`,
                    color: mode(undefined, "white")(props),
                    fontWeight: "bold",
                    _hover: {
                        backgroundColor: `${props.colorScheme}.700`,
                    },
                }),
                outline: (props:any) => ({
                    borderColor: `gray.500`,
                    color: `${props.colorScheme}.500`,
                    fontWeight: "bold",
                    _hover: {
                        borderColor: `${props.colorScheme}.600`,
                    },
                }),
            },
        },
    },
});