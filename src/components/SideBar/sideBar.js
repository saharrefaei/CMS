
import React, {  useState, forwardRef } from 'react';
import {List, ListItem, Collapse, Button, Drawer } from '@material-ui/core';
import clsx from 'clsx';
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import menuItems from './component/sideBarItems';
import { NavLink as RouterLink } from 'react-router-dom';
import useStyles from './component/menuBarStyle';
const MenuBar = (props) => {
    const [ menu, setMenu ] = useState({});
    const { className, ...rest } = props;
    const classes  = useStyles();
    const handleClick = (item) => {
        let newData = {...menu, [item] : !menu[item]};
        setMenu(newData);
    }
    const CustomRouterLink = forwardRef((props, ref) => (
      <div ref={ref} style={{ flexGrow: 1 }}>
        <RouterLink {...props} />
      </div>
    ));
    const handleMenu = (children, level = 0) => {
        if (!children || !Array.isArray(children)) {
          return null; // Return null or handle the case where children is not defined or not an array
        }
      
        let currentLabel = null;
      
        return children.map(({ children, name, url, links, icon, label }) => {
          if (label !== currentLabel) {
            // Display the label when it changes
            currentLabel = label;
            return (
              <div key={label}>
                <ListItem className={classes.item} disableGutters>
                  <Button
                    className={clsx({
                      [classes.btnRoot]: true,
                      [classes.button]: true,
                      [classes.labelButton]: true,
                    })}
                  >
                    {label}
                  </Button>
                </ListItem>
                {handleMenu(children, level)} {/* Continue rendering children */}
              </div>
            );
          }
      
          if (!children) {
            return (
              <List component="div" disablePadding key={name}>
                <ListItem className={classes.item} disableGutters>
                  <Button
                    className={clsx({
                      [classes.btnRoot]: true,
                      [classes.button]: true,
                      [classes.subMenu]: level,
                    })}
                    component={CustomRouterLink}
                    to={url}
                  >
                    <div style={{ paddingRight: '10%', marginTop: '2%' }}>{icon} </div> {name}
                  </Button>
                </ListItem>
              </List>
            );
          }
      
          return (
            <div key={name}>
              <ListItem className={classes.item} disableGutters onClick={() => handleClick(name)}>
                <Button
                  className={clsx({
                    [classes.btnRoot]: true,
                    [classes.button]: true,
                    [classes.subMenu]: level,
                  })}
                >
                  {name} {menu[name] ? <ExpandLess /> : <ExpandMore />}
                </Button>
              </ListItem>
              <Collapse in={menu[name] ? true : false} timeout="auto" unmountOnExit>
                {handleMenu(children, 1)}
              </Collapse>
            </div>
          );
        });
      };
      
return (
    
      <Drawer 
          anchor="left"
          classes={{ paper: classes.drawer }}
          open={true}
          variant="persistent"
        >
          <List {...rest} className={clsx(classes.root, className)} >
              { handleMenu(menuItems.data) }
          </List>
      </Drawer>
   )
}
export default MenuBar;