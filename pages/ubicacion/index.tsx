import { Flex, Box, Text, AspectRatio, Divider } from "@chakra-ui/react";

import sitedata from "@/src/constants/sitedata";

const styles = {
  page: {
    w: "100%",
    h: "max-content",
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    w: "100%",
    maxW: "1200px",
    h: { base: "max-content", md: "max-content", lg: "740px", xl: "740px" },
    alignItems: "center",
    mb: { base: "60px", md: "60px", lg: "80px" },
    px: { base: "20px" },
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
    gap: { base: "3vw", md: "2.61vw", lg: "20px", xl: "23px" },
    color: "dark",
    fontSize: { base: "30px", md: "40px", lg: "50px", xl: "60px" },
    fontWeight: "400",
    lineHeight: "normal",
    my: { base: "40px", md: "40px", lg: "50px" },
    //border: "1px",
  },
  divider: {
    w: { base: "100px", md: "305px", lg: "305px", xl: "305px" },
    h: "1px",
    bg: "dark",
  },
  mapContainer: {
    w: { base: "87.5vw", md: "78.13vw", lg: "87.9vw", xl: "1000px" },
    h: { base: "auto" },
  },
};

function Map() {
  const sectionData = sitedata.ubicacion;

  return (
    <Flex {...styles.page} direction="column">
      <Flex {...styles.map} direction="column">
        {/* TITLE */}
        <Flex {...styles.title}>
          <Divider {...styles.divider} orientation="horizontal" />

          <Text>{sectionData.title}</Text>
        </Flex>

        <Box {...styles.mapContainer}>
          <AspectRatio ratio={16 / 9} maxW="1000px" margin="0 auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15064.135036899213!2d-98.89725110540435!3d19.280898061458043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1ee75e9fb3fd%3A0x725bea3e6b78c622!2sEmiliano%20Zapata%2C%2056608%20Chalco%20de%20D%C3%ADaz%20Covarrubias%2C%20State%20of%20Mexico!5e0!3m2!1sen!2smx!4v1715145998857!5m2!1sen!2smx"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </AspectRatio>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Map;
