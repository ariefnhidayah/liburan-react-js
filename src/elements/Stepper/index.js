import React, { useState } from 'react'
import propTypes from 'prop-types'

export default function Stepper(props) {

    const { steps, initialStep } = props
    const stepsKeys = Object.keys(steps)

    const [ currentStep, setCurrentStep ] = useState(
        stepsKeys.indexOf(initialStep) > -1 ? initialStep : stepsKeys[0]
    );

    const totalStep = stepsKeys.length;
    const indexStep = stepsKeys.indexOf(currentStep)

    function prevStep() {
        if (+indexStep > 0) setCurrentStep(stepsKeys[indexStep - 1]);
    }

    function nextStep() {
        if (+indexStep < totalStep) setCurrentStep(stepsKeys[indexStep + 1]);
    }

    return (
        <>
            {props.children(prevStep, nextStep, currentStep, steps)}
        </>
    )
}

Stepper.propTypes = {
    steps: propTypes.object.isRequired,
    initialStep: propTypes.string
}

export { default as Numbering } from "./Numbering";
export { default as Meta } from "./Meta";
export { default as Controller } from "./Controller";
export { default as MainContent } from "./MainContent";