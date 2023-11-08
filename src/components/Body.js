import { useState } from "react";
import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
let resdata = [
  {
    info: {
      id: "160087",
      name: "Varalakshmi Tiffins",
      cloudinaryImageId: "8523266de1213e8ea57e5df4eedf747e",
      locality: "Opposite Gate No 2",
      areaName: "Gachibowli",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian"],
      avgRating: 4.0,
      veg: true,
      feeDetails: {
        restaurantId: "160087",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2800,
      },
      parentId: "6482",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 13,
        lastMileTravel: 0.1,
        serviceability: "SERVICEABLE",
        slaString: "13 mins",
        lastMileTravelString: "0.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-06 12:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-1b616536-dbb3-4070-83fc-c235be113345",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/varalakshmi-tiffins-opposite-gate-no-2-gachibowli-hyderabad-160087",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "1383",
      name: "Udipi's Upahar",
      cloudinaryImageId: "f717d33a827f36c0521a58feacbcdcaa",
      locality: "Anjaiah Nagar",
      areaName: "Gachibowli",
      costForTwo: "₹250 for two",
      cuisines: ["South Indian", "North Indian", "Chinese", "Beverages"],
      avgRating: 4.4,
      veg: true,
      feeDetails: {
        restaurantId: "1383",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2800,
      },
      parentId: "1061",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 15,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "15 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-11-06 13:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹500",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-1b616536-dbb3-4070-83fc-c235be113345",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/udipis-upahar-anjaiah-nagar-gachibowli-hyderabad-1383",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];
const Body = () => {
    const [listofRestaurants,setListofRestaurants] = useState(resList)
  return (
    <>
      <div className="body">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
                const filteredlist =resdata.filter((res) => res.info.avgRating > 4) 
                setListofRestaurants(filteredlist);
              console.log(filteredlist)
            }}
          >
            Filter
          </button>
        </div>
        <div className="res-container">
          {listofRestaurants?.map((res) => (
            <RestaurantCard key={res.info.id} resData={res} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
