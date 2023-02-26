import responseHandler from "../handlers/response.handler.js";
import tmdbApi from "../tmdb/tmdb.api.js";

//Chi tiết person
const personDetail = async (req, res) => {
    try {
        const { personId } = req.params;

        const person = await tmdbApi.personDetail({ personId });

        responseHandler.ok(res, person);
    } catch {
        responseHandler.error(res);
    }
};

//
const personMedias = async (req, res) => {
    try {
        const { mediaId } = req.params;

        const medias = await tmdbApi.personMedias({ mediaId });

        responseHandler.ok(res, mediaId);
    } catch{
        responseHandler.error(res);
    }
};

export default { personDetail, personMedias };