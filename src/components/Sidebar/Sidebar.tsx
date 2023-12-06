import { ReactNode } from 'react';
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    useDisclosure,
    BoxProps,
    FlexProps,
    Heading,
    Stack,
    Spacer
} from '@chakra-ui/react';
import {
    FiTrendingUp,
    FiUsers,
    FiMenu,
    FiFile,
    FiUser,
    FiMail,
    FiPower,
    FiList,
    FiPlus,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { Link as RouterLink, useNavigate } from "react-router-dom";

interface LinkItemProps {
    name: string;
    icon: IconType;
    path: string;
}
const LinkItems: Array<LinkItemProps> = [
    { name: 'Add Lead', icon: FiPlus, path: '/addlead' },
    { name: 'My Leads', icon: FiList, path: '/myleads' },
    { name: 'New Leads', icon: FiList, path: '/newleads' },
    { name: 'Pending Leads', icon: FiList, path: '/pendingleads' },
    { name: 'Completed Leads', icon: FiList, path: '/completedleads' },
];

const LinkRewards: Array<LinkItemProps> = [
    { name: 'Top Salespersons', icon: FiUsers, path: '/topsalespersons' },
    { name: 'Ambassador Tiers', icon: FiUsers, path: '/ambassadortiers' },
    { name: 'Rewards & Benefits', icon: FiTrendingUp, path: '/rewardsbenefits' },
];

const LinkResources: Array<LinkItemProps> = [
    { name: 'Documents', icon: FiFile, path: '/documents' },
];

export default function Sidebar({ children }: { children: ReactNode }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    return (
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.800')}>
            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
                boxShadow={useColorModeValue('0px 2px 24px rgb(0 0 0 / 10%)', '0px 2px 24px rgb(150 150 150 / 10%)')}
            />
            <Drawer

                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }} p={4}>
                <Flex alignItems="center" justifyContent="space-between" display={{ base: 'none', sm: 'flex' }}>
                    <Box></Box>
                    <Stack direction={'row'} spacing='16px'>
                        <Icon as={FiMail} fontSize={24} cursor="pointer" />
                        <Icon as={FiUser} fontSize={24} cursor="pointer" onClick={() => navigate('/userprofile')} />
                        <Icon as={FiPower} fontSize={24} cursor="pointer" onClick={() => navigate('/')} />
                    </Stack>
                </Flex>
                {children}
            </Box>
        </Box>
    );
}

interface SidebarProps extends BoxProps {
    onClose: () => void;
}
const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    const navigate = useNavigate();
    return (
        <Box
            bg={'white'}
            borderRight="1px"
            borderRightColor={'#DEE8F5'}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h={16} w={'auto'} mx="8" alignItems="center" justifyContent="space-between">
                <Box>
                    {/* ICON??? */}
                </Box>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>

            <Flex alignItems="center" mx="8" justifyContent={{ base: 'space-between', sm: 'center' }}>
                <Heading
                    fontSize="2xl"
                    onClick={() => navigate('/dashboard')}
                    cursor={'pointer'}
                >
                    Dashboard
                </Heading>

            </Flex>
            <Flex my={4} mx="8" alignItems="center" justifyContent={{ base: 'space-between', sm: 'center' }}>
                <Heading
                    fontSize="sm"
                    fontWeight={200}
                >
                    Ambassador ID: 0001
                </Heading>
            </Flex>
            {
                LinkItems.map((link, i) => (
                    <RouterLink to={link.path} onClick={onClose} key={i}>
                        <NavItem key={link.name} icon={link.icon}>
                            {link.name}
                        </NavItem>
                    </RouterLink>
                ))
            }
            <Flex alignItems="center" my={4} mx="8" justifyContent="center">
                <Heading fontSize="md">Rewards Program</Heading>
            </Flex>
            {
                LinkRewards.map((link, i) => (
                    <RouterLink to={link.path} onClick={onClose} key={i}>
                        <NavItem key={link.name} icon={link.icon}>
                            {link.name}
                        </NavItem>
                    </RouterLink>
                ))
            }
            <Flex alignItems="center" justifyContent="center" my={4} mx="8">
                <Heading fontSize="md">Resources</Heading>
            </Flex>
            {
                LinkResources.map((link, i) => (
                    <RouterLink to={link.path} onClick={onClose} key={i}>
                        <NavItem key={link.name} icon={link.icon}>
                            {link.name}
                        </NavItem>
                    </RouterLink>
                ))
            }
        </Box >
    );
};

interface NavItemProps extends FlexProps {
    icon: IconType;
    children: string;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
    return (
        <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
            <Flex
                align="center"
                p="2"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'blue.400',
                    color: 'white',
                }}
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};

interface MobileProps extends FlexProps {
    onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    const navigate = useNavigate();
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 24 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent="flex-start"
            {...rest}>
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<FiMenu />}
            />
            <Spacer />
            <Flex alignItems="center" justifyContent="space-between">
                <Box></Box>
                <Stack direction={'row'} spacing='16px'>
                    <Icon as={FiMail} fontSize={24} cursor="pointer" />
                    <Icon as={FiUser} fontSize={24} cursor="pointer" onClick={() => navigate('/userprofile')} />
                    <Icon as={FiPower} fontSize={24} onClick={() => navigate('/')} cursor="pointer" />
                </Stack>
            </Flex>
        </Flex>
    );
};