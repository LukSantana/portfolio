interface downloadCurriculumProps {
    url: string
    fileName: string
}

const downloadCurriculum = ({ url, fileName }: downloadCurriculumProps) => {
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = fileName;

    document.body.appendChild(anchor);

    anchor.click();

    document.body.removeChild(anchor);
}

export default downloadCurriculum;