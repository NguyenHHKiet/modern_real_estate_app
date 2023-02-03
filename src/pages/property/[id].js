import React from "react";
import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import { baseUrl, fetchApi } from "../../utils/fetchApi";
import ImageScrollbar from "../../components/ImageScrollbar";

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos
  }
}) => {
  return (
    <Box>
      {" "}
      {photos && <ImageScrollbar data={photos} />}
      <Box>
        <Flex>
          <Box>{isVerified && <GoVerified />}</Box>
          <Text>
            AED {price} {rentFrequency && `/${rentFrequency}`}
          </Text>
          <Spacer />
          <Avatar size={"sm"} src={agency?.logo?.baseUrl} />
        </Flex>
        <Flex>
          {rooms}
          <FaBed /> | {baths}
          <FaBath /> | {millify(area)} sqft <BsGridFill />
        </Flex>
      </Box>
      <Box>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </Box>
      <Flex>
        <Flex>
          <Text>Type</Text>
          <Text>{type}</Text>
        </Flex>{" "}
        <Flex>
          <Text>Purpose</Text>
          <Text>{purpose}</Text>
        </Flex>{" "}
        <Flex>
          <Text>Furnishing Status</Text>
          <Text>{furnishingStatus}</Text>
        </Flex>
      </Flex>
      <Box></Box>
    </Box>
  );
};

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data
    }
  };
}
