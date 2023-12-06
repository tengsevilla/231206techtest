import { Flex, Heading, Stack, Button, FormControl, FormLabel, Input, Link } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
export default function LandingPage() {
  const navigate = useNavigate();

  const onCreate = () => {
    // Do Something
  }

  const onLogin = () => {
    // Do Something
    navigate('login')
  }
  // { base: '100%', sm: '100vh' }
  // linear-gradient(180deg, #1959A8, #fff)
  return (
    <Stack minH={'100dvh'} direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1} >
        <Flex bg={'linear-gradient(180deg, #1959A8 40%, #5587C5 60%, #A2BEE2 100%)'} w={'100%'} h={'100%'} align={'center'} justify={'center'}>
          <Stack p={8} spacing={4} width={'548px'}>
            <Heading fontSize={'4xl'}>Welcome to</Heading>
            <Heading fontSize={'6xl'}>Lorep Ipsum Dollor Sit Amet Velit</Heading>
            <Heading fontSize={'xl'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Heading>
          </Stack>

        </Flex>

      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'} >
        <Stack spacing={4} width={'368px'}>
          <Heading fontSize={'2xl'} mb={4}>Create an Account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password" >
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button
            onClick={onCreate}
            colorScheme={'blue'}
            variant={'solid'}
          >
            Create account
          </Button>
          <Flex align={'center'} justify={'center'}>
            Already have an account ? <Link ml={4} color={'#1959A8'} onClick={onLogin}>Login</Link>
          </Flex>
        </Stack>
      </Flex>
    </Stack>

  );
}
