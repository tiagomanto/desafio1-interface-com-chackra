import { Grid, GridItem } from "@chakra-ui/react";
import Caracteristica from "./Caracteristica";


export default function Caracteristicas(){

  return (
    <Grid
      templateColumns={['1fr 1fr','1fr 1fr','repeat(5, 1fr)']}
      w='100%'
      justifyContent='space-between'
      alignContent='center'
      mt={['20', '32']}
      mx='auto'
      maxW='1160px'
      gap={[1,5]}
    >
      <GridItem>
        <Caracteristica icon="Nightlife" text="vida noturna" />
      </GridItem>
      
      <GridItem>
        <Caracteristica icon="Beach" text="praia" />
      </GridItem>
      
      <GridItem>
        <Caracteristica icon="Modern" text="moderno" />
      </GridItem>
      
      <GridItem>
        <Caracteristica icon="Classic" text="Clássico" /> 
      </GridItem>
      
      <GridItem colSpan={[2,2,2,1]}>
        <Caracteristica icon="More" text="e mais" /> 
      </GridItem>
    </Grid>
  )
}