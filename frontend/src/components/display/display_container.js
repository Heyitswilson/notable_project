import { connect } from 'react-redux';
import { getData } from '../../actions/data_actions';
import Display from './display';

const mSTP = state => ({
    data: state.entities.data
})

const mDTP = dispatch => ({
    getData: () => dispatch(getData())
})

export default connect(mSTP, mDTP)(Display);