import PropTypes from 'prop-types';
import './styles.scss'

import H1 from './H1'
import H2 from './H2'
import H3 from './H3'

const H = ({ children, type }) => {
    
    const component = {
        'large' : <H1 children={children}/>,
        'medium' : <H2 children={children}/>,
        'small' : <H3 children={children}/>
    }

    return component[type] || component['large']
}

H.propTypes = {
    children: PropTypes.node,
    type : PropTypes.oneOf(['large', 'medium', 'small'])
}

H.defaultProps = {
    type: 'large'
};

export default H