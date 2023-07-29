import PropTypes from 'prop-types';
import './styles.scss'

const A = ({ children, href, onClick }) => {

    const handleClick = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        onClick()
    };

    let aComponent = <a href={href}>{children}</a>

    if(onClick) aComponent = <a href="#" onClick={handleClick}>{children}</a>

    return (
        <>
            {aComponent}
        </>
    )
}

A.propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
    onClick: PropTypes.func
}

A.defaultProps = {
    children: 'Children tag A berisi text atau component',
    href: 'https://google.com',
    onClick: null
};

export default A