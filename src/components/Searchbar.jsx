import { Flex,Menu,MenuButton,Button,MenuList,MenuItem,Input, Box, Grid} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons"
import Icon from "./Icon";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";


export default function Searchbar(){

  let [search,setSearch]=useState("")
  let nav=useNavigate()
  
  const handleClick=(e)=>{

    nav(process.env.REACT_APP_PRODUCTS+`/${e.target.innerText.toLowerCase()}`)

  }

    return <Flex m="4px" bg="white" w={{base:"90%",lg:700}} h={50} align="center" gap={4} border="1px solid #202340" borderRadius="50px">
        <Menu>
  <MenuButton  borderRightRadius={0} w={300} borderLeftRadius="50px" bg="white" height="100%" borderRight="1px solid #202340" as={Button} rightIcon={<ChevronDownIcon />}>
  All Departments
  </MenuButton>
  <MenuList>
  <MenuItem onClick={handleClick}>Clothes</MenuItem>
  <MenuItem  onClick={handleClick}>Shoes</MenuItem>
  <MenuItem  onClick={handleClick}>Beauty</MenuItem>
  <MenuItem  onClick={handleClick} >Jewelry</MenuItem>
  <MenuItem>Auto</MenuItem>
    <MenuItem>Baby</MenuItem>
    <MenuItem>Books</MenuItem>
    <MenuItem>Buisness</MenuItem>
    <MenuItem>Cameras</MenuItem>
    <MenuItem>Collectibles</MenuItem>
    <MenuItem>Computers</MenuItem>
    <MenuItem>Crafts</MenuItem>
    <MenuItem>Electronics</MenuItem>
    <MenuItem>Food and Drinks</MenuItem>
    <MenuItem>Garden</MenuItem>
    <MenuItem>Gifts</MenuItem>
    <MenuItem>Heatlth and Nutrition</MenuItem>
    <MenuItem>Home Store</MenuItem>
    <MenuItem>Movies</MenuItem>
    <MenuItem>Music</MenuItem>
    <MenuItem>Party Supplies</MenuItem>
    <MenuItem>pet Supplies</MenuItem>
    <MenuItem>Poster</MenuItem>
    <MenuItem>Software</MenuItem>
    <MenuItem>Sports Fan Shop</MenuItem>
    <MenuItem>Sports and Fitness</MenuItem>
    <MenuItem>Tools</MenuItem>
   
  </MenuList>
</Menu>
<Input variant='unstyled' placeholder='Search ZipShop.com...' onChange={(e)=>{
  setSearch(e.target.value)
}} />
<Grid onClick={()=>{
nav(`/search?q=${search}`)
}} h={50} w={20}  placeItems="center"  bg="#202340" borderRightRadius="50px">
    <Icon image="https://cdn-icons-png.flaticon.com/512/8915/8915520.png" size={32}></Icon>
</Grid>


    </Flex>
}