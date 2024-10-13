import React from 'react';
import './Project.css'; 

interface ProjectProps {
    imageSrc: string;
    imageAlt: string;
    hoverImageSrc: string;
    hoverImageAlt: string;
    title: string;
    description: string;
    imagePosition?: 'left' | 'right';
    backgroundColor?: string; 
    fontColor?: string; 
}

const Project: React.FC<ProjectProps> = ({
    hoverImageSrc,
    hoverImageAlt,
    title,
    description,
    imagePosition = 'left',
    backgroundColor = '#f5f5f5', 
    fontColor = '#000000' 
}) => {
    return (
        <div 
        className={`project ${imagePosition}`} 
        style={{ backgroundColor: backgroundColor, color: fontColor }}>
            <div className="project-image-wrapper">
                <div className="project-image">
                    <img src={hoverImageSrc} alt={hoverImageAlt} className="image-hover" />
                    <div className="overlay">
                        <h2>{title}</h2>
                    </div>
                </div>
            </div>
            <div className="project-description">
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Project;
