import { SWIGGY_RESTAURANT_MENU_API } from "../constants";

export const fetchMenuAccordingData = async (restaurantID) => {
    try {
        const response = await fetch(`${SWIGGY_RESTAURANT_MENU_API}${restaurantID}`);
        // console.log(`${SWIGGY_RESTAURANT_MENU_API}${restaurantID}`);
        const data = await response.json();
        // console.log(data);

        // const rawRestaurantAccordinData = await data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
        const rawRestaurantAccordinData = await data?.data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards;
        // console.log("Data is : ", rawRestaurantAccordinData)

        const formattedRestaurantAccordInfo = (prefix) => {
            // let testCount = 0;
            let final = prefix.map((pre) => {
                if (!pre?.card?.card?.title || !pre?.card?.card?.itemCards) {
                    // console.log("This index not Available : ", i);
                    return;
                }

                let title = pre?.card?.card?.title;

                const items = pre.card?.card?.itemCards.map((itemCard, i) => {
                    // console.log(itemCard?.card?.info?.id)
                    // console.log(itemCard?.card?.info?.imageId)
                    if (!itemCard?.card?.info?.imageId || !itemCard?.card?.info?.price || !itemCard?.card?.info?.category) {                        
                        return;
                    }

                    // console.log(i, title);

                    // testCount++;
                    return (                        
                        {
                            // general_api: prefix[1]?.card?.card?.itemCards                            
                            id: itemCard?.card?.info?.id,
                            name: itemCard?.card?.info?.name,
                            category: itemCard?.card?.info?.category,
                            price: itemCard?.card?.info?.price,
                            imageId: itemCard?.card?.info?.imageId,
                            isVeg: itemCard?.card?.info?.isVeg,
                            rating: itemCard?.card?.info?.ratings?.aggregatedRating?.rating,
                            ratingCount: itemCard?.card?.info?.ratings?.aggregatedRating?.ratingCountV2,
                        }
                    
                    )
                }).filter(Boolean)

                return (items.length>0) ? {title, items} : null;

            }).filter(Boolean);

            // console.log(final);
            // console.log("FINALLY TOTAL COUNT EXIST : ", testCount);
            return final;
        }

        // console.log(formattedRestaurantAccordInfo(rawRestaurantAccordinData))

        return formattedRestaurantAccordInfo(rawRestaurantAccordinData)
        // return data;
    } catch (error) {
        console.error('Error fetching menu data:', error);
    }
}