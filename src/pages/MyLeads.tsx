import { Box, Button, Card, Flex, Heading, Spacer } from '@chakra-ui/react';
import DataTableLeads from '../components/table/DataTableLeads';
import InputSearch from '../components/input/InputSearch';

export default function MyLeads() {
    return (
        <Box px={8} py={4}>
            <Heading size={'xl'} mb={8}>XXX Leads</Heading>

            <Flex mb={4}>
                <></>
                <Spacer />
                <Card>
                    <InputSearch placeholder='search'/>
                </Card>
            </Flex>
            <Card p={4} style={{ height: 624, overflow: 'auto' }}>
                <DataTableLeads />
            </Card>

            <Flex mt={4}>
                <></>
                <Spacer />
                <Flex flex={'column'}>
                    <Button bgColor={'#1959A8'} color={'white'} opacity={.5} mr={4}>Print</Button>
                    <Button bgColor={'#1959A8'} color={'white'} >Download</Button>
                </Flex>
            </Flex>
        </Box>
    );
}
