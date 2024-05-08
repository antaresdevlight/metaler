import { ReactElement, useEffect, useState, useLayoutEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { Box } from "@chakra-ui/react";

import pagesInfo from "@/src/constants/pagesInfo";

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

  useLayoutEffect(() => {
    getPageInfo();
  }, []);

  return (
    <Box w="100%" h="100%">
      <Head>
        <title>{pageInfo.title}</title>
        <meta name="description" content={pageInfo.description} />
        {/* <link rel="icon" href="../" /> */}
      </Head>

      {children}
    </Box>
  );
}

export default PageWrapper;
