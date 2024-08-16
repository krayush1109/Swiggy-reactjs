import { SWIGGY_BASE_IMG_LINK } from "../constants";

export const formatFetchedList = (list) => {
    return list.map((item) => ({
        id: item.info.id,
        image: SWIGGY_BASE_IMG_LINK + item.info.cloudinaryImageId,
        restaurantName: item.info.name,
        rating: item.info.avgRating,
        description: item.info.locality,
        cuisines: item.info.cuisines,
        deliveryTime: item.info.sla.deliveryTime,
        price: item.info.costForTwo.match(/\d+/)[0]
    }));
}