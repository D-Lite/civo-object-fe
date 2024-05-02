import { Stack, Box, Flex, Button, Text, VStack, useBreakpointValue , useDisclosure, Heading} from '@chakra-ui/react'
import bgDefault from './assets/background-image.jpg'
import UploadImage from './components/UploadImage'
import PetCard from './components/PetCard'
import { useState, useEffect } from 'react'

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [photos, setPhotos] = useState([]);
useEffect(() => {
  fetch(`your-backend-base-url/all`)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    setPhotos(data);
  });
}, []);

  return (
    <Box>
      <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={bgDefault}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'center'} spacing={6}>
          <Heading color={'white'}>CIVO File Upload</Heading>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize="20px">
            Photo by <a href="https://unsplash.com/@tranmautritam?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Tran Mau Tri Tam ✪</a> on <a href="https://unsplash.com/photos/grey-tabby-cat-beside-short-coat-brown-and-white-dog-7QjU_u2vGDs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}
              onClick={onOpen}
            >
              Upload new image
            </Button>
          </Stack>
        </Stack>
      </VStack>
      <UploadImage isOpen={isOpen} onClose={onClose} />
    </Flex>

    <Flex p={4} mt="2rem" align="center" justify="start" flexWrap="wrap" gap="10">
        {photos.map((photo, index) => 
        <PetCard key={index} image={`${import.meta.env.VITE_CIVO_OBJECT_ENDPOINT}/${import.meta.env.VITE_CIVO_BUCKET_NAME}/`+photo?.Key} name="Kitten" />        
      )}
    </Flex>

    </Box>
  )
}