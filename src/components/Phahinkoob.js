import React, { useEffect } from "react";
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import esriConfig from "@arcgis/core/config";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js";
import Graphic from "@arcgis/core/Graphic.js";
import Search from "@arcgis/core/widgets/Search.js";
import Expand from "@arcgis/core/widgets/Expand.js";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle.js";
import * as locator from "@arcgis/core/rest/locator.js";

import '../styles/Arcgis.css'

const Phahinkoob = () => {
    useEffect(() => {
        const delay = setInterval(() => {
            const container = document.getElementById("viewDiv")

            if (container) {
                esriConfig.apiKey = "AAPK134c5351fc5e4615aa16c34e5de2698ecyDZWo6r0zZmC13nbz3Qn84fMhNOP6NICpqh-zFMZfJ3K2vM7Z_EHCeHRWLsxz58";
                const maxPlaces = 25;

                let lastUid = 0;
                let highlight;
                let category = "Grocery";
                // let automate = true;
                const geocodingServiceUrl = "https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer";
                const graphicsLayer = new GraphicsLayer();

                const map = new Map({
                    basemap: "arcgis-topographic" // Basemap layer service
                });

                const view = new MapView({
                    map: map,
                    center: [102.19873352395211,12.88905549178924], // Longitude, latitude
                    zoom: 14, // Zoom level
                    container: "viewDiv" // Div element
                });
                view.popup.actions = [];
                map.add(graphicsLayer);


                const point = { //Create a point
                    type: "point",
                    longitude: 102.19873352395211,
                    latitude: 12.88905549178924
                };
                const simpleMarkerSymbol = {
                    type: "simple-marker",
                    color: [226, 119, 40],  // Orange
                    outline: {
                        color: [255, 255, 255], // White
                        width: 1
                    }
                };

                const pointGraphic = new Graphic({
                    geometry: point,
                    symbol: simpleMarkerSymbol
                });




                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                const search = new Search({
                    view: view,
                    popupEnabled: false,
                    resultGraphicEnabled: false,
                });


                view.ui.add(new Expand({
                    view: view.center,
                    content: search,
                    expanded: true,
                    mode: "floating"
                }), "top-right");
                try { view.ui.add("buttonComponent", "top-right"); }
                catch (e) {

                }

                /*format map*/
                const basemapToggle = new BasemapToggle({
                    view: view,
                    nextBasemap: "arcgis-imagery-standard",
                });
                view.ui.add(basemapToggle, "bottom-right");
                /*show pop up*/


                const btnComponent = document.getElementById("buttonComponent")
                if (btnComponent) {
                    btnComponent.addEventListener("click", (event) => {
                        category = event.target.attributes.alt.value;
                        findPlaces(view.center);
                    });

                }



                // Start suggestions
                view.when(() => {
                    search.watch("activeSource", (source) => {
                        source.url = geocodingServiceUrl;  // Use geocoding service
                    });
                });
                // Reverse geocode and find places
                view.on("click", (event) => {
                    view.hitTest(event).then((response) => {
                        const graphic = getPlacesGraphic(response);
                        if (!graphic) {
                            search.clear();
                            view.popup.clear();
                            reverseGeocode(event.mapPoint);
                            findPlaces(event.mapPoint);
                        }
                    });
                });

                // Highlight and show pop-up
                view.on("pointer-move", (event) => {
                    view
                        .hitTest(event, { include: graphicsLayer.graphics })
                        .then(function (response) {
                            const graphic = getPlacesGraphic(response);
                            if (graphic && graphic.uid !== lastUid) {
                                showHighlight(graphic);
                                lastUid = graphic.uid;
                            }
                        });
                })

                view.popup.watch("visible", (visible) => {
                    if (!visible) {
                        showHighlight(null);
                    }
                });

                let getPlacesGraphic = (response) => {
                    let graphic;
                    if (
                        response.results.length &&
                        response.results[0].graphic.layer === graphicsLayer
                    ) {
                        graphic = response.results[0].graphic;
                    }
                    return graphic;
                }

                // Show clicked addresss in search
                let reverseGeocode = (pt) => {
                    const params = {
                        location: pt,
                    };
                    locator.locationToAddress(geocodingServiceUrl, params).then(
                        function (response) {
                            // Show the address found
                            if (response) {
                                search.searchTerm = response.attributes.LongLabel;
                            }
                        },
                        function (err) {
                            showPopup("No address found.", "", pt);
                        }
                    );
                }
                graphicsLayer.add(pointGraphic);

                let findPlaces = (pt) => {
                    if (!pt) {
                        return;
                    }
                    locator
                        .addressToLocations(geocodingServiceUrl, {
                            location: pt,
                            categories: [category],
                            maxLocations: maxPlaces,
                            outFields: ["Place_addr", "PlaceName"],
                        })
                        .then(function (results) {
                            view.popup.close();
                            graphicsLayer.graphics.removeAll();
                            results.forEach(function (result) {
                                graphicsLayer.add(pointGraphic);
                                graphicsLayer.graphics.add(
                                    new Graphic({
                                        attributes: result.attributes,
                                        geometry: result.location,
                                        symbol: {
                                            type: "web-style",
                                            name: getIconName(category),
                                            styleName: "Esri2DPointSymbolsStyle",
                                        },
                                        popupTemplate: {
                                            title: "{PlaceName}",
                                            content:
                                                "{Place_addr}" +
                                                "<br><br>" +
                                                result.location.longitude.toFixed(5) +
                                                "," +
                                                result.location.latitude.toFixed(5),
                                        },
                                    })
                                );
                            });
                        });
                }



                //////////////////////////////////////////////////
                let showPopup = (title, content, point) => {
                    content =
                        content +
                        "<br><br>" +
                        point.longitude.toFixed(5) +
                        ", " +
                        point.latitude.toFixed(5);
                    view.popup.open({
                        title: title,
                        content: content,
                        location: point,
                    });
                }

                let showHighlight = (graphic) => {
                    if (highlight) {
                        highlight.remove();
                    }
                    if (graphic) {
                        view.whenLayerView(graphic.layer).then((layerView) => {
                            highlight = layerView.highlight(graphic);
                        });
                    }
                }

                let getIconName = (category) => {
                    let iconName;
                    switch (category) {
                        case "Grocery":
                            iconName = "grocery-store";
                            break;
                        case "Food":
                            iconName = "restaurant";
                            break;
                        case "Gas station":
                            iconName = "gas-station";
                            break;
                        case "Hotel":
                            iconName = "hotel";
                            break;
                    }
                    return iconName;
                }
                clearInterval(delay)
            }

        }, 100)
    })


    return (
        <body_AcrMap>
            <div id="viewDiv"></div>
        </body_AcrMap>

    )
};

export default Phahinkoob;