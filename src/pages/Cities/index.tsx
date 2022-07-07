import { Grid, Heading } from "@chakra-ui/react";
import City from "./City";

export default function Cities (){
  return (
    <>
      <Heading fontWeight='500' fontSize={['2xl','4xl']} mb='10'>Cidades +100</Heading>
      <Grid templateColumns={['1fr','1fr 1fr','repeat(3, 1fr)','repeat(4, 1fr)']} 
        gap={['20px','45px']} 
        alignItems='center' 
        justifyContent='center' 
        px={['30px','0']}
        >
          <City country="Reino Unido" imgPath="/londres.png" imgIcon='/reino-unido.svg'  />
          <City country="França" imgPath="/Paris.png" imgIcon='/iconFrance.png'  />
          <City country="Holanda" imgPath="/Amsterda.png" imgIcon='/iconHolanda.png'  />
          <City country="Itália" imgPath="/Roma.png" imgIcon='/iconItalia.png'  />
          <City country="República Tcheca" imgPath="/Praga.png" imgIcon='/iconRepublica.png'  />

          
      </Grid>
    </>
  )
}