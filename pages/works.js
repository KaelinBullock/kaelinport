import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from '../components/section'
import { WorkGridItem } from "../components/grid-item";

import thumbInkDrop from '../public/images/works/inkdrop_01.png'
import Layout from "../components/layouts/article";

const Works = () => {
   return (
      <Layout title="Works">
         <Container>
            <Heading as='h3' fontSize={20} mb={4}>
               Works
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
               <Section delay={0.3}>
                  <WorkGridItem id="music" title='Music App' thumbnail={thumbInkDrop}>
                     Made in React using APIs
                  </WorkGridItem>
                  <WorkGridItem id="shipment-api" title='Shipment Api' thumbnail={thumbInkDrop}>
                     Made in React using APIs
                  </WorkGridItem>
               </Section>
            </SimpleGrid>
         </Container>
      </Layout>
   )
}

export default Works