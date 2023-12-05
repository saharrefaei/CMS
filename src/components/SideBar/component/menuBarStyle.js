import { makeStyles } from '@material-ui/styles';
import { colors } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    justifyContent : "left",
  },

  labelButton: {
    color: colors.blueGrey[500],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: 'bold', // Customize the font weight for labels if needed
  },

  drawer : {
    marginTop:'4.4%',
    width: "250px",
  },
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    color: colors.blueGrey[800],
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
  },
  btnRoot : {
    paddingLeft : "25px",
   
    justifyContent : "left !important"
  },
  subMenu : {
    paddingLeft : "50px !important",
  }
}));
export default useStyles;