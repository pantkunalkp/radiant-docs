import React, { useEffect, useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown'

function PropsTableRoot({ name }) {
    const [doc, setDoc] = useState(null)

    useEffect(() => {
        import(`../assets/components/${name}.json`)
            .then(component => setDoc(
                Object.values(component.props)
                    .filter(
                        (props: any) => !props.parent?.fileName.includes("node_modules/@types/react/index.d.ts")
                    )
            ))
    }, [name])

    if (!doc) return <></>
    return (
        <div>
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
                                    <td style={{ color: 'rgb(147, 41, 129)', maxWidth: '250px' }}>{docProp.type?.name}</td>
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

const PropsTable = ({ name }) => {
    return useMemo(() => <PropsTableRoot name={name} />, [name])
}

export default PropsTable