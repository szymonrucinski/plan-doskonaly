import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {setData} from '../Logic/API'
import {ButtonWrapper} from '../StyledComponents/Answers.styles'
import {
  EmailShareButton,
  TwitterIcon,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  EmailIcon,
  WhatsappIcon,
  LinkedinIcon
} from "react-share";
import { MovieFrame } from '../Logic/MovieFrame';
import { withRouter } from 'react-router-dom';
import { PL } from '../Locales/pl';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}




export interface PostResultsProps  {
  movies: MovieFrame[];
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

interface ISocialMedia 
{
  url: string;
  description : string;
}

const SocialMedia = (props: ISocialMedia) => {

  return <div style={{display:'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '10px', paddingTop: '20px'}}>
     <TwitterShareButton
        style={{paddingRight: '15px'}}
        url={props.url}
        title={props.description}
        className="Demo__some-network__share-button">
        <TwitterIcon
          size={32}
          round />
      </TwitterShareButton>
      <FacebookShareButton
        style={{paddingRight: '15px'}}
        url={props.url}
        quote={props.description}
        className="Demo__some-network__share-button">
        <FacebookIcon
          size={32}
          round />
      </FacebookShareButton>
      <EmailShareButton
        style={{paddingRight: '15px'}}
        url={props.url}
        subject={PL.HELPTOTRAINAI}
        body={props.description}
        className="Demo__some-network__share-button">
        <EmailIcon
          size={32}
          round />
      </EmailShareButton>
      <WhatsappShareButton
        style={{paddingRight: '15px'}}
        url={props.url}
        title={PL.HELPTOTRAINAI}
        className="Demo__some-network__share-button">
        <WhatsappIcon
          size={32}
          round />
      </WhatsappShareButton>
      <LinkedinShareButton
        style={{paddingRight: '15px'}}
        url={props.url}
        summary={props.description}
        className="Demo__some-network__share-button">
        <LinkedinIcon
          size={32}
          round />
      </LinkedinShareButton>
   
      </div>
}

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export const PostResults = (props : PostResultsProps) => 
{
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const RouterButton = withRouter(({ history }) => (
    <button
      type='button'
      style={{backgroundColor: 'green', width: '45%'}}
      onClick={(e) => { setData(props.movies); alert("Twoje odpowiedzi zostały przesłane na serwer ⛅");history.push('/') }}>
    {PL.YES}
    </button>
  ))

  return (
    <>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        <div style={{color:'black',textAlign: 'center'}}>{PL.SUCCESSFULLYCOMPLETED}</div>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
  <div style={{color:'black', textAlign: 'center'}}>{PL.THANKSFORHELP}</div>
          </Typography>
          <Typography gutterBottom>
  <div style={{color:'black', textAlign: 'center'}}>{PL.YOUARETRAININGAI}</div>
          </Typography>
       
      
          <Typography color="textPrimary" gutterBottom>
  <div style={{color:'black', padding: '15px', textAlign: 'center'}}>{PL.WANTUPLOAD}</div>
          <ButtonWrapper style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
          <RouterButton/>
          <div style={{paddingLeft:'8px', paddingRight:'8px'}}/>
          <button onClick={handleClose} color="primary" style={{backgroundColor: 'red', width: '45%'}}>
          {PL.NO}
          </button>
          </ButtonWrapper>
          </Typography>
        </DialogContent>
        <SocialMedia url="www.com" description={PL.INTRO1}/>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default PostResults;