import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

import { baseUrl, fetchApi } from "../utils/fetchApi";

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
  <Flex flexWrap={"wrap"} justifyContent={"center"} alignItems={"center"} m={10}>
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p={5}>
      <Text color={"gray.500"} fontSize={"sm"} fontWeight={"medium"}>
        {purpose}
      </Text>{" "}
      <Text fontSize={"3xl"} fontWeight={"bold"}>
        {title1}
        <br />
        {title2}
      </Text>{" "}
      <Text color={"gray.700"} fontSize={"lg"} paddingTop={3} paddingBottom={3}>
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button fontSize={"xl"} bg={"blue.300"} color={"white"}>
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home({ propertiesForSale, propertiesForRent }) {
  console.log(propertiesForSale, propertiesForRent);
  return (
    <>
      <Box>
        <h1>Hello World</h1>
        <Banner
          purpose={"RENT A HOME"}
          title1={"Rental Home for"}
          title2={"Everyone"}
          desc1={"Explore Apartments, Villas, Homes"}
          desc2={"and more"}
          buttonText={"Explore Renting"}
          linkName={"/search?purpose=for-rent"}
          imageUrl={
            "https://res.cloudinary.com/dhyyyqwaf/image/upload/v1657697736/14325_graphic-design_jalbcf.jpg"
          }
        />
        <Flex flexWrap={"wrap"} justifyContent={"center"} alignItems={"center"}>
          Hello
        </Flex>
        <Banner
          purpose={"BUY A HOME"}
          title1={"Find, Buy & Own Your"}
          title2={"Dream Home"}
          desc1={"Explore Apartments, Villas, Homes"}
          desc2={"and more"}
          buttonText={"Explore Buying"}
          linkName={"/search?purpose=for-sale"}
          imageUrl={
            "https://res.cloudinary.com/dhyyyqwaf/image/upload/v1657697735/14324_hoc-do-hoa_m7vpdj.jpg"
          }
        />
        <h4>End Block</h4>
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits
    }
  };
}
