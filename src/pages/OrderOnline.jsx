import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
// import RestaurantMockList from '../utils/RestaurantMockList.json'
import { FRENCH_FRIES, SWIGGY_API_LINK, ZIG_ZAG_IMG } from "../utils/constants";
import RestaurantCardShimmer from "../components/RestaurantCardShimmer";
import CategoryNavbar from "../components/CategoryNavbar";
import { formatFetchedList } from "../utils/helpers/formatFetchedList";

const OrderOnline = () => {
    const [renderResList, setRenderResList] = useState([]);
    const [RestaurantList, setRestaurantList] = useState([]);
    const [searchTxt, setSearchTxt] = useState("");

    const fetchApi = async () => {
        try {
            const response = await fetch(SWIGGY_API_LINK);
            const json = await response.json();
            const listfetched = await json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
            const formattedList = await formatFetchedList(listfetched)
            setRestaurantList(formattedList)
            setRenderResList(formattedList)
        } catch (error) {
            console.error("Failed to fetch restaurants:", error);
        }
    }

    const handleSearch = (e) => {
        const txt = e.target.value;
        setSearchTxt(txt);

        const filterSearch = RestaurantList.filter((r) => (r.restaurantName.toLowerCase()).includes(txt.toLowerCase()));
        setRenderResList(filterSearch)
    }

    const clearSearch = () => {
        setSearchTxt("")
        setRenderResList(RestaurantList)
    }

    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <>
            <div className="text-center flex justify-around items-center pt-10 " >
                <div className="flex-1" ></div>
                <div className="flex-shrink-0" >
                    <img className="mx-auto" src={FRENCH_FRIES} alt="" />
                    <h1 className='text-4xl my-6 font-[KaushanFont]'>Our Special Deals</h1>
                    <img className="mx-auto" src={ZIG_ZAG_IMG} alt="" />
                </div>
                <div className=" flex-1 flex justify-center">
                    <div className="relative w-48">
                        <i className="ri-search-line absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                        <input type="search" value={searchTxt} onChange={(e) => handleSearch(e)} placeholder="Search..." className="pl-8 pr-2 py-1 border-b-2 rounded-md border-lime-300 outline-none text-lg w-full" />
                    </div>
                </div>
            </div>

            {/* #### CATEGORY NAVBAR #### */}
            <CategoryNavbar data={{ renderResList, setRenderResList, RestaurantList }} />

            <div className="restaurant-container flex gap-8 justify-center flex-wrap" >
                {renderResList.length === 0 ? (
                    searchTxt ? (
                        <div className="flex flex-col items-center py-8">
                            <p className="text-red-500 text-3xl mt-4 py-4">No results found for "{searchTxt}".</p>
                            <button
                                onClick={() => clearSearch()}
                                className="ml-2 px-4 font-semibold py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Clear Search Input
                            </button>
                        </div>
                    ) : (
                        <RestaurantCardShimmer />
                    )
                ) : (
                    renderResList.map((data) => (
                        <RestaurantCard key={data.id} data={data} />
                    ))
                )}
            </div>
        </>
    );
};

export default OrderOnline;
