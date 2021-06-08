import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useImmerReducer } from "use-immer";
import { CSSTransition } from "react-transition-group";
// Component(s)
import StateContext from "./StateContext.jsx";
import DispatchContext from "./DispatchContext.jsx";
// import Landing from "./LandingV1/Landing.jsx";
import Loading from "./Loading/Loading.jsx";
import Header from "./Header/Header.jsx";
import Welcome from "./Welcome/Welcome.jsx";
import ShapeDivider from "./ShapeDivider/ShapeDivider.jsx";
import About from "./Sections/About/About.jsx";
import Experience from "./Sections/Experience/Experience.jsx";
import Contact from "./Sections/Contact/Contact.jsx";
// Style(s)
import "../index.scss";

function App() {
  const initialState = {
    refreshCount: 0,
    isLoading: true,
    sections: {
      "about": About,
      "experience": Experience,
      "contact": Contact
    },
    header: {
      animate: false,
      isVisible: true
    },
    scroll: {
      prevHeight: 0
    },
    animateOnEnter: false
  };

  const appReducer = (draft, action) => {
    const value = action.value;
    switch (action.type) {
      case "refresh":
        draft.refreshCount++;
        break;
      case "isLoading":
        draft.isLoading = value;
        break;
      case "toggleEntranceAnimations":
        draft.animateOnEnter = true;
        break;
      case "isHeaderVisible":
        draft.header.isVisible = value;
        break;
      case "setScrollHeight":
        draft.scroll.prevHeight = value;
        break;
    }
  };

  const [state, dispatch] = useImmerReducer(appReducer, initialState);

  useEffect(() => {
    function handleReload() {
      dispatch({ type: "refresh" });
      if (!state.isLoading) dispatch({ type: "isLoading", value: true });
    }

    window.addEventListener("beforeunload", handleReload);
    return () => {
      window.removeEventListener("beforeunload", handleReload);
    };
  }, []);

  useEffect(() => {
    let loadingTimeout = setTimeout(() => {
      dispatch({ type: "isLoading", value: false });
    }, 3000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, [state.refreshCount]);

  useEffect(() => {
    if (!state.isLoading) {
      dispatch({ type: "toggleEntranceAnimations" });
    }
  }, [state.isLoading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, state.scroll.prevHeight]);

  function handleScroll() {
    let scrollHeight = window.pageYOffset;
    if (scrollHeight > 200) {
      if (scrollHeight > state.scroll.prevHeight) {
        dispatch({ type: "isHeaderVisible", value: true });
      } else {
        dispatch({ type: "isHeaderVisible", value: false });
      }
    }
    
    dispatch({ type: "setScrollHeight", value: scrollHeight });
    // hide nav bar if we scroll past Y (i.e. 20 page offset) 
    // show nav bar if we're at the top of the page (i.e. > 20) and if we're scrolling up
  }

  const sectionComponents = Object.keys(state.sections).map((section, i) => {
    const ComponentName = state.sections[section];
    return <ComponentName key={i} sectionId={section} />
  });

  const bottomShapeDividers = new Array(3)
    .fill(null)
    .map((divider, i) => {
      return (
        <CSSTransition key={i} timeout={750} in={state.animateOnEnter} classNames="animate-shape-divider">
          <ShapeDivider key={i} layerNumber={i + 1} />
        </CSSTransition>
      );
    });

  if (state.isLoading) return <Loading />;

  return (
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <Router>
            <CSSTransition unmountOnExit timeout={750} in={!state.header.isVisible} classNames="animate-header">
              <Header />   
            </CSSTransition>
            { bottomShapeDividers }
            <Switch>
              <Route exact path="/" component={Welcome} />        
              {/* <Route path="*">
                <NotFound />
              </Route> */}
              <Route render={() => <Redirect to="/" />} />

            </Switch> 
            { sectionComponents }
          </Router>
        </DispatchContext.Provider>
      </StateContext.Provider>
  );
}

export default App;