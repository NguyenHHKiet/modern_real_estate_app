import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";

const Search = () => {
  const [searchFilter, setSearchFilter] = useState(false);
  const router = useRouter();

  return (
    <Box>
      <Flex
        cursor={"pointer"}
        bg={"gray.100"}
        borderBottom={"1px"}
        borderColor={"gray.100"}
        p={2}
        fontWeight={"bold"}
        fontSize={"lg"}
        justifyContent={"center"}
        alignItems={"center"}>
        <Text>Search Property By Filters</Text>
        <Icon paddingLeft={2} w={7} as={BsFilter} />
      </Flex>
    </Box>
  );
};

export default Search;
