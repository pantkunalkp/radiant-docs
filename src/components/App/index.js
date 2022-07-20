import React from 'react';
import { CssVarsProvider } from '@intugine-technologies/radiant/styles'

export default function App(props) {
    return (
        <React.Fragment>
            <CssVarsProvider>
                {props.children}
            </CssVarsProvider>
        </React.Fragment>
    )
}