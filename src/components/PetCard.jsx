import {
  Box,
  Center,
} from '@chakra-ui/react';

export default function PetCard({ image, name }) {
  return (
    <Center py={6}>
      <Box
        w={'400px'}
        // w={'full'}
        bg={"wheat"}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
          <img
            src={image}
            alt="Example"
          />
        </Box>
      </Box>
    </Center>
  )
}