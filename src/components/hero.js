import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import {
  Box,
  ButtonList,
  Container,
  Flex,
  Heading,
  Kicker,
  Section,
  Subhead,
  Text,
} from "./ui"

const heading = <div style={{ color: '#2F80ED' }}>mobile</div>;

export default function Hero(props) {
  return (
    <Section>
      <Container>
        <Flex gap={4} variant="responsive">
          <Box width="half">
            {props.image && (
              <GatsbyImage
                alt={props.image.alt}
                image={getImage(props.image.gatsbyImageData)}
              />
            )}
          </Box>
          <Box width="half">
            <Heading as="h1" style={{ fontSize: 56 }}>
              Step forward with <span style={{ color: '#2F80ED' }}>{heading.props.children}</span> podiatry
            </Heading>
            <Subhead as="h2">{props.subhead}</Subhead>
            <Text as="p" style={{ fontSize: 20 }}>Enjoy professional and quality foot care from the
              comfort of your own home.</Text>
            {/* <ButtonList links={props.links} /> */}
            <Text as="a" style={{ fontSize: 24 }} href="mailto:enquiries@moretonbaypodiatry.com.au">enquiries@moretonbaypodiatry.com.au</Text>
            {' '}
            <Text as="p" style={{ fontSize: 24 }} href="tel:0424 428 932">0424 428 932</Text>
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageHeroContent on HomepageHero {
    id
    kicker
    h1: heading
    subhead
    text
    links {
      id
      href
      text
    }
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
