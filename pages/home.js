import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// @material-ui/core components
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Parallax from "components/Parallax/Parallax.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";


// Sections for this page
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";


const dashboardRoutes = [];

import modalStyle from "assets/jss/nextjs-material-kit/pages/componentsSections/javascriptStyles.js";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(styles);


export default function LandingPage(props) {
  const [modal, setModal] = React.useState(false);
  const [lang] = React.useState("ENGLISH")
  const [help] = React.useState("I need Help Oxygen/Beds/Vaccines")
  const [offer] = React.useState("I have Leads on Oxygen/Beds/Vaccines") 
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
            brand="Covid Help"
            rightLinks={
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  
                <Button color="rose" round onClick={() => setModal(true)}>
                <b>Languages</b>
                </Button>
                </ListItem>
              </List>
            }
          />  
        <Dialog
        classes={{
          root: classes.center,
          paper: classes.modal
        }}
        open={modal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setModal(false)}
        aria-labelledby="modal-slide-title"
        aria-describedby="modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <IconButton
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => setModal(false)}
          >
            <Close className={classes.modalClose} />
          </IconButton>
          <h4 className={classes.modalTitle}>Languages</h4>
        </DialogTitle>
        <DialogActions
          className={classes.modalFooter + " " + classes.modalFooterCenter}
        >
          <Button onClick={() => setModal(false)}>ENGLISH</Button>
          <Button onClick={() => setModal(false)}>HINDI</Button>
          <Button onClick={() => setModal(false)}>MARATHI</Button>

        </DialogActions>
      </Dialog> 
      <h3>Help Each other by adding resource you find no account needed! Save Lives and Help the Needy</h3>
      <div class="row">
      <div class="col-md-6 col-md-offset-3">
      <Button type="button" color="rose" fullWidth="True">{help}</Button>
      <Button type="button" color="rose" fullWidth="True">{offer}</Button>
      </div>
      </div>    
    </div>
  );
}
