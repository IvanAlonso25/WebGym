import { EVENTS } from "../js/consts";
import PropTypes from 'prop-types';

Link.propTypes = {
    target: PropTypes.string,
    to: PropTypes.string.isRequired,
    props: PropTypes.object
}

export function navigate(href) {
    window.history.pushState({}, '', href)
    const navigationEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigationEvent)
  }

export function Link({ target, to, ...props }) {
    const handleClick = (event) => {
        event.preventDefault()

        const isMainClick = event.button === 0
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        const isManageableEvent = target === undefined || target === '_self'


        if (!isMainClick || isModifiedEvent || !isManageableEvent) {
            navigate(to) // navegacion con spa
        }
    }
    return <a onClick={handleClick} href={to} target={target} {...props} />
}

