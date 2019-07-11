import { connect } from 'react-redux';
import { langChanged, searchStorage, changedLangState } from "../redux/action";
import ChooseLanguage from './ChooseLanguage';

function mapStateToProps(state) {
  return {
    lang: state.lang,
    en: state.en,
    ru: state.ru
  };
}

function mapDispatchToProps(dispatch) {
  return {
    langChanged: (lang) => dispatch(langChanged(lang)),
    searchStorage: (storage) => dispatch(searchStorage(storage)),
    changedLangState: () => dispatch(changedLangState())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseLanguage);
