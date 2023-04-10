import React from 'react'

function ButtonAcrMap() {
    return (
        <>
            <div id="buttonComponent">
                <div role="button" aria-label="Grocery stores" class="esri-widget--button esri-widget esri-interactive" title="Grocery stores">
                    <img
                        src="https://developers.arcgis.com/documentation//images/demos/grocery-store.png"
                        alt="Grocery" />
                </div>
                <div role="button" aria-label="Restaurant" class="esri-widget--button esri-widget esri-interactive" title="Restaurant">
                    <img
                        src="https://developers.arcgis.com/documentation//images/demos/restaurant.png"
                        alt="Food" />
                </div>
                <div role="button" aria-label="Gas stations" class="esri-widget--button esri-widget esri-interactive" title="Gas stations">
                    <img
                        src="https://developers.arcgis.com/documentation//images/demos/gas-station.png"
                        alt="Gas station" />
                </div>
                <div role="button" aria-label="Hotels" class="esri-widget--button esri-widget esri-interactive" title="Hotels">
                    <img
                        src="https://developers.arcgis.com/documentation//images/demos/hotel.png"
                        alt="Hotel" />
                </div>
            </div>
        </>
    )
}

export default ButtonAcrMap