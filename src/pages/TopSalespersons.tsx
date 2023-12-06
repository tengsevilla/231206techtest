import { Box, Card, Flex, Heading, SimpleGrid} from '@chakra-ui/react';

export default function TopSalespersons() {
    return (
        <Box px={8} py={4}>
            <Heading size={'xl'} mb={16}>Top Salespersons</Heading>
            <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={10}>
                <Box>
                    <Card h={248}>
                        <Flex
                            direction="column"
                            align="center"
                            justify="center"
                            height="100%"
                        >
                            <Heading size={'2xl'}>X</Heading>
                        </Flex>
                    </Card>
                    <Flex
                        mt={4}
                        align="center"
                        justify="center"
                        flexDir={'column'}
                    >
                        <Heading size={'md'} mb={4}>GOLD</Heading>
                        <Box>
                            Sed ut perspiciatis unde omnis iste natus error
                        </Box>
                        <Card mt={8} borderRadius={'50%'} p={8}>
                            100 Leads
                        </Card>
                    </Flex>
                </Box>
                <Box>
                    <Card h={248}>
                        <Flex
                            direction="column"
                            align="center"
                            justify="center"
                            height="100%"
                        >
                            <Heading size={'2xl'}>X</Heading>
                        </Flex>
                    </Card>
                    <Flex
                        mt={4}
                        align="center"
                        justify="center"
                        flexDir={'column'}
                    >
                        <Heading size={'md'} mb={4}>PLATINUM</Heading>
                        <Box>
                            sit voluptatem accusantium doloremque laudantium
                        </Box>
                        <Card mt={8} borderRadius={'50%'} p={8}>
                            100 Leads
                        </Card>
                    </Flex>
                </Box>

                <Box>
                    <Card h={248}>
                        <Flex
                            direction="column"
                            align="center"
                            justify="center"
                            height="100%"
                        >
                            <Heading size={'2xl'}>X</Heading>
                        </Flex>
                    </Card>
                    <Flex
                        mt={4}
                        align="center"
                        justify="center"
                        flexDir={'column'}
                    >
                        <Heading size={'md'} mb={4}>DIAMOND</Heading>
                        <Box>
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                        </Box>
                        <Card mt={8} borderRadius={'50%'} p={8}>
                            100 Leads
                        </Card>
                    </Flex>
                </Box>
            </SimpleGrid>
        </Box>
    );
}
