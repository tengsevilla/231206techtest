import { Box, Card, Flex, Grid, Heading, ListItem, OrderedList, Stack, Text } from '@chakra-ui/react';
import DatePickerFull from '../components/DatePicker/DatePickerFull';

export default function Dashboard() {
    return (
        <Box px={8} py={4}>
            <Heading size={'xl'} mb={16}>Dashboard</Heading>

            <Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6} px={{ base: 8, lg: 16 }} textAlign={'center'}>
                <Card h={248}>
                    <Flex
                        direction="column"
                        align="center"
                        justify="center"
                        height="100%"
                    >
                        <Heading size={'2xl'}>18</Heading>
                        <Text size={'sm'} fontWeight={200}>Total Leads</Text>
                    </Flex>
                </Card>

                <Card h={248}>
                    <Flex
                        direction="column"
                        align="center"
                        justify="center"
                        height="100%"
                    >
                        <Heading size={'2xl'}>4</Heading>
                        <Text size={'sm'} fontWeight={200}>Follow-up Leads</Text>
                    </Flex>
                </Card>

                <Card h={'248'}>
                    <Flex
                        direction="column"
                        align="center"
                        justify="center"
                        height="100%"
                    >
                        <DatePickerFull />
                    </Flex>

                </Card>
            </Grid>


            <Heading size={'md'} mt={16} mb={4}>Top Salespersons</Heading>

            <OrderedList ml={16} spacing={4}>
                <ListItem>
                    <Stack spacing={0}>
                        <Heading size={'sm'}>Person</Heading>
                        <Text fontSize={14}>Total leads closed: 1110</Text>
                    </Stack>
                </ListItem>
                <ListItem>
                    <Stack spacing={0}>
                        <Heading size={'sm'}>Person</Heading>
                        <Text fontSize={14}>Total leads closed: 1110</Text>
                    </Stack>
                </ListItem>
                <ListItem>
                    <Stack spacing={0}>
                        <Heading size={'sm'}>Person</Heading>
                        <Text fontSize={14}>Total leads closed: 1110</Text>
                    </Stack>
                </ListItem>
                <ListItem>
                    <Stack spacing={0}>
                        <Heading size={'sm'}>Person</Heading>
                        <Text fontSize={14}>Total leads closed: 1110</Text>
                    </Stack>
                </ListItem>
            </OrderedList>

        </Box>
    );
}
