import { connect } from "react-redux";

// import data-module
import Language from "../../modules/Language";

// import container
import NavigationContainer from "./NavigationContainer";

const mapStateToProps = (state) => ({
  locale: Language.selectors.selectLocale(state)
});

const mapDispatchToProps = (dispatch) => ({
  changeLocale: (locale) => dispatch(Language.actions.changeLocale(locale))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationContainer);
