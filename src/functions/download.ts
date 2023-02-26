const downloadCurriculum = (url:string, fileName:string) => {
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = fileName;

    document.body.appendChild(anchor);

    anchor.click();

    document.body.removeChild(anchor);
}

export default downloadCurriculum;