import React from 'react';

import { Container, chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Track = () => {

  return (
    <Container h="100vh" display="flex" alignItems="center" justifyContent="center">
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        I'm Dizzy!
      </motion.div>
    </Container>
  );
};

export default Track;
