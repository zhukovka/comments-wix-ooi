import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import styleDesk from './styleDesk.scss';

class RadioButtons extends React.Component {
    constructor(props) {
        super(props);
        //this.myStyle = style.locals != null ? style.locals : style;
        this.myStyle = props.isMobile ? style : styleDesk;
        this.state = {
            selected: props.defaultValue
        };
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.name = Math.random().toString(36).substring(7);
    }


    handleOptionChange(event) {
        let value = event.target.value;
        if(event.target.tagName==="LABEL" || event.target.tagName==="DIV"){
            value = event.target.id;
        }
        this.setState({
            selected: value
        });
        this.props.onChange(value);
    }

    render() {
        let {options,isMobile} = this.props;
        let self = this;
        return (<div id={"reportModal"} role={"menu"} aria-labelledby={"report"} tabIndex={-1}>
            {

                options.map(function (option, index) {
                    return (<div id={option.value} onClick={self.handleOptionChange} aria-label={"radio "+option.label} tabIndex={0} role={"menuitem"} key={index} className={self.myStyle["option"] +(isMobile ? ' report_content_text':' report_content_text_desktop')}>
                            <input type="radio" name={"radio group"} value={option.value}
                                   checked={self.state.selected == option.value} onChange={self.handleOptionChange}/>
                                                      <label id={option.value} onClick={self.handleOptionChange}>{option.label}</label>
                    </div>
                    );
                })
            }
        </div>);
    }
}

RadioButtons.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        label: PropTypes.string.isRequired
    })).isRequired,
    onChange: PropTypes.func.isRequired,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
export default RadioButtons;
