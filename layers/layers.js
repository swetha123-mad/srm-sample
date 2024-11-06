var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_polygon_1 = new ol.format.GeoJSON();
var features_polygon_1 = format_polygon_1.readFeatures(json_polygon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polygon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polygon_1.addFeatures(features_polygon_1);
var lyr_polygon_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_polygon_1, 
                style: style_polygon_1,
                popuplayertitle: "polygon",
                interactive: true,
                title: '<img src="styles/legend/polygon_1.png" /> polygon'
            });
var format_polygonsrm_2 = new ol.format.GeoJSON();
var features_polygonsrm_2 = format_polygonsrm_2.readFeatures(json_polygonsrm_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polygonsrm_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polygonsrm_2.addFeatures(features_polygonsrm_2);
var lyr_polygonsrm_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_polygonsrm_2, 
                style: style_polygonsrm_2,
                popuplayertitle: "polygonsrm",
                interactive: true,
                title: '<img src="styles/legend/polygonsrm_2.png" /> polygonsrm'
            });
var format_line_3 = new ol.format.GeoJSON();
var features_line_3 = format_line_3.readFeatures(json_line_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_line_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_line_3.addFeatures(features_line_3);
var lyr_line_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_line_3, 
                style: style_line_3,
                popuplayertitle: "line",
                interactive: true,
                title: '<img src="styles/legend/line_3.png" /> line'
            });

lyr_OSMStandard_0.setVisible(true);lyr_polygon_1.setVisible(true);lyr_polygonsrm_2.setVisible(true);lyr_line_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_polygon_1,lyr_polygonsrm_2,lyr_line_3];
lyr_polygon_1.set('fieldAliases', {'id': 'id', 'name': 'name', 'population': 'population', 'literacy': 'literacy', });
lyr_polygonsrm_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'population': 'population', 'literacy': 'literacy', });
lyr_line_3.set('fieldAliases', {'id': 'id', });
lyr_polygon_1.set('fieldImages', {'id': '', 'name': '', 'population': '', 'literacy': '', });
lyr_polygonsrm_2.set('fieldImages', {'id': '', 'name': '', 'population': '', 'literacy': '', });
lyr_line_3.set('fieldImages', {'id': '', });
lyr_polygon_1.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'population': 'no label', 'literacy': 'no label', });
lyr_polygonsrm_2.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'population': 'no label', 'literacy': 'no label', });
lyr_line_3.set('fieldLabels', {'id': 'no label', });
lyr_line_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});