import { connect } from "react-redux";

// import data-module
import Language from "../../modules/Language";

// import container
import LanguageProviderContainer from "./LanguageProviderContainer";

const mapStateToProps = (state) => ({
  locale: Language.selectors.selectLocale(state)
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageProviderContainer);
