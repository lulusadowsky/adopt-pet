import React from 'react';

export function Link ({ label, to, setRoute, className }) {
  function clickHandler (e) {
    e.preventDefault();
    setRoute(to);
  }

  return (
    <a className={className} href="#" onClick={clickHandler}>{label}</a>
  );
}

export function Router ({ current, fallback, children }) {
  let element, _default;

  React.Children.forEach(children, (child) => {
    if (child.props.path === current && React.isValidElement(child)) {
      element = child;
    }
    if (child.props.path === fallback && React.isValidElement(child)) {
      _default = child;
    }
  });

  const content = element ? React.cloneElement(element) : React.cloneElement(_default);

  return (
    <>
      {content}
    </>
  );
}

export function Route ({ path, children }) {
  return (
  <>
    {children}
  </>
  );
}
