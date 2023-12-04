import AddHomeIcon from '@mui/icons-material/AddHome';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PeopleIcon from '@mui/icons-material/People';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import AddCommentIcon from '@mui/icons-material/AddComment';
export default {
  data: [
    { name: "Home", url: "/MainPage", icon: <AddHomeIcon />, label: "Dashboard" },
    { name: "Home", url: "/MainPage", icon: <AddHomeIcon />, label: "Dashboard" },
    { name: "Add new Users", url: "/InputFireBase", icon: <GroupAddIcon />, label: "Quick Menus" },
    { name: "Add new Users", url: "/InputFireBase", icon: <GroupAddIcon />, label: "Quick Menus" },
    { name: "Add new products", url: "/AddProduct", icon: <AddShoppingCartIcon />, label: "Quick Menus" },
    { name: "Users", url: "/UsersInDB", icon: <PeopleIcon />, label: "Quick Menus" },
    { name: "products", url: "/Product", icon: <LocalGroceryStoreIcon />, label: "Quick Menus" },
    { name: "Message", url: "/Message", icon: <AddCommentIcon />, label: "Users" },  
    { name: "Message", url: "/Message", icon: <AddCommentIcon />, label: "Users" },  

  ],

  }