import { ReactElement, useEffect, useState, useLayoutEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

import { Box, Flex, Link } from "@chakra-ui/react";

import pagesInfo from "@/src/constants/pagesInfo";

import wa_logo from "@/src/assets/wa_logo.png";

function PageWrapper(props: { children: ReactElement }) {
  const { children } = props;

  const router = useRouter();

  const [pageInfo, setPageInfo] = useState({
    title: "",
    description: "",
  });

  const getPageInfo = () => {
    const route = router.route;
    const currentPageInfo = pagesInfo[route];

    setPageInfo(currentPageInfo);
  };

  useEffect(() => {
    getPageInfo();
  }, []);

  return (
    <Box w="100%" h="100%" position="relative">
      <Head>
        <title>{pageInfo?.title}</title>
        <meta name="description" content={pageInfo?.description} />
        {/* <link rel="icon" href="../" /> */}
      </Head>

      {children}

      <Flex
        borderTopEndRadius="50%"
        borderTopStartRadius="50%"
        borderBottomEndRadius="50%"
        position="sticky"
        ml={{ base: "20px", md: "30px" }}
        mb="15px"
        bottom={{ base: "20px", md: "30px" }}
        zIndex="overlay"
        //boxShadow="0px 0px 80px 0px rgba(0, 0, 0, 0.20)"
      >
        <Link isExternal href="https://wa.me/7713013483">
          <Image src={wa_logo} width={56} height={57} alt="us" />
        </Link>
      </Flex>
    </Box>
  );
}

export default PageWrapper;
