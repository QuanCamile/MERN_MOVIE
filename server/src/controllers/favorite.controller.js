import responseHandler from "../handlers/response.handler.js";
import favoriteModel from "../models/favorite.model.js";

//Thêm mới yêu thích - favorite
const addFavorite = async (req, res) => {
    try{
        const isFavorite = await favoriteModel.findOne({
            user: req.user.id,
            mediaId: req.body.mediaId
        });

        if(isFavorite) return responseHandler.ok(res, isFavorite);
        
        const favorite = new favoriteModel({
            ...req.body,
            user: req.user.id
        });

        await favorite.save();

        responseHandler.created(res, favorite);
    }catch{
        responseHandler.error(res);
    }
};

//Xóa yêu thích 
const removeFavorite = async (req, res) => {
    try {
        const { favoriteId } = req.body;
        
        const favorite = await favoriteModel.findOne({
            user: req.user.id,
            _id: favoriteId
        });

        if(!favorite) return responseHandler.notfound(res);

        await favorite.remove();

        responseHandler.ok(res);
    } catch{
        responseHandler.error(res);
    }
};

//Lấy danh sách yêu thích của user
const getFavoritesOfUser = async (req, res) => {
    try {
        const favorite = await favoriteModel.find({ user: req.user.id}).sort("-createdAt");

        responseHandler.ok(res, favorite);
    } catch {
        responseHandler.error(res);
    }
};

export default {
    addFavorite,
    removeFavorite,
    getFavoritesOfUser
};