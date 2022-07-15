import React, { useEffect, useState } from 'react'
import Button from '../assets/components/Button.json'
import ReactMarkdown from 'react-markdown'

function PropsTable({ component }) {
    const [doc, setDoc] = useState(null)

    useEffect(() => {
        setDoc(Object.values(Button.props))
    }, [component])
    
    if (!doc) return <></>
    return (
        <div>
            {doc.displayName}
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        doc.map((docProp: any) => {
                            return (
                                <tr>
                                    <td>{docProp.name}</td>
                                    <td style={{ color: 'rgb(147, 41, 129)' }}>{docProp.type?.name}</td>
                                    <td>{docProp.defaultValue?.value}</td>
                                    <td><ReactMarkdown>{docProp.description}</ReactMarkdown></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default PropsTable