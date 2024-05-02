import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import { useState } from 'react';


function UploadImage({ isOpen, onClose} ) {

  const [formData, setFormData] = useState({
      image: null,
    });

    const handleInputChange = (event) => {
      const { id, value, files } = event.target;
      const updatedFormData = {
        ...formData,
        [id]: (files ? files[0] : null),
      };
      setFormData(updatedFormData);
    };

    const handleUpload = () => {
      const apiFormData = new FormData();
      apiFormData.append('image', formData.image);
  
      fetch(`${import.meta.env.VITE_BACKEND_URL}/upload`, {
        method: 'PUT',
        body: apiFormData,
      })
        .then((res) => {
          if(res.status == 200) {
            onClose();
          }
        })
  }
    
  return (
    <>  
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new pet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Flex
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}>
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={1} px={6}>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        >
        <Stack spacing={4}>
          <FormControl id="image">
            <FormLabel>Image</FormLabel>
            <Input type="file" onChange={handleInputChange} />
          </FormControl>
        </Stack>
      </Box>
    </Stack>
  </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red'mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme='blue' onClick={handleUpload} variant='outline'>Upload Image</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default UploadImage;