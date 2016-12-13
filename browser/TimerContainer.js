import {connect} from 'react-redux';
import Timer from './Timer';

function mapStateToProps(state){
	return {
		interval: state.interval
	}
}
function mapDispatchToProps(dispatch){
	return {
	}

}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Timer); 