const createUrl = (memeData) => {
    const { template_id, text0, text1 } = memeData;
    let coreUrl = `${process.env.IMGFLIP_URL}/caption_image?template_id=${template_id}&username=${process.env.IMGFLIP_USERNAME}&password=${process.env.IMGFLIP_PASSWORD}`;
    if (text0) {
        coreUrl += `&text0=${text0}`;
    }
    if (text1) {
        coreUrl += `&text1=${text1}`;
    }
    return coreUrl;
}

module.exports = createUrl;