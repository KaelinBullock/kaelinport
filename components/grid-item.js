import NextLink from 'next/link'
import Image from "next/image"
import { Box, Text, LinkBox, LinkOverlay, Link } from '@chakra-ui/react'
import { Global } from '@chakra-ui/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
   <LinkBox cursor='pointer' w='100%' align='center'>
      <Image src={thumbnail}
         alt={title}
         className='grid-item-thumbnail'
         placeholder="blur"
         loading="lazy"
      />
      <LinkOverlay href={href} target='blank'>
         <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
   </LinkBox>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
   <LinkBox
      as={NextLink}
      href={`/works/${id}`}
      scroll={false}
      cursor="pointer"
      w="100%"
      textAlign="center"
   >
      <Image
      src={thumbnail}
      alt={title}
      className="grid-item-thumbnail"
      placeholder="blur"
      />
      <LinkOverlay as="div" href={`/works/${id}`}>
      <Text mt={2} fontSize={20}>
         {title}
      </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
   </LinkBox>
 )
 
export const GridItemStyle = () => (
   <Global styles={ `
      grid-item-thumbnail {
         border-radius: 12px;
      }
      `}
   />
)