var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            //'type': 'base',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_rf_data_1 = new ol.format.GeoJSON();
var features_rf_data_1 = format_rf_data_1.readFeatures(json_rf_data_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rf_data_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rf_data_1.addFeatures(features_rf_data_1);
var lyr_rf_data_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rf_data_1, 
                style: style_rf_data_1,
                popuplayertitle: "rf_data",
                interactive: true,
                title: '<img src="styles/legend/rf_data_1.png" /> rf_data'
            });
var format_Ownship_2 = new ol.format.GeoJSON();
var features_Ownship_2 = format_Ownship_2.readFeatures(json_Ownship_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ownship_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ownship_2.addFeatures(features_Ownship_2);
var lyr_Ownship_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ownship_2, 
                style: style_Ownship_2,
                popuplayertitle: "Ownship",
                interactive: true,
                title: '<img src="styles/legend/Ownship_2.png" /> Ownship'
            });
var format_ESM_EMITER_MPAC_3 = new ol.format.GeoJSON();
var features_ESM_EMITER_MPAC_3 = format_ESM_EMITER_MPAC_3.readFeatures(json_ESM_EMITER_MPAC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESM_EMITER_MPAC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESM_EMITER_MPAC_3.addFeatures(features_ESM_EMITER_MPAC_3);
var lyr_ESM_EMITER_MPAC_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESM_EMITER_MPAC_3, 
                style: style_ESM_EMITER_MPAC_3,
                popuplayertitle: "ESM_EMITER_MPAC",
                interactive: true,
                title: '<img src="styles/legend/ESM_EMITER_MPAC_3.png" /> ESM_EMITER_MPAC'
            });
var format_PirateAttacks20002022Dataworld_4 = new ol.format.GeoJSON();
var features_PirateAttacks20002022Dataworld_4 = format_PirateAttacks20002022Dataworld_4.readFeatures(json_PirateAttacks20002022Dataworld_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PirateAttacks20002022Dataworld_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PirateAttacks20002022Dataworld_4.addFeatures(features_PirateAttacks20002022Dataworld_4);
var lyr_PirateAttacks20002022Dataworld_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PirateAttacks20002022Dataworld_4, 
                style: style_PirateAttacks20002022Dataworld_4,
                popuplayertitle: "Pirate Attacks 2000-2022 - Data.world",
                interactive: true,
    title: 'Pirate Attacks 2000-2022 - Data.world<br />\
    <img src="styles/legend/PirateAttacks20002022Dataworld_4_0.png" /> Actual Violence Against Crew<br />\
    <img src="styles/legend/PirateAttacks20002022Dataworld_4_1.png" /> No Consequences or Not Stated<br />\
    <img src="styles/legend/PirateAttacks20002022Dataworld_4_2.png" /> Not Reported<br />\
    <img src="styles/legend/PirateAttacks20002022Dataworld_4_3.png" /> Ship Hijacked<br />\
    <img src="styles/legend/PirateAttacks20002022Dataworld_4_4.png" /> Ship Missing<br />\
    <img src="styles/legend/PirateAttacks20002022Dataworld_4_5.png" /> Threat of Violence Against Crew<br />\
    <img src="styles/legend/PirateAttacks20002022Dataworld_4_6.png" /> <br />'
        });
var format_VesselDetectionReportvakeai_5 = new ol.format.GeoJSON();
var features_VesselDetectionReportvakeai_5 = format_VesselDetectionReportvakeai_5.readFeatures(json_VesselDetectionReportvakeai_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VesselDetectionReportvakeai_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VesselDetectionReportvakeai_5.addFeatures(features_VesselDetectionReportvakeai_5);
var lyr_VesselDetectionReportvakeai_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VesselDetectionReportvakeai_5, 
                style: style_VesselDetectionReportvakeai_5,
                popuplayertitle: "Vessel Detection Report - vake.ai",
                interactive: true,
    title: 'Vessel Detection Report - vake.ai<br />\
    <img src="styles/legend/VesselDetectionReportvakeai_5_0.png" /> Dark_Vessel<br />\
    <img src="styles/legend/VesselDetectionReportvakeai_5_1.png" /> Matched<br />\
    <img src="styles/legend/VesselDetectionReportvakeai_5_2.png" /> Undetected<br />\
    <img src="styles/legend/VesselDetectionReportvakeai_5_3.png" /> <br />'
        });
var format_KSLPRIDERoutePathSearoutes_6 = new ol.format.GeoJSON();
var features_KSLPRIDERoutePathSearoutes_6 = format_KSLPRIDERoutePathSearoutes_6.readFeatures(json_KSLPRIDERoutePathSearoutes_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KSLPRIDERoutePathSearoutes_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KSLPRIDERoutePathSearoutes_6.addFeatures(features_KSLPRIDERoutePathSearoutes_6);
var lyr_KSLPRIDERoutePathSearoutes_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KSLPRIDERoutePathSearoutes_6, 
                style: style_KSLPRIDERoutePathSearoutes_6,
                popuplayertitle: "KSL PRIDE Route Path - Searoutes",
                interactive: true,
    title: 'KSL PRIDE Route Path - Searoutes<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_0.png" /> 1<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_1.png" /> 2<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_2.png" /> 3<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_3.png" /> 4<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_4.png" /> 5<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_5.png" /> 6<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_6.png" /> 7<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_7.png" /> 8<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_8.png" /> 9<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_9.png" /> 10<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_10.png" /> 11<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_11.png" /> 12<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_12.png" /> 13<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_13.png" /> 14<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_14.png" /> 15<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_15.png" /> 16<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_16.png" /> 17<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_17.png" /> 18<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_18.png" /> 19<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_19.png" /> 20<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_20.png" /> 21<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_21.png" /> 22<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_22.png" /> 23<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_23.png" /> 24<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_24.png" /> 25<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_25.png" /> 26<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_26.png" /> 27<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_27.png" /> 28<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_28.png" /> 29<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_29.png" /> 30<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_30.png" /> 31<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_31.png" /> 32<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_32.png" /> 33<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_33.png" /> 34<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_34.png" /> 35<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_35.png" /> 36<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_36.png" /> 37<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_37.png" /> 39<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_38.png" /> 40<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_39.png" /> 41<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_40.png" /> 42<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_41.png" /> 43<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_42.png" /> 44<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_43.png" /> 45<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_44.png" /> 46<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_45.png" /> 47<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_46.png" /> 48<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_47.png" /> 49<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_48.png" /> 50<br />\
    <img src="styles/legend/KSLPRIDERoutePathSearoutes_6_49.png" /> <br />'
        });
var format_AISMarineTrafficSouthIndianOcean_7 = new ol.format.GeoJSON();
var features_AISMarineTrafficSouthIndianOcean_7 = format_AISMarineTrafficSouthIndianOcean_7.readFeatures(json_AISMarineTrafficSouthIndianOcean_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AISMarineTrafficSouthIndianOcean_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AISMarineTrafficSouthIndianOcean_7.addFeatures(features_AISMarineTrafficSouthIndianOcean_7);
var lyr_AISMarineTrafficSouthIndianOcean_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AISMarineTrafficSouthIndianOcean_7, 
                style: style_AISMarineTrafficSouthIndianOcean_7,
                popuplayertitle: "AIS - Marine Traffic - South Indian Ocean",
                interactive: true,
                title: '<img src="styles/legend/AISMarineTrafficSouthIndianOcean_7.png" /> AIS - Marine Traffic - South Indian Ocean'
            });
var format_PortsNaturalEarthData_8 = new ol.format.GeoJSON();
var features_PortsNaturalEarthData_8 = format_PortsNaturalEarthData_8.readFeatures(json_PortsNaturalEarthData_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PortsNaturalEarthData_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PortsNaturalEarthData_8.addFeatures(features_PortsNaturalEarthData_8);
var lyr_PortsNaturalEarthData_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PortsNaturalEarthData_8, 
                style: style_PortsNaturalEarthData_8,
                popuplayertitle: "Ports- Natural Earth Data",
                interactive: true,
                title: '<img src="styles/legend/PortsNaturalEarthData_8.png" /> Ports- Natural Earth Data'
            });
var format_Earthquakesusgsgov_9 = new ol.format.GeoJSON();
var features_Earthquakesusgsgov_9 = format_Earthquakesusgsgov_9.readFeatures(json_Earthquakesusgsgov_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Earthquakesusgsgov_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Earthquakesusgsgov_9.addFeatures(features_Earthquakesusgsgov_9);
var lyr_Earthquakesusgsgov_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Earthquakesusgsgov_9, 
                style: style_Earthquakesusgsgov_9,
                popuplayertitle: "Earthquakes - usgs.gov",
                interactive: true,
                title: '<img src="styles/legend/Earthquakesusgsgov_9.png" /> Earthquakes - usgs.gov'
            });
var format_NoticestoMariners_10 = new ol.format.GeoJSON();
var features_NoticestoMariners_10 = format_NoticestoMariners_10.readFeatures(json_NoticestoMariners_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NoticestoMariners_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NoticestoMariners_10.addFeatures(features_NoticestoMariners_10);
var lyr_NoticestoMariners_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NoticestoMariners_10, 
                style: style_NoticestoMariners_10,
                popuplayertitle: "Notices to Mariners",
                interactive: true,
    title: 'Notices to Mariners<br />\
    <img src="styles/legend/NoticestoMariners_10_0.png" />  FIRE<br />\
    <img src="styles/legend/NoticestoMariners_10_1.png" />  FIRING PRACTICE<br />\
    <img src="styles/legend/NoticestoMariners_10_2.png" /> <br />'
        });
var format_GEORSS26Aug24GoogleNews_11 = new ol.format.GeoJSON();
var features_GEORSS26Aug24GoogleNews_11 = format_GEORSS26Aug24GoogleNews_11.readFeatures(json_GEORSS26Aug24GoogleNews_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEORSS26Aug24GoogleNews_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEORSS26Aug24GoogleNews_11.addFeatures(features_GEORSS26Aug24GoogleNews_11);
var lyr_GEORSS26Aug24GoogleNews_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEORSS26Aug24GoogleNews_11, 
                style: style_GEORSS26Aug24GoogleNews_11,
                popuplayertitle: "GEO RSS 26Aug24 - Google News",
                interactive: true,
                title: '<img src="styles/legend/GEORSS26Aug24GoogleNews_11.png" /> GEO RSS 26Aug24 - Google News'
            });
var format_FlightDataOpenskyNetwork_12 = new ol.format.GeoJSON();
var features_FlightDataOpenskyNetwork_12 = format_FlightDataOpenskyNetwork_12.readFeatures(json_FlightDataOpenskyNetwork_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FlightDataOpenskyNetwork_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FlightDataOpenskyNetwork_12.addFeatures(features_FlightDataOpenskyNetwork_12);
var lyr_FlightDataOpenskyNetwork_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FlightDataOpenskyNetwork_12, 
                style: style_FlightDataOpenskyNetwork_12,
                popuplayertitle: "Flight Data - Opensky Network",
                interactive: true,
                title: '<img src="styles/legend/FlightDataOpenskyNetwork_12.png" /> Flight Data - Opensky Network'
            });
var lyr_VizaqPortSatelliteImage_13 = new ol.layer.Image({
                            opacity: 1,
                            title: "Vizaq Port Satellite Image",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/VizaqPortSatelliteImage_13.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9269695.937100, 2000851.278000, 9272767.937100, 2002899.278000]
                            })
                        });
var format_MilitaryGrid_100_0_14 = new ol.format.GeoJSON();
var features_MilitaryGrid_100_0_14 = format_MilitaryGrid_100_0_14.readFeatures(json_MilitaryGrid_100_0_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MilitaryGrid_100_0_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MilitaryGrid_100_0_14.addFeatures(features_MilitaryGrid_100_0_14);
var lyr_MilitaryGrid_100_0_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MilitaryGrid_100_0_14, 
                style: style_MilitaryGrid_100_0_14,
                popuplayertitle: "MilitaryGrid_100_0",
                interactive: true,
                title: '<img src="styles/legend/MilitaryGrid_100_0_14.png" /> MilitaryGrid_100_0'
            });
var format_MilitaryGrid_15 = new ol.format.GeoJSON();
var features_MilitaryGrid_15 = format_MilitaryGrid_15.readFeatures(json_MilitaryGrid_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MilitaryGrid_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MilitaryGrid_15.addFeatures(features_MilitaryGrid_15);
var lyr_MilitaryGrid_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MilitaryGrid_15, 
                style: style_MilitaryGrid_15,
                popuplayertitle: "MilitaryGrid",
                interactive: true,
                title: '<img src="styles/legend/MilitaryGrid_15.png" /> MilitaryGrid'
            });
var format_EEZBoundariesv8MarineRegions_16 = new ol.format.GeoJSON();
var features_EEZBoundariesv8MarineRegions_16 = format_EEZBoundariesv8MarineRegions_16.readFeatures(json_EEZBoundariesv8MarineRegions_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EEZBoundariesv8MarineRegions_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EEZBoundariesv8MarineRegions_16.addFeatures(features_EEZBoundariesv8MarineRegions_16);
var lyr_EEZBoundariesv8MarineRegions_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EEZBoundariesv8MarineRegions_16, 
                style: style_EEZBoundariesv8MarineRegions_16,
                popuplayertitle: "EEZ Boundaries v8 Marine Regions",
                interactive: true,
                title: '<img src="styles/legend/EEZBoundariesv8MarineRegions_16.png" /> EEZ Boundaries v8 Marine Regions'
            });
var group_METOFFICEGLOSSTL4NRTOBSSSTV2_1724506919079 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "METOFFICE-GLO-SST-L4-NRT-OBS-SST-V2_1724506919079"});

lyr_GoogleRoad_0.setVisible(true);lyr_rf_data_1.setVisible(true);lyr_Ownship_2.setVisible(true);lyr_ESM_EMITER_MPAC_3.setVisible(true);lyr_PirateAttacks20002022Dataworld_4.setVisible(true);lyr_VesselDetectionReportvakeai_5.setVisible(true);lyr_KSLPRIDERoutePathSearoutes_6.setVisible(true);lyr_AISMarineTrafficSouthIndianOcean_7.setVisible(true);lyr_PortsNaturalEarthData_8.setVisible(true);lyr_Earthquakesusgsgov_9.setVisible(true);lyr_NoticestoMariners_10.setVisible(true);lyr_GEORSS26Aug24GoogleNews_11.setVisible(true);lyr_FlightDataOpenskyNetwork_12.setVisible(true);lyr_VizaqPortSatelliteImage_13.setVisible(true);lyr_MilitaryGrid_100_0_14.setVisible(true);lyr_MilitaryGrid_15.setVisible(true);lyr_EEZBoundariesv8MarineRegions_16.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_rf_data_1,lyr_Ownship_2,lyr_ESM_EMITER_MPAC_3,lyr_PirateAttacks20002022Dataworld_4,lyr_VesselDetectionReportvakeai_5,lyr_KSLPRIDERoutePathSearoutes_6,lyr_AISMarineTrafficSouthIndianOcean_7,lyr_PortsNaturalEarthData_8,lyr_Earthquakesusgsgov_9,lyr_NoticestoMariners_10,lyr_GEORSS26Aug24GoogleNews_11,lyr_FlightDataOpenskyNetwork_12,lyr_VizaqPortSatelliteImage_13,lyr_MilitaryGrid_100_0_14,lyr_MilitaryGrid_15,lyr_EEZBoundariesv8MarineRegions_16];
lyr_rf_data_1.set('fieldAliases', {'Timestamp': 'Timestamp', 'Frequency': 'Frequency', 'Signal Strength': 'Signal Strength', 'Modulation': 'Modulation', 'Bandwidth': 'Bandwidth', 'Location': 'Location', 'lat': 'lat', 'lon': 'lon', 'Device Type': 'Device Type', 'Antenna Type': 'Antenna Type', 'Temperature': 'Temperature', 'Humidity': 'Humidity', 'Wind Speed': 'Wind Speed', 'Precipitation': 'Precipitation', 'Weather Condition': 'Weather Condition', 'Interference Type': 'Interference Type', 'Battery Level': 'Battery Level', 'Power Source': 'Power Source', 'CPU Usage': 'CPU Usage', 'Memory Usage': 'Memory Usage', 'WiFi Strength': 'WiFi Strength', 'Disk Usage': 'Disk Usage', 'System Load': 'System Load', 'Altitude(m)': 'Altitude(m)', 'Air Pressure': 'Air Pressure', 'Device Status': 'Device Status', 'I/Q Data': 'I/Q Data', });
lyr_Ownship_2.set('fieldAliases', {'imo': 'imo', 'Msg Date YYYYMMDD': 'Msg Date YYYYMMDD', 'Msg Time hh:mm:ss.sss': 'Msg Time hh:mm:ss.sss', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Altitude MSL Feet': 'Altitude MSL Feet', 'Heading True Deg': 'Heading True Deg', 'Position Date YYYYMMDD': 'Position Date YYYYMMDD', 'Position Time hh:mm:ss.sss': 'Position Time hh:mm:ss.sss', 'Ground Speed Kts': 'Ground Speed Kts', });
lyr_ESM_EMITER_MPAC_3.set('fieldAliases', {'field_1': 'field_1', 'Date YYYYMMDD': 'Date YYYYMMDD', 'Time hh:mm:ss.sss': 'Time hh:mm:ss.sss', 'Emitter Enumeration': 'Emitter Enumeration', 'Strongest Beam Enumeration': 'Strongest Beam Enumeration', 'Change Type': 'Change Type', 'Manually Assigned Emitter': 'Manually Assigned Emitter', 'Azimuth Deg': 'Azimuth Deg', 'Emitter Intercept Date YYYYMMDD': 'Emitter Intercept Date YYYYMMDD', 'Emitter Intercept Time hh:mm:ss.sss': 'Emitter Intercept Time hh:mm:ss.sss', 'Active Status': 'Active Status', 'Affiliation': 'Affiliation', 'Evironment': 'Evironment', 'Associated Weapon System': 'Associated Weapon System', 'Associated Target': 'Associated Target', 'Priority': 'Priority', 'Confidence': 'Confidence', 'Range Nm': 'Range Nm', 'Azimuth Type': 'Azimuth Type', 'Ownship Latitude': 'Ownship Latitude', 'Ownship Longitude': 'Ownship Longitude', 'Ownship Altitude Feet': 'Ownship Altitude Feet', 'Azimuth Accuracy Deg': 'Azimuth Accuracy Deg', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Emitter Classification Status': 'Emitter Classification Status', 'Emitter of Interest': 'Emitter of Interest', 'Unnamed: 26': 'Unnamed: 26', 'imo': 'imo', });
lyr_PirateAttacks20002022Dataworld_4.set('fieldAliases', {'incident_date': 'incident_date', 'ship_name': 'ship_name', 'ship_flag': 'ship_flag', 'ship_type': 'ship_type', 'area': 'area', 'latitude': 'latitude', 'longitude': 'longitude', 'consequences_to_crew': 'consequences_to_crew', 'part_of_ship_raided': 'part_of_ship_raided', 'ship_status': 'ship_status', 'weapons_used': 'weapons_used', 'flag_crew_injuries': 'flag_crew_injuries', 'flag_crew_held_hostage': 'flag_crew_held_hostage', 'flag_crew_missing': 'flag_crew_missing', 'flag_crew_deaths': 'flag_crew_deaths', 'flag_crew_assaulted': 'flag_crew_assaulted', 'location': 'location', });
lyr_VesselDetectionReportvakeai_5.set('fieldAliases', {'uuid': 'uuid', 'timestamp': 'timestamp', 'correlated': 'correlated', 'object_class': 'object_class', 'matching_label': 'matching_label', 'length': 'length', 'lon': 'lon', 'lat': 'lat', 'object_class_score': 'object_class_score', 'estimation_score': 'estimation_score', 'matching_score': 'matching_score', 'image_path': 'image_path', 'image_source': 'image_source', 'course': 'course', 'mmsi': 'mmsi', });
lyr_KSLPRIDERoutePathSearoutes_6.set('fieldAliases', {'draft': 'draft', 'width': 'width', 'length': 'length', 'name': 'name', 'imo': 'imo', 'speedInKts': 'speedInKts', 'speed': 'speed', 'duration': 'duration', 'departure': 'departure', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'New_DT': 'New_DT', });
lyr_AISMarineTrafficSouthIndianOcean_7.set('fieldAliases', {'data.SHIP_ID': 'data.SHIP_ID', 'data.IMO': 'data.IMO', 'data.MMSI': 'data.MMSI', 'data.CALLSIGN': 'data.CALLSIGN', 'data.SHIPNAME': 'data.SHIPNAME', 'data.TYPE_COLOR': 'data.TYPE_COLOR', 'data.LAST_POS': 'data.LAST_POS', 'data.CODE2': 'data.CODE2', 'data.COUNTRY': 'data.COUNTRY', 'data.NEXT_PORT_NAME': 'data.NEXT_PORT_NAME', 'data.NEXT_PORT_COUNTRY': 'data.NEXT_PORT_COUNTRY', 'data.NEXT_PORT_ID': 'data.NEXT_PORT_ID', 'data.ETA': 'data.ETA', 'data.DESTINATION': 'data.DESTINATION', 'data.CURRENT_PORT_COUNTRY': 'data.CURRENT_PORT_COUNTRY', 'data.TYPE_SUMMARY': 'data.TYPE_SUMMARY', 'data.COURSE': 'data.COURSE', 'data.LON': 'data.LON', 'data.LAT': 'data.LAT', 'data.TIMEZONE': 'data.TIMEZONE', 'data.AREA_CODE': 'data.AREA_CODE', 'data.ETA_OFFSET': 'data.ETA_OFFSET', 'data.SPEED': 'data.SPEED', 'data.LENGTH': 'data.LENGTH', 'data.WIDTH': 'data.WIDTH', 'data.ETA_UPDATED': 'data.ETA_UPDATED', 'data.DISTANCE_TO_GO': 'data.DISTANCE_TO_GO', 'data.PORT_ID': 'data.PORT_ID', 'data.CURRENT_PORT': 'data.CURRENT_PORT', 'data.CTA_ROUTE_FORECAST': 'data.CTA_ROUTE_FORECAST', });
lyr_PortsNaturalEarthData_8.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'name': 'name', 'website': 'website', 'natlscale': 'natlscale', 'ne_id': 'ne_id', });
lyr_Earthquakesusgsgov_9.set('fieldAliases', {'id': 'id', 'title': 'title', 'updated': 'updated', 'link_rel': 'link_rel', 'link_type': 'link_type', 'link_href': 'link_href', 'summary': 'summary', 'summary_type': 'summary_type', 'georss_elev': 'georss_elev', 'category_label': 'category_label', 'category_term': 'category_term', 'category2_label': 'category2_label', 'category2_term': 'category2_term', 'category3_label': 'category3_label', 'category3_term': 'category3_term', 'category4_label': 'category4_label', 'category4_term': 'category4_term', });
lyr_NoticestoMariners_10.set('fieldAliases', {'NOTICEID': 'NOTICEID', 'COUNTRY': 'COUNTRY', 'DATE': 'DATE', 'LAT': 'LAT', 'LONG': 'LONG', 'TYPE': 'TYPE', 'IMO': 'IMO', 'DESCRIPTION': 'DESCRIPTION', 'field_9': 'field_9', });
lyr_GEORSS26Aug24GoogleNews_11.set('fieldAliases', {'channel__item__title': 'channel__item__title', 'channel__item__link': 'channel__item__link', 'channel__item__description__a__@href': 'channel__item__description__a__@href', 'channel__item__description__a__@target': 'channel__item__description__a__@target', 'channel__item__description__a__#text': 'channel__item__description__a__#text', 'channel__item__description__#text': 'channel__item__description__#text', 'channel__item__description__font__@color': 'channel__item__description__font__@color', 'channel__item__description__font__#text': 'channel__item__description__font__#text', 'channel__item__pubDate': 'channel__item__pubDate', 'channel__item__guid__@isPermaLink': 'channel__item__guid__@isPermaLink', 'channel__item__guid__#text': 'channel__item__guid__#text', 'channel__item__dc:date': 'channel__item__dc:date', 'channel__item__geo:lat': 'channel__item__geo:lat', 'channel__item__geo:long': 'channel__item__geo:long', });
lyr_FlightDataOpenskyNetwork_12.set('fieldAliases', {'icao24': 'icao24', 'callsign': 'callsign', 'origin_country': 'origin_country', 'time_position': 'time_position', 'last_contact': 'last_contact', 'long': 'long', 'lat': 'lat', 'baro_altitude': 'baro_altitude', 'on_ground': 'on_ground', 'velocity': 'velocity', 'true_track': 'true_track', 'vertical_rate': 'vertical_rate', 'sensors': 'sensors', 'geo_altitude': 'geo_altitude', 'squawk': 'squawk', 'spi': 'spi', 'position_source': 'position_source', });
lyr_MilitaryGrid_100_0_14.set('fieldAliases', {'fid': 'fid', 'row_index': 'row_index', 'col_index': 'col_index', 'GZD': 'GZD', 'MGRS': 'MGRS', });
lyr_MilitaryGrid_15.set('fieldAliases', {'fid': 'fid', 'row_index': 'row_index', 'col_index': 'col_index', 'GZD': 'GZD', });
lyr_EEZBoundariesv8MarineRegions_16.set('fieldAliases', {'Source': 'Source', 'TYPE': 'TYPE', 'Boundary': 'Boundary', 'Country1': 'Country1', 'Country2': 'Country2', 'line_id': 'line_id', 'TreatyDate': 'TreatyDate', 'LastChange': 'LastChange', });
lyr_rf_data_1.set('fieldImages', {'Timestamp': 'TextEdit', 'Frequency': 'Range', 'Signal Strength': 'Range', 'Modulation': 'TextEdit', 'Bandwidth': 'Range', 'Location': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'Device Type': 'TextEdit', 'Antenna Type': 'TextEdit', 'Temperature': 'Range', 'Humidity': 'Range', 'Wind Speed': 'Range', 'Precipitation': 'TextEdit', 'Weather Condition': 'TextEdit', 'Interference Type': 'TextEdit', 'Battery Level': 'Range', 'Power Source': 'CheckBox', 'CPU Usage': 'TextEdit', 'Memory Usage': 'TextEdit', 'WiFi Strength': 'Range', 'Disk Usage': 'TextEdit', 'System Load': 'TextEdit', 'Altitude(m)': 'TextEdit', 'Air Pressure': 'TextEdit', 'Device Status': 'TextEdit', 'I/Q Data': 'TextEdit', });
lyr_Ownship_2.set('fieldImages', {'imo': 'Range', 'Msg Date YYYYMMDD': 'Range', 'Msg Time hh:mm:ss.sss': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Altitude MSL Feet': 'Range', 'Heading True Deg': 'TextEdit', 'Position Date YYYYMMDD': 'Range', 'Position Time hh:mm:ss.sss': 'TextEdit', 'Ground Speed Kts': 'TextEdit', });
lyr_ESM_EMITER_MPAC_3.set('fieldImages', {'field_1': 'Range', 'Date YYYYMMDD': 'Range', 'Time hh:mm:ss.sss': 'TextEdit', 'Emitter Enumeration': 'Range', 'Strongest Beam Enumeration': 'Range', 'Change Type': 'TextEdit', 'Manually Assigned Emitter': 'CheckBox', 'Azimuth Deg': 'TextEdit', 'Emitter Intercept Date YYYYMMDD': 'Range', 'Emitter Intercept Time hh:mm:ss.sss': 'TextEdit', 'Active Status': 'CheckBox', 'Affiliation': 'TextEdit', 'Evironment': 'TextEdit', 'Associated Weapon System': 'Range', 'Associated Target': 'Range', 'Priority': 'TextEdit', 'Confidence': 'TextEdit', 'Range Nm': 'CheckBox', 'Azimuth Type': 'TextEdit', 'Ownship Latitude': 'TextEdit', 'Ownship Longitude': 'TextEdit', 'Ownship Altitude Feet': 'Range', 'Azimuth Accuracy Deg': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Emitter Classification Status': 'TextEdit', 'Emitter of Interest': 'CheckBox', 'Unnamed: 26': 'TextEdit', 'imo': 'Range', });
lyr_PirateAttacks20002022Dataworld_4.set('fieldImages', {'incident_date': 'DateTime', 'ship_name': 'TextEdit', 'ship_flag': 'TextEdit', 'ship_type': 'TextEdit', 'area': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'consequences_to_crew': 'TextEdit', 'part_of_ship_raided': 'TextEdit', 'ship_status': 'TextEdit', 'weapons_used': 'TextEdit', 'flag_crew_injuries': 'CheckBox', 'flag_crew_held_hostage': 'CheckBox', 'flag_crew_missing': 'CheckBox', 'flag_crew_deaths': 'CheckBox', 'flag_crew_assaulted': 'CheckBox', 'location': 'TextEdit', });
lyr_VesselDetectionReportvakeai_5.set('fieldImages', {'uuid': 'TextEdit', 'timestamp': 'DateTime', 'correlated': 'CheckBox', 'object_class': 'TextEdit', 'matching_label': 'TextEdit', 'length': 'TextEdit', 'lon': 'TextEdit', 'lat': 'TextEdit', 'object_class_score': 'TextEdit', 'estimation_score': 'TextEdit', 'matching_score': 'TextEdit', 'image_path': 'TextEdit', 'image_source': 'TextEdit', 'course': 'TextEdit', 'mmsi': 'TextEdit', });
lyr_KSLPRIDERoutePathSearoutes_6.set('fieldImages', {'draft': 'TextEdit', 'width': 'Range', 'length': 'Range', 'name': 'TextEdit', 'imo': 'Range', 'speedInKts': 'Range', 'speed': 'Range', 'duration': 'Range', 'departure': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'New_DT': 'DateTime', });
lyr_AISMarineTrafficSouthIndianOcean_7.set('fieldImages', {'data.SHIP_ID': 'Range', 'data.IMO': 'Range', 'data.MMSI': 'Range', 'data.CALLSIGN': 'TextEdit', 'data.SHIPNAME': 'TextEdit', 'data.TYPE_COLOR': 'TextEdit', 'data.LAST_POS': 'Range', 'data.CODE2': 'TextEdit', 'data.COUNTRY': 'TextEdit', 'data.NEXT_PORT_NAME': 'TextEdit', 'data.NEXT_PORT_COUNTRY': 'TextEdit', 'data.NEXT_PORT_ID': 'TextEdit', 'data.ETA': 'TextEdit', 'data.DESTINATION': 'TextEdit', 'data.CURRENT_PORT_COUNTRY': 'TextEdit', 'data.TYPE_SUMMARY': 'TextEdit', 'data.COURSE': 'TextEdit', 'data.LON': 'TextEdit', 'data.LAT': 'TextEdit', 'data.TIMEZONE': 'TextEdit', 'data.AREA_CODE': 'TextEdit', 'data.ETA_OFFSET': 'TextEdit', 'data.SPEED': 'TextEdit', 'data.LENGTH': 'TextEdit', 'data.WIDTH': 'TextEdit', 'data.ETA_UPDATED': 'TextEdit', 'data.DISTANCE_TO_GO': 'Range', 'data.PORT_ID': 'TextEdit', 'data.CURRENT_PORT': 'TextEdit', 'data.CTA_ROUTE_FORECAST': 'CheckBox', });
lyr_PortsNaturalEarthData_8.set('fieldImages', {'scalerank': 'Range', 'featurecla': 'TextEdit', 'name': 'TextEdit', 'website': 'TextEdit', 'natlscale': 'TextEdit', 'ne_id': 'TextEdit', });
lyr_Earthquakesusgsgov_9.set('fieldImages', {'id': 'TextEdit', 'title': 'TextEdit', 'updated': 'DateTime', 'link_rel': 'TextEdit', 'link_type': 'TextEdit', 'link_href': 'TextEdit', 'summary': 'TextEdit', 'summary_type': 'TextEdit', 'georss_elev': 'TextEdit', 'category_label': 'TextEdit', 'category_term': 'TextEdit', 'category2_label': 'TextEdit', 'category2_term': 'TextEdit', 'category3_label': 'TextEdit', 'category3_term': 'TextEdit', 'category4_label': 'TextEdit', 'category4_term': 'TextEdit', });
lyr_NoticestoMariners_10.set('fieldImages', {'NOTICEID': 'TextEdit', 'COUNTRY': 'TextEdit', 'DATE': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'TYPE': 'TextEdit', 'IMO': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'field_9': 'TextEdit', });
lyr_GEORSS26Aug24GoogleNews_11.set('fieldImages', {'channel__item__title': 'TextEdit', 'channel__item__link': 'TextEdit', 'channel__item__description__a__@href': 'TextEdit', 'channel__item__description__a__@target': 'TextEdit', 'channel__item__description__a__#text': 'TextEdit', 'channel__item__description__#text': 'TextEdit', 'channel__item__description__font__@color': 'TextEdit', 'channel__item__description__font__#text': 'TextEdit', 'channel__item__pubDate': 'TextEdit', 'channel__item__guid__@isPermaLink': 'CheckBox', 'channel__item__guid__#text': 'TextEdit', 'channel__item__dc:date': 'DateTime', 'channel__item__geo:lat': 'TextEdit', 'channel__item__geo:long': 'TextEdit', });
lyr_FlightDataOpenskyNetwork_12.set('fieldImages', {'icao24': 'TextEdit', 'callsign': 'TextEdit', 'origin_country': 'TextEdit', 'time_position': 'Range', 'last_contact': 'Range', 'long': 'TextEdit', 'lat': 'TextEdit', 'baro_altitude': 'TextEdit', 'on_ground': 'CheckBox', 'velocity': 'TextEdit', 'true_track': 'TextEdit', 'vertical_rate': 'TextEdit', 'sensors': 'TextEdit', 'geo_altitude': 'TextEdit', 'squawk': 'Range', 'spi': 'CheckBox', 'position_source': 'CheckBox', });
lyr_MilitaryGrid_100_0_14.set('fieldImages', {'fid': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'GZD': 'TextEdit', 'MGRS': 'TextEdit', });
lyr_MilitaryGrid_15.set('fieldImages', {'fid': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'GZD': 'TextEdit', });
lyr_EEZBoundariesv8MarineRegions_16.set('fieldImages', {'Source': 'TextEdit', 'TYPE': 'TextEdit', 'Boundary': 'TextEdit', 'Country1': 'Range', 'Country2': 'Range', 'line_id': 'Range', 'TreatyDate': 'TextEdit', 'LastChange': 'TextEdit', });
lyr_rf_data_1.set('fieldLabels', {'Timestamp': 'no label', 'Frequency': 'no label', 'Signal Strength': 'no label', 'Modulation': 'no label', 'Bandwidth': 'no label', 'Location': 'no label', 'lat': 'no label', 'lon': 'no label', 'Device Type': 'no label', 'Antenna Type': 'no label', 'Temperature': 'no label', 'Humidity': 'no label', 'Wind Speed': 'no label', 'Precipitation': 'no label', 'Weather Condition': 'no label', 'Interference Type': 'no label', 'Battery Level': 'no label', 'Power Source': 'no label', 'CPU Usage': 'no label', 'Memory Usage': 'no label', 'WiFi Strength': 'no label', 'Disk Usage': 'no label', 'System Load': 'no label', 'Altitude(m)': 'no label', 'Air Pressure': 'no label', 'Device Status': 'no label', 'I/Q Data': 'no label', });
lyr_Ownship_2.set('fieldLabels', {'imo': 'no label', 'Msg Date YYYYMMDD': 'no label', 'Msg Time hh:mm:ss.sss': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Altitude MSL Feet': 'no label', 'Heading True Deg': 'no label', 'Position Date YYYYMMDD': 'no label', 'Position Time hh:mm:ss.sss': 'no label', 'Ground Speed Kts': 'no label', });
lyr_ESM_EMITER_MPAC_3.set('fieldLabels', {'field_1': 'no label', 'Date YYYYMMDD': 'no label', 'Time hh:mm:ss.sss': 'no label', 'Emitter Enumeration': 'no label', 'Strongest Beam Enumeration': 'no label', 'Change Type': 'no label', 'Manually Assigned Emitter': 'no label', 'Azimuth Deg': 'no label', 'Emitter Intercept Date YYYYMMDD': 'no label', 'Emitter Intercept Time hh:mm:ss.sss': 'no label', 'Active Status': 'no label', 'Affiliation': 'no label', 'Evironment': 'no label', 'Associated Weapon System': 'no label', 'Associated Target': 'no label', 'Priority': 'no label', 'Confidence': 'no label', 'Range Nm': 'no label', 'Azimuth Type': 'no label', 'Ownship Latitude': 'no label', 'Ownship Longitude': 'no label', 'Ownship Altitude Feet': 'no label', 'Azimuth Accuracy Deg': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Emitter Classification Status': 'no label', 'Emitter of Interest': 'no label', 'Unnamed: 26': 'no label', 'imo': 'no label', });
lyr_PirateAttacks20002022Dataworld_4.set('fieldLabels', {'incident_date': 'no label', 'ship_name': 'no label', 'ship_flag': 'no label', 'ship_type': 'no label', 'area': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'consequences_to_crew': 'no label', 'part_of_ship_raided': 'no label', 'ship_status': 'no label', 'weapons_used': 'no label', 'flag_crew_injuries': 'no label', 'flag_crew_held_hostage': 'no label', 'flag_crew_missing': 'no label', 'flag_crew_deaths': 'no label', 'flag_crew_assaulted': 'no label', 'location': 'no label', });
lyr_VesselDetectionReportvakeai_5.set('fieldLabels', {'uuid': 'no label', 'timestamp': 'no label', 'correlated': 'no label', 'object_class': 'no label', 'matching_label': 'no label', 'length': 'no label', 'lon': 'no label', 'lat': 'no label', 'object_class_score': 'no label', 'estimation_score': 'no label', 'matching_score': 'no label', 'image_path': 'no label', 'image_source': 'no label', 'course': 'no label', 'mmsi': 'no label', });
lyr_KSLPRIDERoutePathSearoutes_6.set('fieldLabels', {'draft': 'no label', 'width': 'no label', 'length': 'no label', 'name': 'no label', 'imo': 'no label', 'speedInKts': 'no label', 'speed': 'no label', 'duration': 'no label', 'departure': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'New_DT': 'no label', });
lyr_AISMarineTrafficSouthIndianOcean_7.set('fieldLabels', {'data.SHIP_ID': 'no label', 'data.IMO': 'no label', 'data.MMSI': 'no label', 'data.CALLSIGN': 'no label', 'data.SHIPNAME': 'no label', 'data.TYPE_COLOR': 'no label', 'data.LAST_POS': 'no label', 'data.CODE2': 'no label', 'data.COUNTRY': 'no label', 'data.NEXT_PORT_NAME': 'no label', 'data.NEXT_PORT_COUNTRY': 'no label', 'data.NEXT_PORT_ID': 'no label', 'data.ETA': 'no label', 'data.DESTINATION': 'no label', 'data.CURRENT_PORT_COUNTRY': 'no label', 'data.TYPE_SUMMARY': 'no label', 'data.COURSE': 'no label', 'data.LON': 'no label', 'data.LAT': 'no label', 'data.TIMEZONE': 'no label', 'data.AREA_CODE': 'no label', 'data.ETA_OFFSET': 'no label', 'data.SPEED': 'no label', 'data.LENGTH': 'no label', 'data.WIDTH': 'no label', 'data.ETA_UPDATED': 'no label', 'data.DISTANCE_TO_GO': 'no label', 'data.PORT_ID': 'no label', 'data.CURRENT_PORT': 'no label', 'data.CTA_ROUTE_FORECAST': 'no label', });
lyr_PortsNaturalEarthData_8.set('fieldLabels', {'scalerank': 'no label', 'featurecla': 'no label', 'name': 'no label', 'website': 'no label', 'natlscale': 'no label', 'ne_id': 'no label', });
lyr_Earthquakesusgsgov_9.set('fieldLabels', {'id': 'no label', 'title': 'no label', 'updated': 'no label', 'link_rel': 'no label', 'link_type': 'no label', 'link_href': 'no label', 'summary': 'no label', 'summary_type': 'no label', 'georss_elev': 'no label', 'category_label': 'no label', 'category_term': 'no label', 'category2_label': 'no label', 'category2_term': 'no label', 'category3_label': 'no label', 'category3_term': 'no label', 'category4_label': 'no label', 'category4_term': 'no label', });
lyr_NoticestoMariners_10.set('fieldLabels', {'NOTICEID': 'no label', 'COUNTRY': 'no label', 'DATE': 'no label', 'LAT': 'no label', 'LONG': 'no label', 'TYPE': 'no label', 'IMO': 'no label', 'DESCRIPTION': 'no label', 'field_9': 'no label', });
lyr_GEORSS26Aug24GoogleNews_11.set('fieldLabels', {'channel__item__title': 'no label', 'channel__item__link': 'no label', 'channel__item__description__a__@href': 'no label', 'channel__item__description__a__@target': 'no label', 'channel__item__description__a__#text': 'no label', 'channel__item__description__#text': 'no label', 'channel__item__description__font__@color': 'no label', 'channel__item__description__font__#text': 'no label', 'channel__item__pubDate': 'no label', 'channel__item__guid__@isPermaLink': 'no label', 'channel__item__guid__#text': 'no label', 'channel__item__dc:date': 'no label', 'channel__item__geo:lat': 'no label', 'channel__item__geo:long': 'no label', });
lyr_FlightDataOpenskyNetwork_12.set('fieldLabels', {'icao24': 'no label', 'callsign': 'no label', 'origin_country': 'no label', 'time_position': 'no label', 'last_contact': 'no label', 'long': 'no label', 'lat': 'no label', 'baro_altitude': 'no label', 'on_ground': 'no label', 'velocity': 'no label', 'true_track': 'no label', 'vertical_rate': 'no label', 'sensors': 'no label', 'geo_altitude': 'no label', 'squawk': 'no label', 'spi': 'no label', 'position_source': 'no label', });
lyr_MilitaryGrid_100_0_14.set('fieldLabels', {'fid': 'no label', 'row_index': 'no label', 'col_index': 'no label', 'GZD': 'no label', 'MGRS': 'no label', });
lyr_MilitaryGrid_15.set('fieldLabels', {'fid': 'no label', 'row_index': 'no label', 'col_index': 'no label', 'GZD': 'no label', });
lyr_EEZBoundariesv8MarineRegions_16.set('fieldLabels', {'Source': 'no label', 'TYPE': 'no label', 'Boundary': 'no label', 'Country1': 'no label', 'Country2': 'no label', 'line_id': 'no label', 'TreatyDate': 'no label', 'LastChange': 'no label', });
lyr_EEZBoundariesv8MarineRegions_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});