import React from "react";
import PropTypes from "prop-types";

const withDialogService = (Child) => (props) => {
  const isOpen = props.isOpen || false;
  const isMultiple = props.isMultiple || false
  const onCancel = () => {
    props.onCancel();
  };
  const onConfirm = () => {
    // call confirm callback
    props.onConfirm();
  };
  const onCloseAll = () => {
    props.onCloseAll();
  };

  return (
    <Child
      isOpen={isOpen}
      onCancel={onCancel}
      onConfirm={onConfirm}
      isMultiple={isMultiple}
      onCloseAll={onCloseAll}
    />
  );
};

withDialogService.propTypes = {
  open: PropTypes.bool,
  isMultiple: PropTypes.bool,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  onCloseAll:  PropTypes.func,
};

export default withDialogService;
