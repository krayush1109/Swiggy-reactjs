import { SWIGGY_RESTAURANT_MENU_API } from "../constants";

export const fetchMenuAccordingData = async (restaurantID) => {
    try {
        const response = await fetch(`${SWIGGY_RESTAURANT_MENU_API}${restaurantID}`);
        console.log(`${SWIGGY_RESTAURANT_MENU_API}${restaurantID}`);
        const data = await response.json();
        console.log(data);

        // const rawRestaurantAccordinData = await data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
        const rawRestaurantAccordinData = await data?.data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards;
        console.log("Data is : ", rawRestaurantAccordinData)

        const formattedRestaurantAccordInfo = (prefix) => {
            const indexOfRecommended = prefix.findIndex(pre => pre?.card?.card?.title === "Recommended");
            console.log("index : ", indexOfRecommended)

            if (indexOfRecommended >= 0) {
                const title = prefix[indexOfRecommended]?.card?.card?.title;
                const items = prefix[indexOfRecommended]?.card?.card?.itemCards?.map((itemCard) => {
                    const price = itemCard?.card?.info?.price;
                    if (!price || isNaN(price)) {
                        return null;
                    }
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
                }).filter(Boolean);
                return { title, items }
            } else {
                console.log("Alternate Menu Displayed ! No recommended items found");
                
                const title = prefix[2]?.card?.card?.title;
                // Access itemCards based on the available structure
                const itemCards = prefix[2]?.card?.card?.categories?.[0]?.itemCards || prefix[2]?.card?.card?.itemCards;

                // Ensure itemCards is an array before calling map
                const items = Array.isArray(itemCards) ? itemCards.map((itemCard) => {
                    return {                        
                        id: itemCard?.card?.info?.id,
                        name: itemCard?.card?.info?.name,
                        category: itemCard?.card?.info?.category,                        
                        price: itemCard?.card?.info?.price,
                        imageId: itemCard?.card?.info?.imageId,
                        isVeg: itemCard?.card?.info?.isVeg,
                        rating: itemCard?.card?.info?.ratings?.aggregatedRating?.rating,
                        ratingCount: itemCard?.card?.info?.ratings?.aggregatedRating?.ratingCountV2
                    };
                }) : [];

                return { title, items }

            }
        }


        console.log(formattedRestaurantAccordInfo(rawRestaurantAccordinData))

        return formattedRestaurantAccordInfo(rawRestaurantAccordinData)
        // return data;
    } catch (error) {
        console.error('Error fetching menu data:', error);
    }
}