import { extendTheme } from "@chakra-ui/react";

/*
Color Pallet:
Blue: #1959A8
*/
const customTheme = extendTheme({
  fonts: {
    body: `'InterFont', sans-serif !important`, // Set the custom font for the body text
    heading: `'InterFont', sans-serif !important`,
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
      },
    },
  },
  components: {
    Input: {
      defaultProps: {
        focusBorderColor: '#1959A8',
      },
      baseStyle: {
        bg: '#fff'
      }
    },
    Select: {
      defaultProps: {
        focusBorderColor: '#1959A8',
      },
    }
  }
});

export default customTheme;
