import Header3 from "./components/header/Header3"
import Header1 from "./components/header/Header1"
import Header2 from "./components/header/Header2"
import { Box, CssBaseline, ThemeProvider, useTheme } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./components/hero/Hero";
import IconSection from "./components/hero/IconSection";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scroll/ScrollToTop";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  const [theme, colorMode] = useMode();
  
      // const theme = useTheme();
  

  return (

    <ColorModeContext.Provider 
// @ts-ignore
    value={colorMode}>
      <ThemeProvider 
// @ts-ignore
      theme={theme}>
                <CssBaseline />

 {/* <motion.div animate={{ scale: 1.5 }}  */}
 {/* <motion.h1
 initial={{ scale: 0.5 ,color:"blue[300]"}}
  animate={{ scale: 1,color:"red"}} 
  transition={{ duration: 5}}>
  Hend
  </motion.h1> */}

  
    <Header1/>
    <Header2/>
    <Header3/>

<Box bgcolor={theme.
// @ts-ignore
palette.bg.main}>
      <Hero />
  
   <Main/>

<Footer/>


<ScrollToTop/>
</Box>    

  
      </ThemeProvider>

    </ColorModeContext.Provider>









  )
}

export default App
