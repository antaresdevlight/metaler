const styles = {
  section: {
    w: "100%",
    h: "auto",
    bg: "white",
    alignItems: "center",
  },
  contact: {
    w: "100%",
    maxW: "1200px",
    h: { base: "max-content", md: "max-content", lg: "740px", xl: "740px" },
    alignItems: "center",
    mb: { md: "60px", lg: "60px" },
  },
  title: {
    alignItems: "center",
    top: { base: "auto", md: "auto", lg: "15.63vw", xl: "222px" },
    left: { base: "auto", md: "auto", lg: "26.37vw", xl: "436px" },
    gap: { base: "3vw", md: "2.61vw", lg: "20px", xl: "23px" },
    color: "dark",
    fontSize: { base: "10vw", md: "7.82vw", lg: "60px", xl: "60px" },
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
  message: {
    fontSize: { base: "14px", md: "16px", lg: "18px" },
    fontWeight: "400",
    lineHeight: "normal",
    mb: { base: "35px", md: "45px", lg: "60px" },
  },
  formImageContainer: {
    w: "100%",
    px: { md: "20px", lg: "30px" },
    //mb: { md: "60px", lg: "60px" },
    alignItems: "center",
    //border: "1px",
  },
  form: {
    w: { base: "88%", md: "50%" },
    p: { base: "10px", md: "15px", lg: "30px" },
    mb: { base: "25px", md: "0px" },
    //border: "1px",
  },
  formControl: {
    w: "100%",
    fontSize: { base: "12px", md: "14px", lg: "16px" },
    fontWeight: "400",
    lineHeight: "normal",
    mb: { base: "25px", md: "20px", lg: "30px" },
    //border: "1px",
  },
  textArea: {
    minH: { base: "80px", md: "100px" },
    maxH: "120px",
    border: "1px",
    borderColor: "dark",
  },
  input: {
    border: "1px",
    borderColor: "dark",
  },
  confirmationMessage: {
    color: "dark",
    fontSize: { base: "16px" },
    fontWeight: "400",
    lineHeight: "normal",
    mb: { base: "25px", md: "20px", lg: "30px" },
  },
  button: {
    w: { base: "150px", md: "200px" },
    bg: "metaler",
  },
  formImage: {
    w: { base: "88%", md: "50%" },
    h: "auto",
    mb: { base: "45px", md: "0px" },
  },
};

export default styles;
