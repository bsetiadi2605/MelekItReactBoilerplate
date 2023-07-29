import PropTypes from 'prop-types';
import './styles.scss'

const TextView = () => {
    return(
        <>
            <div>Halo aku adalah textview</div>
        </>
    )
}

TextView.propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
    onClick: PropTypes.func,
}

TextView.defaultProps = {
    children: 'Ini Adalah Link',
    href: 'https://google.com',
    onClick: null
};

export default TextView