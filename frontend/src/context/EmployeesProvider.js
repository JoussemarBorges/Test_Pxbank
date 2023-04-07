import PropTypes from 'prop-types';
import { useMemo } from 'react';
import AppContext from './Context';

export default function EmployeeProvider({ children }) {
  const context = useMemo(() => ({

  }), []);

  return (
    <AppContext.Provider value={ context }>
      {children}
    </AppContext.Provider>
  );
}

EmployeeProvider.prototype = {
  children: PropTypes.node.isRequired,
}