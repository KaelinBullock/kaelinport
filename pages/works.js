import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from '../components/section'
import { WorkGridItem } from "../components/grid-item";

import thumbInkDrop from '../public/images/works/inkdrop_01.png'

const Works = () => {
   return (
      <Container>
         <Heading as='h3' fontSize={20} mb={4}>
            Works
         </Heading>

         <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section delay={0.3}>
               <WorkGridItem id="inkdrop" title='Inkdrop' thumbnail={thumbInkDrop}>
                  A markdown note-taking app
               </WorkGridItem>
            </Section>
            <Section delay={0.3}>
               <WorkGridItem id="inkdrop" title='Inkdrop' thumbnail={thumbInkDrop}>
                  A markdown note-taking app
               </WorkGridItem>
            </Section>
            <Section delay={0.3}>
               <WorkGridItem id="inkdrop" title='Inkdrop' thumbnail={thumbInkDrop}>
                  A markdown note-taking app
               </WorkGridItem>
            </Section>
            <Section delay={0.3}>
               <WorkGridItem id="inkdrop" title='Inkdrop' thumbnail={thumbInkDrop}>
                  A markdown note-taking app
               </WorkGridItem>
            </Section>
         </SimpleGrid>
      </Container>
   )
}

export default Works