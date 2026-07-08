var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PetaRasioJenisKelaminWilayahGunungkidul_1 = new ol.format.GeoJSON();
var features_PetaRasioJenisKelaminWilayahGunungkidul_1 = format_PetaRasioJenisKelaminWilayahGunungkidul_1.readFeatures(json_PetaRasioJenisKelaminWilayahGunungkidul_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetaRasioJenisKelaminWilayahGunungkidul_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PetaRasioJenisKelaminWilayahGunungkidul_1.addFeatures(features_PetaRasioJenisKelaminWilayahGunungkidul_1);
var lyr_PetaRasioJenisKelaminWilayahGunungkidul_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PetaRasioJenisKelaminWilayahGunungkidul_1, 
                style: style_PetaRasioJenisKelaminWilayahGunungkidul_1,
                popuplayertitle: 'Peta Rasio Jenis Kelamin Wilayah Gunungkidul',
                interactive: true,
    title: 'Peta Rasio Jenis Kelamin Wilayah Gunungkidul<br />\
    <img src="styles/legend/PetaRasioJenisKelaminWilayahGunungkidul_1_0.png" /> Sangat Rendah (94-96 Rasio)<br />\
    <img src="styles/legend/PetaRasioJenisKelaminWilayahGunungkidul_1_1.png" /> Rendah ( 96-97 Rasio)<br />\
    <img src="styles/legend/PetaRasioJenisKelaminWilayahGunungkidul_1_2.png" /> Sedang (97-98 Rasio)<br />\
    <img src="styles/legend/PetaRasioJenisKelaminWilayahGunungkidul_1_3.png" /> Tinggi (98-99 Rasio)<br />\
    <img src="styles/legend/PetaRasioJenisKelaminWilayahGunungkidul_1_4.png" /> Sangat Tinggi 99-100 Rasio)<br />' });
var format_BatasKecamatanWilayahGunungkidul_2 = new ol.format.GeoJSON();
var features_BatasKecamatanWilayahGunungkidul_2 = format_BatasKecamatanWilayahGunungkidul_2.readFeatures(json_BatasKecamatanWilayahGunungkidul_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatanWilayahGunungkidul_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatanWilayahGunungkidul_2.addFeatures(features_BatasKecamatanWilayahGunungkidul_2);
var lyr_BatasKecamatanWilayahGunungkidul_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatanWilayahGunungkidul_2, 
                style: style_BatasKecamatanWilayahGunungkidul_2,
                popuplayertitle: 'Batas Kecamatan Wilayah Gunungkidul',
                interactive: true,
                title: '<img src="styles/legend/BatasKecamatanWilayahGunungkidul_2.png" /> Batas Kecamatan Wilayah Gunungkidul'
            });
var format_NamaKecamatanWilayahGunungkidul_3 = new ol.format.GeoJSON();
var features_NamaKecamatanWilayahGunungkidul_3 = format_NamaKecamatanWilayahGunungkidul_3.readFeatures(json_NamaKecamatanWilayahGunungkidul_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NamaKecamatanWilayahGunungkidul_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NamaKecamatanWilayahGunungkidul_3.addFeatures(features_NamaKecamatanWilayahGunungkidul_3);
var lyr_NamaKecamatanWilayahGunungkidul_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NamaKecamatanWilayahGunungkidul_3, 
                style: style_NamaKecamatanWilayahGunungkidul_3,
                popuplayertitle: 'Nama Kecamatan Wilayah Gunungkidul',
                interactive: true,
                title: 'Nama Kecamatan Wilayah Gunungkidul'
            });

lyr_OSMStandard_0.setVisible(true);lyr_PetaRasioJenisKelaminWilayahGunungkidul_1.setVisible(true);lyr_BatasKecamatanWilayahGunungkidul_2.setVisible(true);lyr_NamaKecamatanWilayahGunungkidul_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PetaRasioJenisKelaminWilayahGunungkidul_1,lyr_BatasKecamatanWilayahGunungkidul_2,lyr_NamaKecamatanWilayahGunungkidul_3];
lyr_PetaRasioJenisKelaminWilayahGunungkidul_1.set('fieldAliases', {'WADMKC': 'Kecamatan', 'Join_Rasio': 'Rasio Jenis Kelamin', });
lyr_BatasKecamatanWilayahGunungkidul_2.set('fieldAliases', {'fid': 'fid', 'WADMKC': 'WADMKC', 'Join_Rasio': 'Join_Rasio', });
lyr_NamaKecamatanWilayahGunungkidul_3.set('fieldAliases', {'fid': 'fid', 'WADMKC': 'Kecamatan', 'Join_Rasio': 'Rasio Jenis Kelamin', });
lyr_PetaRasioJenisKelaminWilayahGunungkidul_1.set('fieldImages', {'WADMKC': 'Hidden', 'Join_Rasio': 'TextEdit', });
lyr_BatasKecamatanWilayahGunungkidul_2.set('fieldImages', {'fid': 'TextEdit', 'WADMKC': 'TextEdit', 'Join_Rasio': 'Hidden', });
lyr_NamaKecamatanWilayahGunungkidul_3.set('fieldImages', {'fid': 'TextEdit', 'WADMKC': 'TextEdit', 'Join_Rasio': 'TextEdit', });
lyr_PetaRasioJenisKelaminWilayahGunungkidul_1.set('fieldLabels', {'Join_Rasio': 'inline label - always visible', });
lyr_BatasKecamatanWilayahGunungkidul_2.set('fieldLabels', {'fid': 'no label', 'WADMKC': 'inline label - always visible', });
lyr_NamaKecamatanWilayahGunungkidul_3.set('fieldLabels', {'fid': 'no label', 'WADMKC': 'inline label - always visible', 'Join_Rasio': 'inline label - always visible', });
lyr_NamaKecamatanWilayahGunungkidul_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'lighten';
});