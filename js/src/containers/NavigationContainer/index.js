import { connect } from "react-redux";

// import data-module
import Language from "../../modules/Language";
import Theme from "../../modules/Theme";

// import container
import NavigationContainer from "./NavigationContainer";

const mapStateToProps = (state) => ({
  locale: Language.selectors.selectLocale(state),
  currentTheme: Theme.selectors.selectCurrentTheme(state)
});

const mapDispatchToProps = (dispatch) => ({
  changeLocale: (locale) => dispatch(Language.actions.changeLocale(locale)),
  changeTheme: (theme) => dispatch(Theme.actions.changeTheme(theme))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationContainer);
