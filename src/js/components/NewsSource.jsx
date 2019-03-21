import React from 'react';
import { connect } from 'react-redux';
import { getSource } from '../actions/index';

let NewsSource = ({ sourceName, sourceID, onClick, active }) => (
<div onClick={onClick} className="news-item">
	<div className="source-button button" meta-source-id={sourceID}
		 style={{ backgroundColor: active === sourceID ? 'orange' :  'red'
	}}>
		<p>{sourceName}</p>
	</div>
</div>
)
const mapStateToProps = (state) => ({active: state.source})
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
     dispatch(getSource(ownProps.sourceID));
}
})
NewsSource = connect(mapStateToProps,mapDispatchToProps)(NewsSource)
export default NewsSource;