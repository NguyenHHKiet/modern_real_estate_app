import React, { useState, useEffect } from "react";
import { Box, Flex, Select, Text, Input, Spinner, Icon, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import Image from "next/image";

const SearchFilters = () => {
  const [filters, setFilters] = useState({});

  return (
    <Flex bg={"gray.100"} justifyContent={"center"} alignItems={"center"} flexWrap={"wrap"} p={4}>
      SearchFilters
    </Flex>
  );
};

export default SearchFilters;
