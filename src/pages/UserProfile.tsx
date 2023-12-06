

import { Box, Flex, Heading, Image, Button, SimpleGrid, FormControl, FormLabel, Input, Card, } from '@chakra-ui/react';
import UserImage from '../core/assets/images/userImage.jpg'
export default function UserProfile() {
    return (
        <Box px={8} py={4}>
            <Heading size={'xl'} mb={8}>User Profile</Heading>
            <Flex flexDir={{ base: 'column', lg: 'row' }}>
                <Card p={8} mr={{ base: 0, lg: 8 }} w={{ base: '100%', lg: '80%' }} mb={{ base: 8, lg: 0 }}>
                    <Box>
                        <Heading size={'sm'} mb={4}>Basic Information</Heading>
                        <SimpleGrid flex='1' columns={{ base: 1, lg: 2 }} spacing={4} mr={8} bg={'#fff'} borderRadius={4}>
                            <FormControl>
                                <FormLabel>First Name</FormLabel>
                                <Input type='firstname' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Middle Name</FormLabel>
                                <Input type='lastname' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Last Name</FormLabel>
                                <Input type='lastname' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>ABN</FormLabel>
                                <Input type='abn' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Date of Birth</FormLabel>
                                <Input type='dateofbirth' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input type='email' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Phone</FormLabel>
                                <Input type='contactnumber' />
                            </FormControl>

                        </SimpleGrid>
                    </Box>
                    <Box mt={8}>
                        <Heading size={'sm'} mb={4}>Address</Heading>
                        <SimpleGrid flex='1' columns={{ base: 1, lg: 2 }} spacing={4} mr={8} bg={'#fff'} borderRadius={4}>
                            <FormControl>
                                <FormLabel>Home Address</FormLabel>
                                <Input type='firstname' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>State</FormLabel>
                                <Input type='lastname' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>City</FormLabel>
                                <Input type='abn' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Post code</FormLabel>
                                <Input type='postcode' />
                            </FormControl>
                        </SimpleGrid>
                    </Box>
                    <Box mt={8}>
                        <Button bgColor={'#1959A8'} color={'white'} >Save</Button>
                    </Box>
                </Card>
                <Flex flexDir={'column'} alignItems={'center'}>
                    <Image src={UserImage} alt={'user'} mb={8} sizes='sm' />
                    <Button bgColor={'#1959A8'} color={'white'} >Choose File</Button>
                </Flex>
            </Flex>



        </Box>
    );
}
