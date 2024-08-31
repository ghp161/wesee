ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-139.131849, -105.490437, 157.582983, 84.371063]);
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
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
                title: '<img src="styles/legend/KSLPRIDERoutePathSearoutes_6.png" /> KSL PRIDE Route Path - Searoutes'
            });
var format_PortsNaturalEarthData_7 = new ol.format.GeoJSON();
var features_PortsNaturalEarthData_7 = format_PortsNaturalEarthData_7.readFeatures(json_PortsNaturalEarthData_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PortsNaturalEarthData_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PortsNaturalEarthData_7.addFeatures(features_PortsNaturalEarthData_7);cluster_PortsNaturalEarthData_7 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PortsNaturalEarthData_7
});
var lyr_PortsNaturalEarthData_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PortsNaturalEarthData_7, 
                style: style_PortsNaturalEarthData_7,
                popuplayertitle: "Ports- Natural Earth Data",
                interactive: true,
                title: '<img src="styles/legend/PortsNaturalEarthData_7.png" /> Ports- Natural Earth Data'
            });
var format_AISMarineTrafficSouthIndianOcean_8 = new ol.format.GeoJSON();
var features_AISMarineTrafficSouthIndianOcean_8 = format_AISMarineTrafficSouthIndianOcean_8.readFeatures(json_AISMarineTrafficSouthIndianOcean_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AISMarineTrafficSouthIndianOcean_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AISMarineTrafficSouthIndianOcean_8.addFeatures(features_AISMarineTrafficSouthIndianOcean_8);
var lyr_AISMarineTrafficSouthIndianOcean_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AISMarineTrafficSouthIndianOcean_8, 
                style: style_AISMarineTrafficSouthIndianOcean_8,
                popuplayertitle: "AIS - Marine Traffic - South Indian Ocean",
                interactive: true,
                title: '<img src="styles/legend/AISMarineTrafficSouthIndianOcean_8.png" /> AIS - Marine Traffic - South Indian Ocean'
            });
var format_Earthquakesusgsgov_9 = new ol.format.GeoJSON();
var features_Earthquakesusgsgov_9 = format_Earthquakesusgsgov_9.readFeatures(json_Earthquakesusgsgov_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
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
var format_FlightDataOpenskyNetwork_11 = new ol.format.GeoJSON();
var features_FlightDataOpenskyNetwork_11 = format_FlightDataOpenskyNetwork_11.readFeatures(json_FlightDataOpenskyNetwork_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FlightDataOpenskyNetwork_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FlightDataOpenskyNetwork_11.addFeatures(features_FlightDataOpenskyNetwork_11);
var lyr_FlightDataOpenskyNetwork_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FlightDataOpenskyNetwork_11, 
                style: style_FlightDataOpenskyNetwork_11,
                popuplayertitle: "Flight Data - Opensky Network",
                interactive: true,
                title: '<img src="styles/legend/FlightDataOpenskyNetwork_11.png" /> Flight Data - Opensky Network'
            });
var format_GEORSS26Aug24GoogleNews_12 = new ol.format.GeoJSON();
var features_GEORSS26Aug24GoogleNews_12 = format_GEORSS26Aug24GoogleNews_12.readFeatures(json_GEORSS26Aug24GoogleNews_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GEORSS26Aug24GoogleNews_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEORSS26Aug24GoogleNews_12.addFeatures(features_GEORSS26Aug24GoogleNews_12);
var lyr_GEORSS26Aug24GoogleNews_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEORSS26Aug24GoogleNews_12, 
                style: style_GEORSS26Aug24GoogleNews_12,
                popuplayertitle: "GEO RSS 26Aug24 - Google News",
                interactive: true,
                title: '<img src="styles/legend/GEORSS26Aug24GoogleNews_12.png" /> GEO RSS 26Aug24 - Google News'
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
var lyr_analysis_error_14 = new ol.layer.Image({
                            opacity: 1,
                            title: "analysis_error",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/analysis_error_14.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [47.200002, -49.299998, 179.800009, 30.650000]
                            })
                        });
var lyr_analysed_sst_15 = new ol.layer.Image({
                            opacity: 1,
                            title: "analysed_sst",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/analysed_sst_15.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [47.200002, -49.299998, 179.800009, 30.650000]
                            })
                        });
var format_MilitaryGrid_100_0_16 = new ol.format.GeoJSON();
var features_MilitaryGrid_100_0_16 = format_MilitaryGrid_100_0_16.readFeatures(json_MilitaryGrid_100_0_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MilitaryGrid_100_0_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MilitaryGrid_100_0_16.addFeatures(features_MilitaryGrid_100_0_16);
var lyr_MilitaryGrid_100_0_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MilitaryGrid_100_0_16, 
                style: style_MilitaryGrid_100_0_16,
                popuplayertitle: "MilitaryGrid_100_0",
                interactive: true,
                title: '<img src="styles/legend/MilitaryGrid_100_0_16.png" /> MilitaryGrid_100_0'
            });
var format_MilitaryGrid_17 = new ol.format.GeoJSON();
var features_MilitaryGrid_17 = format_MilitaryGrid_17.readFeatures(json_MilitaryGrid_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MilitaryGrid_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MilitaryGrid_17.addFeatures(features_MilitaryGrid_17);
var lyr_MilitaryGrid_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MilitaryGrid_17, 
                style: style_MilitaryGrid_17,
                popuplayertitle: "MilitaryGrid",
                interactive: true,
                title: '<img src="styles/legend/MilitaryGrid_17.png" /> MilitaryGrid'
            });
var format_EEZBoundariesv8MarineRegions_18 = new ol.format.GeoJSON();
var features_EEZBoundariesv8MarineRegions_18 = format_EEZBoundariesv8MarineRegions_18.readFeatures(json_EEZBoundariesv8MarineRegions_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EEZBoundariesv8MarineRegions_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EEZBoundariesv8MarineRegions_18.addFeatures(features_EEZBoundariesv8MarineRegions_18);
var lyr_EEZBoundariesv8MarineRegions_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EEZBoundariesv8MarineRegions_18, 
                style: style_EEZBoundariesv8MarineRegions_18,
                popuplayertitle: "EEZ Boundaries v8 Marine Regions",
                interactive: true,
                title: '<img src="styles/legend/EEZBoundariesv8MarineRegions_18.png" /> EEZ Boundaries v8 Marine Regions'
            });
var group_METOFFICEGLOSSTL4NRTOBSSSTV2_1724506919079 = new ol.layer.Group({
                                layers: [lyr_analysis_error_14,lyr_analysed_sst_15,],
                                fold: "open",
                                title: "METOFFICE-GLO-SST-L4-NRT-OBS-SST-V2_1724506919079"});

lyr_GoogleRoad_0.setVisible(true);lyr_rf_data_1.setVisible(false);lyr_Ownship_2.setVisible(false);lyr_ESM_EMITER_MPAC_3.setVisible(false);lyr_PirateAttacks20002022Dataworld_4.setVisible(false);lyr_VesselDetectionReportvakeai_5.setVisible(false);lyr_KSLPRIDERoutePathSearoutes_6.setVisible(false);lyr_PortsNaturalEarthData_7.setVisible(false);lyr_AISMarineTrafficSouthIndianOcean_8.setVisible(false);lyr_Earthquakesusgsgov_9.setVisible(false);lyr_NoticestoMariners_10.setVisible(false);lyr_FlightDataOpenskyNetwork_11.setVisible(false);lyr_GEORSS26Aug24GoogleNews_12.setVisible(false);lyr_VizaqPortSatelliteImage_13.setVisible(false);lyr_analysis_error_14.setVisible(false);lyr_analysed_sst_15.setVisible(false);lyr_MilitaryGrid_100_0_16.setVisible(false);lyr_MilitaryGrid_17.setVisible(false);lyr_EEZBoundariesv8MarineRegions_18.setVisible(false);
var layersList = [lyr_GoogleRoad_0,lyr_rf_data_1,lyr_Ownship_2,lyr_ESM_EMITER_MPAC_3,lyr_PirateAttacks20002022Dataworld_4,lyr_VesselDetectionReportvakeai_5,lyr_KSLPRIDERoutePathSearoutes_6,lyr_PortsNaturalEarthData_7,lyr_AISMarineTrafficSouthIndianOcean_8,lyr_Earthquakesusgsgov_9,lyr_NoticestoMariners_10,lyr_FlightDataOpenskyNetwork_11,lyr_GEORSS26Aug24GoogleNews_12,lyr_VizaqPortSatelliteImage_13,group_METOFFICEGLOSSTL4NRTOBSSSTV2_1724506919079,lyr_MilitaryGrid_100_0_16,lyr_MilitaryGrid_17,lyr_EEZBoundariesv8MarineRegions_18];
lyr_rf_data_1.set('fieldAliases', {'Timestamp': 'Timestamp', 'Frequency': 'Frequency', 'Signal Strength': 'Signal Strength', 'Modulation': 'Modulation', 'Bandwidth': 'Bandwidth', 'Location': 'Location', 'lat': 'lat', 'lon': 'lon', 'Device Type': 'Device Type', 'Antenna Type': 'Antenna Type', 'Temperature': 'Temperature', 'Humidity': 'Humidity', 'Wind Speed': 'Wind Speed', 'Precipitation': 'Precipitation', 'Weather Condition': 'Weather Condition', 'Interference Type': 'Interference Type', 'Battery Level': 'Battery Level', 'Power Source': 'Power Source', 'CPU Usage': 'CPU Usage', 'Memory Usage': 'Memory Usage', 'WiFi Strength': 'WiFi Strength', 'Disk Usage': 'Disk Usage', 'System Load': 'System Load', 'Altitude(m)': 'Altitude(m)', 'Air Pressure': 'Air Pressure', 'Device Status': 'Device Status', 'I/Q Data': 'I/Q Data', });
lyr_Ownship_2.set('fieldAliases', {'imo': 'imo', 'Msg Date YYYYMMDD': 'Msg Date YYYYMMDD', 'Msg Time hh:mm:ss.sss': 'Msg Time hh:mm:ss.sss', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Altitude MSL Feet': 'Altitude MSL Feet', 'Heading True Deg': 'Heading True Deg', 'Position Date YYYYMMDD': 'Position Date YYYYMMDD', 'Position Time hh:mm:ss.sss': 'Position Time hh:mm:ss.sss', 'Ground Speed Kts': 'Ground Speed Kts', });
lyr_ESM_EMITER_MPAC_3.set('fieldAliases', {'field_1': 'field_1', 'Date YYYYMMDD': 'Date YYYYMMDD', 'Time hh:mm:ss.sss': 'Time hh:mm:ss.sss', 'Emitter Enumeration': 'Emitter Enumeration', 'Strongest Beam Enumeration': 'Strongest Beam Enumeration', 'Change Type': 'Change Type', 'Manually Assigned Emitter': 'Manually Assigned Emitter', 'Azimuth Deg': 'Azimuth Deg', 'Emitter Intercept Date YYYYMMDD': 'Emitter Intercept Date YYYYMMDD', 'Emitter Intercept Time hh:mm:ss.sss': 'Emitter Intercept Time hh:mm:ss.sss', 'Active Status': 'Active Status', 'Affiliation': 'Affiliation', 'Evironment': 'Evironment', 'Associated Weapon System': 'Associated Weapon System', 'Associated Target': 'Associated Target', 'Priority': 'Priority', 'Confidence': 'Confidence', 'Range Nm': 'Range Nm', 'Azimuth Type': 'Azimuth Type', 'Ownship Latitude': 'Ownship Latitude', 'Ownship Longitude': 'Ownship Longitude', 'Ownship Altitude Feet': 'Ownship Altitude Feet', 'Azimuth Accuracy Deg': 'Azimuth Accuracy Deg', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Emitter Classification Status': 'Emitter Classification Status', 'Emitter of Interest': 'Emitter of Interest', 'Unnamed: 26': 'Unnamed: 26', 'imo': 'imo', });
lyr_PirateAttacks20002022Dataworld_4.set('fieldAliases', {'incident_date': 'incident_date', 'ship_name': 'ship_name', 'ship_flag': 'ship_flag', 'ship_type': 'ship_type', 'area': 'area', 'latitude': 'latitude', 'longitude': 'longitude', 'consequences_to_crew': 'consequences_to_crew', 'part_of_ship_raided': 'part_of_ship_raided', 'ship_status': 'ship_status', 'weapons_used': 'weapons_used', 'flag_crew_injuries': 'flag_crew_injuries', 'flag_crew_held_hostage': 'flag_crew_held_hostage', 'flag_crew_missing': 'flag_crew_missing', 'flag_crew_deaths': 'flag_crew_deaths', 'flag_crew_assaulted': 'flag_crew_assaulted', 'location': 'location', });
lyr_VesselDetectionReportvakeai_5.set('fieldAliases', {'uuid': 'uuid', 'timestamp': 'timestamp', 'correlated': 'correlated', 'object_class': 'object_class', 'matching_label': 'matching_label', 'length': 'length', 'lon': 'lon', 'lat': 'lat', 'object_class_score': 'object_class_score', 'estimation_score': 'estimation_score', 'matching_score': 'matching_score', 'image_path': 'image_path', 'image_source': 'image_source', 'course': 'course', 'mmsi': 'mmsi', 'URL': 'URL', });
lyr_KSLPRIDERoutePathSearoutes_6.set('fieldAliases', {'draft': 'draft', 'width': 'width', 'length': 'length', 'name': 'name', 'imo': 'imo', 'speedInKts': 'speedInKts', 'speed': 'speed', 'duration': 'duration', 'departure': 'departure', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'New_DT': 'New_DT', });
lyr_PortsNaturalEarthData_7.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'name': 'name', 'website': 'website', 'natlscale': 'natlscale', 'ne_id': 'ne_id', });
lyr_AISMarineTrafficSouthIndianOcean_8.set('fieldAliases', {'SHIP_ID': 'SHIP_ID', 'IMO': 'IMO', 'MMSI': 'MMSI', 'CALLSIGN': 'CALLSIGN', 'SHIPNAME': 'SHIPNAME', 'TYPE_COLOR': 'TYPE_COLOR', 'LAST_POS': 'LAST_POS', 'CODE2': 'CODE2', 'COUNTRY': 'COUNTRY', 'NEXT_PORT_NAME': 'NEXT_PORT_NAME', 'NEXT_PORT_COUNTRY': 'NEXT_PORT_COUNTRY', 'NEXT_PORT_ID': 'NEXT_PORT_ID', 'ETA': 'ETA', 'DESTINATION': 'DESTINATION', 'CURRENT_PORT_COUNTRY': 'CURRENT_PORT_COUNTRY', 'TYPE_SUMMARY': 'TYPE_SUMMARY', 'COURSE': 'COURSE', 'LON': 'LON', 'LAT': 'LAT', 'TIMEZONE': 'TIMEZONE', 'AREA_CODE': 'AREA_CODE', 'ETA_OFFSET': 'ETA_OFFSET', 'SPEED': 'SPEED', 'LENGTH': 'LENGTH', 'WIDTH': 'WIDTH', 'ETA_UPDATED': 'ETA_UPDATED', 'DISTANCE_TO_GO': 'DISTANCE_TO_GO', 'PORT_ID': 'PORT_ID', 'CURRENT_PORT': 'CURRENT_PORT', 'CTA_ROUTE_FORECAST': 'CTA_ROUTE_FORECAST', });
lyr_Earthquakesusgsgov_9.set('fieldAliases', {'id': 'id', 'title': 'title', 'updated': 'updated', 'link_rel': 'link_rel', 'link_type': 'link_type', 'link_href': 'link_href', 'summary': 'summary', 'summary_type': 'summary_type', 'georss_elev': 'georss_elev', 'category_label': 'category_label', 'category_term': 'category_term', 'category2_label': 'category2_label', 'category2_term': 'category2_term', 'category3_label': 'category3_label', 'category3_term': 'category3_term', 'category4_label': 'category4_label', 'category4_term': 'category4_term', });
lyr_NoticestoMariners_10.set('fieldAliases', {'NOTICEID': 'NOTICEID', 'COUNTRY': 'COUNTRY', 'DATE': 'DATE', 'LAT': 'LAT', 'LONG': 'LONG', 'TYPE': 'TYPE', 'IMO': 'IMO', 'DESCRIPTION': 'DESCRIPTION', 'field_9': 'field_9', });
lyr_FlightDataOpenskyNetwork_11.set('fieldAliases', {'icao24': 'icao24', 'callsign': 'callsign', 'origin_country': 'origin_country', 'time_position': 'time_position', 'last_contact': 'last_contact', 'long': 'long', 'lat': 'lat', 'baro_altitude': 'baro_altitude', 'on_ground': 'on_ground', 'velocity': 'velocity', 'true_track': 'true_track', 'vertical_rate': 'vertical_rate', 'sensors': 'sensors', 'geo_altitude': 'geo_altitude', 'squawk': 'squawk', 'spi': 'spi', 'position_source': 'position_source', });
lyr_GEORSS26Aug24GoogleNews_12.set('fieldAliases', {'Title': 'Title', 'Link': 'Link', 'Target': 'Target', 'Description': 'Description', 'Channel': 'Channel', 'PublishDate': 'PublishDate', 'lat': 'lat', 'long': 'long', });
lyr_MilitaryGrid_100_0_16.set('fieldAliases', {'fid': 'fid', 'row_index': 'row_index', 'col_index': 'col_index', 'GZD': 'GZD', 'MGRS': 'MGRS', });
lyr_MilitaryGrid_17.set('fieldAliases', {'fid': 'fid', 'row_index': 'row_index', 'col_index': 'col_index', 'GZD': 'GZD', });
lyr_EEZBoundariesv8MarineRegions_18.set('fieldAliases', {'Source': 'Source', 'TYPE': 'TYPE', 'Boundary': 'Boundary', 'Country1': 'Country1', 'Country2': 'Country2', 'line_id': 'line_id', 'TreatyDate': 'TreatyDate', 'LastChange': 'LastChange', });
lyr_rf_data_1.set('fieldImages', {'Timestamp': 'TextEdit', 'Frequency': 'Hidden', 'Signal Strength': 'Hidden', 'Modulation': 'Hidden', 'Bandwidth': 'Hidden', 'Location': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'Device Type': 'TextEdit', 'Antenna Type': 'TextEdit', 'Temperature': 'Range', 'Humidity': 'Range', 'Wind Speed': 'Range', 'Precipitation': 'Hidden', 'Weather Condition': 'TextEdit', 'Interference Type': 'TextEdit', 'Battery Level': 'Hidden', 'Power Source': 'Hidden', 'CPU Usage': 'Hidden', 'Memory Usage': 'Hidden', 'WiFi Strength': 'Range', 'Disk Usage': 'Hidden', 'System Load': 'Hidden', 'Altitude(m)': 'TextEdit', 'Air Pressure': 'Hidden', 'Device Status': 'TextEdit', 'I/Q Data': 'Hidden', });
lyr_Ownship_2.set('fieldImages', {'imo': 'Range', 'Msg Date YYYYMMDD': 'Range', 'Msg Time hh:mm:ss.sss': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Altitude MSL Feet': 'Range', 'Heading True Deg': 'TextEdit', 'Position Date YYYYMMDD': 'Range', 'Position Time hh:mm:ss.sss': 'TextEdit', 'Ground Speed Kts': 'TextEdit', });
lyr_ESM_EMITER_MPAC_3.set('fieldImages', {'field_1': 'Hidden', 'Date YYYYMMDD': 'TextEdit', 'Time hh:mm:ss.sss': 'TextEdit', 'Emitter Enumeration': 'Hidden', 'Strongest Beam Enumeration': 'Hidden', 'Change Type': 'Hidden', 'Manually Assigned Emitter': 'Hidden', 'Azimuth Deg': 'Hidden', 'Emitter Intercept Date YYYYMMDD': 'Hidden', 'Emitter Intercept Time hh:mm:ss.sss': 'TextEdit', 'Active Status': 'CheckBox', 'Affiliation': 'TextEdit', 'Evironment': 'Hidden', 'Associated Weapon System': 'Hidden', 'Associated Target': 'Hidden', 'Priority': 'Hidden', 'Confidence': 'Hidden', 'Range Nm': 'Hidden', 'Azimuth Type': 'Hidden', 'Ownship Latitude': 'Hidden', 'Ownship Longitude': 'Hidden', 'Ownship Altitude Feet': 'Hidden', 'Azimuth Accuracy Deg': 'Hidden', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Emitter Classification Status': 'Hidden', 'Emitter of Interest': 'Hidden', 'Unnamed: 26': 'Hidden', 'imo': 'Hidden', });
lyr_PirateAttacks20002022Dataworld_4.set('fieldImages', {'incident_date': 'DateTime', 'ship_name': 'TextEdit', 'ship_flag': 'Hidden', 'ship_type': 'TextEdit', 'area': 'Hidden', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'consequences_to_crew': 'TextEdit', 'part_of_ship_raided': 'Hidden', 'ship_status': 'TextEdit', 'weapons_used': 'TextEdit', 'flag_crew_injuries': 'Hidden', 'flag_crew_held_hostage': 'Hidden', 'flag_crew_missing': 'Hidden', 'flag_crew_deaths': 'Hidden', 'flag_crew_assaulted': 'Hidden', 'location': 'TextEdit', });
lyr_VesselDetectionReportvakeai_5.set('fieldImages', {'uuid': 'Hidden', 'timestamp': 'DateTime', 'correlated': 'Hidden', 'object_class': 'TextEdit', 'matching_label': 'TextEdit', 'length': 'Hidden', 'lon': 'TextEdit', 'lat': 'TextEdit', 'object_class_score': 'Hidden', 'estimation_score': 'Hidden', 'matching_score': 'Hidden', 'image_path': 'Hidden', 'image_source': 'TextEdit', 'course': 'Hidden', 'mmsi': 'TextEdit', 'URL': 'TextEdit', });
lyr_KSLPRIDERoutePathSearoutes_6.set('fieldImages', {'draft': 'TextEdit', 'width': 'Hidden', 'length': 'Hidden', 'name': 'TextEdit', 'imo': 'Range', 'speedInKts': 'Range', 'speed': 'Range', 'duration': 'Hidden', 'departure': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'New_DT': 'Hidden', });
lyr_PortsNaturalEarthData_7.set('fieldImages', {'scalerank': 'Hidden', 'featurecla': 'TextEdit', 'name': 'TextEdit', 'website': 'TextEdit', 'natlscale': 'Hidden', 'ne_id': 'Hidden', });
lyr_AISMarineTrafficSouthIndianOcean_8.set('fieldImages', {'SHIP_ID': 'Hidden', 'IMO': 'Range', 'MMSI': 'Hidden', 'CALLSIGN': 'Hidden', 'SHIPNAME': 'TextEdit', 'TYPE_COLOR': 'Hidden', 'LAST_POS': 'Hidden', 'CODE2': 'Hidden', 'COUNTRY': 'TextEdit', 'NEXT_PORT_NAME': 'TextEdit', 'NEXT_PORT_COUNTRY': 'TextEdit', 'NEXT_PORT_ID': 'Hidden', 'ETA': 'Hidden', 'DESTINATION': 'TextEdit', 'CURRENT_PORT_COUNTRY': 'Hidden', 'TYPE_SUMMARY': 'Hidden', 'COURSE': 'TextEdit', 'LON': 'TextEdit', 'LAT': 'TextEdit', 'TIMEZONE': 'Hidden', 'AREA_CODE': 'Hidden', 'ETA_OFFSET': 'Hidden', 'SPEED': 'Hidden', 'LENGTH': 'Hidden', 'WIDTH': 'Hidden', 'ETA_UPDATED': 'TextEdit', 'DISTANCE_TO_GO': 'Hidden', 'PORT_ID': 'Hidden', 'CURRENT_PORT': 'Hidden', 'CTA_ROUTE_FORECAST': 'Hidden', });
lyr_Earthquakesusgsgov_9.set('fieldImages', {'id': 'Hidden', 'title': 'TextEdit', 'updated': 'DateTime', 'link_rel': 'Hidden', 'link_type': 'Hidden', 'link_href': 'TextEdit', 'summary': 'TextEdit', 'summary_type': 'Hidden', 'georss_elev': 'Hidden', 'category_label': 'Hidden', 'category_term': 'Hidden', 'category2_label': 'Hidden', 'category2_term': 'Hidden', 'category3_label': 'Hidden', 'category3_term': 'Hidden', 'category4_label': 'Hidden', 'category4_term': 'Hidden', });
lyr_NoticestoMariners_10.set('fieldImages', {'NOTICEID': 'TextEdit', 'COUNTRY': 'TextEdit', 'DATE': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'TYPE': 'TextEdit', 'IMO': 'TextEdit', 'DESCRIPTION': 'TextEdit', 'field_9': 'Hidden', });
lyr_FlightDataOpenskyNetwork_11.set('fieldImages', {'icao24': 'TextEdit', 'callsign': 'TextEdit', 'origin_country': 'TextEdit', 'time_position': 'Hidden', 'last_contact': 'Hidden', 'long': 'TextEdit', 'lat': 'TextEdit', 'baro_altitude': 'Hidden', 'on_ground': 'CheckBox', 'velocity': 'Hidden', 'true_track': 'TextEdit', 'vertical_rate': 'Hidden', 'sensors': 'Hidden', 'geo_altitude': 'Hidden', 'squawk': 'Hidden', 'spi': 'Hidden', 'position_source': 'Hidden', });
lyr_GEORSS26Aug24GoogleNews_12.set('fieldImages', {'Title': 'Hidden', 'Link': 'TextEdit', 'Target': 'Hidden', 'Description': 'TextEdit', 'Channel': 'TextEdit', 'PublishDate': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', });
lyr_MilitaryGrid_100_0_16.set('fieldImages', {'fid': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'GZD': 'TextEdit', 'MGRS': 'TextEdit', });
lyr_MilitaryGrid_17.set('fieldImages', {'fid': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'GZD': 'TextEdit', });
lyr_EEZBoundariesv8MarineRegions_18.set('fieldImages', {'Source': 'TextEdit', 'TYPE': 'TextEdit', 'Boundary': 'TextEdit', 'Country1': 'Range', 'Country2': 'Range', 'line_id': 'Range', 'TreatyDate': 'TextEdit', 'LastChange': 'TextEdit', });
lyr_rf_data_1.set('fieldLabels', {'Timestamp': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'lon': 'inline label - visible with data', 'Device Type': 'inline label - visible with data', 'Antenna Type': 'inline label - visible with data', 'Temperature': 'inline label - visible with data', 'Humidity': 'inline label - visible with data', 'Wind Speed': 'inline label - visible with data', 'Weather Condition': 'inline label - visible with data', 'Interference Type': 'inline label - visible with data', 'WiFi Strength': 'inline label - visible with data', 'Altitude(m)': 'inline label - visible with data', 'Device Status': 'inline label - visible with data', });
lyr_Ownship_2.set('fieldLabels', {'imo': 'inline label - visible with data', 'Msg Date YYYYMMDD': 'inline label - visible with data', 'Msg Time hh:mm:ss.sss': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Altitude MSL Feet': 'inline label - visible with data', 'Heading True Deg': 'inline label - visible with data', 'Position Date YYYYMMDD': 'inline label - visible with data', 'Position Time hh:mm:ss.sss': 'inline label - visible with data', 'Ground Speed Kts': 'inline label - visible with data', });
lyr_ESM_EMITER_MPAC_3.set('fieldLabels', {'Date YYYYMMDD': 'inline label - visible with data', 'Time hh:mm:ss.sss': 'inline label - visible with data', 'Emitter Intercept Time hh:mm:ss.sss': 'inline label - visible with data', 'Active Status': 'inline label - visible with data', 'Affiliation': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', });
lyr_PirateAttacks20002022Dataworld_4.set('fieldLabels', {'incident_date': 'inline label - visible with data', 'ship_name': 'inline label - visible with data', 'ship_type': 'inline label - visible with data', 'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'consequences_to_crew': 'inline label - visible with data', 'ship_status': 'inline label - visible with data', 'weapons_used': 'inline label - visible with data', 'location': 'inline label - visible with data', });
lyr_VesselDetectionReportvakeai_5.set('fieldLabels', {'timestamp': 'inline label - visible with data', 'object_class': 'inline label - visible with data', 'matching_label': 'inline label - visible with data', 'lon': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'image_source': 'no label', 'mmsi': 'inline label - visible with data', 'URL': 'header label - visible with data', });
lyr_KSLPRIDERoutePathSearoutes_6.set('fieldLabels', {'draft': 'inline label - visible with data', 'name': 'inline label - visible with data', 'imo': 'inline label - visible with data', 'speedInKts': 'inline label - visible with data', 'speed': 'inline label - visible with data', 'departure': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', });
lyr_PortsNaturalEarthData_7.set('fieldLabels', {'featurecla': 'inline label - visible with data', 'name': 'inline label - visible with data', 'website': 'header label - visible with data', });
lyr_AISMarineTrafficSouthIndianOcean_8.set('fieldLabels', {'IMO': 'inline label - visible with data', 'SHIPNAME': 'inline label - visible with data', 'COUNTRY': 'inline label - visible with data', 'NEXT_PORT_NAME': 'inline label - visible with data', 'NEXT_PORT_COUNTRY': 'inline label - visible with data', 'DESTINATION': 'inline label - visible with data', 'LON': 'inline label - visible with data', 'LAT': 'inline label - visible with data', 'ETA_UPDATED': 'inline label - visible with data', });
lyr_Earthquakesusgsgov_9.set('fieldLabels', {'title': 'inline label - visible with data', 'updated': 'inline label - visible with data', 'link_href': 'header label - visible with data', 'summary': 'inline label - visible with data', });
lyr_NoticestoMariners_10.set('fieldLabels', {'NOTICEID': 'inline label - visible with data', 'COUNTRY': 'inline label - visible with data', 'DATE': 'inline label - visible with data', 'LAT': 'inline label - visible with data', 'LONG': 'inline label - visible with data', 'TYPE': 'inline label - visible with data', 'IMO': 'inline label - visible with data', 'DESCRIPTION': 'header label - visible with data', });
lyr_FlightDataOpenskyNetwork_11.set('fieldLabels', {'icao24': 'inline label - visible with data', 'callsign': 'inline label - visible with data', 'origin_country': 'inline label - visible with data', 'long': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'on_ground': 'inline label - visible with data', 'true_track': 'inline label - visible with data', });
lyr_GEORSS26Aug24GoogleNews_12.set('fieldLabels', {'Link': 'header label - visible with data', 'Description': 'header label - visible with data', 'Channel': 'inline label - visible with data', 'PublishDate': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'long': 'inline label - visible with data', });
lyr_MilitaryGrid_100_0_16.set('fieldLabels', {'fid': 'inline label - visible with data', 'row_index': 'inline label - visible with data', 'col_index': 'inline label - visible with data', 'GZD': 'inline label - visible with data', 'MGRS': 'inline label - visible with data', });
lyr_MilitaryGrid_17.set('fieldLabels', {'fid': 'inline label - visible with data', 'row_index': 'inline label - visible with data', 'col_index': 'inline label - visible with data', 'GZD': 'inline label - visible with data', });
lyr_EEZBoundariesv8MarineRegions_18.set('fieldLabels', {'Source': 'inline label - visible with data', 'TYPE': 'inline label - visible with data', 'Boundary': 'inline label - visible with data', 'Country1': 'inline label - visible with data', 'Country2': 'inline label - visible with data', 'line_id': 'inline label - visible with data', 'TreatyDate': 'inline label - visible with data', 'LastChange': 'inline label - visible with data', });
lyr_EEZBoundariesv8MarineRegions_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});