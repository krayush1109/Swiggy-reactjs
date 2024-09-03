import { useEffect, useState } from 'react';
import { fetchMenuAccordingData } from '../utils/helpers/fetchMenuAccordingData';
import { SWIGGY_BASE_IMG_LINK } from '../utils/constants';

const AccordionItem = ({ title, contents }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    console.log(title, contents)

    return (
        <div className="border-b">
            <button
                className="w-full flex justify-between items-center p-4 focus:outline-none"
                onClick={toggleAccordion}
            >
                <span className="text-lg font-medium ">{title} ({contents.length}) </span>
                <i
                    className={`ri-arrow-down-s-line transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                ></i>
            </button>
            <div className={`${isOpen ? 'block' : 'hidden'} p-4 `}>

                {contents?.map((content, i) => (
                    <div key={i}>
                        <section className="flex my-10 px-12 mb-10 justify-between">
                            <div id='lhs-accordion' className='pr-12 space-y-2'>
                                <div>
                                    <h1 className='font-bold text-lg text-slate-800'>{content.name}</h1>
                                    <p className='font-bold  '>₹ { content.price }</p>
                                </div>

                                <h3 className='text-emerald-500 text-sm font-bold'> <i className='ri-star-fill'></i>{content.rating || '0'}<span className='text-slate-400'> ({content.ratingCount || '0'})</span> </h3>

                         
                            </div>
                            <div id='rhs-accordion' className='relative basis-[10rem] shrink-0 '>
                                <div className='rounded-xl'>
                                    <img src={`${SWIGGY_BASE_IMG_LINK}/${content.imageId}`} className='w-full h-full bg-cover bg-center rounded-xl shadow-md' alt="NA" />
                                </div>
                                <button className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white hover:bg-slate-100 w-4/5 shadow-lg font-extrabold py-2 text-emerald-500 rounded-xl ' > ADD </button>
                            </div>
                        </section>
                        <hr />
                    </div>
                ))}


            </div>
        </div>
    );
};

const RestaurantMenuAccordin = ({ restaurantID }) => {
    const [titleFetched, settitleFetched] = useState('');
    const [contentFetched, setContentFetched] = useState([]);

    useEffect(() => {
        (async() => {
            // const r = await fetchMenuAccordingData(101059)
            const r = await fetchMenuAccordingData(restaurantID)
            settitleFetched(r.title);
            setContentFetched(r.items);
            console.log('r : ', r);            
        })()
    }, [])

    const accordionData = [
        {
            title: `${titleFetched}`,
            contents: contentFetched,
        },
        // {
        //     title: 'Accordion Item #2',
        //     contents: 'This is the content of the second accordion item.',
        // },
        // {
        //     title: 'Accordion Item #3',
        //     contents: 'This is the content of the third accordion item.',
        // },
    ];

    return (
        <div className="w-full  mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            {accordionData.map((item, index) => (
                <AccordionItem key={index} title={item.title} contents={item?.contents} indexToOpen={0} />
            ))}
        </div>
    );
};

export default RestaurantMenuAccordin;
