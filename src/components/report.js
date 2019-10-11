import React from "react";
import PropTypes from "prop-types";
import style from "./style/report.scss";
import styleDesk from "./style/reportDesk.scss";
import classNames from "classnames";
import Options from './options';
import CloseIcon from "../svgs/close-icon";
import Button from "./button";

class Report extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.handleReportAction = this.handleReportAction.bind(this);
        //this.myStyle = style.locals != null ? style.locals : style;
        this.myStyle = props.isMobile ? style : styleDesk;
        this.state = {
            selectedOption: null,
        };
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.isReportError){
            this.props.exit();
        }
    }

    onChange(val) {
        this.setState({selectedOption: val});
    }

    handleReportAction() {
        let {selectedOption} = this.state;
        if (selectedOption == null) return;
        this.props.confirmAction(selectedOption);
    }

    render() {
        let {labels: {title, optionsTitle, cancel, confirm, done, responseTitle, responseMessage}, exit, reportOptions, isRequestSuccess ,isMobile} = this.props;
        let sectionTitle = isRequestSuccess ? responseTitle : title;
        return (
            <div className={!isRequestSuccess ? this.myStyle['container']:(this.myStyle['container']+" "+this.myStyle['requestSuccess'])} id="popup-wrapper" tabIndex="-1" role="dialog">
                <CloseIcon onClick={exit} ariaLabel={cancel} isMobile={isMobile}/>
                <div id={"reportTitle"} className={classNames('page-title', this.myStyle['mainTitle'],(isMobile ? 'report_main_title':'report_main_title_desktop'))}>
                    <span role="title" aria-label={title} tabIndex="0" ref={(x) => {
                        this.mainLabel = x;
                    }}>{sectionTitle}</span>
                </div>
                {isRequestSuccess ?
                    <section>
                        <div className={classNames(this.myStyle['messageContainer'], 'sub-title',(isMobile ? 'report_content_text' : 'report_content_text_desktop'))}>
                            <label className="label"
                                   aria-label={responseMessage}>{responseMessage}</label>
                        </div>
                        <div className={this.myStyle['actionContainer']}>
                            <Button onClick={exit} label={done} styleType={!isMobile ? (this.myStyle["doneButton"]+ ' primary') : 'primary'}/>
                        </div>
                    </section> :

                    <section>
                        <div className={classNames('sub-title')}>
                            <Options
                                     isMobile={isMobile}
                                     options={reportOptions}
                                     onChange={this.onChange} title={optionsTitle}/>
                        </div>

                        <div className={this.myStyle['actionContainer']}>
                            {
                                isMobile ?
                                    <div id={"reportButtons"}>
                                        <Button onClick={this.handleReportAction} label={confirm} styleType='primary' onKeyDown={this.onKeyDown} isDisabled={this.state.selectedOption === null}/>
                                        <Button onClick={exit} label={cancel} styleType='secondary' buttonStyle={this.myStyle['cancelButton']}/>
                                    </div> :

                                    <div id={"reportButtons"}>
                                        <Button onClick={exit} label={cancel} styleType='secondary' buttonStyle={this.myStyle['cancelButton']}/>
                                        <Button onClick={this.handleReportAction} label={confirm} styleType='primary' onKeyDown={this.onKeyDown} isDisabled={this.state.selectedOption === null}/>
                                    </div>
                            }

                        </div>
                    </section>
                }
            </div>
        );
    }
}

Report.propTypes = {
    exit: PropTypes.func,
    confirmAction: PropTypes.func.isRequired,
    isMobile: PropTypes.bool.isRequired,
    reportOptions: PropTypes.array.isRequired,
    labels: PropTypes.shape({
        title: PropTypes.string.isRequired,
        optionsTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
        cancel: PropTypes.string.isRequired,
        confirm: PropTypes.string.isRequired,
        done: PropTypes.string.isRequired,
        responseTitle: PropTypes.string.isRequired,
        responseMessage: PropTypes.string.isRequired
    })
};
export default Report;
