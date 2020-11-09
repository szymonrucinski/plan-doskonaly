import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
  PinterestShareButton,
  TumblrShareButton,
  TwitterShareButton,
  VKShareButton,
  WhatsappShareButton,
  FacebookIcon,
  EmailIcon,
  FacebookMessengerIcon
} from "react-share";
import { MovieFrame } from '../Logic/MovieFrame';
import { withRouter } from 'react-router-dom';

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

  return <div style={{paddingLeft: '10px', paddingTop: '20px'}}>
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
        title={props.description}
        className="Demo__some-network__share-button">
        <FacebookIcon
          size={32}
          round />
      </FacebookShareButton>
      <EmailShareButton
        style={{paddingRight: '15px'}}
        url={props.url}
        title={props.description}
        className="Demo__some-network__share-button">
        <EmailIcon
          size={32}
          round />
      </EmailShareButton>
      <FacebookShareButton
        style={{paddingRight: '15px'}}
        url={props.url}
        title={props.description}
        className="Demo__some-network__share-button">
        <FacebookMessengerIcon
          size={32}
          round />
      </FacebookShareButton>
   
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
      style={{backgroundColor: 'green'}}
      onClick={(e) => { setData(props.movies); alert("Twoje odpowiedzi zostały przesłane na serwer ⛅");history.push('/') }}>
    TAK
    </button>
  ))

  return (
    <>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        <div style={{color:'black'}}>Doskonale Ukończyłeś Quiz!✅ </div>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          <div style={{color:'black'}}>Bardzo Ci dziękuję za pomoc!</div>
          </Typography>
          <Typography gutterBottom>
          <div style={{color:'black'}}>Grając w mój Quiz pomagasz trenować model sztucznej inteligencji na serwerze. Mam nadzieję, że wszystkie odpowiedzi zaznaczyłeś prawidłowo😊</div>
          </Typography>
       
      
          <Typography color="textPrimary" gutterBottom>
          <div style={{color:'black'}}>Czy chcesz przesłać swoje odpowiedzi?</div>
          <ButtonWrapper userClicked={false} correct={true}>
          <RouterButton></RouterButton>
          
          <button onClick={handleClose} color="primary" style={{backgroundColor: 'red'}}>
            NIE
          </button>
          </ButtonWrapper>
          </Typography>
        </DialogContent>
        <SocialMedia url="www.com" description="AI classifier"/>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default PostResults;