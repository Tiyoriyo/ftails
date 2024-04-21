import React from 'react';
import PropTypes from 'prop-types';

function ContactBtn({
  popupStateChanger,
}) {
  return (

    <button
      type="button"
      className="absolute right-12 bottom-12"
      onClick={() => { popupStateChanger('contactDetails'); }}
    >
      <img src="./contactus.png" className="w-[250px] hover:animate-growhover" alt="Contact Us Button" />
    </button>

  );
}

ContactBtn.propTypes = {
  popupStateChanger: PropTypes.func,
};

ContactBtn.defaultProps = {
  popupStateChanger: undefined,
};

export default ContactBtn;
