import * as React from 'react';

export const renderInput = props => {
  const { input, meta, placeholder, type, className, parentClass } = props;
  return (
    <div className={parentClass}>
      <input {...input} placeholder={placeholder} type={type} className={className} />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
};
