import { SWIGGY_RESTAURANT_MENU_API } from "../constants";
 
export const FetchMenuData = async (restaurantID) => {
    try {
        const response = await fetch(`${SWIGGY_RESTAURANT_MENU_API}${restaurantID}`);
        console.log(`${SWIGGY_RESTAURANT_MENU_API}${restaurantID}`);
        const data = await response.json();
        console.log(data);
        // console.log(json.data.cards[2].card.card.info);


        const rawRestaurantInfo = await data.data.cards[2].card.card.info;
        console.log(rawRestaurantInfo);

        const extractRestaurantInfo = (info) => {
            const restaurantInfo = {
                id: info.id,
                name: info.name,
                avgRating: info.avgRating,
                totalRatings: info.totalRatings,
                totalRatingsString: info.totalRatingsString,
                costForTwoMessage: info.costForTwoMessage,
                cuisines: info.cuisines,
                areaName: info.areaName,
                timing: info.sla.slaString,
                freeDeliveryAbove: info.feeDetails.message,
            }
            return restaurantInfo;
        }
        const restaurantInfo = extractRestaurantInfo(rawRestaurantInfo);
        return restaurantInfo

    } catch (error) {
        console.error(error)
    }
}