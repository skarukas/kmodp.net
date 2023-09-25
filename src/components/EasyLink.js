import { Link } from 'react-router-dom';

export default function EasyLink({to, title, children, ...args}) {
  if (to == null) {
    return children
  } else if (to.startsWith("/")) {
    return (<Link to={to} {...args}>{children}</Link>)
  } else {
    return (<a href={to}  {...args} target="_blank" rel="noreferrer" title={title}>{children}</a>)
  }
}