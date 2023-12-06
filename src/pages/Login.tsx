import { Button, Card, Flex, FormControl, FormLabel, Heading, Input, Link, Spacer, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const onLogin = () => {
        navigate('/dashboard');
    }
    const onCreate = () => {
        navigate('/');
    }
    return (
        <Flex p={8} bg={'linear-gradient(180deg, #1959A8 50%, #5587C5 80%, #A2BEE2 100%)'} minH={'100dvh'} align={'center'} justify={'center'}>
            <Card p={{ base: 8, sm: 12 }} width={'428px'}>
                <Stack spacing={2} align={'center'} justify={'center'}>
                    <Heading fontSize={'sm'} fontWeight={200}>Welcome back</Heading>
                    <Heading fontSize={'xl'} mb={4}>Login to your account</Heading>
                    <FormControl id="email" mb={2}>
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" />
                    </FormControl>
                    <FormControl id="password" mb={4}>
                        <Flex>
                            <FormLabel>Password</FormLabel>
                            <Spacer />
                            <Link color={'#1959A8'}>Forgot ?</Link>
                        </Flex>
                        <Input type="password" />
                    </FormControl>
                    <Button
                        colorScheme={'blue'}
                        variant={'solid'}
                        w={'100%'}
                        onClick={onLogin}
                        mb={2}
                    >
                        Login now
                    </Button>
                    <Flex align={'center'} justify={'center'}>
                        Don't have an account ? <Link ml={4} color={'1959A8'} onClick={onCreate}>Sign Up</Link>
                    </Flex>
                </Stack>
            </Card>
        </Flex>
    );
}
