import React from "react";
import AreaDeTexto from "../components/textArea";
import { BsStars } from "react-icons/bs";
import { 
    Stack, 
    Text, 
    SkeletonCircle, 
    SkeletonText, 
    Skeleton, 
    StackDivider, 
    Icon, 
    Image, 
    Textarea,
    Button,
    CircularProgress
} from "@chakra-ui/react";
import { BiStar } from "react-icons/bi";

const TWEETS = new Array(12).fill(true).map((_, index) => index);

const FeedScreen: React.FC = () => {
    return (
        <Stack direction="row" divider={<StackDivider />} spacing={0}>
            <Stack divider={<StackDivider />} spacing={0} width="100%">
                <Stack 
                    paddingX={4} 
                    paddingY={3} 
                    direction="row" 
                    alignItems="center" 
                    justifyContent="space-between"
                >
                <Text fontSize="xl" fontWeight="700">
                    Inicio
                </Text>
                <Icon width={5} height={5} as={BsStars}/>
                </Stack>
            <Stack direction="row" paddingY={2} paddingX={4} spacing={4}>
                <Image 
                    src="src/assets/img/acount.jpg"
                    borderRadius="50%"
                    width={12}
                    height={12}
                />
                <Stack divider={<StackDivider />} width="100%">
                    <AreaDeTexto />
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Stack direction="row">
                            <Icon as={BiStar}/>
                            <Icon as={BiStar}/>
                            <Icon as={BiStar}/>
                            <Icon as={BiStar}/>
                            <Icon as={BiStar}/>
                            <Icon as={BiStar}/>
                        </Stack>
                        <Stack direction="row">
                            <Stack direction="row" divider={<StackDivider />} alignItems="center" spacing={4}>
                                <CircularProgress
                                    size={5}
                                    color="primary.500"
                                    trackColor="whiteAlpha.400"
                                    value={20}
                                />
                                <Button 
                                    borderRadius="50%"
                                    colorScheme="primary"
                                    fontSize="3xl"
                                    fontWeight="normal"
                                    height={10}
                                    width={10}
                                    variant="outline"
                                >
                                    +
                                </Button>
                            </Stack>
                            <Button colorScheme="primary">Twittear</Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack
                divider={<StackDivider />}
                flex={1}
                maxHeight="100vh"
                maxWidth={600}
                overflowY="auto"
                spacing={0}
                sx={{
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                }}
                width="100%"
            >
                {TWEETS.map((index) => (
                    <Stack key={index} direction="row" maxWidth={480} padding={4} spacing={4} width="100%">
                        <SkeletonCircle height={12} minHeight={12} minWidth={12} width={12} />
                        <Stack spacing={4} width="100%">
                            <Stack alignItems="flex-end" direction="row" spacing={2}>
                                <Skeleton height={6} width="120px" />
                                <Skeleton height={3} width="80px" />
                            </Stack>
                            <SkeletonText height="100%" noOfLines={6} spacing={2} />
                        </Stack>
                    </Stack>
                ))}
            </Stack>
            </Stack>
            <Text maxWidth={350} width="100%">
                {""}
            </Text>
        </Stack>
    );
};

export default FeedScreen;