import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

interface Props {
    placeholder: string;
}
export default function InputSearch(props: Props) {
    return (
        <InputGroup >
            <InputLeftElement pointerEvents='none'>
                <SearchIcon />
            </InputLeftElement>
            <Input type='text' bgColor={'#fff'} placeholder={props.placeholder} variant='filled' />
        </InputGroup>
    );
}
