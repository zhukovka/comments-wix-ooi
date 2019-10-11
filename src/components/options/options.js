import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import styleDesk from './styleDesk.scss';
import RadioButtons from './radioButtons';
import classNames from "classnames";

class Options extends React.Component {
    constructor(props) {
        super(props);
        //this.myStyle = style.locals != null ? style.locals : style;
        this.myStyle = props.isMobile ? style : styleDesk;
    }

    render() {
        let {options, title, onChange,isMobile} = this.props;
        return (<div className={this.myStyle["options-container"]}>
            <label className={classNames(this.myStyle['optionsTitle'],(isMobile ? 'report_content_text':'report_content_text_desktop'))}
                   aria-label={title}>{title}</label>
            <RadioButtons
                          isMobile={this.props.isMobile}
                          className={'sub-title'}
                          options={options}
                          onChange={onChange}/>
        </div>);
    }
}

Options.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        label: PropTypes.string.isRequired
    })).isRequired,
    title: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
    onChange: PropTypes.func.isRequired,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
export default Options;
