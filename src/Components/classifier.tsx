import React from "react";

import { ImageComponent } from "./Image";
import { PL } from "../Locales/pl";
import {
  ButtonWrapper,
  Wrapper,
  Divider,
  ForwardButton,
  BackwardButton,
  ClassifierButton,
} from "../StyledComponents/Classifier.styles";
import { GlobalStyle } from "../StyledComponents/Reusable.styles";
import { AnswersWrapper } from "../StyledComponents/Answers.styles";
import { SHOT_TYPES } from "../Logic/MovieFrame";
import { PostResults } from "./PostResults";
import { observer } from "mobx-react";
import { ClassifierController } from "../Logic/ClassifierController";
import { getData } from "../Logic/API";
import { AesthethicH1 } from "../StyledComponents/Main.styles";
import {
  faImage,
  faRunning,
  faHome,
  faLaughWink,
  faGem,
  faStreetView,
  faForward,
  faBackward,
  faQuestionCircle,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ParticlesBg from "particles-bg";
import { LoadingScreen } from "../Components/LoadingScreen";

const correctColor: string = "rgba(0, 235, 137, 0.527)";
export const Classifier = observer(() => {
  const [appState, setAppState] = React.useState(new ClassifierController());
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      await getData().then((res) => {
        appState.setMovies(res);
        setLoading(false);
      });
    };
    fetchData();
  }, [appState]);

  const handleShotReview = (shotType: string) => {
    appState.movies[appState.count]?.setShotType(shotType);
  };

  const WantPostResults = () => {
    return (
      <>
        {appState.count === appState?.movies?.length - 1 &&
        appState.getUnreviewedShots().length === 0 ? (
          <PostResults movies={appState?.getReviewedShots()} />
        ) : null}
      </>
    );
  };
  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Wrapper>
          <GlobalStyle overflowHidden={false} backgroundColor={"#141516"} animated={false} />
          <ParticlesBg color="#b4b3b4" num={((window.innerWidth < 800) ? 50 : 100)} type="cobweb" bg={true} />
          <AesthethicH1>
            {appState.movies[appState?.count]?.movieTitle}

          </AesthethicH1>
          <WantPostResults />
          <ImageComponent
            link={appState.movies[appState.count]?.getFrameUrl()}
          />
          <div style={{ paddingTop: "10px" }}>
            <BackwardButton
              onClick={(e) => {
                appState.decCount();
              }}
              disabled={appState.getBackwardDisabled()}
            >
              <FontAwesomeIcon icon={faBackward} />
            </BackwardButton>
            <Divider>
              {appState.count + 1}/{appState.movies?.length}
            </Divider>
            <ForwardButton
              onClick={(e) => appState.incCount()}
              disabled={appState.getForwardDisabled()}
            >
              <FontAwesomeIcon icon={faForward} />
            </ForwardButton>
            <a href="/learn" target="_blank">
            <FontAwesomeIcon style={{justifyContent:'right'}} icon={faQuestionCircle} />
            </a>
          </div>
          <AnswersWrapper>
            <ButtonWrapper>
              <ClassifierButton
                onClick={() => handleShotReview(SHOT_TYPES.EXTREMELONGSHOT)}
                style={
                  appState.movies[appState.count]?.shotType ===
                  SHOT_TYPES.EXTREMELONGSHOT
                    ? { backgroundColor: correctColor }
                    : { backgroundColor: "transparent" }
                }
              >
                {PL.EXTREMELONGSHOT} <FontAwesomeIcon icon={faImage} />
              </ClassifierButton>
              <ClassifierButton
                onClick={() => handleShotReview(SHOT_TYPES.LONGSHOT)}
                style={
                  appState.movies[appState.count]?.shotType ===
                  SHOT_TYPES.LONGSHOT
                    ? { backgroundColor: correctColor }
                    : { backgroundColor: "transparent" }
                }
              >
                {PL.LONGSHOT}
                <FontAwesomeIcon icon={faHome} />
              </ClassifierButton>
            </ButtonWrapper>

            <ButtonWrapper>
              <ClassifierButton
                onClick={() => handleShotReview(SHOT_TYPES.FULLSHOT)}
                style={
                  appState.movies[appState.count]?.shotType ===
                  SHOT_TYPES.FULLSHOT
                    ? { backgroundColor: correctColor }
                    : { backgroundColor: "transparent" }
                }
              >
                {PL.FULLSHOT}
                <FontAwesomeIcon icon={faRunning} />
              </ClassifierButton>

              <ClassifierButton
                onClick={() => handleShotReview(SHOT_TYPES.MEDIUMSHOT)}
                style={
                  appState.movies[appState.count]?.shotType ===
                  SHOT_TYPES.MEDIUMSHOT
                    ? { backgroundColor: correctColor }
                    : { backgroundColor: "transparent" }
                }
              >
                {PL.MEDIUMSHOT}
                <FontAwesomeIcon icon={faStreetView} />
              </ClassifierButton>
            </ButtonWrapper>
            <ButtonWrapper>
            <ClassifierButton
              onClick={() => handleShotReview(SHOT_TYPES.MEDIUMCLOSEUP)}
              style={
                appState.movies[appState.count]?.shotType ===
                SHOT_TYPES.MEDIUMCLOSEUP
                  ? { backgroundColor: correctColor }
                  : { backgroundColor: "transparent" }
              }
            >
              {PL.MEDIUMCLOSEUP}
              <FontAwesomeIcon style={{ paddingLeft: "5px" }} icon={faStreetView} />
            </ClassifierButton>
            <ClassifierButton
              onClick={() => handleShotReview(SHOT_TYPES.CLOSEUP)}
              style={
                appState.movies[appState.count]?.shotType === SHOT_TYPES.CLOSEUP
                  ? { backgroundColor: correctColor }
                  : { backgroundColor: "transparent" }
              }
            >
              {PL.CLOSEUP}
              <FontAwesomeIcon icon={faLaughWink} />
            </ClassifierButton>
            </ButtonWrapper>
            <ButtonWrapper>
            <ClassifierButton
              onClick={() => handleShotReview(SHOT_TYPES.DETAIL)}
              style={
                appState.movies[appState.count]?.shotType ===
                SHOT_TYPES.DETAIL
                  ? { backgroundColor: correctColor }
                  : { backgroundColor: "transparent" }
              }
            >
              {PL.MACRODETAIL}
              <FontAwesomeIcon style={{ paddingLeft: "5px" }} icon={faGem} />
            </ClassifierButton>
            <ClassifierButton
              onClick={() => handleShotReview(SHOT_TYPES.AMBIGUOUS)}
              style={
                appState.movies[appState.count]?.shotType ===
                SHOT_TYPES.AMBIGUOUS
                  ? { backgroundColor: correctColor }
                  : { backgroundColor: "transparent" }
              }
            >
              {PL.AMBIGUOUS}
              <FontAwesomeIcon style={{ paddingLeft: "5px" }} icon={faExclamationCircle} />
              </ClassifierButton>
            </ButtonWrapper>
          </AnswersWrapper>
        </Wrapper>
      )}
    </>
  );
});
