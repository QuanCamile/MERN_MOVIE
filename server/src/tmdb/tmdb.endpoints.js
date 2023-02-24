import tmdbConfig from "./tmdb.config.js";

const tmdbEndpoints = {
    mediaList: ({ mediaType, mediaCategory, page}) => tmdbConfig.getUrl(
        `${mediaType}/${mediaCategory}`, page
    ),
    mediaDetail: ({ mediaType, mediaID}) => tmdbConfig.getUrl(
        `${mediaType}/${mediaID}`
    ),
    mediaGenres: ({ mediaType}) => tmdbConfig.getUrl(
        `genre/${mediaType}/list`
    ),
    mediaCredits: ({ mediaType, mediaID}) => tmdbConfig.getUrl(
        `${mediaType}/${mediaID}/credits`
    ),
    mediaVideos: ({ mediaType, mediaId}) => tmdbConfig.getUrl(
        `${mediaType}/${mediaId}/videos`
    ),
    mediaRecommend: ({ mediaType, mediaId}) => tmdbConfig.getUrl(
        `${mediaType}/${mediaId}/recommendations`
    ),
    mediaImages: ({ mediaType, mediaId}) => tmdbConfig.getUrl(
        `${mediaType}/${mediaId}/images`
    ),
    mediaSearch: ({ mediaType, query, page}) => tmdbConfig.getUrl(
        `search/${mediaType}`, { query, page }
    ),
    personDetail: ({ personId}) => tmdbConfig.getUrl(
        `person/${personId}`
    ),
    personMedias: ({ personId}) => tmdbConfig.getUrl(
        `person/${personId}/combined_credits`
    ),
};

export default tmdbEndpoints;