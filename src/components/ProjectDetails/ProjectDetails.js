import React from 'react'
import { useParams } from 'react-router-dom'

const ProjectDetails = () => {
    const { projectId } = useParams()
    return (
        <div>
            <h2>ProjectDetail: {projectId}</h2>
        </div>
    )
}

export default ProjectDetails