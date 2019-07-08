import { connect } from 'react-redux';
import { chooseEn, chooseRu, deselect } from "../redux/action";
import ChooseLanguage from './ChooseLanguage';

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    chooseEn: () => dispatch(chooseEn()),
    chooseRus: () => dispatch(chooseRu()),
    deselect: () => dispatch(deselect())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseLanguage);
