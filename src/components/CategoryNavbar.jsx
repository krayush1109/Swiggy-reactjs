/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { CATEGORIES_LIST } from '../utils/constants';
import { extractRating } from '../utils/helpers/extractRating';
// import RestaurantMockList from '../utils/RestaurantMockList.json'

const CategoryNavbar = (props) => {
    const { setRenderResList, RestaurantList } = props.data;
    const [activeCat, setActiveCat] = useState(CATEGORIES_LIST[0]);

    const filterRestaurantsByCategory = () => {
        switch (activeCat) {
            case CATEGORIES_LIST[0]: {
                return RestaurantList;                
            }
            case CATEGORIES_LIST[1]: {
                const constRating = extractRating(CATEGORIES_LIST[1]);
                const filteredList = RestaurantList.filter((r) => r.rating > constRating);
                return filteredList;
            }
            case CATEGORIES_LIST[2]: {
                const filteredList = RestaurantList.filter((r) => r.deliveryTime < 30);
                return filteredList;
            }
            default: {
                console.error("Category doesn't Match! \nCurrent Active Category is : ", activeCat);
                return [-1];
            }
        }
    }

    useEffect(() => {
        setRenderResList(filterRestaurantsByCategory());
    }, [activeCat])

    return (
        <>
            <div className="my-16 flex justify-center space-x-2 ">
                <div className='flex'>
                    {CATEGORIES_LIST.map((categorie) => {
                        // console.log(categorie);
                        // console.log(activeCat);
                        return (
                            <li key={categorie} onClick={() => setActiveCat(categorie)} className={`category-subNav ${categorie == activeCat ? "cat-subNav-active" : ""} `} >{categorie}</li>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default CategoryNavbar