import React from 'react'
import Highlight, {defaultProps} from "prism-react-renderer";

import {
    Row,
    Portion,
    Card,
    InputField,
    HRule,
    Form,
    FormGroup,
    FormUnit,
    InputLabel,
} from '../../assets/fictoan/fictoan'


//  SAMPLE CODES  /////////////////////////////////////////////////////////////////////////////////////////////////////
const egColourScheme=
    `// Primary colour
$colorHue : $colorAmber; //#fcb83b
 
// Derived colours
$colorTint     : lighten($colorHue, 36%);
$colorShade    : darken($colorHue, 56%);
$colorAnalogue : complement($colorHue);
$colorAccent   : adjust-hue($colorHue, -216deg);
`;





//  LAYOUT  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
class PageInput extends React.PureComponent {
    componentDidMount() {
        window.scroll(0, 0)

        document.title = "FICTOAN — Colours"
    }

    render() {
        return (
            <div id="page-layout">
                <Row className="content-padding-large margin-top-small">
                    <Portion className="whole">
                        <h2 className="text-hue">Input</h2>
                    </Portion>
                </Row>

                <Row className="content-padding-large margin-top-small">
                    <Portion className="whole">
                        <Card className="padding-all-tiny shape-rounded shadow-soft">
                            <h6 className="margin-bottom-tiny">A sample form</h6>

                            <Form>
                                <FormGroup>
                                    <FormUnit>
                                        <InputField/>
                                        <InputLabel
                                            value="First name"
                                            helpText="As on your passport"/>
                                    </FormUnit>

                                    <FormUnit>
                                        <InputField/>
                                        <InputLabel
                                            value="Last name"
                                            helpText="As on your passport"/>
                                    </FormUnit>
                                </FormGroup>

                                <FormUnit>
                                    <InputField
                                        className="validate-this"
                                        type="email" />
                                    <InputLabel
                                        value="New email ID"
                                        helpText="Your work email"
                                        errorText="That’s not an email, bro."
                                    />
                                </FormUnit>

                                <FormUnit>
                                    <InputField
                                        type="email" value="name@company.com" readonly />
                                    <InputLabel
                                        value="Current email ID"
                                    />
                                </FormUnit>

                                <FormGroup>
                                    <FormUnit>
                                        <InputField/>
                                        <InputLabel value="Door no."/>
                                    </FormUnit>

                                    <FormUnit>
                                        <InputField/>
                                        <InputLabel value="Street"/>
                                    </FormUnit>

                                    <FormUnit>
                                        <InputField/>
                                        <InputLabel value="Locality"/>
                                    </FormUnit>
                                </FormGroup>

                                <FormGroup>
                                    <FormUnit>
                                        <InputField/>
                                        <InputLabel value="State"/>
                                    </FormUnit>

                                    <FormUnit>
                                        <InputField/>
                                        <InputLabel value="Country"/>
                                    </FormUnit>

                                    <FormUnit>
                                        <InputField/>
                                        <InputLabel value="ZIP"/>
                                    </FormUnit>
                                </FormGroup>

                            </Form>
                        </Card>
                    </Portion>
                </Row>


                <Row className="content-padding-large">
                    <Portion className="whole">
                        <pre className="full-width">
                            <Highlight {...defaultProps} code={egColourScheme} language="scss" theme={undefined}>
                                {({className, style, tokens, getLineProps, getTokenProps}) => (
                                    <code className={`margin-bottom-fixed ${className}`} style={style}>
                                        {tokens.map((line, i) => (
                                            <div {...getLineProps({line, key: i})}>
                                                {line.map((token, key) => (
                                                    <span {...getTokenProps({token, key})} />
                                                ))}
                                            </div>
                                        ))}
                                    </code>
                                )}
                            </Highlight>
                        </pre>
                    </Portion>
                </Row>
            </div>
        );
    }
}

export default PageInput
