import {connect} from 'react-redux';
import Homepage from './Homepage';
import { setInterval } from './actions';

function mapStateToProps(state){
	return {
	};
}
function mapDispatchToProps(dispatch){
	return {
		setTime: function(time){
			dispatch(setInterval(time));
		}
	};

}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Homepage);
