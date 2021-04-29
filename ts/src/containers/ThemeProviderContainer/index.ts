import { connect } from "react-redux";

// import data-module
import Theme from "../../modules/Theme";

// import container
import ThemeProviderContainer from "./ThemeProviderContainer";

const mapStateToProps = (state: any) => ({
  currentTheme: Theme.selectors.selectCurrentTheme(state)
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeProviderContainer);
