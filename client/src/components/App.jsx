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
import About from "./Sections/About/About.jsx";
import Experience from "./Sections/Experience/Experience.jsx";
import Contact from "./Sections/Contact/Contact.jsx";
// Style(s)
import "../index.scss";

function App() {
  const initialState = {
    isLoading: true,
    animateOnEnter: false,
    sections: {
      "about": About,
      "experience": Experience,
      "contact": Contact
    },
    header: {
      transitioning: false,
      isVisible: !window.location.hash,
      isMenuOpen: false
    },
    scroll: {
      prevHeight: 0
    }
  };

  const appReducer = (draft, action) => {
    const value = action.value;
    switch (action.type) {
      case "loading":
        draft.isLoading = value;
        break;
      case "toggleEntranceAnimations":
        draft.animateOnEnter = true;
        break;
      case "toggleHeaderVisibility":
        draft.header.isVisible = value;
        break;
      case "toggleHeaderTransition":
        draft.header.transitioning = value;
        break;
      case "setScrollHeight":
        draft.scroll.prevHeight = value;
        break;
      case "toggleNavigationMenu":
        draft.header.isMenuOpen = value;
        break;
    }
  };

  const [state, dispatch] = useImmerReducer(appReducer, initialState);

  useEffect(() => {
    let loadingTimeout = setTimeout(() => {
      dispatch({ type: "loading", value: false });
      // scroll to current hash path (router isn't doing this because components aren't loaded yet)
      if (window.location.hash) {
        const id = window.location.hash.replace("#", "");
        const component = document.getElementById(id);
        component.scrollIntoView();
      }
    }, 5000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  useEffect(() => {
    if (!state.isLoading) dispatch({ type: "toggleEntranceAnimations" });
  }, [state.isLoading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, state.scroll.prevHeight]);

  function handleScroll() {
    let scrollHeight = window.pageYOffset;
    if (scrollHeight > 200 && !state.header.transitioning) {
      if (scrollHeight < state.scroll.prevHeight) {
        dispatch({ type: "toggleHeaderVisibility", value: true });
      } else {
        dispatch({ type: "toggleHeaderVisibility", value: false });
      }
      dispatch({ type: "toggleHeaderTransition", value: true });
      setTimeout(() => {
        dispatch({ type: "toggleHeaderTransition", value: false });
      }, 300);
    } 
    dispatch({ type: "setScrollHeight", value: scrollHeight });
  }

  const sectionComponents = Object.keys(state.sections).map((section, i) => {
    const ComponentName = state.sections[section];
    return <ComponentName key={i} sectionId={section} />
  });

  if (state.isLoading) return <Loading animate={state.isLoading}/>;

  return (
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <Router>
            <CSSTransition unmountOnExit timeout={500} in={state.header.isVisible} classNames="animate-header">
              <Header />
            </CSSTransition>

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