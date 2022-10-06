const downloadCurriculum = () => {
    let url = '../../assets/curriculo-lucas-santana.pdf'
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'curriculo-lucas-santana.pdf';

    document.body.appendChild(anchor);

    anchor.click();

    document.body.removeChild(anchor);
}

export default downloadCurriculum;