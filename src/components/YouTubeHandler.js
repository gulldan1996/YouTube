import { connect } from 'react-redux';
import {} from "../redux/action";
import YouTube from './YouTube'

function mapStateToProps(state) {
  return {
    en: state.en,
    ru: state.ru,
    choose: state.choose
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(YouTube);
