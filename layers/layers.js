var wms_layers = [];


        var lyr_Googlemaps_0 = new ol.layer.Tile({
            'title': 'Google maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_SectorescensalesPuembo2022_1 = new ol.format.GeoJSON();
var features_SectorescensalesPuembo2022_1 = format_SectorescensalesPuembo2022_1.readFeatures(json_SectorescensalesPuembo2022_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SectorescensalesPuembo2022_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SectorescensalesPuembo2022_1.addFeatures(features_SectorescensalesPuembo2022_1);
var lyr_SectorescensalesPuembo2022_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SectorescensalesPuembo2022_1, 
                style: style_SectorescensalesPuembo2022_1,
                popuplayertitle: "Sectores censales Puembo 2022",
                interactive: true,
    title: 'Sectores censales Puembo 2022<br />\
    <img src="styles/legend/SectorescensalesPuembo2022_1_0.png" /> 109 - 235<br />\
    <img src="styles/legend/SectorescensalesPuembo2022_1_1.png" /> 235 - 388<br />\
    <img src="styles/legend/SectorescensalesPuembo2022_1_2.png" /> 388 - 576<br />\
    <img src="styles/legend/SectorescensalesPuembo2022_1_3.png" /> 576 - 953<br />'
        });

lyr_Googlemaps_0.setVisible(true);lyr_SectorescensalesPuembo2022_1.setVisible(true);
var layersList = [lyr_Googlemaps_0,lyr_SectorescensalesPuembo2022_1];
lyr_SectorescensalesPuembo2022_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fcode': 'fcode', 'anio': 'anio', 'fuente': 'fuente', 'sec': 'sec', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'dpa_provin': 'dpa_provin', 'dpa_despro': 'dpa_despro', 'dpa_canton': 'dpa_canton', 'dpa_descan': 'dpa_descan', 'dpa_parroq': 'dpa_parroq', 'dpa_despar': 'dpa_despar', 'id_sector': 'id_sector', 'tot_hog': 'tot_hog', 'tot_person': 'tot_person', 'ae': 'ae', });
lyr_SectorescensalesPuembo2022_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'fcode': 'TextEdit', 'anio': 'TextEdit', 'fuente': 'TextEdit', 'sec': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'dpa_provin': 'TextEdit', 'dpa_despro': 'TextEdit', 'dpa_canton': 'TextEdit', 'dpa_descan': 'TextEdit', 'dpa_parroq': 'TextEdit', 'dpa_despar': 'TextEdit', 'id_sector': 'TextEdit', 'tot_hog': 'TextEdit', 'tot_person': 'TextEdit', 'ae': 'Range', });
lyr_SectorescensalesPuembo2022_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'fcode': 'hidden field', 'anio': 'hidden field', 'fuente': 'hidden field', 'sec': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'dpa_provin': 'header label - always visible', 'dpa_despro': 'header label - always visible', 'dpa_canton': 'header label - always visible', 'dpa_descan': 'header label - always visible', 'dpa_parroq': 'header label - always visible', 'dpa_despar': 'header label - always visible', 'id_sector': 'header label - always visible', 'tot_hog': 'header label - always visible', 'tot_person': 'header label - always visible', 'ae': 'hidden field', });
lyr_SectorescensalesPuembo2022_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});