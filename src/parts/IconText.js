import React from 'react'

import Button from "../elements/Button";

export default function IconText(props) {

    return (
        <Button className={["brand-text-icon", props.className].join(" ")} href="" type="link">
            Libur<span className="text-gray-900">AN.</span>
        </Button>
    )
}
